from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import json
from shapely.geometry import MultiPolygon, Point, Polygon
from slugify import slugify
import os
import urllib.parse
import uuid
import avy_config as config
from utils import convert_to_local_time


#TODO support search by lat/long (mainly for CO/BC) (lambda function?)
#TODO expired reports?
#TODO update copy?
#TODO git pull rebase on action to prevent conflicts while the script is running?

# load jinja templates
environment = Environment(loader=FileSystemLoader("tools/avy/templates/"))
index_template = environment.get_template("dem-shading-index.j2")
region_template = environment.get_template("dem-shading-region.j2")
layers_template = environment.get_template("dem-shading-layers.j2")

#TODO find/replace
aspect = config.aspect
aspect_abbr = config.aspect_abbr
danger_levels = config.danger_levels
problem_color = config.problem_color
state_info = config.state_info


def sort_directions(subset):
    """Sort random set of cardinal directions and return smallest and largest degree"""
    subset_sorted = [subset.pop()]

    match = True
    while match:
        match = False
        for i in range(len(subset)):
            if subset[i][0] == subset_sorted[-1][1]:
                match = True
                subset_sorted.append(subset.pop(i))
                break
        for i in range(len(subset)):
            if subset[i][1] == subset_sorted[0][0]:
                match = True
                subset_sorted.insert(0, subset.pop(i))
                break

    if subset_sorted[0][0] == subset_sorted[-1][1]:
        desc = "All aspects"
    else:
        start = list(filter(lambda x: aspect[x] == subset_sorted[0], aspect))[0]
        end = list(filter(lambda x: aspect[x] == subset_sorted[-1], aspect))[0]
        desc = f"{aspect_abbr[start]} to {aspect_abbr[end]} aspects"

    return (subset_sorted[0][0],subset_sorted[-1][1], desc)


def split_elv_bands(danger_rose):
    chunked_list = list()
    chunk_size = 8
    danger_rose_int = [int(x) for x in danger_rose.split(',')]

    for i in range(0, len(danger_rose_int), chunk_size):
        chunked_list.append(danger_rose_int[i:i+chunk_size])

    return chunked_list


#TODO better variable names
def find_aspect_values(list, value, aspect):
    indices = [index for index, element in enumerate(list) if element == value]
    aspect_values = [aspect[index] for index in indices]
    return aspect_values


def find_object_by_key_value(objects_list, key, value):
    for obj in objects_list:
        if obj.get(key) == value:
            return obj
    return None  # Return None if no match is found


# calculate geo center of CA areas
with open("tools/avy/avalanche-reports-raw/ca-areas.json") as fp:
    ca_areas = json.load(fp)

