"""
DeTECHtive Backend - Flask Example
===================================

This is a simple Flask backend example for the DeTECHtive application.

SETUP:
1. Install dependencies: pip install flask flask-cors
2. Run this file: python backend_flask_example.py
3. Backend will run on: http://localhost:5000

CONNECT TO FRONTEND:
In components/Login.tsx and components/Signup.tsx,
uncomment the API call sections and they will connect to this backend.

NOTE: This is a basic example. In production, you should:
- Hash passwords (use bcrypt or argon2)
- Use a real database (PostgreSQL, MySQL, MongoDB)
- Implement JWT authentication
- Add proper error handling
- Validate all inputs
- Use environment variables for secrets
- Add rate limiting
- Use HTTPS
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import secrets

app = Flask(__name__)

# Enable CORS for frontend at localhost:5173
CORS(app, origins=["http://localhost:5173", "http://localhost:3000"])

# In-memory storage (replace with real database in production)
users_db = {}
sessions_db = {}


@app.route('/api/login', methods=['POST'])
def login():
    """
    Login endpoint
    
    Request Body:
        {
            "email": "user@example.com",
            "password": "password123"
        }
    
    Response:
        {
            "success": true,
            "token": "session-token",
            "user": {
                "name": "John Doe",
                "email": "user@example.com"
            }
        }
    """
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        # Validate input
        if not email or not password:
            return jsonify({
                'success': False,
                'error': 'Email and password are required'
            }), 400
        
        # Check if user exists (in production, verify password hash)
        if email not in users_db:
            return jsonify({
                'success': False,
                'error': 'Invalid email or password'
            }), 401
        
        user = users_db[email]
        
        # In production, verify password hash:
        # if not bcrypt.checkpw(password.encode('utf-8'), user['password_hash']):
        #     return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
        
        # Simple check for demo (NOT SECURE - don't use in production)
        if user['password'] != password:
            return jsonify({
                'success': False,
                'error': 'Invalid email or password'
            }), 401
        
        # Generate session token (in production, use JWT)
        token = secrets.token_urlsafe(32)
        sessions_db[token] = {
            'email': email,
            'created_at': datetime.now().isoformat()
        }
        
        return jsonify({
            'success': True,
            'token': token,
            'user': {
                'name': user['name'],
                'email': user['email']
            }
        }), 200
        
    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({
            'success': False,
            'error': 'An error occurred during login'
        }), 500


@app.route('/api/signup', methods=['POST'])
def signup():
    """
    Signup endpoint
    
    Request Body:
        {
            "fullName": "John Doe",
            "email": "user@example.com",
            "password": "SecurePass123"
        }
    
    Response:
        {
            "success": true,
            "message": "Account created successfully",
            "user": {
                "name": "John Doe",
                "email": "user@example.com"
            }
        }
    """
    try:
        data = request.get_json()
        full_name = data.get('fullName')
        email = data.get('email')
        password = data.get('password')
        
        # Validate input
        if not full_name or not email or not password:
            return jsonify({
                'success': False,
                'error': 'All fields are required'
            }), 400
        
        # Check if user already exists
        if email in users_db:
            return jsonify({
                'success': False,
                'error': 'Email already registered'
            }), 409
        
        # In production, hash the password:
        # password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        # Create user (in production, save to database)
        users_db[email] = {
            'name': full_name,
            'email': email,
            'password': password,  # NEVER store plain passwords in production!
            'created_at': datetime.now().isoformat()
        }
        
        # Generate session token
        token = secrets.token_urlsafe(32)
        sessions_db[token] = {
            'email': email,
            'created_at': datetime.now().isoformat()
        }
        
        return jsonify({
            'success': True,
            'message': 'Account created successfully',
            'token': token,
            'user': {
                'name': full_name,
                'email': email
            }
        }), 201
        
    except Exception as e:
        print(f"Signup error: {e}")
        return jsonify({
            'success': False,
            'error': 'An error occurred during signup'
        }), 500


@app.route('/api/verify-token', methods=['POST'])
def verify_token():
    """
    Verify if a session token is valid
    
    Request Body:
        {
            "token": "session-token"
        }
    
    Response:
        {
            "success": true,
            "user": {
                "name": "John Doe",
                "email": "user@example.com"
            }
        }
    """
    try:
        data = request.get_json()
        token = data.get('token')
        
        if not token or token not in sessions_db:
            return jsonify({
                'success': False,
                'error': 'Invalid or expired token'
            }), 401
        
        session = sessions_db[token]
        email = session['email']
        user = users_db.get(email)
        
        if not user:
            return jsonify({
                'success': False,
                'error': 'User not found'
            }), 404
        
        return jsonify({
            'success': True,
            'user': {
                'name': user['name'],
                'email': user['email']
            }
        }), 200
        
    except Exception as e:
        print(f"Token verification error: {e}")
        return jsonify({
            'success': False,
            'error': 'An error occurred during verification'
        }), 500


@app.route('/api/logout', methods=['POST'])
def logout():
    """
    Logout endpoint - invalidates the session token
    
    Request Body:
        {
            "token": "session-token"
        }
    
    Response:
        {
            "success": true,
            "message": "Logged out successfully"
        }
    """
    try:
        data = request.get_json()
        token = data.get('token')
        
        if token in sessions_db:
            del sessions_db[token]
        
        return jsonify({
            'success': True,
            'message': 'Logged out successfully'
        }), 200
        
    except Exception as e:
        print(f"Logout error: {e}")
        return jsonify({
            'success': False,
            'error': 'An error occurred during logout'
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'registered_users': len(users_db),
        'active_sessions': len(sessions_db)
    }), 200


# Create a test user for demo purposes
users_db['demo@detecthive.com'] = {
    'name': 'Demo Detective',
    'email': 'demo@detecthive.com',
    'password': 'Demo1234',  # Password: Demo1234
    'created_at': datetime.now().isoformat()
}


if __name__ == '__main__':
    print("=" * 60)
    print("🔍 DeTECHtive Backend Server")
    print("=" * 60)
    print("\n✅ Server starting on: http://localhost:5000")
    print("\n📋 Available Endpoints:")
    print("   POST   /api/login         - User login")
    print("   POST   /api/signup        - User registration")
    print("   POST   /api/verify-token  - Verify session token")
    print("   POST   /api/logout        - User logout")
    print("   GET    /api/health        - Health check")
    print("\n🧪 Test User:")
    print("   Email:    demo@detecthive.com")
    print("   Password: Demo1234")
    print("\n⚠️  WARNING: This is a demo backend!")
    print("   - Passwords are stored in plain text (NOT SECURE)")
    print("   - No database persistence (data lost on restart)")
    print("   - For production, implement proper security")
    print("=" * 60)
    print("\n🚀 Starting Flask development server...\n")
    
    app.run(
        debug=True,
        host='127.0.0.1',
        port=5000
    )
