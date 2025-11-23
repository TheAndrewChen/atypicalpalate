import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', href: '#hero', number: '01', desc: 'Start' },
    { label: 'Stats', href: '#stats', number: '02', desc: 'Data' },
    { label: 'The Journal', href: '#journal', number: '03', desc: 'Collections' },
    { label: 'Partnerships', href: '#partnerships', number: '04', desc: 'Connect' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-neon-gold/50 transition-all duration-300 group shadow-lg"
        aria-label="Toggle Menu"
      >
        <div className="relative w-5 h-3.5 flex flex-col justify-between items-end overflow-hidden">
          <span className={`w-full h-0.5 bg-silver rounded-full transition-all duration-300 ease-out group-hover:bg-neon-gold ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-full h-0.5 bg-silver rounded-full transition-all duration-300 ease-out group-hover:bg-neon-gold ${isOpen ? 'opacity-0 translate-x-full' : 'opacity-100'}`} />
          <span className={`w-full h-0.5 bg-silver rounded-full transition-all duration-300 ease-out group-hover:bg-neon-gold ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isOpen ? 'opacity-100 pointer-events-auto clip-circle-open' : 'opacity-0 pointer-events-none delay-200'}`}
        style={{ clipPath: isOpen ? 'circle(150% at 90% 5%)' : 'circle(0% at 90% 5%)' }}
      >
        <div className="h-full w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row">
          
          {/* Decorative / Info Side (Left on Desktop) */}
          <div className="hidden md:flex flex-1 flex-col justify-end pb-20 border-r border-white/5 pr-12">
             <div className="space-y-8 text-dim">
                <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-neon-gold mb-4">Current Coordinates</h4>
                   <div className="flex items-center gap-3 text-silver">
                     <MapPin className="w-4 h-4 text-neon-gold" />
                     <span className="font-light">Kyoto, Japan (35.0116° N)</span>
                   </div>
                </div>
                
                <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-neon-gold mb-4">Contact</h4>
                   <a href="mailto:hello@atypicalpalate.com" className="flex items-center gap-3 text-silver hover:text-white transition-colors">
                     <Mail className="w-4 h-4 text-neon-gold" />
                     <span className="font-light">hello@atypicalpalate.com</span>
                   </a>
                </div>

                <div>
                   <h4 className="text-xs uppercase tracking-[0.2em] text-neon-gold mb-4">Network</h4>
                   <div className="flex items-center gap-3 text-silver">
                     <Globe className="w-4 h-4 text-neon-gold" />
                     <span className="font-light">Global Content Delivery</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Menu Links Side */}
          <div className="flex-[2] flex flex-col justify-center pl-0 md:pl-20 pt-20 md:pt-0">
             <nav className="flex flex-col gap-8">
               {menuItems.map((item, index) => (
                 <a 
                   key={item.label} 
                   href={item.href}
                   onClick={handleLinkClick}
                   className="group relative flex items-baseline gap-6 overflow-hidden"
                 >
                   <span className="text-xs font-mono text-neon-gold/50 group-hover:text-neon-gold transition-colors duration-300 translate-y-0 group-hover:-translate-y-1">
                     {item.number}
                   </span>
                   <span 
                     className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dim to-dim group-hover:from-white group-hover:to-white transition-all duration-500 transform translate-x-0 group-hover:translate-x-4"
                   >
                     {item.label}
                   </span>
                   <span className="hidden md:block text-xs uppercase tracking-widest text-dim opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 self-center border border-white/10 px-2 py-1 rounded">
                     {item.desc}
                   </span>
                   <ArrowRight className="w-6 h-6 text-neon-gold opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out self-center ml-4" />
                   
                   {/* Hover Line Effect */}
                   <div className="absolute bottom-2 left-10 w-full h-[1px] bg-neon-gold/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
                 </a>
               ))}
             </nav>
          </div>

        </div>

        {/* Mobile Footer Info */}
        <div className="md:hidden absolute bottom-12 left-6 right-6 flex justify-between text-xs text-dim border-t border-white/5 pt-6">
           <span>Est. 2015</span>
           <span>Kyoto, JP</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;