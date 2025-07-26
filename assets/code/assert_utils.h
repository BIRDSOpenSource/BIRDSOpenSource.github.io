#ifndef ASSERT_UTILS_H
#define ASSERT_UTILS_H

#include <stdint.h>

void assert_bytes_equal(const uint8_t *expected, const uint8_t *actual, uint8_t len, const char *msg);
void assert_string_equals(const char *expected, const char *actual, const char *msg);

#endif
