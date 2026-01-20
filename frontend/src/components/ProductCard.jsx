import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = ({ id, name, price, image }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${id}`} className="product-image-container">
                <img src={image} alt={name} className="product-image" />
                <div className="product-overlay">
                    <button className="btn quick-view-btn">View Details</button>
                </div>
            </Link>
            <div className="product-info">
                <h3 className="product-name"><Link to={`/product/${id}`}>{name}</Link></h3>
                <p className="product-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};
