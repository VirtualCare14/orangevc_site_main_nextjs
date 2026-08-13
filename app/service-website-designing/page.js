import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Website Designing | Orange Virtual Global Solutions',
  description: 'Custom, conversion-led website designing, brand systems, UI/UX architecture, and modern web applications engineered for global mid-size businesses by Orange Virtual Global Solutions.',
};

export default function WebsiteDesigningPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 01</span>
              <h1>Website Designing</h1>
              <p className="lead">We engineer custom, high-converting websites and modern UI/UX architectures built to position mid-size companies as industry leaders in global markets.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book a Design Discovery Call</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>3.4x</strong>
                  <span>Avg Lead Conversion Lift</span>
                </div>
                <div className="service-stat-item">
                  <strong>100%</strong>
                  <span>Responsive &amp; Mobile-First</span>
                </div>
                <div className="service-stat-item">
                  <strong>&lt;1.2s</strong>
                  <span>Ultra Fast Page Speed</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/webdesign.png"
                alt="Website Designing Showcase"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============== CORE CAPABILITIES ============== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Capabilities</span>
            <h2>Designed for performance, scale &amp; brand authority.</h2>
            <p className="lead-sm">Our design team combines conversion science, modern typography, glassmorphism aesthetics, and fast code to build web assets that close buyers.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">🎨</span>
              <h3>Bespoke UI/UX Architecture</h3>
              <p>User-centered interface designs crafted around buyer journeys, eliminating friction and maximizing engagement at every scroll.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">⚡</span>
              <h3>High-Velocity Frontend Code</h3>
              <p>Clean HTML5, JavaScript, and CSS engineered for sub-second load times, flawless responsiveness, and SEO dominance.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📱</span>
              <h3>Mobile-First Optimization</h3>
              <p>Every layout is optimized for smartphones and tablets, ensuring a seamless luxury experience for decision-makers on the go.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔍</span>
              <h3>Search Engine Architecture</h3>
              <p>Built-in technical SEO, structured schema markup, fast core web vitals, and clean code that search engines prioritize.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">💼</span>
              <h3>Corporate &amp; Enterprise Sites</h3>
              <p>Comprehensive corporate web platforms that feature multi-page architectures, case study showcases, and lead funnels.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📊</span>
              <h3>Analytics &amp; Conversion Tracking</h3>
              <p>Full setup of Google Analytics 4, heatmaps, and event tracking to give you transparent data on visitor interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we bring your website to life.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>Discovery &amp; Strategy</h4>
              <p>We audit your brand, analyze competitors, and map out buyer personas to construct your sitemap.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Wireframing &amp; UX</h4>
              <p>Low-fidelity and high-fidelity wireframes that layout content hierarchy and user pathways before coding.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>Visual Design &amp; Code</h4>
              <p>Applying modern design systems, micro-animations, custom graphics, and responsive frontend development.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Launch &amp; Optimization</h4>
              <p>Rigorous QA testing across browsers and devices, domain setup, SSL security, and post-launch tuning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
