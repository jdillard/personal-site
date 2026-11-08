from datetime import timedelta
import dateutil.parser
import frontmatter
import json
import os
import time
import avy_config as config
from utils import convert_to_local_time, load_zone_tz_names, fetch_json_with_retry

# Fallback timezone used when a zone can't be resolved in the map layer;
# preserves the previous behavior, which assumed Pacific time.
DEFAULT_TZ = "America/Los_Angeles"


#TODO only run during certain months when NWAC is open
#TODO create alternative message when NWAC is closed (can be a manual run)

#TODO use config.danger_levels
danger_levels = config.avy_danger_levels


def main():
    # delete all json files
    dir = "source/assets/json/avalanche-reports"
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))

    # (center_id, zone_id) -> local timezone name, for US report times
    zone_tz_names = load_zone_tz_names()

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
                    tz_name = zone_tz_names.get((center_id, zone_id), DEFAULT_TZ)
                    published_date_time_obj, tomorrow_date_time_obj, published, _ = convert_to_local_time(
                        jsonResponse["published_time"], None, None, tz_name=tz_name
                    )
                    _, _, expires, _ = convert_to_local_time(
                        jsonResponse["expires_time"], None, None, tz_name=tz_name
                    )
                    outlook_date_time_obj = tomorrow_date_time_obj + timedelta(hours=24, minutes=0)
                    # date-only strings for the danger rating days
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
                jsonResponse = fetch_json_with_retry(
                    f'https://api.avalanche.ca/forecasts/:lang/products/point?lat={avy_lat}&long={avy_long}',
                    raise_on_error=True,
                )

                published_date_time_obj, _, published, _ = convert_to_local_time(
                    jsonResponse["report"]["dateIssued"], avy_lat, avy_long
                )
                _, _, expires, _ = convert_to_local_time(
                    jsonResponse["report"]["validUntil"], avy_lat, avy_long
                )
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


if __name__ == "__main__":
    main()
