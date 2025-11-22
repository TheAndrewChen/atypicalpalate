import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-silver tracking-tight">Curated Collections</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
          <p className="text-dim text-xs tracking-[0.3em] uppercase">The Journal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[500px]">
          
          {/* Food Card - The Data of Taste */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-blue/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale-[30%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:border-neon-blue/30">
               <ArrowUpRight className="w-5 h-5 text-neon-blue" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 rounded bg-neon-blue/10 text-neon-blue text-[10px] font-semibold tracking-widest uppercase mb-4 border border-neon-blue/20 backdrop-blur-sm">
                Taste
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-neon-blue transition-colors duration-300">The Data of Taste</h3>
              <p className="text-dim font-light text-sm leading-relaxed border-l border-neon-blue/50 pl-4">
                Seeking the Undiscovered. Flavor profiles analyzed and cataloged for future reference.
              </p>
            </div>
          </div>

          {/* Travel Card - Field Notes */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-blue/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale-[30%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:border-neon-blue/30">
               <ArrowUpRight className="w-5 h-5 text-neon-blue" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 rounded bg-silver/10 text-silver text-[10px] font-semibold tracking-widest uppercase mb-4 border border-silver/20 backdrop-blur-sm">
                Travel
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-neon-blue transition-colors duration-300">Field Notes</h3>
              <p className="text-dim font-light text-sm leading-relaxed border-l border-silver pl-4">
                Beyond the Guidebook. Documenting atmospheric anomalies and hidden coordinates.
              </p>
            </div>
          </div>

          {/* Fatherhood Card - The Apprentice */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-neon-blue/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale-[30%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            
            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:border-neon-blue/30">
               <ArrowUpRight className="w-5 h-5 text-neon-blue" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 rounded bg-neon-green/10 text-neon-green text-[10px] font-semibold tracking-widest uppercase mb-4 border border-neon-green/20 backdrop-blur-sm">
                Family
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-neon-green transition-colors duration-300">The Apprentice</h3>
              <p className="text-dim font-light text-sm leading-relaxed border-l border-neon-green/50 pl-4">
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