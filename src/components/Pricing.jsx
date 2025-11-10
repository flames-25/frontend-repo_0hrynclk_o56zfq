export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Choose Your Plan</h2>
          <p className="mt-3 text-zinc-300">Start free, upgrade anytime</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="text-sm text-zinc-300">Monthly</span>
          <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-white/10 backdrop-blur border border-white/10">
            <span className="h-6 w-6 translate-x-1 rounded-full bg-cyan-500 transition" />
          </button>
          <span className="text-sm text-zinc-300">Yearly <span className="text-cyan-400">(save 20%)</span></span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Plan
            title="Free"
            price="$0"
            period="/month"
            features={[
              'Basic location tracking',
              'Limited camera access (5 min/day)',
              'Photo gallery view',
              'Single device',
            ]}
            cta="Get Started Free"
          />

          <Plan
            title="Premium"
            price="$9.99"
            period="/month"
            popular
            features={[
              'Unlimited all features',
              'Live screen sharing',
              'Call recording',
              'Geofencing & alerts',
              'Up to 5 devices',
              'Priority support',
            ]}
            cta="Start Free Trial"
          />

          <Plan
            title="Family"
            price="$19.99"
            period="/month"
            features={[
              'Everything in Premium',
              'Up to 10 devices',
              'Family dashboard',
              'Advanced analytics',
              'Multi-user management',
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
}

function Plan({ title, price, period, features, popular = false, cta }) {
  return (
    <div className={`relative rounded-2xl border ${popular ? 'border-cyan-400/40' : 'border-white/10'} bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-black/30`}> 
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-cyan-500 text-black font-medium shadow-cyan-500/30 shadow">Most Popular</span>
      )}
      <div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-semibold text-white">{price}</span>
          <span className="text-zinc-400 mb-1">{period}</span>
        </div>
        <ul className="mt-6 space-y-2">
          {features.map((f) => (
            <li key={f} className="text-sm text-zinc-300 flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {f}
            </li>
          ))}
        </ul>
        <a href="#download" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium transition ${popular ? 'bg-cyan-500 text-black shadow-cyan-500/30 shadow hover:shadow-cyan-500/50' : 'border border-white/15 text-white hover:bg-white/10'}`}>
          {cta}
        </a>
      </div>
    </div>
  );
}
