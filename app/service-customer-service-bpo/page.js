import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: '24/7 Omnichannel Customer Service BPO | Orange Virtual Global Solutions',
  description: 'Deliver world-class, round-the-clock customer support across Voice, WhatsApp, Email, Live Chat, and Ticketing powered by trained agents and AI co-pilots.',
};

export default function CustomerServiceBPOPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 05</span>
              <h1>24/7 Omnichannel Customer Service BPO</h1>
              <p className="lead">Deliver world-class, round-the-clock customer support across Voice, WhatsApp, Email, Live Chat, and Ticketing &mdash; powered by trained agents and AI co-pilots.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book a BPO Solutions Call</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>98%</strong>
                  <span>First Contact Resolution</span>
                </div>
                <div className="service-stat-item">
                  <strong>24/7/365</strong>
                  <span>Global Shift Coverage</span>
                </div>
                <div className="service-stat-item">
                  <strong>+24 PT</strong>
                  <span>Average CSAT Score Lift</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/bpo-hero.png"
                alt="Customer Service BPO Showcase"
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
            <h2>Omnichannel support designed for global mid-market brands.</h2>
            <p className="lead-sm">Our BPO operations combine rigorous quality assurance with modern ticketing tools to deliver seamless customer experiences under your brand.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">🎧</span>
              <h3>24/7 Inbound Voice Support</h3>
              <p>Professional call center agents providing empathetic, script-guided voice support for inquiries, complaints, and booking management.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">💬</span>
              <h3>Live Chat &amp; WhatsApp BPO</h3>
              <p>Sub-minute response times on WhatsApp, web chat, and social media messaging channels powered by human agents and AI assistance.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">✉️</span>
              <h3>Email &amp; Helpdesk Ticketing</h3>
              <p>Comprehensive ticket lifecycle management across Zendesk, Freshdesk, and HubSpot &mdash; resolving tickets within strict SLAs.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🛠️</span>
              <h3>Level 1 &amp; Level 2 Tech Support</h3>
              <p>Tiered technical helpdesk operators trained to troubleshoot software, app glitches, hardware queries, and account issues.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📁</span>
              <h3>Back-Office &amp; Data Operations</h3>
              <p>Data entry, invoice processing, order fulfillment tracking, and catalog management executed with high accuracy.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📊</span>
              <h3>CSAT &amp; Quality Assurance Audits</h3>
              <p>Continuous call auditing, CSAT/NPS survey tracking, and weekly agent scorecard reports to guarantee service excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we set up your 24/7 BPO operations.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>SOP &amp; Knowledge Base Ingestion</h4>
              <p>We document your product workflows, escalation matrices, and brand guidelines into interactive agent playbooks.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Agent Hiring &amp; Certification</h4>
              <p>Hand-picking domain-experienced customer support agents and putting them through intensive brand certification.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>Shadowing &amp; Soft Launch</h4>
              <p>Nested shift testing alongside your team to refine ticket handling speed and response tone.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>24/7 Full Scale Operations</h4>
              <p>Full 24/7 shift coverage, real-time SLA dashboards, and weekly operational review calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
