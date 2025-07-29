
import React, { useState } from 'react';
import API from '../api'; // Use your axios instance for consistency
import './Contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Using axios instance for request
      const res = await API.post('/api/contactus', formData);

      alert(res.data.message);
      setFormData({ name: '', email: '', msg: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to send message.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-subtext">We'd love to hear from you! Please fill out the form below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="msg"
            placeholder="Your Message"
            rows="5"
            value={formData.msg}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;

