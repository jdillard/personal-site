import tippy from 'tippy.js';

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
