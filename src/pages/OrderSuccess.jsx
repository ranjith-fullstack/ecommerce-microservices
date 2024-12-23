import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

export default function OrderSuccess() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="text-gray-600 mb-8">
        Your order has been successfully placed. We'll send you an email with your order details
        and tracking information once your package ships.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}