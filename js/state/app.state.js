/**
 * @file app.state.js
 * @fileoverview This file contains the app's state object which will serve as a global state of this app.
 */

/**
 * @type {Object} appState - The app's state object which will serve as a global state of this app
 * @property {Array} users - An array of user objects
 * @property {string} editingUserId - The id of the user being edited
 */
export const appState = {
  users: [],
  editingUserId: "",
};
