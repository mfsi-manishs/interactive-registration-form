/**
 * @file userRegFormController.js
 * @fileoverview This file contains the controller functions for the user registration form. Handles user-related actions and side effects
 */

import { renderUsersTable } from "../components/users.js";
import { resetUserForm } from "../dom.service.js";
import { addUser, deleteUser, updateEditingUserId, updateUser } from "../logic/user.actions.js";
import { validateUser } from "../logic/user.validation.js";
import { appState } from "../state/app.state.js";
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
  const { isValid, errors } = validateUser(user);

  if (!isValid) {
    return errors; // UI will show errors
  }

  // action
  if (appState.editingUserId && appState.editingUserId === user.id) {
    updateUser(user);
    updateEditingUserId(null);
  } else {
    addUser({ ...user, id: generateID() });
  }

  // side effect
  document.getElementById("user-table-container").innerHTML = renderUsersTable(appState.users); // TODO: how to do this better?
  resetUserForm();
}

export function handleDelete(id) {
  deleteUser(id);
  renderUsersTable(appState.users);
}
