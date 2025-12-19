/**
 * @file dom.service.js
 * @fileoverview This file contains the service functions for the user registration form.
 */

import { getFormData } from "./utils/dom.utils.js";

let userForm = null;
document.addEventListener("DOMContentLoaded", () => {
  // This ensures the page is fully loaded before accessing the form.
  userForm = document.getElementById("user-form");
});

/**
 * Sets the text of the submit button in the user registration form.
 * @param {string} text - the text to set on the submit button
 */
export function setUserFormSubmitBtnText(text) {
  userForm.querySelector("button").textContent = text;
}

/**
 * Returns an object containing the values of all input fields in the user registration form.
 * @returns {Object} an object with input field names as keys and their corresponding values as values
 */
export function getUserFormData() {
  return getFormData(userForm);
}

/**
 * Resets the user registration form to its initial state.
 * This includes resetting the form values, removing any
 * associated ID, and setting the submit button text back to "Submit"
 */
export function resetUserForm() {
  userForm.reset();
  userForm.dataset.id = "";
  setUserFormSubmitBtnText("Submit");
}

/**
 * Fills the user registration form with the given user data.
 * @param {Object} user - the user object to fill the form with
 * @property {string} user.name - the user's name
 * @property {string} user.email - the user's email
 * @property {string} user.id - the user's id (used to store the ID in the form's dataset)
 */
export function fillUserForm(user) {
  userForm.name.value = user.name;
  userForm.email.value = user.email;
  userForm.dataset.id = user.id;
}
