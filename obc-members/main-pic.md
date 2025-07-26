---
title: Main PIC
parent: For OBC Team Members
nav_order: 4
# permalink: "/obc/overview"
# nav_exclude: true
layout: default
lang: en
---

# Main PIC Communication Guide

The Main PIC is the central controller of the BIRDS OBC subsystem. It interfaces with the Com PIC, Reset PIC, and Mission PICs via UART to coordinate all mission-critical tasks, including data transmission, power control, and subsystem management.

**Estimated time to complete:** 7 minutes  
{: .label }

---

## 📡 Communication with Com PIC

The **Com PIC** is responsible for managing the **radio transceiver** and handling all uplink/downlink operations. The Main PIC sends commands or data to it when transmission or reception is required.

### 🔌 Interface  
- **Protocol:** UART  
- **Baud Rate:** [Specify, e.g., 9600 bps]  
- **Direction:** Bidirectional

### 📦 Data Sent

| Type            | Description                                   | Size       |
|------------------|-----------------------------------------------|------------|
| Command Packet   | e.g., send CW, start transmission             | 1–3 bytes  |
| CW Data          | Continuous Wave identification string         | ≤16 bytes  |
| Payload Data     | Data to be downlinked                         | Variable (typically ≤32 bytes) |

### 🔁 Data Received

| Type            | Description                                   | Size       |
|------------------|-----------------------------------------------|------------|
| ACK/NACK         | Acknowledgment of received command            | 1 byte     |
| Received Data    | Data received from ground (e.g., commands)    | Variable   |

---

## 🔁 Communication with Reset PIC

The **Reset PIC** functions as a **watchdog controller**. It monitors activity and ensures mission boards or other PICs can be reset if they become unresponsive.

### 🔌 Interface  
- **Protocol:** UART  
- **Baud Rate:** [Specify, e.g., 9600 bps]  
- **Direction:** Unidirectional (Main → Reset PIC)

### 📦 Data Sent

| Type            | Description                             | Size       |
|------------------|-----------------------------------------|------------|
| Reset Command    | Instruction to reset a specific PIC     | 1 byte     |
| Power Control    | Signal to turn ON/OFF power lines       | 1 byte     |

> ⚠️ The Reset PIC is **not expected to reply**. Instead, it acts on the command and may reset the target system immediately.

---

## 🛰️ Communication with Mission Boards (FAB PICs)

Each mission board (e.g., payload or sensor unit) includes its own **PIC** and communicates with the Main PIC over dedicated **UART lines**.

### 🔌 Interface  
- **Protocol:** UART  
- **Direction:** Bidirectional  
- **Baud Rate:** [Specify if fixed]

### 📦 Data Sent

| Type              | Description                              | Size        |
|--------------------|------------------------------------------|-------------|
| Command Packet     | Instructions for payload operation       | 1–2 bytes   |
| Payload Input      | Data used to configure or trigger action | Variable    |

### 🔁 Data Received

| Type              | Description                              | Size        |
|--------------------|------------------------------------------|-------------|
| Telemetry Data     | Output from payload or board sensor      | Variable    |
| Status Response    | Confirmation or operational status       | 1–2 bytes   |

> 💡 Each mission board should document its **command ID format** and **telemetry payload format** separately in its own peripheral ICD.

---

## 📋 Summary Table

| Link        | Connected To | Protocol | Data Types                     | Size (approx)   |
|-------------|--------------|----------|--------------------------------|------------------|
| Main ↔ Com  | Com PIC      | UART     | Commands, CW, Payload          | 1–32 bytes       |
| Main → Reset| Reset PIC    | UART     | Reset signal, Power toggle     | 1 byte           |
| Main ↔ FABs | Mission PICs | UART     | Commands, Payload, Telemetry   | Variable         |

---

## 📎 Notes for Developers

- All UART communication uses **custom packet structures** with framing and checksums. Please refer to the [OBC Communication Protocol Spec](../protocols/uart-frame-format.md) for full details.
- When adding a new mission board, make sure to:
  - Assign a **unique command ID range**
  - Define **expected responses**
  - Test **resilience against invalid commands or corrupted frames**

---

## 🧪 Example Test Case

> Test: Send a `START_PAYLOAD_CAPTURE` command to Mission Board #2  
> Expected Response: `0xAA` ACK byte within 200ms  
> Failure Action: Log timeout, retry once, escalate to Reset PIC if unresponsive after 2 retries.

---

