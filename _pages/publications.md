---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order. 
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}
<script src="{{ '/assets/js/publications-year-index.js' | relative_url | bust_file_cache }}" type="module"></script>

<div class="publication-year-index" id="publication-year-index" aria-label="Publication year index"></div>

<div class="publications compact-publications">

{% bibliography %}

</div>
