import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-up">ELITE CAR SHOWROOM</h1>
          <p className="hero-subtitle animate-up-delay">Where Dreams Take the Wheel</p>
          <div className="hero-btns animate-up-long">
            <Link to="/cars" className="btn btn-primary">Explore Collection</Link>
            <Link to="/aboutus" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <i className="fa fa-bolt"></i>
          <h3>Performance</h3>
          <p>Unmatched speed and power in every model</p>
        </div>
        <div className="stat-card">
          <i className="fa fa-diamond"></i>
          <h3>Luxury</h3>
          <p>Handcrafted interiors with premium materials</p>
        </div>
        <div className="stat-card">
          <i className="fa fa-shield"></i>
          <h3>Precision</h3>
          <p>Expert engineering for the perfect drive</p>
        </div>
      </section>

      {/* Featured Cars Preview */}
      <section className="featured-preview">
        <h2 className="section-title">The Pioneers of Speed</h2>
        <div className="car-grid">
          <div className="car-card">
            <div className="car-image-container">
              <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_01.jpg" alt="Lamborghini" />
            </div>
            <div className="car-info">
              <h3>Lamborghini</h3>
              <p>The ultimate super sports car.</p>
              <Link to="/cars/lamborghini" className="view-btn">View Details</Link>
            </div>
          </div>
          <div className="car-card">
            <div className="car-image-container">
              <img src="https://images.ferrari.com/is/image/ferrariwr/1636985732159_01_laferrari-aperta_ext_34f_white_2016?wid=1024&hei=683" alt="Ferrari" />
            </div>
            <div className="car-info">
              <h3>Ferrari</h3>
              <p>Passion and excellence on wheels.</p>
              <Link to="/cars/ferrari" className="view-btn">View Details</Link>
            </div>
          </div>
          <div className="car-card">
            <div className="car-image-container">
              <img src="https://www.bugatti.com/fileadmin/_processed_/b/c/csm_chiron-pur-sport-hero_f8d6b1d4c7.jpg" alt="Bugatti" />
            </div>
            <div className="car-info">
              <h3>Bugatti</h3>
              <p>Defining the peak of performance.</p>
              <Link to="/cars/bugatti" className="view-btn">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to drive your dream?</h2>
          <p>Contact our experts to find the perfect car for your elite lifestyle.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
