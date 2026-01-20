import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

export const Header = () => {
    const { cartItems } = useCart();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">LUXE.</Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                </nav>
                <div className="header-actions">
                    <Link to="/cart" className="icon-btn" aria-label="Cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-badge">{cartCount}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};
