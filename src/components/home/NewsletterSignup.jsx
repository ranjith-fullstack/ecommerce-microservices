import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-gray-300">
            Subscribe to our newsletter for exclusive deals and updates
          </p>
          
          {status === 'subscribed' ? (
            <div className="bg-green-500 text-white p-4 rounded-lg">
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
              <div className="flex-grow relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}