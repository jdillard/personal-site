---
layout: post
title:  "Custom Google Analytics Reports and Alerts That Every Website Should Have"
date:   2018-11-28
published: true
categories:
  - google analytics
  - web development
---

When maintaining a website, there are some key metrics to keep track of, both
manually through custom reports and automatically through custom alerts, that
are not a part of the basic "out of the box" Google Analytics configuration.

This article shows you how to create the following to improve the understanding
of how traffic is flowing on your website(s):

1. A custom report to track 404 error codes
2. A custom alert to detect a sudden rise in 404 error codes
3. A custom alert to detect a sudden rise in referral traffic

## Custom report to track 404 error codes

This custom report will let you know about popular URLs on your website that
don't have an associated page. As websites grow and age, it becomes almost
impossible to redirect every old page that ever existed to its best replacement.
With this custom report, you can also see which redirects are no longer visited
by pruning portions of legacy redirects and see at what rate they are reported.

> **Note:** This information can also be achieved through searching webserver
logs, but the logging causes a constant performance hit on webserver. Plus, with
hosting services you don't always have access to the webserver config or logs.
{: {{site.data.css.info-box}} }

To create the custom report, navigate to **Customization > Custom Reports** and
click **New Custom Report**, then fill out the following sections:

### General Information

Give the report a **Title** that you will recognize, like `404 errors`.

### Report Content

| **Name**         | 404 pages                                |
| **Type**         | Flat Table                               |
| **Dimensions**   | `Page` `Previous Page Path` `Page Title` |
| **Metrics**      | Unique Pageviews                         |

### Filters

You will want to make a rule to

Click **add filter** then select **Behavior > Page Title**, leave it as an
**include** filter with an **exact** match for `404: Not Found` or whatever the
page title of your 404 page is.

> **Note:** Make sure the title of your 404 page is static and doesn't change
based on any factors such as the URL. Also make sure the URL is preserved during
a 404 and not redirected to a 404 specific URL.
{: {{site.data.css.info-box}} }

### Views

Keeping this at the view that is associated with the account will work for most
situations.

Once done, click **Save** and wait 24 hours for the report to be generated.
After the custom report has been generated, it is as close to real-time as the
rest of Google Analytics reporting.

## Custom alert to detect a sudden rise in 404 error codes

This alert will tell you where has been an increase in 404s on your website.
This allows you to quickly detect if a configuration change was incorrect or if
a popular page was accidentally lost.

To create the custom alert, navigate to **Customization > Custom Alerts** and
click **Manage Custom Alerts**. On the next screen, click **New Alert**, then
fill out the following sections before saving the custom alert:

| **Alert Name** | Rise in 404 errors |
| **Apply to**   | 0 Other views      |
| **Period**     | Day                |

Check **Send me an email when this alert triggers** if you would like to be
notified when the alert is triggered, otherwise you will have to log in and
manually check for past alerts that have been triggered.

### Alert Conditions

| **This applies to** | Behavior > Page Title |
| **Condition**       | Matches Exactly       |
| **Value**           | 404: Not Found        |

| **Alert me when**  | Pageviews                     |
| **Condition**      | % increases by more than      |
| **Value**          | 20                            |
| **Compared To**    | Same day in the previous week |

Once done, click **Save** and wait at least the period selected, a day in this
case, to see if any alerts are triggered.

> **Tip:** You may want to make this value really low to test that the custom
alert is working, then tweak it to match the types of traffic flows that are
unique to your website.
{: {{site.data.css.tip-box}} }

## Custom alert to detect a sudden rise in referral traffic

This alert will tell you if there has been an increase in referral traffic from
a specific source. This allows you to immediately know if you have been
mentioned on social media and jump in on the conversation.

To create the custom alert, navigate to **Customization > Custom Alerts** and
click **Manage Custom Alerts**. On the next screen, click **New Alert**, then
fill out the following sections before saving the custom alert:

| **Alert Name** | Popular social media referral |
| **Apply to**   | 0 Other views                 |
| **Period**     | Day                           |

Check **Send me an email when this alert triggers** if you would like to be
notified when the alert is triggered, otherwise you will have to log in and
manually check for past alerts that have been triggered.

### Alert Conditions

| **This applies to** | Acquisition > Source               |
| **Condition**       | Contains                           |
| **Value**           | facebook\|twitter\|reddit\|youtube |

| **Alert me when**  | Sessions                      |
| **Condition**      | % increases by more than      |
| **Value**          | 20                            |
| **Compared To**    | Same day in the previous week |

Once done, click **Save** and wait at least the period selected, a day in this
case, to see if any alerts are triggered.

> **Tip:** You may want to make this value really low to test that the custom
alert is working, then tweak it to match the types of traffic flows that are
unique to your website.
{: {{site.data.css.tip-box}} }

{% include feedback.html %}
