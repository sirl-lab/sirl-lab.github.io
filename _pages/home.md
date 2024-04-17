---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

### Welcome!

Welcome to the Systems and Informatics Research Laboratory (SIRL) at the Indian Institute of Science Education and Research Bhopal. We work on applied societal research problems where sensing and analytics are leveraged to design and build tangible solutions. At large, our lab collects data in real-world settings with sensors, uses data to understand the problem dynamics, and builds data-driven scalable solutions in the form of robust and affordable systems. Currently, we focus on healthcare, transportation, and buildings

<div class="container">
<div class="row">
<center>
<!--  first attempt
<script>
var images = [
    "/images/convocation2023.jpeg",
    "/images/group-photo.jpg",
    "/images/group-photo.jpg"
];
var currentIndex = 0;
var imageElement = document.getElementById("image");
var changeImageButton = document.getElementById("changeImageBtn");
changeImageButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
});
</script>
<img id="image" src="/images/group-photo.jpg" alt="Image" width="100%">
<button id="changeImageBtn">Change Image</button>
 -->

 <!-- second attempt
<script>
function showNextImage() {
  var totalImages = {{ site.image_urls | size }};
  var currentIndex = {{ current_image_index }};
  
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Wrap around to the first image
  }
  document.querySelector('img').src = '{{ site.image_urls[current_index] }}';
  document.getElementById('current_image_index').value = currentIndex;
  return currentIndex;
  //{{ current_image_index }} = currentIndex; // Update current image index
}
</script>

{% assign current_image_index = 0 %}
{% if site.image_urls.size > 0 %}
  <img src="{{ site.image_urls[current_image_index] }}" alt="Image" width="100%">
  <button onclick="showNextImage()">Next</button>
  <input type="hidden" id="current_image_index" value="{{ current_image_index }}">
{% endif %}
 
-->
 
<img src="{{ site.url }}{{ site.baseurl }}/images/group-photo.jpg" width="100%"/>
<br/> Group Photo<br/>

</center>
</div>
</div>
<br/>

 
