import React, { useState } from 'react';
import API from '../api';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register({ onToggle }) {
  const [formData, setFormData] = useState({
    name: '', regNo: '', email: '', password: '', phone: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('api/auth/register', formData);
      alert('✅ Registered successfully');
      onToggle(); // Go back to login after successful registration
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="regNo" placeholder="Reg No" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Register</button>
        <p className="account-link">
          Already have an account?{' '}
          <button type="button" onClick={onToggle} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Link to="/login">Login here</Link>
          </button>
        </p>
      </form>
    </div>
  );
}
