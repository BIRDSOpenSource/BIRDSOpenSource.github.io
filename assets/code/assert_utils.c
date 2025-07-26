#include "assert_utils.h"
#include <stdio.h>
#include <string.h>

void assert_bytes_equal(const uint8_t *expected, const uint8_t *actual, uint8_t len, const char *msg) {
    for (uint8_t i = 0; i < len; i++) {
        if (expected[i] != actual[i]) {
            printf("[FAIL] %s - Mismatch at byte %d: expected %02X, got %02X\n", msg, i, expected[i], actual[i]);
            return;
        }
    }
    printf("[PASS] %s\n", msg);
}

void assert_string_equals(const char *expected, const char *actual, const char *msg) {
    if (strcmp(expected, actual) != 0) {
        printf("[FAIL] %s - expected '%s', got '%s'\n", msg, expected, actual);
    } else {
        printf("[PASS] %s\n", msg);
    }
}
