/**
 * @file dom.utils.js
 * @fileoverview This file contains utility functions for working with the DOM.
 */

/**
 * Returns an object containing the values of all input fields in a given form. The object has input field names as keys and
 * their corresponding values as values.
 * @param {HTMLFormElement} form - the form element to get input values from
 * @returns {Object} an object with input field names as keys and their corresponding values as values
 */

export const getFormData = (form) => {
  // Convert FormData to an array of key-value pairs, then create a new array with all valued trimmed and
  // finally convert this array of key-value pairs to an object.
  return Object.fromEntries([...new FormData(form).entries()].map(([key, value]) => [key, value.trim()]));
};

/**
 * Returns the first element that matches the given selector.
 *
 * @param {string} sel - the CSS selector to match
 * @returns {HTMLElement} the first element that matches the selector
 */
export const qs = (sel) => document.querySelector(sel);
