/**
 * @file user.form.js
 * @fileoverview This file contains the function for rendering the user registration form.
 */

/**
 * Renders a form to register a user with input fields for name and email.
 * @returns {string} the rendered HTML form as a string
 */
export function renderUserForm() {
  return `
    <form id="user-form">
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  `;
}
