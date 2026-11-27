import u from 'umbrellajs';
import axios from 'axios';

const indexSel = document.getElementById("indexSel");
const zoneSel = document.getElementById("zoneSel");
const regionSel = document.getElementById("regionSel");

// known issues (open GitHub issues labeled avy), fetched once and reused on later toggles
let issuesRequest = null;

function getIssues() {
  if (!issuesRequest) {
    issuesRequest = axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=avy&state=open')
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        issuesRequest = null; // retry on the next open
        return null;
      });
  }

  issuesRequest.then(issues => {
    const section = document.getElementById("issues");
    if (!section.classList.contains('open')) return; // closed while loading
    section.innerHTML = "";

    if (issues && issues.length) {
      issues.forEach(issue => {
        const div = document.createElement("div");
        div.className = "mv2";
        const link = document.createElement("a");
        link.className = "no-underline relative f6 black-70 hover-light-red";
        link.href = issue.html_url;
        link.textContent = issue.title;
        div.appendChild(link);
        section.appendChild(div);
      });
    } else {
      const div = document.createElement("div");
      div.className = "pa4 tc silver ma3 ba b--light-gray";
      div.textContent = issues ? "No Issues Found." : "Couldn't load issues. Try again later.";
      section.appendChild(div);
    }
  });
}

// update the url hash without triggering a navigation or hashchange event
function setHash(hash) {
  const base = window.location.pathname + window.location.search;
  history.replaceState(null, "", hash ? `${base}#${hash}` : base);
}

// index page: show one region's zone list (or all) and its shapes on the map
function showRegion(region_id, updateHash = true) {
  if(region_id == "all") {
    document.querySelectorAll('.avy-region').forEach(function(div) {
      div.classList.remove('dn');
    });
  } else {
    const region = document.getElementById(`${region_id}-region`);
    if (!region) return false;

    document.querySelectorAll('.avy-region').forEach(function(div) {
      div.classList.add('dn');
    });

    region.classList.remove('dn');
  }

  // single region: list beside the map; all: full-width map with lists below
  const layout = document.getElementById('avy-layout');
  if (layout) {
    layout.classList.toggle('avy-single', region_id != "all");
    map.invalidateSize();
  }

  if(updateHash) setHash(region_id == "all" ? "" : `region-${region_id}`);
  if(indexSel) indexSel.value = region_id;
  showRegionLayers(region_id);
  return true;
}

// region page: list every area in the selected zone under the map when its dropdown label is shortened
function showZoneAreas() {
  const areas = document.getElementById("zone-areas");
  const list = document.getElementById("zone-areas-list");
  const option = zoneSel && zoneSel.selectedOptions[0];
  if (!areas || !list || !option) return;

  const full = option.title;
  const shortened = full && full !== option.textContent.trim();
  list.textContent = shortened ? full : "";
  areas.classList.toggle('dn', !shortened);
}

// region page: show zone details (report/map)
function showZone(zone_id, updateHash = true) {
  const report = document.getElementById(`${zone_id}-report`);
  if (!report) return false;

  document.querySelectorAll('.avy-zone').forEach(function(div) {
    div.classList.add('dn');
  });

  report.classList.remove('dn');

  if(updateHash) setHash(`zone-${zone_id}`);
  if(zoneSel) zoneSel.value = zone_id;
  showZoneAreas();

  highlightLayer(zone_id);
  return true;
}

if(indexSel) {
  indexSel.onchange = function () {
    showRegion(this.value);
  }
}

if(zoneSel) {
  zoneSel.onchange = function () {
    showZone(this.value);
  }
}

if(regionSel) {
  regionSel.onchange = function () {
    window.location.assign(this.value);
  }
}

window.clickFunc = async function(element, tooltipId) {
  const text = element.getAttribute("data-clipboard-text");
  const tooltip = document.getElementById(tooltipId);

  try {
    await navigator.clipboard.writeText(text);
    tooltip.textContent = "Copied!";
  } catch (error) {
    console.error("Copy failed:", error);
    tooltip.textContent = "Copy failed";
  }
}

window.outFunc = function(tooltipId) {
  document.getElementById(tooltipId).textContent = "Copy rules";
}

