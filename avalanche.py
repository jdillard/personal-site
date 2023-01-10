from datetime import datetime, timedelta
import frontmatter
import json
import requests
from requests.exceptions import HTTPError
import os
import time


#TODO only run during certain months when NWAC is open
#TODO create alternative message when NWAC is closed

level_name = [
    "No Report",
    "Low",
    "Moderate",
    "Considerable",
    "High",
    "Extreme",
]

# delete all json files
dir = "source/assets/json/avalanche-reports"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

for file in os.listdir("source/_trips"):
    if file.endswith(".md"):
        with open(f"source/_trips/{file}") as reader:
            center_id = False
            zone_id = False
            content = reader.read()
            data = frontmatter.loads(content)
            if "avy_center_id" in data:
                center_id = data["avy_center_id"]
            if "avy_zone_id" in data:
                zone_id = data["avy_zone_id"]

        if center_id and zone_id and not os.path.exists(f"{dir}/{center_id}-{zone_id}.json"):
            time.sleep(5.5)
            try:
                response = requests.get(f'https://api.avalanche.org/v2/public/product?type=forecast&center_id={center_id}&zone_id={zone_id}')
                response.raise_for_status()
                jsonResponse = response.json()
            except HTTPError as http_err:
                print(f'HTTP error occurred: {http_err}')
                exit()
            except Exception as err:
                print(f'Other error occurred: {err}')
                exit()

            published_date_time_obj = datetime.strptime(jsonResponse["published_time"], '%Y-%m-%dT%H:%M:%S+00:00') - timedelta(hours=8, minutes=0)
            expires_date_time_obj = datetime.strptime(jsonResponse["expires_time"], '%Y-%m-%dT%H:%M:%S+00:00') - timedelta(hours=8, minutes=0)

            published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
            expires = expires_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
            name = jsonResponse["forecast_zone"][0]["name"]
            url = jsonResponse["forecast_zone"][0]["url"]

            data = {
                "published": published,
                "expires": expires,
                "name": name,
                "url": url,
                "danger": [
                    {
                        "valid_day": jsonResponse["danger"][0]["valid_day"].title(),
                        "lower_num": jsonResponse["danger"][0]["lower"],
                        "lower_name": level_name[jsonResponse["danger"][0]["lower"]],
                        "middle_num": jsonResponse["danger"][0]["middle"],
                        "middle_name": level_name[jsonResponse["danger"][0]["middle"]],
                        "upper_num": jsonResponse["danger"][0]["upper"],
                        "upper_name": level_name[jsonResponse["danger"][0]["upper"]],
                    },
                    {
                        "valid_day": jsonResponse["danger"][1]["valid_day"].title(),
                        "lower_num": jsonResponse["danger"][1]["lower"],
                        "lower_name": level_name[jsonResponse["danger"][1]["lower"]],
                        "middle_num": jsonResponse["danger"][1]["middle"],
                        "middle_name": level_name[jsonResponse["danger"][1]["middle"]],
                        "upper_num": jsonResponse["danger"][1]["upper"],
                        "upper_name": level_name[jsonResponse["danger"][1]["upper"]],
                    },
                ]
            }

            with open(f'{dir}/{center_id}-{zone_id}.json','w') as out:
                out.write(json.dumps(data))
