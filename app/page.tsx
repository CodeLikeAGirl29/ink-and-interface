import React from 'react';
import Hero from '@/components/Hero';
import CaseStudy from '@/components/CaseStudy';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <CaseStudy />
      <Pricing />
    </div>
  );
}