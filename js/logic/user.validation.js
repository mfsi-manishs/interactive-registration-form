/**
 * @file user.validation.js
 * @fileoverview This file contains the validation functions for the user registration form.
 */

import { ERROR_MESSAGES } from "../constants.js";

/**
 * Validates a user object and returns an object with error messages for each invalid property.
 * @param {Object} user - the user object to validate
 * @returns {Object} an object with two properties: isValid (a boolean indicating whether the user object is valid) and errors (an object with error messages for each invalid property)
 */
export function validateUser(user) {
  const errors = {};

  if (!user.name.trim()) {
    errors.name = ERROR_MESSAGES.NAME_REQ_TXT;
  }

  if (!user.email.trim()) {
    errors.email = ERROR_MESSAGES.EMAIL_REQ_TXT;
  } else if (!user.email.match(/^\S+@\S+\.\S+$/)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL_TXT;
  }

  return { isValid: Object.keys(errors).length === 0, errors: errors };
}
