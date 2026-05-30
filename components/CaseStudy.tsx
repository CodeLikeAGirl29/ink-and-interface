import React from 'react';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <section id="case-studies" className="bg-white text-slate-900 min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: The Real Ski Barn Interface (6 cols) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative bg-slate-950 p-2 md:p-4 border border-slate-200 shadow-xl group overflow-hidden">
            {/* Top Minimalist Browser Frame Detail */}
            <div className="flex gap-1.5 mb-3 px-2 pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
            </div>

            {/* High-Performance Next.js Image Element */}
            <div className="relative aspect-[21/9] sm:aspect-[16/9] lg:aspect-[2/1] w-full overflow-hidden border border-slate-900 bg-slate-900">
              <Image 
                src="/ski-barn.png" 
                alt="The Ski Barn PWC Repair Storefront Interface"
                fill
                priority
                className="object-cover object-top transform group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Sub-tray Technical Metrics */}
            <div className="flex justify-between items-center pt-3 px-2 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              <span>System Archive // Case Study 01</span>
              <span className="text-slate-900 font-bold">Live Storefront &rarr;</span>
            </div>
          </div>
        </div>

        {/* Right Column: Case Study Narrative (6 cols) */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">Case Study // 01</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">The Ski Barn Launch</h2>
          </div>

          <p className="text-slate-600 font-light leading-relaxed text-balance">
            Our client wanted to position themselves as the premier heavy-duty jet ski repair and salvage operation in the region. They were held back by slow template-builders and complex corporate registration systems. We completely cleared the runway by executing their state legal setup, acquiring their EIN, and coding a high-speed custom digital terminal from scratch.
          </p>

          {/* Core Project Metrics */}
          <div className="grid grid-cols-3 gap-6 border-y border-slate-200 py-6 font-sans">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Timeline</p>
              <p className="text-xl font-bold mt-1 text-slate-900">14 Days</p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Infrastructure</p>
              <p className="text-xl font-bold mt-1 text-slate-900">Full-Stack</p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Architecture</p>
              <p className="text-xl font-bold mt-1 text-slate-900">Next.js</p>
            </div>
          </div>

          {/* Structural Checklist */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">Deliverables Completed:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700 font-light">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> Corporate Entity Formation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> IRS Employer ID (EIN)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> High-Contrast Brand Strategy</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> Custom Tailored Typography</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> Edge-Optimized Interface</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-900"></span> PWC Salvage "Graveyard" Matrix</li>
            </ul>
          </div>

          {/* Founder Testimonial */}
          <blockquote className="border-l-2 border-slate-900 pl-4 italic text-slate-600 text-sm font-light leading-relaxed">
            "Having a single development partner manage our legal entity tracking, branding language, and a custom Next.js codebase saved weeks of friction. We were booking repairs instantly upon deployment."
            <cite className="block not-italic text-xs font-mono font-bold uppercase text-slate-400 mt-2">&#8212; Founder, The Ski Barn</cite>
          </blockquote>
        </div>

      </div>
    </section>
  );
}