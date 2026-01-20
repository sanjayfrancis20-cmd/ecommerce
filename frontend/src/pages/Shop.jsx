import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Shop = () => {
    return (
        <main className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-sm)' }}>
            <h1 className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>All Collections</h1>
            <div className="grid product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
};
