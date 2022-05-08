const resources_template = require("./templates/resources-simple.hbs");

/* parallax on blog posts with cover image */
var parallaxImage = document.getElementById('ParallaxImage');
var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});

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
