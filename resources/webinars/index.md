---
title: Webinars
layout: default
has_children: true
permalink: "/webinars/"
lang: en
has_toc: false

description: "Join monthly webinars to learn about CubeSat engineering, missions, and open-source development."
---

# 🌍 BIRDS Open Source Webinars

Join our monthly webinars and connect with engineers, researchers, and educators working on lean satellite development and open-source CubeSat technology.


## 📅 Upcoming Webinar

### Introduction to the CubeLander and Apophis Landing mission

<span class="text-gray-600 text-sm block mb-4">14th October 2026 (Wed) 22:00 (JST)</span>

<p class="mb-4">
  Tetsuro Harada presents an introduction to the CubeLander and Apophis Landing mission. Birds bus will be applied to an asteroid lander called CubeLander. A target asteroid is 
Apophis, which will make a close approach to Earth on April 13, 2029, passing 
approximately 36,000 km above the Earth’s surface. The CubeLander will be 
developed primarily by students of ChibaTech who had developed and operated 
Earth-orbiting CubeSats.
</p>

<div id="subscribe" class="bg-white py-3 px-2 text-center border border-gray-200 rounded mt-12">
  <h3 class="text-2xl font-bold mb-4">📬 Stay in the loop</h3>
  <p class="mb-6 text-gray-700">Get notified when a new webinar is announced.</p>

  <a href="https://lean-sat.org/opensource/"
     target="_blank"
     rel="noopener"
     class="btn bg-[#e6e1e7] text-white px-6 py-2 rounded hover:bg-[#003f73] transition inline-block">
    Join Monthly Webinars
  </a>
</div>


## 🎥 Past Webinars

{% assign webinars = site.pages
  | where: "parent", "Webinars"
  | sort: "date"
  | reverse
%}

<div style="display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">

{% for webinar in webinars %}

  <div style="
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #005596;
    box-shadow: 0 2px 5px rgba(0,0,0,0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  ">

    <a href="{{ site.url }}{{ webinar.url }}"
       style="text-decoration: none; color: inherit; display: block;">

      <div style="
        font-size: 0.8rem;
        font-weight: 600;
        color: #e6e1e7;
        margin-bottom: 8px;
      ">
        View Webinar →
      </div>

      <h3 style="
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 1.15rem;
        color: white;
      ">
        {{ webinar.title }}
      </h3>

      {% if webinar.date %}
        <div style="
          font-size: 0.9rem;
          color: #e6e1e7;
          margin-bottom: 12px;
        ">
          {{ webinar.date | date: "%B %-d, %Y" }}
        </div>
      {% endif %}

      {% if webinar.description %}
        <p style="
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #e6e1e7;
        ">
          {{ webinar.description }}
        </p>
      {% endif %}

      {% if webinar.tags %}
        <div style="margin-top: 12px;">
          {% for tag in webinar.tags %}
            <span style="
              display: inline-block;
              padding: 3px 8px;
              margin-right: 4px;
              margin-bottom: 4px;
              border-radius: 4px;
              background: #e6e1e7;
              color: #005596;
              font-size: 0.75rem;
            ">
              {{ tag }}
            </span>
          {% endfor %}
        </div>
      {% endif %}

      <div style="
        margin-top: 16px;
        font-size: 0.85rem;
        font-weight: 600;
        color: white;
      ">
      </div>

    </a>
  </div>

{% endfor %}

</div>