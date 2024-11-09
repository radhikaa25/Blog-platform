import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Category from './pages/Category';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Author from './pages/Author';
import Footer from './components/Footer';
import Subscribe from './pages/Subscribe'; 

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
