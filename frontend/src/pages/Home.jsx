import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

export const Home = () => {
    const featuredProducts = products.slice(0, 4);

    return (
        <main>
            <Hero />

            <section className="section container">
                <h2 className="section-title text-center">New Arrivals</h2>
                <div className="grid product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            <section className="section newsletter-section">
                <div className="container text-center">
                    <h2 className="section-title">Join the World of Luxe</h2>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" className="newsletter-input" />
                        <button className="btn">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>
    );
};
