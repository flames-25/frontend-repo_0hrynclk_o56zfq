import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Free',
    features: ['1 device', 'Basic filters', 'Weekly summary'],
    highlight: false,
  },
  {
    name: 'Family',
    price: '$9',
    period: 'per month',
    features: ['Up to 5 devices', 'Smart alerts', 'Real-time location', 'Priority support'],
    highlight: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0A0B0F] text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-4 text-white/70">Start free, upgrade when your family grows.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.highlight ? 'border-amber-400/50 bg-amber-500/10' : 'border-white/10 bg-white/5'} rounded-2xl border p-6`}
            >
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.highlight && (
                  <span className="inline-flex items-center text-xs font-medium text-amber-400">Best value</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-white/60">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20">
                      <Check size={14} className="text-amber-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full h-11 rounded-md font-medium transition ${tier.highlight ? 'bg-amber-500 text-black hover:bg-amber-400' : 'border border-white/10 text-white/80 hover:text-white hover:border-white/20'}`}>
                {tier.highlight ? 'Get Family' : 'Get Starter'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
