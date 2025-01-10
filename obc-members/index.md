---
title: For OBC Team Members
has_children: true
nav_order: 4
layout: default
permalink: "/obc/guide"
lang: en
---

# Guide for OBC Team Members
{: .no_toc }

<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>

### **Tutorial Series Titles for OBC Members**
#### **1. Introduction and Fundamentals**
1. **Overview of CubeSat Onboard Computer (OBC) Systems**
   - Role of the OBC in CubeSat subsystems.
   - Interfaces with payloads, communication, ADCS, and EPS.

2. **Evolution of OBC Design in BIRDS Projects**
   - Lessons learned from BIRDS-X, BIRDS-5, and BIRDS-4 OBC designs.
   - Comparisons of architectures and technologies used.

## Introduction
{:toc}
This guide provides foundational knowledge of CubeSat system architecture and software, tailored for new OBC team members.


## Role and Responsibilities of the OBC Team
{:toc}
The Onboard Computer (OBC) serves as the CubeSat’s central command center, coordinating subsystems, managing mission-critical tasks, and ensuring seamless data flow throughout the satellite. 
- It processes attitude data from the Attitude Determination and Control System (ADCS) and issues control commands to maintain and adjust the CubeSat’s orientation. 
- The OBC is responsible for controlling deployment mechanisms, including antennas and burner circuits for solar panel deployment, ensuring the satellite’s functionality post-launch. 
- It manages power line regulation and protection by controlling Digital Input/Outputs (DIOs) and Overcurrent Protection Systems (OCPS) and 
- handles connections to communication transceivers to facilitate telemetry, command, and mission data exchange between the CubeSat and the ground station. 

Additionally, the OBC oversees mission routing, ensuring that tasks like data acquisition, storage, and downlink operations occur according to mission schedules, making it an indispensable component of CubeSat operations.


## Key Systems and Architectures
{:toc}
  <p>
    <img alt="OBC-detailed-block-diagram" src="https://github.com/BIRDSOpenSource/BIRDSRP-OBC/blob/main/Diagrams/obc-detailed-block-diagram.png">
  </p> 


6. Documentation and Best Practices
Writing OBC Design Documentation

Templates and examples from BIRDS missions.
Tips for documenting hardware, software, and interfaces.
Maintaining Open-Source Codebases for OBCs

Version control practices (e.g., Git).
Collaborative coding standards.
7. Advanced Topics
Developing AI/ML Algorithms for CubeSat Applications

Applications: anomaly detection, autonomous navigation, and data processing.
Tools and frameworks for edge computing on CubeSats.
Future Trends in OBC Development

Use of COTS (Commercial Off-The-Shelf) hardware.
Low-power processors for small satellite missions.
References and Learning Resources
Technical Documents:

BIRDS-X, BIRDS-5, and BIRDS-4 mission papers and subsystem descriptions.
Component datasheets for microcontrollers, memory, and peripherals.
Books and Tutorials:

Books on embedded systems, real-time programming, and fault-tolerant designs.
Online tutorials for RTOS and embedded software development.
Simulation Tools:

CubeSat simulation platforms like STK, Simulink, or GMAT.
Tools for hardware debugging: JTAG, Logic Analyzers.
Open-Source Repositories:

CubeSat Kit repositories and software examples.
GitHub projects related to CubeSat OBCs.
Mission Reports and Case Studies:

Lessons learned from other CubeSat missions with advanced OBC capabilities.