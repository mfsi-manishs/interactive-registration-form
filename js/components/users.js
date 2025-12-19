/**
 * @file usersTable.js
 * @fileoverview This file contains the functions for rendering the users table.
 */

/**
 * Renders a table element containing a list of users.
 * Each table row contains the user's name, email, and two buttons for edit and delete.
 * @param {Array<Object>} users - an array of user objects
 * @returns {string} the rendered HTML table as a string
 */
export function renderUsersTable(users) {
  return `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .map(
            (user) => `
          <tr data-id="${user.id}">
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button class="edit-btn">Edit</button>
            </td>
            <td>
              <button class="delete-btn">Delete</button>
            </td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}
