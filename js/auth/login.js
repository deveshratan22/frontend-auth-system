/***********************************************************
 * DOM REFERENCES
 ***********************************************************/
const form = document.getElementById("loginForm");
const emailEl = document.getElementById("email");
const pwdEl = document.getElementById("password");
const togglePwd = document.getElementById("togglePwd");

/***********************************************************
 * PASSWORD VISIBILITY TOGGLE (ICON + INPUT)
 ***********************************************************/
togglePwd.onclick = () => {
  const isHidden = pwdEl.type === "password";

  pwdEl.type = isHidden ? "text" : "password";
  togglePwd.textContent = isHidden
    ? "visibility_off"
    : "visibility";
};

/***********************************************************
 * LOGIN FORM STATE (EMAIL ONLY)
 * - Persist email on refresh
 * - Do NOT persist password (security)
 ***********************************************************/
function saveLoginState() {
  sessionStorage.setItem("loginEmail", emailEl.value);
}

function restoreLoginState() {
  const savedEmail = sessionStorage.getItem("loginEmail");
  if (savedEmail) {
    emailEl.value = savedEmail;
  }
}

/* Restore email on page load */
restoreLoginState();

/* Save email as user types */
emailEl.addEventListener("input", saveLoginState);

/***********************************************************
 * LOGIN HANDLER
 ***********************************************************/

form.addEventListener("submit", e => {
  e.preventDefault();

  let hasError = false;

  // Clear previous errors
  setError(emailEl, "");
  setError(pwdEl, "");

  // REQUIRED FIELD CHECKS
  if (!emailEl.value.trim()) {
    setError(emailEl, "Email is required");
    hasError = true;
  }

  if (!pwdEl.value.trim()) {
    setError(pwdEl, "Password is required");
    hasError = true;
  }

  // If basic fields missing → SHAKE
  if (hasError) {
    triggerShake();
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    setError(emailEl, "No account found. Please register first.");
    triggerShake();
    return;
  }

  // CREDENTIAL CHECK
  if (
    emailEl.value.trim().toLowerCase() !== savedUser.email ||
    pwdEl.value !== savedUser.password
  ) {
    setError(emailEl, "Invalid email or password");
    triggerShake();
    return;
  }

  // SUCCESS
// SUCCESS
sessionStorage.removeItem("loginEmail");
sessionStorage.setItem("isLoggedIn", "true"); 
window.location.href = "dashboard.html";

});

/***********************************************************
 * SHAKE HELPER
 ***********************************************************/
function triggerShake() {
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 300);
}


