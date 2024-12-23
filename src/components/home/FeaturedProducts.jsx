import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { products } from '../../data/products';

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-gray-600 mt-2">Handpicked selections just for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <FiStar className="fill-current" />
                    <span className="ml-1 text-gray-600">4.5</span>
                  </div>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">${product.price}</span>
                  <Link
                    to="/products"
                    className="text-primary hover:text-secondary font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}