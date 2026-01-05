/**
 * Displays validation error message for an input field
 * and applies visual error styling.
 *
 * @param {HTMLElement} inputEl - Input field element
 * @param {string} message - Error message to show (empty string clears error)
 */
function setError(inputEl, message) {

  // Parent .field container
  const field = inputEl.closest(".field");

  // Safety check
  if (!field) return;

  // Error message element
  const errorEl = field.querySelector(".error");

  if (!errorEl) return;

  if (message) {
    // Show error
    errorEl.textContent = message;
    inputEl.classList.add("input-error");
  } else {
    // Clear error
    errorEl.textContent = "";
    inputEl.classList.remove("input-error");
  }
}
