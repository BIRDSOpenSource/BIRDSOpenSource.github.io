---
title: How to make a requirement allocation sheet
nav_order: 3
# parent: How-to guides
layout: default
lang: en
---

# How to Create a Requirements Allocation Sheet

## Overview

A **Requirements Allocation Sheet** is a structured way to break down system requirements into design and verification requirements, ensuring that all aspects of a CubeSat project are properly traced and validated.  

This guide explains how to:  
1. Define **System Requirements (SRs)**.  
2. Break them down into **Design Requirements (DRs)**.  
3. Establish **Verification Requirements (VRs)**.  
4. Choose appropriate **Verification Methods (VMs)**.

## Step 1: Define System Requirements (SRs)

**System Requirements (SRs)** describe what the CubeSat system must accomplish at a high level. These requirements originate from the mission objectives and constraints.  

**Example:**

| ID  | System Requirement                |
|-----|-----------------------------------|
| SR1 | The system shall send CW data.   |
| SR2 | The system shall collect and store HK data. |
| SR3 | The system shall analyze uplink commands. |

### Guidelines for Writing System Requirements:
- Use **"shall"** to indicate mandatory requirements.  
- Keep them **clear and unambiguous**.  
- Ensure they are **testable**.  

---

## Step 2: Define Design Requirements (DRs)

**Design Requirements (DRs)** specify how the system will fulfill each **SR**. These requirements break down the functionality into technical specifications for subsystems and components.  

Each **SR** may have multiple associated **DRs**.  

**Example:** (Linked to SR1)

| ID   | Design Requirement                                      |
|------|---------------------------------------------------------|
| DR1.1 | The system shall collect CW data from each subsystem. |
| DR1.2 | The system shall save the collected CW data.          |
| DR1.3 | The system shall maintain a timestamp for the CW data. |
| DR1.4 | The system shall transmit CW data to the COM module. |

### Guidelines for Writing Design Requirements:
- Each **DR must trace back** to at least one **SR**.  
- Keep requirements **modular** (specific to one function).  
- Use **"shall"** for mandatory features.  

---

## Step 3: Define Verification Requirements (VRs)

**Verification Requirements (VRs)** ensure that each **DR** is testable. These specify what needs to be checked to confirm the design meets the requirement.  

Each **DR** may have multiple **VRs**.  

**Example:** (Linked to DR1.1)

| ID     | Verification Requirement                              |
|--------|------------------------------------------------------|
| VR1.1.1 | The OBC shall be able to receive CW data via UART.  |

### Guidelines for Writing Verification Requirements:
- Clearly **define expected results**.  
- Ensure each VR is **measurable**.  

---

## Step 4: Define Verification Methods (VMs)

**Verification Methods (VMs)** describe how each **VR** will be tested.  

Common verification methods include:  
1. **Inspection** – Checking physical features.  
2. **Analysis** – Mathematical or simulation-based validation.  
3. **Test** – Direct testing under expected conditions.  
4. **Demonstration** – Functional testing to verify performance.  

**Example:** (Linked to VR1.1.1)

| ID     | Verification Method                           |
|--------|----------------------------------------------|
| VM1.1.1 | Check the data exchange between OBC and other subsystems via UART. |

---

## Step 5: Build the Requirements Allocation Sheet

### Full Example Table:

| System Requirement ID | System Requirement | Design Requirement ID | Design Requirement | Verification Requirement ID | Verification Requirement | Verification Method |
|----------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| SR1 | The system shall send CW data. | DR1.1 | Collect CW data from each subsystem. | VR1.1.1 | OBC shall receive CW data via UART. | Check data exchange between OBC and other subsystems. |
|    |   | DR1.2 | Save the data. | VR1.2.1 | Data shall be stored in OBC memory. | Verify data saved in flash memory. |
|    |   | DR1.3 | Maintain a timestamp. | VR1.3.1 | OBC shall maintain accurate time data. | Compare OBC timekeeping with reference clock. |
|    |   | DR1.4 | Transmit CW data to COM module. | VR1.4.1 | COM module shall receive CW data. | Check received data on COM module. |

---

## Conclusion

By following this structured approach:  
- **System Requirements** define the mission needs.  
- **Design Requirements** ensure subsystems fulfill these needs.  
- **Verification Requirements** guarantee that each feature is testable.  
- **Verification Methods** describe how tests are performed.  

This approach ensures traceability from **mission objectives** to **final testing** for CubeSat development.

## See also

- [CubeSat Design Specification (CDS)](https://www.cubesat.org/specifications)  
- [NASA Systems Engineering Handbook](https://www.nasa.gov/seh)  
- [ECSS Standards for Space Systems](https://ecss.nl/)


[Previous]({{site.url}}/get-started/reference.html){: .btn .btn-purple }
[Next]({{site.url}}/get-started/download-files.html){: .btn}