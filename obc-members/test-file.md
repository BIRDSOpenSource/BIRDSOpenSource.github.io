---
title: OBC Software Test File
parent: For OBC Team Members
nav_order: 
# permalink: "/obc/test-file"
nav_exclude: false
layout: default
lang: en
---

# 🧪 OBC Software Test File

**Estimated time to read:** 6 minutes  
{: .label }

This page documents the purpose, structure, and usage of the test file used to simulate and validate the On-Board Computer (OBC) software behavior in a controlled environment before deployment to hardware.

---

## 🧠 Purpose

The OBC software test file is written in **C** and provides a mock environment that allows developers to:

- Simulate UART communication with other PIC microcontrollers (COM, RESET, MISSION)
- Send and receive command packets
- Validate command parsing and response generation
- Test memory access logic and data integrity
- Simulate reset and watchdog behavior

This file helps catch software logic issues before they affect the satellite hardware or flight model.

---

## 🗃️ File Overview

| Component               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `test_obc_main.c`      | Main test runner that initializes the OBC environment and simulates execution |
| `mock_uart.c/h`        | Simulated UART communication layer with buffers to emulate data exchange     |
| `mock_flash.c/h`       | Emulated flash memory to verify write and read operations                    |
| `test_commands.c/h`    | Functions for creating and dispatching test commands                         |
| `assert_utils.c/h`     | Custom assert functions for validating results                               |
| `test_data/test_cases.txt` | List of binary or ASCII commands for test input                             |

---

## 🔌 Interfaces Simulated

| Interface      | Purpose                                   | Test Method                                     |
|----------------|-------------------------------------------|-------------------------------------------------|
| UART (to COM)  | Send/receive CW, payload, command packets | Mocked with circular buffers and ISR simulation |
| UART (to RESET)| Simulate watchdog and reset triggers      | Bitfield status and mock flags                  |
| UART (to MISSION) | Exchange mission payload data         | Packet structures and queues                    |
| SPI (to FLASH) | Write/read/verify persistent data         | In-memory flash map and CRC check               |

---

## ▶️ How to Use

1. **Compile using CCS 5.050** (or MPLAB XC32 for compatibility testing):
   ```bash
   gcc -o test_runner test_obc_main.c mock_uart.c mock_flash.c test_commands.c assert_utils.c
````

2. **Run the executable:**

   ```bash
   ./test_runner
   ```

3. **Analyze Output:**

   * Console logs will show the command flow and state changes.
   * Errors are raised if expectations (asserts) fail.

4. **Modify Test Cases:**

   * Add new scenarios in `test_commands.c`
   * Include payloads or flags to mimic actual satellite operations.

---

## 🧪 Example Test Flow

```c
// Inside test_commands.c
void test_cw_transmission() {
    send_command(COMMAND_SEND_CW);
    uint8_t* response = read_uart(COM);
    assert_string_equals("LEOPARD-CW-READY", response);
}
```

---

## 🧱 Build Notes

* C99 or later
* No hardware dependencies — all I/O is simulated
* Can be extended for HIL (Hardware-in-the-loop) testing later
* For integration with MPLAB, rename main to `main_test()` and use test harness

---

## 📎 Future Improvements

* Add CRC verification for command packets
* Expand flash emulation to simulate wear-out
* Integrate with CI tools (e.g., GitHub Actions or Jenkins)


