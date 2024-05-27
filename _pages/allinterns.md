---
title: "Interns"
layout: textlay
sitemap: false
permalink: /allinterns.html
---

## Interns

<div class="jumbotron">
{% for member in site.data.interns %}
- <b>{{ member.name }} </b>: <i> {{ member.info }}</i>

{% endfor %}
</div>