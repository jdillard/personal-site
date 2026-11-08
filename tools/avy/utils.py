"""Shared helpers for the avalanche report tools."""

import json
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import dateutil.parser
import requests
from timezonefinder import TimezoneFinder

# CalTopo treats 20310 ft as "no upper bound" (the DEM max); ranges ending
# there are described as "above X'" rather than "X' to 20310'".
MAX_ELEVATION = 20310

_tf = TimezoneFinder()


def format_elevation_range(elv_range, max_elevation=MAX_ELEVATION):
    """Format an (low, high) elevation tuple as a human-readable range.

    Ranges ending at max_elevation are rendered as "above low'" since the
    max is the DEM ceiling, not a real boundary.
    """
    low, high = elv_range
    if high == max_elevation:
        return f"above {low}'"
    return f"{low}' to {high}'"


def convert_to_local_time(utc_issued, lat, lon):
    """Convert a UTC publish time to the local timezone at the given point.

    Accepts an ISO 8601 string or datetime. Assumes naive datetimes are UTC.
    Returns (published_dt, tomorrow_dt, published_str, tomorrow_str) where
    tomorrow is 24 hours after publication, published_str is formatted like
    "Monday, January 15, 2025 9:00AM" in the local timezone and tomorrow_str
    is the local date "YYYY-MM-DD".
    """
    if isinstance(utc_issued, str):
        utc = dateutil.parser.parse(utc_issued)
    else:
        utc = utc_issued
    if utc.tzinfo is None:
        utc = utc.replace(tzinfo=ZoneInfo("UTC"))
    else:
        utc = utc.astimezone(ZoneInfo("UTC"))

    tz_name = _tf.timezone_at(lat=lat, lng=lon)
    published_dt = utc.astimezone(ZoneInfo(tz_name))
    tomorrow_dt = published_dt + timedelta(hours=24)

    published_str = published_dt.strftime("%A, %B %d, %Y %-I:%M%p")
    tomorrow_str = tomorrow_dt.strftime("%Y-%m-%d")

    return published_dt, tomorrow_dt, published_str, tomorrow_str


def fetch_json_with_retry(
    url, retries=3, output_path=None, raise_on_error=False, **kwargs
):
    """Fetch a URL and parse the JSON response, retrying on failure.

    Writes the parsed JSON to output_path if given. Returns the parsed JSON
    on success, or None if all retries fail and raise_on_error is False.
    """
    for attempt in range(retries):
        try:
            response = requests.get(url, **kwargs)
            response.raise_for_status()
            json_response = response.json()
            if output_path:
                with open(output_path, "w") as out:
                    out.write(json.dumps(json_response))
            return json_response
        except Exception as err:
            if attempt == retries - 1:
                if raise_on_error:
                    raise
                print(f"Failed fetching {url} after {retries} attempts: {err}")
                return None


def find_object_by_key_value(objects_list, key, value):
    """Return the first dict in the list whose key matches value, else None."""
    for obj in objects_list:
        if obj.get(key) == value:
            return obj
    return None
