import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full bg-[#0A0B0F] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/40 via-[#0A0B0F]/40 to-[#0A0B0F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Parental control that just works.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Keep your family safe online with real-time alerts, app blocking, and location tracking — all in one modern dashboard.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-medium transition"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
