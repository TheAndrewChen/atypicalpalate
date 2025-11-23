import React from 'react';
import { Instagram, Facebook, Youtube, Music, AtSign } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/atypicalpalate' 
    },
    { 
      name: 'Threads', 
      icon: AtSign, 
      url: 'https://threads.net/@atypicalpalate' 
    },
    { 
      name: 'TikTok', 
      icon: TikTokIcon, 
      url: 'https://tiktok.com/@atypicalpalate' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://www.youtube.com/atypicalpalate' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/atypicalpalate' 
    },
    { 
      name: 'Spotify', 
      icon: Music, 
      url: 'https://open.spotify.com/user/atypicalpalate' 
    },
  ];

  return (
    <footer className="py-20 border-t border-white/5 bg-background text-center relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-12">
        
        <h2 className="text-2xl font-sans font-bold text-silver tracking-tighter">A Typical Palate</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-dim hover:text-neon-gold transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-neon-gold/40 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] relative flex items-center justify-center">
                <link.icon className="w-5 h-5" />
              </div>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0 h-0 overflow-visible absolute mt-16">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-4 text-dim/60 font-light text-xs tracking-wide">
          <p>&copy; {currentYear} Andrew Chen. All Rights Reserved.</p>
          <p className="mt-2 opacity-50">Designed for the curious.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;