import pytest
import sys
from pathlib import Path

# Add the avy tools directory to the path so we can import modules
sys.path.insert(0, str(Path(__file__).parent.parent))


@pytest.fixture
def aspect_config():
    """Sample aspect configuration mapping directions to degree ranges."""
    return {
        "north": (339, 23),
        "northeast": (23, 68),
        "east": (68, 113),
        "southeast": (113, 158),
        "south": (158, 203),
        "southwest": (203, 248),
        "west": (248, 293),
        "northwest": (293, 339),
        0: (339, 23),
        1: (23, 68),
        2: (68, 113),
        3: (113, 158),
        4: (158, 203),
        5: (203, 248),
        6: (248, 293),
        7: (293, 339),
    }


@pytest.fixture
def sample_danger_rose():
    """Sample danger rose data string (24 values = 3 elevation bands x 8 aspects)."""
    return "3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1"


@pytest.fixture
def sample_zone_elevations():
    """Sample elevation bands for a zone."""
    return {
        "btl": (6000, 7500),
        "ntl": (7501, 9000),
        "atl": (9001, 20310),
    }
