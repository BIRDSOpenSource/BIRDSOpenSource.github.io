---
title: EPS FAQ
parent: For EPS Team Members
layout: default
lang: en
---

# EPS FAQ
{: .no_toc }

time to complete: 7 mins
{: .label}


<details markdown="block">
<summary>Table of Contents</summary>

- Table of Contents
{:toc}

</details>



{: .label} 
eps 

In designing the mission circuit of the Birds system, what are the conditions for the supplied voltages and signal inputs and outputs? | Depending on the design of the BUS system, the BIRDS satellite can use 3.3 V, 5 V and Battery line for the mission system, while the Battery line voltage will vary between 3.8 V and 4.2 V, depending on the satellite. The maximum current value that can be used by the mission system depends on the design of the satellite. |         |

47. Voltage Fluctuation Information

Question: What is the degree of fluctuation in the 5V power bus?
Response: There is no specific information available about fluctuations in the 5V power bus.


Does the mission board need an A/D converter for digital output? Is an analogue output of the measurement results sufficient? | In the case of BIRDS, two methods are used: digital data is sent from the Mission system via UART or to the Flash Memory on the OBC board using SPI. |       |

How is the discharge test conducted, and are there other ground tests necessary for the EPS system? | The battery is the most critical component for satellite safety. Testing the battery and verifying the operation of the deployment switch after satellite assembly are key ground tests for the EPS system. However, safety reviews may result in changes, so specific test items need to be confirmed in consultation with JAXA. | Attached are materials summarizing the types and flow of battery tests conducted at Kyushu University.     |


How is the electronic load used in the cell screening test? Should CV mode be used to prevent overcharging above 1.6V? Why does the voltage in the attached graph change above 1.6V when using CV mode?| Battery screening requires an electronic load, multi-range power supply, data acquisition system, LabVIEW-based test control software, and test batteries. The electronic load is used in CC mode during battery discharge and is controlled by LabVIEW software. The program also controls the DC power supply. For NiMH batteries, the -dv/dt method is used to safely end charging, taking 10 minutes to detect full charge and stop.
Screening tests at room temperature in CC mode are recommended. The maximum voltage can be controlled at 1.6V. Conduct charge/discharge tests at a rate of 1C. |   |

In the LabVIEW diagram for the battery screening test of BIRDS-III, the DAQ Assistant was used to control voltage and current values. Was the digital conversion module of the DAQ used?
Instead of using a digital conversion module, I’m considering controlling the electronic load device via VISA communication from LabVIEW. Has this method of control been used at Kyutech?
It is possible. It was done this way in the past. Kikusui's electronic load device was controlled using VISA communication.

What types of batteries were used in the BIRDS-III satellite, and how was their performance monitored?
The BIRDS-III satellite used lithium-ion batteries. The battery performance was monitored in orbit using telemetry data, which included voltage, current, and temperature measurements.

I want information about solar cells and batteries.
Check the BIRDS GitHub:
https://github.com/BIRDSOpenSource

What is a bypass diode for a solar panel? One bypass diode is necessary for a solar cell. However, for one side of the two solar cells on the BIRDS panel, as shown in the attached photo (yellow circle), there is no bypass diode. How will you handle inhibition for this cell?
To prevent over-discharge, blocking diodes are considered on the solar cell side. While solar cells have built-in bypass diodes, these are not intended for the solar cell itself.
The internal bypass diode is used when two solar cells are connected in series.
For the lower solar cells, at least one external bypass diode must be attached to the panel board.
In some panel boards, the direction of series connection is reversed, and internal bypass diodes cannot be used. In such cases, two bypass diodes must be attached to the panel board.
External bypass diodes can be confirmed in the circuit diagrams of the panel boards for the BIRDS project.

---

**EPS61**  
Regarding the details of the test, particularly the method of setting the cells in the chamber:  
- In the photo below, it appears that the cells are bundled together with Kapton tape. Is it not possible to set the cells individually?  
- For example, we are considering using an Eneloop plastic case, as shown in the second photo. In this case, we believe it would be better to open the top of the case to maintain the cells under the same pressure. What do you think?  
- When setting up the cells, ensure that the cell labels are visible.  
- To maintain pressure on the cells, the top of the case may need to be opened.  
- It may be preferable to place all the batteries in a single plastic case.

