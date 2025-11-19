"""
Utility functions for avalanche data processing.
"""
from datetime import timedelta
from zoneinfo import ZoneInfo
from timezonefinder import TimezoneFinder
import dateutil.parser
import requests
from requests.exceptions import HTTPError
import json


tf = TimezoneFinder()


def convert_to_local_time(utc_timestamp, lat, lon):
    """
    Convert a UTC timestamp to local time based on geographic coordinates.

    Args:
        utc_timestamp: ISO 8601 timestamp string or datetime object
        lat: Latitude coordinate
        lon: Longitude coordinate

    Returns:
        tuple: (published_datetime, tomorrow_datetime, published_str, tomorrow_str)
            - published_datetime: datetime object in local timezone
            - tomorrow_datetime: datetime object 24 hours later
            - published_str: formatted string like "Monday, January 15, 2025 9:00AM"
            - tomorrow_str: formatted string like "2025-01-16"
    """
    # Find the timezone for the given coordinates
    tz_name = tf.timezone_at(lat=lat, lng=lon)

    # Parse the UTC timestamp and ensure it has UTC timezone info
    if isinstance(utc_timestamp, str):
        utc = dateutil.parser.parse(utc_timestamp)
    else:
        utc = utc_timestamp

    utc = utc.replace(tzinfo=ZoneInfo('UTC'))

    # Convert to local timezone
    published_date_time_obj = utc.astimezone(ZoneInfo(tz_name))
    tomorrow_date_time_obj = published_date_time_obj + timedelta(hours=24, minutes=0)

    # Format strings
    published = published_date_time_obj.strftime("%A, %B %d, %Y %-I:%M%p")
    tomorrow = tomorrow_date_time_obj.strftime("%Y-%m-%d")

    return published_date_time_obj, tomorrow_date_time_obj, published, tomorrow


def fetch_json_with_retry(url, output_path=None, retries=3, raise_on_error=True):
    """
    Fetch JSON data from a URL with error handling and optional file output.

    Args:
        url: URL to fetch JSON data from
        output_path: Optional file path to save the JSON response
        retries: Number of retry attempts (default: 3)
        raise_on_error: If True, raise exceptions on error. If False, print error and return None (default: True)

    Returns:
        dict: Parsed JSON response, or None if request fails and raise_on_error=False

    Raises:
        HTTPError: If HTTP error occurs and raise_on_error=True
        Exception: If other error occurs and raise_on_error=True
    """
    last_exception = None

    for attempt in range(retries):
        try:
            response = requests.get(url)
            response.raise_for_status()
            json_response = response.json()

            # Optionally save to file
            if output_path:
                with open(output_path, 'w') as out:
                    out.write(json.dumps(json_response))

            return json_response

        except HTTPError as http_err:
            last_exception = http_err
            if attempt < retries - 1:
                continue  # Retry
            # Last attempt failed
            if raise_on_error:
                raise
            else:
                print(f'HTTP error occurred: {http_err}')
                return None

        except Exception as err:
            last_exception = err
            if attempt < retries - 1:
                continue  # Retry
            # Last attempt failed
            if raise_on_error:
                raise
            else:
                print(f'Other error occurred: {err}')
                return None

    return None
