// AboutUs.jsx
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-banner">
        <h1>About Us</h1>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide innovative and reliable solutions to our
            customers, ensuring the highest quality of service while fostering a
            positive impact on society and the environment.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            We are committed to transparency, sustainability, and innovation. 
            Our core values drive everything we do to help improve the lives of 
            our clients and stakeholders.
          </p>
        </section>

        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3>Mike Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
