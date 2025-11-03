import React from 'react';
import './Styles/Style.css';
import '@google/model-viewer';

function Lambo_Aven() {
    return (
        <div>
            <center>
                <h1>Lamborghini Aventador</h1>
                <img
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_01.jpg"
                    height="864px"
                    width="1536px"
                />
                <p>
                    DESIGNED TO PUSH BEYOND PERFORMANCE
                    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.
                </p>


                {/* 3D View Section */}
                <div>
                    <h1>Explore the Lamborghini Aventador in 3D</h1>
                    <p>SCROLL TO ZOOM AND HOLD LEFT MOUSE AND SCROLL TO MOVE</p>
                    <model-viewer
                        src="/MODEL/source/lamborghini_aventador_lp750-4_sv.glb" // Replace with the actual path to your .glb file
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
                    <h2>Lamborghini Aventador Promo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/HrWUMYqdNSk?autoplay=1&mute=1&rel=0&showinfo=0&modestbranding=1&controls=0"
                            title="Lamborghini Aventador Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <h1>DESIGN</h1>
                <p>
                    <h2>Exterior:</h2>
                    The Aventador's design is inspired by aerospace engineering, with sharp angles, a low-slung profile, and an aggressive stance.
                    Carbon-fiber-reinforced polymer (CFRP) construction ensures lightweight yet robust durability.
                    Aerodynamic features include active rear spoilers and advanced air intakes that optimize cooling and stability at high speeds.
                    Available in a range of iconic colors, including Giallo Orion (Yellow), Verde Mantis (Green), and Rosso Mars (Red).

                    <h2>Interior:</h2>
                    Luxurious cabin crafted with premium leather and Alcantara.
                    Advanced digital dashboard with customizable displays for speed, navigation, and performance stats.
                    Ergonomically designed bucket seats for comfort during high-speed drives.
                    The interior is customizable with Lamborghini's Ad Personam program, offering endless personalization options.
                </p>
                <img
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/2021/restyle_03_05/aven_s_over_01.jpg"
                />
                <h1>Performance</h1>
                <h2>Engine:</h2>
                <p>
                    A naturally aspirated 6.5-liter V12 engine delivering breathtaking power.
                    Produces 769 horsepower and 720 Nm of torque.
                    0-100 km/h in just 2.8 seconds with a top speed of 350 km/h (217 mph).
                </p>
                <h2>Transmission:</h2>
                <p>
                    Equipped with a 7-speed ISR (Independent Shifting Rod) gearbox.
                    Lightning-fast gear changes ensure seamless acceleration.
                </p>
                <h2>Driving Modes:</h2>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/s/s/s-3.jpg" />
                <ul>
                    <li><b>STRADA:</b> For everyday comfort and drivability.</li>
                    <li><b>SPORT:</b> Delivers a more engaging and dynamic experience.</li>
                    <li><b>CORSA:</b> Focuses on track-level performance.</li>
                    <li><b>EGO:</b> Allows drivers to customize settings for steering, suspension, and drivetrain.</li>
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
                            <td>6.5L V12, Naturally Aspirated</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>769 hp @ 8,500 rpm</td>
                        </tr>
                        <tr>
                            <td>Max Torque</td>
                            <td>720 Nm @ 6,750 rpm</td>
                        </tr>
                        <tr>
                            <td>Top Speed</td>
                            <td>350 km/h (217 mph)</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>0-100 km/h in 2.8 seconds</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>1,575 kg (Dry)</td>
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
                            <td>Mileage</td>
                            <td>6 mpg (city) and 15 mpg (highway).</td>
                        </tr>
                        <tr>
                            <td>Tank Capacity</td>
                            <td>85 liters (22.5 gallons).</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>Starting at $500,000 (varies by model and country).</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_01.jpg"
                    height="800px"
                    width="1200px"
                />
            </center>
        </div>
    );
}

export default Lambo_Aven;
