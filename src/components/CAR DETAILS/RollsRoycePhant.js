import React from 'react';
import './Styles/Style.css';

function RollsRoycePhant() {
    return (
        <div>
            <center>
                <h1>Rolls-Royce Phantom</h1>
                <img
                    src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-discover/page-components/Phantom-II-Discover-Full-Shot-1-R.jpg/jcr:content/renditions/original alt='Rolls-Royce Phantom'"
                    height="864px"
                    width="1536px"
                    alt="Rolls-Royce Phantom"
                />
                <p>
                    <b>A LEGEND IN LUXURY</b>
                    <br />
                    The Rolls-Royce Phantom represents the pinnacle of automotive luxury.
                    Combining timeless design with cutting-edge technology, the Phantom sets
                    the standard for bespoke craftsmanship. Experience unparalleled comfort
                    and refinement in the world’s most prestigious automobile.
                </p>

                {/* 3D View Section */}
                <div>
                    <h1>Explore the Rolls Royce Phantom in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <div className="sketchfab-embed-wrapper">
                        <iframe
                            title="Rolls Royce Phantom 3D Viewer"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/1a2f117c8f1b4324b5a5dd70d38d396b/embed?ui_infos=0&ui_controls=1&ui_stop=0&ui_watermark=0&ui_watermark_link=0"
                            style={{
                                width: '100%',
                                height: '500px',
                                border: '2px solid #000',
                                borderRadius: '10px',
                            }}
                        ></iframe>
                    </div>
                </div>

                {/* Video Section */}
                <div className="video-container">
                    <h2>Rolls-Royce Phantom Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/AsgXNQ0a_a8?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0&start=45"
                            title="Rolls-Royce Phantom Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Design Section */}
                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    The Phantom's iconic silhouette exudes elegance with its bold yet graceful lines.
                    A custom Pantheon grille with LED lighting sets it apart as a symbol of power and grace.
                    Hand-polished paintwork creates an unparalleled level of shine and depth.
                </p>
                <p>
                    <h2>Interior:</h2>
                    Lavish materials like premium leather, natural wood veneers, and bespoke details.
                    "The Gallery" dashboard, an art display feature that allows personalized artwork.
                    Starlight headliner with fiber-optic lighting creates a celestial ambiance.
                </p>
                <img
                    src="https://i.pinimg.com/736x/71/e6/e7/71e6e73aa320b6550bddad3845bec8fd.jpg"
                    alt="Rolls-Royce Phantom Interior"
                />

                {/* Performance Section */}
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    A 6.75-liter V12 engine delivering 563 horsepower and 900 Nm of torque.
                    Smooth acceleration with a 0-100 km/h time of 5.3 seconds.
                    Maximum speed of 250 km/h (electronically limited).
                </p>
                <h2>Transmission:</h2>
                <p>
                    8-speed satellite-aided automatic transmission ensures unparalleled ride quality.
                </p>
                <h2>Driving Modes:</h2>
                <ul>
                    <li><b>Magic Carpet Ride:</b> Delivers an unrivaled smooth and serene experience.</li>
                    <li><b>Dynamic:</b> Provides a more responsive and spirited driving feel.</li>
                </ul>

                {/* Technical Specifications */}
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
                            <td>6.75L V12, Twin-Turbocharged</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>563 hp @ 5,000 rpm</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>900 Nm @ 1,700 rpm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>250 km/h (155 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 5.3 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>2,560 kg (Curb)</td>
                        </tr>
                        <tr>
                            <td>Drivetrain</td>
                            <td>Rear-Wheel Drive (RWD)</td>
                        </tr>
                        <tr>
                            <td>Chassis</td>
                            <td>All-aluminum spaceframe</td>
                        </tr>
                        <tr>
                            <td>Brakes</td>
                            <td>High-performance disc brakes</td>
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
                            <td>Approx 12 mpg (city) and 19 mpg (highway)</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>8-speed ZF automatic transmission</td>
                        </tr>
                        <tr>
                            <td>Unique Selling Point</td>
                            <td>Combines track-level performance with daily drivability.</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Starting at $460,000 (base model). Customizations can increase the price significantly.
                            </td>
                        </tr>
                        <tr>
                            <td>Unique Features</td>
                            <td>Coach Doors, Umbrella Compartments, Spirit of Ecstasy</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20220512055947_2022%20Rolls%20Royce%20Phantom%202.jpg&w=736&h=488&q=75&c=1"
                    height="800px"
                    width="1200px"
                    alt="Rolls-Royce Phantom Rear"
                />
            </center>
        </div>
    );
}

export default RollsRoycePhant;
