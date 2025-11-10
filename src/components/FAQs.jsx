import React, { useState } from 'react';

const items = [
  {
    q: 'Is Watcher legal and safe to use?',
    a: 'Yes. Watcher is designed for parental guidance and device management with consent. Data is encrypted and handled securely.',
  },
  {
    q: 'Which devices are supported?',
    a: 'Watcher works on Android, iOS, Windows, and macOS. Some features may vary by platform.',
  },
  {
    q: 'Can I set different rules for each child?',
    a: 'Absolutely. Create profiles with personalized schedules, filters, and location zones per device.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Try all core features free. If you are not satisfied, we offer a 30-day money-back guarantee on paid plans.',
  },
];

const FAQs = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-xl">
          {items.map((item, idx) => (
            <div key={item.q}>
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                <span className="ml-6 text-gray-500">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-gray-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;