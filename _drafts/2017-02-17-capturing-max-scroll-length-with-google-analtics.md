---
layout: post
title:  Capturing Max Scoll Length with Google Analytics
date:   2017-02-17
published: false
categories: 
  - google analytics
  - web development
---

I recently came across google analytics developer Philip Walton's post on _[The Google Analytics Setup I Use on Every Site I Build](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/)_ and realized I didn't know nearly as much as I thought about setting up Google Analytics as I had originally thought. 

After poking around I decided I would start by trying to implement the [autotrack](https://github.com/googleanalytics/autotrack) script along with the [maxScrollTracker](https://github.com/googleanalytics/autotrack/blob/master/docs/plugins/max-scroll-tracker.md) plugin in order to tell which pages get users to scroll the most. During the process I quickly realized the documentation was lacking in spots, so I'll try and summarize the steps I went through to arrive at what I think wayss the correct destination.

There are several ways to include [autotrack.js](https://github.com/googleanalytics/autotrack/blob/master/autotrack.js), but I went with the simple:

```html
<script async src='path/to/autotrack.js'></script>
```

and then required the `maxScrollTracker` plugin as well as set it up with a custom metric with an index of `1`:

```js
ga('require', 'maxScrollTracker', {
  maxScrollMetricIndex: 1,
});
```

Once you have that going into Google Analytics, you will need to log in to the admin panel for the appropriate GA view and set up a new custom metric. You can find it in the "Property" section under "Custom Definitions". Click `New Custom Metric` and fill out the fields:

| **Name**            | Max Scroll Percentage |
| **Scope**           |                       |
| **Formatting Type** |                       |
| **Minimum Value**   | 0                     |
| **Maximum Value**   | 100                   |
| **Active**          | Checked               |

Once that is done, you can then set up a "Calculated Metric" on the "View" section of the Admin panel. Click "New Calculated Metric" and fill out the fields:

{% raw %}
| **Name**            | Avg. Max Scroll Percentage                                 |
| **External Name**   | (Autofills to calcMetric_AvgMaxScrollPercentage)           |
| **Formatting Type** | Percent                                                    |
| **Formula**         | {{Max Scroll Percentage}} / ( 100 * {{Unique Pageviews}} ) |
{% endraw %}

Now you can set up your custom reports using this new calculated metric. To do so, go to the "Customization" section and then "Custom Reports". Click on "New Custom Report" and fill out the fields for the first tab:


| **Title**                | Average Max Scroll Percentage |
| **Tab Name**             | Avg. Max Scroll Per Page      |
| **Type**                 | Explorer                      |
| **Metric Group Name**    |                               |
| **Metrics**              | Avg. Max Scroll Percentage    |
|                          | Unique Pageviews              |
| **Dimension Drilldowns** | Page                          |
| **Filters**              | (optional)                    |
| **Views**                | (optional)                    |

And for the second tab:

| **Title**                | Average Max Scroll Percentage |
| **Tab Name**             | Avg. Max Scroll Per Source    |
| **Type**                 | Explorer                      |
| **Metric Group Name**    |                               |
| **Metrics**              | Avg. Max Scroll Percentage    |
|                          | Unique Pageviews              |
| **Dimension Drilldowns** | Source/Medium                 |
| **Filters**              | (optional)                    |
| **Views**                | (optional)                    |

> *Note:* If you see anything that's wrong or missing, please [open an issue](https://github.com/jdillard/jdillard.github.io/issues) or [create a pull request](https://github.com/jdillard/jdillard.github.io/pulls) so it can be improved.