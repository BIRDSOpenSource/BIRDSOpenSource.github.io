---
title: Software Guides
nav_order: 8
has_children: true
has_toc: false
layout: default
permalink: "/software/"
lang: en
description: "Understand the BIRDS bus software stack, architecture, and how to use it."
---

# 💻 BIRDS Software Guide

This guide walks you through the software that powers BIRDS CubeSats — from low-level microcontroller code to high-level mission logic.

You'll find architecture diagrams, programming conventions, examples, and testing tools that help you work with or build upon the flight software.

---

## 🧠 What's Inside

- Bootloader and initialization routines
- Communication protocols (e.g., AX.25)
- Housekeeping and telemetry handling
- Payload command/control logic
- Sample ground station scripts

---

## 🧰 Development Workflow

The BIRDS software follows modular principles to support mission-specific customization while keeping a clean baseline. Key topics include:

- How to set up your development environment
- Coding standards and directory structure
- Simulating subsystems
- Flashing firmware and debugging

> 📦 Example: See our [Hello World example](../software/examples/hello-world.md) for a minimal startup app.

## What tools do we use in development?
   - **Computer Aided Design (CAD) tools for Design**: Fusion 360
   - **Simulation Tools**: Thermal desktop, STK for mission analysis
   - **Programming Languages**: C/C++, Python 
   - **Programming Environment**: CCS Compiler, MPLAB IDE
   - **Communication Protocols**: UART, SPI
   - **Version Control**: Git/ [GitHub] 

## Software Development Guides

Learn how to configure, compile, and flash software onto the system:

- [Writing the Board-Specific Software File]({{site.url}}/how-tos/write_board_specific_software.html)  
- [Compiling the Software]({{site.url}}/how-tos/compile_software.html)  
- [Flashing the Software onto the Microcontroller]({{site.url}}/how-tos/flash_microcontroller.html)  

## Troubleshooting Guides

If you encounter issues, check the troubleshooting guides for solutions:

- [Common Assembly Issues and Fixes]({{site.url}}/how-tos/assembly_troubleshooting.html)  
- [Software Compilation Errors and Debugging]({{site.url}}/how-tos/compilation_troubleshooting.html)  
- [Flashing and Microcontroller Connection Issues]({{site.url}}/how-tos/flashing_troubleshooting.html)  

## Additional Resources

For troubleshooting, reference documentation, and best practices, refer to:

- [CCS C Compiler Documentation](https://www.ccsinfo.com/downloads.php)  
- [MPLAB IPE User Guide](https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-ecosystem)  

If you encounter issues or need further clarification, feel free to reach out to the development team.  

[Next]({{site.url}}/how-tos/flash_microcontroller.html)  {: .btn}