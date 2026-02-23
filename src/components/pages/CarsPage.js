import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../CarCard';
import './CarsPage.css';

const cars = [
    { id: 1, name: 'Lamborghini Aventador', price: 500000, image: 'https://i.ytimg.com/vi/bHpt53_7Xh4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI4E6ia-kJJ4tRex6-ecHWYTgoRw', route: '/cars/lamborghini' },
    { id: 2, name: 'LaFerrari 2015', price: 15000000, image: 'https://cdn.prod.website-files.com/662e6423ff88861916362956/67ec0e22582cb537b2a8e438_gallery_image_17-1743523353340.webp', route: '/cars/ferrari' },
    { id: 3, name: 'Pagani Huayra', price: 24000000, image: 'https://i.i-sgcm.com/new_cars/cars/12944/12944_g1_b.jpg', route: '/cars/pagani' },
    { id: 4, name: 'Bugatti Chiron', price: 30000000, image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Bugatti_Chiron_1.jpg', route: '/cars/bugatti' },
    { id: 5, name: 'Porsche 911 Turbo S', price: 220000, image: 'https://imgd.aeplcdn.com/1280x720/n/xi8eova_1609361.jpg?q=80', route: '/cars/porsche' },
    { id: 6, name: 'Rolls Royce Phantom', price: 460000, image: 'https://i.ytimg.com/vi/kbt-IxcHVok/maxresdefault.jpg', route: '/cars/rolls-royce' },
];

function CarsPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="cars-page">
            <header className="cars-header">
                <div className="header-container">
                    <h1 className="glitch-text" data-text="ELITE COLLECTION">ELITE COLLECTION</h1>
                    <div className="search-box">
                        <i className="fa fa-search"></i>
                        <input
                            type="text"
                            placeholder="SEARCH BY MODEL"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </header>

            <main className="car-showcase">
                <div className="car-grid">
                    {filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                            <div key={car.id} onClick={() => navigate(car.route)} className="card-wrapper">
                                <CarCard
                                    name={car.name}
                                    price={car.price}
                                    image={car.image}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="not-found">
                            <i className="fa fa-eye-slash"></i>
                            <p>NO BEAUTY FOUND FOR YOUR SEARCH</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default CarsPage;
