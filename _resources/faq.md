---
title: FAQ
layout: default
permalink: "/resources/faq"
lang: en
---

# Frequently Asked Questions

Answers to questions we often get about the BIRDS bus and its integration into custom projects





 

---

**63. Rationale for Vacuum Leak Test Before Vibration Test**  

- **Reasoning:**  
  - The primary reason for performing the vacuum leak test before the vibration test was scheduling adjustments.  
  - Performing the tests in reverse order (vibration test first, then vacuum test) is technically feasible and does not pose any issues.  

- **Procedure Alignment:**  
  - It is recommended to follow the established procedures from previous BIRDS projects unless there is a strong justification for deviation. Consistency ensures comparability and adherence to best practices.  



---

**69**  
Can we borrow a weight measurement device at Kyushu Institute of Technology (Kyutech)? (The mass should be measured to three decimal places.)  
Yes, it can be lent out.  



**BIRDS**  
It seems that there is only one uplink detection code (ASCII code) in BIRDS. Is it possible to set two on the COMM board? To ensure uplink security, can multiple ASCII codes be configured?  







 






{: .label}
adcs


**86**  
I am considering mounting a patch antenna and a magnetic torquer on a newly developed satellite.  
Could you provide information about the magnetic torquer used in Kyushu Institute of Technology’s BIRDS satellites (such as the manufacturer and product name)?  
The details of the magnetic torquer coil are mentioned in the master's thesis of Hisatsugi, who designed the ADCS for BIRDS-4, so I recommend referring to it.  
The design of the magnetic torquer is described in Chapter 11.6, starting from page 90.  
The design values and other details are summarized in Table 11.19 on page 95.  
BIRDS-4 was launched with these magnetic torquers, but due to other priority missions, they were not activated in orbit.  
Mission  


How were the orbital parameters of the BIRDS-III satellites determined after deployment?
The orbital parameters were initially provided by the launch provider. These were then refined using ground station data and TLE data from organizations like NORAD.

Is it possible to know the current location of the BIRDS-III satellite using TLE data?
Yes, you can track the satellite using TLE (Two-Line Element) data. There are free tools available online, such as GPredict and Orbitron, that allow you to input TLE data and calculate the satellite's position.

How were the deorbiting strategies implemented for BIRDS satellites?
The deorbiting strategies relied on natural orbital decay due to atmospheric drag. The satellites were designed with a low orbital altitude to ensure they would re-enter the Earth’s atmosphere and burn up within a few years, complying with international space debris mitigation guidelines.


{: .label}
testing

What were the specific conditions during the thermal-vacuum test for BIRDS-III?
The thermal-vacuum test conditions differ depending on the launch provider and the launch vehicle. It is important to confirm the test conditions with the launch service provider. In the case of BIRDS-III, the test specifications were discussed based on the requirements from ISRO and coordinated accordingly.

44. Environmental Testing Details

Question: Apart from vibration and thermal vacuum tests, what other tests are conducted? Please provide details.
Response: The tests conducted depend on the satellite's design. Documentation from Kyushu Institute of Technology is already available as open source, so please refer to that.

What kind of testing was done to ensure that the BIRDS satellites could withstand vibration during launch?
Vibration tests were conducted to simulate the launch environment. These included sine vibration tests, random vibration tests, and shock tests. The tests were performed based on the launch provider's specifications to ensure the satellite could withstand the dynamic loads during launch.

**81**  
How long is one cycle of the thermal cycle test?  
What is the interval between cycles in the thermal cycle test?  
Were 100 cycles performed?  
For thorough testing, about 100 cycles should be performed.  
Environmental Test  

**82**  
I have heard that the thermal cycle test is usually conducted at -15°C or -20°C to 60°C. Do you use this temperature setting for tests other than those for the outer panel?  
Regarding the thermal cycle temperature range, I have attached part of a thesis on solar cell adhesive.  
As shown in Table 4-1, tests are conducted from -80°C to 60°C.  
For reference, I checked recent orbital data for BIRDS-4, and the outer panel fluctuated within the range of -30°C to 50°C.  
Environmental Test  

**83**  
Please tell me the name of the test equipment used for the thermal cycle tests conducted in the solar cell thesis.  
Reference to LaSEINE’s constant temperature chamber:  
83_小型恒温槽機取説20200521_short version.pdf  
83_大型恒温槽_参考資料_2018.pdf  
Environmental Test ✔  

**84**  
I would like to reference a paper on the relationship between strain measurement and thermal cycles for implementing the thermal cycle test. Could you provide the entire paper?  
Reference: 84_20220307_熱サイクル試験.pdf  
Environmental Test ✔  




{: .label}
payload

For the camera system used in BIRDS-III, was there a specific manufacturer or a custom-built component?
The camera system was purchased as a ready-made module. For more details on the specifications and performance, refer to the attached documents.

Were there any specific challenges faced during the integration of the payloads into the BIRDS satellites?
Yes, payload integration presented challenges such as managing limited space, ensuring thermal management, and avoiding electromagnetic interference between payloads and other subsystems. Close collaboration between subsystem teams helped resolve these issues.

How do you think about the phenomenon of static electricity in wood in space?
I have never thought about the static electricity phenomenon in wood in space, but it mainly depends on the resistivity (conductivity).
Dry wood has a relatively high resistivity.
If we take the upper limit of 10^13 Ω·m from Wikipedia, this is slightly lower than Kapton (around 10^14), which means there is a possibility of charge accumulation.
For electrostatic protection, the same considerations as for common insulators like plastic should apply.

**89**  
There was a description regarding the calibration of the geomagnetic sensor in the attached photo for the CDR.  
If there are more detailed materials on geomagnetic sensor calibration, I would appreciate it if you could share them.  
I have attached the master's thesis of the person responsible for the attitude control system of BIRDS-4.  
Mission  



**91**  
I would like to receive the ground test data and flight data for the geomagnetic sensors from BIRDS-3 and BIRDS-4.  
I will share the materials.  
Reference:  
91_magnetometer.c  
91_GLEX-2021,7,1,14,x62750[16].pdf  
Mission ✔  

