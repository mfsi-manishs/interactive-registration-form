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
      <input name="name" placeholder="Full Name" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <input name="email" placeholder="Email" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <input name="phone" placeholder="Phone Number" required class="w-100 border-box mb-m" />
      <span class="error-msg mb-m"></span>
      <div class="w-100 border-box border-thin mb-m">
        <span>Gender:</span>
        <label>
          <input type="radio" name="gender" value="male" checked />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="others" />
          Others
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  `;
}
