/**
 * Saves user data to localStorage.
 * This acts as a temporary persistence layer for frontend-only projects.
 * Backend/database can replace this logic later without changing UI code.
 *
 * @param {Object} user - User object containing signup details
 */
function saveUser(user) {

  // Basic safety check to avoid storing invalid data
  if (!user || typeof user !== "object") {
    console.warn("Invalid user data. Nothing saved.");
    return;
  }

  // Persist user data as a JSON string
  localStorage.setItem("user", JSON.stringify(user));
}