**92**  
I am controlling the COM board via UART from the PC, but the ground station is unable to receive data.  
Could you provide the packet format and the content of the data?  
I will check the COM PIC program regarding the content of the data.  
It is recommended to use the OBC board instead of the PC to control the COM board.  
Integrated Testing

{: .label}
structure

Who should I contact at JAXA regarding the provision of spring plungers?
Contact the supplier.

Are jigs or similar tools used for precise assembly during the BIRDS series assembly?
No additional jigs are used for structure assembly.
To ensure the satellite fits into the pod, the spacing between the structural rails is checked with calipers during assembly.

How is the battery box secured?
The battery box is fixed using four shafts, just like other boards.

How was the radiation shielding designed for the electronic components in the BIRDS satellites?
The radiation shielding was achieved primarily by leveraging the structural components of the satellite. In addition, critical electronic components were carefully selected for their radiation tolerance based on available data sheets. For more severe radiation environments, additional shielding can be added using materials like aluminum or tantalum.

What precautions were taken to ensure the thermal stability of the BIRDS-III satellite during its mission?
Thermal stability was achieved by designing the satellite with appropriate thermal coatings, using passive thermal control methods, and conducting thermal simulations. The thermal-vacuum tests also verified the satellite’s ability to maintain thermal stability within operational limits.

What simulation tools were used to analyze the structural integrity of the BIRDS-III satellite?
ANSYS was the primary tool used for structural analysis, including simulations for vibration and thermal loads. In some cases, SolidWorks Simulation was also used for preliminary analysis.


What are the allowable tolerance levels for the structural components of BIRDS-IV?
The allowable tolerances for structural components depend on the requirements of the deployment mechanism and the launch provider's specifications. Detailed information can be found in the structure design documents.

When selecting components for the mission board, what operating temperature range is assumed?
No specific temperature range is determined, but industrial-grade components are selected.
Commercial-grade components are cheaper but have a narrower temperature range and do not support negative temperatures.

What are the weights of the boards used in BIRDS?
The component weights of BIRDS-5 are as follows:
- FAB (including RBF pin): 36 g
- Battery Box (including batteries): 267 g
- RF shield: 12 g
- OBC/EPS: 33 g
- COMM: 102 g
- RAB: 63 g
- BPB: 46 g
- Antenna board: 60 g

It seems spacers are needed to fix the internal boards of the satellite. Are the spacers used in BIRDS all commercially available, or were they specially ordered?
Are there differences between the BIRDS-5 and BIRDS-4 bus system boards?
The spacers used between boards are commercially available (mainly from MISUMI).
(Reference: MISUMI Spacer)
There are no changes in the dimensions of the FAB and OBC/EPS boards between BIRDS-4 and BIRDS-5.

{: .label}
ground station

How was the ground station software for BIRDS-IV developed? Was open-source software used?
The ground station software was custom-developed based on open-source frameworks. Additional functionalities were integrated to meet the specific needs of the BIRDS project.


{: .label}
hardware

Were any commercial-off-the-shelf (COTS) components used in the BIRDS project?
Yes, many components, including the microcontroller, camera modules, and electronic components, were COTS to reduce development time and costs. Each COTS component was carefully evaluated for performance and reliability in the space environment.

{: .label}
lessons learned

What were the main lessons learned from the BIRDS-III project that influenced the development of BIRDS-IV?
Key lessons included:

Improved subsystem integration and testing processes.
Enhanced documentation to streamline development.
Better payload management strategies to optimize space utilization and functionality.
Strengthened collaboration between team members from diverse backgrounds.


{: .label}
procurement

45. Mission Board Design Request

Question: Who does Kyutech outsource new mission board designs to?
Response: The designs are created at Kyutech, and the fabrication is outsourced to P-ban.

48. Contact Information for P-ban.com BIRDS Staff

Question: Who is the staff member in charge of the BIRDS project at P-ban.com?
Response: There is no specific person in charge.

46. PCB Manufacturer Information

Question: Which company does P-ban.com purchase PCBs from for manufacturing?
Response: P-ban.com is a company responsible for PCB manufacturing and assembly. Designs created using EAGLE software can be sent to P-ban.com for PCB production. For further details, please refer to their website.

**85**  
I would like to order a PCB based on the data created in Eagle.  
How can I output Gerber data for more than 6 layers?  
I have attached the Gerber data output library.  
Reference: 85_BIRDS_6layer (1).cam  
Mission ✔









**94**  
Since the effective control space of the Helmholtz coil is ±70mm, is it correct to assume that a 1U-sized satellite with a ±100mm range will fit within this control space?  
The effective control space of the Helmholtz coil is ±70mm, so a magnetometer mounted inside a 1U CubeSat should be able to be tested without issues. According to the person in charge, they have previously conducted measurements on a 2U satellite.  
Whether the magnetic sensor is within the effective control space depends on the sensor's mounting position, so the mounting location of the sensor needs to be confirmed.  
Mission  

**95**  
Is the type of converter for the chamber SMA for both the inner and outer parts, or is it N-type?  
The connection is SMA.  
Environmental Testing  

**96**  
- I would like to know the minimum and maximum temperatures of the external panel measured in BIRDS.  
- I would appreciate it if you could share reference materials regarding the TVT (Thermal Vacuum Test) temperature settings for BIRDS.  
Environmental Testing


**97**  
① If there is a program that automatically saves data obtained from ground tests to Excel or similar formats, I would appreciate it if you could share it. Currently, I am copying and pasting the data displayed on Tera Term one by one.  
② Is the data obtained during satellite operations through downlink saved by methods other than pressing the Save button on the ground station app? There is an opinion that automatic saving may be necessary to prevent forgetting to press the Save button.  
① No.  
② Currently, the software used at Kyushu Institute of Technology has an automatic save function that saves data when receiving data or sending commands.  
Please refer to GitHub.  
Ground Station  


**101**  
A letter has arrived regarding the ITU procedure. Could you please guide me on how to proceed?  
I will check with the Ministry of Internal Affairs and Communications regarding the process.  
Frequency Application  

**102**  
It was reported that the battery voltage was around 3.2V immediately after deploying the antenna, when the battery was about 10% charged. Has a similar situation occurred in BIRDS satellites, where the voltage was measured under similar conditions?  
- Integration Test  



