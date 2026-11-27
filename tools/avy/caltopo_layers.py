from collections import Counter
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
import json
import re
from shapely.geometry import MultiPolygon, Polygon, mapping, shape
from slugify import slugify
import os
import urllib.parse
import uuid
import dateutil.parser
from zoneinfo import ZoneInfo
import avy_config as config
from utils import convert_to_local_time, format_elevation_range, find_object_by_key_value


#TODO support search by lat/long (mainly for CO/BC) (lambda function?)
#TODO update copy?
#TODO git pull rebase on action to prevent conflicts while the script is running?

aspect = config.aspect
aspect_abbr = config.aspect_abbr
danger_levels = config.danger_levels
problem_color = config.problem_color
state_info = config.state_info

# elevation bands, lowest first
BANDS = ("btl", "ntl", "atl")
# Avalanche Canada danger rating keys by band
CA_DANGER_KEYS = {"btl": "btl", "ntl": "tln", "atl": "alp"}
# Avalanche Canada problem elevation values to bands
CA_PROBLEM_BANDS = {"btl": "btl", "tln": "ntl", "alp": "atl"}
# avalanche.org danger keys by band
US_DANGER_KEYS = {"btl": "lower", "ntl": "middle", "atl": "upper"}
# avalanche.org problem location levels to bands
US_PROBLEM_BANDS = {"lower": "btl", "middle": "ntl", "upper": "atl"}


def sort_directions(subset):
    """Sort random set of cardinal directions and return smallest and largest degree"""

    subset = list(subset)
    subset_sorted = [subset.pop()]

    match = True
    while match:
        match = False
        for i in range(len(subset)):
            if subset[i][0] == subset_sorted[-1][1]:
                match = True
                subset_sorted.append(subset.pop(i))
                break
        for i in range(len(subset)):
            if subset[i][1] == subset_sorted[0][0]:
                match = True
                subset_sorted.insert(0, subset.pop(i))
                break

    if subset_sorted[0][0] == subset_sorted[-1][1]:
        desc = "All aspects"
    else:
        start = list(filter(lambda x: aspect[x] == subset_sorted[0], aspect))[0]
        end = list(filter(lambda x: aspect[x] == subset_sorted[-1], aspect))[0]
        desc = f"{aspect_abbr[start]} to {aspect_abbr[end]} aspects"

    return (subset_sorted[0][0],subset_sorted[-1][1], desc)


def split_elv_bands(danger_rose):
    chunked_list = list()
    chunk_size = 8
    danger_rose_int = [int(x) for x in danger_rose.split(',')]

    for i in range(0, len(danger_rose_int), chunk_size):
        chunked_list.append(danger_rose_int[i:i+chunk_size])

    return chunked_list


def uac_rose_by_band(danger_rose):
    """Pair each UAC danger rose ring with its elevation band, lowest first.

    UAC roses list the highest elevation ring first (array[0] is the top
    band on the N aspect), so the rings are reversed to line up with
    ("btl", "ntl", "atl"), the order the other centers use.
    https://utahavalanchecenter.org/docs/api/forecast
    """
    return list(zip(BANDS, reversed(split_elv_bands(danger_rose))))


# subregion names that contain a bare hyphen and must not be split
HYPHENATED_SUBREGIONS = (
    "Badshot-Battle",
    "Chic-Chocs",
    "Cirrus-Wilson",
    "Harrison-Fraser",
    "Microwave-Sinclair",
)


def split_area_name(name):
    """Split an Avalanche Canada area name into its subregions.

    Dynamic areas are named by joining subregions with "-",
    e.g. "Coquihalla-Manning-Skagit". Spaced dashes ("Spray - KLakes") and
    known hyphenated names ("Chic-Chocs") belong to a single subregion.
    """
    placeholder = "\0"
    for subregion in HYPHENATED_SUBREGIONS:
        name = name.replace(subregion, subregion.replace("-", placeholder))
    parts = re.split(r"(?<! )-(?! )", name)
    return [part.replace(placeholder, "-").strip() for part in parts if part.strip()]


def _round_coords(coords, digits=4):
    if isinstance(coords[0], (int, float)):
        return [round(c, digits) for c in coords]
    return [_round_coords(c, digits) for c in coords]


