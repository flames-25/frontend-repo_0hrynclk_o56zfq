import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">Airdroid Guard</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition">
              Sign in
            </button>
            <button className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-medium transition">
              Get Started
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
