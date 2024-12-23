import { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import AddressForm from './checkout/AddressForm';
import PaymentForm from './checkout/PaymentForm';
import ShippingOptions from './checkout/ShippingOptions';
import OrderReview from './checkout/OrderReview';

export default function CheckoutForm({ total, onSubmit }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: {},
    billing: {},
    payment: {},
    shippingMethod: ''
  });

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8">
        {['Shipping', 'Payment', 'Review'].map((label, index) => (
          <div key={label} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step > index + 1 ? 'bg-green-500' : 
              step === index + 1 ? 'bg-primary' : 'bg-gray-300'
            } text-white`}>
              {index + 1}
            </div>
            <div className={`ml-2 ${step === index + 1 ? 'text-primary font-semibold' : 'text-gray-500'}`}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <AddressForm
            type="shipping"
            data={formData.shipping}
            onChange={(data) => updateFormData('shipping', data)}
          />
          <ShippingOptions
            selected={formData.shippingMethod}
            onChange={(method) => updateFormData('shippingMethod', method)}
          />
          <button
            type="button"
            onClick={nextStep}
            className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <PaymentForm
            data={formData.payment}
            onChange={(data) => updateFormData('payment', data)}
          />
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={prevStep}
              className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="w-1/2 bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Review Order
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <OrderReview formData={formData} total={total} />
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={prevStep}
              className="w-1/2 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <FiLock />
              Place Order
            </button>
          </div>
        </div>
      )}
    </form>
  );
}