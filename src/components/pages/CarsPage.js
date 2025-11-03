import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CarCard from '../CarCard';

const cars = [
    { id: 1, name: 'Lamborghini Aventador', price: 500000, image: 'https://i.ytimg.com/vi/bHpt53_7Xh4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCI4E6ia-kJJ4tRex6-ecHWYTgoRw', route: '/cars/lamborghini' },
    { id: 2, name: 'LaFerrari 2015', price: 15000000, image: 'https://i.ytimg.com/vi/lSFsILG0RSk/sddefault.jpg', route: '/cars/ferrari' },
    { id: 3, name: 'Pagani Huayra', price: 24000000, image: 'https://i.i-sgcm.com/new_cars/cars/12944/12944_g1_b.jpg', route: '/cars/pagani' },
    { id: 4, name: 'Bugatti Chiron', price: 30000000, image: 'https://luxurylaunches.com/wp-content/uploads/2024/08/bugatti-tourbillon.jpg', route: '/cars/bugatti' },
    { id: 5, name: 'Porsche 911 Turbo S', price: 220000, image: 'https://imgd.aeplcdn.com/1280x720/n/xi8eova_1609361.jpg?q=80', route: '/cars/porsche' },
    { id: 6, name: 'Rolls Royce Phantom', price: 460000, image: 'https://i.ytimg.com/vi/kbt-IxcHVok/maxresdefault.jpg', route: '/cars/rolls-royce' },
];

function CarsPage() {
    const navigate = useNavigate(); // Use the navigate function

    // State for managing the search query
    const [searchQuery, setSearchQuery] = useState('');
    
    // Function to handle search input
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter cars based on the search query
    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Available Cars</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search cars..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Display filtered cars */}
            <div className="car-list">
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <CarCard
                            key={car.id}
                            name={car.name}
                            price={car.price}
                            image={car.image}
                            onDetailsClick={() => navigate(car.route)} // Correct navigation
                        />
                    ))
                ) : (
                    <p>No cars found matching your search.</p>
                )}
            </div>
        </div>
    );
}

export default CarsPage;
