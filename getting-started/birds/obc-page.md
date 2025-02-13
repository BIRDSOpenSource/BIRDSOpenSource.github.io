---
title: On Board Computer Board
parent: What is BIRDS?
nav_order: 2
grand_parent: Getting Started
layout: default
lang: en
---

# On-Board Computer (OBC) in the BIRDS Bus

This article explains the basics of the On-Board Computer (OBC) and how it is designed in the BIRDS (Birds Satellite) bus for CubeSats. The OBC is a critical component of any satellite, acting as the brain that controls and manages all subsystems. In the BIRDS bus, the OBC is implemented using a PIC microcontroller, which is chosen for its reliability, low power consumption, and suitability for space applications.

![On Board Computer PCB](/assets/images/OBC-Board.png)

The On-Board Computer (OBC) is the central processing unit of a CubeSat, responsible for executing commands, managing data, and ensuring the proper functioning of all subsystems. In the BIRDS bus, the OBC is designed to handle tasks such as telemetry collection, command execution, power management, and communication with ground stations. The PIC microcontroller, specifically selected for its robustness and efficiency, serves as the core of the OBC, enabling it to perform these tasks effectively in the harsh environment of space.

This is the OBC used in BIRDS 3 and 4. It has three microcontrollers: Main, Reset and Com, all 8 bit PICs. The Main PIC is a PIC18F67J94 and the Reset and Com PICs are PIC16F1789. They are connected as showed in the following diagram:

**Block Diagram of the OBC in the BIRDS Bus** 

![On Board Computer Interface Diagram](/assets/images/OBC-diagram.png) 
*A visual representation of the OBC's architecture, showing its connections to other subsystems such as power, communication, and payload.*

All PICs (including the one in the FAB) are connected to the Main PIC through UART. The Main PIC is in charge of mission execution (connected through UART, SPI, and general IO), voltage regulation, and coordinating with the Com PIC when sending and receiving messages. The Reset PIC acts as a dedicated watchdog, listening for answers from the other PICs and resetting them if needed. Finally, the Com PIC is in charge of managing the radio transceiver. This division might seem unnecessary to a point; however, it allows easier distribution of work for the team working on a satellite, especially since this bus is meant for didactic use.

