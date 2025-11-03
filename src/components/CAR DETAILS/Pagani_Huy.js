import React from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function Pagani_Huy() {
    return (
        <div>
            <center>
                <h1>Pagani Huayra</h1>
                <img
                    src="https://4kwallpapers.com/images/walls/thumbs_3t/20075.jpg"
                    height="864px"
                    width="1536px"
                    alt="Pagani Huayra"
                />
                <p>
                    **ART IN MOTION**  
                    The Pagani Huayra combines exceptional performance with breathtaking design. Known as a hypercar masterpiece, it delivers an unparalleled driving experience with handcrafted precision and cutting-edge aerodynamics.
                </p>

                {/* 3D View Section */}
                <div>
                    <h1>Explore the Pagani Huayra in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <model-viewer
                        src="/MODEL/source/2022_pagani_huayra_codalunga.glb" // Replace with the actual path to your .glb file
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
                    <h2>Pagani Huayra Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/Wc2UN3yL2CU?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0"
                            title="Pagani Huayra Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    A blend of sculptural artistry and advanced aerodynamics.
                    Active aerodynamics system that adjusts to driving conditions for optimal performance.
                    Signature gull-wing doors for iconic Pagani style.

                    <h2>Interior:</h2>
                    Luxuriously handcrafted cabin featuring premium leather and carbon fiber accents.
                    Futuristic dashboard with analog and digital instrumentation.
                    Attention to detail that reflects Pagani’s commitment to excellence.
                </p>
                <img
                    src="https://www.carscoops.com/wp-content/uploads/2020/05/Pagani-Huayra-Roadster-12.jpg"
                    alt="Pagani Huayra Interior"
                />
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    A Mercedes-AMG sourced 6.0-liter twin-turbocharged V12 engine, producing an astonishing 720 horsepower.
                    0-100 km/h in 2.8 seconds with a top speed of 370 km/h (230 mph).
                </p>
                <h2>Transmission:</h2>
                <p>
                    7-speed sequential gearbox optimized for lightning-fast shifts.
                </p>
                <h2>Driving Modes:</h2>
                <ul>
                    <li><b>Comfort:</b> For smooth and relaxed driving.</li>
                    <li><b>Sport:</b> Enhanced dynamics for spirited driving.</li>
                    <li><b>Track:</b> Maximum precision and performance for racing conditions.</li>
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
                            <td>6.0L Twin-Turbocharged V12</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>720 hp</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>1000 Nm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>370 km/h (230 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 2.8 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>1,350 kg</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>Rear-Wheel Drive (RWD)</td>
                        </tr>
                        <tr>
                            <td>Chassis</td>
                            <td>Carbon-Titanium Monocoque</td>
                        </tr>
                        <tr>
                            <td>Brakes</td>
                            <td>Carbon Ceramic Brakes</td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td>Petrol (Premium).</td>
                        </tr>
                        <tr>
                            <td>Tank Capacity</td>
                            <td>85 liters (22.5 gallons).</td>
                        </tr>
                        <tr>
                            <td>0-60 mph</td>
                            <td>2.8 seconds</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Starts at $2.4 million</td>
                        </tr>
                        <tr>
                            <td>Unique Fact</td>
                            <td>Named after Huayra Tata, a South American wind god</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://www.hdwallpapers.in/download/pagani_huayra_nc_2022_car_4k_5k_hd_cars-HD.jpg"
                    height="800px"
                    width="1200px"
                    alt="Pagani Huayra Rear View"
                />
            </center>
        </div>
    );
}

export default Pagani_Huy;
