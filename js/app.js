/**
 * @file app.js
 * @fileoverview This file contains the main entry point for the app.
 */

import { renderUserForm } from "./components/user.form.js";
import { renderUsersTable } from "./components/users.js";
import { appState } from "./state/app.state.js";
import { handleFormSubmit } from "./events/user.form.events.js";
import { handleTableClick } from "./events/table.events.js";

// Rendering
document.getElementById("user-form-container").innerHTML = renderUserForm();
document.getElementById("user-table-container").innerHTML = renderUsersTable(appState.users);

// Event Listeners
document.addEventListener("submit", handleFormSubmit);
document.addEventListener("click", handleTableClick);
