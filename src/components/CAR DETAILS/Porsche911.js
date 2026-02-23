import React, { useRef } from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function Porsche911() {
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
                style={{ backgroundImage: `url('https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiTG60KvPhQ5OC9gfNWRKymI4r3IfaFnqURSvK3BC7vFYvy6EI5mfqirhMBk5fePBulv0j')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Porsche 911 Turbo S</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>Engine</h4>
                            <p>640 HP</p>
                        </div>
                        <div className="stat-item">
                            <h4>0-100 KM/H</h4>
                            <p>2.7 Sec</p>
                        </div>
                        <div className="stat-item">
                            <h4>Peak Speed</h4>
                            <p>330 KM/H</p>
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
                        src="/MODEL/source/porsche_911_with_interior.glb"
                        alt="3D model of Porsche 911 Turbo S"
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
                    <h2 className="container-title">Engineering Film</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/nT2mjvWC3e8?start=10&autoplay=1&mute=1&rel=0"
                            title="Porsche 911 Turbo S Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">The Benchmark</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Twin-Turbo Flat-Six</h3>
                        <p>The 3.8-liter boxer engine is the heart of the Turbo S, featuring larger VTG turbochargers to deliver an explosive 640 hp.</p>
                    </div>
                    <div className="feature-card">
                        <h3>8-Speed PDK</h3>
                        <p>The Porsche Doppelkupplung (PDK) transmission allows for lightning-fast gear changes in milliseconds without interrupting the flow of power.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Daily Supercar</h3>
                        <p>Unlike most hypercars, the 911 Turbo S offers incredible comfort and practicality, making it a true daily-driven performance beast.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Technical Data</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>3.8L Twin-Turbocharged Flat-Six</td></tr>
                        <tr><td>Max Power</td><td>640 hp</td></tr>
                        <tr><td>Max Torque</td><td>800 Nm</td></tr>
                        <tr><td>Top Speed</td><td>330 km/h (205 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 2.7 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>All-Wheel Drive (AWD)</td></tr>
                        <tr><td>Transmission</td><td>8-speed PDK Dual-Clutch</td></tr>
                        <tr><td>Brakes</td><td>Porsche Ceramic Composite (PCCB)</td></tr>
                        <tr><td>Price</td><td>Starting at $230,000</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiTG60KvPhQ5OC9gfNWRKymI4r3IfaFnqURSvK3BC7vFYvy6EI5mfqirhMBk5fePBulv0j"
                    alt="Interior Cockpit"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default Porsche911;
