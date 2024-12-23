import React from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import Button from '../common/Button';

export default function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center border rounded">
            <button
              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
              className="p-2 hover:bg-gray-100"
            >
              <FiMinus />
            </button>
            <span className="px-4 py-1">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 hover:bg-gray-100"
            >
              <FiPlus />
            </button>
          </div>
          <Button
            variant="danger"
            onClick={() => removeFromCart(item.id)}
            className="!p-2"
          >
            <FiTrash2 />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}