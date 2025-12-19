/**
 * @file user.form.events.js
 * @fileoverview This file contains the event handlers for the user registration form.
 */

import { handleAddOrUpdate } from "../controllers/user.controller.js";
import { getUserFormData } from "../dom.service.js";

/**
 * Handles a form submission event. Prevents the default form submission
 * behavior and adds or updates a user in the app's state, depending on whether
 * the form is being used to add a new user or update an existing one.
 * @param {Event} e - the form submission event
 */

export function handleFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const userData = getUserFormData();
  if (!userData) {
    console.error(`Error in getting form data.`);
    return;
  }

  // Add or update user
  handleAddOrUpdate(userData);
}
