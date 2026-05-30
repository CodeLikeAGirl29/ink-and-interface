import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between px-6 py-12 md:px-12 lg:px-24">
      {/* Top Navigation Bar / Branding */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-tight uppercase">
          Ink & Interface
        </span>
        <Link
          href="/case-studies/ski-barn"
          className="text-sm font-medium hover:text-slate-600 transition-colors"
        >
          Case Studies &rarr;
        </Link>
      </div>

      {/* Main Hero Value Proposition */}
      <div className="w-full max-w-4xl mx-auto my-auto py-20 space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-balance">
          From Idea to Entity. <br />
          <span className="text-slate-500">Completely Handled.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed text-balance">
          We manage your state legal formation, design your premium brand
          identity, and custom-code your web storefront. You just focus on the
          business.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center">
          
          {/* Custom Premium Rolling-Text CTA Link */}
          <Link 
            href="/onboard" 
            className="w-full sm:w-auto text-center cursor-pointer bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0px_4px_32px_0_rgba(15,23,42,0.35)] px-8 py-4 rounded-none border border-slate-700 text-white font-medium group transition-shadow duration-300 hover:shadow-[0px_4px_40px_0_rgba(15,23,42,0.5)]"
          >
            <div className="relative overflow-hidden h-5">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] uppercase tracking-wider text-xs font-bold">
                Launch Your Business
              </p>
              <p className="absolute top-7 left-0 right-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] uppercase tracking-wider text-xs font-bold text-slate-300">
                Launch Your Business
              </p>
            </div>
          </Link>

          {/* Secondary Button Styled Link */}
          <Link
            href="/case-studies/ski-barn"
           className="w-full sm:w-auto text-center text-xs font-bold uppercase tracking-wider text-slate-700 border border-slate-300 px-8 py-4 rounded-none bg-transparent transition-all duration-300 ease-in-out hover:bg-white hover:border-slate-400 hover:text-slate-900 hover:shadow-[0_0_25px_0_rgba(148,163,184,0.35)]"
          >
            View Case Studies
          </Link>
        </div>
      </div>

      {/* Mandatory Operational Safeguard Footer */}
      <div className="w-full max-w-7xl mx-auto border-t border-slate-200 pt-8 mt-auto">
        <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
          <strong>Disclaimer:</strong> Ink & Interface is a corporate document
          preparation, branding, and web design studio. We are not a law firm,
          do not provide legal, tax, or financial advice, and our services do
          not substitute for the counsel of an attorney or CPA. All filing
          actions are executed strictly at your direction.
        </p>
      </div>
    </section>
  );
}