def _simplify(geometry, tolerance=0.0005):
    """Simplify a GeoJSON geometry (~50m tolerance) to keep the overlay files small."""
    return mapping(shape(geometry).simplify(tolerance, preserve_topology=True))


def subregions_geojson(subregions, shapes):
    """FeatureCollection of the named subregions' shapes for the map overlay.

    shapes maps subregion name to GeoJSON geometry. Returns None for areas
    with fewer than two subregions, since there is nothing to subdivide.
    Names without a known shape are skipped.
    """
    if len(subregions) < 2:
        return None
    features = []
    for name in subregions:
        geometry = shapes.get(name)
        if not geometry:
            print(f"No subregion shape for {name!r}")
            continue
        features.append({
            "type": "Feature",
            "geometry": {"type": geometry["type"], "coordinates": _round_coords(_simplify(geometry)["coordinates"])},
            "properties": {"name": name},
        })
    if not features:
        return None
    return {"type": "FeatureCollection", "features": features}


def canada_area_elevations(subregions, subregion_ranges, elevations):
    """Elevation bands for a dynamic Avalanche Canada area.

    Each subregion maps to its own entry in elevations if there is one, else to
    its mountain range's entry (subregion_ranges maps subregion name to range).
    The area uses the entry more than half of its subregions map to, else the
    default (key 0), e.g. an early-season area spanning all of BC.
    """
    keys = []
    for name in subregions:
        if name in elevations:
            keys.append(name)
        elif subregion_ranges.get(name) in elevations:
            keys.append(subregion_ranges[name])
    return majority_elevations(keys, len(subregions), elevations) or elevations[0]


def majority_elevations(keys, total, elevations):
    """Bands that more than half of total parts map to, else None.

    keys holds the elevations key of each part that has one. Identical band
    sets count together (e.g. several ranges sharing the same entry).
    """
    by_bands = Counter(json.dumps(elevations[key], sort_keys=True) for key in keys)
    if by_bands:
        bands, count = by_bands.most_common(1)[0]
        if count * 2 > total:
            return next(elevations[key] for key in keys if json.dumps(elevations[key], sort_keys=True) == bands)
    return None


def zone_elevations(zone_id, ranges, elevations):
    """Elevation bands for a US zone and whether they are the state default.

    The zone's own entry wins. Else, for centers like CAIC that merge many
    subzones into one forecast, ranges lists each subzone's range name and
    the zone uses the range bands more than half of its subzones map to.
    Else the state default (key 0).
    """
    if zone_id in elevations:
        return elevations[zone_id], False
    bands = majority_elevations([r for r in ranges if r in elevations], len(ranges), elevations)
    if bands:
        return bands, False
    return elevations.get(0), True


def short_area_name(subregions, max_chars=28):
    """Readable short name for an area, e.g. "Blue River +9 more".

    Shows as many whole names as fit in max_chars, counting the "+N more"
    suffix for the rest, so dropdowns stay narrow. At least one name is shown.
    """
    if not subregions:
        return ""
    for count in range(len(subregions), 0, -1):
        remaining = len(subregions) - count
        name = ", ".join(subregions[:count]) + (f" +{remaining} more" if remaining else "")
        if len(name) <= max_chars or count == 1:
            return name


def forecast_zone_names(report, zone_id):
    """Distinct range names a forecast covers, from its forecast_zone list.

    Centers like CAIC merge many small zones into one forecast, and the
    map layer names them all generically ("CAIC zone"). The zone's own
    entry comes first, then the rest in order of appearance.
    """
    zones = report.get("forecast_zone") or []
    ordered = [z for z in zones if z.get("id") == zone_id] + [z for z in zones if z.get("id") != zone_id]
    return list(dict.fromkeys(z["name"] for z in ordered if z.get("name")))


#TODO better variable names
def find_aspect_values(list, value, aspect):
    indices = [index for index, element in enumerate(list) if element == value]
    aspect_values = [aspect[index] for index in indices]
    return aspect_values


def band_desc(elevations, band):
    """Human readable elevation range for a band, e.g. "below 7500'"."""
    low, high = elevations[band]
    if band == "btl":
        return f"below {high}'"
    return format_elevation_range((low, high))


