/**
 * Validates user's full name input.
 * Focus is on keeping names clean and readable,
 * while avoiding numbers or special characters.
 *
 * @param {string} name - Raw name input from user
 * @returns {string} Empty string if valid, otherwise error message
 */
function validateName(name) {

  // Remove extra spaces from start and end
  const trimmedName = name.trim();

  // Name is mandatory
  if (!trimmedName) {
    return "Name is required";
  }

  /**
   * Regex rules:
   * - Only alphabets (A–Z, a–z)
   * - Spaces allowed between words
   * - Minimum 3 characters total
   */
  const regex = /^[A-Za-z ]{3,}$/;

  if (!regex.test(trimmedName)) {
    return "Only alphabets allowed (min 3 characters)";
  }

  // Prevent multiple consecutive spaces (e.g. "Devesh  Ratan")
  if (trimmedName.includes("  ")) {
    return "Name cannot contain multiple spaces";
  }

  // Valid name
  return "";
}
