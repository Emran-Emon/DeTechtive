import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './imports/Login';
import Signup from './imports/Signup';

export default function App() {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/preview_page.html" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
