import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0B0F19] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6b2HzlI1bq5l8k5A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">New • Real-time insights</span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Parental control that keeps your family connected and safe
            </h1>
            <p className="mt-4 max-w-xl text-balance text-gray-300">
              Watcher helps you guide healthy device habits with location tracking, app management, and instant alerts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
              >
                Get Started Free
              </a>
              <a href="#how" className="px-5 py-3 text-sm font-semibold text-white/80 hover:text-white">See how it works</a>
            </div>
            <p className="mt-6 text-xs text-white/60">Available on Android, iOS, Windows, and macOS</p>
          </div>
          <div className="pointer-events-none hidden aspect-[4/3] w-full rounded-xl bg-white/5 ring-1 ring-white/10 md:block" aria-hidden="true" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F19]/40 to-[#0B0F19]" />
    </section>
  );
};

export default Hero;
