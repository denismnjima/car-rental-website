// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link>
          <img src={Logo}/>
          </Link>
          <h2>Mistway Limited</h2>
          <h4 className="title">Location:</h4>
          <p>St Ellis House, Room 409,Wabera street, Nairobi Kenya</p>

          <h4 className="title">Support email:</h4>
          <a href="mailto:amey@mitsway.afica">amey@mitsway.afica</a>

          <h4 className="title">Call us</h4>
          <a href="tel:+254721731678">+254721731678</a>
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
        <p>&copy; 2025  Mistway Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
