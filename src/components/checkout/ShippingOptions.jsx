export default function ShippingOptions({ selected, onChange }) {
  const shippingMethods = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      price: 0,
      description: 'Delivery in 5-7 business days',
    },
    {
      id: 'express',
      name: 'Express Shipping',
      price: 14.99,
      description: 'Delivery in 2-3 business days',
    },
    {
      id: 'overnight',
      name: 'Overnight Shipping',
      price: 29.99,
      description: 'Next business day delivery',
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
      <div className="space-y-4">
        {shippingMethods.map((method) => (
          <label
            key={method.id}
            className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
              selected === method.id
                ? 'border-primary bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="shippingMethod"
                  value={method.id}
                  checked={selected === method.id}
                  onChange={() => onChange(method.id)}
                  className="text-primary focus:ring-primary"
                />
                <div className="ml-4">
                  <div className="font-medium">{method.name}</div>
                  <div className="text-sm text-gray-500">{method.description}</div>
                </div>
              </div>
              <div className="font-medium">
                {method.price === 0 ? 'Free' : `$${method.price.toFixed(2)}`}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}