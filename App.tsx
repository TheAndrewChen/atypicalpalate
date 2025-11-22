import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Stats from './components/Stats';
import Footer from './components/Footer';
import BrandPartnership from './components/BrandPartnership';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-silver font-sans selection:bg-neon-blue/30 selection:text-white overflow-x-hidden">
      <main className="flex flex-col w-full">
        <Hero />
        <Stats />
        <BentoGrid />
        <BrandPartnership />
      </main>
      <Footer />
    </div>
  );
};

export default App;