import u from 'umbrellajs';
import axios from 'axios';

const indexSel = document.getElementById("indexSel");
const zoneSel = document.getElementById("zoneSel");
const regionSel = document.getElementById("regionSel");

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

function showRegion(region_id) {
  const region = document.getElementById(`${region_id}-region`);

  document.querySelectorAll('.avy-region').forEach(function(div) {
    div.classList.add('dn');
  });

  region.classList.remove('dn');

  location.replace("#region-" + region_id);
}

function showZone(zone_id) {
  const report = document.getElementById(`${zone_id}-report`);
  const shape = document.getElementById(`${zone_id}-shape`);
  const geojson = shape.getAttribute("data-geojson");

  document.querySelectorAll('.avy-zone').forEach(function(div) {
    div.classList.add('dn');
  });

  report.classList.remove('dn');
  shape.classList.remove('dn');

  location.replace("#zone-" + zone_id);
}

// grab url hash if it exists
const hash = window.location.hash.slice(1)
if(hash) {
  if(hash.startsWith("zone")) {
    showZone(hash.slice(5));
    zoneSel.value = hash.slice(5)
  } else if(hash.startsWith("region")){
      showRegion(hash.slice(7));
      indexSel.value = hash.slice(7)
  }
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

window.clickFunc = function(element, tooltip) {
  const text = element.getAttribute("data-clipboard-text");
  navigator.clipboard.writeText(text);

  var tooltip = document.getElementById(tooltip);
  tooltip.innerHTML = "Ruleset Copied!";
}

window.outFunc = function(tooltip) {
  var tooltip = document.getElementById(tooltip);
  tooltip.innerHTML = "Copy ruleset";
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

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);

let layers = {};  // all layers with filenames as keys
let currentLayer = null; //filename as key
const bounds = L.latLngBounds();

// load a GeoJSON file and add to the map in given color
async function addLayer(filePath, color, type) {
    await fetch(`/assets/json/avalanche-zones/${filePath}.geojson`)
        .then(response => response.json())
        .then(data => {
            const layer = L.geoJSON(data, {
              style: {
                color: "#777777", // border color
                fillColor: color,
                weight: 1,
                fillOpacity: 0.4,
              },
              onEachFeature: function(feature, layer) {
                layer.on('click', function() {
                    if(type == "zone") {
                      window.location.hash = `zone-${filePath}`;
                    } else if(type == "region") {
                      window.location.assign(`${indexSel.value}.html#zone-${filePath}`);
                    }
                });
            }
            }).addTo(map);
            layers[filePath] = layer;

            if(type == "zone") {
              //TODO change to calling highlightLayer(currentLayer) after all layers are loaded
              // Check if the layer corresponds to the selected option and fit bounds
              const zones = getZones();
              for (let i = 0; i < zones.options.length; i++) {
                  if (zones.options[i].selected && zones.options[i].value === filePath) {
                      map.fitBounds(layer.getBounds());
                      break;
                  }
              }
            } else {
              bounds.extend(layer.getBounds());
            }
        })
        .catch(error => console.error("Error loading GeoJSON:", error));
}

// highlight the selected layer in blue and revert others to gray
function highlightLayer(filePath) {
  // Revert the previous layer to gray
  if (currentLayer && layers[currentLayer]) {
    layers[currentLayer].setStyle({ fillColor: "#AAAAAA" });
  }

  // set the new layer to blue
  if (layers[filePath]) {
    layers[filePath].setStyle({ fillColor: "#357EDD" });
    map.fitBounds(layers[filePath].getBounds());
    currentLayer = filePath;
  }
}

function getZones() {
  let options = []
  let type = 'zone';
  if(zoneSel) {
    options = document.getElementById("zoneSel").options;
  }
  else if(indexSel) {
    const region = indexSel.value;
    const ulElement = document.getElementById(`${region}-zones`);
    const liElements = ulElement.querySelectorAll('li');
    options = Array.from(liElements).map(li => ({
      value: li.getAttribute('data-zone'),
      selected: false
    }));
    type = 'region';
  }
  return {options, type};
}

// load all GeoJSON layers initially
const zones = getZones()
const promises = [];
for (let i = 0; i < zones.options.length; i++) {
  let color = "#AAAAAA";
  if (zones.options[i].selected) {
    color = "#357EDD";
  }
  promises.push(addLayer(zones.options[i].value, color, zones.type));
}
if(zones.type == "region") {
  // Wait for all addLayer calls to complete
  Promise.all(promises).then(() => {
    for (let key in layers) {
      bounds.extend(layers[key].getBounds());
    }

    map.fitBounds(bounds);
  });
}

// event listener for changing the layer highlight
if(zoneSel) {
  document.getElementById("zoneSel").addEventListener("change", function(event) {
    highlightLayer(event.target.value);
  });
}

// reload page when the hash changes (a layer is selected on the map)
window.addEventListener('hashchange', () => {
  location.reload();
});

u("#settings-toggle").on( "click", function() {
  if(u("#settings").hasClass('open')) {
    u("#settings").removeClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Hide", "Show");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "none";
  } else {
    u("#settings").addClass('open');
    const toggled_text = u("#settings-toggle").text().replace("Show", "Hide");
    u("#settings-toggle").text(toggled_text);
    document.getElementById("settings").style.display = "block";
  }
});

u("#issues-toggle").on( "click", function() {
  if(u("#issues").hasClass('open')) {
    u("#issues").removeClass('open');
    u("#issues-toggle").text('Show Known Issues');
    document.getElementById("issues").innerHTML = "";
  } else {
    u("#issues").addClass('open');
    u("#issues-toggle").text('Hide Known Issues');
    getIssues();
  }
});
