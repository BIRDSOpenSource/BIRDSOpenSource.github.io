---
title: How to Define Mission Specifications
# nav_order: 2
parent: For OBC Team Members
layout: default
lang: en
nav_exclude: true
---

# How to Define Mission Specifications (Template Included)

> After reading this guide you can find the [accompanying template to fill here](https://birds-project.com/open-source/pdf/template_mission-req.docx) and an [example document here](https://birds-project.com/open-source/pdf/example_mission-req.docx).
>

## Overview

This guide explains how to define mission specifications for a CubeSat project, including key parameters such as payload requirements, operational constraints, and mission success criteria. This is essential for ensuring the satellite meets its objectives effectively.

## Before You Start

Before defining the mission specifications, ensure:

* You have a clear mission objective (e.g., Earth observation, communication, technology demonstration).
* You understand the limitations of CubeSats in terms of power, volume, and mass.
* You are aware of regulatory requirements (e.g., frequency coordination, debris mitigation).

## Defining Mission Specifications

### Step 1: Establish Mission Objectives
1. Define the primary mission goal (e.g., imaging Earth with a 5m resolution camera, relaying APRS signals for amateur radio operators).
2. Identify secondary objectives, if any (e.g., testing new sensors, collecting radiation data).
3. Specify the expected mission duration (e.g., 6 months, 2 years).

### Step 2: Define Payload Requirements
1. Specify the type of payload (e.g., optical camera, APRS transceiver).
2. Determine payload constraints such as:
    * Size (e.g., fits within a 1U CubeSat frame)
    * Mass (e.g., < 500g for a 1U CubeSat)
    * Power consumption (e.g., 2W average, 5W peak)
    * Data storage and transmission needs (e.g., 1GB onboard storage, 9.6 kbps downlink rate)

### Step 3: Set Operational Constraints
1. Define orbital parameters (e.g., Sun-synchronous orbit at 500km altitude).
2. Define attitude control and pointing accuracy (e.g., ±1° for imaging missions).
3. Outline ground segment requirements (e.g., minimum two ground stations for data reception).

### Step 4: Define Environmental and Reliability Factors
1. Assess radiation exposure and implement mitigation strategies.
2. Specify thermal operating conditions (e.g., -40°C to +85°C).
3. Establish redundancy measures for critical components.

### Step 5: Define Success Criteria
1. Primary success (e.g., capturing and downlinking 100 images in 6 months).
2. Partial success (e.g., payload operates but data transmission is limited).
3. Failure criteria (e.g., loss of communication within 1 month).

## See Also

* [CubeSat Standard Specifications](https://www.cubesat.org/)
* [NASA Small Spacecraft Systems Virtual Institute](https://www.nasa.gov/smallsat-institute)
* [IARU Frequency Coordination](https://www.iaru.org/satellite/)
* [Example APRS CubeSat Missions](https://www.amsat.org/)

This guide provides a structured approach to defining mission specifications for CubeSat teams. Customize it based on your specific mission needs.

Now that you have a better idea of the mission your satellite wants to accomplish and the technical specifications of it, you need to create a [requirements allocation sheet]({{site.url}}/how-tos/requirement-allocation-sheet) for each subsytems depending on how they relate with your mission objectives. 

[Previous]({{site.url}}/get-started/github-account.html){: .btn .btn-purple }
[Next]({{site.url}}/how-tos/requirement-allocation-sheet){: .btn}