// style danger layer colors
document.querySelectorAll('.dynamic-color').forEach(el => {
  const color1 = el.getAttribute('data-color1');
  const color2 = el.getAttribute('data-color2');
  const color3 = el.getAttribute('data-color3');

  if (color1 && color2 && color3) {
      el.style.background = `
          linear-gradient(
              to bottom right,
              ${color1} 35%,
              ${color2} 35% 64%,
              ${color3} 64%
          )
      `;
  } else if (color1 && color2) {
      el.style.background = `
          linear-gradient(
              to bottom right,
              ${color1} 50%,
              ${color2} 50%
          )
      `;
  } else {
      el.style.background = color1;
  }
});

// initialize the zones map
// no initial view: Leaflet queues layers until the first fitBounds positions the map,
// which avoids a visible jump from a placeholder location
// touch screens: one finger scrolls the page, two fingers pan/pinch the map (Leaflet's pinch also pans);
// hover highlights/tooltips are skipped since a tap would leave them stuck on
const touchOnly = window.matchMedia('(hover: none)').matches;
const map = L.map('map', { dragging: !touchOnly });
let mapPositioned = false;

if (touchOnly) {
  const hint = L.DomUtil.create('div', 'avy-map-hint', map.getContainer());
  hint.textContent = 'Use two fingers to move the map';
  let hintTimer = null;
  map.getContainer().addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    hint.classList.add('show');
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => hint.classList.remove('show'), 1500);
  }, { passive: true });
}
map.whenReady(() => { mapPositioned = true; });

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=cb1_489n_1_38909aed6058ce0068372c23', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

const GRAY = "#AAAAAA";
const layers = {};        // loaded layers, filename as key
const layerLoads = {};    // in-flight/finished loads, filename as key (each file fetched once)
const baseColors = {};    // resting fill color per layer, restored on mouseout
let currentLayer = null;  // selected zone on region pages, filename as key
let regionRequest = 0;    // guards against out-of-order region renders on the index page

function layerStyle(fillColor) {
  return { color: "#777777", fillColor: fillColor, weight: 1, fillOpacity: 0.4 };
}

// subregion outlines (Canada areas grouped from several subregions), filename as key
// hidden until the area is hovered, then the hovered subregion is outlined and named
const subLayers = {};
const SUB_REST = { color: "#555555", weight: 1, opacity: 0, fill: true, fillOpacity: 0, dashArray: "4 3" };
const SUB_AREA_HOVER = { opacity: 0.7, weight: 1, dashArray: "4 3" };
const SUB_HOVER = { opacity: 1, weight: 2, dashArray: null };

// raise a zone and its subregion outlines above other zones
function raiseLayer(filePath) {
  if (layers[filePath]) layers[filePath].bringToFront();
  if (subLayers[filePath]) subLayers[filePath].bringToFront();
}

