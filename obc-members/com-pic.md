---
title: Com PIC
parent: For OBC Team Members
nav_order: 5
# permalink: "/obc/overview"
# nav_exclude: true
layout: default
lang: en
---

# Com PIC Communication Guide

The **Communication PIC (Com PIC)** is responsible for managing all communication between the satellite and the ground station. It acts as the interface between the Main PIC and the onboard transceiver. This division ensures a clear separation between command processing and radio interface management, which is particularly useful in didactic missions like BIRDS.

At system startup, the Com PIC is powered on by the **Reset PIC**, which controls and monitors power distribution for all PICs.

**Estimated time to complete:** 7 minutes  
{: .label }

---

## Communication with the Main PIC

- **Interface used:** UART  
- **Direction:** Bidirectional  
- **Data exchanged:**  
  - Commands for transmission  
  - Continuous Wave (CW) signals  
  - Payload data  
- **Data size:**  
  - Commands: Typically 5 bytes (can vary by mission)  
  - Payload: Variable, up to 255 bytes depending on buffer configuration  
  - CW: Fixed-size Morse code patterns, ~8 bytes including header

**Notes:**
- The Com PIC listens for packetized commands from the Main PIC.
- A simple command protocol is used where the first byte is a header, followed by command type, payload length, and payload.

---

## Communication with the Transceiver

- **Transceiver model:** ADDNICS  
- **Number of pins used:** 11  
- **Interface used:** UART  
- **Direction:** Bidirectional  
- **Data exchanged:**  
  - Commands for transmission/reception control  
  - Downlink payload data  
  - Telemetry reports  
- **Data size:**  
  - Transmit command: Typically 4–6 bytes  
  - Payload: Up to 255 bytes  
  - Telemetry status: ~10 bytes  

**Pinout example:**

| Pin | Signal | Direction | Description            |
|-----|--------|-----------|------------------------|
| 1   | TX     | Output    | Data to transceiver    |
| 2   | RX     | Input     | Data from transceiver  |
| 3   | PTT    | Output    | Push-to-talk control   |
| 4-11| GND, VCC, etc. | — | Power and grounding   |

**Notes:**
- The UART baud rate is typically set to 9600 or 19200 bps.
- Error-checking such as checksums or CRC may be applied in software before sending data.

---

## Example Use Case

1. Main PIC compiles a packet of telemetry data.
2. It sends a "send packet" command to Com PIC via UART.
3. Com PIC parses the command and forwards the data to the transceiver.
4. Com PIC waits for an acknowledgment or handles timeout based on configured retry policy.

---

## Next Steps

- Learn more about [Reset PIC →](/obc/reset-pic)
- See how the Main PIC coordinates transmission [here →](/obc/main-pic)
- Explore the [Ground Segment Command Flow](/comm/command-flow)

