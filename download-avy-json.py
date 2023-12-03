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

# grab CA map layer that contains all zones
try:
    response = requests.get(f'https://api.avalanche.ca/forecasts/en/areas')
    response.raise_for_status()
    jsonResponse = response.json()

    with open(f'{source_dir}/ca-areas.json','w') as out:
        out.write(json.dumps(jsonResponse))

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
except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')
    exit()
except Exception as err:
    print(f'Other error occurred: {err}')
    exit()

# grab CA zones metadata
try:
    response = requests.get(f'https://api.avalanche.ca/forecasts/en/metadata')
    response.raise_for_status()
    jsonResponse = response.json()

    with open(f'{source_dir}/ca-metadata.json','w') as out:
        out.write(json.dumps(jsonResponse))
except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')
    exit()
except Exception as err:
    print(f'Other error occurred: {err}')
    exit()

with open("avalanche-reports-raw/ca-areas.json") as fp:
    ca_areas = json.load(fp)

with open("avalanche-reports-raw/ca-metadata.json") as fp:
    ca_metadata = json.load(fp)

# loop through each CA zone and download it's report if it exists
for product in ca_metadata:
    time.sleep(1.5)
    product_id = product['product']['id']

    try:
        response = requests.get(f'https://api.avalanche.ca/forecasts/en/products/{product_id}')
        response.raise_for_status()
        jsonResponse = response.json()
        with open(f'{source_dir}/{product_id}.json','w') as out:
            out.write(json.dumps(jsonResponse))
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')

# grab US map layer that contains all zones
try:
    response = requests.get(f'https://api.avalanche.org/v2/public/products/map-layer')
    response.raise_for_status()
    jsonResponse = response.json()

    with open(f'{source_dir}/map-layer.json','w') as out:
        out.write(json.dumps(jsonResponse))

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
except HTTPError as http_err:
    print(f'HTTP error occurred: {http_err}')
    exit()
except Exception as err:
    print(f'Other error occurred: {err}')
    exit()

with open("avalanche-reports-raw/map-layer.json") as fp:
    map_layer = json.load(fp)

# loop through each US zone and download it's report if it exists
for item in map_layer["features"]:
    time.sleep(1.5)
    center_id = item['properties']['center_id']
    zone_id = item['id']
    print(center_id, zone_id)
    try:
        response = requests.get(f'https://api.avalanche.org/v2/public/product?type=forecast&center_id={center_id}&zone_id={zone_id}')
        response.raise_for_status()
        jsonResponse = response.json()
        with open(f'{source_dir}/{center_id}-{zone_id}.json','w') as out:
            out.write(json.dumps(jsonResponse))
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')
