import React from 'react';
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      
      <section id="about-us" className="about-us-section">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to Flipr Blog! We are a passionate team of content creators, dedicated to providing the latest trends and insights on technology, business, personal development, and more. Our mission is to educate, inform, and inspire through high-quality articles crafted by experts in their respective fields.
          </p>
          <p>
            Whether you're here to learn about tech innovations, grow your business, or improve your personal skills, Flipr Blog is your one-stop destination for valuable content. Join us on this exciting journey!
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://media.istockphoto.com/photos/skyscraper-office-buiding-picture-id538674244?k=20&m=538674244&s=612x612&w=0&h=_WLY6lgzgsi_6W4YKWqWnievdMlTaJvHkFNOpfHxB6Y="
           
            className="about-image-img"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Articles Written</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Team Members</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="join-team-section">
        <h2>Join Our Team</h2>
        <p>
          We’re always on the lookout for passionate writers, content creators, and tech enthusiasts. If you're interested in contributing to Flipr Blog and sharing your story, we’d love to hear from you!
        </p>
        <button className="join-button">Subscribe & Join Us</button>
      </section>
    </div>
  );
}

export default AboutUs;
