/**
 * @file user.selectors.js
 * @fileoverview This file contains the selector functions for the user registration form.
 */

/**
 * select all users
 * @param {Object} state - the app state
 * @returns {Array} an array of user objects
 */
export const selectAllUsers = (state) => state.users;

/**
 * select a user by id
 * @param {Object} state  - the app state
 * @param {string} userId - the id of the user to select
 * @returns {Object} the user object
 */
export const selectUserbyId = (state, userId) => state.users.find((user) => user.id === userId);
