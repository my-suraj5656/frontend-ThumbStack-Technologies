import React from "react";
import "./Section.css";
const Section1 = () => {
  return (
    <div className="main-section-container">
      <div className="section-upper">
        <div>
          <h1>Join the future of data sovereignty</h1>
        </div>
        <div className="upper-input-container">
          <input type="text" placeholder="Enter your email" />
          <button>Join</button>
        </div>
      </div>

      <div className="section-line"></div>
      <div className="section-bottom">
        <h1>
          APURA is an ecosystem dedicated to the privacy and security of their
          users; completely build from scratch.
        </h1>
      </div>
      <div className="section-line">
        <p>Dynamic infrastructure</p>
      </div>
    </div>
  );
};

export default Section1;
