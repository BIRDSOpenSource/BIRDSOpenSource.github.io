---
title: How to Compile the Software
nav_order: 
parent: How-to guides
layout: default
lang: en
---

# Compiling the Software

## Overview

This guide explains how to compile the software for the PIC18F67J94 microcontroller using PIC C CCS v5.050. Note that previous BIRDS projects have used v5.076, so compatibility differences may exist.

## Before you start

Before compiling the software, ensure:

* You have installed PIC C CCS v5.050 (or an alternative compatible version).
* The source code is available and properly configured.
* The necessary compiler settings are adjusted for your specific board.

## Compiling the Software

1. **Open the PIC C CCS Compiler**

    Launch the CCS Compiler software and ensure your project directory is accessible.

2. **Load the Project File**

    - Navigate to `File > Open Project`.
    - Select the `.prj` file corresponding to your board.

3. **Verify Compiler Settings**

    - Ensure the correct microcontroller (`PIC18F67J94`) is selected.
    - Check that the compiler is set to the correct optimization and warning levels.
    - Confirm the include paths and library dependencies are correctly configured.

4. **Make Necessary Code Modifications**

    If specific board settings need to be changed, update the following sections in the code:

    ```c
    // Example: Define board-specific configurations
    #define BOARD_VERSION "v1.0"
    #define USE_EXTERNAL_CLOCK 1
    ```

5. **Compile the Code**

    - Click on `Compile` or use the shortcut (`Ctrl + F9`).
    - The compiler will process the files and generate the necessary binaries.

6. **Check for Errors and Warnings**

    - If there are errors, review the error messages and adjust the code accordingly.
    - Warnings should be noted but may not always require changes.

7. **Verify the Output Files**

    After a successful compilation, confirm the following output files are generated:

    - `.hex` file (for flashing onto the microcontroller)
    - `.lst` file (assembly listing)
    - `.sym` file (symbol table)

## See also

* [Flashing the Software onto the Microcontroller]({{site.url}}/how-tos/flash_microcontroller.html)  
* [Writing the Board-Specific Software File](writing_board_software.md)
* [PIC C CCS Documentation](https://www.ccsinfo.com/)





[Previous]({{site.url}}/how-tos){: .btn .btn-purple }
[Next]({{site.url}}/how-tos){: .btn}