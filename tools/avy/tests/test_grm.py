from caltopo_layers import (
    aspect_runs,
    elevation_segments,
    grm_layer,
    sector_levels,
    uniform_band_levels,
    utah_band_levels,
)


ELEVATIONS = {"btl": (0, 7500), "ntl": (7501, 9000), "atl": (9001, 20310)}


class TestElevationSegments:
    def test_blurs_band_edges(self):
        segments = elevation_segments(ELEVATIONS, blur=500)
        assert segments == [
            (0, 6999, ("btl",)),
            (7000, 8000, ("btl", "ntl")),
            (8001, 8499, ("ntl",)),
            (8500, 9500, ("ntl", "atl")),
            (9501, 20310, ("atl",)),
        ]

    def test_narrow_ntl_has_no_core_segment(self):
        elevations = {"btl": (0, 7500), "ntl": (7501, 7800), "atl": (7801, 20310)}
        segments = elevation_segments(elevations, blur=500)
        assert [s[2] for s in segments] == [("btl",), ("btl", "ntl"), ("ntl", "atl"), ("atl",)]
        # contiguous, no gaps or overlaps
        for prev, cur in zip(segments, segments[1:]):
            assert cur[0] == prev[1] + 1


class TestSectorLevels:
    def test_takes_worse_neighbor(self):
        # only south (octant 4) is 3
        levels = sector_levels([2, 2, 2, 2, 3, 2, 2, 2])
        # sectors 7 (SE upper half), 8, 9 (south), 10 (SW lower half) are 3
        assert [k for k, lvl in enumerate(levels) if lvl == 3] == [7, 8, 9, 10]


class TestAspectRuns:
    def test_uniform_is_all_aspects(self):
        assert aspect_runs([2] * 16) == [(0, 0, 2)]

    def test_merges_runs(self):
        levels = sector_levels([2, 2, 2, 2, 3, 2, 2, 2])
        runs = aspect_runs(levels)
        assert (135, 225, 3) in runs
        assert (225, 135, 2) in runs
        assert len(runs) == 2


class TestGrmLayer:
    def test_uniform_considerable(self):
        rules, layer, legend = grm_layer(uniform_band_levels({"btl": 3, "ntl": 3, "atl": 3}), ELEVATIONS)
        assert "s30-35a0-0e0-20310f FF9900" in rules
        assert "s35-90a0-0e0-20310f E00000" in rules
        assert layer.startswith("sc_")
        assert [row["level"] for row in legend if row["today"]] == ["Considerable"]
        assert len(legend) == 5

    def test_transition_uses_worse_band(self):
        rules, _, _ = grm_layer(uniform_band_levels({"btl": 2, "ntl": 3, "atl": 3}), ELEVATIONS)
        assert "s30-35a0-0e6850-20310f FF9900" in rules
        assert "s35-40a0-0e0-6849f FF9900" in rules

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
        assert rules == ["s40-90a0-0e0-20310f FF9900"]

    def test_low_has_caution_only(self):
        _, _, legend = grm_layer(uniform_band_levels({"btl": 1, "ntl": 1, "atl": 1}), ELEVATIONS)
        low = next(row for row in legend if row["level"] == "Low")
        assert low["caution"] == 40 and low["avoid"] is None

    def test_extreme_shades_all_slopes_red(self):
        rules, _, legend = grm_layer(uniform_band_levels({"btl": 5, "ntl": 5, "atl": 5}), ELEVATIONS)
        assert rules == ["s0-90a0-0e0-20310f E00000"]
        assert legend[-1]["caution"] is None and legend[-1]["avoid"] == 0


class TestBlurredProblemRules:
    def rule(self, band, *names):
        from avy_config import aspect
        return {"id": band, "aspects": [aspect[n] for n in names]}

    def test_north_upper_spreads_to_neighbors_and_down(self):
        from caltopo_layers import blurred_problem_rules
        rules = blurred_problem_rules([self.rule("atl", "north")], ELEVATIONS, "A200FF")
        # N octant blurred +/-22.5 deg into NW and NE, and down into the NTL/ATL transition
        assert rules == ["a315-45e8350-20310f A200FF"]

    def test_all_aspects_all_bands(self):
        from caltopo_layers import blurred_problem_rules
        names = ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"]
        rules = blurred_problem_rules([self.rule(b, *names) for b in ("btl", "ntl", "atl")], ELEVATIONS, "A200FF")
        assert rules == ["a0-0e0-20310f A200FF"]

    def test_no_aspects_no_rules(self):
        from caltopo_layers import blurred_problem_rules
        assert blurred_problem_rules([], ELEVATIONS, "A200FF") == []


class TestBlurredDangerRules:
    def test_band_edge_takes_worse_rating(self):
        from caltopo_layers import blurred_danger_rules
        rules = blurred_danger_rules(uniform_band_levels({"btl": 1, "ntl": 2, "atl": 2}), ELEVATIONS)
        # highest first; moderate reaches 650' below the BTL/NTL edge
        assert rules == ["a0-0e6850-20310f fff200", "a0-0e0-6849f 50b848"]

    def test_utah_aspects_blur(self):
        from caltopo_layers import blurred_danger_rules
        levels = {band: [2] * 8 for band in ("btl", "ntl", "atl")}
        levels["atl"][0] = 3  # considerable on north, upper
        rules = blurred_danger_rules(levels, ELEVATIONS)
        assert "a315-45e8350-20310f f7941e" in rules
