---
title: FAQ
layout: default
permalink: "/faq"
lang: en
---

# Frequently Asked Questions

Answers to questions we often get about the BIRDS bus and its integration into custom projects

---

### 1. Rationale for Vacuum Leak Test Before Vibration Test

{:.label} 
testing

* **Reasoning:**

  * The primary reason for performing the vacuum leak test before the vibration test was scheduling adjustments.
  * Performing the tests in reverse order (vibration test first, then vacuum test) is technically feasible and does not pose any issues.

* **Procedure Alignment:**

  * It is recommended to follow the established procedures from previous BIRDS projects unless there is a strong justification for deviation. Consistency ensures comparability and adherence to best practices.

---

### 2. Can we borrow a weight measurement device at Kyushu Institute of Technology (Kyutech)? (The mass should be measured to three decimal places.)

{:.label} 
structure

Yes, it can be lent out.

---

### 3. It seems that there is only one uplink detection code (ASCII code) in BIRDS. Is it possible to set two on the COMM board? To ensure uplink security, can multiple ASCII codes be configured?

{:.label} 
communications

Yes

---

### 4. I am considering mounting a patch antenna and a magnetic torquer on a newly developed satellite. Could you provide information about the magnetic torquer used in Kyushu Institute of Technology’s BIRDS satellites (such as the manufacturer and product name)?

{:.label} 
adcs

The details of the magnetic torquer coil are mentioned in the master's thesis of Hisatsugi, who designed the ADCS for BIRDS-4. The design is described in Chapter 11.6 (page 90) and summarized in Table 11.19 (page 95).
BIRDS-4 was launched with these magnetic torquers, but they were not activated in orbit due to other mission priorities.

---

### 5. How were the orbital parameters of the BIRDS-III satellites determined after deployment?

{:.label} 
mission

The orbital parameters were initially provided by the launch provider. These were then refined using ground station data and TLE data from organizations like NORAD.

---

### 6. Is it possible to know the current location of the BIRDS-III satellite using TLE data?

{:.label} 
mission

Yes, you can track the satellite using TLE (Two-Line Element) data. Tools like GPredict and Orbitron allow you to input TLE data and calculate satellite position.

---

### 7. How were the deorbiting strategies implemented for BIRDS satellites?

{:.label} 
mission

The satellites relied on natural orbital decay due to atmospheric drag. They were designed with low orbital altitudes to ensure re-entry and burn-up within a few years.

---

### 8. What were the specific conditions during the thermal-vacuum test for BIRDS-III?

{:.label} 
environmental-testing

The test conditions vary by launch provider. In BIRDS-III, they were based on ISRO’s requirements. Coordination was done with the provider accordingly.

---

### 9. Apart from vibration and thermal vacuum tests, what other tests are conducted?

{:.label} 
environmental-testing

Additional tests depend on satellite design. Refer to open-source documentation from Kyushu Institute of Technology.

---

### 10. What kind of testing was done to ensure that the BIRDS satellites could withstand vibration during launch?

{:.label} 
environmental-testing

Sine, random, and shock vibration tests were conducted per launch provider specifications to verify satellite durability.

---

### 11. How long is one cycle of the thermal cycle test? What is the interval between cycles? Were 100 cycles performed?

{:.label} 
environmental-testing

About 100 cycles are typically performed to ensure robustness.

---

### 12. Do you use the -15°C to -20°C to 60°C thermal cycle test range for non-outer panel tests?

{:.label} 
environmental-testing

In some cases, the range is wider (e.g., -80°C to 60°C) as shown in the solar cell adhesive thesis.

---

### 13. Please tell me the name of the test equipment used for the thermal cycle tests in the solar cell thesis.

{:.label} 
environmental-testing

* LaSEINE’s constant temperature chambers:

  * 83\_小型恒温槽機取説20200521\_short version.pdf
  * 83\_大型恒温槽\_参考資料\_2018.pdf

---