def layer_param(rules):
    """Join shading rules into a CalTopo layer parameter."""
    return f"sc_{'p'.join(rule.replace(' ', 'c') for rule in rules)}"


def danger_rule(elevations, band, level):
    """Single color danger rule covering every aspect in a band."""
    return {
        "id": band,
        "desc": f"{level['desc']} ({band_desc(elevations, band)})",
        "colors": [f"#{level['color']}"],
    }


# aspect ranges clockwise from north; a problem rule's "rose" holds indexes into this for the template's aspect rose
ROSE_ASPECTS = [aspect[name] for name in ("north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest")]


def problem_rule(elevations, band, aspects, i):
    """Problem rule for the given aspects in a band, colored by problem number."""
    _, _, desc = sort_directions(aspects)
    return {
        "id": band,
        "desc": f"{desc} ({band_desc(elevations, band)})",
        "color": f"#{problem_color.get(i)}",
        "aspects": list(aspects),  # raw aspect ranges, for the blurred layers
        "rose": sorted({ROSE_ASPECTS.index(a) for a in aspects}),  # octant indexes, for the page's aspect rose
    }


def elevation_segments(elevations, blur=None):
    """Split the bands into core and transition segments for the blurred layers.

    Band edges are blurred by `blur` feet on each side, and each transition
    segment covers both bands it straddles. Returns (low, high, bands) tuples,
    lowest first.
    """
    blur = config.elevation_blur if blur is None else blur
    bottom, btl_top = elevations["btl"]
    ntl_top = elevations["ntl"][1]
    top = elevations["atl"][1]

    t1 = [max(bottom, btl_top - blur), btl_top + blur]
    t2 = [ntl_top - blur, min(top, ntl_top + blur)]
    if t1[1] >= t2[0]:  # narrow NTL: split the overlap at its midpoint
        t1[1] = (btl_top + ntl_top) // 2
        t2[0] = t1[1] + 1

    segments = [
        (bottom, t1[0] - 1, ("btl",)),
        (t1[0], t1[1], ("btl", "ntl")),
        (t1[1] + 1, t2[0] - 1, ("ntl",)),
        (t2[0], t2[1], ("ntl", "atl")),
        (t2[1] + 1, top, ("atl",)),
    ]
    return [s for s in segments if s[0] <= s[1]]


def sector_levels(octant_levels):
    """Level for each of 16 22.5 degree sectors (sector 0 starts at 337.5).

    Each sector is half an octant and takes the worse of its octant and the
    neighboring octant on that side, blurring aspect edges by ~22.5 degrees.
    The SLF interpretation guide treats "a segment of about one eighth of the
    compass" around an aspect boundary as marginal, i.e. 45 degrees straddling
    the boundary, so 22.5 on each side.
    """
    levels = []
    for k in range(16):
        octant = k // 2
        neighbor = (octant - 1) % 8 if k % 2 == 0 else (octant + 1) % 8
        levels.append(max(octant_levels[octant], octant_levels[neighbor]))
    return levels


def sector_start(k):
    """Start bearing of sector k. Runs only break at octant centers (odd k), a multiple of 45."""
    return (k - 1) // 2 * 45 % 360


def aspect_runs(sector_levels):
    """Merge adjacent sectors with the same level into (start, end, level) aspect ranges."""
    if len(set(sector_levels)) == 1:
        return [(0, 0, sector_levels[0])]  # 0-0 is all aspects
    # rotate so the first sector begins a new run
    first = next(k for k in range(16) if sector_levels[k] != sector_levels[k - 1])
    runs = []
    for k in [(first + i) % 16 for i in range(16)]:
        if runs and runs[-1][2] == sector_levels[k]:
            runs[-1][1] = k
        else:
            runs.append([k, k, sector_levels[k]])
    return [(sector_start(start), sector_start(end + 1), level) for start, end, level in runs]


