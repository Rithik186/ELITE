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
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <h3>Private Line</h3>
            <p>+1 (555) ELITE-TX</p>
            <p>Available 24/7 for Global Concierge</p>
          </div>

          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <h3>Global Inquiries</h3>
            <p>concierge@elitecars.com</p>
          </div>

          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <h3>The Showroom</h3>
            <p>100 Elite Plaza, Hyderabad</p>
            <p>Telangana, India</p>
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
