import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="container text-center" style={{ padding: '100px 0' }}>
                <h2>Your Cart is Empty</h2>
                <Link to="/shop" className="btn" style={{ marginTop: '20px' }}>Continue Shopping</Link>
            </div>
        );
    }

    return (
        <main className="container cart-page">
            <h1 className="text-center cart-title">Your Shopping Bag</h1>
            <div className="cart-grid">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                                <div className="cart-controls">
                                    <span>Qty: {item.quantity}</span>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                                </div>
                            </div>
                            <div className="cart-item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="btn checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </main>
    );
};
