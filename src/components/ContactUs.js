import React from 'react';
import './ContactUs.css';  // Link to the ContactUs.css file
import 'font-awesome/css/font-awesome.min.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>
      <p>Feel free to reach out to us through the following methods:</p>
      <p>
        <i className="fa fa-phone"></i> Phone: +1 (555) 123-4567
      </p>
      <p>
        <i className="fa fa-envelope"></i> Email: Elitecars777@gmail.com
      </p>
      <p>
        <i className="fa fa-map-marker"></i> Address: India
      </p>
    </div>
  );
}

export default ContactUs;
