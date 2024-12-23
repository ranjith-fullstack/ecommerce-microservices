import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import NewsletterSignup from '../components/home/NewsletterSignup';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <NewsletterSignup />
    </div>
  );
}