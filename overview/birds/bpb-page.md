---
title: Backplane Board
parent: What is BIRDS?
nav_order: 4
grand_parent: Home
layout: default
lang: en
---

# Backplane Board (BPB) in the BIRDS Bus

This article explains the basics of the Backplane Board (BPB) and its role in the BIRDS (Birds Satellite) bus for CubeSats. The BPB is a critical component that integrates all subsystems, enabling the transfer of power and data between them. It serves as the central hub for the satellite's electrical and data connections, ensuring seamless operation of the entire system.

The Backplane Board (BPB) is a passive board designed to connect all other boards in the BIRDS bus. It has no active components, as its primary function is to provide a reliable interface for power and data transfer. By centralizing connections, the BPB simplifies the design and assembly of the satellite, making it easier for teams to integrate and troubleshoot subsystems.

---

## Background

The design of the BPB is driven by the need for a robust and efficient interconnection system in CubeSats. Historically, CubeSats have faced challenges in managing power and data distribution due to their compact size and limited resources. The BPB addresses these challenges by providing a standardized interface that ensures reliable communication and power delivery between subsystems.

The BPB is a key component of the BIRDS bus, which is designed to simplify CubeSat development for educational and research purposes. By using the BPB, teams can focus on mission-specific objectives without worrying about the complexities of subsystem integration.

![Backplane Board Photo without CPLD](/assets/images/BPB-Board.png)
---

## Use Cases

The BPB is essential for the operation of the BIRDS bus, supporting a wide range of CubeSat missions. Some specific use cases include:

- **Power Distribution**: The BPB ensures that all subsystems receive adequate power from the Electrical Power System (EPS).
- **Data Transfer**: The BPB facilitates communication between the On-Board Computer (OBC) and other subsystems, such as the Communications (COM) board and the Attitude Determination and Control System (ADCS).
- **Integration**: The BPB simplifies the assembly of the satellite by providing a centralized interface for all boards.
- **Fault Isolation**: By centralizing connections, the BPB makes it easier to identify and isolate faults in the system.

---

## Design and Functionality

The BPB is a passive board with no active components. It consists of connectors and traces that link the following subsystems:

- **On-Board Computer (OBC)**: Handles command execution and data management.
- **Electrical Power System (EPS)**: Manages power generation, storage, and distribution.
- **Communications (COM)**: Oversees data transmission to and from the satellite.
- **Attitude Determination and Control System (ADCS)**: Controls satellite orientation and stability.
- **Payload**: Manages mission-specific instruments or sensors.

The BPB is designed to be compact and lightweight, making it ideal for CubeSat applications. Its layout ensures minimal signal loss and efficient power delivery, even in the harsh environment of space.

---

## Integration with the BIRDS Bus

The BPB is tightly integrated with the BIRDS bus, serving as the backbone of the satellite's electrical and data systems. The following diagram illustrates the BPB's connections to other subsystems:

**Schematic of the BPB in the BIRDS Bus with CPLD**  
![Backplane Board Photo witH CPLD](/assets/images/SBPB-PCB.png)
*A visual representation of the BPB's architecture, showing its connections to the OBC, EPS, COM, ADCS, and payload.*

---

## Documentation and Resources

The BPB is part of the BIRDS bus, and its documentation is included in the general BIRDS documentation repository. For detailed schematics and integration guidelines, please refer to the following resources:

- [BIRDS General Documentation](https://github.com/BIRDSOpenSource/BIRDS-GeneralDocumentation)  
- [BIRDS3 BPB Documentation](https://github.com/BIRDSOpenSource/BIRDS3-BPB)  
- [BIRDS4 BPB Documentation](https://github.com/BIRDSOpenSource/BIRDS4-BPB)

---

## Related Resources

If you would like to dive deeper or start implementing the BPB for your CubeSat, check out the following resources:

### How-to Guides
1. **Integrating the BPB with the BIRDS Bus**  
   A step-by-step guide to connecting and configuring the BPB.
2. **Testing and Debugging the BPB**  
   Instructions for verifying the functionality of the BPB.

### Linked Concepts
1. **On-Board Computer (OBC) in CubeSats**  
   Learn how the BPB interacts with the OBC for mission execution.
2. **Electrical Power System (EPS) in CubeSats**  
   Understand how the BPB facilitates power distribution.

### External Resources
1. **CubeSat Design Specification (CDS)**  
   A comprehensive guide to designing CubeSats, including power and data distribution requirements.
2. **Basic Concepts and Processes for First-Time CubeSat Developers**  
   A NASA resource for understanding the fundamentals of CubeSat development.

By understanding the role and design of the Backplane Board in the BIRDS bus, you can effectively implement this critical component in your CubeSat mission.


[Previous]({{site.url}}/overview/birds/com-page){: .btn .btn-purple }
[Next]({{site.url}}/overview/birds/fab-page){: .btn}