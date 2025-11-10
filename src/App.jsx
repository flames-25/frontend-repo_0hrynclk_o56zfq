import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQs />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Download & Install',
      desc: 'Download Watcher from Google Play Store on both parent and child devices.',
      icon: '⬇️',
    },
    {
      title: 'Sign Up & Configure',
      desc: 'Create your account and set up preferences. Configure monitoring features based on your needs.',
      icon: '👤',
    },
    {
      title: 'Connect & Monitor',
      desc: 'Pair devices using the unique binding code. Start monitoring remotely from anywhere.',
      icon: '🔗',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">Get Started in 3 Simple Steps</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-lg shadow-black/30">
              <div className="mx-auto mb-4 grid place-items-center h-12 w-12 rounded-xl bg-zinc-900 border border-white/10 text-cyan-400 text-xl">{s.icon}</div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="download" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to Take Control?</h2>
        <p className="mt-3 text-zinc-300">Join thousands of users who trust Watcher for remote monitoring</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 text-black font-semibold px-6 py-3 shadow-cyan-500/30 shadow hover:shadow-cyan-500/50 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor"><path d="M325.3 234.3L161 120.7c-5.3-3.7-12.5-.1-12.5 6.5v257.6c0 6.6 7.2 10.2 12.5 6.5l164.3-113.6c4.6-3.2 4.6-9.9 0-13.4z"/></svg>
            Download Now on Google Play
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white hover:bg-white/10 transition"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
