import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real app, send to backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contactPage">
      <div className="contactHero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us today!</p>
      </div>

      <div className="contactContainer">
        <div className="contactGrid">
          <div className="contactInfo">
            <h2>Get in Touch</h2>

            <div className="infoCard">
              <h3>📍 Address</h3>
              <p>123 Fashion Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>

            <div className="infoCard">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="infoCard">
              <h3>✉️ Email</h3>
              <p>support@fashionstore.com</p>
              <p>info@fashionstore.com</p>
            </div>

            <div className="infoCard">
              <h3>🕐 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>

            <div className="formGroup">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                rows={6}
                required
              />
            </div>

            <button type="submit" className="submitBtn">
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>

            {submitted && (
              <p className="successMsg">
                Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
