---
layout: post
title:  Capturing Max Scroll Length with Google Analytics
date:   2017-02-19
published: true
categories: 
  - google analytics
  - web development
---

After reading Google Analytics developer Philip Walton's post on [_The Google Analytics Setup I Use on Every Site I Build_](https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/) I realized I didn't know nearly as much as I had originally thought about setting up Google Analytics. 

I started simple by just adding the [googleanalytics/autotrack](https://github.com/googleanalytics/autotrack) script along with the [maxScrollTracker](https://github.com/googleanalytics/autotrack/blob/master/docs/plugins/max-scroll-tracker.md) plugin to my sites in order to tell which pages users scroll the most on and what sources refer the most engaged readers. This information could be useful to see how engaging your current content is or when deciding on how to structure important content on particular pages.

During this process I felt I ran into some gaps in the documentation so I'll try and fill those in with the steps I went through to arrive at what I think was the correct destination.

### Include autotrack.js

[autotrack.js](https://github.com/googleanalytics/autotrack/blob/master/autotrack.js) is an enhanced Google Analytics (GA) tracking library for common user interactions that includes several plugins, one of which is `maxScrollTracker`. There are many ways to include `autotrack.js`, but I simply went with:

```html
<script async src='path/to/autotrack.js'></script>
```

### Set Up the Custom Metric

Once you have that on your page and feeding into Google Analytics, you will need to log in to the GA admin panel for the appropriate view and set up a new **Custom Metric** that collects the max scroll percentage captured by the plugin. You can find it in the **Property** section under **Custom Definitions**. Then click **New Custom Metric** and fill out the fields:

| **Name**            | Max Scroll Percentage |
| **Scope**           | Hit                   |
| **Formatting Type** | Integer               |
| **Minimum Value**   | 0                     |
| **Maximum Value**   | 100                   |
| **Active**          | Checked               |

It will provide some example code snippets to include the metric, but instead use the plugins configuration option when requiring the `maxScrollTracker` plugin with a custom metric with an index of `1`:

```js
ga('require', 'maxScrollTracker', {
  maxScrollMetricIndex: 1,
});
```

### Set Up the Calculated Metric

Once that is done, set up a **Calculated Metric** on the **View** section of the admin panel. Click **New Calculated Metric** and fill out the fields:

{% raw %}
| **Name**            | Avg. Max Scroll Percentage                                 |
| **External Name**   | (Autofills to calcMetric_AvgMaxScrollPercentage)           |
| **Formatting Type** | Percent                                                    |
| **Formula**         | {{Max Scroll Percentage}} / ( 100 * {{Unique Pageviews}} ) |
{% endraw %}

The calculated formula takes the `Max Scroll Percentage` custom metric that was just set up, which is per unique page path per session, and calculates the average by dividing by the already existing `Unique Pageviews` metric, allowing it to be applied to different dimensions in a report.

### Set Up the Custom Report

To set up a custom report using this calculated metric, go to the **Customization** section and then **Custom Reports**. Click on **New Custom Report** and fill out the fields for the first tab:


| **Title**                | Max Scroll Stats              |
| **Tab Name**             | Avg. Max Scroll Per Page      |
| **Type**                 | Explorer                      |
| **Metric Group Name**    | Metric Group                  |
| **Metrics**              | Avg. Max Scroll Percentage    |
|                          | Unique Pageviews              |
| **Dimension Drilldowns** | Page                          |
| **Filters**              | (optional)                    |
| **Views**                | (optional)                    |

And for the second tab:

| **Title**                | Average Max Scroll Percentage |
| **Tab Name**             | Avg. Max Scroll Per Source    |
| **Type**                 | Explorer                      |
| **Metric Group Name**    | Metric Group                  |
| **Metrics**              | Avg. Max Scroll Percentage    |
|                          | Unique Pageviews              |
| **Dimension Drilldowns** | Source/Medium                 |
| **Filters**              | (optional)                    |
| **Views**                | (optional)                    |

You're done! It will take a while for the data to populate with enough data to be meaningful, but once it has check the report to see if it seems accurate.

> *Note:* If you see anything that's wrong or missing, please [open an issue](https://github.com/jdillard/jdillard.github.io/issues) or [create a pull request](https://github.com/jdillard/jdillard.github.io/pulls) so it can be improved.