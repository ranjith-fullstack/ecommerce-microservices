import { useState } from 'react';
import { FiCreditCard } from 'react-icons/fi';

export default function PaymentForm({ data, onChange }) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Payment Method</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="text-primary focus:ring-primary"
          />
          <label htmlFor="card" className="flex items-center space-x-2">
            <FiCreditCard className="text-gray-600" />
            <span>Credit/Debit Card</span>
          </label>
        </div>

        {paymentMethod === 'card' && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={data.cardNumber || ''}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={data.expiryDate || ''}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={data.cvv || ''}
                  onChange={handleChange}
                  placeholder="123"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}