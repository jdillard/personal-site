var articles = {};
var categories = [];

var urlHash = window.location.hash.substring(1);

if(!urlHash || urlHash.length === 0 || urlHash.substr(0,2) === "20") {
    
    grabArticles(true, 'date');

} else {

    grabArticles(true, 'categories');

}

function grabArticles(load = true, s = 'date') {

    if(load) {

        $.getJSON( "/assets/json/articles.json", (function() {
            var sort = s;

            return function( data, textStatus, jqxhr ) {

                articles = data;

                for (var key in articles['data']) {

                    articles['data'][key]['categories'].forEach(function(element) {

                        if(categories.indexOf(element) < 0) {

                            categories.push(element);

                        }

                    });

                }

                categories.sort();

                sortArticles(sort);

            }
        })());

    } else {

       sortArticles(s); 

    }

}

function sortArticles(sort) {

    var archive = document.getElementById("archive");
    var articles_by_date = {};
    articles_by_date[0] = [];
    var template = Handlebars.templates['articles'];
    var len = 0;
    
    archive.innerHTML = "";
    
    if(sort === "date") {

        articles["data"].sort(function(a, b) {
            return new Date(b.date_published) - new Date(a.date_published);
        });

        var most_recent_year = new Date(articles['data'][0]['date_published']).getFullYear();
        var new_year = true;

        for (var i = 0; i < articles['total']; i++) {

            var post_date = new Date(articles['data'][i]['date_published']);

            if(post_date.getFullYear() !==  most_recent_year | new_year) {

                most_recent_year = new Date(articles['data'][i]['date_published']).getFullYear();
                new_year = false;

                //create new json structure
                len = articles_by_date[0].push({"heading": most_recent_year, "slug": most_recent_year, "data": []});

            }

            var post_data = {"date": post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12), "title": articles['data'][i]['title'], "url": articles['data'][i]['url']};
            articles_by_date[0][len-1]["data"].push(post_data);

        }

        archive.innerHTML = template(articles_by_date[0]);

    } else if(sort === 'categories') {

        for(category = 0; category < categories.length; category++) {

            len = articles_by_date[0].push({"heading": categories[category], "slug": categories[category].replace(' ', '-'), "data": []});

            for (var i = 0; i < articles['total']; i++) {

                post_categories = articles['data'][i]['categories'];

                post_date = new Date(articles['data'][i]['date_published']);

                if(post_categories.indexOf(categories[category]) > -1) {

                    var post_data = {"date": post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12), "title": articles['data'][i]['title'], "url": articles['data'][i]['url']};
                    articles_by_date[0][len-1]["data"].push(post_data);

                }

            }

        }

        archive.innerHTML = template(articles_by_date[0]);

        if(urlHash) {
            document.getElementById(urlHash).scrollIntoView();
        }

    } 

}
