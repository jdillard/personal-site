const template = require("./templates/articles.hbs");

let articles = {};
const categories = [];

var urlHash = window.location.hash.substring(1);

if(!urlHash || urlHash.length === 0 || urlHash.substr(0,2) === "20") {
    grabArticles().then( function(result) {
        articles = result;

        for (let key in result.data) {
            result.data[key].categories.forEach(function(element) {
                if(categories.indexOf(element) < 0) {
                    categories.push(element);
                }
            });
        }
        categories.sort();
        sortArticles('date');
    });
} else {
    grabArticles().then( function(result) {
        articles = result;

        for (let key in result.data) {
            result.data[key].categories.forEach(function(element) {
                if(categories.indexOf(element) < 0) {
                    categories.push(element);
                }
            });
        }
        categories.sort();
        sortArticles('categories');
    });
}

async function grabArticles() {
    let response = await axios.get('/assets/json/trips.json');
    return response.data;
}

function sortArticles(sort) {

    var archive = document.getElementById("archive");
    var articles_by_date = {};
    articles_by_date[0] = [];
    var len = 0;

    archive.innerHTML = "";

    if(sort === "date") {
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
                len = articles_by_date[0].push({"heading": most_recent_year, "slug": most_recent_year, "data": []});
            }
            let post_data = {"date": post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12), "title": articles.data[i].title, "url": articles.data[i].url};
            articles_by_date[0][len-1].data.push(post_data);
        }
        archive.innerHTML = template(articles_by_date[0]);

    } else if(sort === 'categories') {
        for(let category = 0; category < categories.length; category++) {
            len = articles_by_date[0].push({"heading": categories[category], "slug": categories[category].replace(' ', '-'), "data": []});
            for (let i = 0; i < articles.total; i++) {
                let post_categories = articles.data[i].categories;
                let post_date = new Date(articles.data[i].date_published + ' CST');

                if(post_categories.indexOf(categories[category]) > -1) {
                    let post_data = {"date": post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12), "title": articles.data[i].title, "url": articles.data[i].url};
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

const archiveNav = document.getElementById("archive-nav").getElementsByClassName("nav-item");

for (let i = 0; i < archiveNav.length; i++) {
    archiveNav[i].onclick = function(){
        sortArticles(archiveNav[i].getAttribute('data-name'));
    };
}
