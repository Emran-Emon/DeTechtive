# DeTECHtive Login & Signup

A detective-themed login and signup application built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000` and you'll see the login page.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Features

- **Login Page**: Email and password authentication UI
- **Signup Page**: Full name, email, password, and confirm password registration UI
- **Client-side routing**: Navigate between login and signup pages
- **Detective theme**: Stylized UI with Batman-inspired visuals

## Navigation

- Click "Register now" on the login page to go to signup
- Click "Login" on the signup page to return to login
- The app starts at `/login` by default

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Tailwind CSS v4
- Vite

## Project Structure

```
/
├── App.tsx              # Main router component
├── main.tsx             # Application entry point
├── index.html           # HTML template
├── imports/
│   ├── Login.tsx        # Login page component
│   ├── Signup.tsx       # Signup page component
│   └── svg-*.ts         # SVG path definitions
├── styles/
│   └── globals.css      # Global styles and Tailwind config
└── components/          # Reusable components
```

## Notes

- The login/signup functionality currently logs to console. Add your authentication logic in the `handleLogin` and `handleSignup` functions.
- Images use Figma asset imports - ensure your build process supports these paths.
