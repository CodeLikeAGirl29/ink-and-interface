'use ' + 'client'; // Force client-side execution for interactive hooks

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function OnboardingFormContent() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    tier: 'basic', // Default fallback
    businessName: '',
    ownerName: '',
    email: '',
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
    <div className="min-h-screen bg-slate-50 text-slate-900 py-24 px-6">
      <div className="max-w-xl mx-auto bg-white border border-slate-200 p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold tracking-tight mb-2">Initialize Your Launch</h2>
        <p className="text-sm text-slate-500 mb-8 font-light">Complete the baseline parameters to configure your startup package.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Package Selection Sync */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">Selected Package Tier</label>
            <select 
              name="tier"
              value={formData.tier}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors font-medium"
            >
              <option value="basic">The Basic Launch ($1,499)</option>
              <option value="premium">The Full-Stack Studio ($2,999)</option>
            </select>
          </div>

          {/* Legal Business Data */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">Proposed Business Entity Name</label>
            <input 
              required
              type="text"
              name="businessName"
              placeholder="e.g., Ski Barn LLC"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
            />
          </div>

          {/* Primary Contact Details */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">Primary Organizer Full Name</label>
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
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono block">Secure Contact Email Address</label>
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

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white font-medium py-4 rounded-none hover:bg-slate-800 transition-colors mt-4 shadow-sm"
          >
            Submit Administrative Intakes
          </button>
        </form>
      </div>
    </div>
  );
}

// Next.js App Router requires useSearchParams hooks to be wrapped in a Suspense boundary
export default function OnboardingForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 text-slate-400 flex items-center justify-center font-mono text-xs">LOADING FRAMEWORK...</div>}>
      <OnboardingFormContent />
    </Suspense>
  );
}