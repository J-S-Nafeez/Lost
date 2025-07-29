

// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import API from '../api';
import './ItemList.css'; // 👈 Import the CSS

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/api/items')
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        alert('Failed to fetch items');
        setLoading(false);
      });
  }, []);

  return (
    <div className="item-list-container">
      {loading ? <p className="loading-text" style={{color:"red",fontSize:"50px",fontWeight:"bolder",marginLeft:"400px"}}>Loading.....</p> : null}
      {!loading && items.length === 0 && (
        <p className="no-items-text">No items found.</p>
      )}
      {items.map(item => (
        <div className="item-card" key={item._id}>
          <h3>{item.title} ({item.type})</h3>
          <p>{item.description}</p>
          <p>📍 {item.location} | 📞 {item.contactInfo}</p>
          <p className="item-meta">Posted by: {item.createdBy?.name} ({item.createdBy?.email})</p>
        </div>
      ))}
    </div>
  );
}
