import React, { useState } from 'react';
import '../styles/doodle-theme.css';
import axios from 'axios';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, address });
      setSuccess('Registration successful!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="doodle-box">
      <h2 className="doodle-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="doodle-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          minLength={20}
          maxLength={60}
        />
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
          minLength={8}
          maxLength={16}
        />
        <input
          className="doodle-input"
          type="text"
          placeholder="Address (optional)"
          value={address}
          onChange={e => setAddress(e.target.value)}
          maxLength={400}
        />
        <button className="doodle-btn" type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
      <p style={{textAlign: 'center', marginTop: '1rem'}}>
        <b>Password must include:</b><br />
        - 1 uppercase letter<br />
        - 1 special character<br />
        - 8-16 characters
      </p>
    </div>
  );
};

export default Register;
