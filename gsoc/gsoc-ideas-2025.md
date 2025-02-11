---
title: GSoC 2025 Project Idea List
nav_order: 
parent: GSoC 
layout: default
permalink: "/gsoc-ideas-2025"
lang: en
---


# 🚀 GSoC 2025 Project Ideas List

📝: The standard coding period for these projects is 12 weeks, but given the complexity and learning curve, we recommend 18 or 22 weeks depending on the background of the contributor.
{: .note .text-grey-dk-300}


## 1. Documentation & Usability Improvements  
### 🔹 Project Title: *Enhancing Documentation for BIRDS Open Source Software*  
📌 **Description**: Improve and standardize documentation across different software components of the BIRDS Open Source project, making it easier for new users and contributors to understand and engage with the system.  

🎯 **Goals**:  
- Improve the **documentation website** (using JustTheDocs).  
- Deliver **step-by-step tutorials** for compiling, installing, and using key software components.  
- Document the **process for loading a new program onto the satellite**.  
- Improve function documentation and technical guides for developers.  

🛠 **Skills Required**:  
- Technical writing  
- Markdown  
- Function documentation  
- Git/GitHub  

📆 **Project Size**: **Medium (175 hours)**  
🕒 **Duration**: **12-18 weeks**  

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
- Operating system fundamentals  
- Low-level firmware development  
- Satellite communications  

📆 **Project Size**: **Large (350 hours)**  
🕒 **Duration**: **18-22 weeks**  

---

## 3. KiCad Design of an Open-Source CubeSat Onboard Computer (OBC)  
### 🔹 Project Title: *Developing an Open-Source CubeSat OBC PCB using KiCad*  
📌 **Description**: Design and document a fully open-source **Onboard Computer (OBC) PCB** using **KiCad**, making it easy for CubeSat teams to adapt and use. We currently get the board design and fabrication done with **[Sagami Tsushin](https://www.sagami-net.co.jp/)**, but users have said it is difficult to do from their country. We want to make a design that can be sent to **any PCB manufacturer** near users.  

🎯 **Goals**:  
- With the schematic already shared, design a PCB layout for a CubeSat OBC.  
- Ensure the board meets **CubeSat standard interfaces** and can be easily integrated with BIRDS software.  
- Generate **BOM (Bill of Materials)**, fabrication files, and a user manual for teams that want to replicate or improve the design.  

🛠 **Skills Required**:  
- KiCad  
- PCB design  
- Hardware development  
- Embedded systems  

📆 **Project Size**: **Medium (175 hours)**  
🕒 **Duration**: **12-18 weeks**  

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

📆 **Project Size**: **Large (350 hours)**  
🕒 **Duration**: **18-22 weeks**  

---

## 5. CubeSat Hardware-in-the-Loop (HIL) Testing Framework  
### 🔹 Project Title: *Developing a Hardware-in-the-Loop (HIL) CubeSat Testing Framework*  
📌 **Description**: Create a **HIL testing environment** where CubeSat software can be tested before deployment, reducing hardware testing costs and debugging time.  

🎯 **Goals**:  
- Develop a **hardware testing framework** for validating CubeSat software.  
- Integrate with existing BIRDS software to test firmware behavior under controlled conditions.  
- Allow users to run **automated tests** to validate mission scenarios.  

🛠 **Skills Required**:  
- Python  
- C++  
- Hardware-in-the-loop (HIL) testing  
- Embedded systems  

📆 **Project Size**: **Large (350 hours)**  
🕒 **Duration**: **18-22 weeks**  

---

## 6. Port Firmware Code to an Open Compiler  
### 🔹 Project Title: *Migrating BIRDS Firmware from CCS Compiler to an Open Compiler*  
📌 **Description**: We currently use **CCS Compiler**, which is proprietary, so we want to make the firmware compatible with an **open compiler** such as **Microchip XC8** (though XC8 is only free, not fully open).  

🎯 **Goals**:  
- Analyze the existing firmware and dependencies on CCS.  
- Port the code to XC8 while ensuring compatibility and functionality.  
- Perform validation tests to confirm proper operation.  

🛠 **Skills Required**:  
- C++  
- Embedded Systems  
- Compiler Migration  

📆 **Project Size**: **Medium (175 hours)**  
🕒 **Duration**: **12-18 weeks**  


