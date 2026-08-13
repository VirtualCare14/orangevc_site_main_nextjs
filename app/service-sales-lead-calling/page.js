import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Sales & Lead Support Calling Operations | Orange Virtual Global Solutions',
  description: 'Accelerate your sales pipeline with dedicated outbound SDRs, inbound lead qualification specialists, and CRM-synced calling teams.',
};

export default function SalesLeadCallingPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 04</span>
              <h1>Sales &amp; Lead Support Calling Operations</h1>
              <p className="lead">Accelerate your sales pipeline with dedicated outbound SDRs, inbound lead qualification specialists, and CRM-synced calling teams that convert prospects into booked meetings.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book a Calling Operations Consultation</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>&lt;5 Min</strong>
                  <span>Lead Response Time</span>
                </div>
                <div className="service-stat-item">
                  <strong>40%</strong>
                  <span>Higher Pipeline Velocity</span>
                </div>
                <div className="service-stat-item">
                  <strong>100%</strong>
                  <span>Call Recording &amp; QA</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/sales-hero.png"
                alt="Sales Calling Operations"
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
            <h2>High-performing sales teams built for your pipeline.</h2>
            <p className="lead-sm">Our trained sales specialists act as a seamless extension of your internal sales team, operating under your brand guidelines and pitch scripts.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">📞</span>
              <h3>Outbound Lead Qualification (SDR)</h3>
              <p>Proactive outbound calling squads that prospect, qualify leads, and schedule demo calls for your Account Executives.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">⚡</span>
              <h3>Speed-to-Lead Inbound Response</h3>
              <p>Instant phone follow-ups within minutes of a lead filling out an ad or website form, dramatically raising conversion rates.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔄</span>
              <h3>CRM Sync &amp; Pipeline Hygiene</h3>
              <p>Every call disposition, notes, recordings, and lead status update logged directly into Salesforce, Sales CRM, or HubSpot in real time.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">💬</span>
              <h3>WhatsApp + Call Omnichannel Follow-up</h3>
              <p>Combining voice calling with structured WhatsApp templates and SMS nudges to maximize response rates.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🎯</span>
              <h3>Re-engagement &amp; Win-Back Campaigns</h3>
              <p>Targeted calling sequences to reactivate dormant leads, past quotes, and unclosed pipeline opportunities.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📊</span>
              <h3>Speech Analytics &amp; QA Coaching</h3>
              <p>Rigorous daily QA monitoring, objection handling coaching, and sentiment analytics to maintain top-tier conversion quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we deploy your sales calling team.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>Script &amp; ICP Alignment</h4>
              <p>We study your Ideal Customer Profile (ICP), value proposition, call scripts, and objection handling playbooks.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Team Training &amp; Trial</h4>
              <p>Dedicated SDR reps undergo intensive training and mock calling sessions before going live on your campaign.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>Live Campaign Launch</h4>
              <p>Ramping up call volumes, real-time CRM updates, instant lead routing, and daily performance tracking.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Scale &amp; Optimization</h4>
              <p>Weekly pitch optimization, conversion analytics review, and scaling seat counts as revenue grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
