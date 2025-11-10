import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-70 pointer-events-none" />
        <div className="w-full h-[70vh] md:h-[80vh]">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="min-h-[70vh] md:min-h-[80vh] grid place-items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Empowering Remote Monitoring and Control
            </h1>
            <p className="mt-5 text-zinc-300 md:text-lg">
              Take control of your devices effortlessly. Monitor remotely from anywhere in the world with Watcher's powerful suite of features.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 text-black font-semibold px-6 py-3 shadow-cyan-500/30 shadow hover:shadow-cyan-500/50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor"><path d="M325.3 234.3L161 120.7c-5.3-3.7-12.5-.1-12.5 6.5v257.6c0 6.6 7.2 10.2 12.5 6.5l164.3-113.6c4.6-3.2 4.6-9.9 0-13.4z"/></svg>
                Download on Google Play
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white hover:bg-white/10 transition"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur">4.8★ Rating on Play Store</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur">10,000+ Downloads</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur">Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
