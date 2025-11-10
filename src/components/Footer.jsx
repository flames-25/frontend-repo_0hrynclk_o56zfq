import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#faqs" className="hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#guides" className="hover:text-gray-900">Guides</a></li>
              <li><a href="#support" className="hover:text-gray-900">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#security" className="hover:text-gray-900">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Watcher. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">Twitter</a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-700">YouTube</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-700">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;