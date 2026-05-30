import React from "react";
import Link from "next/link";
import { LuShieldCheck, LuPalette, LuTerminal, LuBox } from "react-icons/lu";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Philosophy | Ink & Interface",
  description:
    "Bypassing administrative friction and fragmented freelancer networks to hand-code operational business infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white antialiased">
      {/* Structural Editorial Header */}
      <nav className="w-full border-b border-slate-200 bg-white px-6 py-6 md:px-12 lg:px-24 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-tight hover:text-slate-600 transition-colors"
          >
            &larr; Core Terminal
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            Studio // Manifesto
          </span>
        </div>
      </nav>

      {/* Main Column Layout */}
      <main className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-24">
        {/* Core Vision Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-block bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-1">
            The Core Antithesis
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-balance">
            Bypassing Fragmented Agency Models.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed text-balance">
            Most businesses stall out before their first transaction because the
            traditional path to initialization is broken. We engineered a
            centralized alternative.
          </p>
        </div>

        <hr className="border-slate-200" />

        {/* The Operational Split Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sticky Callout Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              The Problem
            </h2>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">
              The Startup Friction Tax.
            </p>
          </div>

          {/* Right Narrative Body Column */}
          <div className="lg:col-span-8 text-slate-700 font-light leading-relaxed space-y-6 max-w-2xl">
            <p>
              When an ambitious founder or local operator decides to scale an
              operational service, they are immediately met with three
              completely disconnected roadblocks:
            </p>
            <ul className="list-none pl-4 space-y-4 text-slate-800 font-medium text-sm my-6">
              <li>
                <span className="text-slate-400 font-mono text-xs mr-1">
                  01.
                </span>
                <strong>Administrative Hurdles:</strong> Navigating confusing
                state corporate registries, drafting compliant operating papers,
                and obtaining federal tax identification documents.
              </li>
              <li>
                <span className="text-slate-400 font-mono text-xs mr-1">
                  02.
                </span>
                <strong>Visual Ambiguity:</strong> Spending excessive time
                wrestling with standard consumer website templates that lack
                definitive brand authority.
              </li>
              <li>
                <span className="text-slate-400 font-mono text-xs mr-1">
                  03.
                </span>
                <strong>Software Bloat:</strong> Dealing with heavy, slow visual
                web page builders that require expensive monthly platform
                attachments and offer fragile mobile performance.
              </li>
            </ul>
            <p>
              This fragmented loop leads to massive decision fatigue. Founders
              get trapped spending weeks acting as project managers between
              corporate document filing platforms, freelance designers, and
              junior developers—all before writing their first invoice.
            </p>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* Studio DNA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sticky Callout Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              The Solution
            </h2>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">
              Ink & Interface Architecture.
            </p>
          </div>

          {/* Right Pillar Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Pillar 01 */}
            <div className="space-y-4 p-6 border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <LuShieldCheck size={18} className="text-slate-800" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    COMPLIANCE RUNWAY
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  Structured Document Prep
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  We handle the heavy organizational legwork. From state entity
                  documentation and organizational filing pipelines to securing
                  your federal EIN, your framework is insulated correctly from
                  the start.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="space-y-4 p-6 border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <LuPalette size={18} className="text-slate-800" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    INDUSTRIAL IDENTITY
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  Authoritative Brand Scale
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  No generic consumer presets. We design intentional typographic
                  scales, high-contrast style guides, and sharp visual
                  components built to command respect in competitive commercial
                  service markets.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="space-y-4 p-6 border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <LuTerminal size={18} className="text-slate-800" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    FULL-STACK STACK
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  Custom Next.js Engineering
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  We custom-code your digital interface from scratch using
                  Next.js, TypeScript, and Tailwind CSS. The output is
                  lightning-fast edge performance, clean search engine
                  discovery, and flawless layout integrity.
                </p>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="space-y-4 p-6 border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <LuBox size={18} className="text-slate-800" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                    PRODUCTIZED TURNKEY
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  Single Flat-Rate Execution
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  We eliminated the open-ended hourly billing system. You choose
                  a flat-rate package tier, submit your core data parameters,
                  and watch your operational setup deploy completely within 14
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* Founding Engineer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Title Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              The Studio Operator
            </h2>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">
              Behind the Interface.
            </p>
          </div>

          {/* Right Profile Breakdown Column */}
          <div className="lg:col-span-8 space-y-8 max-w-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-8 p-8 border border-slate-200 bg-white shadow-sm">
              {/* Visual Identity / Avatar Placeholder */}
              <div className="w-20 h-20 bg-slate-900 text-white flex-shrink-0 flex items-center justify-center font-mono text-xl font-bold tracking-tighter">
                LH
              </div>

              {/* Bio Details */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                    Lindsey Howard
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                    Founding Frontend Engineer & Architect
                  </p>
                </div>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Operating at the intersection of structural compliance and
                  modern web engineering under the professional identifier{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono text-slate-800">
                    lindseykdev
                  </code>
                  .
                </p>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  I launched Ink & Interface to eliminate the agonizing
                  fragmentation of standard B2B development setup loops. By
                  compiling corporate documentation frameworks, premium asset
                  scales, and high-performance custom Next.js, TypeScript, and
                  Tailwind CSS code bases into singular flat-rate deployment
                  windows, we replace traditional friction with absolute
                  deployment speed.
                </p>

                {/* Technical Competencies Badge Strip */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "React",
                    "Node.js",
                    "GitHub Workflow",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-mono px-2 py-1 uppercase tracking-tight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Structural Action Panel */}
        <div className="bg-slate-900 text-white p-8 md:p-12 space-y-6 max-w-5xl mx-auto shadow-lg text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-2xl font-extrabold tracking-tight">
              Stop Managing Freelancers. Start Operating.
            </h4>
            <p className="text-sm text-slate-400 font-light">
              Let us take absolute ownership of your corporate filing, brand
              styleguide, and production web stack in one clean execution
              window.
            </p>
          </div>
          <Link
            href="/onboard"
            className="w-full sm:w-auto text-center cursor-pointer bg-white text-slate-900 font-medium px-8 py-4 rounded-none hover:bg-slate-100 transition-colors shadow-sm whitespace-nowrap text-xs uppercase tracking-wider font-bold"
          >
            Initialize Setup Pipeline &rarr;
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
