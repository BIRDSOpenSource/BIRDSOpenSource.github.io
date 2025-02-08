---
title: GSoC 2025 Project Idea List
nav_order: 
parent: GSoC 
layout: default
permalink: "/gsoc-ideas-2025"
lang: en
---


# 🚀 GSoC 2025 Project Ideas List

## 1. Documentation & Usability Improvements  
### 🔹 Project Title: *Enhancing Documentation for BIRDS Open Source Software*  
📌 **Description**: Improve and standardize documentation across different software components of the BIRDS Open Source project, making it easier for new users and contributors to understand and engage with the system.  

🎯 **Goals**:  
- Improve the  **documentation website** (using JustTheDocs).  
- Create **tutorials** and **walkthroughs** for software installation, usage, and contributions.  
- Improve function documentation and technical guides for developers.  

🛠 **Skills Required**:  
- Technical writing  
- Markdown  
- Function documentation  
- Git/GitHub  

---

## 2. In-Orbit Firmware Update System  
### 🔹 Project Title: *Implementing a Remote Firmware Update System for CubeSat Onboard Computers*  
📌 **Description**: Develop a **fault-tolerant method** for updating the onboard computer (OBC) firmware **while the satellite is in orbit**. This would allow operators to fix bugs, improve performance, or add new features remotely.  

🎯 **Goals**:  
- Design a **bootloader** that can safely manage firmware updates.  
- Implement **redundancy and rollback mechanisms** to prevent bricking the system.  
- Develop and test a **secure update protocol** for transmitting new firmware from the ground station.  

🛠 **Skills Required**:  
- Embedded C  
- RTOS  
- Low-level firmware development  
- Satellite communications  

---

## 3. KiCad Design of an Open-Source CubeSat Onboard Computer (OBC)  
### 🔹 Project Title: *Developing an Open-Source CubeSat OBC PCB using KiCad*  
📌 **Description**: Design and document a fully open-source **Onboard Computer (OBC) PCB** using **KiCad**, making it easy for CubeSat teams to adapt and use.  

🎯 **Goals**:  
- Develop a **schematic** and PCB layout for a CubeSat OBC.  
- Ensure the board meets **CubeSat standard interfaces** and can be easily integrated with BIRDS software.  
- Generate **BOM (Bill of Materials)**, fabrication files, and a user manual for teams that want to replicate or improve the design.  

🛠 **Skills Required**:  
- KiCad  
- PCB design  
- Hardware development  
- Embedded systems  

---

## 4. Development of a Web-Based Ground Station Dashboard for BIRDS CubeSats  
### 🔹 Project Title: *Building a Web-Based Dashboard for CubeSat Ground Stations*  
📌 **Description**: Develop a **real-time dashboard** that allows ground station operators to **monitor, control, and visualize telemetry** from CubeSats.  

🎯 **Goals**:  
- Create a **web-based interface** for satellite health monitoring (battery, temperature, comms status, etc.).  
- Implement real-time **graphing and logging** of telemetry data.  
- Develop features for **command uplink and event notifications**.  

🛠 **Skills Required**:  
- Web development (React, Vue, or Django)  
- Real-time data visualization  
- Database management  

---

## 5. CubeSat Simulation Framework for Testing OBC Software  
### 🔹 Project Title: *Developing a Software-in-the-Loop (SIL) CubeSat Simulation Framework*  
📌 **Description**: Create a **simulation environment** where CubeSat software can be tested before deployment, reducing hardware testing costs and debugging time.  

🎯 **Goals**:  
- Develop a **software model** of a CubeSat, including sensors, actuators, and communication interfaces.  
- Integrate with existing BIRDS software to test firmware behavior under simulated space conditions.  
- Allow users to run **automated tests** to validate mission scenarios.  

🛠 **Skills Required**:  
- Python  
- C++  
- Simulation frameworks  
- Hardware-in-the-loop (HIL) testing  
