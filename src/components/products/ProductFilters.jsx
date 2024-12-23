import React from 'react';
import { FiFilter } from 'react-icons/fi';

export default function ProductFilters({ categories, selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <FiFilter className="text-gray-600" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Categories</h4>
          <div className="space-y-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => onPriceRangeChange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${priceRange}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}