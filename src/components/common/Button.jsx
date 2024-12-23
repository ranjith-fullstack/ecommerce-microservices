import React from 'react';

export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false, className = '' }) {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors font-medium';
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}