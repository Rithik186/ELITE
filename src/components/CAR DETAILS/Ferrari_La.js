import React from 'react';
import './Styles/Style.css';
import '@google/model-viewer';


function Ferrari_La() {
    return (
        <div>
            <center>
                <h1>LaFerrari 2015</h1>
                <img
                    src="https://cdn.prod.website-files.com/662e6423ff88861916362956/6696f3dd1f4290298272f43a_SL-USQk12S18E6OISrXzK-3YRRduQ-Nn8Wdfav1qXQ0.webp"
                    height="864px"
                    width="1536px"
                />
                <p>
                    THE PINNACLE OF FERRARI TECHNOLOGY
                    LaFerrari represents Ferrari's most ambitious project: to push the boundaries of innovation and set a new benchmark in the automotive world. It is a showcase of advanced technology, performance, and design.
                </p>

                {/* 3D View Section */}
                <div>
                    <h1>Explore the LaFerrari in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <model-viewer
                        src="/MODEL/source/ferrari_laferrari.glb" // Replace with the actual path to your .glb file
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
                    <h2>LaFerrari Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/iRsV6YpLsKA?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0"
                            title="LaFerrari Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    Sculpted aerodynamic design with a low, aggressive profile.
                    Carbon-fiber body with active aerodynamics for maximum efficiency.
                    Iconic red finish symbolizing Ferrari’s heritage.

                    <h2>Interior:</h2>
                    Driver-focused cockpit with digital displays.
                    Premium leather and Alcantara upholstery.
                    Ergonomic design with F1-inspired steering wheel controls.
                </p>
                <img
                    src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/398000/600/398669.jpg"
                />
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    A hybrid 6.3-liter V12 engine paired with an electric motor.
                    Produces a combined 950 horsepower and 900 Nm of torque.
                    0-100 km/h in just 2.6 seconds with a top speed of 350 km/h (217 mph).
                </p>
                <h2>Transmission:</h2>
                <p>
                    7-speed dual-clutch automatic transmission.
                    Seamless gear changes for unmatched performance.
                </p>
                <h2>Driving Modes:</h2>
                <img src="https://cdn.ferrari.com/cms/network/media/img/resize/66f170b752aaf80011021aa3-laferrari-supercars-2013-cahpter-3-desk?" />
                <ul>
                    <li><b>E-Drive:</b> For full-electric, emission-free driving.</li>
                    <li><b>Performance:</b> Harness the full power of the V12 and electric motor.</li>
                    <li><b>Race:</b> Optimized for track performance.</li>
                    <li><b>Hybrid:</b> Combines both engines for efficiency and power.</li>
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
                            <td>6.3L V12 Hybrid</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>950 hp @ 9,000 rpm</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>900 Nm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>350 km/h (217 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 2.6 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>1,585 kg (Dry)</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>Rear-Wheel Drive (RWD)</td>
                        </tr>
                        <tr>
                            <td>Chassis</td>
                            <td>Carbon-Fiber Monocoque</td>
                        </tr>
                        <tr>
                            <td>Brakes</td>
                            <td>Carbon-Ceramic Brakes</td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td>Petrol (Premium) with hybrid-electric assistance.</td>
                        </tr>
                        <tr>
                            <td>Tank Capacity</td>
                            <td>85 liters (22.5 gallons).</td>
                        </tr>
                        <tr>
                            <td>0-60 mph</td>
                            <td>2.6 seconds.</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>217 mph (350 km/h).</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>Approx. 12 mpg (combined) due to hybrid technology.</td>
                        </tr>
                        <tr>
                            <td>Unique Fact</td>
                            <td>First Ferrari hybrid and the most powerful road car in Ferrari history.</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Originally $1.4 million; resale prices now exceed $3 million.</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://cdn.prod.website-files.com/662e6423ff88861916362956/6696f3dd1f4290298272f4d7_qElxPu_TwAdPi8IOXj4an6F50vJw12fHzf8TTrmYzIc.webp"
                    height="800px"
                    width="1200px"
                />
            </center>
        </div>
    );
}

export default Ferrari_La;
