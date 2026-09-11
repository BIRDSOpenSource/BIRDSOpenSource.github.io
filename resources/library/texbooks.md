---
layout: default
title: Textbooks
permalink: /library/textbooks/
---

<div class="library-page library-all-page">

  <h1>Textbooks</h1>

  <p class="library-description">
    Textbooks related to the BIRDS project.
  </p>

  <div class="library-grid">

    {% for paper in site.data.library.textbooks %}
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