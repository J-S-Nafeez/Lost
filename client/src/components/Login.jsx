
import React, { useState } from 'react';
import API from '../api';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login({ onLoginSuccess, onToggle }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      // alert('✅ Login successful');
      onLoginSuccess();
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <h2>Login</h2>
       <p className="loading" style={{color:'red', fontSize:'20px',fontWeight:'bolder'}}>{loading ? ' 🔄 Logging in...' : ''}</p>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>Submit
      </button>

      <p className="account-link">
        Don’t have an account?{' '}
        <Link
          to="/register"
          onClick={onToggle}
          style={{
            color: 'blue',
            textDecoration: 'underline',
            pointerEvents: loading ? 'none' : 'auto',
            opacity: loading ? 0.6 : 1,
          }}
        >
          Register here
        </Link>
      </p>
    </form>
  );
}
