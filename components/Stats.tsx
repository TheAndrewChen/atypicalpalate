import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: '1', label: 'Michelin Stars', value: '29' },
  { id: '2', label: 'Cities Visited', value: '57' },
  { id: '3', label: 'Traveled with Toddler', value: '9' },
  { id: '4', label: 'Cups of Coffee', value: '∞' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-surface/20 border-y border-neon-blue/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-12 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex-1 flex flex-col items-center text-center group cursor-default">
              <span className="font-sans text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-neon-blue group-hover:to-cyan-200 transition-all duration-500 mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                {stat.value}
              </span>
              <span className="text-xs font-sans text-dim uppercase tracking-[0.25em] font-medium group-hover:text-silver transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;