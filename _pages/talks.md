---
title: "Talks"
layout: gridlay
sitemap: false
permalink: /talks/
---

<style>
.btn{
    margin-bottom:5px;
    padding-top:1px;
    padding-bottom:1px;
    padding-left:15px;
    padding-right:15px;
}
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style>


<div class="jumbotron">
### Community service

- Editor, PLOS Mental Health (2023 - present)
- Registration Chair, COMPASS 2025
- TPC IEEE/ACM CHASE 2025
- TPC ACM COMPASS 2025
- Reviewer 2025 (CHI, IMWUT, AAAI, CHASE, COMPASS, IEEE JBHI)
- Reviewer 2024 (MobileHCI, IMWUT, UbiComp/ISWC, IEEE Sensors Letters, PLOS Mental Health) 
- Conducted NPTEL hands-on workshop on IoT, twice (july, December) at IISER Bhopal
- Reviewer 2023 (IMWUT, IEEE Sensors Letters, PLOS Mental Health)
- Reviewer 2022 (IMWUT, COMPASS) 
- Reviewer (IEEE Transactions on ITS, ACM BuildSys, IEEE Transactions on Smart Grid, IMWUT 2020)
</div>

<div class="jumbotron">
### Institute service
- Cyber Security Committee member (Jan. 2023 - present)
- Coordinator/Head Computer Center (Jan. 2022 - Jan. 2024)
- DFAC member DSE department (July 2021 - July 2022) 
</div>


<div class="jumbotron">
### Invited talks
{% bibliography --query @incollection[keywords ^= invited] %}
</div>


<div class="jumbotron">
### Regular talks
{% bibliography --query @incollection[keywords != invited] %}
</div>

