# Smart Auth – Frontend Authentication System

Smart Auth is a **frontend-focused authentication system** built using **HTML, CSS, and Vanilla JavaScript**.  
The goal of this project is to demonstrate **real-world authentication UX, validation logic, and frontend architecture**, while keeping it **backend-ready**.

This project covers a **complete authentication flow** including:
- Signup (Registration)
- Login
- Protected Dashboard
- Logout & Delete Profile

> This is a **frontend-only demo project**, designed to showcase logic and UX decisions — not production-grade security.

---

## Features Implemented

---

## User Registration (Signup)

### Core Functionality
- Full name, email, password, confirm password fields
- Terms & Conditions acceptance
- Clean, warm, aesthetic UI (split screen layout)

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
- Dynamic icon change based on visibility

### Smart Validations (Client-side)
- Email format validation
- Disposable / temporary email blocking
- Name validation (alphabet-only, min length)
- Strong password enforcement
- Prevent password containing email/username
- Confirm password matching
- **Duplicate email prevention**
- Field-specific inline error messages

### UX Enhancements
- Shake animation on invalid submit
- Smooth visual error feedback
- No disabled submit button (UX-first approach)
- Accessible and readable error messages

### Form State Persistence
- Non-sensitive fields (Name, Email, Terms) preserved on refresh
- Implemented using `sessionStorage`
- Password fields are intentionally **not persisted**
- Draft cleared on successful registration

### Signup Flow Result
- User account saved (frontend-only)
- User is **automatically logged in**
- Redirected directly to dashboard

---

## User Login

### Core Functionality
- Email & password authentication
- Field-wise inline error handling
- Shake animation on invalid credentials

### UX & Behavior
- Password visibility toggle
- Email persistence on refresh (password never stored)
- Inline errors instead of blocking alerts
- Prevents login if account does not exist

### Login Flow Result
- Login session created using `sessionStorage`
- Redirect to dashboard on success

---

## Dashboard (Protected Route)

### Purpose
Acts as a protected area accessible **only after authentication**.

### Features
- Displays logged-in user name & email
- Frontend **auth guard** prevents direct URL access
- Logout option
- Delete Profile option

### Logout vs Delete Profile
| Action | Behavior |
|------|---------|
| Logout | Clears login session only |
| Delete Profile | Clears account + session + stored drafts |

---

## Storage Architecture (Important)

This project intentionally separates **account data** and **login session**:

### `localStorage`
- Stores registered user account (acts as demo database)

### `sessionStorage`
- Stores login session (`isLoggedIn`)
- Stores signup form drafts
- Stores login email for refresh persistence

> This separation mimics **real-world authentication behavior**.

---

## Why “Forgot Password” Is NOT Implemented

A secure forgot-password flow requires:
- Backend server
- Database
- Secure token generation
- Email service (SMTP)
- Token expiry handling

Since this is a **frontend-only project**, forgot password is **intentionally omitted** to avoid insecure or misleading implementations.

---

## Project Structure

smart-auth/
│
├── signup.html # Signup UI
├── login.html # Login UI
├── dashboard.html # Protected dashboard
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
│ │ └── storage.js # Frontend persistence layer
│ │
│ └── auth/
│ ├── signup.js # Signup flow controller
│ ├── login.js # Login flow controller
│ └── dashboard.js # Auth guard + dashboard logic
│
└── README.md


---

## Page-wise Breakdown

### signup.html / signup.js
Handles:
- Registration form UI
- Live validation
- Password strength & checklist
- Form persistence
- Duplicate email prevention
- Auto-login after successful signup

---


### login.html / login.js
Handles:
- Credential validation
- Inline error handling
- Shake animation
- Email persistence
- Login session creation

---

### dashboard.html / dashboard.js
Handles:
- Frontend auth guard
- Display of user information
- Logout (session clear)
- Delete Profile (full reset)

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


## Security Notes (Frontend Context)
- Passwords stored in plain text **only for demo purposes**
- No hashing or encryption (backend responsibility)
- Paste is allowed for accessibility & password managers
- Alerts avoided to prevent blocking animations

---

## Status
- Signup module complete  
- Login module complete  
- Dashboard complete  
- Frontend auth flow finalized  

---

## Author

Built with ❤️ by **Devesh**  
Frontend Developer | JavaScript Enthusiast | UX-focused

GitHub: https://github.com/deveshratan22

---

## Disclaimer
This project is for **learning and demonstration purposes only**.  
For production systems, authentication must be handled securely using backend APIs, hashing, and verified sessions.
