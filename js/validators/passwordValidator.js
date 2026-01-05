/**
 * Validates password against multiple security rules
 * and updates live checklist UI accordingly.
 * 
 * Calculates password strength score (0–100)
 * and updates the visual strength bar & label.
 *
 * @param {string} pwd - Password entered by the user
 * @param {string} email - User email (used to prevent weak passwords)
 * @returns {string} Empty string if valid, otherwise error message
 * @returns {number} Strength score
 */
function validatePassword(pwd, email = "") {

  /**
   * Rule-based validation object.
   * Each key maps to a checklist item in the UI (by ID).
   */
  const rules = {
    len: pwd.length >= 8,
    upper: /[A-Z]/.test(pwd),
    lower: /[a-z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[^A-Za-z0-9]/.test(pwd)
  };

    // RESET STATE when password is empty
  if (!pwd) {
    Object.keys(rules).forEach(rule => {
      const ruleEl = document.getElementById(rule);
      if (ruleEl) ruleEl.classList.remove("valid");
    });
    return ""; // no error message
  }

  /**
   * Update live checklist UI:
   * - Green when rule passes
   * - Red when rule fails
   */
  Object.keys(rules).forEach(rule => {
    const ruleEl = document.getElementById(rule);
    if (ruleEl) {
      ruleEl.classList.toggle("valid", rules[rule]);
    }
  });

  

  // Disallow spaces in password 
  if (pwd.includes(" ")) {
    return "Password cannot contain spaces";
  }

  /**
   * Prevent users from using their email/username
   * as part of the password 
   */
  if (email) {
    const emailPrefix = email.split("@")[0];
    if (emailPrefix && pwd.toLowerCase().includes(emailPrefix.toLowerCase())) {
      return "Password should not contain email or username";
    }
  }

  // If any rule fails, password is considered weak
  if (Object.values(rules).includes(false)) {
    return "Password is weak";
  }

  // Password passed all validations
  return "";
}



function calculateStrength(pwd) {
  const bar = document.getElementById("strengthBar");
  const text = document.getElementById("strengthText");

  if (!bar || !text) return 0;

  // RESET state when password is empty
  if (!pwd) {
    bar.style.width = "0%";
    bar.style.background = "transparent";
    text.textContent = "";
    return 0;
  }

  let score = 0;

  if (pwd.length >= 8) score += 20;
  if (/[A-Z]/.test(pwd)) score += 20;
  if (/[a-z]/.test(pwd)) score += 20;
  if (/[0-9]/.test(pwd)) score += 20;
  if (/[^A-Za-z0-9]/.test(pwd)) score += 20;

  bar.style.width = score + "%";

  if (score < 40) {
    bar.style.background = "#dc2626";
    text.textContent = "Weak Password";
  } else if (score < 80) {
    bar.style.background = "#f59e0b";
    text.textContent = "Medium Password";
  } else {
    bar.style.background = "#16a34a";
    text.textContent = "Strong Password";
  }

  return score;
}
