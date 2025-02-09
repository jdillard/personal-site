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

function showRegion(region_id) {
  const region = document.getElementById(`${region_id}-region`);

  document.querySelectorAll('.avy-region').forEach(function(div) {
    div.classList.add('dn');
  });

  region.classList.remove('dn');

  location.replace("#region-" + region_id);
}

// show zone details (report/map)
function showZone(zone_id) {
  const report = document.getElementById(`${zone_id}-report`);
  const shape = document.getElementById(`${zone_id}-shape`);
  const geojson = shape.getAttribute("data-geojson");
  const btl = report.getAttribute("data-btl");
  const atl = report.getAttribute("data-atl");

  document.querySelectorAll('.avy-zone').forEach(function(div) {
    div.classList.add('dn');
  });

  report.classList.remove('dn');
  shape.classList.remove('dn');

  location.replace("#zone-" + zone_id);

  btlSlider.value = btl;
  atlSlider.value = atl;
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
} else {
  const avyZones = document.querySelectorAll('.avy-zone');
  if(avyZones.length > 0) {
    const currentZone = Array.from(avyZones).find(el => !el.classList.contains('dn'));

    const report = document.getElementById(`${currentZone.dataset.id}-report`);
    const btl = report.getAttribute("data-btl");
    const atl = report.getAttribute("data-atl");

    btlSlider.value = btl;
    atlSlider.value = atl;
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

    const atl = parseInt(btlSlider.value);
    const btl = parseInt(atlSlider.value);

    // update range displays
    atlBand.innerHTML = `<b>ATL</b>: Above ${btl + 1} ft`;
    ntlBand.innerHTML = `<b>NTL</b>: ${atl + 1} to ${btl} ft`;
    btlBand.innerHTML = `<b>BTL</b>: Below ${atl} ft`;

    const oldUrl = url.getAttribute("data-url")
    const rules = document.querySelectorAll(`.rules-${currentZone.dataset.id}`);

    const report = document.getElementById(`${currentZone.dataset.id}-report`);
    const oldBtl = parseInt(report.getAttribute("data-btl"), 10);
    const oldAtl = parseInt(report.getAttribute("data-atl"), 10);

    const replacements = {
      btl: `below ${atl}'`,
      ntl: `${atl + 1}' to ${btl}'`,
      atl: `above ${btl + 1}'`
    };

    const ranges = [
      { match: `e0-${oldBtl}f`, replaceWith: `e0-${atl}f` },
      { match: `e${oldBtl + 1}-${oldAtl}f`, replaceWith: `e${atl + 1}-${btl}f` },
      { match: `e${oldAtl + 1}-20310f`, replaceWith: `e${btl + 1}-20310f` }
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

  // initial display
  updateRangeValues();
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
      color: li.getAttribute('data-color'),
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
  if(zones.type == "region") {
    color = zones.options[i].color;
  } else if(zones.options[i].selected) {
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