function fetchGeoJSON(path) {
  return fetch(`/assets/json/avalanche-zones/${path}.geojson`).then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${path}`);
    return response.json();
  });
}

// one hovered shape at a time: mouseout is sometimes missed (shapes are re-ordered under the cursor
// by bringToFront), so a new hover, leaving the map, or moving over empty map resets the last one
let hovered = null;  // {layer, reset}

function hoverStart(layer, reset) {
  if (hovered && hovered.layer !== layer) hoverEnd(hovered.layer);
  hovered = { layer, reset };
}

function hoverEnd(layer) {
  if (!hovered || (layer && hovered.layer !== layer)) return;
  hovered.reset();
  hovered.layer.closeTooltip();
  hovered = null;
}

map.on('mousemove', (e) => {
  if (hovered && !e.originalEvent.target.classList.contains('leaflet-interactive')) hoverEnd();
});
map.getContainer().addEventListener('mouseleave', () => hoverEnd());

// load the subregion outlines for an area and keep them on the map whenever the area is
function loadSubregions(zone, layer, onClick) {
  const filePath = zone.value;
  fetchGeoJSON(`${filePath}-subregions`)
    .then(data => {
      const subLayer = L.geoJSON(data, {
        style: () => SUB_REST,
        onEachFeature: function(feature, featureLayer) {
          featureLayer.on('click', onClick);
          if (touchOnly) return;
          featureLayer.bindTooltip(feature.properties.name, { sticky: true, direction: "top", offset: [0, -8] });

          featureLayer.on('mouseover', function(e) {
            hoverStart(featureLayer, () => {
              layer.setStyle(layerStyle(baseColors[filePath] || GRAY));
              subLayer.setStyle(SUB_REST);
            });
            layer.setStyle({ fillColor: zone.color || GRAY });
            subLayer.setStyle(SUB_AREA_HOVER);
            e.target.setStyle(SUB_HOVER);
          });

          featureLayer.on('mouseout', () => hoverEnd(featureLayer));
        }
      });
      subLayers[filePath] = subLayer;
      layer.on('add', () => { subLayer.addTo(map); subLayer.bringToFront(); });
      layer.on('remove', () => map.removeLayer(subLayer));
      if (map.hasLayer(layer)) layer.fire('add');
    })
    .catch(error => console.error("Error loading subregions:", error));
}

// region page: after a map tap, scroll up to the zone picker if the report is above the screen (stacked mobile layout)
function revealZone(filePath) {
  const report = document.getElementById(`${filePath}-report`);
  if (!report || report.getBoundingClientRect().top >= 0) return;
  const target = (zoneSel && zoneSel.closest('.avy-picker')) || report;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// load a GeoJSON file once and build its layer (not added to the map)
// zone: {value, name, color, region, subregions}; type: "zone" (region page) or "region" (index page)
function loadLayer(zone, type) {
  const filePath = zone.value;
  if (!layerLoads[filePath]) {
    const onClick = function() {
      if(type == "zone") {
        showZone(filePath);
        revealZone(filePath);
      } else {
        window.location.assign(`/avy/${zone.region}.html#zone-${filePath}`);
      }
    };

    layerLoads[filePath] = fetchGeoJSON(filePath)
      .then(data => {
        const layer = L.geoJSON(data, {
          style: () => layerStyle(baseColors[filePath] || GRAY),
          onEachFeature: function(feature, featureLayer) {
            featureLayer.on('click', onClick);
            if (touchOnly) return;
            // areas split into subregions get their names from the subregion outlines
            if (zone.name && !zone.subregions) {
              featureLayer.bindTooltip(zone.name, { sticky: true, direction: "top", offset: [0, -8] });
            }

            featureLayer.on('mouseover', function(e) {
              hoverStart(featureLayer, () => featureLayer.setStyle(layerStyle(baseColors[filePath] || GRAY)));
              e.target.setStyle({ fillColor: zone.color || GRAY });
              raiseLayer(filePath);
            });

            featureLayer.on('mouseout', () => hoverEnd(featureLayer));
          }
        });
        layers[filePath] = layer;
        if (zone.subregions) loadSubregions(zone, layer, onClick);
        return layer;
      })
      .catch(error => {
        console.error("Error loading GeoJSON:", error);
        return null;
      });
  }
  return layerLoads[filePath];
}

// fallback if no zone shape could be loaded: show western North America
function ensureMapPositioned() {
  if(!mapPositioned) map.setView([45, -115], 4);
}

// region page: color the selected zone with its danger color, gray out the previous one
function highlightLayer(filePath) {
  if (currentLayer && currentLayer !== filePath) {
    baseColors[currentLayer] = GRAY;
    if (layers[currentLayer]) layers[currentLayer].setStyle({ fillColor: GRAY });
  }

  const report = document.getElementById(`${filePath}-report`);
  baseColors[filePath] = (report && report.getAttribute("data-color")) || GRAY;
  currentLayer = filePath;

  // if the layer is still loading, loadZoneLayers zooms to it once it arrives
  if (layers[filePath]) {
    layers[filePath].setStyle({ fillColor: baseColors[filePath] });
    raiseLayer(filePath);
    map.fitBounds(layers[filePath].getBounds());
  }
}

