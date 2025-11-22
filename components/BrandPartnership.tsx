import React from 'react';

const BrandPartnership: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Glassmorphism Card Container */}
        <div className="relative bg-white/5 backdrop-blur-xl border-t border-neon-blue/50 rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           {/* Top glowing line accent */}
           <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-80 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
           
           <div className="text-center mb-14 space-y-2">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-silver to-dim pb-2">
               Join the Expedition
             </h2>
             <p className="text-dim text-sm font-light max-w-md mx-auto tracking-wide">
               We partner selectively with brands that align with our curiosity and quality standards.
             </p>
           </div>

           <form className="space-y-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/10 focus:border-neon-blue text-white py-4 px-2 outline-none transition-all duration-500 placeholder:text-dim/50 font-light focus:shadow-[0_4px_20px_-5px_rgba(6,182,212,0.2)]"
                 />
               </div>
               <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="Brand / Company"
                    className="w-full bg-transparent border-b border-white/10 focus:border-neon-blue text-white py-4 px-2 outline-none transition-all duration-500 placeholder:text-dim/50 font-light focus:shadow-[0_4px_20px_-5px_rgba(6,182,212,0.2)]"
                 />
               </div>
             </div>
             
             <div className="group relative">
               <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/10 focus:border-neon-blue text-white py-4 px-2 outline-none transition-all duration-500 placeholder:text-dim/50 font-light focus:shadow-[0_4px_20px_-5px_rgba(6,182,212,0.2)]"
               />
             </div>

             <div className="group relative">
               <textarea 
                  rows={1}
                  placeholder="Vision (Message)"
                  className="w-full bg-transparent border-b border-white/10 focus:border-neon-blue text-white py-4 px-2 outline-none transition-all duration-500 placeholder:text-dim/50 font-light resize-none h-auto min-h-[60px] focus:shadow-[0_4px_20px_-5px_rgba(6,182,212,0.2)]"
                  onInput={(e) => {
                    e.currentTarget.style.height = 'auto';
                    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                  }}
               ></textarea>
             </div>

             <div className="pt-8 flex justify-center">
               <button 
                 type="button"
                 className="px-12 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 border border-white/10"
               >
                 Connect
               </button>
             </div>
           </form>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnership;