import u from 'umbrellajs';

const resources_template = require("./templates/resources-simple.hbs");
const trips_template = require("./templates/recent_trips.hbs");

/* parallax on blog posts with cover image */
var parallaxImage = document.getElementById('ParallaxImage');
var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});

/* Populate Get Involved section */
axios.get('/assets/json/get-involved.json')
  .then(function (response) {
    resources(response.data);
  })
  .catch(function (error) {
    // call local file on 403
    console.log(error);
  });

function resources(data=[]) {
  const resource_element = document.getElementById("resources");
  const resource_list = data
          .filter(resource => (resource.states.includes(resource_element.dataset.state) || resource.states.includes('All')) && (resource.types.includes(resource_element.dataset.type)))
          .map(function(r) { return {'title': r.name, 'url': r.url, 'desc': r.desc.split(" ").slice(0,8).join(" ") }; });
  resource_element.innerHTML = resources_template(resource_list);
}

/* Populate Recent Trips */
axios.get('/assets/json/trips.json')
  .then(function (response) {
    const trips_element = document.getElementById("trips");
    trips(response.data, trips_element.dataset.trip, false, trips_element.dataset.type);
  })
  .catch(function (error) {
    // call local file on 403
    console.log(error);
  });

function trips(trips=[], current_trip, active_trip, active_type) {
  var types = [];
  trips.data.forEach(function(trip) {
    var found = types.some(el => el.type === trip.type);
    if(!found) {
      if(trip.type === active_type) {
        types.push({"color": "light-red", "type": trip.type});
      } else {
        types.push({"color": "silver", "type": trip.type});
      }
    }
  });
  var related_trips = trips.data.reduce(function(res, trip) {
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
  if(active_trip) {
    var trip_info = related_trips.find(o => o.title === active_trip);;
  } else {
    var trip_info = related_trips[0];
  }
  var trips_list = {"types": types, "trips": related_trips, "trip_info": trip_info};
  const trips_element = document.getElementById("trips");
  trips_element.innerHTML = trips_template(trips_list);
}

/* recent trips nav */
u("#trips").on('click', '.related-top-nav', function(node) {
  axios.get('/assets/json/trips.json')
    .then(function (response) {
      const trips_element = document.getElementById("trips");
      trips_element.dataset.type = u(node.target).data('type');
      trips(response.data, trips_element.dataset.trip, false, u(node.target).data('type'));
    })
    .catch(function (error) {
      // call local file on 403
      console.log(error);
    });
})
u("#trips").on('click', '.related-side-nav', function(node) {
  axios.get('/assets/json/trips.json')
    .then(function (response) {
      const trips_element = document.getElementById("trips");
      trips(response.data, trips_element.dataset.trip, u(node.target).data('trip'), trips_element.dataset.type);
    })
    .catch(function (error) {
      // call local file on 403
      console.log(error);
    });
})

/* If title breaks, break it in half */
var title = document.querySelector("h1");
var copy = title.cloneNode(true);
    copy.innerHTML = 'A';
    title.after(copy)

if (copy.clientHeight < title.clientHeight) {
    var words = title.innerHTML.split(' ');
    var firstLine = words.slice(0,Math.round(words.length/2))
    var secondLine = words.slice(Math.round(words.length/2))
    title.innerHTML = firstLine.join(' ') + '<br />' + secondLine.join(' ');
}
copy.remove();
