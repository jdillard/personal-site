from datetime import timedelta
import dateutil.parser
import frontmatter
import json
import requests
from requests.exceptions import HTTPError
import os
import time
import avy_config as config
from utils import convert_to_local_time


#TODO only run during certain months when NWAC is open
#TODO create alternative message when NWAC is closed (can be a manual run)

#TODO use config.danger_levels
danger_levels = config.avy_danger_levels


# delete all json files
dir = "source/assets/json/avalanche-reports"
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

for file in os.listdir("source/_trips"):
    if file.endswith(".md"):
        # parse trip reports front matter
        with open(f"source/_trips/{file}") as reader:
            center_id = False
            zone_id = False
            avy_lat = False
            avy_long = False
            content = reader.read()
            data = frontmatter.loads(content)
            if "avy_center_id" in data:
                center_id = data["avy_center_id"]
            if "avy_zone_id" in data:
                zone_id = data["avy_zone_id"]
            if "avy_lat" in data:
                avy_lat = data["avy_lat"]
            if "avy_long" in data:
                avy_long = data["avy_long"]

        # create USA based avalanche reports
        if center_id and zone_id and not os.path.exists(f"{dir}/{center_id}-{zone_id}.json"):
            with open(f"tools/avy/avalanche-reports-raw/{center_id}-{zone_id}.json") as fp:
                    jsonResponse = json.load(fp)

            if jsonResponse["danger"]:
                # Use convert_to_local_time if we have coordinates, otherwise fall back to naive timezone
                if avy_lat and avy_long:
                    published_date_time_obj, tomorrow_date_time_obj, published_str, _ = convert_to_local_time(
                        jsonResponse["published_time"],
                        avy_lat,
                        avy_long
                    )
                    expires_date_time_obj, _, expires, _ = convert_to_local_time(
                        jsonResponse["expires_time"],
                        avy_lat,
                        avy_long
                    )
                    outlook_date_time_obj = published_date_time_obj + timedelta(hours=48, minutes=0)
                    published = published_str
                    tomorrow = tomorrow_date_time_obj.strftime("%A, %B %d, %Y")
                    outlook = outlook_date_time_obj.strftime("%A, %B %d, %Y")
                else:
                    # Fallback to naive timezone conversion (legacy behavior)
                    published_date_time_obj = dateutil.parser.parse(jsonResponse["published_time"]) - timedelta(hours=8, minutes=0)
                    expires_date_time_obj = dateutil.parser.parse(jsonResponse["expires_time"]) - timedelta(hours=8, minutes=0)
                    tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)
                    outlook_date_time_obj = published_date_time_obj + timedelta(hours=48, minutes=0)

                    published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
                    expires = expires_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
                    tomorrow = tomorrow_date_time_obj.strftime("%A, %B %d, %Y")
                    outlook = outlook_date_time_obj.strftime("%A, %B %d, %Y")
                url = jsonResponse["forecast_zone"][0]["url"]

                danger_dates = {"current": tomorrow, "tomorrow": outlook}

                today_lower = jsonResponse["danger"][0]["lower"] or 0
                today_middle = jsonResponse["danger"][0]["middle"] or 0
                today_upper = jsonResponse["danger"][0]["upper"] or 0
                tomorrow_lower = jsonResponse["danger"][1]["lower"] or 0
                tomorrow_middle = jsonResponse["danger"][1]["middle"] or 0
                tomorrow_upper = jsonResponse["danger"][1]["upper"] or 0

                data = {
                    "published": published,
                    "expires": expires,
                    "url": url,
                    "name": center_id,
                    "offSeason": False,
                    "danger": [
                        {
                            "valid_day": danger_dates[jsonResponse["danger"][0]["valid_day"]],
                            "lower_num": today_lower,
                            "lower_name": danger_levels[today_lower],
                            "middle_num": today_middle,
                            "middle_name": danger_levels[today_middle],
                            "upper_num": today_upper,
                            "upper_name": danger_levels[today_upper],
                        },
                        {
                            "valid_day": danger_dates[jsonResponse["danger"][1]["valid_day"]],
                            "lower_num": tomorrow_lower,
                            "lower_name": danger_levels[tomorrow_lower],
                            "middle_num": tomorrow_middle,
                            "middle_name": danger_levels[tomorrow_middle],
                            "upper_num": tomorrow_upper,
                            "upper_name": danger_levels[tomorrow_upper],
                        },
                    ]
                }
            else:
                data = {
                    "offSeason": True,
                }

            with open(f'{dir}/{center_id}-{zone_id}.json','w') as out:
                out.write(json.dumps(data))

        #TODO add `"offSeason": false,`
        # create Canada based avalanche reports
        if avy_lat and avy_long and not os.path.exists(f"{dir}/{avy_lat}-{avy_long}.json"):
            time.sleep(5.5)
            try:
                response = requests.get(f'https://api.avalanche.ca/forecasts/:lang/products/point?lat={avy_lat}&long={avy_long}')
                response.raise_for_status()
                jsonResponse = response.json()
            except HTTPError as http_err:
                print(f'HTTP error occurred: {http_err}')
                exit()
            except Exception as err:
                print(f'Other error occurred: {err}')
                exit()

            # Use convert_to_local_time if we have coordinates, otherwise fall back to naive timezone
            if avy_lat and avy_long:
                published_date_time_obj, _, published, _ = convert_to_local_time(
                    jsonResponse["report"]["dateIssued"],
                    avy_lat,
                    avy_long
                )
                expires_date_time_obj, _, expires, _ = convert_to_local_time(
                    jsonResponse["report"]["validUntil"],
                    avy_lat,
                    avy_long
                )
            else:
                # Fallback to naive timezone conversion (legacy behavior)
                published_date_time_obj = dateutil.parser.parse(jsonResponse["report"]["dateIssued"]) - timedelta(hours=8, minutes=0)
                expires_date_time_obj = dateutil.parser.parse(jsonResponse["report"]["validUntil"]) - timedelta(hours=8, minutes=0)

                published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
                expires = expires_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
            url = jsonResponse["url"]
            danger_ratings = []

            for rating in jsonResponse["report"]["dangerRatings"]:
                danger_ratings.append({
                    "valid_day": rating["date"]["display"],
                    "lower_num": danger_levels[rating["ratings"]["btl"]["rating"]["value"]],
                    "lower_name": rating["ratings"]["btl"]["rating"]["value"].title(),
                    "middle_num": danger_levels[rating["ratings"]["tln"]["rating"]["value"]],
                    "middle_name":rating["ratings"]["tln"]["rating"]["value"].title(),
                    "upper_num": danger_levels[rating["ratings"]["alp"]["rating"]["value"]],
                    "upper_name": rating["ratings"]["alp"]["rating"]["value"].title(),
                })

            data = {
                "published": published,
                "expires": expires,
                "url": url,
                "name": "Avalanche Canada",
                "danger": danger_ratings
            }

            with open(f'{dir}/{avy_lat}-{avy_long}.json','w') as out:
                out.write(json.dumps(data))