**EPS62**  
Regarding grouping the cells:  
- Check the DC resistance in the third cycle.  
- Confirm the capacity in the third cycle.  
- Confirm the OCV (Open Circuit Voltage) in the third cycle.  
- After summarizing the data, confirm the mass in the third cycle.  
However, the detailed criteria for grouping remain unclear.  
First, select cells with the same DC resistance, and then prioritize groups with larger capacities.  

---


**EPS63**  
Regarding cell screening:  
Was the reason for conducting the vacuum leak test before the vibration test only due to schedule adjustments?  
Yes, it is possible to perform the vibration test first and then the vacuum test, and there should be no problem. However, it is necessary to follow the procedures established in previous BIRDS projects.

**EPS64**  
As I understand it, the thermal test involves leaving the cells in the chamber under the following conditions:  
- Temperature: +60°C or higher  
- Test duration: 2 hours or longer  
Is this acceptable?  
Also, how many cells should be tested?  
Furthermore, when should the test be conducted? Is anytime acceptable?  
Yes, thermal or high-temperature testing at +60°C is required for NiMH batteries (cells). At least two batteries are needed, as this constitutes a sample test for the battery lot.

---

**EPS65**  
How were the capacity, charge-discharge characteristics, and discharge temperature measured before and after the thermal test?  
Battery screening can also be performed before and after the thermal test, just as it is done before and after the vacuum test.  
In this case, two batteries are placed in the dispatch chamber at +60°C for two hours. Record the battery's temperature profile via the K-type thermocouple in the battery holder. Additionally, obtain and graph the temperature profile data.  
However, temperatures exceeding +80°C may cause issues.

**EPS66**  
Were charge-discharge cycles not conducted? If not, how was the capacity measured?  
First, conduct battery (cell) screening at room temperature for only two cells.  
Before that, measure all OCVs, mass, battery dimensions, and battery lengths.  

**Thermal Test:**  
Conducted at +60°C in the dispatch chamber for two hours.  
This follows the same procedure as described in section 1.  
Charge-discharge cycles were not conducted inside the thermal chamber. However, performing charge-discharge cycles inside the chamber is also acceptable.  
By conducting battery (cell) screening at room temperature before and after the thermal test, data can be obtained. Using the previously provided MATLAB, charge capacity, discharge capacity, and DC resistance values can be obtained.

**88**  
Regarding the pump for vacuum sealing RTV, could you provide the part numbers for the pump and pressure gauge shown in the attached diagram?  
Additionally, I would like to know the part numbers for the hoses connecting Valve A, B, and the Valve, or if possible, a photo where the part numbers can be identified.  
- EPS 

---

**EPS67**  
I would like to know the interior of the battery box for the vibration test. Is there a photo available? Or, if possible, I would like to know the dimensions of the interior of the box.  
Additionally, I would like to confirm the procedure for the vibration test again.  
- Measure the OCV and mass before and after vibration, and check the cell appearance. Use a digital multimeter to measure the OCV to four decimal places. Can Kyutech measure the OCV with the same precision?  
- Attach one photo of the battery box for vibration testing to the email.  
Measurement cannot be performed during the vibration test, but it can be done before and after.  
We plan to provide a multimeter and other equipment.  
Yes, we can also perform the measurement. There is no issue.  
The battery qualification time requires testing only two axes, which are the X-axis and Z-axis.

---

**EPS68**  
First, regarding the battery box for the vibration test, I would like to know the exact capacity of the cells. Also, is the size of the battery box twice that of the BIRDS battery box? If so, I assume the capacity is 12 cells.  
Next, regarding the digital multimeter, the OCV is being measured as shown in the attached photo. Is there equipment capable of measuring OCV with the same precision (to four decimal places) as ours? If the multimeter shows values to three decimal places, does this...  
The previous battery box had a capacity of 12, but for BIRDS-5, a box with a capacity of 18 batteries was used. We plan to use the same battery box.  
Such a power meter is available, but currently, BIRDS-5 is in the FM stage and in use. Therefore, you may need to bring your own multimeter.  



