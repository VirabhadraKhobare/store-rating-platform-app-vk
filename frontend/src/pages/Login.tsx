import React, { useState } from 'react';
import '../styles/doodle-theme.css';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setSuccess('Login successful!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="doodle-box">
      <h2 className="doodle-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="doodle-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="doodle-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="doodle-btn" type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
      <p style={{textAlign: 'center', marginTop: '1rem'}}>
        <b>Default Credentials:</b><br />
        Admin: admin@storerating.com / password<br />
        Store Owner: john.smith@techstore.com / password
      </p>
    </div>
  );
};

export default Login;
