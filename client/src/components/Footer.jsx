import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">Lost & Found</div>
          <p>Helping you find what's lost and return what's found across campus.</p>
        </div>

        <div className="footer-section1">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Create Post</a>
          <a href="#">My Items</a>
        </div>

        <div className="footer-section2">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Lost & Found Portal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
