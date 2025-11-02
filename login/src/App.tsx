import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'dashboard'>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLoginSuccess = (email: string) => {
    setUser({ name: email.split('@')[0], email });
    setCurrentPage('dashboard');
  };

  const handleSignupSuccess = (name: string, email: string) => {
    setUser({ name, email });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'login' && (
        <Login 
          onNavigateToSignup={() => setCurrentPage('signup')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {currentPage === 'signup' && (
        <Signup 
          onNavigateToLogin={() => setCurrentPage('login')}
          onSignupSuccess={handleSignupSuccess}
        />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
      <Toaster position="top-right" />
    </div>
  );
}
