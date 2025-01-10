---
title: Plan satellite lifecycle
parent: Manage your team
grand_parent: For Project Managers
layout: default
lang: en
---

# Plan satellite lifecycle
{: .no_toc }

<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>

Most student satellite projects aim to start and complete satellite design and launch within two years. To achieve this requires meticulate planning and forsight.

- Table of Contents
{:toc}


## **Make Satellite Schedule**
Breaking down the **schedule of a CubeSat project** involves organizing the work into phases, milestones, and activities to ensure timely delivery. Here's a typical schedule breakdown:

### **1. Mission Concept and Feasibility (3-6 months)**  
#### **Key Activities:**  
{: .no_toc }
- Define mission objectives (e.g., Earth observation, technology demonstration).  
- Identify stakeholders and users.  
- Conduct a feasibility study (technical, financial, and operational).  
- Preliminary budget and timeline estimation.  
- Review: Concept Review (CoR).  

### **2. System Design and Development (6-12 months)**  
#### **Key Activities:**  
{: .no_toc }
- **Preliminary Design:**  
  - Develop system architecture.  
  - Perform trade-off analyses for subsystems (ADCS, EPS, Payload, etc.).  
  - Create a mission operations plan.  
  - Conduct risk analysis and mitigation planning.  
  - Review: Preliminary Design Review (PDR).  

- **Detailed Design:**  
  - Define subsystem-level specifications.  
  - Begin component selection and procurement.  
  - Develop simulation and analysis tools.  
  - Conduct environmental and mechanical analyses.  
  - Review: Critical Design Review (CDR).  

### **3. Assembly, Integration, and Testing (AIT) (6-9 months)**  
#### **Key Activities:**  
{: .no_toc }
- Assemble subsystem prototypes for testing.  
- Develop Ground Support Equipment (GSE).  
- Integrate CubeSat hardware components.  
- Develop and validate software (flight and ground).  
- Perform environmental tests:  
  - Thermal-vacuum testing.  
  - Vibration testing.  
  - Radiation testing (if applicable).  
  - Electromagnetic compatibility (EMC) tests.  
- Functional testing of the integrated system.  
- Review: Test Readiness Review (TRR).  

### **4. Launch Integration and Operations Readiness (3-6 months)**  
#### **Key Activities:**  
{: .no_toc }
- Coordinate with the launch provider:  
  - Payload interface definition.  
  - CubeSat delivery to the integration facility.  
- Conduct final functional tests.  
- Perform pre-launch verification (battery charging, software updates).  
- Train the operations team.  
- Develop and test the ground station.  
- Review: Flight Readiness Review (FRR).  

### **5. Launch and Early Orbit Phase (LEOP) (1-3 months)**  
#### **Key Activities:**  
{: .no_toc }
- Launch vehicle integration and deployment.  
- Initial contact with the satellite.  
- Perform health checks and commissioning tests.  
- Activate primary payload and subsystems.  

### **6. Nominal Operations Phase (6-24 months)**  
#### **Key Activities:**  
{: .no_toc }
- Conduct mission operations:  
  - Execute planned maneuvers.  
  - Collect and analyze data from the payload.  
- Monitor CubeSat health (telemetry analysis).  
- Troubleshoot and resolve anomalies.  
- Publish mission results and share data (if applicable).  

### **7. End-of-Life and Decommissioning (1-3 months)**  
#### **Key Activities:**  
{: .no_toc }
- Execute deorbiting maneuvers or passive end-of-life measures.  
- Assess lessons learned for future missions.  
- Publish a mission summary report.  

Example CubeSat Schedule

Gantt Chart Breakdown:

|Phase	|Start	|Duration	|Milestone|
|:-------|:-------|:-----------|:---------|
|Mission Planning	    |Month 1	|3 months	    |Concept Review (CoR)          |
|System Design      	|Month 4	|6 months	    |Preliminary Design Review     |
|Subsystem Development	|Month 10   |9 months	    |Critical Design Review        |
|Integration & Testing	|Month 19   |6 months	    |Test Readiness Review (TRR)   |
|Launch & Commissioning	|Month 25   |3 months	    |Launch Readiness Review       |
|Operations Phase	    |Month 28	|1-2 years	    |Final Mission Report          |

### **Notes:**  
{: .no_toc }
- **Overlaps:** Some phases overlap, especially design, procurement, and testing.  
- **Customization:** The schedule depends on mission complexity, budget, and team size.  
- **Milestone Reviews:** Regular reviews ensure progress aligns with goals.  


