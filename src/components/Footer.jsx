import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: About Us */}
        <div className="footer-left">
          <h3>About Us</h3>
          <p>Logoipsum is your go-to platform for the latest news, insights, and trends in the world of technology, business, and lifestyle.</p>
        </div>

        {/* Middle Section: Navbar links */}
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Another Section: Privacy Policy, Author, Category */}
        <div className="footer-links">
          <h3>Another Links</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
