import React from 'react';
import { Shield, Menu } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6 text-amber-400" aria-hidden="true" />
          <span className="text-base">Watcher</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:text-white">Log in</a>
          <a
            href="#get-started"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Get Started
          </a>
        </div>

        <button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