# dynamically group US zones by state
with open("tools/avy/avalanche-reports-raw/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through all the zones in the avalanche.org map layer
states = []
#TODO support search by lat/long
# search_point = Point((-122.27173, 41.34706))
for item in map_layer["features"]:
    # calculate center of each zone
    if item["geometry"]["type"] == "Polygon":
        centroid = Polygon(item["geometry"]["coordinates"][0]).centroid
        # print(search_point.within(Polygon(item["geometry"]["coordinates"][0]))) # check if a point is in the polygon
        lat_long = [centroid.x, centroid.y]
    elif item["geometry"]["type"] == "MultiPolygon":
        polygons = []
        for shape in item["geometry"]["coordinates"][0]:
            polygons.append(Polygon(shape))
        centroid = MultiPolygon(polygons).centroid
        lat_long = [centroid.x, centroid.y]
    else:
        print('Unknown geometry type...')

    # gather zone info
    if "CAIC" in item["properties"]["center_id"]:
        url = f"{item['properties']['link']}?lat={centroid.y}&lng={centroid.x}"
    else:
        url = item["properties"]["link"]
    zone_info = {
        "zone_id": item["id"],
        "name": item["properties"]["name"],
        "slug": f"{item['properties']['center_id']}-{item['id']}", #TODO get rid of slug and just use the id instead?
        "url": url,
        "center_id": item["properties"]["center_id"],
        "geo": lat_long,
        "published": False,
        "danger": [],
        "problems": [],
    }

    # check if the zone's state already exists and append to it if so
    found = False
    for state in states:
        if state['state'] == item["properties"]["state"]:
            state['zones'].append(zone_info)
            found = True
            break
    if not found:
        states.append({
            "state": item["properties"]["state"],
            "page": f"/avy/{item['properties']['state'].lower()}",
            "zones": [zone_info],
            "active": next(active["active"] for active in state_info if active["abbr"] == item["properties"]["state"]),
            "name": next(active["name"] for active in state_info if active["abbr"] == item["properties"]["state"]),
            "elevations": next(active["elevations"] for active in state_info if active["abbr"] == item["properties"]["state"]),
        })

# delete all DEM files in order to start fresh
dir = "source/avy"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

#TODO loop through CA areas and create DEM pages
with open("tools/avy/avalanche-reports-raw/ca-metadata.json") as fp:
    ca_metadata = json.load(fp)

areas = []
for product in ca_metadata:
    published = False
    tomorrow = False
    data = {}
    area = {}

    if os.path.isfile(f"tools/avy/avalanche-reports-raw/{product['product']['id']}.json"):
        with open(f"tools/avy/avalanche-reports-raw/{product['product']['id']}.json") as fp:
            data = json.load(fp)
            # print(product['product']['id'])

        #TODO move duplicate code as US to functions

        # timezone calculations

        # lookup area id in ca_areas
        # found_value = next((d for d in ca_areas["features"] if d.get("id") == data['area']['id']), None)
        found_value = find_object_by_key_value(ca_areas["features"], "id", data['area']['id'])
        if not found_value:
            continue #TODO figure out why the id different than the filename and hopefully remove

        published_date_time_obj, tomorrow_date_time_obj, published, tomorrow = convert_to_local_time(
            data["report"]["dateIssued"],
            found_value.get('properties')["centroid"][1],
            found_value.get('properties')["centroid"][0]
        )

    # TODO set elevations levels
    area["elevations"] = {
            "btl": (6000, 7500),
            "ntl": (7501, 9000),
            "atl": (9001, 20310),
        }

    # avy danger
    danger_rules = []
    danger_layer = ""
    area_color = 0
    if data and data["report"]["dangerRatings"] and (data["report"]["dangerRatings"][0]["ratings"]["btl"] or data["report"]["dangerRatings"][0]["ratings"]["tln"] or data["report"]["dangerRatings"][0]["ratings"]["alp"]) and area["elevations"]:
        # print(data["report"]["dangerRatings"][0]["ratings"]["btl"]["rating"]["value"],data["report"]["dangerRatings"][0]["ratings"]["tln"]["rating"]["value"],data["report"]["dangerRatings"][0]["ratings"]["alp"]["rating"]["value"])
        lower = f'a0-0e{area["elevations"].get("btl")[0]}-{area["elevations"].get("btl")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["btl"]["rating"]["value"])["color"]}'
        middle = f'a0-0e{area["elevations"].get("ntl")[0]}-{area["elevations"].get("ntl")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["tln"]["rating"]["value"])["color"]}'
        upper = f'a0-0e{area["elevations"].get("atl")[0]}-{area["elevations"].get("atl")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["alp"]["rating"]["value"])["color"]}'
        danger_rules.append({
            "id": "btl",
            "layer": lower,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['btl']['rating']['value'])['desc']} (below {area['elevations'].get('btl')[1]}')",
            "colors": [f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['btl']['rating']['value'])['color']}"]
        })
        danger_rules.append({
            "id": "ntl",
            "layer": middle,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['tln']['rating']['value'])['desc']} ({area['elevations'].get('ntl')[0]}' to {area['elevations'].get('ntl')[1]}')",
            "colors": [f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['tln']['rating']['value'])['color']}"]
        })
        # only show (above x') if == 20310
        if area['elevations'].get('atl')[1] == 20310:
            elv_range = f"above {area['elevations'].get('atl')[0]}'"
        else:
            elv_range =  f"{area['elevations'].get('atl')[0]}' to {area['elevations'].get('atl')[1]}'"
        danger_rules.append({
            "id": "atl",
            "layer": upper,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['alp']['rating']['value'])['desc']} ({elv_range})",
            "colors": [f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['alp']['rating']['value'])['color']}"]
        })
        danger_layer = f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in danger_rules)}"
        zone_color = max(danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["btl"]["rating"]["value"])["scale"], danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["tln"]["rating"]["value"])["scale"], danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["alp"]["rating"]["value"])["scale"])

    # avy problems
    problems = []
    if data["report"]["problems"] and area["elevations"]:
        for i, problem in enumerate(data["report"]["problems"]):
            lower = []
            middle = []
            upper = []
            rules = []

            for elevation in problem["data"]["elevations"]:
                # calculate start and stop
                for direction in problem["data"]["aspects"]:
                    lower.append(aspect[direction["display"].lower()])
                start, end, desc = sort_directions(lower)

                if elevation["value"] == "btl":
                    elv_band = "btl"
                    full_desc = f"{desc} (below {area['elevations'].get(elv_band)[1]}')"
                elif elevation["value"] == "tln":
                    elv_band = "ntl"
                    full_desc = f"{desc} ({area['elevations'].get(elv_band)[0]}' to {area['elevations'].get(elv_band)[1]}')"
                elif elevation["value"] == "alp":
                    # only show (above x') if == 20310
                    elv_band = "atl"
                    if area['elevations'].get(elv_band)[1] == 20310:
                        elv_range = f"above {area['elevations'].get(elv_band)[0]}'"
                    else:
                        elv_range = f"{area['elevations'].get(elv_band)[0]}' to {area['elevations'].get(elv_band)[1]}'"
                    full_desc = f"{desc} ({elv_range})"
                else:
                    continue

                rules.append({
                    "id": elv_band,
                    "layer": f'a{start}-{end}e{area["elevations"].get(elv_band)[0]}-{area["elevations"].get(elv_band)[1]}f {problem_color.get(i)}',
                    "desc": full_desc,
                    "color": f"#{problem_color.get(i)}",
                })

            problems.append({
                "name": f"{tomorrow} {problem['type']['display']}",
                "desc": f"Problem #{i+1}",
                "color": f"#{problem_color.get(i)}",
                "rules": rules,
                "layers": f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in rules)}",
                "uuid": str(uuid.uuid4()),
            })

    area["published"] = published
    area["danger"] = danger_rules
    area["problems"] = problems
    area["color"] = f"#{danger_levels[zone_color]['color']}"
    area["geo"] = found_value['properties']['centroid']
    area["name"] = "Canada zone"
    area["slug"] = data['area']['id']
    area["center_id"] = "Avalanche Canada"
    area["url"] = f"https://avalanche.ca/forecasts/{product['product']['id']}"

    layer_info = layers_template.render(
            sun_day=tomorrow,
            danger_layer=danger_layer,
            problem_layers=area["problems"],
        )

    if danger_rules:
        area["layers"] = f"a={danger_layer}&cl={urllib.parse.quote(layer_info)}"
        area["message"] = ""
    else:
        area["layers"] = f"cl={urllib.parse.quote(layer_info)}"
        if not data and not data["danger"]:
            area["message"] = f'Report not available. See <a class="no-underline fancy-link relative light-red" href="{area["url"]}">{area["center_id"]}</a> for more information.'

    areas.append(area)

