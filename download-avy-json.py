import json
import os
import time
import requests
from requests.exceptions import HTTPError

dir = "avalanche-reports-raw"
if not os.path.exists(dir):
    os.mkdir(dir)

# delete all DEM files in order to start fresh
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

# grab map layer that contains all zones
try:
    response = requests.get(f'https://api.avalanche.org/v2/public/products/map-layer')
    response.raise_for_status()
    jsonResponse = response.json()
    with open(f'avalanche-reports-raw/map-layer.json','w') as out:
        out.write(json.dumps(jsonResponse))
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
        with open(f'avalanche-reports-raw/{center_id}-{zone_id}.json','w') as out:
            out.write(json.dumps(jsonResponse))
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')
