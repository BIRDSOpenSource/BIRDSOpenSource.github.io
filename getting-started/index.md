---
title: Getting Started
nav_order: 3
has_children: true
layout: default
permalink: "/get-started"
lang: en
---


# Getting Started
To ensure a smooth journey in building your CubeSat, there are a few things you'll want to understand beforehand. This section outlines key knowledge areas you'll need, from using the platform and GitHub to understanding systems engineering principles.

---

## Platform Basics: GitHub and Git
To work with BIRDS, you'll need a GitHub account. This is where you'll manage your codebase and contribute to open-source satellite projects. Here’s a quick guide to get you started:

### 1. **GitHub Account**
   - Create a [GitHub account](https://github.com/) to access repositories, contribute to projects, and manage your code.
   - Familiarize yourself with the platform’s layout, including repositories, commits, pull requests, and issues.

### 2. **Using Git**
   - **Git** is a version control system used to manage and track changes in your codebase.
   - Learn how to use basic Git commands like:
     - `git clone` – To download repositories.
     - `git pull` – To update your local copy with the latest changes.
     - `git commit` – To save your changes locally.
     - `git push` – To upload your changes to GitHub.

### 3. **Cloning a Repository**
   - To start working on a project, you’ll first need to **clone** the relevant repository from GitHub to your local machine:
     ```bash
     git clone https://github.com/username/repository.git
     ```
   - Once cloned, you can make changes to the files locally and push them back to the repository when you’re ready.

---

## Systems Engineering Approach
Building a satellite involves complex systems that need careful planning and integration. Here are some key concepts of systems engineering that will guide your CubeSat development:

### 1. **Understanding Systems Engineering**
   - Systems engineering is the interdisciplinary approach to designing and managing complex systems.
   - It focuses on understanding the entire system, from design and development to testing and operation, ensuring that all parts work together to meet the mission goals.

### 2. **Defining Requirements**
   - Start by defining your satellite’s mission and operational goals.
   - Understand the system's constraints, such as size, weight, power, and budget, and define technical requirements to meet them.

### 3. **Subsystems Integration**
   - Satellites consist of multiple subsystems such as power, communication, and attitude control. Systems engineering ensures that all subsystems integrate seamlessly.
   - Learn how these subsystems interact and contribute to the overall mission’s success.

### 4. **Risk Management**
   - Identify potential risks early in the development process and implement strategies to mitigate them.
   - Regular testing, reviews, and simulations help identify weak points and prevent system failures.

---

##  What are the phases of a satellite?
  The development and deployment of a satellite involve a series of carefully structured phases to ensure the mission's success. From initial concept discussions to final pre-launch verifications, these phases guide teams through designing, building, and testing the satellite to meet stringent space industry standards. 
    
  Each phase acts as a checkpoint to confirm that requirements are met and potential risks are mitigated. Understanding the phases - including the
  - [Mission Definition Review (MDR)], 
  - [Preliminary Design Review (PDR)], 
  - [Critical Design Review (CDR)], and 
  - [Flight Readiness Review (FRR)] 

```mermaid
gantt
    title Satellite Milestones
    dateFormat  YYYY-MM-DD
    section  Mission concept 
    MDR     :milestone, crit, a2, 2014-01-23, 4d
    A task  :crit, done, a1, 2014-01-20, 9d
    section Bus + Payload dev. & testing
    PDR      :milestone, crit, a3, 2014-02-3, 4d
    another task    :active, 2014-01-20  , 31d
    section EM integration & testing
    CDR     :milestone, crit, 2014-02-20, 4d
    another task      : 2014-02-12  , 12d
    section Software dev.
    FM     :milestone, crit, 2014-03-09, 4d
    another task      :active, 2014-02-03  , 38d
    section FM integration & testing
    another task      :2014-02-26  , 15d
    section GS software revision
    another task      :after a3, 30d
    section End-to-End test
    another task      : 2014-03-01, 13d
    section Operation plan 
    another task      : 2014-03-04, 12d
    section Freq. coord. IARU
    another task      : crit, active, after a2, 53d
    section Satellite delivery
    another task      : 2014-03-16,12d
    section Launch
    another task      : 5d
    section Operation
    another task      : 10d
    section Disposal
```

These phases create a structured pathway from conceptualization to launch, with each review and testing stage serving as a critical checkpoint. The **MDR** sets the scope, the **PDR** checks the initial design feasibility, the **CDR** finalizes the detailed design, and **FRR** ensures that the satellite is robust and mission-ready. This structured approach helps in mitigating risks, ensuring quality, and promoting mission success.

## **3. What tools do we use in development?**
   - **Software**:
     - **Computer Aided Design (CAD) tools for Design**: Fusion 360
     - **Simulation Tools**: Thermal desktop, STK for mission analysis
     - **Programming Languages**: C/C++, Python 
     - **Programming Environment**: CCS Compiler, MPLAB IDE
     - **Communication Protocols**: UART, SPI
   - **Hardware**:
     - **Microcontrollers/Boards**: PIC MCUs, custom PCBs
     - **Power Systems**: Solar panels, battery packs
     - **Sensing Devices**: Magnetometers, gyroscopes for ADCS
   - **Version Control**: Git/ [GitHub] 


With this foundational knowledge, you’ll be better equipped to dive into the satellite-building process. The next step is to select the path that best fits your experience level and start building!


[Get Started]({{site.url}}/get-started){: .btn .btn-purple }

## Other resources
- [Engineer Me This](https://www.youtube.com/@EngineerMeThis/videos)
- [Build A Cubesat](https://www.youtube.com/@buildacubesat)
- [RG Sat](https://www.youtube.com/@RGSAT)
- [Kyutech SEIC](https://www.youtube.com/@kyutechseic4187)

[GitHub Issues.]: https://github.com/BIRDSOpenSource/Build-A-Satellite/issues
[GitHub]: https://github.com/BIRDSOpenSource
[our Discussions channel on Github]: https://github.com/orgs/BIRDSOpenSource/discussions/categories/ideas
[BIRDS]: https://birds-project.com/
[get in touch with us.]: info@kyutech-laseine.net
[Mission Definition Review (MDR)]: {{site.url}}/project-managers/milestones/pm-mdr.html
[Preliminary Design Review (PDR)]: {{site.url}}/project-managers/milestones/pm-pdr.html
[Critical Design Review (CDR)]: {{site.url}}/project-managers/milestones/pm-cdr.html
[Flight Readiness Review (FRR)]: {{site.url}}/project-managers/milestones/pm-frr.html


[Previous]({{site.url}}/get-started){: .btn .btn-purple }
[Next]({{site.url}}/get-started/reference.html){: .btn}
