---
title: COM FAQ
parent: For COM Team Members
layout: default
lang: en
---

# COM FAQ
{: .no_toc }

time to complete: 7 mins
{: .label}


<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>


{: .label}
com

**73**  
There is a suggestion that it might be good to set multiple uplink detection codes.  
If it is possible to set multiple uplink detection codes, I would like to know how to control and differentiate between them. If you have any information regarding this, I would appreciate it.  
It is possible, but I believe the current setup is sufficient.  
COM  


49. Antenna Connection and PhotoMOS Information

Question: Regarding the wire connecting the antenna element to the SMA connector on the board’s back, what material was used? How was the wire connected to the element? Was the element’s surface processed (e.g., sanding)?
Response:
The wiring was done using the leads of DIP resistors.
The element surface was sanded with sandpaper. For connections, the resistor lead was routed from the board and temporarily fixed to a bolt, leaving a 2mm gap. The lead was wrapped 1.5 times clockwise around the bolt, which was then tightened.
For the PhotoMOS used in the nichrome wire heating circuit, the part number is AQZ102. Although it is currently out of stock, this DIP component was modified by bending its leads for SMD mounting before assembly.
Digikey Product Page for AQZ102

For the antenna fixture (a white POM resin part for fixing the antenna), the design will be drawn and processed. Are there any recommended processing companies? | These were likely created in the Kyushu University workshop. Since it is not particularly difficult to process, you can also commission companies that manufacture metal structures. |      |


For the antenna wire, considering placing an order with Osaka Heat Treatment Co., Ltd., should the hole drilling be requested as well, or should it be commissioned to another company? | For BIRDS-4, only materials were purchased, and hole drilling was done in the laboratory. However, this process is labor-intensive and not recommended (wires often break). Osaka Heat Treatment Co., Ltd. likely cannot process the holes. It's better to contact a company specializing in metal structure manufacturing, similar to the antenna fixture. |     |


For the nichrome wire inside the deployment mechanism, is outsourcing necessary for processing it into a coil? Or can the nichrome wire be processed in the university? | Aluminum structures are ordered from HMD. Nichrome wire coil processing does not require outsourcing as the work is relatively simple and can be done in the laboratory.|     |  


What types of antennas were used for communication in the BIRDS project, and what were their specifications?
The BIRDS satellites typically used monopole or dipole antennas for communication in the UHF and VHF frequency bands. Detailed specifications are available in the communications subsystem design document.

Adnics said the BIRDS project uses 180 mm cables, but it seems there is excess length. How was the excess cable stored?
The excess coaxial cable was stored between the antenna board and the RAB.

How was the SMA cable routed from the COMM board to the antenna board? Was the cable fixed along the way?
If there are any points to be mindful of when routing the SMA cable, please share.

The SMA cable is soldered to the Adnics COMM board (UHF TRX). Normally, the cable is routed on the top side (+Z direction) of the board to the antenna board.
The cable was taped to the antenna board to suppress vibrations as much as possible.
For BIRDS-4, UHF TRX was delivered with an SMA-P connector cable already soldered. During the final FM assembly, the SMA connector was connected with the specified torque (56 N·cm), and a small amount of Araldite (two-part epoxy adhesive) was applied between the antenna panel and the hexagonal part to prevent loosening. Ensure no adhesive enters the threaded part, as it may deteriorate performance.

The element material is slippery, and it’s difficult to mark accurately with a center punch before drilling. How did you position it?
The thin elements bend when force is applied during drilling. If you have any methods to fix thin elements or improve drilling accuracy, please share them.
What are the specifications of the drill press used?

Positioning was done using only scribing.
Wood was placed underneath the antenna material when drilling. Please refer to the attached image for details. The key point during drilling was to feel as though you are scraping the surface of the antenna material with the drill tip rather than penetrating through it.
A standard drill press was used. However, if the drill bit is worn out or rusty, it won’t work well. Regularly check the condition of the drill bit.
For other satellites, elements were prepared by having only one fixed-side hole drilled into a 22 cm bulk piece by the university workshop. The staff created fixtures with metal scrap underneath and templates with holes above to facilitate drilling.

