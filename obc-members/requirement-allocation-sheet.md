---
title: How to make a requirement allocation sheet
# nav_order: 
# parent: Hardware
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



# How to Make a Requirement Sheet for On-Board Computer (OBC) (Templates Included)

## Overview

This guide explains how to create a comprehensive requirements sheet for the On-Board Computer (OBC) team in an educational CubeSat project.

Having a well-structured requirements sheet ensures clarity of the OBC's functions, aligns team goals, and prevents miscommunication during the development process.

## Before you start

Before you begin creating a requirements sheet, ensure:

- You have reviewed the CubeSat mission objectives and payload requirements.
- The team has agreed on the overall system architecture and subsystems interface.
- You understand the relevant industry standards (e.g., ECSS or NASA standards) for CubeSat design.

## Creating a Requirements Sheet

The purpose of this task is to provide a clear, traceable, and actionable document for the OBC team that defines what the system must achieve and the constraints it must operate within.

Follow these steps to create the requirements sheet:

1. **Define the mission objectives.**  
   Write down the high-level goals of the CubeSat mission, as these will directly influence the OBC's requirements.

   Example:  
   *"The mission will collect and transmit 10MB of data per day to the ground station using a UHF transceiver."*

   **Result**: The OBC team knows the data processing and transmission capabilities needed.

2. **Identify key functional requirements.**  
   Write clear, concise statements describing what the OBC must do. Use measurable and verifiable terms.

   **Examples**:  
   - The OBC must process and store payload data at a rate of 1MB/s.  
   - The OBC must communicate with the EPS (Electrical Power System) every 5 seconds to monitor power levels.

3. **List performance requirements.**  
   Specify quantitative parameters the OBC must meet.

   **Examples**:  
   - The OBC must operate at a nominal voltage of 3.3V ± 5%.  
   - The OBC must maintain functionality in a temperature range of -20°C to +50°C.

4. **Define interface requirements.**  
   Identify how the OBC will interact with other subsystems (e.g., ADCS, EPS, payload).

   **Examples**:  
   - The OBC must receive attitude control commands from the ADCS at a rate of 10Hz.  
   - The OBC must send battery level data to the ground station once every 10 minutes.

5. **Include constraints and limitations.**  
   Define any physical, budgetary, or operational limits that will influence the OBC design.

   **Examples**:  
   - The OBC must not exceed a power consumption of 2W during nominal operations.  
   - The OBC PCB size must fit within 90mm x 90mm.

6. **Verify and validate requirements.**  
   Add a section to track how each requirement will be tested or verified.

   **Example**:  
   - **Verification**: The OBC will undergo thermal vacuum testing to ensure it meets temperature tolerance requirements.

### Sub-tasks

If the requirements process is complex, you can divide the task into smaller parts, such as:

- Gathering input from other subsystems.
- Validating requirements with the entire CubeSat team.
- Iterating on the requirements document based on reviews.

## See also

- [CubeSat Design Specification (CDS)](https://www.cubesat.org/specifications)  
- [NASA Systems Engineering Handbook](https://www.nasa.gov/seh)  
- [ECSS Standards for Space Systems](https://ecss.nl/)

[Previous]({{site.url}}/get-started/reference.html){: .btn .btn-purple }
[Next]({{site.url}}/get-started/download-files.html){: .btn}


## See also

- [CubeSat Design Specification (CDS)](https://www.cubesat.org/specifications)  
- [NASA Systems Engineering Handbook](https://www.nasa.gov/seh)  
- [ECSS Standards for Space Systems](https://ecss.nl/)


[Previous]({{site.url}}/get-started/reference.html){: .btn .btn-purple }
[Next]({{site.url}}/get-started/download-files.html){: .btn}