### 14. I would like to reference a paper on the relationship between strain measurement and thermal cycles for implementing the thermal cycle test.

{:.label} 
environmental-testing

Reference: 84\_20220307\_熱サイクル試験.pdf

---

### 15. For the camera system used in BIRDS-III, was there a specific manufacturer or a custom-built component?

{:.label} 
payload

The camera was a ready-made module. Specifications and performance details are in attached documents.

---

### 16. Were there any challenges integrating the payloads into BIRDS satellites?

{:.label} 
payload

Challenges included managing limited space, thermal management, and electromagnetic interference.

---

### 17. How do you think about the phenomenon of static electricity in wood in space?

{:.label} 
payload

Dry wood has high resistivity, slightly lower than Kapton. Electrostatic precautions similar to plastic apply.

---

### 18. If there are detailed materials on geomagnetic sensor calibration, could you share them?

{:.label} 
adcs

Yes. Refer to the master's thesis of the ADCS designer for BIRDS-4.

---

### 19. I would like to receive the ground and flight data for the geomagnetic sensors from BIRDS-3 and BIRDS-4.

{:.label} 
adcs

Materials include:

* 91\_magnetometer.c
* 91\_GLEX-2021,7,1,14,x62750\[16].pdf

---

### 20. I am controlling the COM board via UART from the PC, but the ground station cannot receive data. Could you provide the packet format and content?

{:.label} 
communications

Check the COM PIC program. Using the OBC board is recommended over the PC.

---

### 21. Who should I contact at JAXA regarding spring plungers?

{:.label} 
structure

Contact the supplier directly.

---

### 22. Are jigs used for precise assembly in BIRDS?

{:.label} 
structure

No extra jigs are used. Spacing is confirmed using calipers.

---

### 23. How is the battery box secured?

{:.label} 
structure

It is fixed using four shafts, like other boards.

---

### 24. How was radiation shielding designed in BIRDS?

{:.label} 
structure

Structural materials were leveraged. Critical components were selected for radiation tolerance.

---

### 25. What precautions were taken for thermal stability in BIRDS-III?

{:.label} 
structure

Passive control methods, coatings, and TV tests were used.

---

### 26. What simulation tools were used to analyze structural integrity?

{:.label} 
structure

ANSYS and SolidWorks Simulation were used for various simulations.

---

### 27. What are the allowable tolerance levels for structural components of BIRDS-IV?

{:.label} 
structure

Depends on the deployment mechanism and launch specs. See design docs.

---

### 28. What operating temperature range is assumed for mission board components?

{:.label} 
hardware

No fixed range, but industrial-grade components are preferred.

---

### 29. What are the weights of the boards used in BIRDS?

{:.label} 
structure

* FAB: 36 g
* Battery Box: 267 g
* RF Shield: 12 g
* OBC/EPS: 33 g
* COMM: 102 g
* RAB: 63 g
* BPB: 46 g
* Antenna board: 60 g

---

### 30. Are the spacers used in BIRDS commercially available or custom? Are there differences between BIRDS-4 and BIRDS-5 boards?

{:.label} 
structure

MISUMI spacers are used. No changes between BIRDS-4 and BIRDS-5 for FAB and OBC/EPS dimensions.

---

### 31. How was the ground station software for BIRDS-IV developed? Was open-source software used?

{:.label} 
ground station

Yes, built on open-source frameworks with added custom functions.

---

### 32. Were any COTS components used in BIRDS?

{:.label} 
hardware

Yes, including microcontrollers and camera modules.

---

### 33. What were the main lessons learned from BIRDS-III that influenced BIRDS-IV?

{:.label} 
lessons learned

* Improved subsystem integration and testing
* Better documentation
* Optimized payload management
* Stronger collaboration

---

### 34. Who does Kyutech outsource new mission board designs to?

{:.label} 
procurement

Designs are created at Kyutech, fabrication by P-ban.

---

### 35. Who is the P-ban staff in charge of BIRDS?

