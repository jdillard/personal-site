import json
import os
import time
import yaml
from slugify import slugify
from utils import fetch_json_with_retry, write_zone_geojson

def prep_dir(dir):
    # create directory if it doesn't exist
    if not os.path.exists(dir):
        os.makedirs(dir)

    # delete all files in order to start fresh
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))

# states whose forecast data we don't have access to (zone shapes are still built)
with open("tools/avy/state_info.yaml") as fp:
    no_report_states = {s["abbr"] for s in yaml.safe_load(fp) if not s.get("report_access", True)}

source_dir = "tools/avy/avalanche-reports-raw"
output_dir = "source/assets/json/avalanche-zones"
prep_dir(source_dir)
prep_dir(output_dir)

# grab CA map layer that contains all zones
jsonResponse = fetch_json_with_retry(
    'https://api.avalanche.ca/forecasts/en/areas',
    output_path=f'{source_dir}/ca-areas.json',
    raise_on_error=True,
)

# create geojson files for each zone
for feature in jsonResponse['features']:
    write_zone_geojson(
        f"{output_dir}/{feature['id']}.geojson",
        feature['geometry'],
        feature['properties']['id'],
    )

# grab CA zones metadata
jsonResponse = fetch_json_with_retry(
    'https://api.avalanche.ca/forecasts/en/metadata',
    output_path=f'{source_dir}/ca-metadata.json',
    raise_on_error=True,
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
        output_path=f'{source_dir}/{product_id}.json',
    )

# grab US map layer that contains all zones
jsonResponse = fetch_json_with_retry(
    'https://api.avalanche.org/v2/public/products/map-layer',
    output_path=f'{source_dir}/map-layer.json',
    raise_on_error=True,
)

# create geojson files for each zone
for feature in jsonResponse['features']:
    write_zone_geojson(
        f"{output_dir}/{feature['properties']['center_id']}-{feature['id']}.geojson",
        feature['geometry'],
        feature['properties']['name'],
    )

with open(f"{source_dir}/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through each US zone and download it's report if it exists
for item in map_layer["features"]:
    if item['properties']['state'] in no_report_states:
        continue
    time.sleep(1)
    center_id = item['properties']['center_id']
    zone_id = item['id']

    if item['properties']['state'] == "UT":
        zone_name = slugify(item['properties']['name'])
        print(zone_name)
        fetch_json_with_retry(
            f'https://utahavalanchecenter.org/forecast/{zone_name}/json',
            output_path=f'{source_dir}/{zone_name}.json',
        )
    else:
        print(center_id, zone_id)
        fetch_json_with_retry(
            f'https://api.avalanche.org/v2/public/product?type=forecast&center_id={center_id}&zone_id={zone_id}',
            output_path=f'{source_dir}/{center_id}-{zone_id}.json',
        )
