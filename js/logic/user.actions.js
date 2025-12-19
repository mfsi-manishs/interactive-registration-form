/**
 * @file user.actions.js
 * @fileoverview This file contains the action functions for the user registration form. These action functions are used to update the app state.
 */

import { appState } from "../state/app.state.js";

/**
 * Action to add a user to the app's state.
 * @param {Object} user - the user object to add
 */
export function addUser(user) {
  appState.users.push(user);
}

/**
 * Action to delete a user from the app's state.
 * @param {string} userId - the id of the user to delete
 */
export function deleteUser(userId) {
  appState.users = appState.users.filter((u) => u.id !== userId);
}

/**
 * Action to update a user in the app's state.
 * @param {Object} updatedUser
 */
export function updateUser(updatedUser) {
  appState.users = appState.users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
}

/**
 * Updates the editingUserId in the appState to the given id.
 * @param {string} id - the id of the user to set as editing
 */
export function updateEditingUserId(id) {
  appState.editingUserId = id;
}
