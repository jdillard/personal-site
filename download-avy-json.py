import json
import os
import time
import requests
from requests.exceptions import HTTPError

def prep_dir(dir):
    # create directory if it doesn't exist
    if not os.path.exists(dir):
        os.makedirs(dir)

    # delete all files in order to start fresh
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))
source_dir = "avalanche-reports-raw"
output_dir = "source/assets/json/avalanche-zones"
prep_dir(source_dir)
prep_dir(output_dir)

# grab map layer that contains all zones
try:
    response = requests.get(f'https://api.avalanche.org/v2/public/products/map-layer')
    response.raise_for_status()
    jsonResponse = response.json()
    with open(f'{source_dir}/map-layer.json','w') as out:
        out.write(json.dumps(jsonResponse))
    for feature in jsonResponse['features']:
        geoJsonOutput = f"""\
{{
    "features": [
      {{
        "geometry": {{
          "coordinates": {feature['geometry']['coordinates']},
          "type": "Polygon"
        }},
        "id": "15f3e70f-dbd5-477f-968a-274da3edceae",
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
    ],
    "type": "FeatureCollection"
}}"""
        with open(f"{output_dir}/{feature['properties']['center_id']}-{feature['id']}.geojson",'w') as out:
            out.write(geoJsonOutput)
except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')
    exit()
except Exception as err:
    print(f'Other error occurred: {err}')
    exit()

with open("avalanche-reports-raw/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through each zone and download it's report if it exists
for item in map_layer["features"]:
    time.sleep(1.5)
    center_id = item['properties']['center_id']
    zone_id = item['id']
    print(center_id, zone_id)
    try:
        response = requests.get(f'https://api.avalanche.org/v2/public/product?type=forecast&center_id={center_id}&zone_id={zone_id}')
        response.raise_for_status()
        jsonResponse = response.json()
        with open(f'{output_dir}/{center_id}-{zone_id}.json','w') as out:
            out.write(json.dumps(jsonResponse))
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')
