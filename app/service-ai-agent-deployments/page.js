import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'AI Agent Deployments & Autonomous Workflows | Orange Virtual Global Solutions',
  description: 'Deploy custom-trained AI agents that handle sales qualification, 24/7 customer queries, voice calling, and workflow automation natively integrated with your business data.',
};

export default function AIAgentDeploymentsPage() {
  return (
    <>
      {/* ============== HERO SECTION ============== */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <span className="eyebrow eyebrow-orange">OUR SERVICES &middot; 02</span>
              <h1>AI Agent Deployments &amp; Autonomous Workflows</h1>
              <p className="lead">Deploy custom-trained AI agents that handle sales qualification, 24/7 customer queries, voice calling, and workflow automation &mdash; natively integrated with your business data.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">Book an AI Consultation</Link>
                <Link href="/#services" className="btn btn-ghost">All Services &rarr;</Link>
              </div>
              <div className="service-stats-pills">
                <div className="service-stat-item">
                  <strong>24/7/365</strong>
                  <span>Autonomous Availability</span>
                </div>
                <div className="service-stat-item">
                  <strong>&lt;500ms</strong>
                  <span>Real-time Response Time</span>
                </div>
                <div className="service-stat-item">
                  <strong>70%</strong>
                  <span>OpEx Reduction</span>
                </div>
              </div>
            </div>
            <div className="service-hero-img-wrap">
              <Image
                src="/images/ai-agent-hero.png"
                alt="AI Agent Deployments"
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
            <h2>Enterprise AI agents tailored to your business logic.</h2>
            <p className="lead-sm">We train LLMs on your proprietary knowledge base, SOPs, and product catalogs to execute tasks with high accuracy and zero hallucination risk.</p>
          </div>

          <div className="feature-card-grid">
            <div className="service-feature-card">
              <span className="service-feature-icon">🤖</span>
              <h3>Autonomous WhatsApp &amp; Chat Agents</h3>
              <p>Conversational AI agents operating 24/7 on WhatsApp, website live chat, and email to answer inquiries and book appointments.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🎙️</span>
              <h3>Multilingual Voice AI Agents</h3>
              <p>Voice AI calling agents capable of handling inbound customer calls and outbound lead follow-ups in multiple languages with human tone.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">⚡</span>
              <h3>RAG &amp; Custom Knowledge Base</h3>
              <p>Retrieval-Augmented Generation (RAG) architecture indexing your PDFs, CRM, ERP, and databases for instant precise answers.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🔄</span>
              <h3>Workflow &amp; API Integration</h3>
              <p>AI agents that don&apos;t just talk, but act &mdash; updating CRM records, triggering webhooks, creating tickets, and processing orders.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">🛡️</span>
              <h3>Guardrails &amp; Safety Filters</h3>
              <p>Strict security guardrails preventing off-topic responses, compliance breaches, or unauthorized disclosures.</p>
            </div>
            <div className="service-feature-card">
              <span className="service-feature-icon">📊</span>
              <h3>Agent Analytics &amp; Human Handoff</h3>
              <p>Live dashboard monitoring conversation sentiment, resolution rates, and seamless escalation to human agents when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ROADMAP ============== */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Our Process</span>
            <h2>How we build &amp; deploy your AI workforce.</h2>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-num">01</div>
              <h4>Data Audit &amp; Mapping</h4>
              <p>We analyze your operating SOPs, customer chat logs, and workflows to map high-ROI automation nodes.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">02</div>
              <h4>Model Training &amp; RAG</h4>
              <p>Ingesting company data, fine-tuning model prompts, and implementing vector embeddings for accuracy.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">03</div>
              <h4>API &amp; Channel Wiring</h4>
              <p>Wiring AI agents directly into WhatsApp API, CRM, ERP, phone systems, and custom databases.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">04</div>
              <h4>Production Deployment</h4>
              <p>Pilot rollout, human-in-the-loop validation, continuous prompt refinement, and full live deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
