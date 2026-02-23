import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>True Excellence</h1>
          <p className="hero-subtitle">The World's Most Elite Collection</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Heritage</h2>
          <p>
            Founded on the principles of absolute perfection, ELITE CAR SHOWROOM
            is more than just a dealership. We are curators of automotive history,
            offering only the most exclusive hypercars and luxury vehicles ever engineered.
          </p>
          <p>
            Every vehicle in our collection undergoes a rigorous certification process
            to ensure it meets our uncompromising standards of performance, provenance,
            and aesthetic perfection.
          </p>
        </div>
        <div className="mission-image">
          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070" alt="Showroom Excellence" />
        </div>
      </section>

      {/* Values Section */}
      <section className="values-grid">
        <div className="value-card">
          <i className="fa fa-diamond"></i>
          <h3>Uncompromising Quality</h3>
          <p>Direct partnerships with top-tier manufacturers ensure every part of our service is authentic.</p>
        </div>
        <div className="value-card">
          <i className="fa fa-shield"></i>
          <h3>Absolute Integrity</h3>
          <p>Transparency is the foundation of our relationships with collectors and enthusiasts worldwide.</p>
        </div>
        <div className="value-card">
          <i className="fa fa-globe"></i>
          <h3>Global Network</h3>
          <p>Access to private collections and limited-run allocations that aren't available to the general public.</p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section">
        <h2>Our Official Heritage Partners</h2>
        <div className="partner-logos">
          <img src="/images/lambo.webp" alt="Lamborghini" />
          <img src="/images/ferrari.webp" alt="Ferrari" />
          <img src="/images/pagani.png" alt="Pagani" />
          <img src="/images/porsche.png" alt="Porsche" />
          <img src="/images/rollsroyce.jpg" alt="Rolls-Royce" />
          <img src="/images/bugatti.png" alt="Bugatti" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
