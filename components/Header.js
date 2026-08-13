"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 15;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/blog', label: 'Blogs & Case Studies' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none transition-all duration-300 font-['Inter',sans-serif]">
      <div className="w-[calc(100%-32px)] md:w-[calc(100%-60px)] max-w-[1320px] mx-auto pointer-events-auto relative">
        <div
          className={`flex items-center justify-between h-[64px] md:h-[68px] px-5 md:px-8 rounded-full border ring-1 ring-white/30 transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-3xl border-white/70 shadow-[0_12px_40px_rgba(20,30,50,0.12)]'
              : 'bg-white/70 backdrop-blur-2xl border-white/60 shadow-[0_8px_32px_rgba(20,30,50,0.08)]'
          }`}
        >
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Orange Virtual Global Solutions Home"
            onClick={closeNav}
          >
            <Image
              src="/images/ovc-logo-transparent.png"
              alt="Orange Virtual Global Solutions Logo"
              width={36}
              height={36}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-semibold text-lg tracking-tight text-slate-900">
              <strong className="font-semibold text-slate-900">Orange</strong>
              <span className="font-semibold text-[#FF6B2C]">VC</span>
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[14px] font-medium transition-all duration-300 ease-out hover:-translate-y-[1px] ${
                    isActive
                      ? 'text-[#FF6B2C] bg-orange-500/10 font-semibold shadow-xs'
                      : 'text-slate-800/90 hover:text-[#FF6B2C] hover:bg-orange-500/10'
                  }`}
                  onClick={closeNav}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger Button */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              onClick={closeNav}
              className="hidden sm:inline-flex items-center justify-center h-[44px] px-6 rounded-full text-[14px] font-semibold text-white bg-[#FF6B2C] shadow-[0_6px_20px_rgba(255,107,44,0.25)] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-[#E85A1C] hover:shadow-[0_8px_25px_rgba(255,107,44,0.35)] active:translate-y-0"
            >
              Schedule Demo
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden p-2 rounded-full text-slate-800 bg-white/50 backdrop-blur-md border border-white/60 hover:bg-white/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {navOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-3 p-5 rounded-3xl bg-white/90 backdrop-blur-3xl border border-white/60 shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-[15px] font-medium transition-all ${
                    isActive
                      ? 'bg-[#FF6B2C] text-white font-semibold'
                      : 'text-slate-800 hover:bg-orange-500/10 hover:text-[#FF6B2C]'
                  }`}
                  onClick={closeNav}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeNav}
              className="w-full text-center mt-2 h-[46px] inline-flex items-center justify-center rounded-full text-[15px] font-semibold text-white bg-[#FF6B2C] shadow-md shadow-orange-500/30 hover:bg-[#E85A1C] transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
