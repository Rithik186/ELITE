import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-page-container">
      {/* Contact Hero */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Visit our private showroom or schedule a consultation</p>
      </section>

      <div className="contact-content">
        {/* Contact Information */}
        <aside className="info-sidebar">
          <div className="info-item user-profile-item">
            <i className="fa fa-user"></i>
            <h3>Founder</h3>
            <p>Rithik Kannaa K</p>
            <a
              href="https://www.linkedin.com/in/rithikkannaa-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fa fa-linkedin-square"></i> Professional Portfolio
            </a>
          </div>

          <div className="info-item">
            <i className="fa fa-phone"></i>
            <h3>Private Concierge</h3>
            <p>+91 (PRIVATE) ELITE</p>
            <p>Exclusive 24/7 support for registered collectors</p>
          </div>

          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <h3>The Showroom</h3>
            <p>Elite Horizon, Coimbatore</p>
            <p>Tamilnadu, India</p>
          </div>

          <div className="info-item">
            <i className="fa fa-clock-o"></i>
            <h3>Showroom Hours</h3>
            <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
            <p>Sunday: By Appointment Only</p>
          </div>
        </aside>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Wick" required />
            </div>
            <div className="form-group full">
              <label>Email Address</label>
              <input type="email" placeholder="john.wick@continental.com" required />
            </div>
            <div className="form-group full">
              <label>Subject</label>
              <input type="text" placeholder="Custom Configuration Inquiry" required />
            </div>
            <div className="form-group full">
              <label>Your Message</label>
              <textarea rows="6" placeholder="I am interested in the latest Bugatti allocation..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
