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
# state_info = [
#     {
#         "abbr": "AK",
#         "name": "Alaska",
#         "elevations": {
#             0: {
#                 "lower": (0, 4400),
#                 "middle": (4401, 6100),
#                 "upper": (6101, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "AZ",
#         "name": "Arizona",
#         "elevations": {
#             0: {
#                 "lower": (0, 9700),
#                 "middle": (9701, 11500),
#                 "upper": (11501, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "CA",
#         "name": "California",
#         "elevations": {
#             0: {
#                 "lower": (0, 6200),
#                 "middle": (6201, 8700),
#                 "upper": (8701, 20310),
#             },
#             128: {
#                 "lower": (0, 7800),
#                 "middle": (7801, 10000),
#                 "upper": (10001, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "CO",
#         "name": "Colorado",
#         "elevations": {
#             0: {
#                 "lower": (0, 9500),
#                 "middle": (9501, 11500),
#                 "upper": (11501, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "ID",
#         "name": "Idaho",
#         "elevations": {
#             0: {},
#             149: {}, #TODO fill in
#             272: {
#                 "lower": (0, 4500),
#                 "middle": (4501, 5500),
#                 "upper": (5501, 20310),
#             },
#             153: {
#                 "lower": (0, 6500),
#                 "middle": (6501, 7500),
#                 "upper": (7501, 20310),
#             },
#             717: {
#                 "lower": (0, 7500),
#                 "middle": (7501, 8500),
#                 "upper": (8501, 20310),
#             },
#             714: {
#                 "lower": (0, 7500),
#                 "middle": (7501, 9500),
#                 "upper": (9501, 20310),
#             },
#             716: {
#                 "lower": (0, 7500),
#                 "middle": (7501, 9000),
#                 "upper": (9001, 20310),
#             },
#             716: {
#                 "lower": (0, 6500),
#                 "middle": (6501, 8500),
#                 "upper": (8501, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "MT",
#         "name": "Montana",
#         "elevations": {
#             0: {
#                 "lower": (0, 4400),
#                 "middle": (4401, 6100),
#                 "upper": (6101, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "NH",
#         "name": "New Hampshire",
#         "elevations": {
#             0: {
#                 "lower": (0, 3000),
#                 "middle": (3001, 5100),
#                 "upper": (5101, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "NM",
#         "name": "New Mexico",
#         "elevations": {
#             0: {
#                 "lower": (0, 9500),
#                 "middle": (9501, 11500),
#                 "upper": (11501, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "OR",
#         "name": "Oregon",
#         "elevations": {
#             0: {
#                 "lower": (0, 4000),
#                 "middle": (4001, 5000),
#                 "upper": (5001, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "UT",
#         "name": "Utah",
#         "elevations": {},
#         "active": True,
#     },
#     {
#         "abbr":"WA",
#         "name": "Washington",
#         "elevations": {
#             0: {
#                 "lower": (0, 3900),
#                 "middle": (3901, 4850),
#                 "upper": (4851, 20310),
#             },
#         },
#         "active": True,
#     },
#     {
#         "abbr": "WY",
#         "name": "Wyoming",
#         "elevations": {
#             0: {},
#             1331: {
#                 "lower": (0, 7501),
#                 "middle": (7501, 8500),
#                 "upper": (8501, 20310),
#             },
#             1329: {
#                 "lower": (6000, 7500),
#                 "middle": (7501, 9000),
#                 "upper": (9001, 20310),
#             },
#             1330: {
#                 "lower": (6000, 7500),
#                 "middle": (7501, 9000),
#                 "upper": (9001, 10500),
#             },
#         },
#         "active": True,
#     },
# ]

with open("state_info.yaml", "r") as file:
    state_info = yaml.safe_load(file)

# print(data)
# print(state_info)