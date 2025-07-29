import React, { useState } from 'react';
import API from '../api';
import './CreateItem.css'; 

export default function CreateItem() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Lost',
    location: '',
    contactInfo: ''
  });

  const handleChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      return alert('❌ Please login to post items');
    }

    try {
      const res = await API.post('/api/items', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('✅ Item posted successfully');
      setFormData({
        title: '',
        description: '',
        type: 'Lost',
        location: '',
        contactInfo: ''
      });
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to post item');
    }
  };

  return (
    <div className="create-item-container">
      <form onSubmit={handleSubmit} className="create-item-form">
        <h2>Create Item</h2>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <select name="type" value={formData.type} onChange={handleChange} >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input name="contactInfo" placeholder="Contact Info" value={formData.contactInfo} onChange={handleChange} />
        <button type="submit">Post Item</button>
      </form>
    </div>
  );
}


//schem fixed