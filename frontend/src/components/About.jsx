import React from "react";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          Learn more about our mission, vision, and the team behind this platform.
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2 className="about-section-title">Our Story</h2>
          <p>
            We started with a simple goal: to build a modern, intuitive storefront
            that makes managing products and shopping easy for everyone.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p>
            To empower creators and shoppers with a seamless, secure, and beautiful
            e-commerce experience.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Get in Touch</h2>
          <p>
            Have questions or feedback? Reach out via our <a href="/contact">Contact</a> page.
          </p>
        </div>
      </section>
    </div>
  );
}
