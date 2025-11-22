import React from 'react';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum CardType {
  TRAVEL = 'TRAVEL',
  FOOD = 'FOOD',
  FATHERHOOD = 'FATHERHOOD'
}