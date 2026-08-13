"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="flex items-end gap-4 flex-wrap">
            <Link href="/" className="logo logo-footer m-0">
              <Image
                src="/images/ovc-logo-transparent.png"
                alt="Orange Virtual Connect Logo"
                width={36}
                height={36}
                style={{ objectFit: 'contain' }}
              />
              <span className="logo-text">
                <strong>Orange</strong>
                <span>VC</span>
              </span>
            </Link>

            {/* Frameless mascot images inline in row aligned to bottom baseline */}
            <div className="flex items-end -space-x-3 shrink-0 filter drop-shadow-[0_2px_12px_rgba(255,106,0,0.35)]">
              <div className="relative w-16 h-24">
                <Image
                  src="/images/mascot-1.png"
                  alt="Orange VC Mascot 1"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
                  priority
                />
              </div>
              <div className="relative w-20 h-24">
                <Image
                  src="/images/mascot-2.png"
                  alt="Orange VC Mascot 2"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom left' }}
                  priority
                />
              </div>
            </div>
          </div>

          <span className="footer-legal-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginTop: '10px' }}>
            Orange Virtual Connect Private Limited
          </span>
          <div className="footer-offices-block" style={{ marginTop: '10px', fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.5 }}>
            <p style={{ margin: '0 0 4px' }}>
              <strong style={{ color: '#CBD5E1' }}>Reg Office:</strong> 216 Pocket E 15, Sector 8 Rohini New Delhi 110085
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#CBD5E1' }}>Corp Office:</strong> 1109, SS Omnia, 11<sup>th</sup> Floor, Sec 86, Gurugram HR 122004
            </p>
          </div>
          <p style={{ marginTop: '12px', fontSize: '0.88rem', color: '#94A3B8' }}>
            Enterprise technology, AI &amp; business process execution delivered as one accountable platform for organizations worldwide.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/blog">Blogs &amp; Case Studies</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Products</h4>
          <ul>
            <li><Link href="/products#medora360">Medora360 Hospital OS</Link></li>
            <li><Link href="/products#orangepulse">OrangePulse AI Engagement</Link></li>
            <li><Link href="/products#remind365">Remind365 Collections</Link></li>
            <li><Link href="/products#sales-crm">Sales Revenue CRM</Link></li>
            <li><Link href="/products#wms">Warehouse WMS</Link></li>
            <li><Link href="/products#invoice-generator">Invoice Generator</Link></li>
          </ul>
        </div>

        <div>
          <h4>Industries</h4>
          <ul>
            <li><Link href="/industries#healthcare">Healthcare</Link></li>
            <li><Link href="/industries#manufacturing">Manufacturing</Link></li>
            <li><Link href="/industries#sme">SME Enterprises</Link></li>
            <li><Link href="/industries#msme">MSME Growth</Link></li>
            <li><Link href="/industries#technology">Technology SaaS</Link></li>
            <li><Link href="/industries#startups">High-Growth Startups</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Enterprise Reach</h4>
          <p><a href="mailto:support@orangevirtualconnect.com">support@orangevirtualconnect.com</a></p>
          <p><a href="mailto:sales@orangevirtualconnect.com">sales@orangevirtualconnect.com</a></p>
          <p><a href="tel:+919310557136">+91 93105 57136</a></p>
          <p className="text-xs text-slate-400 mt-2 font-sans">Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM IST</p>

          <div className="footer-social-root mt-4">
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <span>&copy; {currentYear} Orange Virtual Connect Private Limited. All rights reserved. ISO 20000-1 &amp; CMMI Level 3 Enterprise.</span>
          <div>
            <Link href="/contact">Privacy Policy</Link>
            <span className="mx-2">&bull;</span>
            <Link href="/contact">Terms of Service</Link>
            <span className="mx-2">&bull;</span>
            <Link href="/contact">Security &amp; Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
