import pytest

from caltopo_layers import (
    split_elv_bands,
    find_aspect_values,
    find_object_by_key_value,
    sort_directions,
)


class TestSplitElvBands:
    """Tests for split_elv_bands()"""

    def test_splits_into_chunks_of_8(self):
        """Splits danger rose string into chunks of 8 elements"""
        danger_rose = "1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3"
        result = split_elv_bands(danger_rose)

        assert len(result) == 3
        assert len(result[0]) == 8
        assert len(result[1]) == 8
        assert len(result[2]) == 8

    def test_converts_to_integers(self):
        """Converts string values to integers"""
        danger_rose = "1,2,3,4,5,6,7,8"
        result = split_elv_bands(danger_rose)

        assert result[0] == [1, 2, 3, 4, 5, 6, 7, 8]
        assert all(isinstance(x, int) for x in result[0])

    def test_typical_danger_rose_data(self, sample_danger_rose):
        """Works with typical danger rose data (24 values = 3 elevation bands)"""
        result = split_elv_bands(sample_danger_rose)

        assert len(result) == 3
        # First band (upper elevation) all 3s
        assert result[0] == [3, 3, 3, 3, 3, 3, 3, 3]
        # Second band (middle elevation) all 2s
        assert result[1] == [2, 2, 2, 2, 2, 2, 2, 2]
        # Third band (lower elevation) all 1s
        assert result[2] == [1, 1, 1, 1, 1, 1, 1, 1]

    def test_mixed_values(self):
        """Handles mixed danger values within a band"""
        danger_rose = "1,2,3,2,1,2,3,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0"
        result = split_elv_bands(danger_rose)

        assert result[0] == [1, 2, 3, 2, 1, 2, 3, 2]
        assert result[1] == [1, 1, 1, 1, 1, 1, 1, 1]
        assert result[2] == [0, 0, 0, 0, 0, 0, 0, 0]


class TestFindAspectValues:
    """Tests for find_aspect_values()"""

    def test_finds_all_matching_indices(self, aspect_config):
        """Finds all indices where value matches"""
        danger_list = [1, 2, 1, 3, 1, 2, 3, 1]
        result = find_aspect_values(danger_list, 1, aspect_config)

        # Value 1 is at indices 0, 2, 4, 7
        assert len(result) == 4

    def test_returns_aspect_values(self, aspect_config):
        """Returns the aspect degree tuples for matching indices"""
        danger_list = [1, 2, 2, 2, 2, 2, 2, 2]
        result = find_aspect_values(danger_list, 1, aspect_config)

        # Only index 0 has value 1, which maps to aspect[0] = (339, 23) = north
        assert result == [(339, 23)]

    def test_returns_empty_when_no_matches(self, aspect_config):
        """Returns empty list when no values match"""
        danger_list = [1, 1, 1, 1, 1, 1, 1, 1]
        result = find_aspect_values(danger_list, 5, aspect_config)

        assert result == []

    def test_all_aspects_match(self, aspect_config):
        """Returns all aspects when all values match"""
        danger_list = [3, 3, 3, 3, 3, 3, 3, 3]
        result = find_aspect_values(danger_list, 3, aspect_config)

        assert len(result) == 8


class TestFindObjectByKeyValue:
    """Tests for find_object_by_key_value()"""

    def test_finds_matching_object(self):
        """Finds and returns object with matching key/value"""
        objects = [
            {"id": 1, "name": "first"},
            {"id": 2, "name": "second"},
            {"id": 3, "name": "third"},
        ]
        result = find_object_by_key_value(objects, "id", 2)

        assert result == {"id": 2, "name": "second"}

    def test_returns_none_when_no_match(self):
        """Returns None when no object matches"""
        objects = [
            {"id": 1, "name": "first"},
            {"id": 2, "name": "second"},
        ]
        result = find_object_by_key_value(objects, "id", 99)

        assert result is None

    def test_finds_by_string_value(self):
        """Works with string values"""
        objects = [
            {"type": "zone", "name": "Alpine"},
            {"type": "area", "name": "Valley"},
        ]
        result = find_object_by_key_value(objects, "type", "area")

        assert result == {"type": "area", "name": "Valley"}

    def test_returns_first_match(self):
        """Returns the first matching object if duplicates exist"""
        objects = [
            {"id": 1, "order": "first"},
            {"id": 1, "order": "second"},
        ]
        result = find_object_by_key_value(objects, "id", 1)

        assert result["order"] == "first"

    def test_empty_list(self):
        """Returns None for empty list"""
        result = find_object_by_key_value([], "id", 1)

        assert result is None


class TestSortDirections:
    """Tests for sort_directions()"""

    def test_all_aspects_returns_all_aspects_description(self):
        """Full circle of directions returns 'All aspects'"""
        # All 8 cardinal directions forming a complete circle
        subset = [
            (339, 23),  # N
            (23, 68),  # NE
            (68, 113),  # E
            (113, 158),  # SE
            (158, 203),  # S
            (203, 248),  # SW
            (248, 293),  # W
            (293, 339),  # NW
        ]
        start, end, desc = sort_directions(subset)

        assert desc == "All aspects"

    def test_partial_range_north_to_east(self):
        """Partial range returns correct start/end degrees"""
        # N, NE, E
        subset = [
            (339, 23),  # N
            (23, 68),  # NE
            (68, 113),  # E
        ]
        start, end, desc = sort_directions(subset)

        assert start == 339  # Start of N
        assert end == 113  # End of E
        assert "N to E" in desc

    def test_single_direction(self):
        """Single direction works correctly"""
        subset = [(158, 203)]  # S
        start, end, desc = sort_directions(subset)

        assert start == 158
        assert end == 203
        assert "S to S" in desc

    def test_mutates_input_list(self):
        """Function mutates the input list (empties it)"""
        subset = [(339, 23), (23, 68)]
        original_len = len(subset)
        sort_directions(subset)

        # The function pops elements, so input list should be empty
        assert len(subset) < original_len

    def test_southern_aspects(self):
        """Works with southern aspects"""
        # S, SW, W
        subset = [
            (158, 203),  # S
            (203, 248),  # SW
            (248, 293),  # W
        ]
        start, end, desc = sort_directions(subset)

        assert start == 158  # Start of S
        assert end == 293  # End of W
        assert "S to W" in desc

    def test_wrapping_around_north(self):
        """Handles directions that wrap around north (NW, N, NE)"""
        subset = [
            (293, 339),  # NW
            (339, 23),  # N
            (23, 68),  # NE
        ]
        start, end, desc = sort_directions(subset)

        assert start == 293  # Start of NW
        assert end == 68  # End of NE
        assert "NW to NE" in desc
