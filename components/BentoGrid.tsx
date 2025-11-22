import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-cream italic">Curated Collections</h2>
          <div className="w-12 h-0.5 bg-gold/50"></div>
          <p className="text-stone-400 text-sm tracking-widest uppercase">The Journal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[500px]">
          
          {/* Food Card - The Data of Taste */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"></div>
            
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium tracking-wide mb-3 border border-gold/20">
                Taste
              </span>
              <h3 className="text-3xl font-serif text-white mb-3">The Data of Taste</h3>
              <p className="text-stone-300 font-light text-sm leading-relaxed border-l-2 border-gold/50 pl-4">
                Seeking the Undiscovered. Flavor profiles analyzed and cataloged for future reference.
              </p>
            </div>
          </div>

          {/* Travel Card - Field Notes */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wide mb-3 border border-white/20">
                Travel
              </span>
              <h3 className="text-3xl font-serif text-white mb-3">Field Notes</h3>
              <p className="text-stone-300 font-light text-sm leading-relaxed border-l-2 border-stone-500 pl-4">
                Beyond the Guidebook. Documenting atmospheric anomalies and hidden coordinates.
              </p>
            </div>
          </div>

          {/* Fatherhood Card - The Apprentice */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>
            
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight className="w-5 h-5 text-white" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-200 text-xs font-medium tracking-wide mb-3 border border-orange-500/20">
                Family
              </span>
              <h3 className="text-3xl font-serif text-white mb-3">The Apprentice</h3>
              <p className="text-stone-300 font-light text-sm leading-relaxed border-l-2 border-orange-400/50 pl-4">
                Training a Future Explorer. Navigating the world with fresh eyes and shorter strides.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;