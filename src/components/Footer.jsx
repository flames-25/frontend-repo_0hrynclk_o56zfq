import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#download" className="hover:text-white">Download</a></li>
              <li><a href="#updates" className="hover:text-white">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faqs" className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#docs" className="hover:text-white">Documentation</a></li>
              <li><a href="#status" className="hover:text-white">System Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#cookie" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#aup" className="hover:text-white">Acceptable Use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#press" className="hover:text-white">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-sm">© 2025 Watcher by One89. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
