---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

Welcome to the Systems and Informatics Research Laboratory (SIRL) at IISER Bhopal.

SIRL conducts interdisciplinary research on human-centered, privacy-aware intelligent systems that operate on personal, mobile, and edge devices. Our work lies at the intersection of sensing, signal processing, machine learning, and human–computer interaction (HCI).

We deploy sensor systems in real-world environments to capture rich human and contextual data, and develop resource-efficient, privacy-preserving learning frameworks—including on-device and federated approaches—that respect human constraints such as usability, trust, and data ownership. Through this, we aim to design robust, scalable, and socially responsible data-driven systems for applications in health, wellbeing, and smart environments.


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
 