**104**  
Regarding the cable connecting the ground station and the chamber, could you tell me what kind of cable was used in BIRDS? When communicating inside the chamber, is the antenna placed inside the chamber while deployed?  
We used SMA cables. To put it simply, it's similar to connecting the COM board to the ground station. The chamber's interface is equipped with SMA female connectors.  
Yes, that’s correct. (Alternatively, you can deploy it.)  
It's not necessary to have a large hole for the thermocouple connector; you can pass the cable through. You can simulate this by bundling fishing line.  
Environmental Test  

**105**  
During the operation of BIRDS satellites, when downlinking HK data, was a dedicated command used? Or was the downlink done by specifying the address area of the flash memory?  
The downlink was done by specifying the address area.  
Integration Test  




**107**  
In the past few days, all the boards (excluding the battery) were operated, and the logs were checked via UART communication from MainPIC. On two occasions, only ResetPIC did not respond.  
We will test with the open-source program available.  
→ If similar symptoms occur, it seems there may be an issue with the board.  
Integration Test  



**109**  
- Before loading the FM program or before the 30-minute timer test, it seems necessary to delete all the data from the satellite’s flash memory. Therefore, has a program for data deletion been created in BIRDS?  
- Please check the open-source program.  
Check the analyze_command.c of Main PIC.  
OBC

**110**  
Specifically, in "mainpic_function.c," two types, "MAKE_CW1_FORMAT()" and "MAKE_CW2_FORMAT()" are provided, and within "MAKE_CW_FORMAT()," communication is controlled based on the value of the variable "CW_IDENTIFIER." As for the communication method, is it correct to understand that the contents of 1 and 2 are alternately transmitted periodically?  
In order to additionally send mission data, such as geomagnetic data and temperature, to the ground station, is it necessary to use "MAKE_CW3_FORMAT"?  
Yes, that is correct.  
Please investigate how far the changes in the program will propagate.  
I believe a custom program will be necessary.  
OBC  

**111**  
**Q1**: Regarding the SepSW1 (MOSFET) used for over-discharge and external short-circuit hazard control, considering the body diode characteristics, there is a possibility that current may flow from the nickel-hydrogen battery to the solar cell direction. It seems that SepSW1 is a P-channel MOSFET; how is the issue of the body diode characteristic addressed?  
**Q2**: From the part number, SepSW2 is assumed to be an N-channel MOSFET, but when looking at the circuit schematic, current flows through DepSW2, which seems to be a concern.  

**A1**: The FET switch blocks current in one direction, but reverse current occurs due to the body diode. Therefore, SepSW1 does not inhibit over-discharge or short-circuit failures. Between SepSW1 and the battery, there is a DC-DC converter with an internal FET that prevents reverse current.  
**A2**: Related to Q1, I will send an inhibit diagram. If the battery heater is not used, this diagram can be used for the solution. Additionally, UNQ-2 identified leakage as a hazard factor for over-discharge, and the results of the leakage analysis have been reflected. Also, in the case of DepSW failure, the leak current will flow through the ground side DepSW harness, so harness evaluation is necessary. The analysis of the leakage current, evaluated against the harness used, shows that the harness can adequately handle this. The results of this evaluation are provided in STD Attachment 3.  
Safety review.


**112**  
What type of paint is used for the black coating on the inner surface of the chamber shroud?  
Could you provide the dimensions and material of the chamber shroud?  
It seems the chamber shroud is covered with MLI, but what is the material of the surface the satellite will see?  
Are the heater and chamber shroud in direct contact?

The black paint on the inner surface of the chamber shroud is the following black spray: [link to spray]. The emissivity is 0.94, and the absorption rate is approximately the same.  
The chamber shroud is made of copper and has a cylindrical shape with a diameter of about 28 cm.  
It is assumed that the chamber shroud is covered with MLI, but the surface the satellite will see is the silver-colored side of the MLI’s aluminum-coated polyimide film.  
The heater and the chamber shroud are in direct contact.  



**114**  
I have a question about the completion inspection related to the satellite station establishment. When submitting the construction completion notice to the General Communications Bureau, it is required to submit the necessary data for the completion inspection in advance. The measurement items are airborne power, frequency deviation, occupied bandwidth, and spurious intensity. Are there any materials, such as procedures followed during the inspection at Kyushu Institute of Technology, for these measurements? If there are any materials related to the completion inspection, I would like to receive them.

You should confirm with the regional communications bureau or the measurement service provider.  
For prior confirmation, it would be advisable to perform the measurements with the setting values shown in the photo of the COM board's test report that comes with the purchase.

**Frequency Application**

**115**  
Please share any documents or procedures that outline the evaluation criteria for E2E.  
The evaluation covered the following:  
- From launch to antenna deployment,  
- 30-minute timer function,  
- OBC function (regular resets, etc.),  
- Normal operation (downlink of HK data, uplink, CW acquisition),  
- Mission operation,  
- Power generation measurement using the sun simulator and rotator.  
The evaluation period was approximately 5 days. Additionally, the only cable connected to the satellite is the charging cable.  
The evaluation criteria are that all items must pass.  

For the record sheet, please refer to the attached photo.  
Also, the downlink data is separately stored in the ground station operation software.  
Reference: 115_E2E test.png  
**Integration Test** ✓


**116**  
During the ground test using EM, damage occurred in the circuit of the FAB board DEP SW4. The ground test also included a battery heater test, but it is unclear exactly when the damage occurred. This board is from the BIRDS satellite, and the board and circuit are identical. Has such an incident occurred at Kyushu Institute of Technology?

Dep-SW4 is a switch that connects the battery GND and the system GND. Therefore, this switch is necessary and is believed to be included in the safety review's three inhibitions.  
I investigated the current limits of U25 and U26, and there seems to be no issue. I have not heard of similar problems occurring in other projects.

**Integration Test**



**118**  
What type of terminal is attached to the small chamber?  
Reference: 118_Small Chamber Manual_Ver2019.pdf

**Environmental Test** ✓







**122**  
Regarding the "Assessment of Compliance with Standards for the Structure of Satellites" to be attached to the application form, we are currently preparing the "Physical Characteristics List of Components for the Risk Evaluation of Small Satellite Reentry" to prevent third-party damage during reentry. This list needs to describe physical characteristics and materials. Could you please tell me what items were included in the application documents for the BIRDS satellite regarding this matter?  
- Space Activity


