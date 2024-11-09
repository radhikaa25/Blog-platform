import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <section className="privacy-policy-section">
        <h1>Privacy Policy</h1>
        <p>
          At Flipr Blog, we are committed to protecting your privacy. This Privacy Policy document outlines the types of personal information that is collected and recorded by Flipr Blog and how we use it.
        </p>

        <div className="section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect the following types of information:
          </p>
          <ul>
            <li>Personal information such as name, email address, and other contact details.</li>
            <li>Technical information including IP address, browser type, and cookies used to improve user experience.</li>
            <li>Usage data such as time spent on the site, pages visited, and actions taken on the website.</li>
          </ul>
        </div>

        <div className="section">
          <h2>2. How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul>
            <li>Improve and personalize user experience on our website.</li>
            <li>Send newsletters, promotional emails, and other relevant content.</li>
            <li>Respond to customer support inquiries and provide assistance.</li>
            <li>Monitor and analyze website traffic to improve the quality of our content.</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            Flipr Blog uses cookies and similar tracking technologies to enhance the user experience on our website. Cookies are small text files that are stored on your device and are used to collect data such as:
          </p>
          <ul>
            <li>Your browsing behavior on our website.</li>
            <li>Preferences for content and site layout.</li>
            <li>Tracking of ads shown to you and their effectiveness.</li>
          </ul>
          <p>
            You can manage your cookie preferences or disable cookies through your browser settings. However, some features of the website may not function properly if cookies are disabled.
          </p>
        </div>

        <div className="section">
          <h2>4. Data Security</h2>
          <p>
            We take the security of your personal information seriously and implement various security measures to protect your data. These include:
          </p>
          <ul>
            <li>Encryption of sensitive data during transmission.</li>
            <li>Access control policies to ensure that only authorized personnel can access your data.</li>
            <li>Regular monitoring of our website to prevent security breaches.</li>
          </ul>
        </div>

        <div className="section">
          <h2>5. Third-Party Services</h2>
          <p>
            We may share your information with trusted third-party services, including but not limited to:
          </p>
          <ul>
            <li>Analytics providers like Google Analytics to analyze traffic patterns.</li>
            <li>Advertising networks to show you targeted ads based on your browsing behavior.</li>
            <li>Customer support platforms to assist with inquiries and support tickets.</li>
          </ul>
        </div>

        <div className="section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. If you wish to exercise these rights or have any concerns regarding your personal data, please contact us through the contact information below.
          </p>
        </div>

        <div className="section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul>
            <li>Email: support@fliprblog.com</li>
            <li>Phone: +1 (800) 123-4567</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
