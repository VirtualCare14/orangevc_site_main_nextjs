import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Bespoke Software Development & Engineering | Orange Virtual Global Solutions',
  description: 'Scalable web platforms, mobile applications, microservices, and internal tools shipped in rapid agile sprints with enterprise reliability.',
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 03</span>
              <h1>Bespoke Software Development &amp; Engineering</h1>
              <p className="lead">We engineer scalable web platforms, mobile applications, microservices, and internal tools &mdash; shipped in rapid agile sprints with enterprise reliability.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book an Engineering Sprint Call</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>99.9%</strong>
                  <span>Infrastructure Uptime</span>
                </div>
                <div className="service-stat-item">
                  <strong>2-Week</strong>
                  <span>Agile Sprint Delivery</span>
                </div>
                <div className="service-stat-item">
                  <strong>100%</strong>
                  <span>IP Code Ownership</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/software.png"
                alt="Software Development Showcase"
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
            <h2>Full-stack engineering tailored to mid-market scale.</h2>
            <p className="lead-sm">Our senior software architects eliminate technical debt, ensuring your cloud infrastructure scales seamlessly with business growth.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">💻</span>
              <h3>Custom Web &amp; Enterprise Apps</h3>
              <p>High-performance web applications built using React, Node.js, Next.js, and Python designed for complex business workflows.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📱</span>
              <h3>Cross-Platform Mobile Apps</h3>
              <p>iOS and Android mobile apps engineered with Flutter / React Native, providing native performance and offline sync.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">☁️</span>
              <h3>Cloud Architecture &amp; DevOps</h3>
              <p>AWS, Azure, and GCP cloud architecture setup, CI/CD pipelines, containerization (Docker/K8s), and infrastructure monitoring.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔗</span>
              <h3>API &amp; System Integration</h3>
              <p>Seamless integrations between your custom software and existing systems like SAP, Tally, Salesforce, and Payment Gateways.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🛡️</span>
              <h3>Cybersecurity &amp; Compliance</h3>
              <p>End-to-end data encryption, OWASP top 10 security audits, SOC2 readiness, and role-based access control (RBAC).</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🚀</span>
              <h3>Legacy Code Refactoring</h3>
              <p>Modernizing monolithic codebase into agile microservices, improving speed, stability, and developer velocity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>Our battle-tested engineering methodology.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>Architecture Blueprint</h4>
              <p>Defining data models, system topology, API specifications, and cloud infrastructure requirements.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Agile Sprints</h4>
              <p>Bi-weekly development sprints with working code demos, continuous code reviews, and automated testing.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>QA &amp; Security Audits</h4>
              <p>Penetration testing, load testing, cross-browser validation, and strict security compliance checks.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Deployment &amp; Support</h4>
              <p>Zero-downtime deployment, automated backups, 24/7 SLA monitoring, and ongoing feature enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
