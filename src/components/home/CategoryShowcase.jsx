import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Electronics', icon: '🎧', color: 'bg-blue-100' },
  { name: 'Fashion', icon: '👕', color: 'bg-pink-100' },
  { name: 'Home', icon: '🏠', color: 'bg-green-100' },
  { name: 'Sports', icon: '⚽', color: 'bg-yellow-100' },
];

export default function CategoryShowcase() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className={`${category.color} rounded-xl p-6 text-center hover:shadow-lg transition-shadow group`}
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}