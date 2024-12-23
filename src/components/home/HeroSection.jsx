import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center text-white space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Discover Amazing Products
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Shop the latest trends with our curated collection of premium products
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="group bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              Shop Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}