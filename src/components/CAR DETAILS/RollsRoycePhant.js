import React, { useRef } from 'react';
import './Styles/Style.css';

function RollsRoycePhant() {
    const viewerRef = useRef(null);

    const toggleFullscreen = () => {
        if (viewerRef.current) {
            if (viewerRef.current.requestFullscreen) {
                viewerRef.current.requestFullscreen();
            } else if (viewerRef.current.webkitRequestFullscreen) {
                viewerRef.current.webkitRequestFullscreen();
            } else if (viewerRef.current.msRequestFullscreen) {
                viewerRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="car-detail-page">
            {/* Hero Section */}
            <section
                className="detail-hero"
                style={{ backgroundImage: `url('https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-components/Phantom-II-Discover-Full-Shot-1-R.jpg/jcr:content/renditions/original')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Rolls-Royce Phantom</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>Engine</h4>
                            <p>V12</p>
                        </div>
                        <div className="stat-item">
                            <h4>0-100 KM/H</h4>
                            <p>5.3 Sec</p>
                        </div>
                        <div className="stat-item">
                            <h4>Experience</h4>
                            <p>Serenity</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section: 3D & Video */}
            <section className="media-section">
                <div className="viewer-container">
                    <div className="container-header">
                        <h2 className="container-title">Bespoke 3D</h2>
                        <button className="fullscreen-btn" onClick={toggleFullscreen}>
                            <i className="fa fa-expand"></i> Bespoke Fullscreen
                        </button>
                    </div>
                    <div className="sketchfab-embed-wrapper" ref={viewerRef}>
                        <iframe
                            title="Rolls Royce Phantom 3D Viewer"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/1a2f117c8f1b4324b5a5dd70d38d396b/embed?ui_infos=0&ui_controls=1&ui_stop=0&ui_watermark=0&ui_watermark_link=0"
                            style={{ width: '100%', height: '500px', border: 'none' }}
                        ></iframe>
                    </div>
                </div>
                <div className="video-container">
                    <h2 className="container-title">The Spirit of Ecstasy</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/AsgXNQ0a_a8?start=45&autoplay=1&mute=1&rel=0"
                            title="Rolls-Royce Phantom Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">The Pinnacle of Luxury</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Magic Carpet Ride</h3>
                        <p>The self-leveling air suspension makes millions of calculations per second to ensure the most serene and smooth ride imaginable.</p>
                    </div>
                    <div className="feature-card">
                        <h3>The Gallery</h3>
                        <p>A unique space within the dashboard that allows owners to commission a piece of artwork, protected behind a single pane of glass.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Architecture of Luxury</h3>
                        <p>The all-aluminum spaceframe chassis provides extreme rigidity while being remarkably light, contributing to the silent "waftability" of the Phantom.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Technical Specifications</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>6.75L V12, Twin-Turbocharged</td></tr>
                        <tr><td>Max Power</td><td>563 hp @ 5,000 rpm</td></tr>
                        <tr><td>Max Torque</td><td>900 Nm @ 1,700 rpm</td></tr>
                        <tr><td>Top Speed</td><td>250 km/h (155 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 5.3 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>Rear-Wheel Drive (RWD)</td></tr>
                        <tr><td>Transmission</td><td>8-speed ZF Automatic</td></tr>
                        <tr><td>Features</td><td>Coach Doors, Starlight Headliner</td></tr>
                        <tr><td>Price</td><td>Starting at $460,000</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://i.pinimg.com/736x/71/e6/e7/71e6e73aa320b6550bddad3845bec8fd.jpg"
                    alt="Interior Starlight Headliner"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default RollsRoycePhant;
