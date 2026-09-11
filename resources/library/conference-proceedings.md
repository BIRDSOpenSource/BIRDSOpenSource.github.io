---
layout: default
title: Conference Proceedings
permalink: /library/conferences/
---

<div class="library-page library-all-page">

  <h1>Conference Proceedings</h1>

  <p class="library-description">
    Conference Proceedings and publications related to the BIRDS project.
  </p>

  <div class="library-grid">

    {% for paper in site.data.library.conferences %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>

  
{% endfor %}

  </div>

</div>