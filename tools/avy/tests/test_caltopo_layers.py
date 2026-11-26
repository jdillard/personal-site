import pytest

from caltopo_layers import (
    split_elv_bands,
    uac_rose_by_band,
    find_aspect_values,
    find_object_by_key_value,
    sort_directions,
    split_area_name,
    subregions_geojson,
    short_area_name,
    forecast_zone_names,
    canada_area_elevations,
    band_confidence,
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

    def test_does_not_mutate_input_list(self):
        """Function leaves the input list unmodified"""
        subset = [(339, 23), (23, 68)]
        original = list(subset)
        sort_directions(subset)

        # Function works on a copy, so the input list is unchanged
        assert subset == original

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


class TestUacRoseByBand:
    """Tests for uac_rose_by_band()"""

    def test_highest_ring_maps_to_atl(self):
        """UAC lists the highest ring first; it must land on ATL, not BTL."""
        # Logan 2024-12-29: High up high, Moderate/Considerable down low
        rose = "8,8,8,8,8,8,8,8,8,8,8,6,6,6,6,8,6,6,6,4,4,4,4,6"
        bands = dict(uac_rose_by_band(rose))
        assert bands["atl"] == [8, 8, 8, 8, 8, 8, 8, 8]
        assert bands["ntl"] == [8, 8, 8, 6, 6, 6, 6, 8]
        assert bands["btl"] == [6, 6, 6, 4, 4, 4, 4, 6]

    def test_returns_bands_lowest_first(self):
        rose = ",".join(["3"] * 8 + ["2"] * 8 + ["1"] * 8)
        assert [band for band, _ in uac_rose_by_band(rose)] == ["btl", "ntl", "atl"]


class TestSplitAreaName:
    """Tests for split_area_name()"""

    def test_single_subregion(self):
        assert split_area_name("Haines Pass") == ["Haines Pass"]

    def test_splits_on_hyphens(self):
        assert split_area_name("Coquihalla-Manning-Skagit") == ["Coquihalla", "Manning", "Skagit"]

    def test_keeps_spaced_dash_together(self):
        assert split_area_name("North 40-Spray - KLakes") == ["North 40", "Spray - KLakes"]

    def test_keeps_known_hyphenated_name(self):
        assert split_area_name("Chic-Chocs") == ["Chic-Chocs"]

    def test_keeps_hyphenated_name_within_combined_area(self):
        assert split_area_name("Brazeau-Churchill-Cirrus-Wilson-Fryatt") == [
            "Brazeau", "Churchill", "Cirrus-Wilson", "Fryatt"
        ]
        assert split_area_name("Badshot-Battle-Central Selkirk") == ["Badshot-Battle", "Central Selkirk"]

    def test_empty(self):
        assert split_area_name("") == []


class TestShortAreaName:
    """Tests for short_area_name()"""

    def test_short_list_shown_in_full(self):
        assert short_area_name(["Coquihalla", "Manning", "Skagit"]) == "Coquihalla, Manning, Skagit"

    def test_long_list_truncated_with_count(self):
        assert short_area_name(["A", "B", "C", "D", "E"], max_chars=12) == "A, B +3 more"

    def test_name_crossing_limit_collapses(self):
        assert short_area_name(["Corner Brook", "Gros Morne", "Northern Peninsula"]) == "Corner Brook +2 more"

    def test_suffix_counts_toward_limit(self):
        # "Clearwater, North Okanagan +2 more" is 34 chars, over the default 28
        assert short_area_name(["Clearwater", "North Okanagan", "A", "B"]) == "Clearwater +3 more"

    def test_full_list_at_limit(self):
        assert short_area_name(["Grand Mesa", "Battlement Mesa"]) == "Grand Mesa, Battlement Mesa"

    def test_first_name_always_shown(self):
        assert short_area_name(["A" * 40, "B"]) == "A" * 40 + " +1 more"

    def test_empty(self):
        assert short_area_name([]) == ""


class TestSubregionsGeojson:
    """Tests for subregions_geojson()"""

    SQUARE = {"type": "Polygon", "coordinates": [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]]}

    def test_single_subregion_returns_none(self):
        assert subregions_geojson(["A"], {"A": self.SQUARE}) is None

    def test_builds_named_features(self):
        result = subregions_geojson(["A", "B"], {"A": self.SQUARE, "B": self.SQUARE})
        assert [f["properties"]["name"] for f in result["features"]] == ["A", "B"]
        assert result["features"][0]["geometry"]["type"] == "Polygon"

    def test_skips_unknown_names(self):
        result = subregions_geojson(["A", "Missing"], {"A": self.SQUARE})
        assert [f["properties"]["name"] for f in result["features"]] == ["A"]

    def test_no_known_shapes_returns_none(self):
        assert subregions_geojson(["X", "Y"], {}) is None


