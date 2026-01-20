import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div className="container" style={{ padding: '100px 0' }}>Product not found</div>;

    return (
        <main className="container product-details-page">
            <div className="product-details-grid">
                <div className="pd-image-container">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="pd-info">
                    <span className="pd-category">{product.category}</span>
                    <h1 className="pd-title">{product.name}</h1>
                    <p className="pd-price">${product.price.toFixed(2)}</p>
                    <p className="pd-description">{product.description}</p>

                    <div className="pd-actions">
                        <button className="btn pd-add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