def blurred_segments(octant_levels_by_band, elevations):
    """Blurred (low, high, aspect runs) segments, lowest first.

    Elevation band edges and aspect edges are blurred, each transition taking
    the worse (max) of the levels it straddles. Adjacent segments that come
    out the same are merged.
    """
    segments = []
    for low, high, bands in elevation_segments(elevations):
        octant_levels = [max(octant_levels_by_band[band][i] for band in bands) for i in range(8)]
        runs = aspect_runs(sector_levels(octant_levels))
        if segments and segments[-1][2] == runs:
            segments[-1][1] = high
        else:
            segments.append([low, high, runs])
    return segments


def blurred_problem_rules(rules, elevations, color):
    """Problem shading rules with band and aspect edges blurred outward.

    A problem is present or not, so the blur only grows the shaded area: a
    marginal aspect or elevation is shaded if either side of it has the problem.
    """
    presence = {band: [0] * 8 for band in BANDS}
    for rule in rules:
        for octant in range(8):
            if aspect[octant] in rule["aspects"]:
                presence[rule["id"]][octant] = 1
    return [
        f"a{start}-{end}e{low}-{high}f {color}"
        for low, high, runs in blurred_segments(presence, elevations)
        for start, end, present in runs
        if present
    ]


def blurred_danger_rules(octant_levels_by_band, elevations):
    """Danger shading rules with band and aspect edges blurred, highest first.

    Marginal aspects and elevations take the worse of the ratings they
    straddle, as with the GRM layer.
    """
    rules = [
        f"a{start}-{end}e{low}-{high}f {danger_levels[level]['color']}"
        for low, high, runs in blurred_segments(octant_levels_by_band, elevations)
        for start, end, level in runs
    ]
    return rules[::-1]


def grm_layer(octant_levels_by_band, elevations):
    """Slope steepness to avoid per the Graphical Reduction Method.

    octant_levels_by_band maps each band to 8 danger scales (N clockwise).
    Rather than coloring terrain by danger level, shade only slopes steep
    enough to be a concern at that level: orange for caution, red for avoid.
    Returns (rules, layer, legend) or None if nothing would be shaded.
    """
    segments = blurred_segments(octant_levels_by_band, elevations)

    rules = []
    for low, high, runs in segments:
        for start, end, level in runs:
            thresholds = config.grm_slope_thresholds.get(level)
            if not thresholds:
                continue
            caution, avoid = thresholds
            if caution is not None:
                top = 90 if avoid is None else avoid
                rules.append(f"s{caution}-{top}a{start}-{end}e{low}-{high}f {config.grm_colors['caution']}")
            if avoid is not None:
                rules.append(f"s{avoid}-90a{start}-{end}e{low}-{high}f {config.grm_colors['avoid']}")
    if not rules:
        return None

    forecast = {lvl for levels in octant_levels_by_band.values() for lvl in levels}
    legend = [
        {
            "level": danger_levels[lvl]["desc"].replace(" danger", ""),
            "caution": thresholds[0],
            "avoid": thresholds[1],
            "forecast": lvl in forecast,
        }
        for lvl, thresholds in config.grm_slope_thresholds.items()
        if thresholds
    ]
    return rules, layer_param(rules), legend


def uniform_band_levels(levels):
    """Expand one danger scale per band to the 8 aspects of each band."""
    return {band: [levels[band]] * 8 for band in BANDS}


def utah_band_levels(rose):
    """Danger scale per aspect per band from a UAC danger rose."""
    return {band: [danger_levels[f"utah{n}"]["scale"] for n in chunk] for band, chunk in uac_rose_by_band(rose)}


def make_problem(i, name, rules, tomorrow, elevations):
    """Problem entry for the template.

    rules list the forecast's aspects and bands as written; the CalTopo layer
    and copied rules use the blurred version (see blurred_problem_rules).
    """
    layer_rules = blurred_problem_rules(rules, elevations, problem_color.get(i))
    return {
        "name": f"{tomorrow} {name}",  # CalTopo layer title, dated
        "label": name,  # region page heading, no date
        "desc": f"Problem #{i+1}",
        "color": f"#{problem_color.get(i)}",
        "rules": rules,
        "layer_rules": layer_rules,
        "layers": layer_param(layer_rules),
        "uuid": str(uuid.uuid4()),
    }


