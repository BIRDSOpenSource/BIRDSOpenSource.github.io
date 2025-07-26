---
title: OBC Software Test File
parent: For OBC Team Members
nav_order: 
# permalink: "/obc/test-file"
nav_exclude: false
layout: default
lang: en
---

## 🛰️ Mission Command List Guide 

This guide explains how to structure and use UART commands sent to the COM PIC, which forwards them to the Main PIC. These commands are used for simulation and control during testing. While the actual command is **14 bytes**, the simulator expects **25 bytes**.

---

### 📦 Command Packet Format

Each **Mission Command** consists of the following:

| Byte Index | Field                 | Description                                         |
| ---------- | --------------------- | --------------------------------------------------- |
| 0          | `Header`              | Always `0x42`                                       |
| 1          | `Satellite ID`        | Always `0x57`                                       |
| 2          | `Reservation Time`    | Set to `0x00`                                       |
| 3          | `Command ID0`         | Set to `0xB4`                                       |
| 4          | `Command ID1`         | Varies – defines the operation (see below)          |
| 5–11       | `Mission Mode / Data` | Payload (mode settings, packet numbers, etc.)       |
| 12–13      | `CRC`                 | CRC0 (LSB), CRC1 (MSB) – Checksum of first 12 bytes |
| 14–24      | `Padding` (0x00)      | Simulator requires 25-byte total length             |

**Note:** During actual command transmission, only the **first 14 bytes** are used.

---

### 🔧 Commands and Usage

| # | Command ID1 | Description                     | Mission Data | Example Command                                 |
| - | ----------- | ------------------------------- | ------------ | ----------------------------------------------- |
| 1 | `0x00`      | **TURN OFF DP**                 | All `0x00`   | `42 57 00 B4 00 00 00 00 00 00 00 00 CRC0 CRC1` |
| 2 | `0x00`      | **ACTIVATE DP** (Default Mode)  | All `0x00`   | `42 57 00 B4 00 00 00 00 00 00 00 00 CRC0 CRC1` |
| 3 | `0x01`      | **ACTIVATE SF Mode**            | All `0x00`   | `42 57 00 B4 01 00 00 00 00 00 00 00 CRC0 CRC1` |
| 4 | `0x01`      | **Transfer 1 data packet**      | All `0x00`   | `42 57 00 B4 01 00 00 00 00 00 00 00 CRC0 CRC1` |
| 5 | `0x00`      | **Transfer all packets**        | All `0x00`   | `42 57 00 B4 00 00 00 00 00 00 00 00 CRC0 CRC1` |
| 6 | `0x00`      | **Transfer N packets (custom)** | Byte 4 = N   | `42 57 00 B4 NN 00 00 00 00 00 00 00 CRC0 CRC1` |

---

### 🧮 CRC Calculation

Use CRC-16-CCITT (or your protocol-specific CRC) on the first 12 bytes (`[0]` to `[11]`) to generate:

* **CRC0 (LSB)**
* **CRC1 (MSB)**

---

### 💻 Sending Over UART

1. Construct a 14-byte array: `[0] to [13]`
2. Pad with 11 zeroes if needed for simulation: `[14] to [24]`
3. Transmit the 25-byte buffer over UART to COM PIC
4. COM PIC routes to MAIN PIC for action

---

### 📁 Add File Download

To allow downloading of the `.c` file (e.g., command handler or reset script) from your website:

```html
<a href="/files/reset_pic_command.c" download>Download Reset PIC Command Code</a>
```

> ✅ Ensure the file `reset_pic_command.c` is stored in the correct `/files/` directory on your web server.

---

### 📘 Summary

* Actual command = 14 bytes (Header + Payload + CRC)
* Simulated command = 25 bytes (padded with zeroes)
* All commands go through COM PIC to MAIN PIC
* Command ID1 and payload define the operation
* CRC must be valid to accept command

---
