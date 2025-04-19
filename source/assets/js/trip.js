import u from 'umbrellajs';
import axios from 'axios';

const report_template = require("./templates/avalanche_report.hbs");
const resources_template = require("./templates/resources-simple.hbs");
const trips_template = require("./templates/recent_trips.hbs");

/* parallax on blog posts with cover image */
const parallaxImage = document.getElementById('ParallaxImage');
let windowScrolled;

window.addEventListener('scroll', () => {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});

/* Populate Get Involved section */
axios.get('/assets/json/get-involved.json')
  .then(response => {
    resources(response.data);
  })
  .catch(error => {
    // call local file on 403
    console.log(error);
  });

function resources(data=[]) {
  const resource_element = document.getElementById("resources");
  const resource_list = data
          .filter(resource => (resource.states.includes(resource_element.dataset.state) || resource.states.includes('All')) && (resource.types.includes(resource_element.dataset.type)))
          .map(r => ({ 'title': r.name, 'url': r.url, 'desc': r.desc.split(" ").slice(0,8).join(" ") }));
  resource_element.innerHTML = resources_template(resource_list);
}

/* Populate Avalanche Report */
const report_element = document.getElementById("avalanche-report")
if(report_element) {
  let left = ""
  let right = ""
  let avyMapUrl = ""
  if (report_element.dataset.center != "") {
    left = report_element.dataset.center
    right = report_element.dataset.zone
    avyMapUrl = `/avy/${report_element.dataset.region}.html#zone-${left}-${right}`
  } else {
    left = report_element.dataset.lat
    right = report_element.dataset.long
    avyMapUrl = "/avy"
  }
  axios.get(`/assets/json/avalanche-reports/${left}-${right}.json` )
  .then(response => {
    report_element.innerHTML = report_template({"map_url": avyMapUrl, "data": response.data});
  })
  .catch(error => {
    // call local file on 403
    console.log(error);
  });
}

/* Populate Recent Trips */
axios.get('/assets/json/trips.json')
  .then(response => {
    const trips_element = document.getElementById("trips");
    trips(response.data, trips_element.dataset.trip, false, trips_element.dataset.type);
  })
  .catch(error => {
    // call local file on 403
    console.log(error);
  });

function trips(trips=[], current_trip, active_trip, active_type) {
  const types = [];
  trips.data.forEach(trip => {
    const found = types.some(el => el.type === trip.type);
    if(!found) {
      if(trip.type === active_type) {
        types.push({"color": "light-red", "type": trip.type});
      } else {
        types.push({"color": "silver", "type": trip.type});
      }
    }
  });
  const related_trips = trips.data.reduce((res, trip) => {
    if(trip.type == active_type && trip.title != current_trip) {
      if((active_trip && active_trip == trip.title) || (!active_trip && res.length == 0)) {
        trip['border_color'] = 'light-red';
        trip['text_color'] = 'light-red';
      } else {
        trip['border_color'] = 'white';
        trip['text_color'] = 'black-70';
      }
      const date = new Date(trip['date_published']);
      trip['date_published'] = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
      res.push(trip);
    }
    return res;
  }, []);
  let trip_info;
  if(active_trip) {
    trip_info = related_trips.find(o => o.title === active_trip);
  } else {
    trip_info = related_trips[0];
  }
  const trips_list = {"types": types, "trips": related_trips.slice(0, 5), "trip_info": trip_info};
  const trips_element = document.getElementById("trips");
  trips_element.innerHTML = trips_template(trips_list);
}

/* recent trips nav */
u("#trips").on('click', '.related-top-nav', node => {
  axios.get('/assets/json/trips.json')
    .then(response => {
      const trips_element = document.getElementById("trips");
      trips_element.dataset.type = u(node.target).data('type');
      trips(response.data, trips_element.dataset.trip, false, u(node.target).data('type'));
    })
    .catch(error => {
      // call local file on 403
      console.log(error);
    });
})
u("#trips").on('click', '.related-side-nav', node => {
  axios.get('/assets/json/trips.json')
    .then(response => {
      const trips_element = document.getElementById("trips");
      trips(response.data, trips_element.dataset.trip, u(node.target).data('trip'), trips_element.dataset.type);
    })
    .catch(error => {
      // call local file on 403
      console.log(error);
    });
})

/* If title breaks, break it in half */
const title = document.querySelector("h1");
const copy = title.cloneNode(true);
    copy.innerHTML = 'A';
    title.after(copy)

if (copy.clientHeight < title.clientHeight) {
    const words = title.innerHTML.split(' ');
    const firstLine = words.slice(0,Math.round(words.length/2))
    const secondLine = words.slice(Math.round(words.length/2))
    title.innerHTML = firstLine.join(' ') + '<br />' + secondLine.join(' ');
}
copy.remove();