An in-depth explanation of the functions of this board can be found in the general documentation repo, [***here***](https://github.com/BIRDSOpenSource/BIRDS-GeneralDocumentation).

For the documentation and files related to the OBC itself, please see [**this repo**](https://github.com/BIRDSOpenSource/BIRDS3-OBC) for **BIRDS3** and [**this repo**](https://github.com/BIRDSOpenSource/BIRDS4-OBC) for BIRDS4. Inside, you can find the schematic (not the PCB since it's a proprietary design from Sagami Tsushin), firmware for the three microcontrollers, and other files.

If you want to purchase the commercial version of FAB/OBC/EPS, please contact SAGAMI Electronics Industry Ltd.  
The contact address is **takei@sagami-net.co.jp**.
---

## Background

The design of the OBC in the BIRDS bus is influenced by the need for a reliable and efficient computing system that can operate within the constraints of a CubeSat. Historically, CubeSats have relied on commercial off-the-shelf (COTS) components to reduce costs and development time. However, the harsh conditions of space, including radiation and extreme temperatures, require components that are both durable and energy-efficient. The PIC microcontroller was chosen for its proven performance in space applications and its ability to meet these stringent requirements.

Recent advancements in microcontroller technology have enabled the development of more compact and power-efficient OBCs, making them ideal for small satellites like CubeSats. The BIRDS bus leverages these advancements to provide a cost-effective and reliable solution for CubeSat missions.

---

## Use Cases

The OBC in the BIRDS bus is designed to support a wide range of CubeSat missions, including Earth observation, scientific experiments, and technology demonstrations. Some specific use cases include:

- **Telemetry and Command Handling**: The OBC collects data from various sensors and subsystems, processes it, and transmits it to the ground station. It also receives commands from the ground station and executes them accordingly.
- **Power Management**: The OBC monitors the satellite's power system, ensuring that all subsystems receive adequate power and that the battery is charged efficiently.
- **Payload Control**: The OBC manages the operation of the payload, such as cameras or scientific instruments, ensuring that data is collected and stored correctly.
- **Fault Detection and Recovery**: The OBC is equipped with algorithms to detect anomalies and initiate recovery procedures to maintain the satellite's functionality.

---

## Comparison of OBC Microcontrollers

When designing an OBC for a CubeSat, selecting the right microcontroller is crucial. Below is a comparison of the PIC microcontroller used in the BIRDS bus with other commonly used microcontrollers in CubeSat applications:

| Feature                | PIC Microcontroller | ARM Cortex-M | Atmel AVR |
|------------------------|---------------------|--------------|-----------|
| Power Consumption      | Low                 | Moderate     | Low       |
| Radiation Tolerance    | High                | Moderate     | Low       |
| Processing Speed       | Moderate            | High         | Moderate  |
| Cost                   | Low                 | Moderate     | Low       |
| Development Ecosystem  | Mature              | Extensive    | Mature    |

*Table: Comparison of microcontrollers commonly used in CubeSat OBCs.*

---

## Related Resources

If you would like to dive deeper or start implementing the OBC for your CubeSat, check out the following resources:

### How-to Guides
1. **How to Program a PIC Microcontroller for Space Applications**  
   A step-by-step guide to developing firmware for the PIC microcontroller in the BIRDS bus.
2. **Integrating the OBC with the BIRDS Bus**  
   Instructions on connecting the OBC to other subsystems in the BIRDS bus.

### Linked Concepts
1. **[Power Distribution System in CubeSats]({{site.url}}/overview/birds/fab-page)**  
   Learn how the OBC interacts with the power system to manage energy consumption.
2. **[Communication Systems in CubeSats]({{site.url}}/overview/birds/com-page)**  
   Understand how the OBC handles data transmission and reception with ground stations.

### External Resources
1. **PIC Microcontroller Datasheet**  
   Official documentation for the PIC microcontroller used in the BIRDS bus.
   - [PIC18F97J94 datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/30000575C.pdf)
   - [PIC16F1789 datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/40001675C.pdf)

2. **CubeSat Design Specification (CDS)**  
   A comprehensive guide to designing CubeSats, including OBC requirements.

By understanding the role and design of the OBC in the BIRDS bus, you can effectively implement this critical subsystem in your CubeSat mission.




In short, all PICs (including the one in the FAB) are connected to the main PIC through UART. The Main PIC is in charge of the mission execution (connected through UART, SPI and general IO), voltage regulation and coordinating with the Com PIC when sending and receiving messages. The Reset PIC acts as a dedicated watchdog, listening for answers from the other PICs and resetting them if needed. Finally, the Com PIC is in charge of managing the radio transceiver. This division might seem unnecessary to a point, however it allows easier distribution of work for the team working on a satellite, specially since this bus is meant for didactic use.

An in depth explanation of the functions of this board can be found in the general documentation repo, [***here***](https://github.com/BIRDSOpenSource/BIRDS-GeneralDocumentation).

For the documentation and files related to the OBC itself, please see [**this repo**](https://github.com/BIRDSOpenSource/BIRDS3-OBC) for **BIRDS3** and [**this repo**](https://github.com/BIRDSOpenSource/BIRDS4-OBC) for BIRDS4. Inside you can find the schematic (not the PCB since it's a proprietary design from Sagami Tsushin), firmware for the three microcontrollers and other files.

If you want to purchase the commercial version of FAB/OBC/EPS, please contact SAGAMI Electronics Industry Ltd.
The contact address is takei@sagami-net.co.jp

[Previous]({{site.url}}/overview/birds/bus-page){: .btn .btn-purple }
[Next]({{site.url}}/overview/birds/com-page){: .btn}