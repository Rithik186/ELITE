import React from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function Bugattai_Chi() {
    return (
        <div>
            <center>
                <h1>Bugatti Chiron</h1>
                <img
                    src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_1.jpg"
                    height="864px"
                    width="1536px"
                />
                <p>
                    **THE ULTIMATE HYPERCAR EXPERIENCE**  
                    The Bugatti Chiron is the epitome of luxury, speed, and power. With cutting-edge technology and breathtaking design, this hypercar redefines automotive excellence.
                </p>

{/* 3D View Section */}
<div>
                    <h1>Explore the Bugatti Chiron in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <model-viewer
                        src="/MODEL/source/free_bugatti_chiron.glb" // Replace with the actual path to your .glb file
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
                    <h2>Bugatti Chiron Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/_0YXkCN4yJw?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0"
                            title="Bugatti Chiron Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    The Chiron's aerodynamic design includes a horseshoe grille, distinctive LED headlights, and active rear spoiler.
                    Constructed from lightweight carbon fiber for agility and speed.
                    Available in an array of bespoke colors and finishes.

                    <h2>Interior:</h2>
                    Handcrafted interior with premium leather and aluminum accents.
                    State-of-the-art infotainment system and customizable displays.
                    Advanced seating for maximum comfort and luxury.
                </p>
                <img
                    src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_6.jpg"
                />
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    8.0-liter quad-turbocharged W16 engine producing 1,479 horsepower.
                    0-100 km/h in just 2.4 seconds with a top speed of 420 km/h (261 mph).
                </p>
                <h2>Transmission:</h2>
                <p>
                    Equipped with a 7-speed dual-clutch automatic transmission.
                    Seamless gear changes for a superior driving experience.
                </p>
                <h2>Driving Modes:</h2>
                <img src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_9.jpg" />
                <ul>
                    <li><b>EB:</b> For comfort and efficiency in everyday driving.</li>
                    <li><b>SPORT:</b> Focuses on agility and performance.</li>
                    <li><b>TOP SPEED:</b> Unlocks the full potential of the Chiron.</li>
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
                            <td>8.0L W16, Quad Turbo</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>1,479 hp @ 6,700 rpm</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>1,600 Nm @ 2,000-6,000 rpm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>420 km/h (261 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 2.4 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>1,995 kg (Curb)</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>All-Wheel Drive (AWD)</td>
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
                            <td>Petrol (Premium)</td>
                        </tr>
                        <tr>
                            <td>Tank Capacity</td>
                            <td>100 liters (26.4 gallons).</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>Approx 9 mpg (city) and 14 mpg (highway)</td>
                        </tr>
                        <tr>
                            <td>Interesting Fact</td>
                            <td>Consumes 60,000 liters of air per minute at top speed</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Starting at $3 million</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Sport/Gallery/CS_3.jpg"
                    height="800px"
                    width="1200px"
                />
            </center>
        </div>
    );
}

export default Bugattai_Chi;
