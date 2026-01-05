/**
 * Validates email address with strong client-side checks.
 * This function is intentionally strict to prevent
 * invalid, temporary, or poorly formatted emails.
 *
 * @param {string} email - Raw email input from user
 * @returns {string} Empty string if valid, otherwise error message
 */
function validateEmail(email) {

  // Normalize input: remove extra spaces & ensure case-insensitive checks
  email = email.trim().toLowerCase();

  // Basic required check
  if (!email) {
    return "Email is required";
  }

  // Email should never contain spaces
  if (email.includes(" ")) {
    return "Email cannot contain spaces";
  }

  /**
   * RFC-inspired email regex (simplified for frontend validation)
   * Ensures:
   * - One '@'
   * - Valid domain name
   * - At least 2 characters TLD
   */
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!regex.test(email)) {
    return "Invalid email format";
  }

  /**
   * Block commonly used temporary/disposable email services.
   * This improves data quality and mirrors real-world signup systems.
   */
  const blocked = ["tempmail", "10minutemail", "mailinator", "hudisk"];
  if (blocked.some(provider => email.includes(provider))) {
    return "Temporary emails are not allowed";
  }

  // If all checks pass, email is valid
  return "";
}
