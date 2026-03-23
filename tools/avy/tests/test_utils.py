import pytest
from datetime import datetime
from unittest.mock import patch, Mock
from zoneinfo import ZoneInfo

from utils import convert_to_local_time, fetch_json_with_retry, format_elevation_range


class TestFormatElevationRange:
    """Tests for format_elevation_range()"""

    def test_above_format_when_upper_equals_max(self):
        """When upper bound equals max_elevation, format as 'above X'"""
        result = format_elevation_range((9001, 20310))
        assert result == "above 9001'"

    def test_range_format_for_normal_elevations(self):
        """Normal elevation ranges format as 'X' to Y'"""
        result = format_elevation_range((6000, 7500))
        assert result == "6000' to 7500'"

    def test_custom_max_elevation(self):
        """Custom max_elevation parameter works correctly"""
        result = format_elevation_range((8000, 10000), max_elevation=10000)
        assert result == "above 8000'"

    def test_range_with_custom_max_not_matching(self):
        """When upper doesn't equal custom max, still formats as range"""
        result = format_elevation_range((6000, 7500), max_elevation=10000)
        assert result == "6000' to 7500'"


class TestConvertToLocalTime:
    """Tests for convert_to_local_time()"""

    def test_converts_string_timestamp(self):
        """Converts ISO 8601 string timestamp correctly"""
        # UTC timestamp for 2025-01-15 17:00:00 UTC
        utc_str = "2025-01-15T17:00:00Z"
        # Seattle coordinates (Pacific timezone)
        lat, lon = 47.6062, -122.3321

        published_dt, tomorrow_dt, published_str, tomorrow_str = convert_to_local_time(
            utc_str, lat, lon
        )

        # Should be 9:00 AM Pacific (UTC-8 in January)
        assert published_dt.hour == 9
        assert published_dt.day == 15

    def test_converts_datetime_object(self):
        """Converts datetime object correctly"""
        utc_dt = datetime(2025, 1, 15, 17, 0, 0)
        lat, lon = 47.6062, -122.3321

        published_dt, tomorrow_dt, published_str, tomorrow_str = convert_to_local_time(
            utc_dt, lat, lon
        )

        assert published_dt.hour == 9
        assert published_dt.day == 15

    def test_returns_correct_tuple_structure(self):
        """Returns tuple of (datetime, datetime, str, str)"""
        utc_str = "2025-01-15T17:00:00Z"
        lat, lon = 47.6062, -122.3321

        result = convert_to_local_time(utc_str, lat, lon)

        assert len(result) == 4
        assert isinstance(result[0], datetime)  # published_datetime
        assert isinstance(result[1], datetime)  # tomorrow_datetime
        assert isinstance(result[2], str)  # published_str
        assert isinstance(result[3], str)  # tomorrow_str

    def test_tomorrow_is_24_hours_later(self):
        """Tomorrow datetime is exactly 24 hours after published"""
        utc_str = "2025-01-15T17:00:00Z"
        lat, lon = 47.6062, -122.3321

        published_dt, tomorrow_dt, _, _ = convert_to_local_time(utc_str, lat, lon)

        diff = tomorrow_dt - published_dt
        assert diff.total_seconds() == 24 * 60 * 60

    def test_different_timezone_mountain(self):
        """Works correctly for Mountain timezone (e.g., Colorado)"""
        utc_str = "2025-01-15T17:00:00Z"
        # Denver coordinates (Mountain timezone)
        lat, lon = 39.7392, -104.9903

        published_dt, _, _, _ = convert_to_local_time(utc_str, lat, lon)

        # Should be 10:00 AM Mountain (UTC-7 in January)
        assert published_dt.hour == 10

    def test_formatted_strings(self):
        """Formatted strings have expected format"""
        utc_str = "2025-01-15T17:00:00Z"
        lat, lon = 47.6062, -122.3321

        _, _, published_str, tomorrow_str = convert_to_local_time(utc_str, lat, lon)

        # published_str format: "Monday, January 15, 2025 9:00AM"
        assert "January" in published_str
        assert "2025" in published_str
        # tomorrow_str format: "2025-01-16"
        assert tomorrow_str == "2025-01-16"


class TestFetchJsonWithRetry:
    """Tests for fetch_json_with_retry()"""

    @patch("utils.requests.get")
    def test_successful_fetch_returns_json(self, mock_get):
        """Successful fetch returns parsed JSON"""
        mock_response = Mock()
        mock_response.json.return_value = {"key": "value"}
        mock_response.raise_for_status = Mock()
        mock_get.return_value = mock_response

        result = fetch_json_with_retry("https://example.com/api")

        assert result == {"key": "value"}
        mock_get.assert_called_once_with("https://example.com/api")

    @patch("utils.requests.get")
    def test_retries_on_failure(self, mock_get):
        """Retries on failure before succeeding"""
        from requests.exceptions import HTTPError

        # First two calls fail, third succeeds
        mock_fail = Mock()
        mock_fail.raise_for_status.side_effect = HTTPError("500 Server Error")

        mock_success = Mock()
        mock_success.json.return_value = {"success": True}
        mock_success.raise_for_status = Mock()

        mock_get.side_effect = [mock_fail, mock_fail, mock_success]

        result = fetch_json_with_retry("https://example.com/api", retries=3)

        assert result == {"success": True}
        assert mock_get.call_count == 3

    @patch("utils.requests.get")
    def test_raises_on_error_when_true(self, mock_get):
        """Raises exception when raise_on_error=True and all retries fail"""
        from requests.exceptions import HTTPError

        mock_response = Mock()
        mock_response.raise_for_status.side_effect = HTTPError("500 Server Error")
        mock_get.return_value = mock_response

        with pytest.raises(HTTPError):
            fetch_json_with_retry(
                "https://example.com/api", retries=2, raise_on_error=True
            )

    @patch("utils.requests.get")
    def test_returns_none_when_raise_on_error_false(self, mock_get):
        """Returns None when raise_on_error=False and all retries fail"""
        from requests.exceptions import HTTPError

        mock_response = Mock()
        mock_response.raise_for_status.side_effect = HTTPError("500 Server Error")
        mock_get.return_value = mock_response

        result = fetch_json_with_retry(
            "https://example.com/api", retries=2, raise_on_error=False
        )

        assert result is None

    @patch("utils.requests.get")
    def test_writes_to_file_when_output_path_provided(self, mock_get, tmp_path):
        """Writes JSON to file when output_path is provided"""
        mock_response = Mock()
        mock_response.json.return_value = {"data": "test"}
        mock_response.raise_for_status = Mock()
        mock_get.return_value = mock_response

        output_file = tmp_path / "output.json"
        result = fetch_json_with_retry(
            "https://example.com/api", output_path=str(output_file)
        )

        assert result == {"data": "test"}
        assert output_file.exists()
        assert '"data": "test"' in output_file.read_text()
