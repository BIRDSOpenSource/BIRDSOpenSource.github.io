---
title: Hardware Guides
nav_order: 7
has_children: true
has_toc: false
layout: default
permalink: "/hardware/"
lang: en
description: "Technical reference for the BIRDS CubeSat hardware subsystems."
---

# 🔩 BIRDS Hardware Guide

This section provides detailed documentation on the physical components that make up the BIRDS CubeSat bus. With step-by-step guides for designing and assembling hardware for the system. These tutorials will help you with assembling the necessary boards, preparing cables, and setting up for integration.

From power systems to communication boards, sensors to solar panels, you'll find background explanations, electrical schematics, usage notes, and assembly tips to support both education and implementation.

---

## What tools do we use in development?
   - **Microcontrollers/Boards**: PIC MCUs, custom PCBs
   - **Power Systems**: Solar panels, battery packs
   - **Sensing Devices**: Magnetometers, gyroscopes for ADCS

---

## 🧱 Subsystem Categories

- Electrical Power System (EPS)
- On-Board Computer (OBC)
- Communication Module (UHF/VHF/S-band)
- ADCS (Attitude Determination & Control System)
- Structural Design & Integration

---

## 📎 Using this Guide

Each section contains:
- Block diagrams and system overviews
- Board photos and layout info
- BOMs (Bill of Materials)
- Key pinouts and signal references
- Recommendations for testing and integration

> 💡 Tip: When modifying hardware, always cross-check connector types and thermal constraints.

Follow these guides to assemble the necessary hardware components:

- [Assembling the Access Board]({{site.url}}/how-tos/assemble_access_board.html)  
- [Assembling the Programming Board]({{site.url}}/how-tos/assemble_programming_board.html)  
- [Assembling the Access Cable]({{site.url}}/how-tos/assemble_access_cable.html)  

If you encounter issues or need further clarification, feel free to reach out to the development team.  

[Next]({{site.url}}/how-tos/flash_microcontroller.html)  {: .btn}