**Space Activity Law**  

**124**  
Regarding the Space Activity Law application, information on the melting point of the glass used in the solar panels is required.  

The solar panels used are attached in the file, and the cover glass used is CMX100. Please share information on the melting point of this glass.  

I do not have precise melting point information. CMX is a cover glass made by Qioptiq, and it is considered to be borosilicate glass with cerium added. The softening point of borosilicate glass is around 850-900°C, and its melting point is higher, around 1650°C, which is lower than titanium. For exact information, it is recommended to contact Azur or its distributor.  

**Space Activity Law**  

**125**  
In the BIRDS thermal vacuum test, has the battery temperature ever exceeded the allowable range? If it has never exceeded the range, please tell me the highest temperature it reached.  

For BIRDS-5, the temperature range was -2 to 55°C.  

**Environmental Test**


**126**  
The accommodation handbook only mentions a thermal environment range of -15°C to 60°C, with no specification of how long these temperatures should be maintained, nor any rate of temperature change. This is my understanding.  

When determining the temperature profile for the BIRDS-5 thermal vacuum test, what factors were considered?  
- Safety Review  

**127**  
The number of antenna deployment attempts in BIRDS-5 was set to 4. What was the reason for deciding on this specific number?  

Also, can we understand that the cause of the communication failure in BIRDS-5 was due to the antenna not deploying?  

If the number of antenna deployment attempts had been set to 5 or more, would it have been possible to restore communication?  

This is a continuation from BIRDS-3. Each project conducted antenna deployment tests, and since they were deployed without issues, the same procedure was carried over. The same applies to BIRDS-4.  

As for the communication failure in BIRDS-5, one of the causes could indeed have been the antenna not deploying. However, because the cause of the antenna deployment failure could not be identified, and because it is unlikely that all three units failed simultaneously, it cannot be definitively concluded that the communication failure was solely due to the antenna deployment issue.  

If the number of antenna deployment attempts had been set to 5 or more, the outcome would likely have been the same. This is because one possible reason for the antenna not deploying is that it could have become stuck after being burnt out.  


**128**  
We have been conducting E2E (End-to-End) tests since the day before yesterday. Last night, after approximately 24 hours, an issue occurred where packet communication (downlink) became impossible. At that time, the satellite was running on battery, and it is estimated that the battery voltage had fallen below 3.8V. Therefore, it is believed that the current required for packet communication was not being supplied.  

Could you provide the minimum battery voltage that allows for steady operation of the BIRDS satellites at Kyushu Institute of Technology? Also, during the BIRDS satellite ground tests, is the satellite assembled in such a way that only a cable from a stabilized power supply is connected to the access port during testing? Additionally, what criteria are used for powering on the system?  

It seems that the issue was only with downlink communication and that CW transmission and mission operations were still functioning. Is this correct?  

Upon reviewing past test logs, it appears that the downlink was successful even when the battery was at 3.6V.  

After the downlink became unavailable, did the communication recover when power was supplied from the access port?  

I suggest analyzing the E2E test data up to this point.



**129**  
The FM (Flight Model) is fully assembled as a satellite, and current is being supplied to the access port of the FAB from an external power source. However, during packet communication, the external power source is unable to supply the necessary current, so the system switches to battery operation. The downlink anomaly occurred during this switch.

Regarding the question "What criteria are used to power on the system?" could you please clarify what exactly is meant by this?


**130**  
We have been conducting FM-E2E tests with battery power. By increasing the number of packet communications (downlinks), the battery voltage was reduced to about 3.6V, but the FM continued to operate normally. This suggests that the shutdown yesterday was not due to packet communication failure.  
The shutdown occurred exactly 24 hours after the start, so it is believed to have been caused by a shutdown triggered by the Reset PIC. However, during the E2E test at Kyushu Institute of Technology, a 24-hour reset was successfully performed without issues after leaving the system idle for about 10 minutes.  
It is possible that there is a problem with the program.  
Was the system functioning normally during the 24-hour functionality test before the E2E?  

**131**  
During the EM-E2E, the 24-hour reset function worked without issue for a week.  
When power was supplied from J5 to the FAB, and RBF2 was inserted to separate the battery and circuit, it was understood that downlink communication could not be established due to the current limit of the FAB’s DC-DC converter. Is this understanding correct?  
Yes, I believe that is correct.  
What is the reason for using RBF2 when supplying power from J5?  


**132**  
The reason for inserting RBF2 when supplying power from J5 is to prevent the load on the battery caused by charging and discharging.  
In tests using the BIRDS FM, are normal operational experiments (such as downlinks) conducted while the battery is charging?  
Is it possible to insert and remove RBF2 while the satellite is in flight?  
The reason for connecting the stabilized power supply is likely to simulate power generation from the solar cells. How does the satellite actually operate in space?  
Please check the E2E test method in the BIRDS textbook.

