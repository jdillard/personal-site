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
    
    archive.innerHTML = "";
    
    if(sort === "date") {

        articles["data"].sort(function(a, b) {
            return new Date(b.date_published) - new Date(a.date_published);
        });

        var most_recent_year = new Date(articles['data'][0]['date_published']).getFullYear();

        var h = document.createElement("h2");
            h.setAttribute("id", most_recent_year);
            h.setAttribute("class", "f3-ns f4");
        var t = document.createTextNode(most_recent_year);
        var u = document.createElement("ul");
            u.setAttribute("class", "list pl0");
        archive.appendChild(h).appendChild(t);
        archive.appendChild(u);

        for (var i = 0; i < articles['total']; i++) {

            var post_date = new Date(articles['data'][i]['date_published']);

            if(post_date.getFullYear() ===  most_recent_year) {

                var l = document.createElement("li");
                    l.setAttribute("class", "pv1 f4-ns f5");
                var a = document.createElement("a");
                    a.setAttribute("href", articles['data'][i]['url']);
                    a.setAttribute("class", "flex-ns items-center no-underline black-70 hover-light-red");
                var time = document.createElement("time");
                    time.setAttribute("class", "f5-ns f6 gray db mr3");
                var tt = document.createTextNode(post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12)); 
                var s = document.createElement("span");
                    s.setAttribute("class", "pv0-ns pv1 lh-copy db");
                var st = document.createTextNode(articles['data'][i]['title']);
                
                l.appendChild(a).appendChild(time).appendChild(tt);
                l.appendChild(a).appendChild(s).appendChild(st);

                u.appendChild(l);

            } else {

                most_recent_year = new Date(articles['data'][i]['date_published']).getFullYear();
                
                var h = document.createElement("H2");
                    h.setAttribute("id", most_recent_year);
                    h.setAttribute("class", "f3-ns f4");
                var t = document.createTextNode(most_recent_year);
                var u = document.createElement("ul");
                    u.setAttribute("class", "list pl0");
                archive.appendChild(h).appendChild(t);
                archive.appendChild(u);

                var l = document.createElement("li");
                    l.setAttribute("class", "pv1 f4-ns f5");
                var a = document.createElement("a");
                    a.setAttribute("href", articles['data'][i]['url']);
                    a.setAttribute("class", "flex-ns items-center no-underline black-70 hover-light-red");
                var time = document.createElement("time");
                    time.setAttribute("class", "f5-ns f6 gray db mr3");
                var tt = document.createTextNode(post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12)); 
                var s = document.createElement("span");
                    s.setAttribute("class", "pv0-ns pv1 lh-copy db");
                var st = document.createTextNode(articles['data'][i]['title']);
                
                l.appendChild(a).appendChild(time).appendChild(tt);
                l.appendChild(a).appendChild(s).appendChild(st);

                u.appendChild(l);

            }

        }

    } else if(sort === 'categories') {

        for(category = 0; category < categories.length; category++) {

            var h = document.createElement("h2");
                h.setAttribute("id", categories[category].replace(' ', '-'));
                h.setAttribute("class", "f3-ns f4");
            var t = document.createTextNode(categories[category]);
            var u = document.createElement("ul");
                u.setAttribute("class", "list pl0");
            archive.appendChild(h).appendChild(t);
            archive.appendChild(u);

            for (var i = 0; i < articles['total']; i++) {

                post_categories = articles['data'][i]['categories'];

                post_date = new Date(articles['data'][i]['date_published']);

                if(post_categories.indexOf(categories[category]) > -1) {

                    var l = document.createElement("li");
                        l.setAttribute("class", "pv1 f4-ns f5");
                    var a = document.createElement("a");
                        a.setAttribute("href", articles['data'][i]['url']);
                        a.setAttribute("class", "flex-ns items-center no-underline black-70 hover-light-red");
                    var time = document.createElement("time");
                        time.setAttribute("class", "f5-ns f6 gray db mr3");
                    var tt = document.createTextNode(post_date.toLocaleTimeString([], { month: "short", day: "2-digit", year: "numeric" }).substr(0,12)); 
                    var s = document.createElement("span");
                        s.setAttribute("class", "pv0-ns pv1 lh-copy db");
                    var st = document.createTextNode(articles['data'][i]['title']);
                    
                    l.appendChild(a).appendChild(time).appendChild(tt);
                    l.appendChild(a).appendChild(s).appendChild(st);

                    u.appendChild(l);

                }

            }

        }

        if(urlHash) {
            document.getElementById(urlHash).scrollIntoView();
        }

    } 

}
