# ⚡ Quick Reference Card

## 🚀 Instant Start
```bash
npm install && npm run dev
```
Then open: **http://localhost:5173**

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main app & routing |
| `components/Login.tsx` | Login page |
| `components/Signup.tsx` | Signup page |
| `components/Dashboard.tsx` | Dashboard |
| `main.tsx` | React entry point |
| `index.html` | HTML template |
| `package.json` | Dependencies |
| `vite.config.ts` | Build config |
| `tailwind.config.js` | Tailwind config |

---

## 🎯 Important Locations

### Add Backend API URL
**File:** `components/Login.tsx` (line ~42)  
**File:** `components/Signup.tsx` (line ~67)

```typescript
const response = await fetch('http://localhost:5000/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

### Environment Variables
**File:** Create `.env` from `.env.example`
```env
VITE_API_URL=http://localhost:5000
```

### Styling
**File:** `styles/globals.css` - Global styles  
**File:** `tailwind.config.js` - Tailwind config

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview build

# Troubleshooting
npm install              # Install dependencies
npm run lint             # Check code quality

# Different port
npm run dev -- --port 3000
```

---

## 🐛 Quick Fixes

**Port in use:**
```bash
npm run dev -- --port 3000
```

**Module errors:**
```bash
rm -rf node_modules package-lock.json && npm install
```

**TypeScript errors in VS Code:**
`Ctrl+Shift+P` → "Reload Window"

---

## 📖 Documentation

| Document | Use Case |
|----------|----------|
| `START_HERE.md` | 👉 **First time? Start here!** |
| `COMMANDS.txt` | Copy-paste terminal commands |
| `SETUP.md` | Detailed setup guide |
| `README.md` | Complete documentation |
| `CHECKLIST.md` | Verify your setup |
| `PROJECT_SUMMARY.md` | Project overview |

---

## 🔌 Backend Example (Flask)

**Create `backend.py`:**
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
        'user': {'name': 'Detective', 'email': data['email']}
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

**Run:**
```bash
pip install flask flask-cors
python backend.py
```

---

## 🎨 Customize

**Colors:** `tailwind.config.js` or `styles/globals.css`  
**Font:** Already using Courier Prime  
**Images:** Replace placeholders in `Login.tsx` & `Signup.tsx`

---

## ✅ Quick Test

1. ✅ Run `npm run dev`
2. ✅ Open http://localhost:5173
3. ✅ See DeTECHtive login page
4. ✅ Enter email: `test@test.com`
5. ✅ Enter password: `Test1234`
6. ✅ Click Login
7. ✅ See dashboard

---

## 🆘 Help

**Issues?** Check:
1. Node.js installed? `node --version`
2. Dependencies installed? `npm install`
3. Port available? Try `--port 3000`
4. Read `SETUP.md` troubleshooting section

---

## 📊 Project Info

- **Tech:** React + TypeScript + Tailwind + Vite
- **Components:** 55+
- **Ready:** ✅ VS Code | ✅ Production | ✅ Backend

---

**🔍 Happy Detecting!**
