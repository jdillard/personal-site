import azely
from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import json
from shapely.geometry import MultiPolygon, Polygon
from slugify import slugify
import os
import urllib.parse
import uuid
from datetime import datetime

import time
import requests
from requests.exceptions import HTTPError

#TODO combine with other NWAC script to reduce server load
#       - https://github.com/jdillard/personal-site/blob/059d7a18f40a729626026ea6ec9185c1a3b92f52/.github/workflows/build-avalanche-reports.yml
#       - script to grab all json, but don't save them. avalanche.py uses local json. caltopo-layers.py uses local json.
#TODO support search by lat/long (for CO/BC)
#TODO expired reports?
#TODO update copy
#TODO update url hash without modifying history

# load jinja templates
environment = Environment(loader=FileSystemLoader("templates/"))
index_template = environment.get_template("dem-shading-index.j2")
region_template = environment.get_template("dem-shading-region.j2")
layers_template = environment.get_template("dem-shading-layers.j2")

# lower and upper degrees for each cardinal direction
aspect = {
    "north": (339, 23),
    "northeast": (23, 68),
    "east": (68, 113),
    "southeast": (113, 158),
    "south": (158, 203),
    "southwest": (203, 248),
    "west": (248, 293),
    "northwest": (293, 339),
}

# abbreviation for each cardinal direction
aspect_abbr = {
    "north": "N",
    "northeast": "NE",
    "east": "E",
    "southeast": "SE",
    "south": "S",
    "southwest": "SW",
    "west": "W",
    "northwest": "NW",
}

# danger level color codes
danger_levels = {
    0: {"color": "939598", "desc": "No rating"},
    1: {"color": "50b848", "desc": "Low danger"},
    2: {"color": "fff200", "desc": "Moderate danger"},
    3: {"color": "f7941e", "desc": "Considerable danger"},
    4: {"color": "ed1c24", "desc": "High danger"},
    5: {"color": "231f20", "desc": "Extreme danger"},
}

# problems color codes
problem_color = {
    0: "A200FF",
    1: "0000FF",
    2: "009AFF",
}

