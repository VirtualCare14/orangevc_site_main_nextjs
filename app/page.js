import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroCardsShowcase from '@/components/HeroCardsShowcase';
import TrustStrip from '@/components/TrustStrip';
import ContactSection from '@/components/ContactSection';
import EnterpriseCarousel from '@/components/EnterpriseCarousel';
import ServicesMobileShowcase from '@/components/ServicesMobileShowcase';

export const metadata = {
  title: 'Orange Virtual Global Solutions | Enterprise Technology, AI & BPO Partner',
  description: 'Accelerate digital transformation with Orange Virtual Global Solutions — bespoke software engineering, autonomous AI agent deployments, cloud infrastructure, and 24/7 customer service BPO.',
};

export default function HomePage() {
  return (
    <>
      {/* ============== HERO SECTION (CINEMATIC VIDEO BACKGROUND) ============== */}
      <section className="hero">
        {/* Background HTML5 Video with Overlay & Glow */}
        <HeroVideoBackground />

        <div className="container hero-container-content">
          <div className="hero-grid">
            {/* Left Hero Column */}
            <div className="hero-copy">
              <h1>
                Empowering Enterprises with <span className="brand-orange">AI, Software &amp; Cloud.</span>
              </h1>
              <p className="lead">
                Orange Virtual Global Solutions bridges business vision and technical execution. We engineer bespoke web &amp; mobile platforms, deploy autonomous AI agents, optimize cloud infrastructure, and operate 24/7 global BPO teams.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary shadow-lg hover:shadow-orange-500/30">
                  Book Free Consultation &rarr;
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  Explore Solutions &rarr;
                </Link>
              </div>

              {/* Enterprise Trust Badges (Hidden on mobile view) */}
              <div className="hidden md:flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2BB673] animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700 font-sans">99.9% Infrastructure Uptime SLA</span>
                </div>
                <div className="text-slate-400">•</div>
                <span className="text-xs font-semibold text-slate-700 font-sans">ISO 20000-1 Certified</span>
                <div className="text-slate-400">•</div>
                <span className="text-xs font-semibold text-slate-700 font-sans">CMMI Level 3 Enterprise</span>
              </div>
            </div>

            {/* Right Hero Showcase: Core Services */}
            <div>
              {/* Interactive Service Cards Showcase */}
              <HeroCardsShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST & CREDIBILITY STRIP ============== */}
      <TrustStrip />

      {/* ============== WHO WE ARE SECTION ============== */}
      <section id="about" className="section who-we-are-section relative overflow-hidden py-16 md:py-24 border-y border-[#FFE2D1]/60">
        
        {/* Background Ambient Orange Wave Patterns (Matches Image 1) */}
        <div className="who-we-are-bg-waves pointer-events-none aria-hidden">
          <svg className="wave-svg wave-top-left" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 50C100 80 200 -20 400 60C600 140 500 300 700 250" stroke="url(#orange-grad-1)" strokeWidth="1.5" strokeOpacity="0.35" />
            <path d="M-120 90C80 120 180 20 380 100C580 180 480 340 680 290" stroke="url(#orange-grad-1)" strokeWidth="1.2" strokeOpacity="0.25" />
            <path d="M-140 130C60 160 160 60 360 140C560 220 460 380 660 330" stroke="url(#orange-grad-1)" strokeWidth="1" strokeOpacity="0.18" />
            <defs>
              <linearGradient id="orange-grad-1" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF6A00" stopOpacity="0.8" />
                <stop offset="1" stopColor="#FF9E59" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          <svg className="wave-svg wave-bottom-right" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 250C200 200 100 40 300 120C500 200 400 320 600 290" stroke="url(#orange-grad-2)" strokeWidth="1.5" strokeOpacity="0.35" />
            <path d="M20 290C220 240 120 80 320 160C520 240 420 360 620 330" stroke="url(#orange-grad-2)" strokeWidth="1.2" strokeOpacity="0.25" />
            <defs>
              <linearGradient id="orange-grad-2" x1="0" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF6A00" stopOpacity="0.8" />
                <stop offset="1" stopColor="#FFB37C" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10 px-4 md:px-8">
          
          {/* Section Header (Exact match to Image 1) */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <span className="eyebrow-pill-orange">
              WHO WE ARE
            </span>
            <h2 className="who-we-are-heading-exact">
              A single trusted platform for technology,<br className="hidden md:block" /> AI &amp; business process excellence.
            </h2>

          </div>

          {/* Automatic Enterprise Carousel (Left Copy + Right Browser Mockup) */}
          <EnterpriseCarousel />

        </div>
      </section>

      {/* ============== OUR SERVICES (LAPTOP SHOWCASE CAROUSEL) ============== */}
      <ServicesMobileShowcase />

      {/* ============== ENGAGEMENT MODELS ============== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Flexible Pricing</span>
            <h2>Engagement models designed for mid-market agility.</h2>
          </div>
          <div className="model-grid">
            <article className="model-card">
              <div className="card-img-wrapper">
                <Image src="/images/project-sprints.png" alt="Project-Based Model" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Fixed Scope</span>
              </div>
              <span className="model-tag">Fixed Scope</span>
              <h3>Project-Based Sprints</h3>
              <p>Defined scope, fixed commercial terms, and milestone-driven delivery. Ideal for new products, MVPs, or web rebuilds.</p>
              <ul>
                <li>Discovery &amp; architecture blueprint in week 1</li>
                <li>SLA-linked sprint deliverables</li>
                <li>IP code handover &amp; enablement included</li>
              </ul>
            </article>
            <article className="model-card model-featured">
              <div className="card-img-wrapper">
                <Image src="/images/dedicated-pod.png" alt="Dedicated Pod Model" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Most Flexible</span>
              </div>
              <span className="model-tag model-tag-orange">Most Flexible</span>
              <h3>Dedicated Engineering Pod</h3>
              <p>A cross-functional pod &mdash; software architects, AI specialists, UI/UX designers, and QA engineers dedicated to your roadmap.</p>
              <ul>
                <li>Monthly rolling commercial structure</li>
                <li>Direct Slack, Jira &amp; bi-weekly demos</li>
                <li>Scale pod capacity up or down in 2 weeks</li>
              </ul>
            </article>
            <article className="model-card">
              <div className="card-img-wrapper">
                <Image src="/images/managed-kpi.png" alt="Managed Service Model" fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Outcome-Owned</span>
              </div>
              <span className="model-tag">Outcome-Owned</span>
              <h3>Managed Service KPI</h3>
              <p>We own business KPIs &mdash; collections, support CSAT, qualified lead rate, and system uptime &mdash; with full reporting.</p>
              <ul>
                <li>Commercials tied to performance SLAs</li>
                <li>Real-time reporting dashboards</li>
                <li>Continuous optimization &amp; monitoring</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============== WHY OVC ============== */}
      <section className="section section-soft">
        <div className="container why-grid">
          <div>
            <span className="eyebrow eyebrow-orange">Why Orange Virtual Global Solutions</span>
            <h2>Built for global enterprise standards.</h2>
            <p className="lead-sm">You get a dedicated Account Lead and senior engineering pod that operates like your internal function &mdash; at a cost structure aligned with your growth.</p>
            
            {/* Animated Enterprise GIF Showcase */}
            <div className="mt-6 relative rounded-2xl overflow-hidden shadow-xl border border-orange-200/80 bg-white group">
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJyZndpbm84NjhpeHVxZmpuYTlkMm0wZWc0amxidHF4YzkzZW5saSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhEj6RU5n4cc6Ag/giphy.gif"
                alt="Orange Virtual Global Solutions Enterprise Execution"
                className="w-full h-auto object-cover max-h-[300px] rounded-2xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="why-list">
            <div className="why-item">
              <span className="why-ico">👥</span>
              <div>
                <h3>Named Account Leadership</h3>
                <p>Every engagement is directed by a senior Account Executive. Clear communication, no ticket queues, no faceless handoffs.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-ico">🌍</span>
              <div>
                <h3>Global Time-Zone Coverage</h3>
                <p>We serve enterprises across North America, Europe, and Asia-Pacific with follow-the-sun teams operating 24/7/365.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-ico">🔒</span>
              <div>
                <h3>Security &amp; Data Discipline</h3>
                <p>Strict NDAs, ISO 20000-1 service management, role-based access control (RBAC), and enterprise data confidentiality.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-ico">🎯</span>
              <div>
                <h3>Outcome-Driven Delivery</h3>
                <p>We measure success by your business metrics &mdash; conversion velocity, collections DSO, CSAT lift, and uptime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== LET'S TALK / CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
