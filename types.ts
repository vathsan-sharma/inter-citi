
// Fix: Added React import to resolve "Cannot find namespace 'React'" error on line 6
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
}

export interface StatProps {
  label: string;
  value: string;
}

export interface PillarProps {
  title: string;
  description: string;
  items?: string[];
}