--- 
**50. Data Measurement Frequency During Battery Screening Test**  
- **Question:** What is the data measurement frequency during the battery screening test?  
- **Response:** It is better to collect voltage, temperature, and capacity data every second. Due to system noise, the screening process and discharge results may not always appear smooth. Batteries with smoother discharge results should be selected whenever possible.  

**51. Outer Panel Substrate Material**  
- **Question:** Is the outer panel substrate material FR-4?  
- **Response:** Yes, FR-4 is acceptable.  

**52. OCV Measurement Method for Cell Screening Test**  
- **Question:** How is the OCV measured during the cell screening test? When using a digital tester, is it acceptable that the OCV depends on the cell's charge level?  
- **Response:**  
  - According to JAXA’s battery (cell) screening safety review, environmental tests (vacuum and vibration tests) must be conducted. Open Circuit Voltage (OCV) is defined as the potential difference between the positive and negative electrodes when no load is connected.  
  - Voltage data can be acquired in an Excel file during charge/discharge cycles.  
  - It is recommended to measure cell voltage before and after environmental tests, verify the OCV with a digital multimeter, and ensure the values differ by less than 0.1%.  

**53. Measuring DC Resistance and Data Frequency in Battery Screening**  
- **Question:** What is the frequency for data measurement during the screening test? How should DC resistance be measured?  
- **Response:** Refer to the "Battery (Cells) Screening Procedures and its Verification Report V1.0.pdf" for detailed guidance.  

**54. Ignored Error Values During Battery Screening**  
- **Question:** Can unresponsive values during the battery screening test be ignored as errors?  
- **Response:** A few unresponsive values can be ignored, but if they occur frequently, the system should be inspected, and noise should be reduced.  

**55. Battery Screening Test Using Two-Stage Load Method**  
- **Question:** In the two-stage load method, only 2A discharge is planned. However, it is impossible to obtain data for the first 10 seconds of discharge. What does "C" mean? Is it equivalent to C = 1/2A?  
- **Response:**  
  - In a two-layer DC load system, the battery should discharge a small current for 10 seconds, followed by a high current for 3 seconds. This method enables internal resistance measurement and condition evaluation.  
  - The C-rate is defined by how quickly a battery charges or discharges compared to its maximum capacity. For example, a 2000mAh battery discharged or charged at 2A will take 1 hour (1C rate). Similarly, at 1A (0.5C rate), it will take 2 hours.  
  - It is recommended to use either 1C or 0.5C for accurate performance evaluation.  

**56. Impedance Check During Full Charge to Full Discharge Cycle**  
- **Question:** During impedance checks from full charge to full discharge, a two-stage load method requires a 10-second discharge at 1A, which causes significant voltage changes. How can this issue be resolved? Can the impedance check duration on the graph be ignored?  
- **Response:**  
  - The two-stage method involves applying two sequential discharge loads with different currents and durations: 10 seconds at low current followed by 3 seconds at high current.  
  - To address the issue of voltage changes during the 10 seconds, consider:  
    1. Using a more precise data acquisition system to minimize noise during transitions.  
    2. Ignoring the impedance check time on the graph if the measurements do not affect overall results.

**59. Voltage Spike During Initial Discharge in Screening Tests**  
- **Question:** After completing the first cycle of 15 cells, an issue was found in the pre-discharge graph. At the start of the discharge, the voltage of some cells rises by about 10mV, always occurring 40–80 seconds after the start but never during full discharge. How should this be addressed?  
- **Response:**  
  - **Possible Causes:** This voltage increase is likely due to noise or transient reactions in the charger-discharge system rather than an inherent battery issue.  
  - **Recommended Actions:**  
    1. **Noise Isolation:** Verify and mitigate noise sources in the system. Use shielding or better grounding to minimize interference.  
    2. **System Calibration:** Ensure the charger-discharge system is calibrated correctly.  
    3. **Data Analysis:** Ignore the transient spike in the graphs if all cells exhibit the same phenomenon and the behavior does not impact subsequent discharge characteristics.  
    4. **Testing Consistency:** Repeat the test with another set of cells to confirm reproducibility.  

---

