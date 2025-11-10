import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0A0B0F] text-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/20 via-transparent to-[#0A0B0F]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(255,186,8,0.25),rgba(255,255,255,0)_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30">
              New • Real-time insights
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Keep your family connected and safe on every device
            </h1>
            <p className="mt-4 max-w-xl text-balance text-white/80">
              Guide healthy habits with app management, smart schedules, location alerts, and privacy-friendly monitoring.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#0A0B0F]"
              >
                Get Started Free
              </a>
              <a
                href="#how"
                className="rounded-md px-5 py-3 text-sm font-semibold text-white/80 hover:text-white"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-xs text-white/60">Available on Android, iOS, Windows, and macOS</p>
          </div>
          <div className="pointer-events-none hidden aspect-[4/3] w-full rounded-xl bg-white/5 ring-1 ring-white/10 md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
