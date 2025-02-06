---
title: BIRDS Bus
parent: What is BIRDS?
nav_order: 1
grand_parent: Home
layout: default
lang: en
---

# **The BIRDS Bus**

The BIRDS (Birds Satellite) Bus is a comprehensive hardware platform designed to meet the needs of CubeSat missions. It provides a standardized framework for integrating key subsystems, which enables teams to focus on mission-specific payloads and objectives. 
The BIRDS Bus consists of several interconnected boards; each responsible for specific functions such as power management, communication, and data handling. This modular approach simplifies development and ensures reliability for CubeSat missions.

---

## Components of the BIRDS Bus

<p>
<figure>
  <img alt="The BIRDS-X frame." src="/assets/images/birdsx-ext-assembly.png" width="45%">
  <figcaption>The BIRDS-X external assembly.</figcaption>
&nbsp;
</figure>
<figure>
  <img alt="birdsx board frame." src="/assets/images/birdsx-board-layout.png" width="45%">
  <figcaption>The BIRDS-X board layout.</figcaption>
  </figure>
</p>

![BIRDSbus exploded view.](/assets/images/BIRDSBus-exploded.png)
*Exploded view of the BIRDS bus.*

The BIRDS Bus includes the following key components:

* #### [On Board Computer (OBC)]({{site.url}}/overview/birds/obc-page.html)
The OBC is the brain of the satellite, handling core computing tasks such as command execution, data management, and subsystem coordination. It uses a PIC microcontroller for reliable and efficient operation.

* #### [Electrical Power System (EPS)]({{site.url}}/overview/birds/fab-page.html)
The EPS manages power routing which includes power generation, storage, and distribution. It ensures that all subsystems receive adequate power and that the battery is charged efficiently.  
On the 3U (and above) CubeSats, the EPS board does the power routing. However, on the 1U and 2U CubeSats, the Front Access Board (FAB) is in charge of the power routing.  

The [Rear Access Board (RAB)]({{site.url}}/overview/birds/rab-page.html) and the [Solar Panel board]({{site.url}}/overview/birds/solar-page.html) are also a part of the EPS in the BIRDS Bus. 

* #### Attitude Determination and Control System (ADCS)
The ADCS controls the satellite's orientation and stability, ensuring that it maintains the correct position for mission operations.

* #### [Communications (COM)]({{site.url}}/overview/birds/com-page.html)
The COM subsystem oversees data transmission to and from the satellite. It uses UHF/VHF communication for reliable telemetry and command handling. The [antenna board]({{site.url}}/overview/birds/antenna-page.html) carries the COM, APRS and GPS antennas as well as their release mechanism.

<center>  
  <p>
  <figure>
    <img alt="birdsx-communication board." src="/assets/images/birdsx-com.png" width="25%">
    <figcaption>The BIRDS-x communication board.</figcaption>
  </figure>
  </p>  
</center>

* #### **Structure**
The structure provides the physical framework for the satellite, ensuring durability and protection for all subsystems.
<p>
<figure>
  <img alt="birdsx-frame" src="/assets/images/birdsx-frame.png" width="45%">
  <figcaption>BIRDS-x frame.</figcaption>
</figure>
&nbsp;
<figure>
  <img alt="BIRDS-X board-frame." src="/assets/images/birdsx-board-frame-assembly.png" width="45%">
  <figcaption>BIRDS-x board frame.</figcaption>
</figure>
</p>

* #### **Payload**
The payload includes mission-specific instruments or sensors, enabling the satellite to perform its primary objectives.

* #### [Backplane Board (BPB)]({{site.url}}/overview/birds/bpb-page.html)
The BPB integrates all subsystems, allowing the transfer of power and data between them. It serves as the central hub for the satellite's electrical and data connections.
<center>         
  <p>
  <figure>
    <img alt="BIRDS-x Backplane Board" src="/assets/images/bpb-birdsx.png" width="15%">
    <figcaption>BIRDS-x Backplane Board.</figcaption>
  </figure>
  </p>
</center>

---

## **The Organizational Chart**

```mermaid
flowchart TD
    A[Satellite] --> B(Ground Segment)
    A[Satellite] --> C(Space Segment)
    C --> D[Payload]
    C --> E[Main Bus]
    D --> |Member 8| G[Mission-1]
    D --> |Member 7| H[Mission-2]
    E --> |Member 1| I[Structure]
    E --> |Member 2| J[COM]
    E --> |Member 3| K[ADCS]
    E --> |Member 4| L[EPS]
    E --> |Member 5| M[OBC]
    E --> |Member 6| N[BPB]
```

## Key Features of the BIRDS Bus
**Modular Design**  
The BIRDS Bus is designed with modularity in mind, allowing teams to easily integrate and replace subsystems as needed. This flexibility is particularly useful for CubeSat missions with varying requirements.

**Proven Reliability**  
The BIRDS Bus has been used in multiple missions, including BIRDS3 and BIRDS4, demonstrating its reliability and effectiveness in space.

**Open-Source Documentation**  
The BIRDS Project provides extensive documentation to support teams in implementing the bus; including schematics, firmware, and interface control documents (ICDs). The general documentation can be found here.

## 3D Models and CAD Files
The 3D models and stand for the BIRDS3 and BIRDS4 buses are available for download:

* BIRDS3 CAD Models: [Download here](https://github.com/BIRDSOpenSource/BIRDS3-CAD)

* BIRDS4 CAD Models: [Download here](https://github.com/BIRDSOpenSource/BIRDS4-CAD)

## [Ground Station Software]({{site.url}}/overview/birds/GS-software.html)
The BIRDS project provides ground station software for communicating with the satellite. Documentation and links to the software can be found here.

## Recent updates
**Radiometrix HX1 COMS Module:** A team presented their use of the Radiometrix HX1 communication module with the BIRDS platform during the March 2022 BIRDS meeting. The module's datasheet has been added to the COMS repositories.

**Battery Testing and Screening Procedures:** Detailed procedures for battery testing and screening have been added to the procedures repository. Please check these new documents for updated guidelines.

## [General documentation](https://github.com/BIRDSOpenSource/BIRDS-GeneralDocumentation)
While this website does contain information regarding the program and the BIRDSBus, the main explanations and documentation is contained in the program textbook and the Interface Control Document.


#### See also:
- [ Basic concepts and processes for first-time CubeSat developers](https://www3.nasa.gov/sites/default/files/atoms/files/nasa_csli_cubesat_101_508.pdf)
- [1U – 12U CubeSat design specifications](https://www3.nasa.gov/sites/default/files/atoms/files/cubesatdesignspecificationrev14_12022-02-09.pdf)


[Previous: The BIRDS Page]({{site.url}}/about/){: .btn .btn-purple }
[Next:OBC Page]({{site.url}}/overview/birds/obc-page){: .btn}