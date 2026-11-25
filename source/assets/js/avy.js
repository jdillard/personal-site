import u from 'umbrellajs';
import axios from 'axios';

const indexSel = document.getElementById("indexSel");
const zoneSel = document.getElementById("zoneSel");
const regionSel = document.getElementById("regionSel");

const btlSlider = document.getElementById('btlSlider');
const atlSlider = document.getElementById('atlSlider');
const atlBand = document.getElementById('atl-band');
const ntlBand = document.getElementById('ntl-band');
const btlBand = document.getElementById('btl-band');

function getIssues() {
  axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=avy&state=open')
    .then(function (response) {
      if(response.data.length) {
          for (let c in response.data) {
          let temp_html = '<div class="mv2"><a class="no-underline relative f6 black-70 hover-light-red" href="'+response.data[c].html_url+'">'+response.data[c].title+'</a></div>';
          document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
          }
      } else {
          let temp_html = '<div class="pa4 tc silver ma3 ba b--light-gray">No Issues Found.</div>';
          document.getElementById("issues").insertAdjacentHTML("beforeend", temp_html);
      }
    })
    .catch(function (error) {
      console.log(error);
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

  if(updateHash) setHash(region_id == "all" ? "" : `region-${region_id}`);
  if(indexSel) indexSel.value = region_id;
  showRegionLayers(region_id);
  return true;
}

// region page: show zone details (report/map)
function showZone(zone_id, updateHash = true) {
  const report = document.getElementById(`${zone_id}-report`);
  const shape = document.getElementById(`${zone_id}-shape`);
  if (!report || !shape) return false;

  document.querySelectorAll('.avy-zone').forEach(function(div) {
    div.classList.add('dn');
  });

  report.classList.remove('dn');
  shape.classList.remove('dn');

  if(updateHash) setHash(`zone-${zone_id}`);
  if(zoneSel) zoneSel.value = zone_id;

  if(btlSlider && atlSlider) {
    btlSlider.value = report.getAttribute("data-btl");
    atlSlider.value = report.getAttribute("data-atl");
    updateRangeValues();
  }

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

// set elevation ranges
function updateRangeValues() {
    const avyZones = document.querySelectorAll('.avy-zone');
    const currentZone = Array.from(avyZones).find(el => !el.classList.contains('dn'));
    const url = document.getElementById(`${currentZone.dataset.id}-url`);
    const sliders = document.getElementById("band-sliders");

    // if caltopo link exists for current zone
    if(!url) {
      // hide sliders and exit
      sliders.classList.add('dn');
      return;
    } else {
      // make sure sliders are visible
      sliders.classList.remove('dn');
    }

    // btlSlider sets the top of BTL, atlSlider sets the top of NTL (ATL starts above it)
    const btlTop = parseInt(btlSlider.value);
    const ntlTop = parseInt(atlSlider.value);

    // update range displays
    atlBand.innerHTML = `<b>ATL</b>: Above ${ntlTop + 1} ft`;
    ntlBand.innerHTML = `<b>NTL</b>: ${btlTop + 1} to ${ntlTop} ft`;
    btlBand.innerHTML = `<b>BTL</b>: Below ${btlTop} ft`;

    const oldUrl = url.getAttribute("data-url")
    const rules = document.querySelectorAll(`.rules-${currentZone.dataset.id}`);

    const report = document.getElementById(`${currentZone.dataset.id}-report`);
    const oldBtlTop = parseInt(report.getAttribute("data-btl"), 10);
    const oldNtlTop = parseInt(report.getAttribute("data-atl"), 10);

    const replacements = {
      btl: `below ${btlTop}'`,
      ntl: `${btlTop + 1}' to ${ntlTop}'`,
      atl: `above ${ntlTop + 1}'`
    };

    const ranges = [
      { match: `e0-${oldBtlTop}f`, replaceWith: `e0-${btlTop}f` },
      { match: `e${oldBtlTop + 1}-${oldNtlTop}f`, replaceWith: `e${btlTop + 1}-${ntlTop}f` },
      { match: `e${oldNtlTop + 1}-20310f`, replaceWith: `e${ntlTop + 1}-20310f` }
    ];

    rules.forEach(ul => {
      // check if the <ul> contains any <li> with the target classes
      // if no relevant <li> exists, skip this <ul>
      const hasRelevantLi = Array.from(ul.querySelectorAll("li")).some(li =>
        Object.keys(replacements).some(className => li.classList.contains(className))
      );
      if (!hasRelevantLi) return;

      const listItems = ul.querySelectorAll("li");

      listItems.forEach(li => {
        // check the class name of the <li> and get the corresponding replacement
        for (const [className, replacement] of Object.entries(replacements)) {
          if (li.classList.contains(className)) {
            const descSpan = li.querySelector(".desc");
            if (descSpan) {
              // replace the text inside parentheses using a regex
              descSpan.innerHTML = descSpan.innerHTML.replace(/\(.*?\)/, `(${replacement})`);
            }
            break;
          }
        }
      });
    });

    // replace elevation band patterns in caltopo url with slider values
    const regex = new RegExp(ranges.map(r => r.match).join("|"), "g");
    const output = oldUrl.replace(regex, (matched) => {
      const range = ranges.find(r => r.match === matched);
      return range ? range.replaceWith : matched;
    });

    url.setAttribute('href', output);
}

if(btlSlider && atlSlider) {
  btlSlider.addEventListener('input', (e) => {
      const btl = parseInt(e.target.value);
      const atl = parseInt(atlSlider.value);

      // ensure btl doesn't exceed atl-1
      if (btl >= atl) {
          btlSlider.value = atl - 1;
      }

      updateRangeValues();
  });

  atlSlider.addEventListener('input', (e) => {
      const btl = parseInt(btlSlider.value);
      const atl = parseInt(e.target.value);

      // ensure atl isn't less than btl+1
      if (atl <= btl) {
          atlSlider.value = btl + 1;
      }

      updateRangeValues();
  });
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
const map = L.map('map');
let mapPositioned = false;
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

// load the subregion outlines for an area and keep them on the map whenever the area is
function loadSubregions(zone, layer, onClick) {
  const filePath = zone.value;
  fetchGeoJSON(`${filePath}-subregions`)
    .then(data => {
      const subLayer = L.geoJSON(data, {
        style: () => SUB_REST,
        onEachFeature: function(feature, featureLayer) {
          featureLayer.bindTooltip(feature.properties.name, { sticky: true, direction: "top", offset: [0, -8] });
          featureLayer.on('click', onClick);

          featureLayer.on('mouseover', function(e) {
            layer.setStyle({ fillColor: zone.color || GRAY });
            subLayer.setStyle(SUB_AREA_HOVER);
            e.target.setStyle(SUB_HOVER);
          });

          featureLayer.on('mouseout', function() {
            layer.setStyle(layerStyle(baseColors[filePath] || GRAY));
            subLayer.setStyle(SUB_REST);
          });
        }
      });
      subLayers[filePath] = subLayer;
      layer.on('add', () => { subLayer.addTo(map); subLayer.bringToFront(); });
      layer.on('remove', () => map.removeLayer(subLayer));
      if (map.hasLayer(layer)) layer.fire('add');
    })
    .catch(error => console.error("Error loading subregions:", error));
}

// load a GeoJSON file once and build its layer (not added to the map)
// zone: {value, name, color, region, subregions}; type: "zone" (region page) or "region" (index page)
function loadLayer(zone, type) {
  const filePath = zone.value;
  if (!layerLoads[filePath]) {
    const onClick = function() {
      if(type == "zone") {
        showZone(filePath);
      } else {
        window.location.assign(`${zone.region}.html#zone-${filePath}`);
      }
    };

    layerLoads[filePath] = fetchGeoJSON(filePath)
      .then(data => {
        const layer = L.geoJSON(data, {
          style: () => layerStyle(baseColors[filePath] || GRAY),
          onEachFeature: function(feature, featureLayer) {
            featureLayer.on('click', onClick);
            // areas split into subregions get their names from the subregion outlines
            if (zone.name && !zone.subregions) {
              featureLayer.bindTooltip(zone.name, { sticky: true, direction: "top", offset: [0, -8] });
            }

            featureLayer.on('mouseover', function(e) {
              e.target.setStyle({ fillColor: zone.color || GRAY });
              raiseLayer(filePath);
            });

            featureLayer.on('mouseout', function(e) {
              e.target.setStyle(layerStyle(baseColors[filePath] || GRAY));
            });
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