def caltopo_layers(layers_template, tomorrow, danger_layer, problems, grm=None):
    """CalTopo URL layer parameters for the GRM, danger and problem layers.

    The GRM layer, when present, is the one shown on load.
    """
    grm_layer_param = grm[1] if grm else ""
    layer_info = urllib.parse.quote(layers_template.render(
        sun_day=tomorrow,
        grm_layer=grm_layer_param,
        danger_layer=danger_layer,
        problem_layers=problems,
    ))
    active = grm_layer_param or danger_layer
    if active:
        return f"a={active}&cl={layer_info}"
    return f"cl={layer_info}"


def band_confidence(elevations, fallback=False):
    """Confidence of a bands entry; fallback means a zone using its state's default."""
    if fallback:
        return "low"
    return elevations.get("confidence", "high")


def center_message(prefix, zone):
    return f'{prefix} See <a class="no-underline fancy-link relative light-red" href="{zone["url"]}">{zone["center_id"]}</a> for more information.'


def is_expired(expires):
    return bool(expires) and dateutil.parser.parse(expires) <= datetime.now(tz=ZoneInfo('UTC'))


def utah_danger(rose, elevations):
    """Danger rules from a UAC danger rose, where a band can have several colors."""
    # Each element of the rose array corresponds to a position on the rose,
    # starting from the highest elevation, northern aspect and proceeds clockwise.
    # https://utahavalanchecenter.org/docs/api/forecast
    danger_rules = []
    for band, chunk in uac_rose_by_band(rose):
        indexes = sorted(set(chunk))
        if len(indexes) == 1: # single color danger rose
            danger_rules.append(danger_rule(elevations, band, danger_levels.get(f"utah{indexes[0]}")))
            continue

        # multi color danger rose
        layer_colors = [f"#{danger_levels.get(f'utah{danger_index}')['color']}" for danger_index in indexes]
        low_desc = danger_levels.get(f"utah{indexes[0]}")["shortdesc"]
        high_desc = danger_levels.get(f"utah{indexes[-1]}")["shortdesc"]
        danger_rules.append({
            "id": band,
            "desc": f"{low_desc} to {high_desc} danger ({band_desc(elevations, band)})",
            "colors": layer_colors,
        })

    zone_color = f"utah{max(max(chunk) for chunk in split_elv_bands(rose))}"
    return danger_rules, zone_color


def utah_problems(data, elevations, tomorrow):
    problems = []
    # UAC numbers problems 1-3; i stays 0-based for problem_color
    for i in range(3):
        n = i + 1
        if data.get(f"avalanche_problem_{n}") and data.get(f"danger_rose_{n}"):
            rules = []
            for band, chunk in uac_rose_by_band(data[f"danger_rose_{n}"]):
                # 16 marks the aspects where the problem exists
                problem_aspects = find_aspect_values(chunk, 16, aspect)
                if problem_aspects:
                    rules.append(problem_rule(elevations, band, problem_aspects, i))
            problems.append(make_problem(i, data[f"avalanche_problem_{n}"], rules, tomorrow, elevations))
    return problems


