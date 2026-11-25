from caltopo_layers import (
    grm_aspect_runs,
    grm_elevation_segments,
    grm_layer,
    grm_sector_levels,
    uniform_band_levels,
    utah_band_levels,
)


ELEVATIONS = {"btl": (0, 7500), "ntl": (7501, 9000), "atl": (9001, 20310)}


class TestGrmElevationSegments:
    def test_blurs_band_edges(self):
        segments = grm_elevation_segments(ELEVATIONS, blur=500)
        assert segments == [
            (0, 6999, ("btl",)),
            (7000, 8000, ("btl", "ntl")),
            (8001, 8499, ("ntl",)),
            (8500, 9500, ("ntl", "atl")),
            (9501, 20310, ("atl",)),
        ]

    def test_narrow_ntl_has_no_core_segment(self):
        elevations = {"btl": (0, 7500), "ntl": (7501, 7800), "atl": (7801, 20310)}
        segments = grm_elevation_segments(elevations, blur=500)
        assert [s[2] for s in segments] == [("btl",), ("btl", "ntl"), ("ntl", "atl"), ("atl",)]
        # contiguous, no gaps or overlaps
        for prev, cur in zip(segments, segments[1:]):
            assert cur[0] == prev[1] + 1


class TestGrmSectorLevels:
    def test_takes_worse_neighbor(self):
        # only south (octant 4) is 3
        levels = grm_sector_levels([2, 2, 2, 2, 3, 2, 2, 2])
        # sectors 7 (SE upper half), 8, 9 (south), 10 (SW lower half) are 3
        assert [k for k, lvl in enumerate(levels) if lvl == 3] == [7, 8, 9, 10]


class TestGrmAspectRuns:
    def test_uniform_is_all_aspects(self):
        assert grm_aspect_runs([2] * 16) == [(0, 0, 2)]

    def test_merges_runs(self):
        levels = grm_sector_levels([2, 2, 2, 2, 3, 2, 2, 2])
        runs = grm_aspect_runs(levels)
        assert (135, 225, 3) in runs
        assert (225, 135, 2) in runs
        assert len(runs) == 2


class TestGrmLayer:
    def test_uniform_considerable(self):
        rules, layer, legend = grm_layer(uniform_band_levels({"btl": 3, "ntl": 3, "atl": 3}), ELEVATIONS)
        assert "s30-35a0-0e0-20310f FF9900" in rules
        assert "s35-90a0-0e0-20310f E00000" in rules
        assert layer.startswith("sc_")
        assert [row["level"] for row in legend] == ["Considerable"]

    def test_transition_uses_worse_band(self):
        rules, _, _ = grm_layer(uniform_band_levels({"btl": 2, "ntl": 3, "atl": 3}), ELEVATIONS)
        assert "s30-35a0-0e7000-20310f FF9900" in rules
        assert "s35-40a0-0e0-6999f FF9900" in rules

    def test_no_rating_returns_none(self):
        assert grm_layer(uniform_band_levels({"btl": 0, "ntl": 0, "atl": 0}), ELEVATIONS) is None

    def test_utah_rose(self):
        # UAC lists the upper band first; utah5/6 = considerable, utah3/4 = moderate
        rose = ",".join(["5"] * 8 + ["3"] * 8 + ["1"] * 8)
        levels = utah_band_levels(rose)
        assert levels["atl"] == [3] * 8
        assert levels["ntl"] == [2] * 8
        assert levels["btl"] == [1] * 8

    def test_merges_identical_segments(self):
        rules, _, _ = grm_layer(uniform_band_levels({"btl": 1, "ntl": 1, "atl": 1}), ELEVATIONS)
        assert rules == ["s40-45a0-0e0-20310f FF9900", "s45-90a0-0e0-20310f E00000"]
