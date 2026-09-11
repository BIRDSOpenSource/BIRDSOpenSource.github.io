---
title: Library
layout: default
permalink: "/library"
lang: en
---

<div class="library-page">

  <div class="library-intro">
    <h1>Welcome to the BIRDS Open Source Library.</h1>
    <p>
      A place for all published papers, articles, conference proceedings
      relating to the BIRDS project.
    </p>
  </div>

  <!-- RESEARCH PAPERS -->
  <section class="library-section">

    <div class="library-section-header">
      <h2>Research Papers</h2>
      <a href="{{ '/library/research-papers/' | relative_url }}">
        See more →
      </a>
    </div>

    <div class="library-row">

      {% for paper in site.data.library.research_papers  limit: 6 %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>
{% endfor %}


    </div>

  </section>


  <!-- CONFERENCE PROCEEDINGS -->
  <section class="library-section">

    <div class="library-section-header">
      <h2>Conference Proceedings</h2>
      <a href="{{ '/library/conferences/' | relative_url }}">
        See more →
      </a>
    </div>

    <div class="library-row">

      {% for paper in site.data.library.conferences  limit: 6 %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>
{% endfor %}

    </div>

  </section>


  <!-- TEXTBOOKS-->
  <section class="library-section">

    <div class="library-section-header">
      <h2>Textbooks</h2>
      <a href="{{ '/library/textbooks/' | relative_url }}">
        See more →
      </a>
    </div>

    <div class="library-row">

      {% for paper in site.data.library.textbooks  limit: 6 %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>
{% endfor %}

    </div>

  </section>

    <!-- PRESENTATIONS -->
  <section class="library-section">

    <div class="library-section-header">
      <h2>Presentations </h2>
      <a href="{{ '/library/presentations/' | relative_url }}">
        See more →
      </a>
    </div>

    <div class="library-row">

       {% for paper in site.data.library.presentations  limit: 6 %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>
{% endfor %}

    </div>

  </section>

    <!-- PRESS -->
  <section class="library-section">

    <div class="library-section-header">
      <h2>Press </h2>
      <a href="{{ '/library/press/' | relative_url }}">
        See more →
      </a>
    </div>

    <div class="library-row">

       {% for paper in site.data.library.press  limit: 6 %}
  <a
    href="{{ paper.link }}"
    class="library-item"
    data-title="{{ paper.title }}"
  >
    <img src="{{ paper.image | relative_url }}" alt="{{ paper.title }}">
  </a>
{% endfor %}

    </div>

  </section>

</div>


<div id="library-tooltip"></div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  const tooltip = document.getElementById("library-tooltip");
  const items = document.querySelectorAll(".library-item");

  items.forEach(item => {

    item.addEventListener("mouseenter", function () {
      tooltip.textContent = this.dataset.title;
      tooltip.classList.add("visible");
    });

    item.addEventListener("mousemove", function (event) {
      tooltip.style.left = (event.clientX + 16) + "px";
      tooltip.style.top = (event.clientY + 16) + "px";
    });

    item.addEventListener("mouseleave", function () {
      tooltip.classList.remove("visible");
    });

  });

});
</script>