{:.label} 
procurement

There is no dedicated staff person.

---

### 36. Which company does P-ban.com buy PCBs from?

{:.label} 
procurement

P-ban.com manufactures PCBs and assembles them from Eagle files.

---

### 37. How can I output Gerber data for more than 6 layers in Eagle?

{:.label} 
procurement

Use the attached Gerber output library: 85\_BIRDS\_6layer (1).cam

---

### 38. Since the effective control space of the Helmholtz coil is ±70mm, is it correct to assume that a 1U-sized satellite with a ±100mm range will fit within this control space?  

{:.label} 
environmental-testing

The effective control space of the Helmholtz coil is ±70mm, so a magnetometer mounted inside a 1U CubeSat should be able to be tested without issues. According to the person in charge, they have previously conducted measurements on a 2U satellite.  
Whether the magnetic sensor is within the effective control space depends on the sensor's mounting position, so the mounting location of the sensor needs to be confirmed.  

---

### 39. Is the type of converter for the chamber SMA for both the inner and outer parts, or is it N-type?  

{: .label}
hardware

The connection is SMA.  

---

### 40. I would like to know the minimum and maximum temperatures of the external panel measured in BIRDS.  

{: .label }
environmental-testing

I would appreciate it if you could share reference materials regarding the TVT (Thermal Vacuum Test) temperature settings for BIRDS.  

---

### 41.  
① If there is a program that automatically saves data obtained from ground tests to Excel or similar formats, I would appreciate it if you could share it.  
② Is the data obtained during satellite operations through downlink saved by methods other than pressing the Save button on the ground station app? 

{: .label}
ground-station

① No.  
② Currently, the software used at Kyushu Institute of Technology has an automatic save function.  

---

### 42. A letter has arrived regarding the ITU procedure. Could you please guide me on how to proceed?  

{: .label}
licensing

I will check with the Ministry of Internal Affairs and Communications regarding the process.  

---

### 43. Has a similar situation occurred in BIRDS satellites where the voltage was around 3.2V right after antenna deployment?  

{: .label }
integration-test

Yes, but the sensor condition depends on battery charge.  

---

### 44. What kind of cable was used in BIRDS to connect the ground station and the chamber?  

{: .label}
hardware

We used SMA cables.  

---

### 45. Was a dedicated command used for downlinking HK data during BIRDS satellite operation?  

{: .label}
integration-test

No, the downlink was done by specifying the address area.  

---

### 46. Only ResetPIC did not respond when all boards except the battery were operated. What should be done?  

{: .label}
integration-test

We will test with the open-source program.  

---

### 47. Has a program for data deletion been created in BIRDS before loading the FM program or testing?  

{: .label}
obc

Yes, check analyze_command.c of Main PIC.  

---

### 48. Are CW1 and CW2 transmitted alternately, and is CW3 needed for sending mission data?  

{: .label}
obc

Yes, and a custom program is necessary for CW3.  

---

### 49. How is the body diode issue handled in SepSW1 (P-channel MOSFET)?  

{: .label }
safety-review

Reverse current occurs; a DC-DC converter prevents it.  

---

### 50. What paint is used on the chamber shroud, and what is its structure?  

{: .label}
environmental-testing

The black paint is a spray with emissivity of 0.94; the chamber is copper, covered with MLI.  

---

### 51. What measurements are required for satellite station completion inspection, and are any materials available?  

{: .label}
licensing

Confirm with the bureau or measurement service provider.  

--- 

### 52. What evaluation criteria were used for E2E testing?  

{: .label}
integration-test

Evaluation included antenna deployment, OBC, CW, downlink, etc.  

---

### 53. Has damage to the FAB board DEP SW4 circuit occurred before in BIRDS projects?  

{: .label}
integration-test

No similar problems have been reported.  


---

### 54. What type of terminal is attached to the small chamber?  

{: .label}
environmental-testing

See: 118_Small Chamber Manual_Ver2019.pdf  

