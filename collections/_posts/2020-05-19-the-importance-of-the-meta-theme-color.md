---
title: The Importance of the Meta Theme Color
layout: post
tags: [html, ux, css]
categories: [Web Development]
---

You have probably noticed that on some popular website when visited on mobile, the menu bar in Chrome magically changes its colour to match the primary colour of the page.

{% include image.html url="https://miro.medium.com/max/1400/1*Rt7lUs235zuIFyj9V4nJcA.jpeg" description="Medium’s website with a nice contrast between the menu bar and the page" %}

{% include image.html url="https://miro.medium.com/max/1400/1*sB6AGTW2FeQhpNewsD3XrA.jpeg" description="The Guardian’s Website" %}

There is no magic in that. This can easily be achieved by using only one line of code inserted directly into the **<head>** tag of your page. This will suggest to the browser to use this colour rather than the default one.

```html
<meta name="theme-color" content="#ffffff">
```

Other popular websites using this:

* [https://edition.cnn.com/](https://edition.cnn.com/)
* [https://www.cnet.com/](https://www.cnet.com/)
* [https://github.com/](https://github.com/)

This one line can go a long way in helping your clients notice you and your website. It simply looks more professional and you appear to have spent more time on your design. Support for this feature has been introduced in version 39 of Chrome for Android on Lollipop.