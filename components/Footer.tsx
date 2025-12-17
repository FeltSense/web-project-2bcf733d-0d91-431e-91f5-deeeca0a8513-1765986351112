'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-white text-xl font-bold">Tech Business</h3>
          <p className="text-gray-400 text-sm mt-2">Empowering businesses with innovative technology solutions.</p>
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Facebook">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Twitter">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.836.775 5 5 0 002.189-2.75c-.946.56-1.995.957-3.12 1.174a5 5 0 00-8.5 4.555A14.938 14.938 0 011.671 3.149a5 5 0 001.55 6.684 5 5 0 01-2.265-.567c-.003.019-.003.038-.003.057a5 5 0 004.017 4.904 5 5 0 01-2.25.085 5.007 5.007 0 004.67 3.478 10.006 10.006 0 01-6.177 2.132c-.39 0-.779-.023-1.17-.067a14.01 14.01 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Instagram">
            <svg fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.658 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.512zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.97-1.704 1.197 0 1.911.75 1.935 1.704 0 .946-.738 1.704-1.99 1.704zm1.946 11.597H3.391V9.809h3.892v10.643zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Services Links */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
        <nav className="space-y-2 flex flex-col">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cloud Solutions</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Data Analytics</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">AI Integration</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cybersecurity</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Digital Transformation</a>
        </nav>
      </div>

      {/* Company Links */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
        <nav className="space-y-2 flex flex-col">
          <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
        </nav>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-6">Get in Touch</h4>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <a href="mailto:hello@techbusiness.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">hello@techbusiness.com</a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">+1 (234) 567-890</a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Address</p>
            <p className="text-gray-300 text-sm">123 Tech Street, Silicon Valley, CA 94025</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-12 pt-8">
      {/* Copyright & Legal Links */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <p className="text-gray-400 text-sm">© 2025 Tech Business. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}