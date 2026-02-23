import React from 'react';
import './CarCard.css';

function CarCard({ name, price, image, onDetailsClick }) {
    return (
        <div className="car-card">
            <div className="car-card-image">
                <img src={image} alt={name} />
                <div className="price-tag">${price.toLocaleString()}</div>
            </div>
            <div className="car-card-content">
                <h3>{name}</h3>
                <div className="car-card-actions">
                    <button className="view-details-btn" onClick={onDetailsClick}>
                        Experience Now <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
