import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 text-slate-900 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">Accessible Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Simple Pricing. Built for Growth.</h2>
          <p className="text-slate-600 font-light text-balance">
            Launch your company legally and digitally without massive agency overhead. High-performance execution, priced for founders.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Tier 1: The Minimum Viable Launch (MVL) */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between relative shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">The Minimum Viable Launch</h3>
                <p className="text-sm text-slate-500 mt-1 font-light">Get your legal framework established and a high-converting digital landing page live immediately.</p>
              </div>
              
              <div className="flex items-baseline gap-1 py-2 border-y border-slate-100">
                <span className="text-4xl font-extrabold tracking-tight">$499</span>
                <span className="text-xs text-slate-400 font-mono uppercase">+ state filing fees</span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">Includes:</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-900 font-medium mt-0.5">&#8212;</span>
                    <span><strong>Legal Entity Setup:</strong> Articles of Organization document prep & submission.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-900 font-medium mt-0.5">&#8212;</span>
                    <span><strong>Tax Identity:</strong> IRS Employer Identification Number (EIN) acquisition.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-900 font-medium mt-0.5">&#8212;</span>
                    <span><strong>Visual Base:</strong> Minimalist typographic wordmark design & raw asset export.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-900 font-medium mt-0.5">&#8212;</span>
                    <span><strong>1-Page Storefront:</strong> Custom, lightning-fast Next.js landing page with interactive contact/intake form.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link 
              href="/onboard?tier=basic"
              className="w-full block text-center border border-slate-300 text-slate-700 font-medium py-4 rounded-none hover:bg-slate-50 transition-colors mt-8"
            >
              Get Started for $499
            </Link>
          </div>

          {/* Tier 2: The Complete Growth Stack */}
          <div className="bg-slate-900 text-white p-8 flex flex-col justify-between relative shadow-xl border-2 border-slate-900">
            <div className="absolute -top-3 right-6 bg-slate-900 text-white border border-slate-700 text-[10px] tracking-widest font-mono uppercase px-3 py-1">
              Best Value
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">The Complete Growth Stack</h3>
                <p className="text-sm text-slate-400 mt-1 font-light">A comprehensive setup designed for businesses ready to dominate local search and capture online leads.</p>
              </div>
              
              <div className="flex items-baseline gap-1 py-2 border-y border-slate-800">
                <span className="text-4xl font-extrabold tracking-tight">$999</span>
                <span className="text-xs text-slate-500 font-mono uppercase">+ state filing fees</span>
              </div>

              {/* Deliverables List */}
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono">Everything in the basic tier, plus:</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-medium mt-0.5">&#10003;</span>
                    <span><strong>Expanded Web Layout:</strong> Multi-page custom Next.js site (Home, Services Menu, Portfolio/Case Studies, Contact).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-medium mt-0.5">&#10003;</span>
                    <span><strong>Expanded Brand Kit:</strong> Full visual identity system including icons, typography scales, and favicon configurations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-medium mt-0.5">&#10003;</span>
                    <span><strong>Workspace Engine:</strong> Domain routing setup, DNS management, and custom business email integration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-medium mt-0.5">&#10003;</span>
                    <span><strong>Local SEO Layer:</strong> Schema markup injection and search indexing acceleration to get found locally fast.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link 
              href="/onboard?tier=premium"
              className="w-full block text-center bg-white text-slate-900 font-medium py-4 rounded-none hover:bg-slate-100 transition-colors mt-8 shadow-sm"
            >
              Launch Growth Stack for $999
            </Link>
          </div>

        </div>

        {/* Optional Recurring MRR Add-on Section */}
        <div className="max-w-3xl mx-auto mt-16 bg-white border border-slate-200 p-6 text-center space-y-3 shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono bg-slate-100 px-2 py-0.5">Optional Add-On</span>
          <h4 className="text-lg font-bold">The Partner Plan // $49/mo</h4>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light">
            Keep your site completely hands-free. Includes secure blazing-fast hosting, ongoing text/image content updates, and routine technical maintenance. Cancel anytime.
          </p>
        </div>

        {/* Fee Disclosure */}
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            * State corporate filing fees are passed through directly at exact cost with no added markups (e.g., $125 exact for Florida LLC formation records). 
          </p>
        </div>

      </div>
    </section>
  );
}