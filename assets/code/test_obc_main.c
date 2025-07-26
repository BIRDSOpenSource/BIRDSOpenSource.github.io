#include <stdio.h>
#include "mock_uart.h"
#include "test_commands.h"
#include "assert_utils.h"

int main(void) {
    printf("Starting OBC Software Simulation Tests...\n\n");

    test_command_cw_transmission();
    test_flash_write_and_read();
    test_watchdog_reset();

    printf("\nAll tests completed.\n");
    return 0;
}
