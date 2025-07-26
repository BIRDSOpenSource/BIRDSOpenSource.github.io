#ifndef MOCK_UART_H
#define MOCK_UART_H

#include <stdint.h>

#define UART_BUFFER_SIZE 256

void uart_init(void);
void uart_send(uint8_t *data, uint8_t len);
uint8_t uart_receive(uint8_t *buffer, uint8_t max_len);

#endif
