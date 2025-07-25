---
title: EPS Troubleshoot
parent: For EPS Team Members
layout: default
# permalink: "/faq"
lang: en
---

# EPS Troubleshoot

### 🛰️ EPS Troubleshooting and Design Guide for BIRDS Satellite Platform

This guide is derived from frequently asked questions and technical insights about the Electrical Power System (EPS) of the BIRDS satellite platform. It is intended for engineering students, subsystem leads, or technical partners working on nanosatellite development using BIRDS heritage.

---

## 1. 🔌 Understanding Battery Heater Control and Temperature Sensing

**Controlling the Battery Heater**

* The battery heater is controlled via the RD0 signal line.
* Logic level interpretation:

  * `RD0 = 1` → Battery Heater ON
  * `RD0 = 0` → Battery Heater OFF

**Temperature Sensor Output Behavior**

* Inside the battery box, the temperature sensor's voltage output decreases as temperature increases.
* This analog signal allows the OBC to determine temperature thresholds and activate the heater accordingly.

---

## 2. 🔍 Analyzing DEPSW4 Signal Behavior

**Circuit Observation**

* The DEPSW4 signal is visually disconnected at jumper `J15` on the FAB board.
* As a result, it does not reach transistors Q9 and Q10 unless continuity is restored.

**Clarification from Kyutech**

* This is not a mistake — it is part of the design.
* A **jumper pin** is used to bridge this disconnection manually, if needed.
* This design choice adds flexibility during integration testing.

> 📎 Refer to the schematic: `87_BIRDS BUS Board_Jumper Pin.png`

---

## 3. 🧠 Software Updates Post-Launch: Limitations

**Key Insight:**

* Software updates are **not possible** after launch due to hardware constraints.
* This places **enormous importance** on ground-based validation of software.

**Best Practices:**

* Perform exhaustive simulation and hardware-in-the-loop (HIL) testing pre-launch.
* Include redundancy in logic for EPS decision-making.
* Ensure watchdog timers and failsafes are functional.

---

## 4. 🛠️ UART Communication Between COM PIC and Reset PIC

### Circuit Design vs Implementation

* The BIRDS5 schematic shows a UART connection between Reset PIC and COM PIC.
* However, this UART is **not active** in the firmware.

**Explanation:**

* UART functionality was reserved as a feature but not implemented.
* Therefore, while the lines exist in the schematic, there is no data exchange at runtime.

### Purpose of RB6 and RB7 UART Lines

* These lines on Reset PIC were likely meant for:

  * **Direct debugging**
  * **Standalone verification** of Reset PIC firmware
* During normal debugging, access to Reset PIC is through Main PIC.
* If debugging fails, it’s unclear whether the Main or Reset PIC is at fault.
* Direct UART enables bypassing this dependency.

---

## 5. 🧪 Ground Testing Setup

**Aluminum Box Testing**

* For RF tests, an **aluminum box** is used to house the antenna and isolate signals.
* This prevents unintended radiation and interference.

**Community Request:**

* Teams often ask for specs or photos of the aluminum box setup for replication.
* Suggest documenting the testing environment in integration manuals.

---

## 6. 🖥️ Development Environment for Ground Station Software

**Visual Studio Version**

* Visual Studio is used for ground station software development.
* The **free Community version** is sufficient.
* There is no technical need to use the paid Professional version unless you require additional enterprise features.

---

## 🔚 Final Notes

* The BIRDS EPS design is compact, modular, and tested in multiple flight missions.
* Small changes in jumpers, debug ports, and unused lines are **intentional**, often driven by the need to balance flexibility and reliability in educational missions.
* Understanding these nuances ensures smoother subsystem integration and better troubleshooting during your satellite project.

