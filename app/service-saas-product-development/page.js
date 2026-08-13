import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'SaaS Product Development & Co-Building | Orange Virtual Global Solutions',
  description: 'Turn SaaS concepts into scalable cloud products. We co-build multi-tenant B2B SaaS platforms with subscription billing, analytics, and enterprise security.',
};

export default function SaaSProductDevelopmentPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 06</span>
              <h1>SaaS Product Development &amp; Co-Building</h1>
              <p className="lead">Turn SaaS concepts into scalable cloud products. We co-build multi-tenant B2B SaaS platforms with subscription billing, analytics, and enterprise security.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book a SaaS Architecture Call</Link>
                <Link href="/products" className="btn btn-ghost">Explore Our Built SaaS &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>5 In-House</strong>
                  <span>Battle-Tested SaaS Apps</span>
                </div>
                <div className="service-stat-item">
                  <strong>Multi-Tenant</strong>
                  <span>Cloud Architecture</span>
                </div>
                <div className="service-stat-item">
                  <strong>Stripe / Razorpay</strong>
                  <span>Billing Engine Ready</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/saas-engine-hero.png"
                alt="SaaS Product Development"
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
            <h2>End-to-end B2B SaaS engineering ecosystem.</h2>
            <p className="lead-sm">From initial MVP prototyping to multi-tenant microservices, we build SaaS platforms engineered for high ARR and investor readiness.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">🧩</span>
              <h3>Multi-Tenant Architecture</h3>
              <p>Isolated database schemas, tenant routing, role-based permissions, and custom sub-domains built for global SaaS deployments.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">💳</span>
              <h3>Subscription &amp; Usage Billing</h3>
              <p>Native integration of recurring billing engines (Stripe, Chargebee, Razorpay) with tier management, usage metering, and invoicing.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📊</span>
              <h3>Product Analytics &amp; Admin Dashboards</h3>
              <p>Interactive customer usage dashboards, admin portals, MRR tracking, churn analytics, and automated onboarding flows.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔐</span>
              <h3>Authentication &amp; SSO Integration</h3>
              <p>Enterprise Single Sign-On (SAML, OAuth2, Okta, Google/Microsoft SSO), multi-factor authentication (MFA), and session security.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">⚡</span>
              <h3>API Marketplace &amp; Webhooks</h3>
              <p>Exposing developer APIs, webhooks, and third-party integrations to turn your SaaS product into an extensible platform.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🚀</span>
              <h3>Rapid MVP Launch Sprints</h3>
              <p>Shipping production-ready MVPs within 8-12 weeks so you can test market demand and acquire your first 100 paying customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we co-build your SaaS product.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>Product Scope &amp; Wireframing</h4>
              <p>Defining user personas, feature backlog, data models, UX wireframes, and subscription tier strategy.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Core SaaS Engineering</h4>
              <p>Building the multi-tenant backend, reactive frontend UI, authentication, and core workflow engines.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>Billing &amp; API Integration</h4>
              <p>Wiring payment gateways, email notifications, analytics, webhook triggers, and third-party app connectors.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Beta Launch &amp; Scale</h4>
              <p>Private beta testing, security penetration audit, cloud scaling, and continuous product iteration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