**133**  
Please share information regarding SAR 6.1.  
Refer to the Baseline Flight Safety Assessment Report (SAR) for Safety Review Phase III.  
[https://birds-project.com/opensource/](https://birds-project.com/opensource/)  
Safety Review

**134**  
Please share information regarding SAR 3.2.4.  
Refer to the Baseline Flight Safety Assessment Report (SAR) for Safety Review Phase III.  
[https://birds-project.com/opensource/](https://birds-project.com/opensource/)  
References:  
134_j3119f.pdf  
134_PDTA144E_SER.pdf  
Safety Review

**135**  
Please indicate the areas to be potted on the FAB board.  
The areas to be potted are shown in the submitted documents. Please verify the submitted materials.  
Safety Review

**136**  
Please explain the working environment and content during the final charging.  
It will be conducted as described in the safety review document UHR.  
Safety Review

**137**  
Regarding the safety review, I would like to refer to the Inhibit Function Test Report for BIRDS-5.  
Please verify what tests (or verifications) are necessary based on the safety review materials submitted so far.  
Safety Review

**138**  
How will the battery voltage and capacity be measured after assembly?  
The voltage will be measured from the access port. Based on the voltage data, the capacity will be calculated using the results from the battery screening test.  
Safety Review


**139**  
Regarding the "Compliance Evaluation of Satellite Structure," under the section on "Prevention of Third-Party Damage During Reentry," I would like to estimate the risk of antenna element (forged steel strip (steel type: SK85)) falling. However, I do not have data such as melting point or density, so if you have reference data sources, I would appreciate it if you could share them.  
Regarding the second point, I have previously asked about the method to test the integrity of the battery's safety valve. I have not found any testing methods, so I would like to ask for guidance on the test procedures and the principles behind them.  
Space Activity Law

**140**  
How did Kyushu Institute of Technology classify and manage (such as analysis or lack thereof) this fastener?  
Space Activity Law

**141**  
As part of the safety review materials, I am required to create an Antenna Storage Procedure Manual and explain how to tie the fishing line.  
If Kyushu Institute of Technology has created something equivalent to the Antenna Storage Procedure Manual for JAXA safety review materials, I would appreciate it if you could share it.  
It is indicated within the AP.  
Safety Review

**142**  
I would like to know about the analysis of the temperature rise of the battery heater at Kyushu Institute of Technology.  
For the verification of the battery heater's safety function, we are conducting verification tests on the FET downstream of the heater. Therefore, no specific analysis has been conducted.  
Safety Review  

**143**  
Regarding Safety Review III, was the reverse current prevention function of the DCDC converter mounted on the FAB tested?  
If so, could you please share the details of the test?  
We installed a stabilized power supply in place of the battery and applied reverse voltage to the DCDC converter. We then measured the voltage across the capacitors before and after the DCDC converter.  
Safety Review  

**144**  
Is there a method to verify that the reverse voltage characteristic of the DCDC converter on the FAB-FM works correctly during the post-assembly test of the FAB-FM? After removing the RBF2 pin and operating the battery, measuring the SRCV (source voltage) of the FAB should confirm that the DCDC converter's reverse voltage characteristic works correctly.  
Since the room will be dark, we can assume that the photovoltaic panel’s generated voltage is 0V.  
I think that there will be little generation from the indoor electrical system, so if the room is kept dark, we can ignore the effect of the solar cells.  
I believe we can confirm that the battery voltage is not applied by verifying the SRC_V value.  
Safety Review  

**145**  
Is it possible to prove the health of SepSW1 again?  
Could you please share the method for verifying the reverse current prevention of SepSW1?  
By connecting an external power supply to the charge port and applying bias, monitoring the SRC_V during the ON-OFF of SepSW1 should allow us to confirm whether reverse current occurs.  
If the device is healthy, the body diode will cause reverse current.  
For verifying SepSW1's health, checking the forward ON-OFF of the solar cell to the battery should not present any issues.  
Safety Review  

**146**  
The TNC is not functioning. The TNC is in TERMINAL mode instead of KISS mode.  
Ground Station


**147**  
I would like to know the manufacturer and model information for purchasing the USB radio and omnidirectional antenna, along with their cables.  
Reference: 147_Student Experiment Parts List.xlsx  
Ground Station  

**148**  
When the CubeSat is released from the pod, I think ΔV will occur, but to what extent will this affect the satellite?  
Also, is the release orbit fixed, or can the user specify certain parameters?  
In the attached document, the range of ΔV is described as 1.1–1.7 m/sec.  
The release altitude during the ISS release, between 380 and 420 km, will affect this.  
The user cannot specify the orbit.  
Others  

**149**  
In the case of BIRDS-4, it is considered that the total data that can be downlinked to the ground per day is 1 MB/day, but considering the effects of housekeeping (HK) and overhead, how much data will actually be usable for the mission?  
The mission downlink capacity is approximately 20 kB per operation.  
This includes errors, so data that needs to be downlinked again is also included.  
Operations are carried out in the ISS orbit, with about 4 passes per day. However, 2 of these passes are often at night, so there will typically be 2 passes during the daytime.  
Therefore, the actual downlink data per day is expected to be around 40 kB.  
Communication  

**150**  
We are considering using GPS. If there is any ICD (Interface Control Document) information regarding mass, size, power consumption, and data capacity ([byte/format/sec]), please provide it.  
We are using Fireant.  
The GPS receiver IC used is the SkyTraq S1722F8-GL.  
The module’s mass is about 45g, with dimensions of 45mm x 35mm, and power consumption is less than 0.3W. The data format is NMEA, with ASCII text data transmitted at up to 900 characters per second. NMEA data is sent once per second, within 0.9 seconds.  
Mission  

**151**  
I would like to share the power budget table for BIRDS-4.  
Reference:  
151_Power_consumption_generation_BIRDS4.pdf  
EPS

**152**  
Please let me know the supplier for RTV.  
Is it correct to understand that I should buy 0.9 kg of A and 0.1 kg of B and mix them for use?  
Supplier: Hayakawa Shouji Co., Ltd.  
RTV S-691A (0.9kg): 600,000 yen/kg  
RTV S-691B (0.1kg): 600,000 yen/kg  
Total: 600,000 yen (+tax)  
Mix and use in a 9:1 ratio as needed each time.  
EPS  

**153**  
For the CubeSat, we assume that the highest current will be drawn during screening.  
We recognize that charging is done at 1C, which means 4A, is that correct?  
If so, a stabilized power supply of 5A, 18V with programmability (like SCPI) would be ideal. Is this approach appropriate?  
Would a load of around 90W be sufficient?  
1C is a maximum of 4A, but in the testing at Kyushu Institute of Technology, the battery capacity is 3500mAh, so 1C corresponds to 3.5A.  
A stabilized power supply of 5A, 18V, and 90W should work without issues for screening tests. A programmable power supply would be even better.  
EPS  


**154**  
Regarding the shield box, I heard that my1515 cannot shield the UHF band and that Mr. Nakayama's custom product costs over a million yen.  
I found a product from a company we have previously worked with, and I would like to know your evaluation.  
https://www.tokyokeiki.jp/products/tka/detail.html?pdid=149  
While my1515 offers 20dB shielding performance in the GHz band, this product provides 60dB attenuation in the UHF band. However, the attenuation is low compared to the free space loss of about 120dB, so it may not be sufficient.  
I will attach the adjustment materials (Shield Box Specifications v2.pptx) used during the teleconference with the manufacturer, the quote from the manufacturer, and the specification document from the order.  
Generally, a single-layer shield is limited to around 60dB. This custom product was designed with a double structure to ensure the required specification of over 96dB. (For the 96dB requirement, please refer to 20201022_WeakSignal.pptx. Most CubeSat transmitters are below 0.8W, so 29dBm - (-66.5dBm) = 95.5dB, rounded up to the nearest integer.)  
The shielding performance is specified from 500kHz to 10GHz, so the Tokyo Keiki shield box is more suitable for UHF line testing than my1515. Since we have previous business experience, I believe the integration would be smooth.  
COM  

**155**  
Please tell me the changes from BIRDS-3 to BIRDS-5.  
Reference:  
155_Birds5_FAB_rev04_20201016(1).pdf  
155_BIRDS5_OBC_rev06_20201225.pdf  
155_FAB_OBC Update RevA.pdf  
OBC  

**156**  
Please tell me the part number of the CPLD on the BPB.  
Reference:  
156_BIRDS4_BOM_Testbed_v2.0.xlsx  
156_Testbed v2.3.zip  
OBC  

**157**  
Please share the frequency adjustment guide.  
The domestic adjustment will start almost simultaneously with the submission of the API to the Ministry of Internal Affairs and Communications. It is better to inform the regional bureaus of the Ministry in advance.  
https://www.tele.soumu.go.jp/resource/j/freq/process/freqint/001.pdf  
Frequency Application  

**158**  
Please share the Space Activity Law handbook.  
https://www8.cao.go.jp/space/application/space_activity/application.html  
Safety Review

**159**  
We are using NASTRAN for thermal design, but I would like to request papers and data regarding radiation.  
Regarding conduction, should we manufacture STM and verify the validity of the model through thermal vacuum testing?  
Using NASTRAN for detailed analysis is good, but since we will not perform attitude control on a 1U CubeSat, I think it’s acceptable to simplify the analysis with 2 nodes (internal and external) or 3 nodes (internal, external, and battery).  
If a detailed thermal model is to be created, the values for contact heat conduction need to be obtained from thermal equilibrium testing, so some testing will be required.  
Since there are heat-generating components in this case, the testing will help us understand how much heat is trapped and what temperature it can reach. STM can be conducted with a dummy board, but placing heat sources will create a temperature gradient, resulting in a more accurate thermal model. I believe that conducting both testing and analysis will be beneficial for studying thermal design.  
However, since STM requires having some degree of boards ready at this stage, it is necessary to coordinate with the electrical systems for development.  
Other


**160**  
What are the deadlines for Phase 0, 1, 2, and 3?  
Is this the time required for safety review?  
If passing through a private company, after document creation, the vendor’s document review and revision will take about half a month to one month. After that, the structural review and revision will take 2 weeks, and the safety review and revision will take another 2 weeks. After everything is closed, a chairperson’s approval meeting will be held, so the entire process will take about 1.5 to 2 months.  
If referring to the FM development period from Phase 012 to Phase 3, for BIRDS-2, Phase 012 ended in September, development took place in October and November, FM environmental testing occurred in December, the review documents were submitted, and Phase 3 review was in February.  
For BIRDS-3, Phase 0123 is a one-time review. For BIRDS-4, Phase 012 is in October, and Phase 3 is the following year in September. Since the FM design and testing methods are finalized during the Phase 012 review, it takes 1 month for manufacturing, 1 to 1.5 months for assembly and verification testing, 1 month for environmental testing, and after completion, review documents are submitted.  
Safety Review

**161**  
Can you send me the reference documents for when writing the MIUL, such as [CR-99117 JAXA Space Station Program Material and Process Requirements Document] and [CR-99218 JEM Material Selection List]?  
The reference documents are only available within JAXA and the contractors and are not publicly available. You can only obtain or view them by signing a contract with JAXA and undergoing a review. Basically, based on the reference documents, JAXA or the contractor will provide individual feedback to developers.  
Safety Review

**162**  
Is it acceptable to use MIUL as stated in MSFC-HDBK-527F or MAPTIS2?  
For CubeSats, MIUL lists the satellite as a single object and does not specify individual materials. If you wish to use special structural materials, you need to check with JAXA or the contractor, who will decide on their use based on reference materials.  
Safety Review

**163**  
Does MIUL list all the materials used in the satellite, including parts inside the camera and semiconductors?  
It lists the satellite as a single entity.  
Safety Review



**164**  
Do we need to collect material certificates for all materials?  
Material certificates are required primarily when using FR4 substrates on the outer surface. The reason FR4 material certificates are necessary for use on the outer surface is that the outer panel is identified as a Fracture Critical Part (refer to FCE N-2). When identified as a Fracture Critical Part, it is necessary to confirm through structural analysis that it has sufficient strength, is manufactured with appropriate processes and materials, and is assembled and managed with appropriate processes, all of which should be confirmed through material certificates, assembly procedures, and records. It is also required to verify through vibration testing that the flight item has been properly manufactured and is in good condition.  
Material certificates are also required for fasteners that are part of the load path. If no material certificates are available, vibration testing at a level with the MWL can be performed as a solution (refer to FCE L-2-1, L-5).  
Safety Review

**165**  
The hazard report template for Phase 1 09-12 has not been made public. Can the writing style be decided individually?  
09-12 refers to SHR and UHR. These are formatted according to JAXA and NASA guidelines and are not publicly available. They can be obtained after the contract is signed. SHR lists the basic content of hazards, controls, and verification methods, where you check corresponding items and apply verification documents. SHR has recently been updated to a new format in line with the latest NASA safety document revisions, so it may be better not to refer to older versions. UHR also has a defined format for structural failure, battery rupture, misdeployment of deployables, RF emissions, etc., and the contractor can provide the format. Similar to SHR, it includes hazard causes, control methods, verification methods, and verification documents, and to make it clearer for the reviewer, diagrams and tables related to hazard verification should be included as attachments. A draft of this is also available.  
Safety Review



**166**  
Regarding hazards, section 4.2.2.1 of JX-ESPC-101132-D lists only four standard hazards, but this document lists fourteen. Is this because the hazards required for small satellites and other satellites are different?  
In section 4.2.2.1 of JX-ESPC-101132-D, standard hazards are listed as "examples of responses" and include 14 items.  
Safety Review

**167**  
Is it better to clearly document the hazard report using FTA?  
Refer to the SAR available in BIRDS Open Source.  
Safety Review

**168**  
A glass bandpass filter and camera are used. Does this correspond to the standard hazard "Prevention of glass and other fragments"? Also, it appears that BIRDS-4 does not have a cover on the lens, but how was this approved?  
When using glass, there are three possible ways to address this: 1) The glass is encapsulated, 2) The design ensures no load is applied, 3) Other methods to control it. If a cover is used to enclose the glass, ensuring that fragments do not scatter if it breaks, the structure should be demonstrated in SHR with supporting verification documents. If no load is applied, this state should also be demonstrated in SHR with supporting verification documents. In the case of BIRDS, other verification methods were used to control the shatterable material in UHR for structural failure, and it was confirmed that the glass would not break during vibration testing. However, after vibration testing, damage or breakage must be checked.  
Safety Review