# limit the states that are published (active True/False)
state_info = [
    {
        "abbr": "AK",
        "name": "Alaska",
        "elevations": {
            0: {
                "lower": (0, 4400),
                "middle": (4401, 6100),
                "upper": (6101, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "AZ",
        "name": "Arizona",
        "elevations": {
            0: {
                "lower": (0, 9700),
                "middle": (9701, 11500),
                "upper": (11501, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "CA",
        "name": "California",
        "elevations": {
            0: {
                "lower": (0, 6200),
                "middle": (6201, 8700),
                "upper": (8701, 20310),
            },
            128: {
                "lower": (0, 7800),
                "middle": (7801, 10000),
                "upper": (10001, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "CO",
        "name": "Colorado",
        "elevations": {
            0: {
                "lower": (0, 9500),
                "middle": (9501, 11500),
                "upper": (11501, 20310),
            },
        },
        "active": False,
    },
    {
        "abbr": "ID",
        "name": "Idaho",
        "elevations": {
            0: {},
            149: {}, #TODO fill in
            272: {
                "lower": (0, 4500),
                "middle": (4501, 5500),
                "upper": (5501, 20310),
            },
            153: {
                "lower": (0, 6500),
                "middle": (6501, 7500),
                "upper": (7501, 20310),
            },
            717: {
                "lower": (0, 7500),
                "middle": (7501, 8500),
                "upper": (8501, 20310),
            },
            714: {
                "lower": (0, 7500),
                "middle": (7501, 9500),
                "upper": (9501, 20310),
            },
            716: {
                "lower": (0, 7500),
                "middle": (7501, 9000),
                "upper": (9001, 20310),
            },
            716: {
                "lower": (0, 6500),
                "middle": (6501, 8500),
                "upper": (8501, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "MT",
        "name": "Montana",
        "elevations": {
            0: {
                "lower": (0, 4400),
                "middle": (4401, 6100),
                "upper": (6101, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "NH",
        "name": "New Hampshire",
        "elevations": {
            0: {
                "lower": (0, 3000),
                "middle": (3001, 5100),
                "upper": (5101, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "NM",
        "name": "New Mexico",
        "elevations": {
            0: {
                "lower": (0, 9500),
                "middle": (9501, 11500),
                "upper": (11501, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "OR",
        "name": "Oregon",
        "elevations": {
            0: {
                "lower": (0, 4000),
                "middle": (4001, 5000),
                "upper": (5001, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "UT",
        "name": "Utah",
        "elevations": {},
        "active": True,
    },
    {
        "abbr":"WA",
        "name": "Washington",
        "elevations": {
            0: {
                "lower": (0, 3900),
                "middle": (3901, 4850),
                "upper": (4851, 20310),
            },
        },
        "active": True,
    },
    {
        "abbr": "WY",
        "name": "Wyoming",
        "elevations": {
            0: {},
            1331: {
                "lower": (0, 7501),
                "middle": (7501, 8500),
                "upper": (8501, 20310),
            },
            1329: {
                "lower": (6000, 7500),
                "middle": (7501, 9000),
                "upper": (9001, 20310),
            },
            1330: {
                "lower": (6000, 7500),
                "middle": (7501, 9000),
                "upper": (9001, 10500),
            },
        },
        "active": True,
    },
]


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

# dynamically group zones by state
with open("avalanche-reports-raw/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through all the zones in the avalanche.org map layer
states = []
if os.path.isfile("user.toml"):
    os.remove("user.toml")
toml = open("user.toml", "a")
for item in map_layer["features"]:
    # calculate center of each zone
    if item["geometry"]["type"] == "Polygon":
        centroid = Polygon(item["geometry"]["coordinates"][0]).centroid
        lat_long = [centroid.x, centroid.y]
    elif item["geometry"]["type"] == "MultiPolygon":
        polygons = []
        for shape in item["geometry"]["coordinates"][0]:
            polygons.append(Polygon(shape))
        centroid = MultiPolygon(polygons).centroid
        lat_long = [centroid.x, centroid.y]
    else:
        print('Unknown geometry type...')

    # add each zone location to user.toml
    toml.write(f"[{item['properties']['center_id']}-{item['id']}]\n")
    toml.write(f"name = \"{item['properties']['name']}\"\n")
    toml.write(f"longitude = \"{lat_long[0]}\"\n")
    toml.write(f"latitude = \"{lat_long[1]}\"\n\n")

    # gather zone info
    zone_info = {
        "zone_id": item["id"],
        "name": item["properties"]["name"],
        "slug": slugify(item["properties"]["name"]),
        "url": item["properties"]["link"],
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
toml.close()

# delete all DEM files in order to start fresh
dir = "source/avy"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

# loop through states and create DEM state pages
for state in states:
    if state["active"]:
        for zone in state["zones"]:
            published = False
            tomorrow = False
            data = {}
            if os.path.isfile(f"avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json"):
                with open(f"avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json") as fp:
                    data = json.load(fp)

                published_date_time_obj = datetime.strptime(data["published_time"], '%Y-%m-%dT%H:%M:%S+00:00') - timedelta(hours=7, minutes=0)
                tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)

                published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
                tomorrow = tomorrow_date_time_obj.strftime("%Y-%m-%d")

            # use zone elevation profile if exists, else use the state level elevation profile
            zone["elevations"] = state["elevations"].get(zone["zone_id"], state["elevations"].get(0))

            # avy danger
            danger_rules = []
            danger_layer = ""
            zone_color = 0
            if data and data["danger"] and (data["danger"][0]["lower"] or data["danger"][0]["middle"] or data["danger"][0]["upper"]) and zone["elevations"]:
                #TODO clean up handling of nulls
                if data["danger"][0]["lower"] is None:
                    data["danger"][0]["lower"] = 0
                if data["danger"][0]["middle"] is None:
                    data["danger"][0]["middle"] = 0
                if data["danger"][0]["upper"] is None:
                    data["danger"][0]["upper"] = 0
                lower = f'a0-0e{zone["elevations"].get("lower")[0]}-{zone["elevations"].get("lower")[1]}f {danger_levels.get(data["danger"][0]["lower"])["color"]}'
                middle = f'a0-0e{zone["elevations"].get("middle")[0]}-{zone["elevations"].get("middle")[1]}f {danger_levels.get(data["danger"][0]["middle"])["color"]}'
                upper = f'a0-0e{zone["elevations"].get("upper")[0]}-{zone["elevations"].get("upper")[1]}f {danger_levels.get(data["danger"][0]["upper"])["color"]}'
                danger_rules.append({
                    "layer": lower,
                    "desc": f"{danger_levels.get(data['danger'][0]['lower'])['desc']} (below {zone['elevations'].get('lower')[1]}')",
                    "color": f"#{danger_levels.get(data['danger'][0]['lower'])['color']}"
                })
                danger_rules.append({
                    "layer": middle,
                    "desc": f"{danger_levels.get(data['danger'][0]['middle'])['desc']} ({zone['elevations'].get('middle')[0]}' to {zone['elevations'].get('middle')[1]}')",
                    "color": f"#{danger_levels.get(data['danger'][0]['middle'])['color']}"
                })
                # only show (above x') if == 20310
                if zone['elevations'].get('upper')[1] == 20310:
                    elv_range = f"above {zone['elevations'].get('upper')[0]}'"
                else:
                    elv_range =  f"{zone['elevations'].get('upper')[0]}' to {zone['elevations'].get('upper')[1]}'"
                danger_rules.append({
                    "layer": upper,
                    "desc": f"{danger_levels.get(data['danger'][0]['upper'])['desc']} ({elv_range})",
                    "color": f"#{danger_levels.get(data['danger'][0]['upper'])['color']}"
                })
                danger_layer = f"sc_{'p'.join(x['layer'].replace(' ', 'c') for x in danger_rules)}"
                zone_color = max(data["danger"][0]["lower"], data["danger"][0]["middle"], data["danger"][0]["upper"])

            # avy problems
            problems = []
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
                        lower_layer = f'a{start}-{end}e{zone["elevations"].get("lower")[0]}-{zone["elevations"].get("lower")[1]}f {problem_color.get(i)}'
                        rules.append({
                            "layer": lower_layer,
                            "desc": f"{desc} (below {zone['elevations'].get('lower')[1]}')",
                            "color": f"#{problem_color.get(i)}",
                        })
                    if middle:
                        start, end, desc = sort_directions(middle)
                        middle_layer = f'a{start}-{end}e{zone["elevations"].get("middle")[0]}-{zone["elevations"].get("middle")[1]}f {problem_color.get(i)}'
                        rules.append({
                            "layer": middle_layer,
                            "desc": f"{desc} ({zone['elevations'].get('middle')[0]}' to {zone['elevations'].get('middle')[1]}')",
                            "color": f"#{problem_color.get(i)}",
                        })
                    if upper:
                        start, end, desc = sort_directions(upper)
                        upper_layer = f'a{start}-{end}e{zone["elevations"].get("upper")[0]}-{zone["elevations"].get("upper")[1]}f {problem_color.get(i)}'
                        # only show (above x') if == 20310
                        if zone['elevations'].get('upper')[1] == 20310:
                            elv_range = f"above {zone['elevations'].get('upper')[0]}'"
                        else:
                            elv_range = f"{zone['elevations'].get('upper')[0]}' to {zone['elevations'].get('upper')[1]}'"
                        rules.append({
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

            # calculate sunlight angles
            if not tomorrow:
                tomorrow = datetime.today().strftime('%Y-%m-%d')
            location = f"user:{zone['center_id']}-{zone['zone_id']}"
            df = azely.compute('Sun', location, tomorrow)
            df1=df.query("el > 0.5") # only when the sun is above the horizon

            # format sun angle table
            zone["hillshading"] = []
            for index, row in df1.iloc[::9, :2].iterrows(): # grab every 9th row and the first two columns
                zone["hillshading"].append({
                    "time": f"{tomorrow} {index.strftime('%I:%M%p')} Shade",
                    "lighting": f"{round(row['az'])} by {round(row['el'])}",
                    "layer": f"rb_m{round(row['az'])}z{round(row['el'])}",
                    "uuid": str(uuid.uuid4()),
                })

            layer_info = layers_template.render(
                    sun_day=tomorrow,
                    danger_layer=danger_layer,
                    shade_layers=[zone["hillshading"][1],zone["hillshading"][int(len(zone["hillshading"])/2)-1],zone["hillshading"][-3]],
                    problem_layers=zone["problems"],
                )

            if danger_rules:
                zone["layers"] = f"a={danger_layer}&cl={urllib.parse.quote(layer_info)}"
                zone["message"] = ""
            else:
                zone["layers"] = f"cl={urllib.parse.quote(layer_info)}"
                if data and data["danger"]:
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
        message.write(index_template.render(states=states))
        print(f"... wrote source/avy/index.md")
