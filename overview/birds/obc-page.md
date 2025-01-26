---
title: On Board Computer Board
parent: What is BIRDS?
nav_order: 2
grand_parent: Home
layout: default
lang: en
---

## On Board Computer Board
![On Board Computer PCB](/assets/images/OBC-Board.png)  

The above image shows the OBC used in [BIRDS 3 and 4] projects. It has three microcontrollers which are all 8 bit PICs. They are: 
* Main PIC
* Reset PIC
* Com PIC  
The Main PIC is a PIC18F67J94 and the Reset and Com PICs are PIC16F1789. They are connected as showed in the following diagram:

![On Board Computer Interface Diagram](/assets/images/OBC-diagram.png)

In short, all PICs (including the one in the FAB) are connected to the main PIC through UART. The Main PIC is in charge of the mission execution (connected through UART, SPI and general IO), voltage regulation and coordinating with the Com PIC when sending and receiving messages. The Reset PIC acts as a dedicated watchdog, listening for answers from the other PICs and resetting them if needed. Finally, the Com PIC is in charge of managing the radio transceiver. This division might seem unnecessary to a point, however it allows easier distribution of work for the team working on a satellite, specially since this bus is meant for didactic use.

An in depth explanation of the functions of this board can be found in the general documentation repo, [***here***](https://github.com/BIRDSOpenSource/BIRDS-GeneralDocumentation).

For the documentation and files related to the OBC itself, please see [**this repo**](https://github.com/BIRDSOpenSource/BIRDS3-OBC) for **BIRDS3** and [**this repo**](https://github.com/BIRDSOpenSource/BIRDS4-OBC) for BIRDS4. Inside you can find the schematic (not the PCB since it's a proprietary design from Sagami Tsushin), firmware for the three microcontrollers and other files.

If you want to purchase the commercial version of FAB/OBC/EPS, please contact SAGAMI Electronics Industry Ltd.
The contact address is takei@sagami-net.co.jp

[Previous]({{site.url}}./){: .btn .btn-purple }
[Next]({{site.url}}/get-started/reference.html){: .btn}