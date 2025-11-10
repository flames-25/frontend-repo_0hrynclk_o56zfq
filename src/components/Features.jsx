import React from 'react';

const features = [
  {
    title: 'Real-time Location',
    desc: 'Track device location and set safe zones with instant alerts.',
  },
  {
    title: 'App & Screen Time Limits',
    desc: 'Set daily limits and schedules to build healthy digital habits.',
  },
  {
    title: 'Web Filtering',
    desc: 'Block harmful websites and categories with one click.',
  },
  {
    title: 'Call & SMS Monitoring',
    desc: 'See call logs and messages to keep communication safe.',
  },
  {
    title: 'Geofencing',
    desc: 'Get notified when devices enter or leave designated areas.',
  },
  {
    title: 'Activity Reports',
    desc: 'Weekly insights on usage, top apps, and browsing trends.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Powerful features for modern families</h2>
          <p className="mt-3 text-gray-600">Everything you need to guide safe and balanced device use.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;