import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'SEO & Performance Digital Marketing | Orange Virtual Global Solutions',
  description: 'Capture high-intent search buyers and compound organic traffic. We engineer search-first content, technical SEO audits, and performance ad funnels.',
};

export default function SEODigitalMarketingPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 07</span>
              <h1>SEO &amp; Performance Digital Marketing</h1>
              <p className="lead">Capture high-intent search buyers and compound organic traffic. We engineer search-first content, technical SEO audits, and performance ad funnels that drive qualified B2B pipeline.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book an SEO Audit &amp; Strategy Call</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>280%</strong>
                  <span>Avg Organic Traffic Growth</span>
                </div>
                <div className="service-stat-item">
                  <strong>#1 Page</strong>
                  <span>Keyword Ranking Focus</span>
                </div>
                <div className="service-stat-item">
                  <strong>4.8x</strong>
                  <span>Ad Spend Return (ROAS)</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/seo-hero.png"
                alt="SEO &amp; Digital Marketing Showcase"
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
            <h2>Data-driven digital marketing engineered for growth.</h2>
            <p className="lead-sm">We combine technical search architecture, high-converting copy, and multi-channel paid ads to generate predictable revenue pipeline.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">🚀</span>
              <h3>Technical &amp; On-Page SEO</h3>
              <p>Comprehensive website audits, site speed optimization, schema markup, crawlability fixes, and internal linking architecture.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">✍️</span>
              <h3>Search-First Content Marketing</h3>
              <p>High-authority blog articles, landing pages, and industry whitepapers engineered to rank top for commercial buyer keywords.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🎯</span>
              <h3>Performance PPC &amp; Google Ads</h3>
              <p>Precision search and display ad campaigns on Google Ads and Bing optimized for high-intent keywords and maximum ROAS.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📱</span>
              <h3>Social Media &amp; LinkedIn Ads</h3>
              <p>Targeted B2B campaigns across LinkedIn, Meta, and X reaching key decision-makers with personalized messaging.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔗</span>
              <h3>Authority Backlink Building</h3>
              <p>White-hat outreach campaigns securing high-DR editorial backlinks and media features to boost domain rating.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📈</span>
              <h3>Conversion Rate Optimization (CRO)</h3>
              <p>A/B testing landing page headlines, CTA placement, lead capture forms, and user flow to convert visitors into qualified leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we scale your organic &amp; paid traffic.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>SEO &amp; Keyword Audit</h4>
              <p>In-depth technical audit, competitor keyword gap analysis, and high-intent commercial keyword mapping.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Technical Fixes &amp; Content</h4>
              <p>Executing technical website fixes, site speed optimization, and publishing search-first content pillars.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>Paid Ads Launch</h4>
              <p>Deploying high-converting ad copy, landing pages, retargeting pixels, and tracking conversion funnels.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Measure &amp; Compound</h4>
              <p>Weekly rank tracking, GA4 revenue attribution, ad spend optimization, and compounding monthly traffic growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
