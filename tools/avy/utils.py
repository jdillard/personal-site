"""Shared helpers for the avalanche report tools."""

import json
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

import dateutil.parser
import requests
from timezonefinder import TimezoneFinder

# Descriptive User-Agent so avalanche forecast providers can identify this
# traffic and reach out instead of blocking us (UAC explicitly requests one
# with a contact email address and/or a URL back to the site).
USER_AGENT = "jareddillard-avy/1.0 (+https://www.jareddillard.com; jared.dillard@gmail.com)"

# CalTopo treats 20310 ft as "no upper bound" (the DEM max); ranges ending
# there are described as "above X'" rather than "X' to 20310'".
MAX_ELEVATION = 20310

# Fallback timezone when a zone centroid can't be resolved (preserves the
# original implementation's Pacific-time assumption).
DEFAULT_TZ = "America/Los_Angeles"

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


def convert_to_local_time(utc_issued, lat, lon, tz_name=None):
    """Convert a UTC publish time to the local timezone at the given point.

    Accepts an ISO 8601 string or datetime. Assumes naive datetimes are UTC.
    A tz_name may be passed to skip the lat/lon timezone lookup (lat/lon are
    then unused). Returns (published_dt, tomorrow_dt, published_str,
    tomorrow_str) where tomorrow is 24 hours after publication, published_str
    is formatted like "Monday, January 15, 2025 9:00AM" in the local timezone
    and tomorrow_str is the local date "YYYY-MM-DD".
    """
    if isinstance(utc_issued, str):
        utc = dateutil.parser.parse(utc_issued)
    else:
        utc = utc_issued
    if utc.tzinfo is None:
        utc = utc.replace(tzinfo=ZoneInfo("UTC"))
    else:
        utc = utc.astimezone(ZoneInfo("UTC"))

    if tz_name is None:
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
    headers = {"User-Agent": USER_AGENT}
    for attempt in range(retries):
        try:
            response = requests.get(url, headers=headers, **kwargs)
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


def load_zone_tz_names(map_layer_path="tools/avy/avalanche-reports-raw/map-layer.json"):
    """Map (center_id, zone_id) to local timezone name from the map layer.

    Computes each zone's centroid with shapely and looks up the timezone at
    that point. Zones that are missing or have unusable geometry fall back
    to DEFAULT_TZ (Pacific), matching the previous hardcoded behavior.
    """
    from shapely.geometry import MultiPolygon, Polygon

    with open(map_layer_path) as fp:
        map_layer = json.load(fp)

    tz_names = {}
    for item in map_layer.get("features", []):
        geometry = item.get("geometry") or {}
        if geometry.get("type") == "Polygon":
            centroid = Polygon(geometry["coordinates"][0]).centroid
        elif geometry.get("type") == "MultiPolygon":
            polygons = [Polygon(shape) for shape in geometry["coordinates"][0]]
            centroid = MultiPolygon(polygons).centroid
        else:
            centroid = None

        if centroid is not None:
            tz_name = _tf.timezone_at(lat=centroid.y, lng=centroid.x) or DEFAULT_TZ
        else:
            tz_name = DEFAULT_TZ
        tz_names[(item["properties"]["center_id"], item["id"])] = tz_name

    return tz_names