// region page: load every zone in the dropdown, zooming to the selected one
function loadZoneLayers() {
  const zones = Array.from(zoneSel.options)
    .map(option => ({ option, report: document.getElementById(`${option.value}-report`) }))
    .filter(({ report }) => report)
    .map(({ option, report }) => ({
      value: report.dataset.id,
      name: option.textContent.trim(),
      color: report.getAttribute("data-color"),
      subregions: report.hasAttribute("data-subregions")
    }));

  Promise.all(zones.map(zone =>
    loadLayer(zone, "zone").then(layer => {
      if (!layer) return;
      layer.addTo(map);
      if (zone.value === currentLayer) {
        raiseLayer(zone.value);
        map.fitBounds(layer.getBounds());
      }
    })
  )).then(ensureMapPositioned);
}

// index page: zones listed for a region ("all" for every region)
function regionZones(region) {
  const lists = region == "all"
    ? document.querySelectorAll('[id$="-zones"]')
    : [document.getElementById(`${region}-zones`)].filter(Boolean);

  return Array.from(lists).flatMap(ul =>
    Array.from(ul.querySelectorAll('li')).map(li => ({
      value: li.getAttribute('data-zone'),
      name: (li.querySelector('a') || li).textContent.trim(),
      color: li.getAttribute('data-color'),
      subregions: li.hasAttribute('data-subregions'),
      region: ul.id.replace(/-zones$/, '')
    }))
  );
}

// index page: show only the region's zones on the map and fit to them
function showRegionLayers(region) {
  if (!indexSel) return;
  const request = ++regionRequest;
  const zones = regionZones(region);
  const wanted = new Set(zones.map(zone => zone.value));

  for (const key in layers) {
    if (!wanted.has(key)) map.removeLayer(layers[key]);
  }

  zones.forEach(zone => { baseColors[zone.value] = zone.color; });

  Promise.all(zones.map(zone => loadLayer(zone, "region"))).then(loaded => {
    if (request !== regionRequest) return; // a newer region was selected meanwhile

    const bounds = L.latLngBounds();
    loaded.filter(Boolean).forEach(layer => {
      layer.addTo(map);
      bounds.extend(layer.getBounds());
    });

    if (bounds.isValid()) map.fitBounds(bounds);
    ensureMapPositioned();
  });
}

// apply the url hash; unknown ids fall back to the page's default view
function applyHash(updateHash) {
  const hash = window.location.hash.slice(1);

  if (zoneSel) {
    const zoneId = hash.startsWith("zone-") ? hash.slice(5) : "";
    if (!zoneId || !showZone(zoneId, updateHash)) {
      // default (first) zone, leaving the url alone
      const defaultZone = zoneSel.options[0];
      if (defaultZone) showZone(defaultZone.value, false);
    }
  } else if (indexSel) {
    const regionId = hash.startsWith("region-") ? hash.slice(7) : "";
    if (!regionId || !showRegion(regionId, updateHash)) {
      showRegion("all", false);
    }
  }
}

// initial view, then load the map shapes
applyHash(false);
if (zoneSel) loadZoneLayers();

// in-page hash changes (e.g. links to another zone on the same page, back/forward)
window.addEventListener('hashchange', () => applyHash(false));

// toggles are <p role="button">: activate with Enter/Space too, and keep aria-expanded in sync
function onToggle(selector, handler) {
  const toggle = document.querySelector(selector);
  if (!toggle) return;

  const run = () => {
    const expanded = handler();
    toggle.setAttribute("aria-expanded", String(expanded));
  };

  toggle.addEventListener("click", run);
  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      run();
    }
  });
}

onToggle("#settings-toggle", function() {
  if(u("#settings").hasClass('open')) {
    u("#settings").removeClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Hide", "Show");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "none";
    return false;
  } else {
    u("#settings").addClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Show", "Hide");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "block";
    return true;
  }
});

onToggle("#issues-toggle", function() {
  if(u("#issues").hasClass('open')) {
    u("#issues").removeClass('open');
    u("#issues-toggle").text('Show Known Issues');
    document.getElementById("issues").innerHTML = "";
    return false;
  } else {
    u("#issues").addClass('open');
    u("#issues-toggle").text('Hide Known Issues');
    getIssues();
    return true;
  }
});
