---
layout: post
title: "Using Google Analytics for per Page Ratings"
date: 2020-05-17
published: true
popularity: 65
comment_issue_id: 8
type: ssg
categories:
  - jamstack
  - google analytics
---

Providing readers with a low friction way of giving feedback on a specific page
is a great way to guide where to spend maintenance efforts over a large
collection of pages.

This implementation is low friction on the technical debt side as well, assuming
Google Analytics is already being used to collect page metrics. The only changes
that are made are to the front-end and Google Analytics is used as a data store
and graphical interface.

{: {{site.data.css.info-box}} }
> **Note:** The example implementation below uses a five star rating, but that
  can be changed. Five options was chosen because it provides more feedback than
  a binary yes or no, allowing feedback to be somewhat prioritized, while at the
  same time not overwhelming the reader with options.

## Analyzing the Data

After implementing the code, as shown in the next section, you will be able to
see the collected ratings in Google Analytics by navigating to **Behavior >
Events > Overview** and clicking on the `Rating` event category.

Next, click **Event Action** to see the rating events grouped by rating value,
then select each rating to be graphed and compare how they have changed over
time, as shown below. This can help to see the following:

- If the ratio of **unusable** to **excellent** ratings is improving over time.
- How a rating is changing over time as a percentage of the number of total
  ratings.

![Graph over time with 1-5 selected](/assets/images/posts/ratings-over-time.png)

Click the `5` Rating to see all pages with a rating of **5**, as shown below.

![All pages with a rating of 5](/assets/images/posts/pages-per-rating.png)

![Ratings for a page over time](/assets/images/posts/ratings-per-page.png)

Or instead of clicking **Event Action**, click **Event Label** to see the rating
events grouped by each rated page and then click on a specific page to see how
many of each rating that page has during the selected time period and how they
compare over time.

## Implementing the Code

The code for this example is derived from
[Pure CSS Star Rating](https://codepen.io/jamesbarnett/pen/vlpkh) on CodePen,
but there are [other implementations](https://css-tricks.com/five-methods-for-five-star-ratings/).

### HTML

```html
<div id="page-rating">
    Was this page helpful?
    <fieldset class="rating">
        <input type="radio" id="star5" name="rating" value="5">
        <label for="star5" title="Excellent"></label>

        <input type="radio" id="star4" name="rating" value="4">
        <label for="star4" title="Good"></label>

        <input type="radio" id="star3" name="rating" value="3">
        <label for="star3" title="OK"></label>

        <input type="radio" id="star2" name="rating" value="2">
        <label for="star2" title="Poor"></label>

        <input type="radio" id="star1" name="rating" value="1">
        <label for="star1" title="Unusable"></label>
    </fieldset>
</div>

```

### CSS

The CSS takes advantage of the [subsequent-sibling combinator](https://www.w3.org/TR/selectors-3/#general-sibling-combinators), which basically selects all the sibling elements that come before the selected
element, to handle the desired hover effects.

```css
#page-rating {
  text-align: center;
}

.rating {
  width: 140px;
  margin: auto;
}

.rating > input {
  display: none;
}

.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > label {
  color: #DDDDDD;
  float: right;
}

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* show gold star on current hover */
.rating:not(:checked) > label:hover ~ label { /* show gold star for all previous */
  color: #FFD700;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: #FFED85;
}
```

### JavaScript

JavaScript is only used to send custom events to Google Analytics when a star
rating is clicked. In this example, the **event category** field in Google
Analytics is set to `Rating`, **Event Action** is set as the rating value, and
**Event Label** is set to the relative URL of the page.

```js
$( ".rating label" ).click(function() {
    const fieldset = document.querySelector('#page-rating fieldset');
    const pageURL = document.location.pathname + document.location.search;
    const rating =  $("#" + $(this).attr('for')).val();

    if (!fieldset.classList.contains('disabled')) {
      ga('send','event','Rating',rating,pageURL);
    }

    // Add .disabled class to prevent multiple submissions
    fieldset.classList.add('disabled');
});
```
