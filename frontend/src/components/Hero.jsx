import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.png';
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay">
                <div className="container hero-content">
                    <h1 className="hero-title fade-in-up">Elegance Redefined</h1>
                    <p className="hero-subtitle fade-in-up delay-1">Discover our exclusive collection of evening dresses designed for memorable moments.</p>
                    <Link to="/shop" className="btn hero-btn fade-in-up delay-2">Shop Collection</Link>
                </div>
            </div>
        </section>
    );
};
