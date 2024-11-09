
import React, { useState } from 'react';
import './Subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate subscription
    if (email) {
      setIsSubmitted(true);
      console.log(`User subscribed with email: ${email}`);
     
    }
  };

  return (
    <div className="subscribe-container">
      <section className="subscribe-content">
        <h1>Join Our Community</h1>
        <p>Subscribe to our blog and stay updated with the latest trends and insights on technology, business, personal development, and more.</p>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group">
              <label>Enter your email address</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email"
                required
              />
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        ) : (
          <div className="success-message">
            <h3>Thank you for subscribing!</h3>
            <p>You will receive updates directly in your inbox.</p>
          </div>
        )}
      </section>

      <section className="subscribe-benefits">
        <h2>Why Subscribe?</h2>
        <ul>
          <li>Get exclusive insights from industry experts</li>
          <li>Receive the latest blog posts directly in your inbox</li>
          <li>Stay ahead with curated content on business, tech, and personal growth</li>
          <li>Join a community of like-minded individuals</li>
        </ul>
      </section>
    </div>
  );
}

export default Subscribe;
