import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Logo 1.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        
        <img 
          src={logo1} 
          alt="Flipr Blog Logo" 
          style={styles.logoImage} 
        />
      </div>
     
      <nav style={{ ...styles.nav, ...(isMenuOpen ? styles.navOpen : {}) }}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
        <Link to="/about-us" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/subscribe" className="cta-btn">Subscribe Now</Link> 
      </nav>
     
      <div onClick={toggleMenu} style={styles.hamburgerIcon}>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#fff',
    position: 'relative',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '150px',  
    height: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  navOpen: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#333',
    width: '100%',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    display: 'flex',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '5px 10px',
    transition: 'color 0.3s ease',
  },

  subscribeBtn: {
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  hamburgerIcon: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  burgerLine: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '4px 0',
  },
 
  '@media screen and (max-width: 375px)': {
    header: {
      justifyContent: 'space-between',
    },
    nav: {
      display: 'none', 
      flexDirection: 'column',
      backgroundColor: '#333',
      width: '100%',
      padding: '20px',
    },
    navOpen: {
      display: 'flex', 
    },
    hamburgerIcon: {
      display: 'flex', 
    },
  },

  
  '@media screen and (max-width: 768px)': {
    header: {
      justifyContent: 'space-between',
    },
    nav: {
      display: 'none', 
      flexDirection: 'column',
      backgroundColor: '#333',
      width: '100%',
      padding: '20px',
    },
    navOpen: {
      display: 'flex', 
    },
    hamburgerIcon: {
      display: 'flex', 
    },
  },
};

export default Header;
