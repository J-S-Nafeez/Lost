
// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Lost & Found Portal</div>

        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/items" onClick={() => setMenuOpen(false)}>Items</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button onClick={() => {
            onLogout();
            setMenuOpen(false);
          }}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
