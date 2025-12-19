/**
 * @file table.events.js
 * @fileoverview This file contains the event handlers for the table element.
 */

import { handleEdit, handleDelete } from "../controllers/user.controller.js";

/**
 * Handles a click event on a table element.
 * If the target element has the class "edit-btn", populates the form with the clicked row's data.
 * If the target element has the class "delete-btn", removes the clicked row from the table.
 * @param {MouseEvent} e - the click event
 */
export function handleTableClick(e) {
  const target = e.target;
  if (target.classList.contains("edit-btn")) {
    const userId = target.dataset.id;
    handleEdit(userId);
    return;
  }

  if (target.classList.contains("delete-btn")) {
    const userId = target.dataset.id;
    handleDelete(userId);
    return;
  }
}