**60. Vacuum Leak Test Procedures for Cell Screening**  
- **Question:** Confirm the procedures for conducting a vacuum leak test for cell screening.  
- **Response:** The procedure is as follows:  
  1. **Initial Measurements:**  
     - Measure mass, OCV, and capacity during the first charge-discharge test.  
  2. **Preparation:**  
     - Prepare a board covered with Kapton tape and align all 50 cells.  
  3. **Setup in Vacuum Chamber:**  
     - Place the cells in the chamber.  
     - Set the chamber pressure to **1.0 × 10^-3 hPa**.  
  4. **Vacuum Exposure:**  
     - Leave the cells under high vacuum for 6 hours.  
  5. **Post-Vacuum Testing:**  
     - Measure the internal DC resistance during the charge-discharge test.  
     - Record results before and after the test.  
  6. **Physical Measurements:**  
     - Measure and document the length and diameter of the batteries before the second charge-discharge cycle.  
  7. **Second Cycle:**  
     - Quickly begin the second charge-discharge test after recording all physical parameters (OCV, mass, diameter, length).  
     - Record and compare results for consistency.  

**61. Details on Setting Cells in the Chamber for Testing**  

- **Question:** Can the cells be set individually instead of bundling them with Kapton tape? For example, could Eneloop plastic cases be used, and if so, should the top of the case be opened to maintain the same pressure for all cells?  

- **Response:**  
  - **Using Eneloop Plastic Cases:**  
    - Yes, using Eneloop plastic cases is a feasible alternative to bundling the cells with Kapton tape. This approach may provide better organization and allow for easier inspection.  
    - It is recommended to open the top of the plastic cases to ensure uniform exposure of the cells to the vacuum pressure. Closed cases could create uneven pressure distribution, potentially affecting the test results.  

  - **Label Visibility:**  
    - Ensure that each cell’s label remains visible for identification and documentation purposes. This can be achieved by positioning the cells with labels facing outward.  

  - **Pressure Considerations:**  
    - Whether bundling with Kapton tape or using individual plastic cases, the primary goal is to maintain consistent pressure across all cells. Open plastic cases facilitate uniform pressure application and are therefore preferred.  

  - **Recommendation:**  
    - Conduct a preliminary test to confirm that the chosen setup does not introduce additional variables (e.g., thermal or mechanical constraints) that could impact the results.  
    - Document the setup method thoroughly, including any modifications to standard procedures, for reproducibility and traceability.  

**62. Grouping Cells for Screening Tests**  

- **Steps for Verification in the Third Cycle:**  
  1. Confirm the DC resistance of the cells.  
  2. Verify the capacity of the cells.  
  3. Check the Open Circuit Voltage (OCV).  
  4. After summarizing the data, measure the mass of the cells.  

- **Grouping Criteria:**  
  - The grouping process prioritizes:  
    1. **Similar DC Resistance:** Select cells with closely matching DC resistance values.  
    2. **High Capacity:** Among cells with similar DC resistance, give preference to those with higher capacities.  

- **Clarification Needed:**  
  - Since the exact details of the grouping methodology are unclear, it is recommended to:
    - Clearly define acceptable tolerances for DC resistance and capacity values.  
    - Use consistent criteria across all groups to ensure reliability in the test results. 



**64**  
Based on my understanding, the thermal test involves placing the cells in a chamber under the following conditions:  
- **Temperature:** +60°C or higher  
- **Test Duration:** At least 2 hours  

Is this correct?  
How many cells need to be tested?  
Also, when should the test be conducted? Is it acceptable to perform it at any time?  

**Response:**  
Yes, thermal tests at +60°C or higher are required for NiMH batteries (cells). A minimum of two batteries must be tested, as this is a sampling test for the battery lot. Tests can be conducted at any convenient time.  

---

**65**  
How were the capacity, charge/discharge characteristics, and discharge temperature measured before and after the thermal test?  

**Response:**  
Battery screening can be conducted before and after the thermal test, just as it is done for vacuum tests.  
- In this case, place two batteries in the thermal chamber at +60°C for 2 hours.  
- Use a **K-type thermocouple** attached to the battery holder to monitor and save the batteries' temperature profile.  
- Collect temperature profile data and create a graph for analysis.  

**Note:** Temperatures exceeding +80°C could cause potential issues.

**66**  
Was there no charge/discharge cycle performed? If not, how was the **capacity** measured?