According to JARL, simply including a message for amateurs in the downlink does not permit the use of the UHF band. Both uplink and downlink must be used to contribute to the amateur community. Using an uplink means that the frequency band for sending commands would need to be disclosed to the amateur community, raising concerns about illegal command hacking. To prevent this, uplink commands should be encrypted.
In the BIRDS satellites, uplink commands are encrypted. Care should be taken to ensure that the uplink command frequency is not disclosed outside the application and related documents.
At Kyutech, the uplink frequency is removed from internal presentation documents or displayed as something like "430.XXX [MHz]" so the detailed frequency is not visible.
Encryption is not used. Rather, encrypted commands cannot be approved for frequency applications.
As stated in UNISEC's frequency coordination manual, secret (encrypted) communication is not allowed for amateur radio, but this does not apply to command uplinks.
For Kyutech's satellites, the uplink frequency and the content of command uplinks are not disclosed (pseudo-encryption). During actual frequency coordination, pseudo-encryption of uplinks is not an issue.

**119**  
I would like to request the Excel file or guide related to the BIRDS link budget calculation if available.  

I have attached the link budget calculation file for BIRDS-5.  
Please input the frequency in row 3. Additionally, in row 31, enter the data obtained from the satellite communication device (COM board) sensitivity test.  
Reference: 119_120_121_BIRDS-5 LinkMargin.xlsx  
**COM** ✓


**120**  
The ground station has a 31 dB preamp, but the Excel file you shared did not include this item.  
As per the attached file, I added the preamp[dB] item in row 28 of the Downlink Summary comments sheet and adjusted the calculation for Signal Power at Ground Station LNA Input by adding the preamp value.  
Is this correction method acceptable?  

Since the preamp amplifies both the signal and the noise, even though the preamp has a gain of 31 dB, the link margin does not increase by 31 dB.  
The LNA (Low Noise Amplifier) in row 33 is the preamp in question. The role of the preamp is to be placed directly under the antenna to reduce cable loss (row 29), and to place a less noisy amplifier in front of the receiver to reduce the overall effective noise temperature (row 30) of the receiving system.  
If you want to account for the effect of the preamp, input the preamp's input noise temperature in row 30 and set the cable loss from the antenna to the preamp. This will reflect the improvement, which is expected to be around 3 dB.  
Reference: 119_120_121_BIRDS-5 LinkMargin.xlsx  
**COM** ✓


**121**  
The total noise figure (NF) of a preamp connected in multiple stages will be almost the same as the noise figure of the first stage if the gain of the first stage is large. Therefore, if the NF of the preamp is 0.2 dB, you should input the noise temperature corresponding to this NF.  

For a received preamp, the total NF is 0.2 dB, and the corresponding noise temperature is 1.272 K. I used the "Noise Temperature Calculation" site (link here) to calculate it with the reference temperature set to 27°C (room temperature).  
[https://www.pasternack.jp/t-calculatornoisefigure](https://www.pasternack.jp/t-calculatornoisefigure)  

An NF of 0.2 dB is very high performance, and the noise temperature at this point is about 14 K. Due to the high sensitivity, caution is needed during operation to avoid damage from uplink bleed-through.  

Note that the reference temperature on the calculation site is in Kelvin, so room temperature should be input in Kelvin. For example, 290K or 300K.  

In this case, cosmic noise is more likely to be detected. The maximum value in the galactic direction is about 200K. For more details, refer to the following link: Galactic noise.  
[https://www.jstage.jst.go.jp/article/nictkenkyuhoukoku/6/22/6_23/_pdf](https://www.jstage.jst.go.jp/article/nictkenkyuhoukoku/6/22/6_23/_pdf)  

The unit in row 30 of the Excel sheet is Kelvin, so simply write 200 as is.  
Reference: 119_120_121_BIRDS-5  
**COM**

