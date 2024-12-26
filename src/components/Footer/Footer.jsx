// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out to us at any time.</p>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 123 456 7890</p>
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
          <p>Nairobi</p>
          <p>Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
