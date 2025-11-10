import React from 'react';
import { ShieldCheck, MapPin, BellRing, Activity } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'App & screen time limits',
    desc: 'Set healthy rules and instantly block apps that distract during study or sleep.'
  },
  {
    icon: MapPin,
    title: 'Real-time location',
    desc: 'See where devices are right now and receive arrival/leave alerts for places you care about.'
  },
  {
    icon: BellRing,
    title: 'Instant alerts',
    desc: 'Get notified for risky keywords, new app installs, low battery, and more.'
  },
  {
    icon: Activity,
    title: 'Usage insights',
    desc: 'Understand patterns with daily/weekly reports and actionable suggestions.'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Everything you need to guide healthy device habits</h2>
          <p className="mt-3 text-gray-600">Powerful parental controls packed into a simple, friendly app.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
