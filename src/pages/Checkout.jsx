import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

export default function Checkout({ cart, total }) {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { cart, formData });
    // Navigate to success page
    navigate('/order-success');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm total={total} onSubmit={handleSubmit} />
    </div>
  );
}