---
layout: default
title: Presentations
permalink: /library/presentations/
---

<div class="library-page library-all-page">

  <h1>Presentations</h1>

  <p class="library-description">
    Presentations from workshops, events, reports related to the BIRDS project.
  </p>

  <div class="library-grid">

{% for paper in site.data.library.press %}
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