import u from 'umbrellajs';
import axios from 'axios';

const zoneSel = document.getElementById("zoneSel");
const regionSel = document.getElementById("regionSel");

function getIssues() {
  axios.get('https://api.github.com/repos/jdillard/personal-site/issues?labels=dem&state=open')
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

function showZone(zone_id) {
  const report = document.getElementById(`${zone_id}-report`);
  const title = document.getElementById(`${zone_id}-title`);
  const shade = document.getElementById(`${zone_id}-shade`);
  const shape = document.getElementById(`${zone_id}-shape`);
  document.querySelectorAll('.avy-zone').forEach(function(div) {
    div.classList.add('dn');
  });
  report.classList.remove('dn');
  title.classList.remove('dn');
  shade.classList.remove('dn');
  shape.classList.remove('dn');
  location.replace("#zone-" + zone_id);
}

// grab url hash if it exists
const hash = window.location.hash.slice(1)
if(hash) {
  showZone(hash.slice(5));
  zoneSel.value = hash.slice(5)
}

zoneSel.onchange = function () {
  showZone(this.value);
}

regionSel.onchange = function () {
  window.location.assign(this.value);
}

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
