import React from 'react';
import Link from 'next/link';
import { LuArrowLeft, LuShieldCheck, LuGauge, LuLayers, LuSparkles } from 'react-icons/lu';

export const metadata = {
  title: "The Ski Barn Case Study | Ink & Interface",
  description: "How we deployed turn-key corporate compliance, authoritative brand identity, and a high-performance Next.js engine for a heavy-duty PWC terminal.",
};

export default function SkiBarnCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-white selection:text-slate-950 antialiased font-sans">
      
      {/* Editorial Navigation Header */}
      <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md px-6 py-6 md:px-12 lg:px-24 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
            <LuArrowLeft size={14} /> Core Terminal
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Case_Study // Project_01</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-24">
        
        {/* Project Title & Meta Hero */}
        <div className="space-y-6 max-w-5xl">
          <div className="inline-block bg-white text-slate-950 font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
            Heavy-Duty Marine Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-balance">
            The Ski Barn: Automating Scale for a Regional PWC Terminal.
          </h1>
          
          {/* Project Metrics Summary Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Client Sector</span>
              <span className="text-sm font-semibold text-slate-200">PWC Repair & Salvage</span>
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Lighthouse Performance</span>
              <span className="text-sm font-semibold text-emerald-400 font-mono">100% Core Web Vitals</span>
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Deployment Windows</span>
              <span className="text-sm font-semibold text-slate-200">14 Days (Turn-Key)</span>
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Conversion Impact</span>
              <span className="text-sm font-semibold text-white">+42% Structured Lead Intake</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Operational Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">01 // The Friction</h2>
            <p className="text-xl font-extrabold tracking-tight mt-2 text-white">
              The Cost of Fragmentation.
            </p>
          </div>
          <div className="lg:col-span-8 text-slate-400 font-light leading-relaxed space-y-6 max-w-2xl">
            <p>
              The Ski Barn operated as an elite regional hub for mechanical watercraft diagnostics, performance tuning, and hull overhauls. However, behind the service bays, their administrative and digital footprint was throttling their capacity to capture high-value commercial accounts and fleet maintenance retainers.
            </p>
            <p>
              Their legacy operation relied on a fragile third-party website builder that loaded slowly on mobile devices at the boat ramp, suffered from broken intake fields, and failed to project the industrial authority of their physical setup. They were losing valuable shop hours playing customer phone tag just to log initial engine diagnostic details.
            </p>
          </div>
        </div>

        {/* Section 2: The Three-Pillar Deployment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">02 // The Execution</h2>
            <p className="text-xl font-extrabold tracking-tight mt-2 text-white">
              The Complete Stack Integration.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="flex flex-row items-center space-x-2">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-white text-slate-950">
                  <LuShieldCheck size={14} />
                </span>
                <span className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 1: Compliance Insulation</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Corporate Architecture Realignment</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
                We managed the administrative runway, filing state entity restructurings, updating corporate operational operating binders, and setting up their clean employer tracking profiles (EIN). This shifted the asset baseline from a casual local shop to an insulated commercial enterprise ready for corporate service agreements.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="flex flex-row items-center space-x-2">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-white text-slate-950">
                  <LuSparkles size={14} />
                </span>
                <span className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 2: Visual Authority</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Bold Industrial Character System</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
                We constructed a rugged visual layout scale engineered for high-impact authority. Anchored by heavy typographic scales and high-contrast styling tokens (blaze orange details cutting through a deep charcoal foundation), the interface mirrors the clean, mechanical discipline of a premium tuning bay.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="flex flex-row items-center space-x-2">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-white text-slate-950">
                  <LuGauge size={14} />
                </span>
                <span className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 3: Next.js Architecture</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Hand-Coded Edge Engineering</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl">
                We built a blazing fast, zero-bloat web storefront using **Next.js, TypeScript, and Tailwind CSS**. This custom compilation engine automatically renders lightning-fast server-side speeds directly on mobile viewports out on the water. We plugged in an explicit lead verification route that securely pipes intake details straight into their terminal, cutting administrative downtime down by hours.
              </p>
            </div>

          </div>
        </div>

        {/* Section 3: Technical Architecture Log */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">03 // The Blueprint Log</h2>
            <p className="text-xl font-extrabold tracking-tight mt-2 text-white">
              System Specification Blocks.
            </p>
          </div>
          
          <div className="lg:col-span-8 max-w-2xl w-full font-mono text-xs text-slate-400 bg-slate-900 border border-white/10 p-6 space-y-4 shadow-xl">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-500">framework_engine</span>
              <span className="text-white font-semibold">Next.js App Router (Turbopack)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-500">styling_protocol</span>
              <span className="text-white font-semibold">Tailwind CSS v4 (Strict 0px Corners)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-500">data_handler</span>
              <span className="text-white font-semibold">Serverless API Route Handler (/api/onboard)</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-slate-500">mail_relay</span>
              <span className="text-white font-semibold">Resend SDK Automated HTML Dispatcher</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">hosting_topology</span>
              <span className="text-white font-semibold">Vercel Global Edge Network Deployment</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-white text-slate-950 p-8 md:p-12 space-y-6 max-w-5xl mx-auto shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-6 rounded-none">
          <div className="space-y-2 max-w-xl text-center sm:text-left">
            <h4 className="text-2xl font-extrabold tracking-tight uppercase">Ready to Deploy Your Own Engine?</h4>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              We can streamline your company’s organizational compliance filings, brand style guide architectures, and custom Next.js frontend codebases into one integrated delivery frame.
            </p>
          </div>
          <Link 
            href="/onboard" 
            className="w-full sm:w-auto text-center cursor-pointer bg-slate-950 text-white font-bold font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-none hover:bg-slate-800 transition-shadow shadow-md whitespace-nowrap"
          >
            Initialize Setup Pipeline &rarr;
          </Link>
        </div>

      </main>
    </div>
  );
}