In project management, schedules are used to manage and track time, resources, and deliverables. Different **types of schedules** serve distinct purposes, and in a CubeSat project, you might encounter or use several of these. Here's a breakdown:

---

## **Types of Schedules**  

### **1. Master Schedule**  
{: .no_toc }
- **Purpose:**  
  Provides a high-level overview of the entire project timeline.  
- **Key Features:**  
  - Summarizes all phases (concept, design, testing, etc.).  
  - Used for stakeholder communication and major milestone tracking.  
- **Example Milestones in a CubeSat Project:**  
  - Preliminary Design Review (PDR).  
  - Critical Design Review (CDR).  
  - Launch Readiness.  

### **2. Detailed Schedule**  
{: .no_toc }
- **Purpose:**  
  Breaks down each phase into specific tasks and sub-tasks.  
- **Key Features:**  
  - Includes task dependencies and durations.  
  - Assigns resources to tasks.  
  - Often visualized using Gantt charts.  
- **Use Case:**  
  Managing subsystem developments like ADCS (Attitude Determination and Control System).  

### **3. Critical Path Schedule** 
{: .no_toc } 
- **Purpose:**  
  Focuses on the sequence of tasks that determine the project’s overall duration.  
- **Key Features:**  
  - Identifies tasks that, if delayed, will delay the entire project.  
  - Used to optimize resource allocation and reduce delays.  
- **Example in CubeSat Projects:**  
  A delay in testing solar panels might postpone integration and launch readiness.  

### **4. Milestone Schedule**  
{: .no_toc }
- **Purpose:**  
  Tracks key deliverables and deadlines without detailed task lists.  
- **Key Features:**  
  - Focuses only on milestones (e.g., design reviews, component deliveries).  
  - Easier for reporting to high-level stakeholders.  
- **Example:**  
  - Concept Approval: Month 3.  
  - Payload Delivery: Month 12.  


### **5. Resource Schedule**  
{: .no_toc }
- **Purpose:**  
  Ensures the availability and allocation of human, financial, and material resources.  
- **Key Features:**  
  - Tracks resource usage over time.  
  - Highlights potential resource conflicts.  
- **Use Case:**  
  Managing lab access for testing or ensuring team availability during key phases.  

### **6. Baseline Schedule**  
{: .no_toc }
- **Purpose:**  
  Serves as the original project timeline for tracking deviations.  
- **Key Features:**  
  - Acts as a reference point for progress monitoring.  
  - Helps measure schedule performance (planned vs. actual).  
- **Use Case:**  
  Comparing planned satellite assembly timelines with actual progress.  

### **7. Agile or Iterative Schedule**  
{: .no_toc }
- **Purpose:**  
  Supports flexible development cycles for software-heavy projects.  
- **Key Features:**  
  - Tasks grouped into short sprints or iterations.  
  - Continuous adjustments based on progress and feedback.  
- **Use Case:**  
  Developing and testing CubeSat flight software in iterations.  

### **8. Integrated Schedule** 
{: .no_toc } 
- **Purpose:**  
  Combines schedules across different teams or subsystems.  
- **Key Features:**  
  - Aligns efforts across hardware, software, and testing teams.  
  - Manages dependencies between teams (e.g., payload delivery for integration).  
- **Example:**  
  Aligning ADCS development with power subsystem testing.  

### **9. Rolling Wave Schedule**  
{: .no_toc }
- **Purpose:**  
  Plans in detail for near-term activities while keeping long-term phases high-level.  
- **Key Features:**  
  - Focuses on immediate tasks while refining future phases as more information becomes available.  
- **Use Case:**  
  Planning detailed integration steps while keeping launch preparations flexible.  

### **10. Contingency Schedule**  
{: .no_toc }
- **Purpose:**  
  Accounts for potential delays or risks.  
- **Key Features:**  
  - Includes buffer time for critical tasks.  
  - Identifies alternative plans for high-risk activities.  
- **Use Case:**  
  Adding buffer weeks for component delivery delays.  

### **Visual Tools for Scheduling**  
{: .no_toc }
- **Gantt Charts:**  
  Good for detailed and master schedules.  
- **PERT Charts:**  
  Useful for critical path and task dependencies.  
- **Kanban Boards:**  
  Ideal for Agile schedules.  
- **Dashboards:**  
  Combine multiple schedules into one interactive view.  


[Organise Meetings]({{site.url}}/project-managers/pm-org-meetings/){: .btn .btn-purple }
[Back to guide]({{site.url}}//pm/guide#how-to){: .btn}