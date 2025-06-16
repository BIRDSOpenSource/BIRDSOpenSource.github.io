---
title: How to make a schedule
nav_order: 2
parent: How-to guides
layout: default
lang: en
---


# How to Make an Overall CubeSat Project Schedule (Templates Included)

## Overview

This guide explains how to create a comprehensive schedule for a CubeSat project, including critical milestones such as Mission Definition Review (MDR), Preliminary Design Review (PDR), and Critical Design Review (CDR).  

A well-structured schedule helps the team track progress, allocate resources effectively, and ensure timely delivery of the CubeSat for launch.

## Before you start

Before you begin creating the schedule, ensure:

- You have a clear understanding of the CubeSat mission objectives and overall timeline.  
- All subsystem leads have provided input on their specific timelines and resource requirements.  
- You are familiar with the milestones required by the launch provider, regulatory authorities, and stakeholders.  

## Creating the Project Schedule

The purpose of this task is to create a timeline that outlines all major tasks, milestones, and deadlines for the CubeSat project.

Follow these steps:

1. **Define key phases and milestones.**  
   Break the project into major phases and identify review milestones like MDR, PDR, and CDR.

   **Example Phases and Milestones**:
   - **Mission Concept Developed**: Define the CubeSat mission objectives and feasibility.  
   - **MDR**: Present and validate the mission concept.  
   - **PDR**: Validate preliminary designs, ensuring alignment with mission requirements.  
   - **CDR**: Finalize detailed designs for all subsystems.

If you know your expected launch date or when you want the project to be completed, you can identfy the dates of the above milestones to fit to your completion date. You should try not to spend too much time in the ideation phase, as the aim is to devlop a hands-on project, once you start building things will still change.  

Once you have your mission in mind, set out to start developing the subsystem requirements to make that mission successful. This will be in the form of a requirement allocation sheet (if you don't know how to do that, [you can find the how-to guide here.]({{site.url}}/how-tos/requirement-allocation-sheet))

If you [have funding in place]({{site.url}}/how-tos/find-funding) and have [identified your launch provider]({{site.url}}/how-tos/identify-launch-provider), your MDR ideally shouldn't be more than 2 months after identifying your mission.

   **Result**: A high-level structure for the schedule is established.

2. **List major project tasks.**  
   Add all key activities, including subsystem design, development, testing, and integration.

   **Example Tasks**:
   - Satellite configuration design.  
   - Mission payload design, development, and testing.  
   - Bus development and subsystem integration.  
   - Satellite software development.

3. **Establish task dependencies.**  
   Identify tasks that must be completed before others can begin. This ensures logical sequencing of activities.

   **Example**:
   - **Dependency**: Bus development must precede engineering model integration and testing.  
   - **Dependency**: Satellite software development must align with hardware testing schedules.

4. **Assign durations and deadlines.**  
   Estimate how long each task will take and assign deadlines based on project constraints.

   **Examples**:  
   - Mission payload design: 3 months (Jan - Mar).  
   - Engineering model testing: 2 months (Apr - May).

5. **Integrate external coordination milestones.**  
   Add tasks that involve external entities like frequency coordination and launch providers.

   **Example Milestones**:
   - Frequency Coordination (IARU): Obtain spectrum allocation approval.  
   - Frequency Coordination (ITU): Register frequencies for international compliance.  
   - Satellite delivery to JAXA: Deliver the final model to the launch provider.

6. **Build in review milestones and buffer periods.**  
   Include regular design reviews (MDR, PDR, CDR) and buffer time for unforeseen delays.

   **Examples**:  
   - MDR: 1 month before PDR.  
   - Buffer: 2 weeks after subsystem integration to address testing delays.

7. **Finalize the schedule.**  
   Compile the timeline into a visual Gantt chart or project management tool for clarity.

   **Result**: A clear, actionable schedule that the entire team can follow.

### Example Project Schedule

Here is an example timeline for a CubeSat project:

| Phase                             | Duration      | Milestone                 |
|-----------------------------------|---------------|---------------------------|
| Mission concept developed         | Month 1       | MDR                       |
| Satellite configuration design    | Month 2-3     | PDR                       |
| Mission payload design & testing  | Month 3-6     |                           |
| Bus development                   | Month 4-6     |                           |
| Engineering model integration     | Month 7-8     |                           |
| Satellite software development    | Month 5-8     |                           |
| Flight model integration & testing| Month 9-10    | CDR                       |
| Ground system software revision   | Month 10-11   |                           |
| End-to-End testing                | Month 11      |                           |
| Operational plan & rehearsal      | Month 12      |                           |
| Frequency coordination (IARU)     | Month 6       |                           |
| Frequency coordination (ITU)      | Month 8       |                           |
| Satellite delivery to JAXA        | Month 12      |                           |
| Launch to ISS                     | Month 13      |                           |
| Release & operation               | Month 14      |                           |
| Disposal                          | Month 20+     |                           |

![schedule-complete](/assets/images/schedule-complete.png)

### Sub-tasks

If the schedule is complex, you can divide it into sub-tasks, such as:

- Assigning responsibilities to subsystem teams.  
- Creating detailed schedules for each subsystem.  Templates for subsystem schedules can be found here.
- Periodic reviews and updates to the schedule based on progress.
- each subsystem can have their own sheet that details the subsystems tasks under each section, 
- you can also have sheets dedicated to the milestone tasks to have a clearer view of what is needed for each milestone.

![schedule-sheets](/assets/images/schedule-sheets.png)


## See also

- [NASA Project Lifecycle Guidelines](https://www.nasa.gov/reference/3-0-nasa-program-project-life-cycle/)  
- [CubeSat Design Specification (CDS)](https://www.cubesat.org/specifications)  
- [Project Management Templates](https://www.pmi.org/)  


[Previous]({{site.url}}/get-started){: .btn .btn-purple }
[Next]({{site.url}}/get-started/reference.html){: .btn}