'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { HiChevronDown, HiShieldCheck, HiPaintBrush, HiCpuChip, HiUserCircle } from 'react-icons/hi2';

function OnboardingFormContent() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    // Core Configuration
    tier: 'basic',
    ownerName: '',
    email: '',
    
    // Compliance Runway
    businessNamePrimary: '',
    businessNameAlternate: '',
    businessAddress: '',
    industryType: 'professional-services',
    
    // Brand Architecture
    brandStyle: 'minimal',
    brandColor: 'slate',
    targetAudience: '',
    
    // Infrastructure Scope
    domainStatus: 'register',
    conversionTarget: 'lead-form',
  });

  useEffect(() => {
    const selectedTier = searchParams.get('tier');
    if (selectedTier === 'basic' || selectedTier === 'premium') {
      setFormData((prev) => ({ ...prev, tier: selectedTier }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Network error during submission.');
      }

      if (data.checkoutUrl) {
        setStatus('success');
        setTimeout(() => {
          window.location.href = data.checkoutUrl;
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // Premium Thank You Card Overlay (Matches the Dark Aesthetics)
  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 font-sans">
        <div className="max-w-md w-full bg-slate-900 border border-white/10 p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-slate-950 font-mono text-xs font-bold">
            ✔
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight uppercase">Intake Complete</h2>
            <p className="text-xs font-mono tracking-widest text-slate-500 uppercase">Pipeline Initialized</p>
          </div>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Your legal parameters, brand specifications, and Next.js scope profiles have been cleanly committed to our pipeline core.
          </p>
          <div className="border-t border-white/5 pt-6 space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <p className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                Routing to secure stripe terminal...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-6 font-sans antialiased">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* TOP SECTION: PACKAGE SETUP */}
          <div className="border-b border-white/10 pb-12">
            <div className="flex items-center gap-x-3">
              <HiCpuChip className="size-6 text-gray-500" />
              <h2 className="text-base font-semibold text-white uppercase tracking-wider font-mono">System Configuration</h2>
            </div>
            <p className="mt-1 text-sm text-gray-400 font-light">
              Select your targeted production parameters to map your productized agency layout routing.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="tier" className="block text-sm font-medium text-white font-mono uppercase tracking-wide text-xs">
                  Active Subscription / Setup Tier
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="basic">The Basic Launch Package ($499.00)</option>
                    <option value="premium">The Complete Growth Stack ($999.00)</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: COMPLIANCE RUNWAY */}
          <div className="border-b border-white/10 pb-12">
            <div className="flex items-center gap-x-3">
              <HiShieldCheck className="size-6 text-gray-500" />
              <h2 className="text-base font-semibold text-white uppercase tracking-wider font-mono">Section 01 // Corporate Compliance</h2>
            </div>
            <p className="mt-1 text-sm text-gray-400 font-light">
              Mandatory legal criteria required for organizing documentation and state indexing records.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Primary Legal Name Choice <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="businessNamePrimary"
                    placeholder="e.g., The Ski Barn LLC"
                    value={formData.businessNamePrimary}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Alternate Registry Choice
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="businessNameAlternate"
                    placeholder="Backup name fallback"
                    value={formData.businessNameAlternate}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Principal Entity Physical Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="businessAddress"
                    placeholder="Street, City, State, ZIP (No P.O. Boxes)"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Operational Sector Type
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="industryType"
                    value={formData.industryType}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="professional-services">Professional Services / Consulting</option>
                    <option value="marine-trades">Marine / PWC Repair & Heavy Trades</option>
                    <option value="construction-trades">Construction / Contracting / Trades</option>
                    <option value="e-commerce">Digital Commerce & Retail</option>
                    <option value="hospitality-food">Hospitality, Food & Beverage</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: BRAND IDENTITY & INTERFACE SCOPE */}
          <div className="border-b border-white/10 pb-12">
            <div className="flex items-center gap-x-3">
              <HiPaintBrush className="size-6 text-gray-500" />
              <h2 className="text-base font-semibold text-white uppercase tracking-wider font-mono">Section 02 // Interface & Brand Layout</h2>
            </div>
            <p className="mt-1 text-sm text-gray-400 font-light">
              Defining design system visual attributes and technical scope parameters for Next.js execution.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Design Aesthetic Theme
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="brandStyle"
                    value={formData.brandStyle}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="minimal">Minimal / Sharp High-Contrast</option>
                    <option value="industrial">Heavy Industrial / Bold Core</option>
                    <option value="corporate">Clean Corporate / Modern Corporate</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Primary Theme Color
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="brandColor"
                    value={formData.brandColor}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="slate">Monochrome Deep Slate</option>
                    <option value="orange">Safety Blaze Orange</option>
                    <option value="navy">Maritime Dark Navy</option>
                    <option value="hunter">Deep Timber Hunter Green</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Primary Target Audience Profile <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="targetAudience"
                    placeholder="e.g., Regional commercial clients needing emergency industrial logistics"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Domain Profile Control
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="domainStatus"
                    value={formData.domainStatus}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="register">Register a new business domain profile</option>
                    <option value="transfer">Connect an existing profile via custom DNS</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Conversion Pipeline Target
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="conversionTarget"
                    value={formData.conversionTarget}
                    onChange={handleInputChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-none bg-white/5 py-2.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-slate-900 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  >
                    <option value="lead-form">Lead Intake Terminal (Collect asset records)</option>
                    <option value="booking">Direct Interactive Scheduling Router (Cal/Calendly embed)</option>
                    <option value="click-to-call">Mobile Focus Dialing Route Terminal</option>
                  </select>
                  <HiChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: ORGANIZER CONTACT AUTHORIZATION */}
          <div className="pb-4">
            <div className="flex items-center gap-x-3">
              <HiUserCircle className="size-6 text-gray-500" />
              <h2 className="text-base font-semibold text-white uppercase tracking-wider font-mono">Section 03 // Authorization & Communications</h2>
            </div>
            <p className="mt-1 text-sm text-gray-400 font-light">
              Primary identification credentials used for organizational assignment records.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Organizer Full Legal Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="ownerName"
                    placeholder="John Doe"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-white text-xs uppercase font-mono tracking-wide">
                  Secure Communication Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="founder@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-none bg-white/5 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TRIGGER CONTROL BUTTON BLOCK */}
          <div className="mt-6 flex items-center justify-end gap-x-6 pt-6 border-t border-white/10">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto bg-white text-slate-950 font-bold font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-none hover:bg-gray-200 transition-colors shadow-sm disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Processing Core Assets...' : 'Authorize Framework Setup & Pay'}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-xs font-mono text-red-400 text-center mt-2">
              Pipeline Exception Error: Please verify missing validation dependencies.
            </p>
          )}

        </form>
      </div>
    </div>
  );
}

export default function OnboardingForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-slate-500 flex items-center justify-center font-mono text-xs tracking-widest">INITIALIZING SECURE TERMINAL DATA STRUCTURE...</div>}>
      <OnboardingFormContent />
    </Suspense>
  );
}