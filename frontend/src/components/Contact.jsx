import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-layout">
        <div className="contact-copy">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">
            Have questions about products, the cart, or API integration? Send a
            quick message using the form.
          </p>

          <div className="contact-info-block">
            <p>
              <span className="contact-info-label">Email:</span>{" "}
              <span className="contact-info-value">
                support@myapp.local
              </span>
            </p>
            <p>
              <span className="contact-info-label">Support hours:</span>{" "}
              <span className="contact-info-value">
                Monday – Friday, 10:00 – 18:00 IST
              </span>
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This is a demo contact form. No message is sent.");
          }}
        >
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-input contact-textarea"
              placeholder="Tell us how we can help..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary contact-submit">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
