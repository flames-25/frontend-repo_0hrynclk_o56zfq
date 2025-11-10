import { useState } from 'react';

const faqs = [
  { q: 'How do I install Watcher?', a: 'Download the app from Google Play Store on both devices. Follow the in-app setup wizard to connect them using the unique pairing code.' },
  { q: 'Is Watcher legal to use?', a: 'Yes, when used responsibly. For parental control, ensure you have legal authority. For adult monitoring, always obtain consent from the device owner.' },
  { q: 'Does Watcher work in the background?', a: 'Yes, Watcher runs discreetly in the background while consuming minimal battery and data.' },
  { q: 'How secure is my data?', a: 'All data is encrypted end-to-end using industry-standard protocols. We never share your information with third parties.' },
  { q: 'Can the monitored person detect Watcher?', a: 'The app can run in stealth mode, but we recommend transparent use, especially for parental control situations.' },
  { q: 'What happens if I lose internet connection?', a: 'Watcher stores data locally and syncs when connection is restored. Real-time features require active internet.' },
  { q: 'Can I monitor multiple devices?', a: 'Yes, Premium and Family plans support multiple devices from a single parent account.' },
  { q: 'How do I cancel my subscription?', a: 'Cancel anytime through your Google Play Store subscription settings. No questions asked.' },
  { q: 'Does Watcher work on iOS?', a: 'Currently, Watcher is available for Android devices only. iOS support is coming soon.' },
  { q: 'What customer support do you offer?', a: 'We offer email support for all users and priority support for Premium/Family plan subscribers.' },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {faqs.map((item, idx) => (
            <details key={idx} open={open === idx} onClick={() => setOpen(open === idx ? -1 : idx)} className="group">
              <summary className="list-none cursor-pointer select-none px-6 py-5 flex items-center justify-between">
                <span className="text-white font-medium">{item.q}</span>
                <span className="ml-4 h-6 w-6 grid place-items-center rounded-full border border-white/15 text-zinc-300 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-300">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
