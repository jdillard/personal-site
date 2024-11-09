import yaml

# lower and upper degrees for each cardinal direction
aspect = {
    "north": (339, 23),
    "northeast": (23, 68),
    "east": (68, 113),
    "southeast": (113, 158),
    "south": (158, 203),
    "s": (158, 203),
    "southwest": (203, 248),
    "west": (248, 293),
    "northwest": (293, 339),
}

# abbreviation for each cardinal direction
aspect_abbr = {
    "north": "N",
    "northeast": "NE",
    "east": "E",
    "southeast": "SE",
    "south": "S",
    "southwest": "SW",
    "west": "W",
    "northwest": "NW",
}

# danger level color codes
danger_levels = {
    "earlyseason": {"scale": 0, "color": "939598", "desc": "Early season"},
    "spring": {"scale": 0, "color": "939598", "desc": "Spring Conditions"},
    "norating": {"scale": 0, "color": "939598", "desc": "No rating"},
    "noforecast": {"scale": 0, "color": "939598", "desc": "No forecast"},
    "low": {"scale": 1, "color": "50b848", "desc": "Low danger"},
    "moderate": {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    "considerable": {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    "high": {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    0: {"scale": 0, "color": "939598", "desc": "No rating"},
    1: {"scale": 1, "color": "50b848", "desc": "Low danger"},
    2: {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    3: {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    4: {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    5: {"scale": 5, "color": "231f20", "desc": "Extreme danger"},
}

# problems color codes
problem_color = {
    0: "A200FF",
    1: "0000FF",
    2: "009AFF",
}

# limit the states that are published (active True/False)
with open("state_info.yaml", "r") as file:
    state_info = yaml.safe_load(file)