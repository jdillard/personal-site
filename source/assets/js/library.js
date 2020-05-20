//import 'babel-polyfill';

const template = require("./templates/library.hbs");

let articles = {};
const categories = [];

var urlHash = window.location.hash.substring(1);

grabArticles(true, 'books');

function grabArticles(load = true, s = 'books') {
  if(load) {
    $.getJSON( "/assets/json/library.json", (function() {
      var sort = s;

      return function( data, textStatus, jqxhr ) {
        articles = data;

        console.log(articles.data);

        for (let key in articles.data) {
          articles.data[key].categories.forEach(function(element) {
            if(categories.indexOf(element) < 0) {
              categories.push(element);
            }
          });
        }

        categories.sort();
        sortArticles(sort);
      };
    })());
  } else {
     sortArticles(s);
  }
}

function sortArticles(sort) {
  var archive = document.getElementById("library");
  var articles_by_date = {};
  articles_by_date[0] = [];
  var len = 0;

  archive.innerHTML = "";

    articles.data.sort(function(a, b) {
      return new Date(b.date_published) - new Date(a.date_published);
    });

    var most_recent_year = new Date(articles.data[0].date_published).getFullYear();
    var new_year = true;

    for (var i = 0; i < articles.total; i++) {
      let post_date = new Date(articles.data[i].date_published + ' CST');

      if(post_date.getFullYear() !==  most_recent_year | new_year) {
        most_recent_year = new Date(articles.data[i].date_published).getFullYear();
        new_year = false;

        //create new json structure
        len = articles_by_date[0].push({"data": []});
      }
      let post_data = {"date": post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12), "title": articles.data[i].title, "url": articles.data[i].url};
      articles_by_date[0][len-1].data.push(post_data);
      console.log(articles_by_date);
    }
    archive.innerHTML = template(articles_by_date[0]);
}

const libraryNav = document.getElementById("library-nav").getElementsByClassName("nav-item");

for (let i = 0; i < libraryNav.length; i++) {
  libraryNav[i].onclick = function(){ // jshint ignore:line
    grabArticles(false, libraryNav[i].getAttribute('data-name'));
  };
}
