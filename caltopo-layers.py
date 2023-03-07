import azely
from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import json
from shapely.geometry import MultiPolygon, Polygon
from slugify import slugify
import os
import urllib.parse
import uuid

#TODO combine with other NWAC script to reduce server load
#TODO support search by lat/long (colorado/BC)
#TODO expired reports?
#TODO update copy
#TODO double check issue date is accurate for zone
#TODO download all zones and test with dummy elevations

# load jinja templates
environment = Environment(loader=FileSystemLoader("templates/"))
index_template = environment.get_template("dem-shading-index.j2")
region_template = environment.get_template("dem-shading-region.j2")
layers_template = environment.get_template("dem-shading-layers.j2")

# lower and upper limit for each cardinal direction
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

# lower and upper limit for each elevation range
elevation = {
  "lower": (0, 4000),
  "middle": (4001, 5000),
  "upper": (5001, 20000)
}

# danger level color codes
danger_color = {
    1: "50b848",
    2: "fff200",
    3: "f7941e",
    4: "ed1c24",
    5: "231f20",
}

# problems color codes
problem_color = {
    0: "A200FF",
    1: "0000FF",
    2: "009AFF",
}

# limit the states that are published (active)
state_info = [
    {
        "abbr": "AK",
        "name": "Alaska",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "AZ",
        "name": "Arizona",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "CA",
        "name": "California",
        "elevations": {
            "lower": (0, 8000),
            "middle": (8001, 12000),
            "upper": (12001, 20000)
        },
        "active": True,
    },
    {
        "abbr": "CO",
        "name": "Colorado",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "ID",
        "name": "Idaho",
        "elevations": {
            "lower": (0, 7000),
            "middle": (7001, 8500),
            "upper": (8501, 20000)
        },
        "active": True,
    },
    {
        "abbr": "MT",
        "name": "Montana",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "NH",
        "name": "New Hampshire",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "NM",
        "name": "New Mexico",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "OR",
        "name": "Oregon",
        "elevations": {},
        "active": False,
    },
    {
        "abbr": "UT",
        "name": "Utah",
        "elevations": {},
        "active": False,
    },
    {
        "abbr":"WA",
        "name": "Washington",
        "elevations": {
            "lower": (0, 4000),
            "middle": (4001, 5000),
            "upper": (5001, 20000)
        },
        "active": True,
    },
    {
        "abbr": "WY",
        "name": "Wyoming",
        "elevations": {},
        "active": False,
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

    return (subset_sorted[0][0],subset_sorted[-1][1])

# dynamically group zones by state
with open("source/assets/json/avalanche-reports/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through all the zones in the avalanche.org map layer
states = []
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
        "active": item["properties"]["danger_level"] > 0,
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
            "page": f"/dem/{item['properties']['state'].lower()}",
            "zones": [zone_info],
            "active": next(active["active"] for active in state_info if active["abbr"] == item["properties"]["state"]),
            "name": next(active["name"] for active in state_info if active["abbr"] == item["properties"]["state"]),
            "elevations": next(active["elevations"] for active in state_info if active["abbr"] == item["properties"]["state"]),
        })
toml.close()

# delete all DEM files in order to start fresh
dir = "source/dem"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

# loop through states and create DEM state pages
for state in states:
    if state["active"]:
        for zone in state["zones"]:
            if zone["active"]:
                with open(f"source/assets/json/avalanche-reports/{zone['center_id']}-{zone['zone_id']}.json") as fp:
                    data = json.load(fp)

                published_date_time_obj = datetime.strptime(data["published_time"], '%Y-%m-%dT%H:%M:%S+00:00') - timedelta(hours=8, minutes=0)
                tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)

                published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
                tomorrow = tomorrow_date_time_obj.strftime("%Y-%m-%d")

                # avy danger
                danger_rules = []
                danger_layer = ""
                if data["danger"]:
                    lower = f'a0-0e{state["elevations"].get("lower")[0]}-{state["elevations"].get("lower")[1]}f {danger_color.get(data["danger"][0]["lower"])}'
                    middle = f'a0-0e{state["elevations"].get("middle")[0]}-{state["elevations"].get("middle")[1]}f {danger_color.get(data["danger"][0]["middle"])}'
                    upper = f'a0-0e{state["elevations"].get("upper")[0]}-{state["elevations"].get("upper")[1]}f {danger_color.get(data["danger"][0]["upper"])}'
                    danger_rules.append(lower)
                    danger_rules.append(middle)
                    danger_rules.append(upper)
                    danger_layer = f"sc_{'p'.join(x.replace(' ', 'c') for x in danger_rules)}"

                # avy problems
                problems = []
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
                        start, end = sort_directions(lower)
                        lower_layer = f'a{start}-{end}e{state["elevations"].get("lower")[0]}-{state["elevations"].get("lower")[1]}f {problem_color.get(i)}'
                        rules.append(lower_layer)
                    if middle:
                        start, end = sort_directions(middle)
                        middle_layer = f'a{start}-{end}e{state["elevations"].get("middle")[0]}-{state["elevations"].get("middle")[1]}f {problem_color.get(i)}'
                        rules.append(middle_layer)
                    if upper:
                        start, end = sort_directions(upper)
                        upper_layer = f'a{start}-{end}e{state["elevations"].get("upper")[0]}-{state["elevations"].get("upper")[1]}f {problem_color.get(i)}'
                        rules.append(upper_layer)

                    problems.append({
                        "name": f"{tomorrow} {problem['name']}",
                        "rules": rules,
                        "layers": f"sc_{'p'.join(x.replace(' ', 'c') for x in rules)}",
                        "uuid": str(uuid.uuid4()),
                    })

                zone["published"] = published
                zone["danger"] = danger_rules
                zone["problems"] = problems

                # calculate sunlight angles
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
                        shade_layers=[zone["hillshading"][2],zone["hillshading"][4],zone["hillshading"][6]],
                        problem_layers=zone["problems"],
                    )
                if danger_rules:
                    zone["layers"] = f"a={danger_layer}&cl={urllib.parse.quote(layer_info)}"
                else:
                    zone["layers"] = f"cl={urllib.parse.quote(layer_info)}"

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
with open('source/dem/index.md', mode="w", encoding="utf-8") as message:
        message.write(index_template.render(states=states))
        print(f"... wrote source/dem/index.md")
