import azely
from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import json
from shapely.geometry import MultiPolygon, Point, Polygon
from slugify import slugify
import os
import urllib.parse
import uuid
import dateutil.parser
from zoneinfo import ZoneInfo
from timezonefinder import TimezoneFinder
import toml
from astropy.time import Time
from astropy.coordinates import get_sun, AltAz, EarthLocation
import astropy.units as u

#TODO support search by lat/long (mainly for CO/BC) (lambda function?)
#TODO expired reports?
#TODO update copy?
#TODO git pull rebase on action to prevent conflicts while the script is running?

# load jinja templates
environment = Environment(loader=FileSystemLoader("templates/"))
index_template = environment.get_template("dem-shading-index.j2")
region_template = environment.get_template("dem-shading-region.j2")
layers_template = environment.get_template("dem-shading-layers.j2")

tf = TimezoneFinder()

# lower and upper degrees for each cardinal direction
aspect = {
    "north": (339, 23),
    "northeast": (23, 68),
    "east": (68, 113),
    "southeast": (113, 158),
    "south": (158, 203),
    "s": (158, 203),
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
    "earlyseason": {"scale": 0, "color": "939598", "desc": "Early season"},
    "spring": {"scale": 0, "color": "939598", "desc": "Spring Conditions"},
    "norating": {"scale": 0, "color": "939598", "desc": "No rating"},
    "noforecast": {"scale": 0, "color": "939598", "desc": "No forecast"},
    "low": {"scale": 1, "color": "50b848", "desc": "Low danger"},
    "moderate": {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    "considerable": {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    "high": {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    0: {"scale": 0, "color": "939598", "desc": "No rating"},
    1: {"scale": 1, "color": "50b848", "desc": "Low danger"},
    2: {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    3: {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    4: {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    5: {"scale": 5, "color": "231f20", "desc": "Extreme danger"},
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
        "active": True,
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


# calculate geo center of CA areas
with open("avalanche-reports-raw/ca-areas.json") as fp:
    ca_areas = json.load(fp)

toml_data_ca = {}
for area in ca_areas["features"]:
    # add each zone location to user.toml
    toml_data_ca[area['id']] = {
        "name": area['id'],
        "longitude": area['properties']['centroid'][0], #TODO confirm correct order
        "latitude": area['properties']['centroid'][1],
    }

# dynamically group US zones by state
with open("avalanche-reports-raw/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through all the zones in the avalanche.org map layer
states = []
toml_data = {}
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

    # add each zone location to user.toml
    toml_data[f"{item['properties']['center_id']}-{item['id']}"] = {
        "name": item['properties']['name'],
        "longitude": lat_long[0],
        "latitude": lat_long[1],
    }

    # gather zone info
    #TODO get rid of slug and just use the id instead?
    zone_info = {
        "zone_id": item["id"],
        "name": item["properties"]["name"],
        "slug": f"{item['properties']['center_id']}-{item['id']}",
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

combined_data = {**toml_data, **toml_data_ca}
with open("user.toml", "w") as toml_file:
    toml.dump(combined_data, toml_file)

# delete all DEM files in order to start fresh
dir = "source/avy"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

#TODO loop through CA areas and create DEM pages
with open("avalanche-reports-raw/ca-metadata.json") as fp:
    ca_metadata = json.load(fp)

def find_object_by_key_value(objects_list, key, value):
    for obj in objects_list:
        if obj.get(key) == value:
            return obj
    return None  # Return None if no match is found
areas = []
for product in ca_metadata:
    published = False
    tomorrow = False
    data = {}
    area = {}
    if os.path.isfile(f"avalanche-reports-raw/{product['product']['id']}.json"):
        with open(f"avalanche-reports-raw/{product['product']['id']}.json") as fp:
            data = json.load(fp)
            print(product['product']['id'])

        #TODO move duplicate code as US to functions

        # timezone calculations

        # lookup area id in ca_areas
        # found_value = next((d for d in ca_areas["features"] if d.get("id") == data['area']['id']), None)
        found_value = find_object_by_key_value(ca_areas["features"], "id", data['area']['id'])
        if not found_value:
            continue #TODO figure out why the id different than the filename and hopefully remove
        tz_name = tf.timezone_at(lat=found_value.get('properties')["centroid"][1], lng=found_value.get('properties')["centroid"][0])
        utc = dateutil.parser.parse(data["report"]["dateIssued"])
        utc = utc.replace(tzinfo=ZoneInfo('UTC'))
        print(utc)

        published_date_time_obj = utc.astimezone(ZoneInfo(tz_name))
        tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)

        published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
        tomorrow = tomorrow_date_time_obj.strftime("%Y-%m-%d")

    # TODO set elevations levels
    area["elevations"] = {
            "lower": (6000, 7500),
            "middle": (7501, 9000),
            "upper": (9001, 10500),
        }

    # avy danger
    danger_rules = []
    danger_layer = ""
    area_color = 0
    if data and data["report"]["dangerRatings"] and (data["report"]["dangerRatings"][0]["ratings"]["btl"] or data["report"]["dangerRatings"][0]["ratings"]["tln"] or data["report"]["dangerRatings"][0]["ratings"]["alp"]) and area["elevations"]:
        # print(data["report"]["dangerRatings"][0]["ratings"]["btl"]["rating"]["value"],data["report"]["dangerRatings"][0]["ratings"]["tln"]["rating"]["value"],data["report"]["dangerRatings"][0]["ratings"]["alp"]["rating"]["value"])
        lower = f'a0-0e{area["elevations"].get("lower")[0]}-{area["elevations"].get("lower")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["btl"]["rating"]["value"])["color"]}'
        middle = f'a0-0e{area["elevations"].get("middle")[0]}-{area["elevations"].get("middle")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["tln"]["rating"]["value"])["color"]}'
        upper = f'a0-0e{area["elevations"].get("upper")[0]}-{area["elevations"].get("upper")[1]}f {danger_levels.get(data["report"]["dangerRatings"][0]["ratings"]["alp"]["rating"]["value"])["color"]}'
        danger_rules.append({
            "layer": lower,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['btl']['rating']['value'])['desc']} (below {area['elevations'].get('lower')[1]}')",
            "color": f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['btl']['rating']['value'])['color']}"
        })
        danger_rules.append({
            "layer": middle,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['tln']['rating']['value'])['desc']} ({area['elevations'].get('middle')[0]}' to {area['elevations'].get('middle')[1]}')",
            "color": f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['tln']['rating']['value'])['color']}"
        })
        # only show (above x') if == 20310
        if area['elevations'].get('upper')[1] == 20310:
            elv_range = f"above {area['elevations'].get('upper')[0]}'"
        else:
            elv_range =  f"{area['elevations'].get('upper')[0]}' to {area['elevations'].get('upper')[1]}'"
        danger_rules.append({
            "layer": upper,
            "desc": f"{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['alp']['rating']['value'])['desc']} ({elv_range})",
            "color": f"#{danger_levels.get(data['report']['dangerRatings'][0]['ratings']['alp']['rating']['value'])['color']}"
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
                    elv_band = "lower"
                    full_desc = f"{desc} (below {area['elevations'].get('lower')[1]}')"
                elif elevation["value"] == "tln":
                    elv_band = "middle"
                    full_desc = f"{desc} ({area['elevations'].get('middle')[0]}' to {area['elevations'].get('middle')[1]}')"
                elif elevation["value"] == "alp":
                    # only show (above x') if == 20310
                    elv_band = "upper"
                    if area['elevations'].get('upper')[1] == 20310:
                        elv_range = f"above {area['elevations'].get('upper')[0]}'"
                    else:
                        elv_range = f"{area['elevations'].get('upper')[0]}' to {area['elevations'].get('upper')[1]}'"
                    full_desc = f"{desc} ({elv_range})"
                else:
                    continue

                rules.append({
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

    # Define the observer's location (latitude, longitude, and elevation)
    location = EarthLocation(lat=51.3825 * u.deg, lon=-116.15982 * u.deg, height=2000 * u.m)

    # Define the date and initial time
    tz_name = tf.timezone_at(lat=51.3825, lng=-116.15982)
    local_time = datetime.now(ZoneInfo(tz_name))
    interval_hours = 1.5  # hours

     # Step 3: Convert local time to UTC for astropy
    utc_time = local_time.astimezone(ZoneInfo('UTC'))
    astropy_time = Time(utc_time)

    # Parse the start time into a datetime object
    # start_datetime = datetime.strptime(f"{date} {start_time}", '%Y-%m-%d %H:%M:%S')
    start_datetime = datetime.today().strftime('%Y-%m-%d %H:%M:%S')

    # Generate time steps for the day
    num_steps = 6  # adjust based on desired times
    times = [Time(astropy_time + timedelta(hours=i * interval_hours)) for i in range(num_steps)]

    # Define AltAz frame with location and each observation time
    altaz_frames = [AltAz(obstime=time, location=location) for time in times]

    # Calculate and display azimuth and zenith angle for each time
    print(f"{'Time':<20} {'Azimuth':<8} {'Zenith':<8}")
    for time, altaz_frame in zip(times, altaz_frames):
        sun_altaz = get_sun(time).transform_to(altaz_frame)
        azimuth = sun_altaz.az.deg
        zenith = 90 - sun_altaz.alt.deg  # zenith = 90 - altitude

        print(f"{time.datetime.strftime('%Y-%m-%d %I:%M%p'):20} {azimuth:<8.1f} {zenith:<8.1f}")

    # calculate sunlight angles
    if not tomorrow:
        tomorrow = datetime.today().strftime('%Y-%m-%d')
    location = f"user:{data['area']['id']}"
    df = azely.compute('Sun', location, tomorrow)
    df1=df.query("el > 0.5") # only when the sun is above the horizon

    # format sun angle table
    area["hillshading"] = []
    for index, row in df1.iloc[::9, :2].iterrows(): # grab every 9th row and the first two columns
        area["hillshading"].append({
            "time": f"{tomorrow} {index.strftime('%I:%M%p')} Shade",
            "lighting": f"{round(row['az'])} by {round(row['el'])}",
            "layer": f"rb_m{round(row['az'])}z{round(row['el'])}",
            "uuid": str(uuid.uuid4()),
        })

    layer_info = layers_template.render(
            sun_day=tomorrow,
            danger_layer=danger_layer,
            shade_layers=[area["hillshading"][1],area["hillshading"][int(len(area["hillshading"])/2)-1],area["hillshading"][-3]],
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
    zones=areas, #TODO get accurate collection
    states=states, #TODO figure out what this is for
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
            if os.path.isfile(f"avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json"):
                with open(f"avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json") as fp:
                    data = json.load(fp)

                # timezone calculations
                tz_name = tf.timezone_at(lat=zone["geo"][1], lng=zone["geo"][0])
                utc = dateutil.parser.parse(data["published_time"])
                utc = utc.replace(tzinfo=ZoneInfo('UTC'))

                published_date_time_obj = utc.astimezone(ZoneInfo(tz_name))
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
#TODO add Canada
with open('source/avy/index.md', mode="w", encoding="utf-8") as message:
        message.write(index_template.render(states=sorted(states, key=lambda d: d['name']), areas=areas))
        print(f"... wrote source/avy/index.md")
