---
title: Systems Engineering
parent: About
nav_order: 
layout: default
lang: en
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


```mermaid
flowchart TD
    A["Mission Planning\n(Objectives, Roles, Timeline)"] --> B["System Design\n(Subsystem Specs, Interface Definitions)"]
    B --> C["Hardware Development\n(PCBs, Integration)"]
    B --> D["Software Development\n(OBC, COM, EPS Logic)"]
    C --> E["Testing\n(Unit, Functional, Integration)"]
    D --> E
    E --> F["Simulation & Verification\n(In-lab Testing, Ground Station Link)"]
    F --> G["Launch Preparation\n(Docs, Reviews, Approval)"]
    G --> H["Launch & Operations\n(Data Collection, Monitoring)"]

    style A fill:#c3e5ff,stroke:#005596,stroke-width:2px
    style B fill:#e8f5ff,stroke:#0077b6,stroke-width:1.5px
    style C fill:#f5faff,stroke:#0096c7
    style D fill:#f5faff,stroke:#00b4d8
    style E fill:#e0fbfc,stroke:#0077b6
    style F fill:#d0f0ff,stroke:#005596
    style G fill:#caf0f8,stroke:#0077b6
    style H fill:#ade8f4,stroke:#023e8a
```

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

With this foundational knowledge, you’ll be better equipped to dive into the satellite-building process. The next step is to select the path that best fits your experience level and start building!

## Other resources
- [Engineer Me This](https://www.youtube.com/@EngineerMeThis/videos)
- [Build A Cubesat](https://www.youtube.com/@buildacubesat)
- [RG Sat](https://www.youtube.com/@RGSAT)
- [Kyutech SEIC](https://www.youtube.com/@kyutechseic4187)
- [Systems Engineering Body of Knowledge (SEBoK)](https://sebokwiki.org/wiki/Guide_to_the_Systems_Engineering_Body_of_Knowledge_(SEBoK))

[GitHub Issues.]: https://github.com/BIRDSOpenSource/Build-A-Satellite/issues
[GitHub]: https://github.com/BIRDSOpenSource
[our Discussions channel on Github]: https://github.com/orgs/BIRDSOpenSource/discussions/categories/ideas
[BIRDS]: https://birds-project.com/
[get in touch with us.]: info@kyutech-laseine.net
[Mission Definition Review (MDR)]: {{site.url}}/project-managers/milestones/pm-mdr.html
[Preliminary Design Review (PDR)]: {{site.url}}/project-managers/milestones/pm-pdr.html
[Critical Design Review (CDR)]: {{site.url}}/project-managers/milestones/pm-cdr.html
[Flight Readiness Review (FRR)]: {{site.url}}/project-managers/milestones/pm-frr.html

[Previous]({{site.url}}/about/bus-page.html){: .btn .btn-purple }
[Next]({{site.url}}/overview/birds/obc-page){: .btn}