**169**  
I would like to share the SAR document.  
Refer to the SAR available in BIRDS Open Source.  
Document according to the format provided by the contractor.  
Safety Review



**170**  
**ADS (Attitude Determination Subsystem)**  
How were the permanent magnets and hysteresis dampers procured?  
- Manufacturer name  
- Specification items  
For the hysteresis damper, the size needs to be specified.  
- ALNICO 5  
[ALNICO 5 Link](https://www.digikey.jp/productdetail/ja/standex-meder-electronics/ALNICO500-19X3.2X3.2MM/374-1130-ND/695282)  
- HYmu80 Hysteresis Damper (length 4 cm, diameter 0.2 cm, radius 0.1 cm)  
[HYmu80 Link](https://www.alibaba.com/product-detail/Super-Nickel-Alloy-Permalloy-80-HyMu80_1600059517184.html?spm=a2700.galleryofferlist.normal_offer.d_titlet.23fb7c92CLIl7N)  
Mission

**171**  
**TCS (Thermal Control System)**  
- Has BIRDS used thermal control elements in the past (e.g., heaters, Peltier blockers, etc.)?  
- TCS  
The BIRDS series has used battery heaters, but based on orbital temperature data, it is known that the heater doesn't turn on. Therefore, from BIRDS-5 onwards, heaters are not used.  
The heater model number is as follows:  
KHLVA-102/10  
[Heater Model Link](https://www.jp.omega.com/pptst/KHRA-KHLVA-KHA-SERIES.html)  
Others

**172**  
- In BIRDS-4, materials other than aluminum are used in the frame. What materials are used and for what purpose?  
- STR  
In BIRDS-4, there was a mission where the structural frame was used as the antenna, so some parts needed to be insulated. PEEK material was used, but you don’t need to worry about that. In BIRDS-5, everything uses the same aluminum material.  
Structure



**173**  
Should the documents submitted to the Ministry of Internal Affairs and Communications (MIC) be prepared before the JARL documents?  
The application documents for JARL can be done first without any issues. If there are no existing ground stations, the IARU documents do not require a ground station call sign. However, it is expected that a ground station call sign will be necessary during FM development (to designate the ground station call sign as the recipient call sign in the downlink packet). In that case, if you explain the situation to the General Communications Bureau, it is possible to secure the call sign in advance.

**174**  
What parameters need to be entered for the following?  
- From the Frequency Adjustment Document  
  - Effective Isotropic Radiated Power (EIRP) of the satellite transmitter  
  - Detailed adjustment range of the satellite communication equipment (UHF communications equipment)  
  - Noise temperature of the communication equipment mounted on the satellite (UHF communications equipment)  
- From the Line Design Document (8.2.4)  
  - Reference bandwidth  
  - Modulation loss  
  - Noise bandwidth  

**Satellite Transmitter's Effective Isotropic Radiated Power**  
Effective Isotropic Radiated Power (EIRP) is calculated using the transmission power (Ptx) of the communication equipment, cable loss (L), and antenna gain (G), and is expressed using the following formula:  
EIRP[dBm] = Ptx[dBm] - L[dB] + G[dBi]  

As can be seen from this formula, EIRP is a value that comprehensively evaluates the transmitting side's capability and represents the radiation equivalent to a transmitter with an EIRP[dBm] output when connected to a lossless cable and a virtual isotropic antenna (0[dBi]). The antenna gain used in the EIRP calculation is typically the maximum gain of the antenna.

**175**  
I need the antenna pattern diagram from Kyushu Institute of Technology.  
Information about the antenna pattern for 436CP42UG, including both the 1-stack and 2-stack cases, is included in the attached file. Please refer to the attached file to confirm the antenna pattern for each stack configuration.  
Reference: 175_BIRDS_GS_Antenna_M2.pdf  

**176**  
- **Battery Screening Test**  
It is required to follow the JSC-20793 document as per JEM 4.2.2.2 (4), but is it necessary to conduct all the tests outlined in the JSC-20793 document exactly as per the procedure? Also, could you provide information on how the EM tests were carried out at Kyushu Institute of Technology?  
- **Magnetic Forces**  
Regarding the permanent magnets and magnetic sensors that are planned to be mounted on the satellite, it was mentioned during the September camp that the magnetic force would be demonstrated through analysis. Is it correct to understand that magnetic force measurements are not necessary?  

**Battery Screening**  
For safety reviews, the primary focus is on the FM (Flight Model) parts. Only when necessary to demonstrate the health of the FM is the EM (Engineering Model) test data required. While many battery cells are tested during screening, only the results from the cells that will be used in the FM need to be submitted.  

The screening tests are based on JSC-20793, and vacuum exposure and vibration tests are required. Before and after testing, the following evaluations should be performed: visual inspection, odor check, mass measurement, cell open-circuit voltage (OCV) measurement, charge/discharge profile, discharge temperature profile, and discharge capacity measurement. The changes in OCV and mass should be below 0.1%, and the capacity change should be below 5%.  

Cells from the screening can be selected for FM, backup, EM, or table satellite testing, but for the EM, it must be a cell that has been screened.  


**177**  
**[Vibration Test]**  
After the vibration test, torque mark checks are performed on the housing, and destructive testing is done on the glass. However, in the case of FM (Flight Model) testing, the spacecraft cannot be disassembled. In this case, how is the inspection carried out at Kyushu Institute of Technology?  

**[Battery Screening]**  
In the battery screening procedure, JSC-20793 Rev D 4.2.3 and the attached "24_Battery Verification Report" (p24 (5) Test method) are referenced.  

**Vibration Test**  
For BIRDS-5, the outer panels have been processed with holes to allow torque mark verification on the main structural bolts. In other satellites, it is assumed that the bolt heads are in contact with the inner surface of the outer panel. In this case, "If the bolts loosen, the outer panel will be pressed, causing deformation or widening of the gap. After the vibration test, the gap between the outer panel and the structure is checked to confirm no deformation has occurred."  

For other satellites, "The outer panel is removed after the vibration test to check the torque mark on the bolts securing the main structure. After verifying the torque marks, the outer panel is reassembled according to the assembly procedure manual. Since the assembly is done following the manual, the condition before the vibration test is restored."  

**Battery Screening**  
For safety reviews, the focus is on the FM parts.


**178**  
I am searching for bypass diodes to use for the solar cell substrate, but the earliest delivery date is February next year. The parts I am considering are as follows:  
MBR120VLSFT1 - Schottky Power Rectifier, Surface Mount, 1.0 A, 20 V, SOD-123 Package (onsemi.com)  
The alternative part I am considering is as follows:  
MBR1020LL.p65 (panjit.com.tw)  
This alternative part has a temperature range of -55°C, while the usual parts have a range of -65°C. There is no issue with this.  

**EPS**  

**179**  
Regarding the occupied frequency bandwidth in the experimental plan, I have not yet been able to measure the actual value of BIM1H. Also, the spectrum analyzer is broken, so I would like to know if it is possible to receive measurement results from Kyushu Institute of Technology.  
Reference: 179_BIRDS-4 Downlink Measurement Data.pdf COM 〇


**180**  
On page 6 of the document, the beta angle is shown as 0 degrees for June 1, 2021. However, STK shows a different beta angle based on the TSURU TLE data, which differs from the data in my document. Can you confirm this discrepancy?  
The power generation values shown on pages 6 and 7 of the document are under the same conditions (beta angle of 0 degrees, sunlight duration of 3,230 seconds). However, the power generation values are 1,790 and 2,507, respectively. Can you confirm this discrepancy?  
Reference: 180_Power-Budget-Analysis-for-1U-satellite_Final.pdf  
**EPS** 〇  

**181**  
It has been discovered that there is insufficient control on a satellite using another BIRDS5 bus, and adjustments are being made, including by Kyushu Institute of Technology. Design changes may be necessary.  
The FET on the solar cell side was used for over-discharge control, but it was found that current flows through the parasitic diode of the FET, meaning that the FET does not block the circuit. Additionally, for other satellites, adding a diode is being considered.  
It was found that simply closing Dep.SW4 allows current to flow through the resistance between the transistor's emitter and base.  
For BIRDS, the over-discharge hazard control on the solar cell side of the battery is configured with the following three inhibits:  
- Inhibit#1: FET switch on the battery return side (SepSW2)  
- Inhibit#2: FET switch on the solar cell input side (SepSW1)  
- Inhibit#3: Blocking diode (mounted on the FAB)  

Regarding this inhibit configuration, there is a discussion that Inhibit#2 may not function as an inhibit due to current flowing from the Drain to the Source via the parasitic diode of the Pch MOSFET (Inhibit#2) in the direction of the current shown in the diagram.  
Additionally, when Dep SW2 on the GND side is closed, current flows through the internal resistance of the transistor to the red line (as shown in the diagram below). This causes over-discharge on the red line, meaning appropriate control is required.  
**Safety Review** 〇



**182**  
When Dep SW2 on the GND side is closed, current flows through the internal resistance of the transistor to the red line (as shown in the diagram below). Regarding this, can we confirm that the conclusion is "the leakage current is sufficiently small"?  
This is the approach we are proceeding with.  
Reference: 182_DepSW_電流.png  
**Safety Review** 〇  

**183**  
QT is considering using the Dsub25 pin of the Peltier chamber. It has been confirmed that the exterior of the chamber has a male Dsub25 connector, but I would like to confirm whether the interior Dsub25 is male or female.  
Please confirm the polarity of the Dsub25 inside the Peltier chamber. I understand that the exterior is male, but could you confirm whether the interior is male or female?  
The connector inside the chamber is female, and the exterior is male.  
**Environmental Test**

**184**  
We are planning to use a vibration test machine outside of Kyushu Institute of Technology. Please verify if there are any issues with the specifications.  
We will cross-reference it with the JAXA requirements document.  
**Environmental Test**

**185**  
What is the material of the black paper-like substance used in the battery screening test?  
Reference: 185_Battery Screening .jpg  
**EPS** 〇  

**186**  
We are currently preparing the Phase 3 BVR, and under the "Final Checkout after Assembling CubeSat" section, it is necessary to describe the method for measuring charge and discharge characteristics and the results when the satellite is assembled. How does Kyushu Institute of Technology measure the charge and discharge characteristics?  
After FM assembly, charge and discharge characteristic measurements are not conducted. Only OCV (Open Circuit Voltage) measurements are performed.  
**Safety Review**

**187**  
Currently, we are coordinating the evaluation with JAXA and MIUL. We reported the combination of antenna elements and lead wires (Cu wire with Sn melting plating), and since tin is a restricted material, we decided to use Cu wire. However, it was pointed out that SK85, the material of the antenna element, is prone to corrosion, and the combination of dissimilar metals would exacerbate corrosion.  
Similar to Birds, we are using SK85 hardened steel strips, but for FCE, we are not using hardened steel.  
Additionally, since I believe a contract has been made with the contractor regarding the safety review, I think it would be best to first discuss the countermeasures with them.  
**Safety Review**

**188**  
Regarding the packing procedure manual, Delivery Procedure, could you please share the BIRDS-5 materials?  
Refer to the BIRDS-5 packing procedure manual.  
**Safety Review**  


189  
For satellite YOMOGI, there was an offer from Kazakhstan and Thailand that their satellite networks might cause interference. Please provide information on the response and the countermeasure plan for this.  
- Frequency application



