'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function OnboardingFormContent() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    // Core Info & Pricing Context
    tier: 'basic',
    ownerName: '',
    email: '',
    
    // Section 1: Entity Legal Formation Parameters
    businessNamePrimary: '',
    businessNameAlternate: '',
    businessAddress: '',
    industryType: 'professional-services',
    
    // Section 2: Visual Identity & Brand Scope
    brandStyle: 'minimal',
    brandColor: 'slate',
    targetAudience: '',
    
    // Section 3: Digital Interface & Infrastructure
    domainStatus: 'register',
    conversionTarget: 'lead-form',
  });

  // Synchronize URL parameters with form state on mount
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

      // Success: Divert the user's browser directly to Stripe Checkout
      if (data.checkoutUrl) {
        setStatus('success');
        window.location.href = data.checkoutUrl;
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-24 px-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
        
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Initialize Your Launch Engine</h2>
          <p className="text-sm text-slate-500 font-light">Complete the baseline specifications to programmatically configure your deployment package.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Baseline Tier Configuration */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">Selected Package Tier</label>
            <select 
              name="tier"
              value={formData.tier}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors font-medium text-slate-800"
            >
              <option value="basic">The Basic Launch Package ($499.00)</option>
              <option value="premium">The Complete Growth Stack ($999.00)</option>
            </select>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 1: ENTITY LEGAL FORMATION */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-900 pl-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Section 01 // Corporate Compliance Runway</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Primary Entity Name Choice</label>
                <input 
                  required
                  type="text"
                  name="businessNamePrimary"
                  placeholder="e.g., The Ski Barn LLC"
                  value={formData.businessNamePrimary}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Alternate Backup Name Choice</label>
                <input 
                  required
                  type="text"
                  name="businessNameAlternate"
                  placeholder="In case primary is taken"
                  value={formData.businessNameAlternate}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Principal Business Physical Address</label>
              <input 
                required
                type="text"
                name="businessAddress"
                placeholder="Street, City, State, Zip (No P.O. Boxes)"
                value={formData.businessAddress}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Core Industry Sector</label>
              <select 
                name="industryType"
                value={formData.industryType}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-800"
              >
                <option value="professional-services">Professional Services / Consulting</option>
                <option value="marine-trades">Marine / PWC Repair & Heavy Trades</option>
                <option value="construction-trades">Construction / Contracting / Trades</option>
                <option value="e-commerce">Digital Commerce & Retail</option>
                <option value="hospitality-food">Hospitality, Food & Beverage</option>
              </select>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 2: VISUAL IDENTITY */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-900 pl-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Section 02 // Brand Identity Parameters</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Design Aesthetic Direction</label>
                <select 
                  name="brandStyle"
                  value={formData.brandStyle}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-800"
                >
                  <option value="minimal">Minimal / Sharp High-Contrast (Ink & Interface Style)</option>
                  <option value="industrial">Heavy Industrial / Bold Character (The Ski Barn Style)</option>
                  <option value="corporate">Clean Corporate / Corporate Modern</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Primary Accent Anchor Color</label>
                <select 
                  name="brandColor"
                  value={formData.brandColor}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-800"
                >
                  <option value="slate">Monochrome Deep Slate</option>
                  <option value="orange">Safety Blaze Orange</option>
                  <option value="navy">Maritime Dark Navy</option>
                  <option value="hunter">Deep Timber Hunter Green</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Primary Target Audience Profile</label>
              <input 
                required
                type="text"
                name="targetAudience"
                placeholder="e.g., Local personal watercraft owners needing rapid mechanical repairs"
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
              />
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* SECTION 3: DIGITAL INFRASTRUCTURE */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-900 pl-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Section 03 // Next.js Interface Scope</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Domain Routing Status</label>
                <select 
                  name="domainStatus"
                  value={formData.domainStatus}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-800"
                >
                  <option value="register">I need you to acquire and register a new domain profile</option>
                  <option value="transfer">I already own a domain profile (Need custom DNS routing)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Core Pipeline Conversion Target</label>
                <select 
                  name="conversionTarget"
                  value={formData.conversionTarget}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-800"
                >
                  <option value="lead-form">Lead Intake Terminal (Collect user data records)</option>
                  <option value="booking">Direct Scheduling Engine Routing (Cal/Calendly embed)</option>
                  <option value="click-to-call">Mobile First Click-to-Dial Focus</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Primary Administrative Organizer Details */}
          <div className="space-y-6">
            <div className="border-l-2 border-slate-900 pl-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">Section 04 // Contact Authorization</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Organizer Full Legal Name</label>
                <input 
                  required
                  type="text"
                  name="ownerName"
                  placeholder="John Doe"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-slate-700 uppercase font-mono block">Secure Contact Email Address</label>
                <input 
                  required
                  type="email"
                  name="email"
                  placeholder="founder@domain.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Action Trigger Submit */}
          <button 
            type="submit" 
            disabled={status === 'submitting' || status === 'success'}
            className="w-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-none hover:bg-slate-800 transition-colors mt-6 shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Transmitting Core Framework Parameters...' : status === 'success' ? 'Redirecting to Stripe Checkout Terminals...' : 'Authorize Setup & Proceed to Billing'}
          </button>

          {status === 'error' && (
            <p className="text-xs font-mono text-red-600 text-center mt-2">
              Exception Error: System pipeline disruption encountered. Please verify parameter fields.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function OnboardingForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 text-slate-400 flex items-center justify-center font-mono text-xs tracking-widest">LOADING CORE COMPLIANCE TERMINAL...</div>}>
      <OnboardingFormContent />
    </Suspense>
  );
}