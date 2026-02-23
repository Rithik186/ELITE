import React, { useRef } from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function LamboAven() {
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
                style={{ backgroundImage: `url('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_01.jpg')` }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-info">
                    <h1>Lamborghini Aventador</h1>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>Power</h4>
                            <p>769 HP</p>
                        </div>
                        <div className="stat-item">
                            <h4>0-100 KM/H</h4>
                            <p>2.8 Sec</p>
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
                        <h2 className="container-title">3D Experience</h2>
                        <button className="fullscreen-btn" onClick={toggleFullscreen}>
                            <i className="fa fa-expand"></i> View Fullscreen
                        </button>
                    </div>
                    <model-viewer
                        ref={modelViewerRef}
                        src="/MODEL/source/lamborghini_aventador_lp750-4_sv.glb"
                        alt="3D model of Lamborghini Aventador"
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
                    <h2 className="container-title">Cinema</h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/HrWUMYqdNSk?autoplay=1&mute=1&rel=0"
                            title="Lamborghini Aventador Promo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="container-title">Engineering Excellence</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Aerodynamics</h3>
                        <p>Aerospace-inspired design with active rear spoilers and optimized air intakes for maximum stability at high velocities.</p>
                    </div>
                    <div className="feature-card">
                        <h3>V12 DNA</h3>
                        <p>The naturally aspirated 6.5-liter V12 engine remains the heartbeat of this legend, delivering raw, unadulterated power.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Lightweight</h3>
                        <p>A full carbon-fiber monocoque chassis provides exceptional structural rigidity while keeping weight at a minimum.</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className="specs-section">
                <h2 className="container-title">Technical Specifications</h2>
                <table className="specs-table">
                    <tbody>
                        <tr><td>Engine</td><td>6.5L V12, Naturally Aspirated</td></tr>
                        <tr><td>Max Power</td><td>769 hp @ 8,500 rpm</td></tr>
                        <tr><td>Max Torque</td><td>720 Nm @ 6,750 rpm</td></tr>
                        <tr><td>Top Speed</td><td>350 km/h (217 mph)</td></tr>
                        <tr><td>Acceleration</td><td>0-100 km/h in 2.8 seconds</td></tr>
                        <tr><td>Drivetrain</td><td>All-Wheel Drive (AWD)</td></tr>
                        <tr><td>Chassis</td><td>Carbon-Fiber Monocoque</td></tr>
                        <tr><td>Brakes</td><td>Carbon-Ceramic Brakes</td></tr>
                        <tr><td>Price</td><td>Starting at $500,000</td></tr>
                    </tbody>
                </table>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <img
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/2021/restyle_03_05/aven_s_over_01.jpg"
                    alt="Interior"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>
        </div>
    );
}

export default LamboAven;
