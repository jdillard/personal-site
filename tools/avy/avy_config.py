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
    0: (339, 23),
    1: (23, 68),
    2: (68, 113),
    3: (113, 158),
    4: (158, 203),
    5: (203, 248),
    6: (248, 293),
    7: (293, 339),
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
    "no report": {"scale": 0, "color": "939598", "desc": "No report"},
    "noforecast": {"scale": 0, "color": "939598", "desc": "No forecast"},
    "low": {"scale": 1, "color": "50b848", "desc": "Low danger"},
    "moderate": {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    "considerable": {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    "high": {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    "extreme": {"scale": 5, "color": "231f20", "desc": "Extreme danger"},
    0: {"scale": 0, "color": "939598", "desc": "No rating"},
    1: {"scale": 1, "color": "50b848", "desc": "Low danger"},
    2: {"scale": 2, "color": "fff200", "desc": "Moderate danger"},
    3: {"scale": 3, "color": "f7941e", "desc": "Considerable danger"},
    4: {"scale": 4, "color": "ed1c24", "desc": "High danger"},
    5: {"scale": 5, "color": "231f20", "desc": "Extreme danger"},
    "utah0" : {"scale": 0, "color": "939598", "shortdesc": "No rating", "desc": "No rating"},
    "utah1" : {"scale": 1, "color": "50b848", "shortdesc": "Low", "desc": "Low danger"},
    "utah2" : {"scale": 1, "color": "50b848", "shortdesc": "Low", "desc": "Low danger"},
    "utah3" : {"scale": 2, "color": "fff200", "shortdesc": "Moderate", "desc": "Moderate danger"},
    "utah4" : {"scale": 2, "color": "fff200", "shortdesc": "Moderate", "desc": "Moderate danger"},
    "utah5" : {"scale": 3, "color": "f7941e", "shortdesc": "Considerable", "desc": "Considerable danger"},
    "utah6" : {"scale": 3, "color": "f7941e", "shortdesc": "Considerable", "desc": "Considerable danger"},
    "utah7" : {"scale": 4, "color": "ed1c24", "shortdesc": "High", "desc": "High danger"},
    "utah8" : {"scale": 4, "color": "ed1c24", "shortdesc": "High", "desc": "High danger"},
    "utah9" : {"scale": 5, "color": "231f20", "shortdesc": "Extreme", "desc": "Extreme danger"},
    "utah10" : {"scale": 5, "color": "231f20", "shortdesc": "Extreme", "desc": "Extreme danger"},
}

#TODO use danger_levels instead
avy_danger_levels = {
    0: "No Report",
    1: "Low",
    2: "Moderate",
    3: "Considerable",
    4: "High",
    5: "Extreme",
    "earlyseason": 0,
    "spring": 0,
    "no report": 0,
    "low": 1,
    "moderate": 2,
    "considerable": 3,
    "high": 4,
    "extreme": 5,
}

# problems color codes
problem_color = {
    0: "A200FF",
    1: "0000FF",
    2: "009AFF",
}

# limit the states that are published (active True/False)
with open("tools/avy/state_info.yaml", "r") as file:
    state_info = yaml.safe_load(file)