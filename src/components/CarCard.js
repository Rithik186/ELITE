import React from 'react';
import './CarCard.css';

function CarCard({ name, price, image, onDetailsClick, onCompareClick, onWishlistClick, onTestDriveClick }) {
    return (
        <div className="car-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div className="button-group">
                <button onClick={onDetailsClick}>View Details</button>
                <button onClick={onCompareClick}>Compare</button>
                <button onClick={onWishlistClick}>Add to Wishlist</button>
                <button onClick={onTestDriveClick}>Book Test Drive</button>
            </div>
        </div>
    );
}

export default CarCard;