def main():
    # load jinja templates
    environment = Environment(loader=FileSystemLoader("tools/avy/templates/"))
    index_template = environment.get_template("dem-shading-index.j2")
    region_template = environment.get_template("dem-shading-region.j2")
    layers_template = environment.get_template("dem-shading-layers.j2")

    # calculate geo center of CA areas
    with open("tools/avy/avalanche-reports-raw/ca-areas.json") as fp:
        ca_areas = json.load(fp)

    # dynamically group US zones by state
    with open("tools/avy/avalanche-reports-raw/map-layer.json") as fp:
        map_layer = json.load(fp)

    # loop through all the zones in the avalanche.org map layer
    states = []
    for item in map_layer["features"]:
        # calculate center of each zone
        if item["geometry"]["type"] == "Polygon":
            centroid = Polygon(item["geometry"]["coordinates"][0]).centroid
            lat_long = [centroid.x, centroid.y]
        elif item["geometry"]["type"] == "MultiPolygon":
            polygons = []
            for shape in item["geometry"]["coordinates"][0]:
                polygons.append(Polygon(shape))
            centroid = MultiPolygon(polygons).centroid
            lat_long = [centroid.x, centroid.y]
        else:
            print('Unknown geometry type...')

        # gather zone info
        if "CAIC" in item["properties"]["center_id"]:
            url = f"{item['properties']['link']}?lat={centroid.y}&lng={centroid.x}"
        else:
            url = item["properties"]["link"]
        zone_info = {
            "zone_id": item["id"],
            "name": item["properties"]["name"],
            "slug": f"{item['properties']['center_id']}-{item['id']}", #TODO get rid of slug and just use the id instead?
            "url": url,
            "center_id": item["properties"]["center_id"],
            "center_name": item["properties"]["center"],
            "center_link": item["properties"]["center_link"],
            "geo": lat_long,
            "published": False,
            "danger": [],
            "problems": [],
        }

        # CAIC zones are all named "CAIC zone" in the map layer; name them by the ranges their forecast covers
        report_path = f"tools/avy/avalanche-reports-raw/{zone_info['slug']}.json"
        if "CAIC" in zone_info["center_id"] and os.path.isfile(report_path):
            with open(report_path) as fp:
                report = json.load(fp)
            ranges = forecast_zone_names(report, item["id"])
            # one range name per subzone, for picking elevation bands by majority
            zone_info["ranges"] = [z["name"] for z in report.get("forecast_zone") or [] if z.get("name")]
            if ranges:
                zone_info["name"] = ", ".join(ranges)
                zone_info["short_name"] = short_area_name(ranges)

        # check if the zone's state already exists and append to it if so
        found = False
        for state in states:
            if state['state'] == item["properties"]["state"]:
                state['zones'].append(zone_info)
                found = True
                break
        if not found:
            info = next(info for info in state_info if info["abbr"] == item["properties"]["state"])
            states.append({
                "state": item["properties"]["state"],
                "page": f"/avy/{item['properties']['state'].lower()}",
                "zones": [zone_info],
                "active": info["active"],
                "name": info["name"],
                "elevations": info["elevations"],
                "report_access": info.get("report_access", True),
            })

    # delete all DEM files in order to start fresh
    dir = "source/avy"
    for f in os.listdir(dir):
        os.remove(os.path.join(dir, f))

    with open("tools/avy/avalanche-reports-raw/ca-metadata.json") as fp:
        ca_metadata = json.load(fp)

    # subregion shapes by name, vendored from avalanche-canada/forecast-polygons
    # at the commit in canadian_subregions.commit (the build workflow warns when upstream moves)
    with open("tools/avy/data/canadian_subregions.geojson") as fp:
        subregion_features = json.load(fp)["features"]
    subregion_shapes = {f["properties"]["polygon_name"]: f["geometry"] for f in subregion_features}
    subregion_ranges = {f["properties"]["polygon_name"]: f["properties"]["mountain_range"] for f in subregion_features}

    # bands by mountain range or subregion (see the CAN entry in state_info.yaml)
    canada_elevations = next(info for info in state_info if info["abbr"] == "CAN")["elevations"]

    areas = []
    for product in ca_metadata:
        published = False
        tomorrow = False
        data = {}
        area = {}

        # look up the area's geometry
        area_slug_id = product["area"]["id"]
        found_value = find_object_by_key_value(ca_areas["features"], "id", area_slug_id)
        if not found_value:
            print(f"Skipping Canada area {area_slug_id}: not found in ca-areas.json")
            continue

        if os.path.isfile(f"tools/avy/avalanche-reports-raw/{product['product']['id']}.json"):
            with open(f"tools/avy/avalanche-reports-raw/{product['product']['id']}.json") as fp:
                data = json.load(fp)

            # timezone calculations
            _, _, published, tomorrow = convert_to_local_time(
                data["report"]["dateIssued"],
                found_value.get('properties')["centroid"][1],
                found_value.get('properties')["centroid"][0],
            )
            # treat expired reports as unavailable so stale danger ratings are not shown
            if is_expired(data.get("report", {}).get("validUntil")):
                data["report"] = {} # keep area metadata, but drop expired report details
                published = False
        report = data.get("report", {})

        subregions = split_area_name(product["product"].get("title") or "")
        area["elevations"] = canada_area_elevations(subregions, subregion_ranges, canada_elevations)
        area["confidence"] = band_confidence(area["elevations"])

        # avy danger
        danger_rules = []
        danger_layer_rules = []
        danger_layer = ""
        zone_color = 0
        grm = None
        ratings = report["dangerRatings"][0]["ratings"] if report.get("dangerRatings") else {}
        if any(ratings.get(key) for key in CA_DANGER_KEYS.values()) and area["elevations"]:
            levels = {band: danger_levels.get(ratings[key]["rating"]["value"]) for band, key in CA_DANGER_KEYS.items()}
            danger_rules = [danger_rule(area["elevations"], band, levels[band]) for band in BANDS]
            band_levels = uniform_band_levels({band: level["scale"] for band, level in levels.items()})
            danger_layer_rules = blurred_danger_rules(band_levels, area["elevations"])
            danger_layer = layer_param(danger_layer_rules)
            zone_color = max(level["scale"] for level in levels.values())
            grm = grm_layer(band_levels, area["elevations"])

        # avy problems
        problems = []
        if report.get("problems") and area["elevations"]:
            for i, problem in enumerate(report["problems"]):
                problem_aspects = [aspect[direction["display"].lower()] for direction in problem["data"]["aspects"]]
                rules = [
                    problem_rule(area["elevations"], CA_PROBLEM_BANDS[elevation["value"]], problem_aspects, i)
                    for elevation in problem["data"]["elevations"]
                    if elevation["value"] in CA_PROBLEM_BANDS
                ]
                problems.append(make_problem(i, problem["type"]["display"], rules, tomorrow, area["elevations"]))

        area["published"] = published
        area["danger"] = danger_rules
        area["danger_layer_rules"] = danger_layer_rules
        area["problems"] = problems
        area["color"] = f"#{danger_levels[zone_color]['color']}"
        area["geo"] = found_value['properties']['centroid']
        area["name"] = ", ".join(subregions) or "Canada zone"
        area["short_name"] = short_area_name(subregions) or "Canada zone"
        subregion_layer = subregions_geojson(subregions, subregion_shapes)
        area["has_subregions"] = bool(subregion_layer)
        if subregion_layer:
            with open(f"source/assets/json/avalanche-zones/{area_slug_id}-subregions.geojson", "w") as out:
                json.dump(subregion_layer, out, separators=(",", ":"))
        area["slug"] = area_slug_id
        area["center_id"] = "Avalanche Canada"
        area["center_name"] = "Avalanche Canada"
        area["center_link"] = "https://avalanche.ca/"
        area["url"] = f"https://avalanche.ca/forecasts/{product['product']['id']}"
        area["grm"] = grm
        area["layers"] = caltopo_layers(layers_template, tomorrow, danger_layer, problems, grm)
        area["message"] = "" if danger_rules else center_message("Report not available.", area)

        areas.append(area)

    content = region_template.render(
        page="Canada",
        grm_colors=config.grm_colors,
        elevation_blur=config.elevation_blur,
        sun_day=tomorrow,
        zones=areas,
        states=states,
    )

    # create Canada DEM page
    with open(f"source/avy/canada.md", mode="w", encoding="utf-8") as message:
        message.write(content)
        print(f"... wrote source/avy/canada.md")

    # loop through states and create DEM state pages
    for state in states:
        if state["active"]:
            for zone in state["zones"]:
                published = False
                tomorrow = False
                data = {}
                if not state["report_access"]:
                    pass
                elif state["state"] == "UT":
                    if os.path.isfile(f"tools/avy/avalanche-reports-raw/{slugify(zone['name'])}.json"):
                        with open(f"tools/avy/avalanche-reports-raw/{slugify(zone['name'])}.json") as fp:
                            data = json.load(fp)

                        #TODO figure out what exactly [advisories] is
                        data = data["advisories"][0]["advisory"]

                        # timezone calculations
                        _, _, published, tomorrow = convert_to_local_time(
                            datetime.fromtimestamp(int(data["date_issued_timestamp"]), tz=ZoneInfo("UTC")),
                            zone["geo"][1],
                            zone["geo"][0],
                        )
                else:
                    if os.path.isfile(f"tools/avy/avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json"):
                        with open(f"tools/avy/avalanche-reports-raw/{zone['center_id']}-{zone['zone_id']}.json") as fp:
                            data = json.load(fp)

                        # timezone calculations
                        if data.get("published_time"):
                            _, _, published, tomorrow = convert_to_local_time(
                                data["published_time"],
                                zone["geo"][1],
                                zone["geo"][0],
                            )
                            # treat expired reports as unavailable so stale danger ratings are not shown
                            if is_expired(data.get("expires_time")):
                                data = {}
                                published = False
                # zone bands, else its subzones' majority range bands, else the state default
                elevations, fallback = zone_elevations(zone["zone_id"], zone.get("ranges", []), state["elevations"])
                zone["elevations"] = elevations
                zone["confidence"] = band_confidence(elevations, fallback)

                # avy danger
                danger_rules = []
                danger_layer_rules = []
                danger_layer = ""
                zone_color = 0
                grm = None
                if state["state"] == "UT":
                    if data and data["overall_danger_rating"] != "None" and elevations:
                        danger_rules, zone_color = utah_danger(data["overall_danger_rose"], elevations)
                        band_levels = utah_band_levels(data["overall_danger_rose"])
                        danger_layer_rules = blurred_danger_rules(band_levels, elevations)
                        danger_layer = layer_param(danger_layer_rules)
                        grm = grm_layer(band_levels, elevations)
                else:
                    danger = data.get("danger")
                    if danger and any(danger[0][key] for key in US_DANGER_KEYS.values()) and elevations:
                        values = {band: danger[0][key] or 0 for band, key in US_DANGER_KEYS.items()}
                        danger_rules = [danger_rule(elevations, band, danger_levels.get(values[band])) for band in BANDS]
                        band_levels = uniform_band_levels(values)
                        danger_layer_rules = blurred_danger_rules(band_levels, elevations)
                        danger_layer = layer_param(danger_layer_rules)
                        zone_color = max(values.values())
                        grm = grm_layer(band_levels, elevations)

                # avy problems
                problems = []
                if state["state"] == "UT":
                    problems = utah_problems(data, elevations, tomorrow)
                elif data and elevations:
                    for i, problem in enumerate(data["forecast_avalanche_problems"]):
                        # locations look like "north upper"
                        aspects_by_band = {band: [] for band in BANDS}
                        for location in problem["location"]:
                            direction, level = location.split()[:2]
                            if level in US_PROBLEM_BANDS:
                                aspects_by_band[US_PROBLEM_BANDS[level]].append(aspect[direction])
                        rules = [
                            problem_rule(elevations, band, aspects_by_band[band], i)
                            for band in BANDS
                            if aspects_by_band[band]
                        ]
                        problems.append(make_problem(i, problem["name"], rules, tomorrow, elevations))

                zone["published"] = published
                zone["report_access"] = state["report_access"]
                zone["danger"] = danger_rules
                zone["danger_layer_rules"] = danger_layer_rules
                zone["problems"] = problems
                zone["color"] = f"#{danger_levels[zone_color]['color']}"
                zone["grm"] = grm
                zone["layers"] = caltopo_layers(layers_template, tomorrow, danger_layer, problems, grm)

                has_report = data and (data.get("danger") or data.get("overall_danger_rating", "None") != "None")
                if danger_rules or not state["report_access"]:
                    zone["message"] = ""
                elif has_report and not state["elevations"]:
                    zone["message"] = center_message("Coming soon.", zone)
                else:
                    zone["message"] = center_message("Report not available.", zone)

            content = region_template.render(
                    page=state["name"],
                    grm_colors=config.grm_colors,
                    elevation_blur=config.elevation_blur,
                    sun_day=tomorrow,
                    zones=state["zones"],
                    states=states,
                )

            # create state DEM page
            with open(f"source{state['page']}.md", mode="w", encoding="utf-8") as message:
                    message.write(content)
                    print(f"... wrote source{state['page']}.md")

    # create index DEM page
    with open('source/avy/index.md', mode="w", encoding="utf-8") as message:
            message.write(index_template.render(states=sorted(states, key=lambda d: d['name']), areas=areas))
            print(f"... wrote source/avy/index.md")

if __name__ == "__main__":
    main()
