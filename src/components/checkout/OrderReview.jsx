export default function OrderReview({ formData, total }) {
  const shippingCost = {
    standard: 0,
    express: 14.99,
    overnight: 29.99
  }[formData.shippingMethod] || 0;

  const finalTotal = total + shippingCost;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Order Review</h2>

      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <div>
          <h3 className="font-medium">Shipping Address</h3>
          <p className="text-gray-600">
            {formData.shipping.firstName} {formData.shipping.lastName}<br />
            {formData.shipping.address}<br />
            {formData.shipping.city}, {formData.shipping.postalCode}
          </p>
        </div>

        <div>
          <h3 className="font-medium">Payment Method</h3>
          <p className="text-gray-600">
            Card ending in {formData.payment.cardNumber?.slice(-4)}
          </p>
        </div>

        <div>
          <h3 className="font-medium">Order Summary</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 font-semibold">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}