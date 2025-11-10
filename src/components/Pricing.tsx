import React from 'react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Basic monitoring for one device',
    features: ['App usage summary', 'Daily report', 'Email support'],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Family',
    price: '$7/mo',
    desc: 'Full control for up to 5 devices',
    features: ['All Free features', 'App blocking & schedules', 'Location & geofencing', 'Priority support'],
    cta: 'Get Family',
    highlighted: true,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Choose a plan that fits your family. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'relative rounded-2xl border p-8 shadow-sm ' +
                (tier.highlighted
                  ? 'border-emerald-200 bg-white ring-1 ring-emerald-200'
                  : 'border-gray-200 bg-white')
              }
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">Best value</span>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-4xl font-bold text-gray-900">{tier.price}</p>
              <p className="mt-2 text-sm text-gray-600">{tier.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={
                  'mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
                  (tier.highlighted
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500'
                    : 'bg-gray-900 text-white hover:bg-black focus:ring-gray-900')
                }
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
