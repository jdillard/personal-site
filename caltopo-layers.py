import azely
from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import json
import requests
from requests.exceptions import HTTPError
from slugify import slugify
import os

#TODO combine with other NWAC script to reduce server load
#TODO config file for NWAC vs scaping frontmatter?
#TODO JS for switching regions/subregions
#TODO copy button

# load jinja templates
environment = Environment(loader=FileSystemLoader("templates/"))
index_template = environment.get_template("dem-shading-index.j2")
region_template = environment.get_template("dem-shading-region.j2")

# lower and upper limit for each cardinal direction
aspect = {
  "north": (339, 23),
  "northeast": (24, 68),
  "east": (69, 113),
  "southeast": (114, 158),
  "south": (159, 203),
  "southwest": (204, 248),
  "west": (249, 293),
  "northwest": (294, 338),
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

# list of avalanche.org regions and their zones
regions = [
    {
        "name": "NWAC",
        "url": "nwac.html",
        "filename": "nwac",
        "center_id": "NWAC",
        "zone_ids": ["142","143"],
        "zone_data": [],
    },
]

# delete all DEM files in order to start fresh
dir = "source/dem"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

# loop through regions and create DEM region pages
for region in regions:
    for zone_id in region["zone_ids"]:
        #TODO grab actual forecast for each zone
        with open(f"{region['center_id']}-{zone_id}.json") as fp:
            data = json.load(fp)

        published_date_time_obj = datetime.strptime(data["published_time"], '%Y-%m-%dT%H:%M:%S+00:00') - timedelta(hours=8, minutes=0)
        tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)

        published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
        tomorrow = tomorrow_date_time_obj.strftime("%Y-%m-%d")

        # avy danger
        danger_rules = []
        lower = f'a0-0e{elevation.get("lower")[0]}-{elevation.get("lower")[1]}f {danger_color.get(data["danger"][0]["lower"])}'
        middle = f'a0-0e{elevation.get("middle")[0]}-{elevation.get("middle")[1]}f {danger_color.get(data["danger"][0]["middle"])}'
        upper = f'a0-0e{elevation.get("upper")[0]}-{elevation.get("upper")[1]}f {danger_color.get(data["danger"][0]["upper"])}'
        danger_rules.append(lower)
        danger_rules.append(middle)
        danger_rules.append(upper)

        # avy problems
        problems = []
        for i, problem in enumerate(data["forecast_avalanche_problems"]):
            lower = []
            middle = []
            upper = []

            for direction in problem["location"]:
                # split to upper/middle/lower
                if direction.split()[1] == "lower":
                        lower.append(direction.split()[0])
                elif direction.split()[1] == "middle":
                        middle.append(direction.split()[0])
                elif direction.split()[1] == "upper":
                        upper.append(direction.split()[0])

            # calculate start and stop
            rules = []
            if lower:
                rules.append(f'a{aspect.get(lower[0])[0]}-{aspect.get(lower[-1])[1]}e{elevation["lower"][0]}-{elevation["lower"][1]}f {problem_color.get(i)}')
            if middle:
                rules.append(f'a{aspect.get(middle[0])[0]}-{aspect.get(middle[-1])[1]}e{elevation["middle"][0]}-{elevation["middle"][1]}f {problem_color.get(i)}')
            if upper:
                rules.append(f'a{aspect.get(middle[0])[0]}-{aspect.get(middle[-1])[1]}e{elevation["upper"][0]}-{elevation["upper"][1]}f {problem_color.get(i)}')

            problems.append({
                "name": problem["name"],
                "rules": rules,
            })

        region["zone_data"].append({
            "name": data["forecast_zone"][0]["name"],
            "value": slugify(data["forecast_zone"][0]["name"]),
            "url": data["forecast_zone"][0]["url"],
            "published": published,
            "danger": danger_rules,
            "problems": problems,
        })

    sun_loc = 'Seattle'
    sun_day = tomorrow
    df = azely.compute('Sun', sun_loc, sun_day)
    df1=df.query("el > 0.5") # only when the sun is above the horizon

    # format sun angle table
    hillshading = []
    for index, row in df1.iloc[::9, :2].iterrows(): # grab every 9th row and the first two columns
        hillshading.append({
            "time": index.strftime("%I:%M%p"),
            "lighting": f"{round(row['az'])} at {round(row['el'])}",
        })

    content = region_template.render(
            region=region["name"],
            sun_loc=sun_loc,
            sun_day=sun_day,
            hillshading=hillshading,
            zones=region["zone_data"],
            regions=regions,
        )

    with open(f"source/dem/{region['filename']}.html", mode="w", encoding="utf-8") as message:
            message.write(content)
            print(f"... wrote source/dem/{region['filename']}.md")

# create DEM index page
content = index_template.render(
        regions=regions,
    )

with open('source/dem/index.html', mode="w", encoding="utf-8") as message:
        message.write(content)
        print(f"... wrote source/dem/index.md")
