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
    <footer className="py-16 border-t border-white/5 bg-surface text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">
        
        <h2 className="text-2xl font-serif italic text-cream">A Typical Palate</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-stone-500 hover:text-gold transition-colors"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ring-1 ring-white/5 group-hover:ring-gold/20 relative flex items-center justify-center">
                <link.icon className="w-5 h-5" />
              </div>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 h-0 overflow-visible absolute mt-14">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-stone-600 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} Traveler, Palate explorer & Father.</p>
          <p className="mt-2 text-xs opacity-60">Designed for the curious.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;