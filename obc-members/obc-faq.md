---
title: OBC FAQ
parent: For OBC Team Members
layout: default
lang: en
---

# OBC FAQ
{: .no_toc }

time to complete: 7 mins
{: .label}


<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>





{: .label}
obc

78
I have heard that the integrated development environment for handling ground station programs is Visual Studio. Are you using the free version, Visual Studio Community, or the paid version, Visual Studio Professional?
It seems that development can be done without any issues using Visual Studio Community.
Ground Station

79
When checking commands, I heard that you are testing by placing the antenna inside an aluminum box. Could you share which box you purchased, or provide a photo if available?

Integration Test


**76**  
The BIRDS platform states that "ResetPIC and COMPIC communicate via UART." In fact, the circuit diagram for BIRDS5 also shows a UART connection between the two PICs.  
However, the UART for COMPIC is not defined in ResetPIC, and the code does not include any communication between ResetPIC and COMPIC via UART. Could you please explain this difference?  
Note that while UART is defined for COMPIC, it is not actually used.  

Regarding the UART between COM PIC and Reset PIC:  
First, the UART communication between COM PIC and Reset PIC is just included as a feature. It is not used in the current design. Therefore, while it is marked as UART in the circuit diagram, it is not included in the program.  

Regarding the definition of RB6 and RB7 as UART lines in Reset PIC:  
The purpose of defining RB6 and RB7 as UART lines is likely to enable direct debugging and program verification during the construction of the Reset PIC program. When performing debugging through the access ports on the FAB, it is necessary to go through the Main PIC. However, in case of debugging failure, it is unclear whether the issue is with the Main PIC or with the Reset PIC not functioning as expected. Therefore, it is believed that the goal was to allow data to be sent directly from the Reset PIC to the PC.  
OBC

**77**  
Regarding the battery heater section:  
Is my understanding correct that RD0 = 1 turns the battery heater ON and RD0 = 0 turns it OFF?  
Does the voltage output from the temperature sensor inside the battery box decrease as the temperature increases?  
- OBC

**87**  
As seen in the attached schematic, the DEPSW4 signal is interrupted at J15 within the FAB, and it seems that the signal does not reach Q9 and Q10.  
Is this intentional, or did Kyushu Institute of Technology later solder connections to ensure continuity?  
This is part of the specification.  
A jumper pin has been installed.  
Reference:  
87_BIRDS BUS Board_Jumper Pin.png  
OBC ✔  


How were software updates and patches handled for BIRDS satellites after launch?
Software updates were not possible after launch due to hardware constraints. Therefore, robust testing of the satellite software was performed prior to launch to ensure reliability and minimize potential issues in orbit.


