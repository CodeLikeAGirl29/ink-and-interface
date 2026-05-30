import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Case Study: The Ski Barn Launch | Ink & Interface",
  description: "How we took a heavy-duty PWC repair and salvage operation from an idea to a fully functioning legal and digital entity in 14 days.",
};

export default function SkiBarnCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white antialiased">
      
      {/* Editorial Header Navigation */}
      <nav className="w-full border-b border-slate-200 bg-white px-6 py-6 md:px-12 lg:px-24 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm font-bold uppercase tracking-tight hover:text-slate-600 transition-colors">
            &larr; Back to Core Terminal
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">Archive // Project-01</span>
        </div>
      </nav>

      {/* Main Structural Narrative */}
      <article className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-20">
        
        {/* Title Block & Context */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-block bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-1">
            B2B Deployment Blueprint
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-balance">
            The Ski Barn: Launching a Heavy-Duty PWC Salvage Storefront.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed text-balance">
            How a high-end personal watercraft repair and mechanical salvage operation bypassed weeks of administrative friction to book client work on day one.
          </p>
        </div>

        {/* High-Impact Visual Anchor Frame */}
        <div className="relative bg-slate-950 p-2 md:p-4 border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex gap-1.5 mb-3 px-2 pt-1">
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-[2/1] w-full bg-slate-900">
            <Image 
              src="/ski-barn.jpg" 
              alt="The Ski Barn Production Storefront Interface"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Operational Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200 pt-12">
          
          {/* Metadata Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 h-fit">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 font-sans">
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Client Venture</p>
                <p className="text-lg font-bold mt-1">The Ski Barn</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location Scope</p>
                <p className="text-lg font-bold mt-1">Regional / Florida</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Development Speed</p>
                <p className="text-lg font-bold mt-1">14 Days Flat</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Core Stack</p>
                <p className="text-lg font-bold mt-1 font-mono text-xs">Next.js + Tailwind</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 space-y-4">
              <h4 className="text-xs font-bold tracking-wider uppercase font-mono text-slate-400">Pipeline Milestones</h4>
              <ul className="space-y-2.5 text-xs font-mono text-slate-600">
                <li className="flex items-center gap-2 text-emerald-600 font-bold">✓ State Registry Clearance</li>
                <li className="flex items-center gap-2 text-emerald-600 font-bold">✓ EIN Allocation Dispatched</li>
                <li className="flex items-center gap-2 text-emerald-600 font-bold">✓ Visual Styleguide Lock</li>
                <li className="flex items-center gap-2 text-emerald-600 font-bold">✓ Custom Interface Engine</li>
              </ul>
            </div>
          </div>

          {/* Narrative Analysis (8 cols) */}
          <div className="lg:col-span-8 space-y-12 text-slate-700 font-light leading-relaxed max-w-3xl">
            
            <section className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">01 // The Strategic Hurdle</h3>
              <p>
                The founders of The Ski Barn possessed elite technical mastery in personal watercraft mechanics, industrial fiber restoration, and heavy-duty hull salvage operations. However, taking their venture to the formal commercial market presented massive non-mechanical friction. 
              </p>
              <p>
                Navigating the siloed layout of state corporate filing structures, tracking down tax administration requirements from the IRS, and attempting to piece together a cohesive brand language using standard consumer template platforms was consuming critical development cycles.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">02 // The Full-Stack Execution</h3>
              <p>
                Our studio took direct ownership of the operational runway through our productized <strong>Business-in-a-Box</strong> model, systematically executing across three primary technical divisions:
              </p>
              <ul className="list-none pl-0 space-y-3 mt-4 text-sm text-slate-800">
                <li>
                  <strong>I. Structural Administration:</strong> We cleared entity naming variations through the corporate registry database, successfully generated their Articles of Organization, managed the state documentation pipelines, and secured their official federal Employer Identification Number (EIN) with the IRS.
                </li>
                <li>
                  <strong>II. Visual Architecture:</strong> To stand out in a generic maritime market, we established a high-contrast industrial identity. Blending deep, authoritative ocean slate colors with high-visibility emergency safety orange, we built an aggressive typographic theme that screams performance and structural durability.
                </li>
                <li>
                  <strong>III. Custom Web Engineering:</strong> Rejecting slow, bloated template platforms, we custom-coded an edge-optimized web interface utilizing Next.js and Tailwind CSS. The engine delivers instantaneous load speeds, responsive typography blocks, and a clean, localized contact funnel designed specifically to capture rapid repair leads.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">03 // Commercial Outcomes</h3>
              <p>
                By consolidating three traditionally fragmented service steps (legal documentation, creative identity design, and full-stack software coding) into a single unified pipeline, The Ski Barn completely sidestepped launch delays. 
              </p>
              <p>
                The business was legally insulated, federally identified, and fully indexed across search engines in exactly two weeks. Within hours of deployment, their custom-built terminal was actively collecting organic mechanic inquiries and scheduling asset teardowns.
              </p>
            </section>

            {/* In-Context Project CTA Panel */}
            <div className="bg-slate-900 text-white p-8 space-y-6 !mt-16 shadow-lg">
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold tracking-tight">Ready to Initialize Your Venture?</h4>
                <p className="text-sm text-slate-400 font-light">
                  Skip the disconnected tools and fragmented freelancer portals. Let’s deploy your business infrastructure correctly in 14 days.
                </p>
              </div>
              <Link 
                href="/onboard"
                className="inline-block bg-white text-slate-900 font-medium px-6 py-3 text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                Configure Your Startup Package &rarr;
              </Link>
            </div>

          </div>
        </div>

      </article>
      <Footer />
    </div>
  );
}