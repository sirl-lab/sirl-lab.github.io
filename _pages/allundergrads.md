---
title: "Undergrads"
layout: textlay
sitemap: false
permalink: /allundergrads.html
---

## Undergraduate Alumni

<div class="jumbotron">
{% for member in site.data.undergrad %}
- <b>{{ member.name }} </b>: <i> {{ member.info }}</i>

{% endfor %}
</div>