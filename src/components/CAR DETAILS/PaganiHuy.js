import React, { useRef } from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function PaganiHuy() {
    const modelViewerRef = useRef(null);

    const toggleFullscreen = () => {
        if (modelViewerRef.current) {
            if (modelViewerRef.current.requestFullscreen) {
                modelViewerRef.current.requestFullscreen();
            } else if (modelViewerRef.current.webkitRequestFullscreen) {
                modelViewerRef.current.webkitRequestFullscreen();
            } else if (modelViewerRef.current.msRequestFullscreen) {
                modelViewerRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="car-detail-page">
            {/* Hero Section */}
            <section
                className="detail-hero"
                style={{ backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/20075.jpg')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Pagani Huayra</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>AMG Power</h4>
                            <p>720 HP</p>
                        </div>
                        <div className="stat-item">
                            <h4>Weight</h4>
                            <p>1,350 KG</p>
                        </div>
                        <div className="stat-item">
                            <h4>Top Speed</h4>
                            <p>370 KM/H</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section: 3D & Video */}
            <section className="media-section">
                <div className="viewer-container">
                    <div className="container-header">
                        <h2 className="container-title">Kinetic Art 3D</h2>
                        <button className="fullscreen-btn" onClick={toggleFullscreen}>
                            <i className="fa fa-expand"></i> View Fullscreen
                        </button>
                    </div>
                    <model-viewer
                        ref={modelViewerRef}
                        src="/MODEL/source/2022_pagani_huayra_codalunga.glb"
                        alt="3D model of Pagani Huayra"
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        auto-rotate
                        shadow-intensity="1"
                        style={{ width: '100%', height: '500px' }}
                    >
                    </model-viewer>
                </div>
                <div className="video-container">
                    <h2 className="container-title">The Sound of Wind</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/Wc2UN3yL2CU?autoplay=1&mute=1&rel=0"
                            title="Pagani Huayra Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">The God of Wind</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Carbo-Titanium</h3>
                        <p>The chassis is a masterpiece of materials science, utilizing a unique weave of carbon fiber and titanium for extreme strength and weight reduction.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Active Aero</h3>
                        <p>Four independently controlled flaps on the corners of the car adjust constantly, providing the perfect balance between drag and downforce.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Horacio's Vision</h3>
                        <p>Every bolt, switch, and dial is designed as a standalone piece of art, reflecting Pagani's philosophy that a car should be a beautiful object.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Bespoke Specifications</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>6.0L Twin-Turbo V12 (Mercedes-AMG)</td></tr>
                        <tr><td>Max Power</td><td>720 hp</td></tr>
                        <tr><td>Max Torque</td><td>1000 Nm</td></tr>
                        <tr><td>Top Speed</td><td>370 km/h (230 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 2.8 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>Rear-Wheel Drive (RWD)</td></tr>
                        <tr><td>Chassis</td><td>Carbon-Titanium Monocoque</td></tr>
                        <tr><td>Brakes</td><td>Brembo Carbon-Ceramic</td></tr>
                        <tr><td>Base Price</td><td>Starts at $2.4 Million</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://www.carscoops.com/wp-content/uploads/2020/05/Pagani-Huayra-Roadster-12.jpg"
                    alt="Interior Sculpture"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default PaganiHuy;
