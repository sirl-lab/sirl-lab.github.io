---
layout: page
title: Occupancy Detection
description: 
img: assets/img/projects/Soumyaoccupancy-logo.png
importance: 1
category: MS
related_publications: true
---
 <div class="row">
    <div class="col-lg-10 col-md-8">
        <p>
This project explored privacy-preserving occupancy estimation and localization in indoor environments using thermal cameras. We developed machine learning and deep learning techniques capable of accurately estimating the number and location of occupants in both sparse and densely populated settings, such as classrooms and auditoriums. By leveraging thermal imagery and advanced feature extraction methods, the proposed system achieved up to 97% occupancy estimation accuracy while preserving occupant privacy.
        </p>
 <div id="projectCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="{{ '/assets/img/projects/occupancy-headshot-1.png' | relative_url }}"
               class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="{{ '/assets/img/projects/occupancy-headshot-2.png' | relative_url }}"
               class="d-block w-100">
        </div>
      </div>
      <a class="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

  </div>

  <div class="col-lg-2 col-md-4 mt-4 mt-md-0">
    <h4>Details</h4>
    <p><strong>Lead Student:</strong> Soumya Ranjan Sahoo</p>
    <p><strong>Domain:</strong> Smart Buildings</p>
    <p><strong>Year:</strong> 2022–2023</p>
  </div>

</div>

## Presentation 
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZM7j4UTn7e0?si=LIPR-ST4C-A0njm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Dataset
 - Dataset is avaialble on [OSF](https://osf.io/9u4yb/)
 - Papers are referenced below

## Papers
<div class="publications">

{% bibliography --query @*[key= sahoo2024mapping] and @*[key=sahoo2023occupancy] %}

</div>



