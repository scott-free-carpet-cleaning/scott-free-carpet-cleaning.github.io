// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Your Carpet Cleaners</h1>
        <p>Bringing Life Back to Your Carpets!</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Carpet Cleaning</h3>
          <p>We use advanced techniques to ensure deep cleaning and removal of stubborn stains.</p>
        </div>
        <div className="service">
          <h3>Upholstery Cleaning</h3>
          <p>Revitalize your furniture with our professional upholstery cleaning services.</p>
        </div>
        <div className="service">
          <h3>Stain Removal</h3>
          <p>We specialize in removing tough stains, leaving your carpets looking fresh and new.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Ready to experience the difference? Contact us now for a sparkling clean home!</p>
        <button className="contact-button">Get a Quote</button>
      </section>

      <footer className="footer">
        <div className="footer-column">
          <h3>Location</h3>
          <p>Your City, State</p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: info@yourcarpetcleaners.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Connect with us on social media for the latest updates and promotions.</p>
          {/* Add social media icons or links here */}
        </div>
      </footer>
    </div>
  );
}

export default App;