First, it is necessary to perform **cell screening** with two cells at room temperature. Before that, measure all the **OCV (Open Circuit Voltage)**, **mass**, **battery dimensions**, and **battery length**.

**Heat Test:**  
Perform the heat test in the dispatch chamber at **+60°C** for 2 hours.  
This follows the same procedure as the previous step.

In the heat chamber, no charge or discharge cycles were performed. However, performing charge and discharge cycles inside the chamber would not be a problem.

By performing **cell screening** at room temperature before and after the heat test, data can be collected. Using the **MATLAB** previously sent, you can obtain data on **charge capacity**, **discharge capacity**, and **DC resistance** values.

**67**  
I would like to know the interior of the battery box for the vibration test. Do you have a photo? Alternatively, if possible, I would like to know the internal size of the box.  
Also, I would like to confirm the procedure for the vibration test.

- Before and after the vibration, measure the **OCV** and **mass**, and check the appearance of the cells. Use a digital multimeter to measure the **OCV** with a precision of 4 decimal places. Is it possible to measure the **OCV** with the same precision at Kyushu Institute of Technology (Kyutech)?
- Place the battery box on the **vibration tester**.  

I have attached a photo of the battery box to the email.  
The measurements cannot be taken during the vibration test, but they can be taken before and after the vibration test. We plan to provide a multimeter and other tools.  
Yes, we can also perform the measurements. There is no problem.  
During the battery certification time, only two axes need to be operated, and these are the **X-axis** and **Z-axis**.

**68**  
First, regarding the battery box for the vibration test, I would like to know the exact capacity of the cells. Also, is the size of the battery box twice that of the BIRDS battery box? If so, I assume the capacity is for 12 cells.

Next, regarding the digital multimeter, as shown in the attached photo, we are measuring the **OCV**. Is there a device that can measure **OCV** with the same precision (4 decimal places) as ours? If the multimeter shows values with 3 decimal places, will it still be acceptable to use our multimeter?

The previous battery box had a capacity of 12, but for BIRDS-5, we used a box with a capacity of 18 cells. We plan to use the same battery box.  
There is such a power meter, but currently, BIRDS-5 is in the FM phase, so it is being used. Therefore, you will need to bring your own multimeter.



**70**  
I would like to know the details about the adhesive testing for space environments.  
Reference: 70_18350913 Sasaki Yuji Master's Thesis Zhao Mengyou.pdf Environmental Testing 〇

**71**  
I would like to confirm the method for grouping the battery cells.  
I believe that the grouping of three cells (3S or 3S2P) was primarily based on the differences in DC resistance. How were the two groups of three cells (2P or 3S2P) combined? Was the DC resistance value deeply considered, or was the capacity also taken into account?  
After completing the battery screening test, I believe the battery cell matching task discussed in the previous email and on Zoom has been finished. First, it is necessary to consider the DC resistance values of the series sets (almost equal, <0.1%). Next, the capacity value (5%) and OCV value (0.1%) should also be considered.

---

**72**  
We are selecting cells for the battery. Could you share the documentation regarding the cell selection for the BIRDS-5 battery for reference?  
I have attached the documentation regarding the Ni-MH battery cell screening.



**74**  
I remember you previously mentioned that among the satellites developed by Kyushu Institute of Technology, there was one where the solar panel adhesive work was outsourced to a contractor. Could you please tell me the name of that satellite?  
Also, could you provide the name of the company that was contracted for the work?  
Regarding the solar cell attachment, the company that was outsourced for the task was a Malaysian company for the "Horyu-4" satellite. It is uncertain whether they can still take orders. Since Sagami Communications has recently conducted training, I recommend contacting them first.  
EPS

**75**  
I have a question regarding the output part of the temperature sensor on the solar panel substrate.  
The first attached photo shows the circuit of the temperature sensor on the +X face solar panel of Birds4. A 1kΩ resistor is connected to the output (out) part.  
As shown in the second attached photo, the datasheet recommends an 800Ω resistor for the output part. Could you please explain why a 1kΩ resistor was used in Birds4 instead of the recommended 800Ω?  
The recommended value for Rs in the datasheet is defined only as the minimum value, so using a 1kΩ resistor is not an issue.  
As for why using a 1kΩ instead of 800Ω is fine, Rs is the resistance that forms the low-pass filter in front of the ADC. As long as the resistance is small enough compared to the input resistance of the ADC, the signal will be transmitted with minimal error. (Referring to the datasheet of the connected ADC, the input resistance is not specified, but the DC Leakage Current is ±1uA max, so for a 1kΩ resistor, the voltage conversion will be a maximum of ±1mV, which is considered smaller than other sources of error.)  
Additionally, a precise 800Ω resistor is generally not available as a commercial product. (You should check the E12 or E24 series.) A resistor of exactly 800Ω would be expensive to obtain, so a more affordable 1kΩ resistor is likely selected.  
EPS