content = region_template.render(
    page="Canada",
    sun_day=tomorrow,
    zones=areas,
    states=states,
)

# create Canada DEM page
with open(f"source/avy/canada.md", mode="w", encoding="utf-8") as message:
    message.write(content)
    print(f"... wrote source/avy/canada.md")

# loop through states and create DEM state pages
for state in states:
    if state["active"]:
        for zone in state["zones"]:
            published = False
            tomorrow = False
            data = {}
            if state["state"] == "UT":
                if os.path.isfile(f"tools/avy/avalanche-reports-raw/{slugify(zone['name'])}.json"):
                    with open(f"tools/avy/avalanche-reports-raw/{slugify(zone['name'])}.json") as fp:
                        data = json.load(fp)

                    #TODO figure out what exactly [advisories] is
                    data = data["advisories"][0]["advisory"]

                    # timezone calculations
                    utc = datetime.fromtimestamp(int(data["date_issued_timestamp"]))
                    published_date_time_obj, tomorrow_date_time_obj, published, tomorrow = convert_to_local_time(
                        utc,
                        zone["geo"][1],
                        zone["geo"][0]
                    )
            else:
                if os.path.isfile(f"tools/avy/avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json"):
                    with open(f"tools/avy/avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json") as fp:
                        data = json.load(fp)

                    # timezone calculations
                    published_date_time_obj, tomorrow_date_time_obj, published, tomorrow = convert_to_local_time(
                        data["published_time"],
                        zone["geo"][1],
                        zone["geo"][0]
                    )

            # use zone elevation profile if exists, else use the state level elevation profile
            zone["elevations"] = state["elevations"].get(zone["zone_id"], state["elevations"].get(0))

            # avy danger
            danger_rules = []
            danger_layer = ""
            zone_color = 0
            if state["state"] == "UT":
                # Each element of the rose array corresponds to a position on the rose,
                # starting from the highest elevation, northern aspect and proceeds clockwise.
                # The first position of the array, array[0] is the inner-most (highest) elevation segment on the N aspect.
                # The next position, array[1] is NE and so on.
                # Ex. the position for S aspect at the lowest elevation is array[20].
                # https://utahavalanchecenter.org/docs/api/forecast

                if data and data["overall_danger_rating"] != "None" and zone["elevations"]:
                    chunked_list = split_elv_bands(data["overall_danger_rose"]) #TODO better variable name than chunk?

                    # only show (above x') if == 20310
                    if zone['elevations'].get('atl')[1] == 20310:
                        elv_range = f"above {zone['elevations'].get('atl')[0]}'"
                    else:
                        elv_range =  f"{zone['elevations'].get('atl')[0]}' to {zone['elevations'].get('atl')[1]}'"

                    # handle each elevation bands danger rose
                    for index, chunk in enumerate(chunked_list):
                        danger_index = f"utah{chunk[0]}"
                        are_all_same = all(x == chunk[0] for x in chunk)

                        if are_all_same: # single color danger rose
                            danger_index = f"utah{chunk[0]}"
                            layer_colors = [f"#{danger_levels.get(danger_index)['color']}"]
                            if index == 0:
                                layer_rules = [f'a0-0e{zone["elevations"].get("btl")[0]}-{zone["elevations"].get("btl")[1]}f {danger_levels.get(danger_index)["color"]}']
                                layer_desc = f"{danger_levels.get(danger_index)['desc']} (below {zone['elevations'].get('btl')[1]}')"
                            elif index == 1:
                                layer_rules = [f'a0-0e{zone["elevations"].get("ntl")[0]}-{zone["elevations"].get("ntl")[1]}f {danger_levels.get(danger_index)["color"]}']
                                layer_desc = f"{danger_levels.get(danger_index)['desc']} ({zone['elevations'].get('ntl')[0]}' to {zone['elevations'].get('ntl')[1]}')"
                            else:
                                layer_rules = [f'a0-0e{zone["elevations"].get("atl")[0]}-{zone["elevations"].get("atl")[1]}f {danger_levels.get(danger_index)["color"]}']
                                layer_desc = f"{danger_levels.get(danger_index)['desc']} ({elv_range})"
                        else: # multi color danger rose
                            layer_color_indexes = sorted(set(chunk))
                            min_danger_index = f"utah{layer_color_indexes[0]}"
                            max_danger_index = f"utah{layer_color_indexes[-1]}"
                            layer_colors = []
                            layer_rules = []
                            for color in layer_color_indexes:
                                layer_colors.append(f"#{danger_levels.get(f'utah{color}')['color']}")

                            if index == 0:
                                elv_band = "btl"
                                # split chunk per color to calculate aspect values for each
                                for danger_index in layer_color_indexes:
                                    split_list = [danger_index if item == danger_index else 0 for item in chunk]
                                    chunk_rose = find_aspect_values(chunk, danger_index, aspect)
                                    start, end, desc = sort_directions(chunk_rose)
                                    layer_rules.append(f'a{start}-{end}e{zone["elevations"].get("btl")[0]}-{zone["elevations"].get("btl")[1]}f {danger_levels.get(f"utah{danger_index}")["color"]}')
                                layer_desc = f"{danger_levels.get(min_danger_index)['shortdesc']} to {danger_levels.get(max_danger_index)['shortdesc']} danger (below {zone['elevations'].get('btl')[1]}')"
                            elif index == 1:
                                elv_band = "ntl"
                                # split chunk per color to calculate aspect values for each
                                for danger_index in layer_color_indexes:
                                    split_list = [danger_index if item == danger_index else 0 for item in chunk]
                                    chunk_rose = find_aspect_values(chunk, danger_index, aspect)
                                    start, end, desc = sort_directions(chunk_rose)
                                    layer_rules.append(f'a{start}-{end}e{zone["elevations"].get("ntl")[0]}-{zone["elevations"].get("ntl")[1]}f {danger_levels.get(f"utah{danger_index}")["color"]}')
                                layer_desc = f"{danger_levels.get(min_danger_index)['shortdesc']} to {danger_levels.get(max_danger_index)['shortdesc']} danger ({zone['elevations'].get('ntl')[0]}' to {zone['elevations'].get('ntl')[1]}')"
                            else:
                                elv_band = "atl"
                                # split chunk per color to calculate aspect values for each
                                for danger_index in layer_color_indexes:
                                    split_list = [danger_index if item == danger_index else 0 for item in chunk]
                                    chunk_rose = find_aspect_values(chunk, danger_index, aspect)
                                    start, end, desc = sort_directions(chunk_rose)
                                    layer_rules.append(f'a{start}-{end}e{zone["elevations"].get("atl")[0]}-{zone["elevations"].get("atl")[1]}f {danger_levels.get(f"utah{danger_index}")["color"]}')
                                layer_desc = f"{danger_levels.get(min_danger_index)['shortdesc']} to {danger_levels.get(max_danger_index)['shortdesc']} danger ({elv_range})"

                        danger_rules.append({
                            "id": elv_band,
                            "layer": layer_rules,
                            "desc": layer_desc,
                            "colors": layer_colors
                        })

                    danger_layer = f"sc_{'p'.join('p'.join(layer.replace(' ', 'c') for layer in x['layer']) for x in danger_rules)}"
                    zone_color = f"utah{max(max(sublist) for sublist in chunked_list)}"
            else:
                if data and data["danger"] and (data["danger"][0]["lower"] or data["danger"][0]["middle"] or data["danger"][0]["upper"]) and zone["elevations"]:
                    #TODO clean up handling of nulls
                    if data["danger"][0]["lower"] is None:
                        data["danger"][0]["lower"] = 0
                    if data["danger"][0]["middle"] is None:
                        data["danger"][0]["middle"] = 0
                    if data["danger"][0]["upper"] is None:
                        data["danger"][0]["upper"] = 0
                    lower = f'a0-0e{zone["elevations"].get("btl")[0]}-{zone["elevations"].get("btl")[1]}f {danger_levels.get(data["danger"][0]["lower"])["color"]}'
                    middle = f'a0-0e{zone["elevations"].get("ntl")[0]}-{zone["elevations"].get("ntl")[1]}f {danger_levels.get(data["danger"][0]["middle"])["color"]}'
                    upper = f'a0-0e{zone["elevations"].get("atl")[0]}-{zone["elevations"].get("atl")[1]}f {danger_levels.get(data["danger"][0]["upper"])["color"]}'
                    danger_rules.append({
                        "id": "btl",
                        "layer": lower,
                        "desc": f"{danger_levels.get(data['danger'][0]['lower'])['desc']} (below {zone['elevations'].get('btl')[1]}')",
                        "colors": [f"#{danger_levels.get(data['danger'][0]['lower'])['color']}"]
                    })
                    danger_rules.append({
                        "id": "ntl",
                        "layer": middle,
                        "desc": f"{danger_levels.get(data['danger'][0]['middle'])['desc']} ({zone['elevations'].get('ntl')[0]}' to {zone['elevations'].get('ntl')[1]}')",
                        "colors": [f"#{danger_levels.get(data['danger'][0]['middle'])['color']}"]
                    })
                    # only show (above x') if == 20310
                    if zone['elevations'].get('atl')[1] == 20310:
                        elv_range = f"above {zone['elevations'].get('atl')[0]}'"
                    else:
                        elv_range =  f"{zone['elevations'].get('atl')[0]}' to {zone['elevations'].get('atl')[1]}'"
                    danger_rules.append({
                        "id": "atl",
                        "layer": upper,
                        "desc": f"{danger_levels.get(data['danger'][0]['upper'])['desc']} ({elv_range})",
                        "colors": [f"#{danger_levels.get(data['danger'][0]['upper'])['color']}"]
                    })
                    danger_layer = f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in danger_rules)}"
                    zone_color = max(data["danger"][0]["lower"], data["danger"][0]["middle"], data["danger"][0]["upper"])

            # avy problems
            problems = []
            if state["state"] == "UT":
                for i in range(3):
                    if f"avalanche_problem_{i}" in data:
                        problem_rose = []
                        rules = []

                        chunked_list = split_elv_bands(data[f"danger_rose_{i}"])
                        problem_name = data[f"avalanche_problem_{i}"]
                        for index, chunk in enumerate(chunked_list):
                            chunk_rose = find_aspect_values(chunk, 16, aspect)
                            if chunk_rose:
                                start, end, desc = sort_directions(chunk_rose)
                                if index == 2:
                                    layer = f'a{start}-{end}e{zone["elevations"].get("btl")[0]}-{zone["elevations"].get("btl")[1]}f {problem_color.get(i)}'
                                    rules.append({
                                        "id": "btl",
                                        "layer": layer,
                                        "desc": f"{desc} (below {zone['elevations'].get('btl')[1]}')",
                                        "color": f"#{problem_color.get(i)}",
                                    })
                                elif index == 1:
                                    layer = f'a{start}-{end}e{zone["elevations"].get("ntl")[0]}-{zone["elevations"].get("ntl")[1]}f {problem_color.get(i)}'
                                    rules.append({
                                        "id": "ntl",
                                        "layer": layer,
                                        "desc": f"{desc} ({zone['elevations'].get('ntl')[0]}' to {zone['elevations'].get('ntl')[1]}')",
                                        "color": f"#{problem_color.get(i)}",
                                    })
                                else:
                                    layer = f'a{start}-{end}e{zone["elevations"].get("atl")[0]}-{zone["elevations"].get("atl")[1]}f {problem_color.get(i)}'
                                    # only show (above x') if == 20310
                                    if zone['elevations'].get('atl')[1] == 20310:
                                        elv_range = f"above {zone['elevations'].get('atl')[0]}'"
                                    else:
                                        elv_range = f"{zone['elevations'].get('atl')[0]}' to {zone['elevations'].get('atl')[1]}'"
                                    rules.append({
                                        "id": "atl",
                                        "layer": layer,
                                        "desc": f"{desc} ({elv_range})",
                                        "color": f"#{problem_color.get(i)}",
                                    })

                        problems.append({
                            "name": f"{tomorrow} {problem_name}",
                            "desc": f"Problem #{i+1}",
                            "color": f"#{problem_color.get(i)}",
                            "rules": rules[::-1],
                            "layers": f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in rules)}",
                            "uuid": str(uuid.uuid4()),
                        })
            else:
                if data and zone["elevations"]:
                    for i, problem in enumerate(data["forecast_avalanche_problems"]):
                        lower = []
                        middle = []
                        upper = []

                        for direction in problem["location"]:
                            # split to upper/middle/lower
                            if direction.split()[1] == "lower":
                                    lower.append(aspect[direction.split()[0]])
                            elif direction.split()[1] == "middle":
                                    middle.append(aspect[direction.split()[0]])
                            elif direction.split()[1] == "upper":
                                    upper.append(aspect[direction.split()[0]])

                        # calculate start and stop
                        rules = []
                        if lower:
                            start, end, desc = sort_directions(lower)
                            lower_layer = f'a{start}-{end}e{zone["elevations"].get("btl")[0]}-{zone["elevations"].get("btl")[1]}f {problem_color.get(i)}'
                            rules.append({
                                "id": "btl",
                                "layer": lower_layer,
                                "desc": f"{desc} (below {zone['elevations'].get('btl')[1]}')",
                                "color": f"#{problem_color.get(i)}",
                            })
                        if middle:
                            start, end, desc = sort_directions(middle)
                            middle_layer = f'a{start}-{end}e{zone["elevations"].get("ntl")[0]}-{zone["elevations"].get("ntl")[1]}f {problem_color.get(i)}'
                            rules.append({
                                "id": "ntl",
                                "layer": middle_layer,
                                "desc": f"{desc} ({zone['elevations'].get('ntl')[0]}' to {zone['elevations'].get('ntl')[1]}')",
                                "color": f"#{problem_color.get(i)}",
                            })
                        if upper:
                            start, end, desc = sort_directions(upper)
                            upper_layer = f'a{start}-{end}e{zone["elevations"].get("atl")[0]}-{zone["elevations"].get("atl")[1]}f {problem_color.get(i)}'
                            # only show (above x') if == 20310
                            if zone['elevations'].get('atl')[1] == 20310:
                                elv_range = f"above {zone['elevations'].get('atl')[0]}'"
                            else:
                                elv_range = f"{zone['elevations'].get('atl')[0]}' to {zone['elevations'].get('atl')[1]}'"
                            rules.append({
                                "id": "atl",
                                "layer": upper_layer,
                                "desc": f"{desc} ({elv_range})",
                                "color": f"#{problem_color.get(i)}",
                            })

                        problems.append({
                            "name": f"{tomorrow} {problem['name']}",
                            "desc": f"Problem #{i+1}",
                            "color": f"#{problem_color.get(i)}",
                            "rules": rules,
                            "layers": f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in rules)}",
                            "uuid": str(uuid.uuid4()),
                        })

            zone["published"] = published
            zone["danger"] = danger_rules
            zone["problems"] = problems
            zone["color"] = f"#{danger_levels[zone_color]['color']}"

            layer_info = layers_template.render(
                    sun_day=tomorrow,
                    danger_layer=danger_layer,
                    problem_layers=zone["problems"],
                )

            if danger_rules:
                zone["layers"] = f"a={danger_layer}&cl={urllib.parse.quote(layer_info)}"
                zone["message"] = ""
            else:
                zone["layers"] = f"cl={urllib.parse.quote(layer_info)}"
                if data and (("danger" in data and data["danger"]) or ("overall_danger_rating" in data and data["overall_danger_rating"] != "None")):
                    if state["elevations"]:
                        zone["message"] = f'Report not available. See <a class="no-underline fancy-link relative light-red" href="{zone["url"]}">{zone["center_id"]}</a> for more information.'
                    else:
                        zone["message"] = f'Coming soon. See <a class="no-underline fancy-link relative light-red" href="{zone["url"]}">{zone["center_id"]}</a> for more information.'
                else:
                    zone["message"] = f'Report not available. See <a class="no-underline fancy-link relative light-red" href="{zone["url"]}">{zone["center_id"]}</a> for more information.'

        content = region_template.render(
                page=state["name"],
                sun_day=tomorrow,
                zones=state["zones"],
                states=states,
            )

        # create state DEM page
        with open(f"source{state['page']}.md", mode="w", encoding="utf-8") as message:
                message.write(content)
                print(f"... wrote source{state['page']}.md")

# create index DEM page
with open('source/avy/index.md', mode="w", encoding="utf-8") as message:
        message.write(index_template.render(states=sorted(states, key=lambda d: d['name']), areas=areas))
        print(f"... wrote source/avy/index.md")
