/**
 * @file user.controller.js
 * @fileoverview This file contains the controller functions for the user registration form. Handles user-related actions and side effects
 */

import { UI_STRINGS } from "../constants.js";
import { fillUserForm, resetUserForm, setRowSelected, setUserFormSubmitBtnText, updateUsersTableContainer } from "../dom.service.js";
import { addUser, deleteUser, updateEditingUserId, updateUser } from "../logic/user.actions.js";
import { validateUser } from "../logic/user.validation.js";
import { appState } from "../state/app.state.js";
import { selectAllUsers, selectUserbyId } from "../state/user.selectors.js";
import { generateID } from "../utils/utils.js";

/**
 * Handles adding or updating a user in the app's state.
 * Validates the user object and if valid, adds or updates the user in the app's state.
 * If the user is being updated, updates the user and resets the editingUserId.
 * If the user is being added, adds the user to the app's state.
 * Side effects: re-renders the users table and resets the form.
 * @param {Object} user - the user object to add or update
 * @returns {Object} errors - an object with error messages for each invalid property
 */
export function handleAddOrUpdate(user) {
  // validation
  const { isValid, errors } = validateUser(user);

  if (!isValid) {
    return errors;
  }

  const isEditing = appState.editingUserId ? true : false;

  // mutate state with action
  if (isEditing) {
    updateUser({ ...user, id: appState.editingUserId });
    updateEditingUserId(null);
  } else {
    addUser({ ...user, id: generateID() });
  }

  // side effect
  updateUsersTableContainer();
  resetUserForm();
  if (isEditing) {
    setRowSelected(-1); // reset row selection
  }
}

/**
 * Handles editing a user in the app's state.
 * Mutates the app state by updating the editingUserId with the given userId.
 * Selects the user object from the app state using the userId.
 * If the user is found, fills the user registration form with the user data and sets the submit button text to "Update".
 * If the user is not found, logs an error message.
 * Side effects: re-renders the user registration form with the user data and sets the submit button text to "Update".
 * @param {string} userId - the id of the user to edit
 */
export function handleEdit(userId) {
  // mutate state with action
  updateEditingUserId(userId);

  const user = selectUserbyId(appState, userId);
  if (!user) {
    console.error("User not found");
    return;
  }

  const allUsers = selectAllUsers(appState);
  if (!allUsers) {
    console.error("All users not found");
    return;
  }

  const index = allUsers.findIndex((u) => u.id === userId);
  if (index < 0) {
    console.error("User index not found");
    return;
  }

  // side effect
  fillUserForm(user);
  setUserFormSubmitBtnText(UI_STRINGS.UPDATE_BTN_TEXT);
  setRowSelected(index);
}

/**
 * Handles deleting a user from the app's state.
 * Mutates the app state by deleting the user with the given userId.
 * Side effects: re-renders the users table.
 * @param {string} userId - the id of the user to delete
 */
export function handleDelete(userId) {
  // mutate state with action
  deleteUser(userId);

  // side effect
  updateUsersTableContainer();
}
