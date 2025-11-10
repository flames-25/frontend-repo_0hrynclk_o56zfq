import React from 'react';
import { Shield, MapPin, BellRing, Activity } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'App & web filters',
    desc: 'Instantly block harmful content and set healthy time limits across devices.'
  },
  {
    icon: MapPin,
    title: 'Location tracking',
    desc: 'Real-time GPS with geofencing alerts when someone arrives or leaves a place.'
  },
  {
    icon: BellRing,
    title: 'Smart alerts',
    desc: 'Get notified for suspicious activity, new installs, and policy changes.'
  },
  {
    icon: Activity,
    title: 'Activity insights',
    desc: 'See daily summaries and trends for screen time, apps, and browsing.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0A0B0F] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for peace of mind</h2>
          <p className="mt-4 text-white/70">Everything you need to guide healthy digital habits in one place.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-amber-400/50 transition">
              <span className="inline-flex p-2 rounded-md bg-amber-500/15 text-amber-400">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
