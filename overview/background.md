---
title: Before you start
nav_order: 2
parent: Home
layout: default
lang: en
---

# **Before you start**

<details markdown="block">
<summary>Table of Contents</summary>
- Table of Contents
{:toc}
</details>

## **Introduction**
   This document includes the purpose, structure, and practical steps for using the testing process and procedural guides for most subsystems such as the following: 
   - On-Board Computer (OBC)
   - Electrical Power System (EPS)
   - Attitude Determination and Control System (ADCS)
   - Communications (COM)
   - Structural components of BIRDS satellites

### We are creating an environment for sharing knowledge and ideas.
{: .no_toc }

If you would want to contribute to, or work with the [BIRDS] community to assist in developing this solution, check [our Discussions channel on Github] or [get in touch with us.]

## **The phases of a satellite build**
  The development and deployment of a satellite involve a series of carefully structured phases to ensure the mission's success. From initial concept discussions to final pre-launch verifications, these phases guide teams through designing, building, and testing the satellite to meet stringent space industry standards. 
    
  Each phase acts as a checkpoint to confirm that requirements are met and potential risks are mitigated. The following are the phases of a satellite build:
  1. [Mission Definition Review (MDR)] 
  2. [Preliminary Design Review (PDR)] 
  3. [Critical Design Review (CDR)] 
  4. [Flight Readiness Review (FRR)] 


```mermaid
gantt
    title Satellite Milestones
    dateFormat  YYYY-MM-DD
    section  Mission concept 
    MDR     :milestone, crit, a2, 2014-01-23, 4d
    A task  :crit, done, a1, 2014-01-20, 9d
    section Bus + Payload dev. & testing
    PDR      :milestone, crit, a3, 2014-02-3, 4d
    another task    :active, 2014-01-20  , 31d
    section EM integration & testing
    CDR     :milestone, crit, 2014-02-20, 4d
    another task      : 2014-02-12  , 12d
    section Software dev.
    FM     :milestone, crit, 2014-03-09, 4d
    another task      :active, 2014-02-03  , 38d
    section FM integration & testing
    another task      :2014-02-26  , 15d
    section GS software revision
    another task      :after a3, 30d
    section End-to-End test
    another task      : 2014-03-01, 13d
    section Operation plan 
    another task      : 2014-03-04, 12d
    section Freq. coord. IARU
    another task      : crit, active, after a2, 53d
    section Satellite delivery
    another task      : 2014-03-16,12d
    section Launch
    another task      : 5d
    section Operation
    another task      : 10d
    section Disposal
```

The satellite phases create a structured pathway from conceptualization to launch, with each review and testing stage serving as a critical checkpoint. The **MDR** sets the scope, the **PDR** checks the initial design feasibility, the **CDR** finalizes the detailed design, and **FRR** ensures that the satellite is robust and mission-ready. This structured approach helps in mitigating risks, ensuring quality, and promoting mission success.

## **Tools used in development**
   - **Software tools**:
     - **Computer Aided Design (CAD) tools for Design**: Fusion 360
     - **Simulation Tools**: Thermal desktop, STK for mission analysis
     - **Programming Languages**: C/C++, Python 
     - **Programming Environment**: CCS Compiler, MPLAB IDE
     - **Communication Protocols**: UART, SPI
   - **Hardware tools**:
     - **Microcontrollers/Boards**: PIC MCUs, custom PCBs
     - **Power Systems**: Solar panels, battery packs
     - **Sensing Devices**: Magnetometers, gyroscopes for ADCS
   - **Version Control**: Git/ [GitHub] 

## [Getting Started]({{site.url}}/get-started){: .btn .btn-purple }

## Other resources
[Engineer Me This](https://www.youtube.com/@EngineerMeThis/videos)
[Build A Cubesat](https://www.youtube.com/@buildacubesat)
[RG Sat](https://www.youtube.com/@RGSAT)
[Kyutech SEIC](https://www.youtube.com/@kyutechseic4187)


----

[GitHub Issues.]: https://github.com/BIRDSOpenSource/Build-A-Satellite/issues
[GitHub]: https://github.com/BIRDSOpenSource
[our Discussions channel on Github]: https://github.com/orgs/BIRDSOpenSource/discussions/categories/ideas
[BIRDS]: https://birds-project.com/
[get in touch with us.]: info@kyutech-laseine.net
[Mission Definition Review (MDR)]: {{site.url}}/project-managers/milestones/pm-mdr.html
[Preliminary Design Review (PDR)]: {{site.url}}/project-managers/milestones/pm-pdr.html
[Critical Design Review (CDR)]: {{site.url}}/project-managers/milestones/pm-cdr.html
[Flight Readiness Review (FRR)]: {{site.url}}/project-managers/milestones/pm-frr.html
