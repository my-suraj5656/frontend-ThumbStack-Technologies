import React from "react";
import "./Section5.css";

const Section5 = () => {
  return (
    <div className="section5-container">
      {/* Upper Section */}
      <div className="upper-section">
        <h2>Become a supporter and help us on our Journey</h2>
        <button className="support-button">
          Read more about how to <span className="arrow">→</span>
        </button>
      </div>

      {/* Lower Section */}
      <div className="lower-section">
        <div className="newsletter-text">
          <h2>Subscribe to our Newsletter</h2>
          <p>
            If you want to follow our progress on developing what Europeans want
            and need, done by Europeans.
          </p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <span className="newsletter-arrow">→</span>
          <button>Subscribe to our newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
