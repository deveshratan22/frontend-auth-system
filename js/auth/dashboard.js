/***********************************************************
 * AUTH GUARD – PROTECTED ROUTE
 ***********************************************************/
const user = JSON.parse(localStorage.getItem("user"));
const isLoggedIn = sessionStorage.getItem("isLoggedIn");

// Agar user data ya session missing ho
if (!user || !isLoggedIn) {
  window.location.href = "login.html";
}

/***********************************************************
 * SHOW USER INFO
 ***********************************************************/
document.getElementById("userName").textContent = user.name;
document.getElementById("userEmail").textContent = user.email;

/***********************************************************
 * LOGOUT HANDLER
 ***********************************************************/
document.getElementById("logoutBtn").addEventListener("click", () => {
  // Sirf session clear karo, account nahi
  sessionStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});

/***********************************************************
 * DELETE PROFILE (ACCOUNT + SESSION RESET)
 ***********************************************************/
document
  .getElementById("deleteAccountBtn")
  .addEventListener("click", () => {

    const confirmDelete = confirm(
      "Are you sure you want to delete your account?\nThis action cannot be undone."
    );

    if (!confirmDelete) return;

    // Clear everything related to auth
    localStorage.removeItem("user");
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("loginEmail");

    // Redirect to signup
    window.location.href = "signup.html";
  });
