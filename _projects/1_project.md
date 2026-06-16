---
layout: page
title: Nighttime traffic sign recognition
description: 
img: assets/img/projects/adityaMishra-dataset-distribution.png
importance: 1
category: MS
related_publications: true
---


<div class = "row">
<div class="col-lg-10 col-md-8" markdown="1">


Traffic sign recognition is essential for safe autonomous navigation, but existing systems often fail when moving from curated benchmarks to real road conditions.


This project addresses two key bottlenecks:

1. lack of representative low-light traffic sign data (phase 1),
2. unstable per-frame predictions in streaming vehicular video (phase 2).

## Phase 1: INTSD and LENS-Net

This phase introduces the Indian Nighttime Traffic Sign Dataset (INTSD), a large-scale street-level benchmark captured across diverse Indian regions. INTSD explicitly includes challenging nighttime degradations such as headlight glare, sensor noise, and motion blur across 41 classes.

To benchmark this setting, proposed method, LENS-Net, combines illumination-aware detection with multimodal semantic reasoning for robust nighttime traffic sign recognition.

<div class="row">
            <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/projects/LensNet-architecture.png" title="LensNet Archiecture" class="img-fluid rounded z-depth-1" %}
            </div>
</div>
<div class="caption">
Overview of the proposed LENS-Net architecture. 
</div>



## Phase 2: Real-World Deployment

This phase reports the performance of real-time edge sytems. This work in under submission.


</div>
<div class="col-lg-2 col-md-4 mt-4 mt-md-0" markdown="1">

#### Details

**Lead Student:** Aditya Mishra

**Domain:** Computer Vision, Autonomous Systems, Edge Computing

**Year:** 2025 - 2026

 </div>
 </div>   


## Papers

<div class="publications">

{% bibliography --query @*[project=nighttime-traffic-sign-detection] %}

</div>


