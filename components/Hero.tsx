import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 bg-background">
      {/* Background Effects - Warm Tech Minimalist */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[150px] opacity-40 animate-pulse-slow"></div>
        {/* Changed bottom blob to Gold/Amber for warmth */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-neon-gold/5 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background to-background"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-tight">
          <span className="text-silver bg-clip-text">A</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-gold drop-shadow-[0_0_25px_rgba(251,191,36,0.2)]">
            Typical
          </span>{' '}
          <span className="text-silver">Palate</span>
        </h1>
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-neon-gold/50 to-transparent mx-auto my-8"></div>

        <h2 className="text-lg md:text-2xl text-dim font-normal tracking-wide max-w-2xl mx-auto">
          Everyday favorites. Extraordinary finds.
        </h2>
        
        <p className="max-w-lg mx-auto text-dim/80 text-base md:text-lg font-light leading-relaxed tracking-wide">
          The spots you'll return to weekly and the meals you'll never forget. Family-tested, parent-approved.
        </p>
      </div>

      <a href="#stats" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-4 group cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.3em] text-dim group-hover:text-neon-gold transition-colors duration-500">Begin Journey</span>
        <div className="p-3 rounded-full border border-silver/20 group-hover:border-neon-gold/50 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all duration-500 bg-black/20 backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-neon-gold animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;