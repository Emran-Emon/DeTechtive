# 🚀 Quick Setup Guide

Follow these steps to get DeTECHtive running on your machine.

## Step 1: Install Node.js

If you don't have Node.js installed:
- Download from: https://nodejs.org/
- Recommended version: 18.x or higher
- Verify installation: `node --version`

## Step 2: Open Project in VS Code

```bash
# Navigate to project folder
cd path/to/detecthive-app

# Open in VS Code
code .
```

## Step 3: Install Dependencies

Open VS Code terminal (View > Terminal or `Ctrl+``) and run:

```bash
npm install
```

This will install all required packages (~5 minutes).

## Step 4: Install Recommended Extensions

When you open the project, VS Code will prompt you to install recommended extensions. Click **Install All**.

Or manually install:
1. Press `Ctrl+Shift+X` (Extensions)
2. Search and install:
   - ES7+ React/Redux/React-Native snippets
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - Auto Rename Tag
   - Path Intellisense

## Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.1.4  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 6: Open in Browser

Click the link or open: `http://localhost:5173`

## ✅ You're Done!

You should see the DeTECHtive login page.

---

## 🐛 Common Issues

### Error: "Cannot find module"
**Solution:** Run `npm install` again

### Error: "Port 5173 is already in use"
**Solution:** 
```bash
# Option 1: Stop the other process
lsof -ti:5173 | xargs kill -9

# Option 2: Use a different port
npm run dev -- --port 3000
```

### Tailwind styles not working
**Solution:** 
1. Stop the server (`Ctrl+C`)
2. Run `npm run dev` again

### TypeScript errors in VS Code
**Solution:**
1. Reload VS Code window: `Ctrl+Shift+P` > "Reload Window"
2. Or restart TypeScript server: `Ctrl+Shift+P` > "TypeScript: Restart TS Server"

---

## 🔌 Connect to Backend (Optional)

### Using Python Flask

1. Create a new file `backend.py`:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    return jsonify({
        'success': True,
        'token': 'demo-token',
        'user': {'name': 'Detective', 'email': data['email']}
    })

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    return jsonify({'success': True, 'message': 'Account created'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

2. Install Flask:
```bash
pip install flask flask-cors
```

3. Run backend:
```bash
python backend.py
```

4. Update frontend in `components/Login.tsx`:
```typescript
// Uncomment line ~42-48 and change URL to:
const response = await fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

---

## 📚 Next Steps

- Read the [README.md](README.md) for full documentation
- Explore the code in `components/`
- Customize colors in `tailwind.config.js`
- Add your backend API

**Need help?** Check the troubleshooting section in README.md
