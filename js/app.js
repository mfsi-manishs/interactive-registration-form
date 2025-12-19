/**
 * @file app.js
 * @fileoverview This file contains the main entry point for the app.
 */

import { updateUserFormContainer, updateUsersTableContainer } from "./dom.service.js";
import { handleTableClick } from "./events/table.events.js";
import { handleFormSubmit } from "./events/user.form.events.js";

(function initApp() {
  updateUserFormContainer();
  updateUsersTableContainer();
  addEventListeners();
})();

function addEventListeners() {
  document.addEventListener("submit", handleFormSubmit);
  document.addEventListener("click", handleTableClick);
}
