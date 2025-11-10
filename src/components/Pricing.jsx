import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$4.99',
    period: 'mo',
    features: ['1 device', 'Web filter', 'App limits', 'Activity report'],
    cta: 'Get Started',
  },
  {
    name: 'Family',
    price: '$9.99',
    period: 'mo',
    features: ['5 devices', 'All Basic features', 'Geofencing', 'Call & SMS monitor'],
    cta: 'Choose Family',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$14.99',
    period: 'mo',
    features: ['10 devices', 'Priority support', 'Advanced insights', 'Unlimited history'],
    cta: 'Go Pro',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free, upgrade anytime. 30-day money-back guarantee.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border ${plan.popular ? 'border-emerald-500' : 'border-gray-200'} bg-white p-8 shadow-sm`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-600"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.12-.972l-3.236 3.73-1.604-1.603a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.095-.027l3.675-4.438Z" clipRule="evenodd" /></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#checkout" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium text-sm ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-900 text-white hover:bg-black'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;