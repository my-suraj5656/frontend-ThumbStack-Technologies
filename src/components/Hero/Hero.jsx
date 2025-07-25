import React, { useEffect, useState } from "react";
import "./Hero.css";
import arrowimage from "../../assets/down-arrow.svg";
import Hamburger from "hamburger-react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero-container">
      {/* Logo */}
      <div className="logo">
        <span>APURA</span>
      </div>

      {/* Hamburger */}
      <div className="hamberger">
        <Hamburger
          size={16}
          distance="sm"
          toggled={isOpen}
          toggle={() => setIsOpen((prev) => !prev)}
        />
      </div>

      {/* Main Hero Content */}
      <div className="hero">
        {/* Desktop Nav */}
        <div className="hero-nav-container">
          <ul>
            {[
              "Products",
              "Road map",
              "Our mission",
              "For devs",
              "Contact us",
            ].map((item, i) => (
              <li key={i}>
                <div className="nav-item">
                  <span>{item}</span>
                  {(item === "Products" || item === "Road map") && (
                    <img src={arrowimage} alt="Arrow" className="arrow" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <ul>
            {[
              "Products",
              "Road map",
              "Our mission",
              "For devs",
              "Contact us",
            ].map((item, i) => (
              <li key={i}>
                <div className="nav-item" onClick={() => setIsOpen(false)}>
                  <span>{item}</span>
                  {(item === "Products" || item === "Road map") && (
                    <img src={arrowimage} alt="Arrow" className="arrow" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div className="backdrop" onClick={() => setIsOpen(false)}></div>
        )}

        {/* Hero Content */}
        <div className="hero-content">
          <h1>By Europeans, for Europeans</h1>
          <p>
            Privacy and security that Europeans need, demand and expect. Without
            giving other nations control over our data.
          </p>
        </div>

        {/* Footer */}
        <div className="hero-footer">
          {[
            ["No interference", "No third-party interference"],
            ["1st cloud platform", "To allow data control and ownership"],
            [
              "1st cloud platform",
              "To provide transparency over your data streams",
            ],
            ["1st cloud platform", "Cloud, hybrid, or on-prem form"],
          ].map(([title, desc], i) => (
            <div className="footer-nest-container" key={i}>
              <div className="line"></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