class TestCanadaAreaElevations:
    """Tests for canada_area_elevations()"""

    ELEVATIONS = {0: "default", "Selkirks": "selkirks", "South Coast": "coast", "Glacier": "glacier"}
    RANGES = {"Glacier": "Selkirks", "Central Selkirk": "Selkirks", "Duffey": "South Coast",
              "Garibaldi": "South Coast", "Tumbler": "North Rockies"}

    def test_uses_majority_range(self):
        result = canada_area_elevations(["Duffey", "Garibaldi", "Central Selkirk"], self.RANGES, self.ELEVATIONS)
        assert result == "coast"

    def test_subregion_entry_wins_over_its_range(self):
        assert canada_area_elevations(["Glacier"], self.RANGES, self.ELEVATIONS) == "glacier"

    def test_equal_band_sets_count_together(self):
        elevations = {0: "default", "A": {"btl": [0, 1]}, "B": {"btl": [0, 1]}, "Selkirks": {"btl": [0, 5]}}
        result = canada_area_elevations(["A", "B", "Central Selkirk"], self.RANGES, elevations)
        assert result == {"btl": [0, 1]}

    def test_no_majority_falls_back_to_default(self):
        result = canada_area_elevations(["Central Selkirk", "Duffey"], self.RANGES, self.ELEVATIONS)
        assert result == "default"
        result = canada_area_elevations(["Duffey", "Garibaldi", "Central Selkirk", "Tumbler"], self.RANGES, self.ELEVATIONS)
        assert result == "default"

    def test_unmapped_range_and_unknown_names_fall_back_to_default(self):
        assert canada_area_elevations(["Tumbler", "Nowhere"], self.RANGES, self.ELEVATIONS) == "default"
        assert canada_area_elevations([], self.RANGES, self.ELEVATIONS) == "default"


class TestBandConfidence:
    BANDS = {"btl": [0, 1], "ntl": [2, 3], "atl": [4, 5]}

    def test_published_bands_are_high(self):
        assert band_confidence(self.BANDS) == "high"

    def test_entry_confidence(self):
        assert band_confidence({**self.BANDS, "confidence": "medium"}) == "medium"

    def test_state_default_fallback_is_low(self):
        assert band_confidence(self.BANDS, fallback=True) == "low"


class TestForecastZoneNames:
    """Tests for forecast_zone_names()"""

    def test_own_zone_first_then_distinct(self):
        report = {"forecast_zone": [
            {"id": 2720, "name": "Battlement Mesa"},
            {"id": 2747, "name": "Grand Mesa"},
            {"id": 2719, "name": "Battlement Mesa"},
            {"id": 2744, "name": "Grand Mesa"},
        ]}
        assert forecast_zone_names(report, 2747) == ["Grand Mesa", "Battlement Mesa"]

    def test_missing_or_empty(self):
        assert forecast_zone_names({}, 1) == []
        assert forecast_zone_names({"forecast_zone": None}, 1) == []
