import json
import os
import time
from slugify import slugify
from utils import fetch_json_with_retry

def prep_dir(dir):
    # create directory if it doesn't exist
    if not os.path.exists(dir):
        os.makedirs(dir)

    # delete all files in order to start fresh
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))

source_dir = "tools/avy/avalanche-reports-raw"
output_dir = "source/assets/json/avalanche-zones"
prep_dir(source_dir)
prep_dir(output_dir)

# grab CA map layer that contains all zones
jsonResponse = fetch_json_with_retry(
    'https://api.avalanche.ca/forecasts/en/areas',
    f'{source_dir}/ca-areas.json'
)

if jsonResponse:
    # create geojson files for each zone
    for feature in jsonResponse['features']:
        shapes = []
        for coord_set in feature['geometry']['coordinates']:
            if len(coord_set) > 5:
                coord_set_normalized = []
                coord_set_normalized.append(coord_set)
            else:
                coord_set_normalized = coord_set
            shapes.append(f"""\
        {{
            "geometry": {{
                "coordinates": {coord_set_normalized},
                "type": "Polygon"
            }},
            "type": "Feature",
            "properties": {{
                "stroke-opacity": 1,
                "creator": "8BQK70",
                "description": "",
                "stroke-width": 2,
                "title": "{feature['properties']['id']}",
                "fill": "#FF0000",
                "stroke": "#FF0000",
                "fill-opacity": 0.1,
                "class": "Shape",
                "updated": 1699597377876
            }}
        }}
""")
        geoJsonOutput = """\
{{
    "features": [
{shapes}
    ],
    "type": "FeatureCollection"
}}""".format(shapes=','.join(shapes))

        with open(f"{output_dir}/{feature['id']}.geojson",'w') as out:
            out.write(geoJsonOutput)

# grab CA zones metadata
fetch_json_with_retry(
    'https://api.avalanche.ca/forecasts/en/metadata',
    f'{source_dir}/ca-metadata.json'
)

with open(f"{source_dir}/ca-areas.json") as fp:
    ca_areas = json.load(fp)

with open(f"{source_dir}/ca-metadata.json") as fp:
    ca_metadata = json.load(fp)

# loop through each CA zone and download it's report if it exists
for product in ca_metadata:
    time.sleep(1.5)
    product_id = product['product']['id']

    fetch_json_with_retry(
        f'https://api.avalanche.ca/forecasts/en/products/{product_id}',
        f'{source_dir}/{product_id}.json',
        raise_on_error=False
    )

# grab US map layer that contains all zones
jsonResponse = fetch_json_with_retry(
    'https://api.avalanche.org/v2/public/products/map-layer',
    f'{source_dir}/map-layer.json'
)

if jsonResponse:
    # create geojson files for each zone
    for feature in jsonResponse['features']:
        shapes = []
        for coord_set in feature['geometry']['coordinates']:
            if len(coord_set) > 5:
                coord_set_normalized = []
                coord_set_normalized.append(coord_set)
            else:
                coord_set_normalized = coord_set
            shapes.append(f"""\
        {{
            "geometry": {{
                "coordinates": {coord_set_normalized},
                "type": "Polygon"
            }},
            "type": "Feature",
            "properties": {{
                "stroke-opacity": 1,
                "creator": "8BQK70",
                "description": "",
                "stroke-width": 2,
                "title": "{feature['properties']['name']}",
                "fill": "#FF0000",
                "stroke": "#FF0000",
                "fill-opacity": 0.1,
                "class": "Shape",
                "updated": 1699597377876
            }}
        }}
""")
        geoJsonOutput = """\
{{
    "features": [
{shapes}
    ],
    "type": "FeatureCollection"
}}""".format(shapes=','.join(shapes))

        with open(f"{output_dir}/{feature['properties']['center_id']}-{feature['id']}.geojson",'w') as out:
            out.write(geoJsonOutput)

with open(f"{source_dir}/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through each US zone and download it's report if it exists
for item in map_layer["features"]:
    time.sleep(1)
    center_id = item['properties']['center_id']
    zone_id = item['id']

    if item['properties']['state'] == "UT":
        zone_name = slugify(item['properties']['name'])
        print(zone_name)
        fetch_json_with_retry(
            f'https://utahavalanchecenter.org/forecast/{zone_name}/json',
            f'{source_dir}/{zone_name}.json',
            raise_on_error=False
        )
    else:
        print(center_id, zone_id)
        fetch_json_with_retry(
            f'https://api.avalanche.org/v2/public/product?type=forecast&center_id={center_id}&zone_id={zone_id}',
            f'{source_dir}/{center_id}-{zone_id}.json',
            raise_on_error=False
        )
