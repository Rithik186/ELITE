import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <center>
      <div className="about-us">
      <title>ELITE CAR SHOWROOM</title>
        <h2 className="about-us-title">About Us!</h2>

        <h2 className="about-us-heading">
          Welcome To <span className="about-us-name">ELITE CAR SHOWROOM</span>
        </h2>

        <p className="about-us-paragraph">
          <span className="about-us-name">ELITE CAR SHOWROOM</span> is a Professional <span className="about-us-type">CAR SALES</span> Platform.
          Here we will only provide you with interesting content that you will enjoy very much. We are committed to providing you the best of
          <span className="about-us-type">CAR SALES</span>, with a focus on reliability and <span className="about-us-spec">LUXURY CARS ONLY</span>.
          We strive to turn our passion for <span className="about-us-type">CAR SALES</span> into a thriving website. We hope you enjoy our 
          <span className="about-us-type">CAR SALES</span> as much as we enjoy giving them to you.
        </p>

        <p className="about-us-paragraph">
          I will keep on posting such valuable and knowledgeable information on my website for all of you. Your love and support matter a lot.
        </p>

        <p className="about-us-thank-you">
          Thank you for visiting our site
          <br />
          <br />
          <span className="about-us-thank-you-message">Have a great day!</span>
        </p>

        <div className="brand-partners">
          <h2 className="brand-partners-title">Our Official Brand Partners</h2>
          <div className="brand-logos">
            <img src="/images/lambo.webp" alt="Brand 1" className="brand-logo" />
            <img src="/images/ferrari.webp" alt="Brand 2" className="brand-logo" />
            <img src="/images/pagani.png" alt="Brand 3" className="brand-logo" />
            <img src="/images/porsche.png" alt="Brand 4" className="brand-logo" />
            <img src="/images/rollsroyce.jpg" alt="Brand 5" className="brand-logo" />
            <img src="/images/bugatti.png" alt="Brand 6" className="brand-logo" />
          </div>
        </div>
      </div>
    </center>
  );
}

export default AboutUs;
