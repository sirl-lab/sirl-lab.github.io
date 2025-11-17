---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---


Welcome to the Systems and Informatics Research Laboratory (SIRL) at IISER Bhopal.

SIRL conducts interdisciplinary research at the intersection of sensing, signal processing, and machine learning. We deploy sensor systems in real-world environments to gather high-quality data, model the underlying dynamics using statistical and ML techniques, and design data-driven systems that are robust, scalable, and resource-efficient.

Our ongoing projects span computational healthcare, intelligent transportation, and building informatics.


<div class="container">
<div class="row">
 
<!--
<script>
var imageUrls = [
  {% for image_url in site.image_urls %}
    "{{ image_url }}",
  {% endfor %}
];

function showNextImage() {
  var totalImages = imageUrls.length;
  var currentIndex = parseInt(document.getElementById('current_image_index').value, 10);
  
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  document.querySelector('img').src = imageUrls[currentIndex];
  document.getElementById('current_image_index').value = currentIndex;
}

</script>
<center> 
{% assign current_image_index = 0 %}
{% if site.image_urls.size > 0 %}
 <input type="hidden" id="current_image_index" value="{{ current_image_index }}">
  <img src="{{ site.image_urls.first }}" alt="Image" width="100%" style="max-width:600px" >

 <button onclick="showNextImage()">Next</button>
{% endif %}
 </center>
-->

<img src="{{ site.url }}{{ site.baseurl }}/images/lab-work-examples.png" width="100%"/>
</div>
</div>
<br/>
 
