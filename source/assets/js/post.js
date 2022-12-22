import tippy from 'tippy.js';
import u from 'umbrellajs';
import axios from 'axios';

const articles_template = require("./templates/recent_articles.hbs");

/* parallax on blog posts with cover image */
var parallaxImage = document.getElementById('ParallaxImage');
var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});

const template = document.querySelector('#wiki-template');
const initialText = template.textContent;

const tip = tippy('a[href*="wikipedia.org"]', {
  animation: 'shift-toward',
  arrow: true,
  maxWidth: '300px',
  theme: 'light',
  html: '#wiki-template',
  onShow(instance) {

    const wikiPage = instance.reference.href.split("wikipedia.org/wiki")[1].substring(1);

    // `this` inside callbacks refers to the popper element
    const content = this.querySelector('.tippy-content');

    if (tip.loading || content.innerHTML !== initialText) return;

    tip.loading = true;

    fetch('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&redirects=true&exintro=&titles='+wikiPage).then((resp) => resp.json()).then(data => {
        const pageKey = Object.keys(data.query.pages)[0];
        const firstPara = $.parseHTML(data.query.pages[pageKey].extract)[0].innerHTML;
        if(firstPara.split(" ").length > 48) {
          content.innerHTML = '<div style="padding:5px">' + firstPara.split(" ").splice(0,48).join(" ").replace(/,\s*$/, "")  + '...</div>';
        } else {
          content.innerHTML = '<div style="padding:5px">' + firstPara + '</div>';
        }
        tip.loading = false;
    }).catch(e => {
        content.innerHTML = 'Loading failed';
        tip.loading = false;
    });
  },
  onHidden() {
    const content = this.querySelector('.tippy-content');
    content.innerHTML = initialText;
  },
  // prevent tooltip from displaying over button
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      },
      hide: {
        enabled: false
      }
    }
  }
});

/* Populate Related Articles */
axios.get('/assets/json/articles.json')
  .then(function (response) {
    const articles_element = document.getElementById("articles");
    articles(response.data, articles_element.dataset.article, false, articles_element.dataset.type);
  })
  .catch(function (error) {
    // call local file on 403
    console.log(error);
  });

function articles(items=[], current_item, active_item, active_type) {
  var types = [];
  items.data.forEach(function(item) {
    var found = types.some(el => el.type === item.type);
    if(!found) {
      if(item.type === active_type) {
        types.push({"color": "light-red", "type": item.type});
      } else {
        types.push({"color": "silver", "type": item.type});
      }
    }
  });
  var related_items = items.data.reduce(function(res, item) {
    if(item.type == active_type && item.title != current_item) {
      if((active_item && active_item == item.title) || (!active_item && res.length == 0)) {
        item['border_color'] = 'light-red';
        item['text_color'] = 'light-red';
      } else {
        item['border_color'] = 'white';
        item['text_color'] = 'black-70';
      }
      const date = new Date(item['date_published']);
      item['date_published'] = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
      res.push(item);
    }
    return res;
  }, []);
  if(active_item) {
    var item_info = related_items.find(o => o.title === active_item);;
  } else {
    var item_info = related_items[0];
  }
  var items_list = {"types": types, "items": related_items, "item_info": item_info};
  const items_element = document.getElementById("articles");
  items_element.innerHTML = articles_template(items_list);
}

/* Recent articles nav */
u("#articles").on('click', '.related-top-nav', function(node) {
  axios.get('/assets/json/articles.json')
    .then(function (response) {
      const articles_element = document.getElementById("articles");
      articles_element.dataset.type = u(node.target).data('type');
      articles(response.data, articles_element.dataset.article, false, u(node.target).data('type'));
    })
    .catch(function (error) {
      // call local file on 403
      console.log(error);
    });
})
u("#articles").on('click', '.related-side-nav', function(node) {
  axios.get('/assets/json/articles.json')
    .then(function (response) {
      const articles_element = document.getElementById("articles");
      articles(response.data, articles_element.dataset.article, u(node.target).data('article'), articles_element.dataset.type);
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
