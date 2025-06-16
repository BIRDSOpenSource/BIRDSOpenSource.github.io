---
title: How to Write Board-Specific Code
nav_order: 
parent: Hardware
layout: default
lang: en
---

# Writing the Board-Specific Software File

## Overview

This guide explains how to write the board-specific software file for the subsystem board. This involves modifying key parameters and configurations to match the hardware setup.

## Before you start

Before writing the board-specific software file, ensure:

* You have the necessary software development tools installed (e.g., MPLAB X, XC8 compiler).
* You have access to the firmware repository.
* You understand the board’s hardware specifications and required configurations.

## Modifying the Board-Specific Software File

1. **Locate the Board-Specific File**
    
    Navigate to the firmware repository and open the file corresponding to your board (e.g., `board_config.h`).

2. **Update the Microcontroller Settings**
    
    Modify the following parameters to match your board’s specifications:

    ```c
    #define CPU_FREQUENCY 32000000  // Set the correct clock frequency
    #define UART_BAUDRATE 9600       // Set the UART communication speed
    ```

3. **Configure the I/O Pins**
    
    Adjust the pin configurations based on your hardware connections:

    ```c
    #define LED_PIN TRISBbits.TRISB0  // Set LED pin as output
    #define BUTTON_PIN TRISBbits.TRISB1  // Set Button pin as input
    ```

4. **Define Communication Protocols**
    
    If using SPI, I2C, or UART, configure the relevant registers:

    ```c
    void initUART() {
        TXSTAbits.BRGH = 1;  // High-speed mode
        BAUDCONbits.BRG16 = 1;
        SPBRGH = 0x00;
        SPBRG = 207;  // Baud rate setting
    }
    ```

### Updating Other Files

Some additional files may require changes to ensure proper integration:

1. **Modify `main.c`**
    
    Ensure the initialization functions for peripherals and board-specific settings are included:
    
    ```c
    void main() {
        initUART();
        while (1) {
            // Main program loop
        }
    }
    ```

2. **Update `Makefile` or Build Configurations**
    
    If using a custom linker script or additional libraries, ensure they are properly linked in your project settings.

## See also

* [Microchip MPLAB X Documentation](https://www.microchip.com/mplabx)
* [PIC18F67J94 Datasheet](https://www.microchip.com/wwwproducts/en/PIC18F67J94)
* [Troubleshooting Common Compilation Errors](#troubleshooting)



[Previous]({{site.url}}/how-tos){: .btn .btn-purple }
[Next]({{site.url}}/how-tos){: .btn}