**57. Electrical Systems in BIRD Circuit Boards**  
- **Question:** The power systems like 3V3, GND, 5V, UNREG, and RAW_PWR seem unconnected in the BIRD circuit. Additionally, the UNREG1 output from the OBC/EPS board does not appear to be input to the COM board, making it difficult to evaluate inter-board connections. Is there no issue in this aspect of the circuit? Regarding DEP_SW4, is it correct that to evaluate the current BIRDS-5 boards, connecting the GND portion of SW4 to RBF2_SINK (FAB50 pin 48) solves the problem?  
- **Response:**  
  - **Connection Issues:** While the schematic might show power lines as disconnected, this could be a visual simplification or a design choice to separate power planes for clarity. Ensure all inter-board connections are verified during integration testing.  
  - **DEP_SW4 Adjustment:** It is correct to use RBF2_SINK instead of GND for DEP_SW4. This modification aligns with the operational requirements for the BIRDS-5 boards.  
  - **Evaluation Limitations:** The current boards are designed for basic functional verification, not full system testing. Dedicated connectors and terminals for power input and monitoring are available, but comprehensive testing requires additional configurations.  

**58. DC Resistance Measurement**  
- **Question:** Based on page 4 of the file, is it correct to assume that the low current is 1A and the high current is 2A for DC resistance? Also, does the test involve only cells and an electronic load, without a constant power supply?  
- **Response:**  
  - **Current Settings:** Yes, low current is set to 1A, and high current is set to 2A. For discharging, up to 2A can be used, while 1A is employed for charging.  
  - **Equipment Use:** The setup utilizes only the battery cells and an electronic load. A constant power supply is not required, as the test focuses on discharging until the battery voltage reaches 1V, with 2A (1C) for a 2000mAh NiMH battery.


Is it correct to understand that the analogue signal input system (ADC) is not in the OBC? | BIRDS uses digital communication between the Mission and Bus systems. |      |


I would like to know the maximum permissible power on the Birds-3 mission board, and the position of circuits such as temperature, speed and acceleration sensors on the Birds-3 mission board. | The documents should only be used as a reference, as they vary greatly depending on the design of the satellite; page 3 shows the power consumption of each Mission and pages 4 and 5 show the measured power consumption from the satellite in orbit. | See: 4_BIRDS3_Power Budget.pdf

Is it possible to perform eight temperature measurements in the BIRDS-5 FAB? | Yes, the eight terminals are mainly used to measure the panel board temperature in the BIRDS satellite. TEMP1–TEMP6 are on a 50-pin connector, and TEMP7–TEMP8 are on the +Z panel board connector. |     |


**90**  
Regarding the glass used at Kyushu Institute of Technology for practicing the bonding of solar panels, I understand that it is from Matsunami Glass Industry Co., Ltd. with the size of 80 × 40 mm and thickness of 0.25 mm.  
However, I could not find similar products through online searches.  
Was it custom-ordered due to the size, or if you have an order form from a past purchase, I would appreciate it if you could share it.  
I have attached the estimate for the cover glass purchased for the BIRDS-5 project.  
Reference:  
90_24-07007-21-153 Kyushu Institute of Technology Square Cover Glass 80×40×0.25t 210414.pdf  
EPS ✔  




**93**  
The solder used for the solar panel is a general-purpose lead-free solder available online.  
I would like to confirm if you are using leaded solder, such as to counter whisker formation. Also, I would like to know the type of solder specified when outsourcing.  
When referring to leaded solder, it usually means eutectic solder with 60% tin and 40% lead, which is considered suitable. Products from Monotaro should be fine.  
*Note: The choice of thickness and manufacturer can depend on the worker's preference. The type of flux incorporated may slightly affect workability.*  
Additionally, please cover the corners and edges of the solar cells with RTV for the same reason.  
EPS  



