/**
 * @file users.js
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
    <table id="user-table" class="table-fixed w-100">
      <thead>
        <tr>
          <th class="w-40 text-left">Name</th>
          <th class="w-40 text-left">Email</th>
          <th class="w-10 text-center">Edit</th>
          <th class="w-10 text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .map(
            (user) => `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td class="text-center">
              <button data-id="${user.id}" class="edit-btn">Edit</button>
            </td>
            <td class="text-center">
              <button data-id="${user.id}" class="delete-btn">Delete</button>
            </td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}