---

### 55. What items were included in the “Physical Characteristics List” for reentry risk evaluation?  

{: .label}
space-activity

Used for Space Activity Law compliance.  

---

### 56. What is the melting point of CMX100 cover glass used in the solar panels?  

{: .label}
space-activity

Softening point ~850–900°C; melting point ~1650°C.  

---

### 57. Has the battery temperature ever exceeded the allowable range during BIRDS thermal vacuum testing?  

{: .label}
environmental-testing

No, it ranged from -2 to 55°C in BIRDS-5.  

---

### 58. What factors were considered when determining the BIRDS-5 thermal vacuum test profile?  

{: .label}
safety-review

---

### 59. Why was the number of antenna deployment attempts in BIRDS-5 set to four, and could communication failure be related?  

{: .label}
integration-test

The procedure was inherited; the cause of failure was inconclusive.  

---

### 60. What is the minimum battery voltage required for steady operation during ground tests?  

{: .label}
integration-test

Downlink succeeded at 3.6V. Analyze E2E test data.  

---

### 61. What is meant by "criteria used to power on the system" during FM testing?  

{: .label}
integration-test

Clarification requested.  

---

### 62. Was the shutdown due to the 24-hour Reset PIC trigger or packet communication failure?  

{: .label}
integration-test

Possibly Reset PIC issue; program investigation recommended.  

---

### 63. Is the current limit of the FAB’s DC-DC converter the reason for downlink failure when using J5 and RBF2?  

{: .label}
hardware

Yes.  

---

### 64. Why is RBF2 inserted when supplying power from J5, and is it removable in orbit?  

{: .label}
integration-test

{: .label}
birds-3

It simulates solar cell generation. Refer to the BIRDS textbook.  

---

### 65. Please share information regarding SAR 6.1.  

{: .label}
safety-review

