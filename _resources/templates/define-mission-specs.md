---
title: Mission Definition and Specification Template
parent: Templates and Checklists 
layout: default
lang: en
---

# Templates and Checklists 
{: .no_toc }

> If you need more information about how to fill in this template, read the accompanying [guide]({{site.url}}/how-tos/define-mission-specs.md).
>
> This template includes writing instructions and boilerplate text that you can customize, use as-is, or completely replace with your own text. This text is indicated in {curly brackets}. Make sure you replace the placeholders with your own text.

# Mission Definition and Specification Template

## Mission Definition

### Mission Objective
> Describe the primary purpose of the mission (e.g., Earth observation, communication, technology demonstration, etc.)

### Mission Justification
> Explain why this mission is needed and its potential impact.

### Mission Constraints
- Size: {e.g., 1U, 3U CubeSat}
- Power: {e.g., Maximum power consumption in watts}
- Mass: {e.g., Maximum weight in kg}
- Orbit: {e.g., LEO, SSO, altitude, inclination}
- Lifetime: {Expected mission duration}
- Budget: {Estimated cost and funding sources}

## Mission Specification

### Payload Specification
- Payload Type: {e.g., Camera, APRS, Sensor}
- Payload Capabilities: {e.g., Image resolution, data rate, frequency range}
- Data Requirements: {e.g., Storage, transmission needs}
- Environmental Tolerance: {e.g., Radiation, temperature range}

### Subsystems Requirements

#### Command and Data Handling (C&DH)
- Processor: {Specify processing unit}
- Data Storage: {Specify memory capacity}
- Communication Interface: {e.g., UART, SPI, I2C}

#### Communication
- Frequency Band: {e.g., UHF, VHF, S-band}
- Transmission Power: {e.g., in watts}
- Data Rate: {e.g., kbps, Mbps}

#### Power System
- Solar Panel Configuration: {e.g., Deployable, body-mounted}
- Battery Capacity: {Specify in mAh}
- Power Budget: {Distribution across subsystems}

#### Attitude Determination and Control System (ADCS)
- Stabilization Method: {e.g., Magnetorquers, reaction wheels}
- Pointing Accuracy: {Specify in degrees}

#### Thermal Control
- Thermal Protection: {e.g., MLI, radiators}
- Operating Temperature Range: {Specify in °C}

### Ground Segment
- Ground Station Location(s): {Specify location}
- Uplink and Downlink Capabilities: {Frequency, power, antenna type}

## Verification and Testing
- Environmental Testing: {e.g., Vibration, thermal vacuum}
- Functional Testing: {e.g., Subsystem integration tests}
- Operational Simulations: {e.g., End-to-end mission simulation}

## See also
- [Related Documentation](#)
- [External Resources](#)


[Previous]({{site.url}}/get-started){: .btn .btn-purple }
[Next]({{site.url}}/get-started/reference.html){: .btn}