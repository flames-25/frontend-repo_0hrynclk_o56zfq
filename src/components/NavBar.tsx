import React from 'react';
import { Shield, Menu } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <Shield className="h-6 w-6 text-emerald-600" aria-hidden="true" />
          <span className="text-base">Watcher</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Log in</a>
          <a
            href="#get-started"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Get Started
          </a>
        </div>

        <button aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
