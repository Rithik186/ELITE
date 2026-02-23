import React, { useRef } from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function BugattiChi() {
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
                style={{ backgroundImage: `url('https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_1.jpg')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Bugatti Chiron</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>Peak Power</h4>
                            <p>1,479 HP</p>
                        </div>
                        <div className="stat-item">
                            <h4>0-100 KM/H</h4>
                            <p>2.4 Sec</p>
                        </div>
                        <div className="stat-item">
                            <h4>Top Speed</h4>
                            <p>420 KM/H</p>
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
                        src="/MODEL/source/free_bugatti_chiron.glb"
                        alt="3D model of Bugatti Chiron"
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
                    <h2 className="container-title">Power Film</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/_0YXkCN4yJw?autoplay=1&mute=1&rel=0"
                            title="Bugatti Chiron Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">Masterpiece of Engineering</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>W16 Heart</h3>
                        <p>The 8.0-liter quad-turbocharged W16 engine is a feat of modern engineering, consuming 60,000 liters of air per minute at top speed.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Hypersonic Aero</h3>
                        <p>Every curve is functional. The active rear wing provides massive downforce at speed or acts as an airbrake during high-speed deceleration.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Bespoke Luxury</h3>
                        <p>Each interior is a "one-of-one" creation, using the finest hides, rare metals, and individual stitching to meet the owner's exact vision.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Technical Specifications</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>8.0L W16, Quad-Turbocharged</td></tr>
                        <tr><td>Max Power</td><td>1,479 hp @ 6,700 rpm</td></tr>
                        <tr><td>Max Torque</td><td>1,600 Nm @ 2,000 rpm</td></tr>
                        <tr><td>Top Speed</td><td>420 km/h (261 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 2.4 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>All-Wheel Drive (AWD)</td></tr>
                        <tr><td>Chassis</td><td>Full Carbon-Fiber Monocoque</td></tr>
                        <tr><td>Brakes</td><td>AP Racing Carbon-Ceramic</td></tr>
                        <tr><td>Base Price</td><td>$3,000,000</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_6.jpg"
                    alt="Interior Detail"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default BugattiChi;
