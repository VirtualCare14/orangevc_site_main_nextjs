"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="container">
        <div className="glass-nav-container">
          <Link href="/" className="logo" aria-label="Orange Virtual Connect Home" onClick={closeNav}>
            <Image
              src="/images/ovc-logo-transparent.png"
              alt="Orange Virtual Connect Logo"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-text">
              <strong>Orange</strong>
              <span>VC</span>
            </span>
          </Link>

          <button
            className={`nav-toggle ${navOpen ? 'open' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span /><span /><span />
          </button>

          <nav className={`site-nav ${navOpen ? 'open' : ''}`} id="siteNav">
            <ul>
              <li>
                <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeNav}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className={pathname === '/products' ? 'active' : ''} onClick={closeNav}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className={pathname === '/industries' ? 'active' : ''} onClick={closeNav}>
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className={pathname === '/blog' ? 'active' : ''} onClick={closeNav}>
                  Blogs &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeNav}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-3 md:mt-0 md:ml-3 w-full md:w-auto">
              <Link href="/contact" onClick={closeNav} className="btn btn-primary btn-sm glass-cta-btn w-full md:w-auto justify-center">
                Schedule Demo
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
