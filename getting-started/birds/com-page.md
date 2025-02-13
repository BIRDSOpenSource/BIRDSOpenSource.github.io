---
title: Communications Board
parent: What is BIRDS?
nav_order: 3
grand_parent: Getting Started
layout: default
lang: en
---

## Communications Board

# Communication Board in the BIRDS Bus

This article explains the basics of the Communication Board (COM) and its role in the BIRDS (Birds Satellite) bus for CubeSats. The Communication Board is a critical subsystem responsible for enabling communication between the satellite and ground stations. It ensures the transmission of telemetry data and the reception of commands, making it essential for the successful operation of any CubeSat mission.

The Communication Board in the BIRDS bus is designed to handle UHF/VHF communication, which is commonly used in CubeSat missions due to its reliability and simplicity. The board integrates a radio transceiver module and is managed by the On-Board Computer (OBC) through the Com PIC microcontroller. This setup ensures efficient and reliable communication, even in the challenging environment of space.

If you want to purchase the commercial version of the COM board from Addnics, please contact its agent as follows:

**Mr. Masashi Tsutsui**  
HTL Co. Japan Ltd.  
2-16-6 Akebono-cho, Tachikawa-city, Tokyo 190-0012 Japan  
TEL: +81-42-523-2871  
FAX: +81-42-523-2803  
Website: [http://www.htlco.co.jp](http://www.htlco.co.jp)

---

## Background

The Communication Board in the BIRDS bus is designed to meet the specific needs of CubeSat missions, balancing performance, power consumption, and cost. Historically, CubeSats have relied on UHF/VHF communication systems due to their simplicity and ease of implementation. The BIRDS bus leverages this technology while incorporating robust design principles to ensure reliable communication in space.

The board is managed by the Com PIC microcontroller (PIC16F1789), which is part of the OBC subsystem. This microcontroller handles tasks such as modulating and demodulating signals, managing data packets, and coordinating with the Main PIC for mission execution. The integration of the Communication Board with the OBC ensures seamless operation and efficient use of resources.

---

## Use Cases

The Communication Board in the BIRDS bus is designed to support a variety of CubeSat missions, including Earth observation, scientific experiments, and technology demonstrations. Some specific use cases include:

- **Telemetry Transmission**: The board transmits telemetry data, such as sensor readings and subsystem status, to the ground station.
- **Command Reception**: The board receives commands from the ground station, which are then executed by the OBC.
- **Data Relay**: In some missions, the board may act as a relay for data from other satellites or payloads.
- **Redundancy and Fault Tolerance**: The board is designed to handle communication failures and recover gracefully, ensuring mission continuity.

---

## Integration with the BIRDS Platform

The Communication Board is tightly integrated with the BIRDS platform, ensuring compatibility and ease of use. The board connects to the OBC through UART, allowing the Com PIC to manage communication tasks efficiently. The following diagram illustrates the integration of the Communication Board with the BIRDS bus:

(Optional) Image/Figure: **Block Diagram of the Communication Board in the BIRDS Bus**  
*A visual representation of the Communication Board's architecture, showing its connections to the OBC and other subsystems.*

---

## Documentation and Resources

The Interface Control Documents (ICDs) for the Communication Board in the BIRDS3 and BIRDS4 satellites are available in English and Japanese. These documents provide detailed information about the board's design, operation, and integration with the BIRDS bus.

- **BIRDS3 ICDs**: [Link to BIRDS3 ICDs](#)  
- **BIRDS4 ICDs**: [Link to BIRDS4 ICDs](#)

While the Communication Boards for BIRDS3 and BIRDS4 are functionally the same, their documentation is kept separate to maintain order and clarity.

---

## Alternative Communication Modules

In March 2022, during a BIRDS meeting, a team presented their use of the **Radiometrix HX1** communication module with the BIRDS platform. This module offers an alternative to the default communication system and has been successfully integrated into the BIRDS bus. The datasheet for the Radiometrix HX1 module has been added to the repositories for reference.

---

## Related Resources

If you would like to dive deeper or start implementing the Communication Board for your CubeSat, check out the following resources:

### How-to Guides
1. **Integrating the Communication Board with the BIRDS Bus**  
   A step-by-step guide to connecting and configuring the Communication Board.
2. **Testing and Debugging the Communication System**  
   Instructions for verifying the functionality of the Communication Board.

### Linked Concepts
1. **On-Board Computer (OBC) in CubeSats**  
   Learn how the Communication Board interacts with the OBC for mission execution.
2. **Power Distribution System in CubeSats**  
   Understand how the Communication Board is powered and managed.

### External Resources
1. **Radiometrix HX1 Datasheet**  
   Official documentation for the Radiometrix HX1 communication module.
2. **CubeSat Design Specification (CDS)**  
   A comprehensive guide to designing CubeSats, including communication system requirements.

By understanding the role and design of the Communication Board in the BIRDS bus, you can effectively implement this critical subsystem in your CubeSat mission.


[Previous]({{site.url}}/overview/birds/obc-page){: .btn .btn-purple }
[Next]({{site.url}}/overview/birds/bpb-page){: .btn}