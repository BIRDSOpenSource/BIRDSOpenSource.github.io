---
title: How to Flash the Software
# nav_order: 
# parent: How-to guides
layout: default
lang: en
---

# Flashing the Software onto the Microcontroller

## Overview

This guide explains how to flash the compiled software onto the microcontroller using MPLAB IPE v6.0 and a PICkit3 programmer.

> **Note:** Previous BIRDS projects may have used different versions of MPLAB IPE. Ensure that your setup is consistent with your project's requirements.

## Before you start

Before you proceed, ensure:

* You have MPLAB IPE v6.0 installed on your system.
* You have a functioning PICkit3 programmer.
* The microcontroller is properly mounted on the subsystem board.
* The compiled `.hex` file is available.
* The necessary connections between the PICkit3 and the board are correctly set up.

## Flashing the Microcontroller

1. **Connect the PICkit3 to the board and computer.**
   
   - Plug the PICkit3 into the appropriate programming header on the subsystem board.
   - Connect the PICkit3 to your computer via USB.

2. **Launch MPLAB IPE.**
   
   - Open MPLAB IPE v6.0.
   - In the `Device` dropdown, select the correct PIC microcontroller model (e.g., `PIC18F67J94`).

3. **Establish communication with the device.**
   
   - Click the `Connect` button.
   - Verify that MPLAB IPE successfully detects the microcontroller.

4. **Load the compiled firmware.**
   
   - Click `Browse` in the `Hex File` section.
   - Navigate to and select the compiled `.hex` file.

5. **Configure programming settings.**
   
   - Ensure `Erase All Before Program` is selected.
   - Verify that the correct voltage settings are applied (refer to board documentation).
   - Disable `Code Protect` options unless needed.

6. **Flash the microcontroller.**
   
   - Click `Program` to write the firmware to the microcontroller.
   - Wait for the process to complete and check for success messages in the output log.

7. **Verify the flashed firmware.**
   
   - Click `Verify` to ensure the program was correctly written.
   - If verification fails, check wiring and try again.

8. **Disconnect and test.**
   
   - Close MPLAB IPE.
   - Disconnect the PICkit3.
   - Power up the board and check if the software is functioning as expected.

## See also

* [MPLAB IPE User Guide](https://www.microchip.com/)
* [PICkit3 Documentation](https://www.microchip.com/)
* [Troubleshooting PICkit3 connection issues]





[Previous]({{site.url}}/how-tos){: .btn .btn-purple }
[Next]({{site.url}}/how-tos){: .btn}