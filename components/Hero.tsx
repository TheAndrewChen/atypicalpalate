import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Gradient - Soft and Warm */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface/20 to-background"></div>
        {/* Organic glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-block mb-2">
           <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase border-b border-gold/30 pb-1">
             Est. 2015
           </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-cream leading-tight">
          A <span className="italic text-gold">Typical</span> Palate
        </h1>
        
        <div className="h-px w-24 bg-white/10 mx-auto my-6"></div>

        <h2 className="text-xl md:text-2xl text-stone-300 font-light tracking-wide max-w-2xl mx-auto">
          Everyday favorites. Extraordinary finds.
        </h2>
        
        <p className="max-w-lg mx-auto text-stone-400 text-base md:text-lg font-light leading-relaxed">
          The spots you'll return to weekly and the meals you'll never forget. Family-tested, parent-approved.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Begin Journey</span>
        <div className="p-3 rounded-full border border-white/10">
          <ArrowDown className="w-4 h-4 text-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;