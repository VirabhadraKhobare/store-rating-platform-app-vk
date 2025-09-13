import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx';
import StoreList from './pages/StoreList.tsx';
import RateStore from './pages/RateStore.tsx';
import AdminPanel from './pages/AdminPanel.tsx';
import OwnerDashboard from './pages/OwnerDashboard.tsx';
import './styles/doodle-theme.css';

const App: React.FC = () => (
  <Router>
    <nav className="doodle-box" style={{maxWidth: '100vw', display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem'}}>
      <Link className="doodle-btn" to="/">Home</Link>
      <Link className="doodle-btn" to="/login">Login</Link>
      <Link className="doodle-btn" to="/register">Register</Link>
      <Link className="doodle-btn" to="/dashboard">Dashboard</Link>
      <Link className="doodle-btn" to="/stores">Stores</Link>
      <Link className="doodle-btn" to="/rate">Rate Store</Link>
      <Link className="doodle-btn" to="/admin">Admin Panel</Link>
      <Link className="doodle-btn" to="/owner">Owner Dashboard</Link>
    </nav>
    <div style={{minHeight: 'calc(100vh - 120px)'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stores" element={<StoreList />} />
        <Route path="/rate" element={<RateStore />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/owner" element={<OwnerDashboard />} />
      </Routes>
    </div>
    <footer style={{textAlign: 'center', marginTop: '2rem', marginBottom: '1rem', padding: '1rem 0', background: '#fff', borderTop: '2px solid #222'}}>
      <span style={{marginLeft: '0.5rem', fontWeight: 'bold', fontFamily: 'Kalam, cursive'}}>Copyright © 2025 Virabhadra. Made with ❤️ by me</span>
    </footer>
  </Router>
);

export default App;
