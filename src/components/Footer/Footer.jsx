// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Mistay Limited</h2>
          <p>Your trusted patner for transportaation and supply services in Kenya.</p>
          <p>Email: amey@mitsway.afica</p>
          <p>Phone: +254721731678</p>
        </div>

        <div className="footer-center">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/19peC7nk5e/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+254721731678" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h2>Company Info</h2>
          <p>St Ellis House, Room 409</p>
          <p>Wabera street, Nairobi Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
