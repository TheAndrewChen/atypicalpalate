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
    <section className="bg-surface/30 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-10 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex-1 flex flex-col items-center text-center group">
              <span className="font-serif text-3xl md:text-4xl text-gold mb-2 italic">
                {stat.value}
              </span>
              <span className="text-xs font-sans text-stone-400 uppercase tracking-widest font-medium">
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