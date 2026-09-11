---
layout: default
title: Research Papers
permalink: /library/research-papers/
---

<div class="library-page library-all-page">

  <h1>Research Papers</h1>

  <p class="library-description">
    Research papers and publications related to the BIRDS project.
  </p>

  <div class="library-grid">

    {% for paper in site.data.library.research_papers %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>

  
{% endfor %}

    <!-- all papers -->

  </div>

</div>