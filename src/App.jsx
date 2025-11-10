import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