Refer to: [https://birds-project.com/opensource/](https://birds-project.com/opensource/)  

---

### 66. Please share information regarding SAR 3.2.4.  

{: .label}
safety-review

Refer to: [https://birds-project.com/opensource/](https://birds-project.com/opensource/)  

---

### 67. How will the battery voltage and capacity be measured after assembly?

{: .label}
eps

The voltage will be measured from the access port. Based on the voltage data, the capacity will be calculated using the results from the battery screening test.

---

### 68. What is the effect of ΔV after CubeSat deployment from the pod, and can the release orbit be specified?

{: .label}
structure

ΔV is typically between 1.1–1.7 m/sec. The release altitude during the ISS release (380–420 km) affects this. Users cannot specify the orbit.

---

### 69. What is the expected daily usable mission data downlink, considering HK and overhead?

{: .label}
communications

Approximately 20 kB per operation. With about 2 usable passes per day, around 40 kB can be downlinked daily.

---

### 70. What are the GPS specifications, including ICD information (mass, power, data rate)?

{: .label}
mission

Fireant GPS is used. SkyTraq S1722F8-GL IC. Mass: 45g; Size: 45mm × 35mm; Power: <0.3W; Format: NMEA (ASCII), 900 chars/sec, 1Hz output.

---

### 71. What are the changes from BIRDS-3 to BIRDS-5?

{: .label}
obc

References provided: FAB and OBC revisions.

---

### 72. What is the part number of the CPLD on the BPB?

{: .label}
obc

Reference files include BOM and Testbed.

---

### 73. What is the frequency coordination guide and process?

{: .label}
licensing

Domestic coordination begins with API submission. Recommended to contact regional bureaus in advance.
[Telecom Guide PDF](https://www.tele.soumu.go.jp/resource/j/freq/process/freqint/001.pdf)

---

### 74. What are the deadlines for Phase 0, 1, 2, and 3 of development and safety review?

{: .label}
safety review

Development and review timelines vary, but total review time can be 1.5 to 2 months. Example timelines for BIRDS-2 to BIRDS-4 are detailed.

---
### 75. Who provides reference documents like CR-99117 and CR-99218 for MIUL writing?

{: .label}
safety review

They are only accessible to JAXA contractors under NDA.

---

### 76. Is it acceptable to use MIUL formats like MSFC-HDBK-527F or MAPTIS2?

{: .label}
safety review

CubeSats use MIUL as a summary, not material-specific. JAXA/contractor determines use.

---

### 77. What materials are listed in MIUL, including internal parts like semiconductors and camera?

{: .label}
safety review

MIUL lists the satellite as one entity; individual components are not detailed.

---

### 78. Do we need material certificates for all materials used?

{: .label}
safety review

Primarily for outer FR4 substrates and structural fasteners. Required if classified as Fracture Critical Parts. Vibration testing may substitute if unavailable.

---

### 79. What is the hazard report (SHR/UHR) format for Phase 1 09-12?

{: .label}
safety review

Not public. Contractors can provide drafts. JAXA/NASA define the structure. Diagrams and tables recommended.

---

### 80. Please indicate the areas to be potted on the FAB board.

{: .label}
safety review

The areas to be potted are shown in the submitted documents. Please verify the submitted materials.

---

### 81. Please explain the working environment and content during the final charging.

{: .label}
safety review

It will be conducted as described in the safety review document UHR.

---

### 82. I would like to refer to the Inhibit Function Test Report for BIRDS-5.

{: .label}
safety review

Please verify what tests (or verifications) are necessary based on the safety review materials submitted so far.

---

### 83. How did Kyushu Institute of Technology classify and manage this fastener?

{: .label}
structure

---

### 84. Please share the Antenna Storage Procedure Manual or equivalent.

{: .label}
safety review

Check the AP for equivalent documentation.

---

### 85.I would like to know about the analysis of the temperature rise of the battery heater.

{: .label}
eps

No analysis done; safety verified by testing the downstream FET.

---

### 86. Was the reverse current prevention function of the DCDC converter tested?

{: .label}
eps

Yes. Reverse voltage applied; capacitor voltage measured pre/post DCDC.

---

### 87. How to verify DCDC reverse voltage characteristic post-assembly?

{: .label}
eps

Check SRC\_V after RBF2 removal in a dark room; no solar effect expected.

---

### 88. Is it possible to verify SepSW1’s health and reverse current prevention?

{: .label}
eps

Use power supply bias and monitor SRC\_V during SepSW1 ON-OFF.

---

### 89. TNC is in TERMINAL mode, not KISS.

{: .label}
communications

---

### 90. USB radio, antenna, and cable vendor info request.

{: .label}
communications

See reference: 147\_Student Experiment Parts List.xlsx

---

### 91. Share power budget table for BIRDS-4.

{: .label}
eps

Reference: 151\_Power\_consumption\_generation\_BIRDS4.pdf

---

### 92. RTV supplier and usage guidance.

{: .label}
eps

Supplier: Hayakawa Shouji Co. Ltd. Mix S-691A (0.9kg) and S-691B (0.1kg) in 9:1 ratio.

---

### 93. Is a 90W, 5A 18V programmable power supply sufficient for screening?

{: .label}
eps

Yes. 1C = 3.5A. Setup acceptable.

---

### 94. Evaluation request: Tokyo Keiki shield box vs. my1515.

{: .label}
communications

Keiki box more suitable for UHF than my1515. Specs confirm 60dB shielding; used in past projects.

---

### 95. Share Space Activity Law Handbook.

{: .label}
safety review

[Link](https://www8.cao.go.jp/space/application/space_activity/application.html)

---

### 96. Request for data/papers on radiation for thermal design (NASTRAN).

{: .label}
structure

STM and thermal vacuum testing recommended for accurate modeling.

---

### 97. Regarding hazards, section 4.2.2.1 of JX-ESPC-101132-D lists only four standard hazards, but this document lists fourteen. Is this because the hazards required for small satellites and other satellites are different?

{: .label}
safety review

In section 4.2.2.1 of JX-ESPC-101132-D, standard hazards are listed as "examples of responses" and include 14 items.

---

### 98. Is it better to clearly document the hazard report using FTA?

{: .label}
safety review

Refer to the SAR available in BIRDS Open Source.

---

### 99. A glass bandpass filter and camera are used. Does this correspond to the standard hazard "Prevention of glass and other fragments"? Also, it appears that BIRDS-4 does not have a cover on the lens, but how was this approved?

{: .label}
safety review

When using glass, there are three possible ways to address this:

1. The glass is encapsulated
2. The design ensures no load is applied
3. Other methods to control it

In the case of BIRDS, verification documents demonstrated safety through UHR and vibration testing.

---

### 100. I would like to share the SAR document.

{: .label}
safety review

Refer to the SAR available in BIRDS Open Source. Document according to the format provided by the contractor.

---

### 101. How were the permanent magnets and hysteresis dampers procured?

{: .label}
ADCS

* Manufacturer name
* Specification items
* ALNICO 5: [Link](https://www.digikey.jp/productdetail/ja/standex-meder-electronics/ALNICO500-19X3.2X3.2MM/374-1130-ND/695282)
* HYmu80 Hysteresis Damper: [Link](https://www.alibaba.com/product-detail/Super-Nickel-Alloy-Permalloy-80-HyMu80_1600059517184.html)

---

### 102. Has BIRDS used thermal control elements in the past (e.g., heaters, Peltier blockers, etc.)?

{: .label} 
thermal

Heaters were used until BIRDS-4, but from BIRDS-5 onward, they were not included.
Model used: KHLVA-102/10
[Heater Model Link](https://www.jp.omega.com/pptst/KHRA-KHLVA-KHA-SERIES.html)

---

### 103. What materials are used in the frame of BIRDS-4 and for what purpose?

{: .label}
Structure

PEEK was used for insulation where the frame acted as the antenna. BIRDS-5 reverted to full aluminum.

---

### 104. Should the documents submitted to the Ministry of Internal Affairs and Communications (MIC) be prepared before the JARL documents?

{: .label}
Licensing

JARL documents can be submitted first. A ground station call sign can be secured early by explanation to the General Communications Bureau.

---

### 105. What parameters need to be entered for the following?



* EIRP of the satellite transmitter
* Adjustment range of UHF communication equipment
* Noise temperature
* Reference bandwidth
* Modulation loss
* Noise bandwidth

**EIRP** = Ptx \[dBm] - L \[dB] + G \[dBi]

---

### 106. I need the antenna pattern diagram from Kyushu Institute of Technology.

{: .label}
Communications

See attached document: `175_BIRDS_GS_Antenna_M2.pdf`

---

### 107. What tests are required for battery screening and how were EM tests done at Kyutech?



Screening follows JSC-20793; FM cells must be verified. EM tests are optional unless used for FM verification.

---

### 108. How is the inspection carried out after the vibration test when FM cannot be disassembled?

{: .label}
Structure

Torque marks are checked via holes in outer panels or outer panels are removed and reassembled per manual.

---

### 109. I am searching for bypass diodes for solar cells. Is MBR1020LL acceptable despite different temperature range?

{: .label}
EPS

Yes, a −55°C range is acceptable.

---

### 110. Can I get downlink measurement results from Kyutech since the spectrum analyzer is broken?

{: .label}
Communications

Yes, see: `179_BIRDS-4 Downlink Measurement Data.pdf`

---

### 111. STK shows a different beta angle than the document for June 1, 2021. Can you confirm this discrepancy?

{: .label}
EPS

Also, power generation values under same beta angle differ.
Reference: `180_Power-Budget-Analysis-for-1U-satellite_Final.pdf`

---

### 112. What was discovered about FET-based over-discharge control and what changes may be required?

{: .label}
Safety Review

Three inhibits are required. Parasitic diode behavior in Pch MOSFETs complicates isolation, needing redesign.

---

### 113. Is the leakage current from Dep SW2 sufficiently small to ignore?

{: .label}
Safety Review

Yes, current is minimal and within safe limits.
Reference: `182_DepSW_電流.png`

---

### 114. What is the gender of the Dsub25 connector inside the Peltier chamber?

{: .label}
Environmental Test

Interior connector is **female**, exterior is **male**.

---

### 115. We plan to use an external vibration machine. Are there spec issues?

{: .label}
Environmental Test

Specs will be cross-referenced with JAXA documentation.

---

### 116. What is the material of the black paper-like substance used in the battery screening test?

{: .label}
EPS

Reference: `185_Battery Screening .jpg`

---

### 117. How does Kyutech measure charge and discharge characteristics after FM assembly?

{: .label}
Safety Review

Only OCV (Open Circuit Voltage) is measured after FM assembly.

---

### 118. What is the concern with antenna material combinations, and how was it addressed in BIRDS?

{: .label}
Safety Review

Tin-plated Cu wire caused corrosion with SK85 steel. BIRDS switched to plain Cu wire and coordinated with contractor.

---

### 119. Can you share the BIRDS-5 packing and delivery procedure manual?

{: .label}
Safety Review

Refer to the BIRDS-5 documentation.

---

### 120. Kazakhstan and Thailand raised interference concerns with YOMOGI satellite. What was the response?

{: .label}
Licensing

Awaiting follow-up for frequency application and countermeasures.

---

### **121.** I have heard that the integrated development environment for handling ground station programs is Visual Studio. Are you using the free version, Visual Studio Community, or the paid version, Visual Studio Professional?

{: .label}
Ground Station

It seems that development can be done without any issues using Visual Studio Community.

---

### **122.** When checking commands, I heard that you are testing by placing the antenna inside an aluminum box. Could you share which box you purchased, or provide a photo if available?

{: .label}
integration-test

---

### **123.** The BIRDS platform states that "ResetPIC and COMPIC communicate via UART." In fact, the circuit diagram for BIRDS5 also shows a UART connection between the two PICs. However, the UART for COMPIC is not defined in ResetPIC, and the code does not include any communication between ResetPIC and COMPIC via UART. Could you please explain this difference?

{: .label}
obc

Regarding the UART between COM PIC and Reset PIC:
First, the UART communication between COM PIC and Reset PIC is just included as a feature. It is not used in the current design. Therefore, while it is marked as UART in the circuit diagram, it is not included in the program.

Regarding the definition of RB6 and RB7 as UART lines in Reset PIC:
The purpose of defining RB6 and RB7 as UART lines is likely to enable direct debugging and program verification during the construction of the Reset PIC program. When performing debugging through the access ports on the FAB, it is necessary to go through the Main PIC. However, in case of debugging failure, it is unclear whether the issue is with the Main PIC or with the Reset PIC not functioning as expected. Therefore, it is believed that the goal was to allow data to be sent directly from the Reset PIC to the PC.

---

### **124.** Regarding the battery heater section: Is my understanding correct that RD0 = 1 turns the battery heater ON and RD0 = 0 turns it OFF?
Does the voltage output from the temperature sensor inside the battery box decrease as the temperature increases?

{: .label}
obc


---

### **125.** As seen in the attached schematic, the DEPSW4 signal is interrupted at J15 within the FAB, and it seems that the signal does not reach Q9 and Q10. Is this intentional, or did Kyushu Institute of Technology later solder connections to ensure continuity?

{: .label}
obc

This is part of the specification.
A jumper pin has been installed.
Reference:
*87\_BIRDS BUS Board\_Jumper Pin.png*

---

### **126.** How were software updates and patches handled for BIRDS satellites after launch?

{: .label}
software

Software updates were not possible after launch due to hardware constraints. Therefore, robust testing of the satellite software was performed prior to launch to ensure reliability and minimize potential issues in orbit.



