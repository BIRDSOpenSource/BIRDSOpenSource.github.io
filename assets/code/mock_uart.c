#include "mock_uart.h"
#include <string.h>
#include <stdio.h>

static uint8_t uart_buffer[UART_BUFFER_SIZE];
static uint8_t uart_index = 0;

void uart_init(void) {
    memset(uart_buffer, 0, UART_BUFFER_SIZE);
    uart_index = 0;
}

void uart_send(uint8_t *data, uint8_t len) {
    if (len + uart_index >= UART_BUFFER_SIZE) return;
    memcpy(&uart_buffer[uart_index], data, len);
    uart_index += len;
    printf("UART Send: ");
    for (uint8_t i = 0; i < len; i++) printf("%02X ", data[i]);
    printf("\n");
}

uint8_t uart_receive(uint8_t *buffer, uint8_t max_len) {
    if (uart_index == 0) return 0;
    uint8_t len = uart_index < max_len ? uart_index : max_len;
    memcpy(buffer, uart_buffer, len);
    uart_index = 0;
    return len;
}
