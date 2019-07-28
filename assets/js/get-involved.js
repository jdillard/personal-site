const template = require("./templates/resources.hbs");

let articles = {};
const categories = [];
const states = [];

var urlHash = window.location.hash.substring(1);

if(!urlHash || urlHash.length === 0 || urlHash.substr(0,2) === "20") {
    grabArticles().then( function(result) {
        articles = result;
        for (let key in result) {
            result[key].types.forEach(function(element) {
                if(categories.indexOf(element) < 0) {
                    categories.push(element);
                }
            });
            result[key].states.forEach(function(element) {
                if(states.indexOf(element) < 0) {
                    states.push(element);
                }
            });
        }
        categories.sort();
        sortArticles();
    });
} else {
    grabArticles().then( function(result) {
        articles = result;

        for (let key in result) {
            result[key].types.forEach(function(element) {
                if(categories.indexOf(element) < 0) {
                    categories.push(element);
                }
            });
            result[key].states.forEach(function(element) {
                if(states.indexOf(element) < 0) {
                    states.push(element);
                }
            });
        }
        categories.sort();
        sortArticles('categories');
    });
}

async function grabArticles() {
    let response = await axios.get('/assets/json/get-involved.json');
    return response.data;
}

function sortArticles(sort='state') {
    var archive = document.getElementById("resources");
    var articles_by_date = {};
    articles_by_date[0] = [];
    var len = 0;

    archive.innerHTML = "";

    if(sort === "state") {
        for(let state = 0; state < states.length; state++) {
            len = articles_by_date[0].push({"heading": states[state], "slug": states[state].replace(' ', '-'), "data": []});
            for (let i = 0; i < articles.length; i++) {
                let post_states = articles[i].states;

                if(post_states.indexOf(states[state]) > -1) {
                    let post_data = {"title": articles[i].name, "url": articles[i].url};
                    articles_by_date[0][len-1].data.push(post_data);
                }
            }
        }
        archive.innerHTML = template(articles_by_date[0]);
    } else if(sort === 'categories') {
        for(let category = 0; category < categories.length; category++) {
            len = articles_by_date[0].push({"heading": categories[category], "slug": categories[category].replace(' ', '-'), "data": []});
            for (let i = 0; i < articles.length; i++) {
                let post_categories = articles[i].types;
                let post_state = new Date(articles[i].state);

                if(post_categories.indexOf(categories[category]) > -1) {
                    let post_data = {"title": articles[i].name, "url": articles[i].url};
                    articles_by_date[0][len-1].data.push(post_data);
                }
            }
        }
        archive.innerHTML = template(articles_by_date[0]);

        if(urlHash) {
            document.getElementById(urlHash).scrollIntoView();
        }
    }
}

const archiveNav = document.getElementById("resource-nav").getElementsByClassName("nav-item");

for (let i = 0; i < archiveNav.length; i++) {
    archiveNav[i].onclick = function(){
        sortArticles(archiveNav[i].getAttribute('data-name'));
    };
}
