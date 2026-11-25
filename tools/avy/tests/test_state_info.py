import json
from pathlib import Path

import pytest
import yaml

AVY_DIR = Path(__file__).parent.parent
STATE_INFO = AVY_DIR / "state_info.yaml"
MAP_LAYER = AVY_DIR / "avalanche-reports-raw" / "map-layer.json"
CANADA_SUBREGIONS = AVY_DIR / "data" / "canadian_subregions.geojson"


@pytest.fixture(scope="module")
def state_info():
    with open(STATE_INFO) as fp:
        return yaml.safe_load(fp)


@pytest.fixture(scope="module")
def map_layer_zones():
    """Zone ids by state from the downloaded avalanche.org map layer."""
    if not MAP_LAYER.exists():
        pytest.skip("map-layer.json not downloaded; run tools/avy/download-avy-json.py")
    with open(MAP_LAYER) as fp:
        features = json.load(fp)["features"]
    zones = {}
    for feature in features:
        zones.setdefault(feature["properties"]["state"], set()).add(feature["id"])
    return zones


def test_every_state_has_a_default(state_info):
    for state in state_info:
        assert 0 in state["elevations"], f"{state['abbr']} has no default (key 0) bands"


def test_bands_are_contiguous(state_info):
    """ntl starts right after btl ends and atl starts right after ntl ends."""
    for state in state_info:
        for zone_id, bands in state["elevations"].items():
            label = f"{state['abbr']} {zone_id}"
            assert bands["btl"][1] + 1 == bands["ntl"][0], f"{label}: btl/ntl gap or overlap"
            assert bands["ntl"][1] + 1 == bands["atl"][0], f"{label}: ntl/atl gap or overlap"
            for band in ("btl", "ntl", "atl"):
                low, high = bands[band]
                assert low <= high, f"{label}: {band} low > high"


def test_zone_ids_exist_in_map_layer(state_info, map_layer_zones):
    """Catch zone ids avalanche.org has re-keyed; stale ids silently fall back to the state default."""
    stale = [
        f"{state['abbr']} {zone_id}"
        for state in state_info
        if state["abbr"] != "CAN"
        for zone_id in state["elevations"]
        if zone_id != 0 and zone_id not in map_layer_zones.get(state["abbr"], set())
    ]
    assert not stale, f"zone ids not in map-layer.json (re-keyed upstream?): {', '.join(stale)}"


def test_canada_keys_exist_in_subregions(state_info):
    """Canada bands are keyed by mountain_range or polygon_name from the vendored subregions."""
    with open(CANADA_SUBREGIONS) as fp:
        props = [f["properties"] for f in json.load(fp)["features"]]
    known = {p["mountain_range"] for p in props} | {p["polygon_name"] for p in props}
    canada = next(state for state in state_info if state["abbr"] == "CAN")
    unknown = [key for key in canada["elevations"] if key != 0 and key not in known]
    assert not unknown, f"Canada band keys not in canadian_subregions.geojson: {unknown}"