**98**  
I just performed soldering on the solar panel, but as shown in the attached image, flux on the surface of the solder has turned yellow. Is this a problem, or can it be left as is?  
It seems there is no particular problem with it as it is. If you're concerned, it can be easily removed with a Kimwipe dampened with alcohol.  
EPS  

**99**  
① Is the bubble check after solar panel bonding done in a vacuum or thermal vacuum?  
② During the final RTV edge sealing of the solar panel bonding, it was discovered that the seal sometimes peels off as shown in the attached photo. Has there been a similar case at Kyushu Institute of Technology?  
① It is done in a vacuum.  
② In this case, RTV was applied additionally from the top.  
EPS


**100**  
In the measurement of power consumption on the OBC/EPS board, it seems that a stabilized power supply was used. Was the current value calculated from the value displayed on the power supply, or was it obtained from the program and then calculated?  
In the early stages of development, a stabilized power supply was used, and later the current value was checked from the program. When using a stabilized power supply, it should be connected to Raw Power, not the access port.  
EPS  


**103**  
When bonding the solar panel, I heard that to prevent peeling of the panel protection with RTV, vacuuming should be done after RTV curing. How long should we wait specifically?  
The explanation was incorrect. The reason for vacuuming is to prevent peeling during thermal vacuum and vibration tests (early detection is the goal). If peeling occurs, RTV should be applied on top.  
EPS  

**108**  
- Are the solar cells used in BIRDS-4 and BIRDS-5 the same?  
- The energy loss of the diodes is different in the BIRDS-4 and BIRDS-5 materials. Which is correct?  
- Is the COM board the same for both BIRDS-4 and BIRDS-5?  
- Yes, they are the same.  
- I will confirm this.  
- Yes, they are the same.  
EPS  


**106**  
In the BIRDS-4 CDR materials, "Total Power Generation from solar source" is listed as 1120mW, while "Average Energy consumption per orbit" is 1143mWh. This seems to indicate that the power will be depleted. How should this be interpreted?  
"Total Power Generation from solar source" is in [mW], but "Average Energy consumption per orbit" is in [mWh]. If you multiply the solar power generation by 1.5 and compare, the energy margin will be about 800mWh.  
EPS

**113**  
I have a question regarding the measurement of solar absorption rate and total hemispherical emissivity. If there are any interface requirements, could you please let me know?  
- EPS

**117**  
In order to verify the adhesive strength of the RTV on the solar panel, I am considering using a general-purpose chamber according to the adhesive procedure. The procedure states to follow the chamber's manual, but I would like to know the specific conditions under which the test should be carried out. In particular, could you provide detailed conditions, such as how much pressure needs to be reduced?

The pressure should be lowered to a low pressure (1×10^-3 Pa) and maintained for 1–2 hours at room temperature.

**EPS**


**123**  
According to the manufacturer's catalog for Eneloop BK-3KCC, the operating temperature range is -5 to 50°C for discharge, 0 to 40°C for charging, and -20 to 35°C for storage. The monitoring threshold is set to -20 to 60°C. The reason for this is that the low-temperature side is "guaranteed down to -20°C," and the high-temperature side is based on "previous test results." What is the basis for this?

How is the integrity of the battery cell's safety valve and the kill switch on the FAB board ensured in practice?  

The manufacturer's catalog for Eneloop BK-3KCC lists the operating temperature range as -5 to 50°C for discharge, 0 to 40°C for charging, and -20 to 35°C for storage. The reason for setting the monitoring threshold to -20 to 60°C is that the low-temperature side is "guaranteed down to -20°C," and the high-temperature side is based on "previous test results." Kyushu Institute of Technology has tested the same battery used in the artificial satellite in a heat environment exceeding 60°C and confirmed that it continues to operate normally afterward. Moreover, past operational data from Kyushu Institute of Technology’s satellite projects has confirmed operation at 60°C.

The integrity of the battery cell's safety valve and the kill switch on the FAB board can be ensured by testing the EM (Engineering Model) in the same conditions as the FM (Flight Model).  
