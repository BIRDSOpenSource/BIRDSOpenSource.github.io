---
title: For OBC Team Members
has_children: true
nav_order: 5
layout: default
permalink: "/obc/"
lang: en
nav_fold: false
# nav_exclude: true
---

# Getting Started for OBC Team Members

Welcome to the Onboard Computer (OBC) team! This page will guide you through the first steps to begin working with the BIRDS OBC subsystem using the available open-source resources.

> 🔧 **Note:** Some elements like board files are currently proprietary. However, [we're building an open version]({{site.url}}//project-list.html#3-kicad-design-of-an-open-source-cubesat-onboard-computer-obc), and your contributions are welcome.

---

## 📋 Define All Requirements

Before jumping into hardware or firmware development, it's critical to define your mission’s technical and operational requirements.

This includes:
- Mission objectives and timeline
- Data throughput, storage, and communication needs
- Power budget and thermal constraints
- Ground station compatibility
- Fault tolerance and reset logic
- Subsystem interfaces and integration parameters

🧰 **Helpful Resources:**
- [Requirements Guide (Template Included)]({{site.url}}/obc-members/define-mission-specs.html)
- [OBC Subsystem Interface Document Template (coming soon)]({{site.url}}/templates/icd-template)
- [Mission Planning Checklist (coming soon)]({{site.url}}/resources/templates/mission-checklist)
- [Requirements Allocation Sheet Template]({{site.url}}/resources/templates/obc-ras.html)

> 📌 Defining clear and traceable requirements upfront will guide decisions across hardware selection, firmware structure, and testing phases.


---

## Setting Up Hardware and Software

## 1. Clone the Repository

First, clone the OBC hardware and firmware repositories to your local machine:

```bash
git clone https://github.com/BIRDSOpenSource/BIRDS3-OBC.git
```

Make sure you have `git` [installed](https://git-scm.com/downloads). If not, you can download the repository as a ZIP file from GitHub.

![Github ZIP download Diagram](/assets/images/github-zip.png) 
---

## 2. Open the OBC Schematics

- In the folder you have downloaded or cloned, navigate to the `OBC_Schematic.pdf` file. 
- Since the board files (`.sch`, `.brd`) are proprietary, only pdf schematics are available at this time for all editions of the BIRDS series.

![BIRDS3 OBC Folder explorer](/assets/images/birds3-obc-folder-explorer.png) 

> 📢 **Want to help?** We're building an open OBC board. Check out the [`obc-open-hardware`]({{site.url}}//project-list.html#3-kicad-design-of-an-open-source-cubesat-onboard-computer-obc) project in our Project List to contribute.

---

## 3. PCB Layout & Export (Using Antenna Board as Example)

While the OBC board files aren’t public yet, we recommend trying the antenna panel as a practice project.

Steps:

 1. Go to the [`BIRDS3 Antenna Panel`](https://github.com/BIRDSOpenSource/BIRDS3-AntennaPanel) Github page and download the `.brd` and `.sch` files.

  ![BIRDS3 github antenna panel folder](/assets/images/birds3-github-antenna-panel-folder.png)

 2. Open your PCB designer of choice e.g  [KiCad](https://www.kicad.org), [Fusion 360/ Eagle](https://www.autodesk.com/products/fusion-360/electronics-engineer), etc.

 3. Open the `.sch` and `.brd` files in the PCB designer. Follow [this tutorial]({{site.url}}/open-schematics-with-kicad.html) if using Kicad.


 4. Export Gerber files via **File → Plot**, and generate drill files via **File → Fabrication Outputs**.

> 🔍 Although we use **Fusion 360/ Eagle**, the antenna panel is fully accessible in **KiCad** for open testing.
>
> Troubleshooting? Try [working with .brd files guide](https://www.linkedin.com/pulse/guide-working-brd-files-best-practices-insights-shirley-leung-a3llc/).
>
> You can view the files online [here first](https://www.altium365.com/viewer/).

---

## 4. Open the Bill of Materials (BOM)

You can find the OBC parts list (`OBC_Partslist.xlsx`) in the BIRDS3-OBC folder you cloned earlier.

- It includes current and obsolete components.
- We’re developing a **solution mapping sheet** that suggests updated, drop-in replacements.

> 🔄 This is a living document. If you find alternatives, please submit a pull request or open an issue.

---

## 5. Explore the Firmware

Explore the structure of the PIC firmware in the `BIRDS3_MainPIC_Firmware` folder.

![birds3-github-view-main-firmware](/assets/images/birds3-github-view-main-firmware.png)

- Each subsystem has its own folder.
- Code comments and function headers guide you through main functionalities.
- The [Software Developers Manual (in development)](https://github.com/BIRDSOpenSource/BIRDSX-OBC-FAB/blob/main/BIRDS-X_SOFTWARE_DEVELOPER_MANUAL.md) will help clarify more advanced logic.

---

## 6. Build and Flash the PIC Microcontroller

You will need:

- MPLAB IPE v6.00 or later (Free to download from Microchip)
- PICkit 3.5 debugger/programmer (since PICkit 3 is obsolete)
- HEX firmware file (typically in the `dist/` folder)

### Flashing Steps:

1. Open **MPLAB IPE** and select your device (e.g., PIC18F series).
2. Choose the PICkit 3.5 as your tool.
3. Browse for your `.hex` file.
4. Click *"Connect"*, then *"Program"*.

> 🛑 Always verify power and orientation before flashing to avoid damaging your board.

---

## 7. Troubleshooting Tips

- If MPLAB fails to connect: check USB cable, driver, and power source.
- Ensure that the MCU is not in reset mode or receiving unstable power.
- Cross-check your configuration bits (sometimes mismatches cause boot issues).
- Check if a watchdog timer is unintentionally enabled.

---

## ✅ Getting Started Checklist

- [ ] Clone the OBC repositories
- [ ] Open the schematics in Fusion 360 Electronics
- [ ] Review and explore the firmware repository
- [ ] Test PCB export using antenna panel in KiCad
- [ ] Review the BOM and suggest replacements if possible
- [ ] Flash the MCU using MPLAB IPE + PICkit 3.5
- [ ] Browse the troubleshooting section and keep notes of your setup

---

> 💡 Need help or want to contribute improvements to this guide? Join the discussion on [GitHub Discussions](https://github.com/orgs/BIRDSOpenSource/discussions).




6. Documentation and Best Practices Writing OBC Design Documentation

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