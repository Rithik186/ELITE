import React, { useRef } from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function FerrariLa() {
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
                style={{ backgroundImage: `url('https://cdn.prod.website-files.com/662e6423ff88861916362956/6696f3dd1f4290298272f43a_SL-USQk12S18E6OISrXzK-3YRRduQ-Nn8Wdfav1qXQ0.webp')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Ferrari LaFerrari</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>Hybrid Power</h4>
                            <p>950 HP</p>
                        </div>
                        <div className="stat-item">
                            <h4>0-100 KM/H</h4>
                            <p>2.6 Sec</p>
                        </div>
                        <div className="stat-item">
                            <h4>Top Speed</h4>
                            <p>350 KM/H</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section: 3D & Video */}
            <section className="media-section">
                <div className="viewer-container">
                    <div className="container-header">
                        <h2 className="container-title">Precision 3D</h2>
                        <button className="fullscreen-btn" onClick={toggleFullscreen}>
                            <i className="fa fa-expand"></i> View Fullscreen
                        </button>
                    </div>
                    <model-viewer
                        ref={modelViewerRef}
                        src="/MODEL/source/ferrari_laferrari.glb"
                        alt="3D model of Ferrari LaFerrari"
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
                    <h2 className="container-title">Performance Film</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/iRsV6YpLsKA?autoplay=1&mute=1&rel=0"
                            title="LaFerrari Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">Legendary Engineering</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>HY-KERS</h3>
                        <p>The most complex and advanced hybrid system ever developed for a Ferrari, combining a V12 with an electric motor for maximum torque.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Active Aero</h3>
                        <p>Dynamic aerodynamic surfaces that adjust in real-time to optimize downforce and minimize drag across all speed ranges.</p>
                    </div>
                    <div className="feature-card">
                        <h3>F1 Heritage</h3>
                        <p>Technology directly derived from Scuderia Ferrari's Formula 1 efforts, from the steering wheel controls to the chassis construction.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Technical Data</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>6.3L V12 Hybrid</td></tr>
                        <tr><td>Combined Power</td><td>950 hp @ 9,000 rpm</td></tr>
                        <tr><td>Max Torque</td><td>900 Nm</td></tr>
                        <tr><td>Top Speed</td><td>350 km/h (217 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 2.6 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>Rear-Wheel Drive (RWD)</td></tr>
                        <tr><td>Chassis</td><td>Hand-laid Carbon-Fiber Monocoque</td></tr>
                        <tr><td>Brakes</td><td>Brembo CCM3 Carbon-Ceramic</td></tr>
                        <tr><td>Resale Value</td><td>Exceeds $3.5 Million</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/398000/600/398669.jpg"
                    alt="Interior Cockpit"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default FerrariLa;
