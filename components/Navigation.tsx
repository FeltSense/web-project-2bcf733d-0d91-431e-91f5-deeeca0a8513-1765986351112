'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-[#0f1419] via-[#1a2332] to-[#0f1419]/95 backdrop-blur-md border-b border-[#00d9ff]/10 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-[#00d9ff] to-[#0099cc] rounded-lg flex items-center justify-center shadow-lg shadow-[#00d9ff]/20 group-hover:shadow-[#00d9ff]/40 transition-all duration-300">
            <svg className="w-6 h-6 text-[#0f1419]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#00d9ff] via-white to-[#f4a460] bg-clip-text text-transparent hidden sm:inline">TechVerse</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-[#e8eef7] font-medium hover:text-[#00d9ff] transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#f4a460] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
        </Link>

        <div className="relative group px-4 py-2">
          <button className="text-[#e8eef7] font-medium hover:text-[#00d9ff] transition-colors duration-200 flex items-center gap-2">
            Solutions
            <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
          <div className="absolute left-0 mt-0 w-48 bg-[#1a2332] border border-[#00d9ff]/20 rounded-xl shadow-2xl shadow-[#00d9ff]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
            <a href="#" className="block px-4 py-3 text-[#e8eef7] hover:bg-[#2d3e52] hover:text-[#00d9ff] transition-colors rounded-lg mx-2 text-sm">Enterprise Solutions</a>
            <a href="#" className="block px-4 py-3 text-[#e8eef7] hover:bg-[#2d3e52] hover:text-[#00d9ff] transition-colors rounded-lg mx-2 text-sm">Startup Programs</a>
            <a href="#" className="block px-4 py-3 text-[#e8eef7] hover:bg-[#2d3e52] hover:text-[#00d9ff] transition-colors rounded-lg mx-2 text-sm">AI Integration</a>
            <a href="#" className="block px-4 py-3 text-[#e8eef7] hover:bg-[#2d3e52] hover:text-[#00d9ff] transition-colors rounded-lg mx-2 text-sm mb-2">Consulting</a>
          </div>
        </div>

        <Link href="/" className="px-4 py-2 text-[#e8eef7] font-medium hover:text-[#00d9ff] transition-colors duration-200 relative group">
          Resources
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#f4a460] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
        </Link>

        <Link href="/" className="px-4 py-2 text-[#e8eef7] font-medium hover:text-[#00d9ff] transition-colors duration-200 relative group">
          Pricing
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#f4a460] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
        </Link>

        <Link href="/" className="px-4 py-2 text-[#e8eef7] font-medium hover:text-[#00d9ff] transition-colors duration-200 relative group">
          About
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#f4a460] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-5 py-2.5 text-[#00d9ff] font-semibold border border-[#00d9ff]/50 rounded-lg hover:bg-[#00d9ff]/10 hover:border-[#00d9ff] transition-all duration-300">
          Sign In
        </button>
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#00d9ff] to-[#0099cc] text-[#0f1419] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/40 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-[#2d3e52] transition-colors">
        <svg className="w-6 h-6 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  {/* Subtle bottom glow */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d9ff]/20 to-transparent"/>
</nav>
  );
}