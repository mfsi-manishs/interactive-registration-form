/**
 * @file dom.service.js
 * @fileoverview This file contains the service functions for the user registration form.
 */

import { renderUserForm } from "./components/user.form.js";
import { renderUsersTable } from "./components/users.js";
import { UI_STRINGS } from "./constants.js";
import { appState } from "./state/app.state.js";
import { selectAllUsers } from "./state/user.selectors.js";
import { getFormData } from "./utils/dom.utils.js";

/**
 * @type {HTMLElement}
 * @private
 */
let _userFormContainer = null;

/**
 * Returns the element containing the user registration form.
 * @returns {HTMLElement} the element containing the user registration form
 */
export function getUserFormContainer() {
  if (!_userFormContainer) {
    _userFormContainer = document.getElementById("user-form-container");
  }
  return _userFormContainer;
}

/**
 * Updates the user registration form container element with the latest form rendered by renderUserForm.
 * This function is used to reset the form after a user submits the form.
 * Side effects: re-renders the user registration form.
 */
export function updateUserFormContainer() {
  const userFormContainer = getUserFormContainer();
  if (userFormContainer) {
    userFormContainer.innerHTML = renderUserForm();
  }
}

/**
 * @type {HTMLElement}
 * @private
 */
let _userForm = null;

/**
 * Returns the HTML form element for the user registration form.
 * @returns {HTMLFormElement} the form element for the user registration form
 */
export function getUserForm() {
  if (!_userForm) {
    _userForm = document.getElementById("user-form");
  }
  return _userForm;
}

/**
 * Sets the text of the submit button in the user registration form.
 * @param {string} text - the text to set on the submit button
 */
export function setUserFormSubmitBtnText(text) {
  try {
    getUserForm().querySelector("button").textContent = text;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Sets the given row index as selected in the users table.
 * The row index is used to toggle the "row-selected" class on the corresponding table row element.
 * If the given index is negative, the function will remove the "row-selected" class from all table rows.
 * @param {number} index - the index of the row to select
 */
export function setRowSelected(index) {
  try {
    const userTable = document.getElementById("user-table");
    const rows = userTable.querySelectorAll("tbody > tr");
    rows.forEach((row, i) => {
      if (i === index) {
        row.classList.add("row-selected");
      } else {
        row.classList.remove("row-selected");
      }
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Returns an object containing the values of all input fields in the user registration form.
 * @returns {Object | null} an object with input field names as keys and their corresponding values as values or null if some error occurs
 */
export function getUserFormData() {
  try {
    return getFormData(getUserForm());
  } catch (error) {
    console.error(error);
  }
  return null;
}

/**
 * Resets the user registration form to its initial state.
 * This includes resetting the form values, removing any
 * associated ID, and setting the submit button text back to "Submit"
 */
export function resetUserForm() {
  try {
    const userForm = getUserForm();
    userForm.reset();
    userForm.dataset.id = "";
    setUserFormSubmitBtnText(UI_STRINGS.SUBMIT_BTN_TEXT);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fills the user registration form with the given user data.
 * @param {Object} user - the user object to fill the form with
 * @property {string} user.name - the user's name
 * @property {string} user.email - the user's email
 * @property {string} user.id - the user's id (used to store the ID in the form's dataset)
 */
export function fillUserForm(user) {
  try {
    const userForm = getUserForm();
    userForm.name.value = user.name;
    userForm.email.value = user.email;
    userForm.phone.value = user.phone;
    userForm.gender.value = user.gender;
    userForm.dataset.id = user.id;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @type {HTMLElement}
 * @private
 */
let _usersTableContainer = null;

/**
 * Returns the element containing the users table.
 * @returns {HTMLElement} the element containing the users table
 */
export function getUsersTableContainer() {
  if (!_usersTableContainer) {
    _usersTableContainer = document.getElementById("user-table-container");
  }
  return _usersTableContainer;
}

/**
 * Updates the users table container element with the latest users list.
 * @description This function renders the users table with the latest users list from the app state.
 * It first checks if the users table container element exists and if so, updates its innerHTML with the rendered users table.
 */
export function updateUsersTableContainer() {
  const usersTableContainer = getUsersTableContainer();
  if (usersTableContainer) {
    usersTableContainer.innerHTML = renderUsersTable(selectAllUsers(appState));
  }
}
