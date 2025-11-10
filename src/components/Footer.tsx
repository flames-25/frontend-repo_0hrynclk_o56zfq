import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Watcher. All rights reserved.</p>
          <nav className="flex gap-4 text-sm text-white/80">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
