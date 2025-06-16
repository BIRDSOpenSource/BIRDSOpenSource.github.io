---
title: How to make a requirement sheet
nav_order: 4
# parent: How-to guides
layout: default
lang: en
---

# How to Make a Requirement Sheet for On-Board Computer (OBC) (Templates Included)

## Overview

This guide explains how to create a comprehensive requirements sheet for the On-Board Computer (OBC) team in an educational CubeSat project.

Having a well-structured requirements sheet ensures clarity of the OBC's functions, aligns team goals, and prevents miscommunication during the development process.

## Before you start

Before you begin creating a requirements sheet, ensure:

- You have reviewed the CubeSat mission objectives and payload requirements.
- The team has agreed on the overall system architecture and subsystems interface.
- You understand the relevant industry standards (e.g., ECSS or NASA standards) for CubeSat design.

## Creating a Requirements Sheet

The purpose of this task is to provide a clear, traceable, and actionable document for the OBC team that defines what the system must achieve and the constraints it must operate within.

Follow these steps to create the requirements sheet:

1. **Define the mission objectives.**  
   Write down the high-level goals of the CubeSat mission, as these will directly influence the OBC's requirements.

   Example:  
   *"The mission will collect and transmit 10MB of data per day to the ground station using a UHF transceiver."*

   **Result**: The OBC team knows the data processing and transmission capabilities needed.

2. **Identify key functional requirements.**  
   Write clear, concise statements describing what the OBC must do. Use measurable and verifiable terms.

   **Examples**:  
   - The OBC must process and store payload data at a rate of 1MB/s.  
   - The OBC must communicate with the EPS (Electrical Power System) every 5 seconds to monitor power levels.

3. **List performance requirements.**  
   Specify quantitative parameters the OBC must meet.

   **Examples**:  
   - The OBC must operate at a nominal voltage of 3.3V ± 5%.  
   - The OBC must maintain functionality in a temperature range of -20°C to +50°C.

4. **Define interface requirements.**  
   Identify how the OBC will interact with other subsystems (e.g., ADCS, EPS, payload).

   **Examples**:  
   - The OBC must receive attitude control commands from the ADCS at a rate of 10Hz.  
   - The OBC must send battery level data to the ground station once every 10 minutes.

5. **Include constraints and limitations.**  
   Define any physical, budgetary, or operational limits that will influence the OBC design.

   **Examples**:  
   - The OBC must not exceed a power consumption of 2W during nominal operations.  
   - The OBC PCB size must fit within 90mm x 90mm.

6. **Verify and validate requirements.**  
   Add a section to track how each requirement will be tested or verified.

   **Example**:  
   - **Verification**: The OBC will undergo thermal vacuum testing to ensure it meets temperature tolerance requirements.

### Sub-tasks

If the requirements process is complex, you can divide the task into smaller parts, such as:

- Gathering input from other subsystems.
- Validating requirements with the entire CubeSat team.
- Iterating on the requirements document based on reviews.

## See also

- [CubeSat Design Specification (CDS)](https://www.cubesat.org/specifications)  
- [NASA Systems Engineering Handbook](https://www.nasa.gov/seh)  
- [ECSS Standards for Space Systems](https://ecss.nl/)

[Previous]({{site.url}}/get-started/reference.html){: .btn .btn-purple }
[Next]({{site.url}}/get-started/download-files.html){: .btn}