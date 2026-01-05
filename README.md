# Smart Auth – Frontend Authentication System

Smart Auth is a **frontend-focused authentication system** built using **HTML, CSS, and Vanilla JavaScript**.  
The goal of this project is to demonstrate **real-world authentication UX, validation logic, and frontend architecture**, while keeping it **backend-ready**.

This repository currently covers the **Signup (Registration) module** in full detail.  
(Login and further features will be added incrementally.)

---

## Features Implemented (Signup Module)

### User Registration (Signup)
- Full name, email, password, and confirm password fields
- Terms & Conditions acceptance
- Clean, warm, aesthetic UI (split screen layout)

---

### Password Security & UX
- Live password rule checklist:
  - Minimum length (8+)
  - Uppercase letter
  - Lowercase letter
  - Number
  - Special character
- Real-time password strength meter (0–100)
  - Weak / Medium / Strong indication
- Neutral state handling (empty password shows no warnings)
- Show / Hide password toggle using **Google Material Icons**
- Icon changes dynamically based on password visibility

---

### Smart Validations (Client-side)
- Email format validation
- Disposable / temporary email blocking
- Name validation (no numbers or symbols)
- Password rules enforcement
- Prevent password containing email/username
- Confirm password matching
- Clear, field-specific error messages

---

### UX Enhancements
- Shake animation on invalid submit
- Smooth visual feedback for errors
- No disabled submit button (to preserve UX feedback)
- Accessible and readable error messages

---

### Form State Persistence (User-Friendly)
- Non-sensitive fields (Name, Email, Terms) are preserved on page refresh
- Implemented using `sessionStorage`
- Password fields are intentionally **not persisted** for security
- Stored state is cleared on successful registration

---

## Project Structure (Signup Phase)

smart-auth/
│
├── signup.html # Signup UI
│
├── css/
│ └── style.css # Shared warm aesthetic styles
│
├── js/
│ ├── validators/ # Modular validation logic
│ │ ├── nameValidator.js
│ │ ├── emailValidator.js
│ │ └── passwordValidator.js
│ │
│ ├── utils/
│ │ ├── domUtils.js # Centralized error handling
│ │ └── storage.js # Temporary frontend persistence
│ │
│ └── auth/
│ └── signup.js # Signup flow controller
│
└── README.md


---

## Page-wise Breakdown

### signup.html
- Signup form layout
- Password checklist UI
- Strength meter UI
- Navigation link to Login page (future-ready)

---

### signup.js
Handles:
- Live field validation
- Password strength calculation
- Password visibility toggle
- Shake animation on error
- Form state persistence (sessionStorage)
- Saving registered user data (temporary, frontend-only)

---

### passwordValidator.js
- Rule-based password validation
- Live checklist updates
- Neutral state handling for empty passwords
- Security checks (no email in password)

---

### emailValidator.js
- Email format validation
- Temporary email blocking
- Input normalization (trim + lowercase)

---

### nameValidator.js
- Alphabet-only validation
- Minimum length enforcement
- Space handling

---

### domUtils.js
- Centralized utility for displaying and clearing error messages
- Prevents repetitive DOM logic across files

---

### storage.js
- Temporary frontend persistence using `localStorage`
- Designed to be replaced with backend API calls later

---

## Important Notes (Security & Scope)

- This project is **frontend-only by design** (for learning & demonstration)
- Passwords are stored temporarily in `localStorage` (NOT recommended for production)
- Backend integration (API + database) can be plugged in without changing UI logic
- Validation and UX logic is intentionally kept modular and reusable

---

## Upcoming Features
- Login module
- Forgot password flow
- Dashboard page after login
- Role-based authentication
- Java / Spring Boot backend integration

---

## Explanation
> “This project focuses on frontend authentication flow, validation, and UX.  
> Backend integration is intentionally decoupled and can be added later without changing UI logic.”

---

## Status
- Signup module complete  
- Login module in progress  
- Backend integration planned


---
## Author

Built with ❤️ by **Devesh**  
Frontend Developer | JavaScript Enthusiast | UX-focused

GitHub: https://github.com/deveshratan22

---