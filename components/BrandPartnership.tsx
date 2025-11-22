import React from 'react';

const BrandPartnership: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow for ambient depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Glassmorphism Card Container */}
        <div className="relative bg-white/5 backdrop-blur-md border-t border-blue-500/50 rounded-3xl p-8 md:p-12 shadow-2xl">
           {/* Top glowing line accent */}
           <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
           
           <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-400 mb-4">
               Join the Expedition
             </h2>
             <p className="text-stone-400 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed">
               We partner selectively with brands that align with our curiosity and quality standards.
             </p>
           </div>

           <form className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-stone-700 focus:border-blue-500 text-white py-3 px-1 outline-none transition-all duration-300 placeholder:text-stone-600 font-light"
                 />
               </div>
               <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="Brand / Company"
                    className="w-full bg-transparent border-b border-stone-700 focus:border-blue-500 text-white py-3 px-1 outline-none transition-all duration-300 placeholder:text-stone-600 font-light"
                 />
               </div>
             </div>
             
             <div className="group relative">
               <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-stone-700 focus:border-blue-500 text-white py-3 px-1 outline-none transition-all duration-300 placeholder:text-stone-600 font-light"
               />
             </div>

             <div className="group relative">
               <textarea 
                  rows={1}
                  placeholder="Vision (Message)"
                  className="w-full bg-transparent border-b border-stone-700 focus:border-blue-500 text-white py-3 px-1 outline-none transition-all duration-300 placeholder:text-stone-600 font-light resize-none h-auto min-h-[50px]"
                  onInput={(e) => {
                    e.currentTarget.style.height = 'auto';
                    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                  }}
               ></textarea>
             </div>

             <div className="pt-6 flex justify-center">
               <button 
                 type="button"
                 className="px-10 py-3 rounded-full bg-stone-100 text-black text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:scale-95"
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