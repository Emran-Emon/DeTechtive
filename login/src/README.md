# DeTECHtive - Detective Authentication Portal

A modern authentication system with a detective theme, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
detecthive-app/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── figma/          # Figma utility components
│   ├── Login.tsx       # Login page
│   ├── Signup.tsx      # Signup page
│   └── Dashboard.tsx   # Dashboard page
├── imports/            # SVG paths and imports
├── styles/             # Global CSS styles
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.html          # HTML template
```

## 🎨 Features

- ✅ **Login Page** - Email/password authentication with validation
- ✅ **Signup Page** - User registration with password strength validation
- ✅ **Dashboard** - Detective-themed user portal
- ✅ **Form Validation** - Real-time error checking
- ✅ **Toast Notifications** - User feedback with Sonner
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling

## 🔌 Backend Integration

### Python Flask Example

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    # Add your authentication logic here
    # Check database, verify password, etc.
    
    return jsonify({
        'success': True,
        'token': 'your-jwt-token',
        'user': {
            'name': 'Detective',
            'email': email
        }
    })

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    
    # Add your registration logic here
    # Create user in database, hash password, etc.
    
    return jsonify({
        'success': True,
        'message': 'Account created successfully'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

### Python FastAPI Example

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    email: str
    password: str

class SignupRequest(BaseModel):
    fullName: str
    email: str
    password: str

@app.post("/api/login")
async def login(request: LoginRequest):
    # Add your authentication logic here
    return {
        "success": True,
        "token": "your-jwt-token",
        "user": {
            "name": "Detective",
            "email": request.email
        }
    }

@app.post("/api/signup")
async def signup(request: SignupRequest):
    # Add your registration logic here
    return {
        "success": True,
        "message": "Account created successfully"
    }
```

### Connect Frontend to Backend

In `components/Login.tsx` and `components/Signup.tsx`, uncomment and update the API calls:

```typescript
// Replace 'YOUR_PYTHON_API_URL' with your backend URL
const response = await fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
```

Then use in your code:
```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

## 📦 Dependencies

### Core
- React 18.2
- TypeScript 5.2
- Vite 5.1

### UI Libraries
- Tailwind CSS 3.4
- Radix UI (various components)
- Lucide React (icons)
- Sonner (toast notifications)

### Utilities
- class-variance-authority
- clsx
- tailwind-merge

## 🎨 Customization

### Replace Background Images

The current implementation uses placeholder SVG backgrounds. To use your original Figma images:

1. Export images from Figma
2. Save them in a `public/assets/` folder
3. Update the imports in `Login.tsx` and `Signup.tsx`:

```typescript
// Replace these lines:
const img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681 = "data:image/svg+xml...";

// With:
import img4Ce97Fa31F2D4C4CA34DD8Dc0353B9681 from "/assets/background-1.png";
```

### Update Colors

Edit `tailwind.config.js` or `styles/globals.css` to customize the color scheme.

## 🔒 Security Notes

⚠️ **Important:** This is a frontend application. Always implement proper security on your backend:

- Hash passwords (bcrypt, argon2)
- Use JWT tokens with expiration
- Implement CSRF protection
- Use HTTPS in production
- Validate all inputs server-side
- Rate limit authentication endpoints
- Don't store sensitive data in localStorage

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not loading
```bash
# Restart the dev server
npm run dev
```

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Tips

- Use Chrome DevTools for debugging
- Check Network tab for API call issues
- Install React Developer Tools extension
- Enable TypeScript strict mode for better type safety

---

**Built with 🔍 by the DeTECHtive Team**
