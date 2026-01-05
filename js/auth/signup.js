/***********************************************************
 * DOM REFERENCES
 ***********************************************************/
const form = document.getElementById("signupForm");
const submitBtn = document.getElementById("submitBtn");

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const pwdEl = document.getElementById("password");
const cpwdEl = document.getElementById("confirmPassword");
const termsEl = document.getElementById("terms");
const togglePwd = document.getElementById("togglePwd");

/***********************************************************
 * PASSWORD VISIBILITY TOGGLE (with icon change)
 ***********************************************************/
togglePwd.onclick = () => {
  const isHidden = pwdEl.type === "password";

  pwdEl.type = isHidden ? "text" : "password";
  togglePwd.textContent = isHidden
    ? "visibility_off"
    : "visibility";
};

/* Subtle opacity when password field is empty */
pwdEl.addEventListener("input", () => {
  togglePwd.style.opacity = pwdEl.value ? "0.6" : "0.3";
});

/***********************************************************
 * FORM STATE PERSISTENCE (NON-SENSITIVE DATA ONLY)
 * - Name
 * - Email
 * - Terms checkbox
 ***********************************************************/
function saveFormState() {
  const formState = {
    name: nameEl.value,
    email: emailEl.value,
    terms: termsEl.checked
  };

  sessionStorage.setItem("signupForm", JSON.stringify(formState));
}

function restoreFormState() {
  const saved = sessionStorage.getItem("signupForm");
  if (!saved) return;

  const data = JSON.parse(saved);

  nameEl.value = data.name || "";
  emailEl.value = data.email || "";
  termsEl.checked = data.terms || false;
}

/* Restore state on page load */
restoreFormState();

/***********************************************************
 * LIVE VALIDATION HANDLER
 ***********************************************************/
form.addEventListener("input", () => {
  let isFormValid = true;

  /* Name validation */
  const nameError = validateName(nameEl.value);
  setError(nameEl, nameError);
  if (nameError) isFormValid = false;

  /* Email validation */
  const emailError = validateEmail(emailEl.value);
  setError(emailEl, emailError);
  if (emailError) isFormValid = false;

  /* Password validation */
  const pwdError = validatePassword(pwdEl.value, emailEl.value);
  if (pwdEl.value) {
    setError(pwdEl, pwdError);
    if (pwdError) isFormValid = false;
  } else {
    setError(pwdEl, "");
  }

  /* Confirm password validation */
  if (pwdEl.value !== cpwdEl.value) {
    setError(cpwdEl, "Passwords do not match");
    isFormValid = false;
  } else {
    setError(cpwdEl, "");
  }

  /* Terms & conditions */
  if (!termsEl.checked) {
    isFormValid = false;
  }

  /* Password strength meter (always called for reset handling) */
  calculateStrength(pwdEl.value);

  /* Confirm password checklist UI */
  const matchRule = document.getElementById("match");
  if (matchRule && pwdEl.value && cpwdEl.value) {
    matchRule.classList.toggle("valid", pwdEl.value === cpwdEl.value);
  }

  /* Persist form state */
  saveFormState();
});

/***********************************************************
 * SUBMIT HANDLER (FINAL VALIDATION + SHAKE FEEDBACK)
 ***********************************************************/
form.addEventListener("submit", e => {
  e.preventDefault();

  let hasError = false;

  /* Name */
  const nameError = validateName(nameEl.value);
  setError(nameEl, nameError);
  if (nameError) hasError = true;

  /* Email */
  const emailError = validateEmail(emailEl.value);
  setError(emailEl, emailError);
  if (emailError) hasError = true;

  /* Password */
  const pwdError = validatePassword(pwdEl.value, emailEl.value);
  if (pwdEl.value) {
    setError(pwdEl, pwdError);
    if (pwdError) hasError = true;
  } else {
    setError(pwdEl, "");
    hasError = true;
  }

  /* Confirm password */
  if (pwdEl.value !== cpwdEl.value) {
    setError(cpwdEl, "Passwords do not match");
    hasError = true;
  } else {
    setError(cpwdEl, "");
  }

  /* Terms */
  if (!termsEl.checked) {
    hasError = true;
  }

  /* Invalid → Shake animation */
  if (hasError) {
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 300);
    return;
  }

  /* Success → Save user */
  saveUser({
    name: nameEl.value.trim(),
    email: emailEl.value.trim().toLowerCase(),
    password: pwdEl.value
  });

  /* Clear temporary form memory */
  sessionStorage.removeItem("signupForm");

  alert("Registered Successfully");
});
