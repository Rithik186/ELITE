import React from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function Porsche911() {
    return (
        <div>
            <center>
                <h1>Porsche 911 Turbo S</h1>
                <img
                    src="https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiTG60KvPhQ5OC9gfNWRKymI4r3IfaFnqURSvK3BC7vFYvy6EI5mfqirhMBk5fePBulv0j alt='Porsche 911 Turbo S'"
                    height="864px"
                    width="1536px"
                    alt="Porsche 911 Turbo S"
                />
                <p>
                    **A LEGEND REIMAGINED**
                    The Porsche 911 Turbo S is a marvel of engineering that redefines performance in the sports car world. With its iconic silhouette and unparalleled driving dynamics, it represents the pinnacle of Porsche's automotive expertise.
                </p>

{/* 3D View Section */}
<div>
                    <h1>Explore the Porsche 911 Turbo S in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <model-viewer
                        src="/MODEL/source/porsche_911_with_interior.glb" // Replace with the actual path to your .glb file
                        alt="A 3D model of the Ferrari LaFerrari"
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        auto-rotate
                        shadow-intensity="1"
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '2px solid #000',
                            borderRadius: '10px',
                        }}
                    >
                    </model-viewer>
                </div>


                <div className="video-container">
                    <h2>Porsche 911 Turbo S Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/nT2mjvWC3e8?start=10&autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0"
                            title="Porsche 911 Turbo S Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    Aerodynamically refined body with sharp lines and a commanding presence.
                    Active aerodynamics with a retractable rear spoiler for enhanced performance.
                    Available in a variety of timeless Porsche colors, including Guards Red and Racing Yellow.

                    <h2>Interior:</h2>
                    Luxurious cabin with premium leather and advanced tech features.
                    State-of-the-art infotainment system with Porsche Communication Management.
                    Sports seats designed for maximum comfort and support at high speeds.
                </p>
                <img
                    src="https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiTG60KvPhQ5OC9gfNWRKymI4r3IfaFnqURSvK3BC7vFYvy6EI5mfqirhMBk5fePBulv0j"
                    alt="Porsche 911 Turbo S Interior"
                />
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    A 3.8-liter twin-turbocharged flat-six engine that delivers a staggering 640 horsepower.
                    0-100 km/h in a blistering 2.7 seconds with a top speed of 330 km/h (205 mph).
                </p>
                <h2>Transmission:</h2>
                <p>
                    8-speed Porsche Doppelkupplung (PDK) transmission for lightning-fast shifts.
                </p>
                <h2>Driving Modes:</h2>
                <ul>
                    <li><b>Normal:</b> For everyday driving comfort and efficiency.</li>
                    <li><b>Sport:</b> Enhanced performance with a focus on dynamic handling.</li>
                    <li><b>Sport Plus:</b> Maximized power output and precision for track-like experiences.</li>
                </ul>
                <h1>Technical Specifications</h1>
                <table border="1" className="specs-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Engine Type</td>
                            <td>3.8L Twin-Turbocharged Flat-Six</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>640 hp</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>800 Nm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>330 km/h (205 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 2.7 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>1,640 kg</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>All-Wheel Drive (AWD)</td>
                        </tr>
                        <tr>
                            <td>Chassis</td>
                            <td>Lightweight Aluminum Construction</td>
                        </tr>
                        <tr>
                            <td>Brakes</td>
                            <td>Ceramic Composite Brakes</td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td>Petrol (Premium)</td>
                        </tr>
                        <tr>
                            <td>Tank Capacity</td>
                            <td>67 liters (17.7 gallons).</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>Approx 15 mpg (city) and 20 mpg (highway)</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>8-speed PDK dual-clutch automatic</td>
                        </tr>
                        <tr>
                            <td>Unique Selling Point</td>
                            <td>Combines track-level performance with daily drivability.</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Starting at $200,000.</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjJu5PcI7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiTG60KvPhQ5OC9gfNWRKymI4r3IfaFnqURSvK3BC7vFYvy6EI5mfqirhMBk5fePBulv0j"
                    height="800px"
                    width="1200px"
                    alt="Porsche 911 Turbo S Side"
                />
            </center>
        </div>
    );
}

export default Porsche911;
