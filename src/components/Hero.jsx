import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YTLZQKcwn2X11pLB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200">Parental Control & Monitoring</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Keep your family safe with Watcher</h1>
            <p className="mt-5 text-lg text-gray-600">Monitor screen time, block inappropriate content, and locate devices in real-time—all from one simple dashboard.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">Free Download</a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-800 font-medium bg-white hover:bg-gray-50">Watch Demo</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-600"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.12-.972l-3.236 3.73-1.604-1.603a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.095-.027l3.675-4.438Z" clipRule="evenodd" /></svg>
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 0 1 2-2h4.586A2 2 0 0 1 10 3.586L12.414 6A2 2 0 0 1 13 7.414V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" /></svg>
                Works on Android, iOS, Windows, Mac
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Watcher dashboard preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;