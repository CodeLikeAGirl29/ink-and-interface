import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between px-6 py-12 md:px-12 lg:px-24">
      {/* Top Navigation Bar / Branding */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-tight uppercase">Ink & Interface</span>
        <a 
          href="#case-studies" 
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Case Studies &rarr;
        </a>
      </div>

      {/* Main Hero Value Proposition */}
      <div className="w-full max-w-4xl mx-auto my-auto py-20 space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-balance">
          From Idea to Entity. <br />
          <span className="text-slate-500">Completely Handled.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed text-balance">
          We manage your state legal formation, design your premium brand identity, and custom-code your web storefront. You just focus on the business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-slate-900 text-white font-medium px-8 py-4 rounded-none hover:bg-slate-800 transition-colors shadow-sm">
            Launch Your Business
          </button>
          <button className="border border-slate-300 text-slate-700 font-medium px-8 py-4 rounded-none hover:bg-slate-100 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>

      {/* Mandatory Operational Safeguard Footer */}
      <div className="w-full max-w-7xl mx-auto border-t border-slate-200 pt-8 mt-auto">
        <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
          <strong>Disclaimer:</strong> Ink & Interface is a corporate document preparation, branding, and web design studio. We are not a law firm, do not provide legal, tax, or financial advice, and our services do not substitute for the counsel of an attorney or CPA. All filing actions are executed strictly at your direction.
        </p>
      </div>
    </section>
  );
}