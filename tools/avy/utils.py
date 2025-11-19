"""
Utility functions for avalanche data processing.
"""
from datetime import timedelta
from zoneinfo import ZoneInfo
from timezonefinder import TimezoneFinder
import dateutil.parser


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
