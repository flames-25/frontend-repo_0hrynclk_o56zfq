import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between p-3 sm:p-4">
            <a href="#" className="text-xl font-semibold tracking-tight text-white">
              <span className="text-white">Watcher</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-200 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-medium shadow-cyan-500/30 shadow hover:shadow-cyan-500/50 transition"
              >
                Download Now
              </a>
            </nav>

            <button
              aria-label="Toggle Menu"
              className="md:hidden text-white"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-2 text-zinc-200 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#download"
                  className="mt-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-medium text-center"
                  onClick={() => setOpen(false)}
                >
                  Download Now
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
