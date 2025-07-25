import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import StarCircle from "../StarCircle";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-layout">
        {/* Left Side */}
        <div className="footer-overlay">
          <div className="footer-container">
            <div className="footer-column">
              <h3 className="footer-heading">APURA CLOUD</h3>
              <ul>
                <li>Apura IaaS</li>
                <li>Apura Workspace</li>
                <li>Apura Socials</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Roadmap</h3>
              <ul>
                <li>Stage 1</li>
                <li>Stage 2</li>
                <li>Stage 3</li>
                <li>Stage 4</li>
                <li>Stage 5</li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-links">
                <li>Help us on our journey</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
            <p className="copyright">
              © 2025 Apura Cloud. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="starcircle-container">
          <StarCircle count={12} radius={100} textsize={3} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
