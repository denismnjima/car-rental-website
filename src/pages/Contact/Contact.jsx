// ContactUs.jsx
import React, { useState } from "react";
import "./Contact.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: "Thank you! Your message has been received.",
        error: null
      });
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="banner">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions or comments!</p>
      </div>

      <div className="contact-form-section">
        <div className="form-wrapper">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {formStatus.success && <p className="success-message">{formStatus.success}</p>}
            {formStatus.error && <p className="error-message">{formStatus.error}</p>}

            <button type="submit" className="submit-btn" disabled={formStatus.submitting}>
              {formStatus.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Contact;