import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Enterprise SaaS Products | Orange Virtual Global Solutions',
  description: 'Purpose-built SaaS products engineered for mid-size enterprises — Medora360 Hospital OS, OrangePulse, Remind365 Collections, Sales CRM, Warehouse Management WMS, and Invoice Generator.',
};

export default function ProductsPage() {
  return (
    <>
      {/* ============== PAGE HERO ============== */}
      <section className="page-hero">
        <div className="container">
          <h1>OUR PRODUCTS</h1>
        </div>
      </section>

      {/* ============== PRODUCT 1 - MEDORA360 ============== */}
      <section className="section" id="medora360">
        <div className="container product-block">
          <div className="product-text">
            <span className="product-tag">01 · Healthcare</span>
            <h2>Medora360 &ndash; Hospital OS</h2>
            <p className="lead-sm">End-to-end hospital OS &mdash; from OPD registration to discharge billing in one connected workflow.</p>
            <p>Medora360 is engineered for hospitals, multi-specialty clinics, and diagnostic chains that require enterprise HIS capabilities without high overhead. It unifies OPD, IPD, EMR, pharmacy, laboratory, billing, and insurance/TPA claims &mdash; featuring a doctor-friendly mobile EMR app.</p>
            <ul className="feature-list">
              <li><span className="dot-orange"></span> OPD/IPD, EMR, pharmacy &amp; lab on a single patient chart</li>
              <li><span className="dot-orange"></span> Automated billing with insurance &amp; TPA claim flows</li>
              <li><span className="dot-orange"></span> Doctor &amp; nurse mobile app with offline-capable EMR</li>
              <li><span className="dot-orange"></span> Admin dashboards for admissions, revenue &amp; outcomes</li>
            </ul>
            <div className="product-meta"><strong>Ideal for:</strong> Hospitals (10&ndash;500 beds), multi-speciality clinics, diagnostic chains, day-care centers.</div>
            <a href="https://www.medora360.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-medora">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-4 bg-slate-950">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/KzvLBzAzaeQ"
                title="Medora360 – Hospital OS Video Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-frame">
              <div className="v-stat"><strong>62%</strong><span>fewer claim rejections</span></div>
              <div className="v-stat"><strong>35%</strong><span>faster discharge-to-bill</span></div>
              <div className="v-stat"><strong>+22</strong><span>patient NPS lift</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT 2 - ORANGEPULSE ============== */}
      <section className="section section-soft" id="orangepulse">
        <div className="container product-block product-reverse">
          <div className="product-text">
            <span className="product-tag">02 · Patient Engagement</span>
            <h2>Orange Pulse &ndash; AI Patient Engagement Platform</h2>
            
            <div className="product-overview mt-3">
              <p>Orange Pulse is an intelligent patient engagement platform designed for healthcare providers to streamline patient communication, automate appointment booking, and enhance care coordination.</p>
              <p>Powered by AI agents, Orange Pulse manages patient interactions across voice calls, WhatsApp, and websites &mdash; reducing administrative desk workload while improving patient satisfaction.</p>
            </div>

            <div className="product-key-features mt-4">
              <h4 style={{ fontSize: '1.1rem', color: '#101828', marginBottom: '12px', fontWeight: 700 }}>Key Features</h4>
              <ul className="feature-list">
                <li><span className="dot-orange"></span> AI-powered appointment booking through Voice, WhatsApp, and Website</li>
                <li><span className="dot-orange"></span> Automated appointment reminders and follow-ups</li>
                <li><span className="dot-orange"></span> 24&times;7 virtual patient assistant</li>
                <li><span className="dot-orange"></span> Intelligent call handling with multilingual support</li>
                <li><span className="dot-orange"></span> Integration with Hospital Management Systems (HMS) and EHR platforms</li>
              </ul>
            </div>

            <div className="product-meta mt-3"><strong>Ideal for:</strong> Hospitals, Clinics, Diagnostic Centers, &amp; Healthcare Providers.</div>
            <a href="https://orangepulse.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-pulse">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-4 bg-slate-950">
              <iframe
                className="w-full h-full border-0"
                src="https://player.cloudinary.com/embed/?cloud_name=dzxkyglwp&public_id=Intro_video_uirwzj"
                title="Orange Pulse – AI Patient Engagement Platform Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v-frame">
              <div className="v-channel"><span className="ch-ico">✉︎</span><strong>Email</strong><span>32% open rate</span></div>
              <div className="v-channel">
                <span className="ch-ico">
                  <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} style={{ objectFit: 'contain', verticalAlign: 'middle' }} />
                </span>
                <strong>WhatsApp</strong><span>71% read rate</span>
              </div>
              <div className="v-channel"><span className="ch-ico">📞</span><strong>Voice AI</strong><span>24/7 active</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT 3 - REMIND365 ============== */}
      <section className="section" id="remind365">
        <div className="container product-block">
          <div className="product-text">
            <span className="product-tag">03 · Collections</span>
            <h2>Remind365 &ndash; Automated Collections Engine</h2>
            <p className="lead-sm">Automated payment reminders that accelerate receivables &mdash; while preserving client relationships.</p>
            <p>Remind365 automates invoice follow-ups across WhatsApp, SMS, email, and voice calls. Configure escalation tiers once, and let the engine nudge accounts, escalate calmly, and reconcile payments into Tally or ERP books.</p>
            <ul className="feature-list">
              <li><span className="dot-orange"></span> Multi-channel reminders &mdash; WhatsApp, SMS, email, voice</li>
              <li><span className="dot-orange"></span> Tiered escalation &mdash; friendly &rarr; firm &rarr; legal notice</li>
              <li><span className="dot-orange"></span> Reconciliation dashboard with ageing views</li>
              <li><span className="dot-orange"></span> CRM, Tally &amp; ERP integrations included</li>
            </ul>
            <div className="product-meta"><strong>Ideal for:</strong> Services &amp; manufacturing MSMEs, NBFCs, SaaS billing, equipment distributors.</div>
            <a href="https://remind365.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-remind" aria-hidden="true">
            <div className="card-img-wrapper" style={{ height: '220px' }}>
              <Image src="/images/remind365.png" alt="Remind365 Payment Automation Dashboard" fill sizes="(max-width: 768px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              <span className="card-img-badge">Remind365 Engine</span>
            </div>
            <div className="v-frame">
              <div className="v-line"><span className="v-step s1">Day 0</span><span className="v-msg">Invoice generated · whatsapp</span></div>
              <div className="v-line"><span className="v-step s2">Day +3</span><span className="v-msg">Friendly nudge</span></div>
              <div className="v-line"><span className="v-step s3">Day +10</span><span className="v-msg">Firm reminder</span></div>
              <div className="v-footer">Avg DSO drop · 41%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT 4 - SALES CRM ============== */}
      <section className="section section-soft" id="sales-crm">
        <div className="container product-block product-reverse">
          <div className="product-text">
            <span className="product-tag">04 · Revenue OS</span>
            <h2>Sales CRM &ndash; Revenue Acceleration Pipeline</h2>
            <p className="lead-sm">Lightweight, high-velocity CRM built for pipeline visibility and team productivity.</p>
            <p>Our Sales CRM captures leads from websites, WhatsApp, ad campaigns, and calls into a visual kanban pipeline. Track deal stages, trigger automated follow-up tasks, and generate real-time revenue forecasts.</p>
            <ul className="feature-list">
              <li><span className="dot-orange"></span> Visual kanban pipeline with stage automation</li>
              <li><span className="dot-orange"></span> Built-in WhatsApp &amp; click-to-call integration</li>
              <li><span className="dot-orange"></span> Auto-lead capture from webforms &amp; incoming calls</li>
              <li><span className="dot-orange"></span> Revenue forecasting &amp; rep activity analytics</li>
            </ul>
            <div className="product-meta"><strong>Ideal for:</strong> B2B sales teams, distributors, financial services.</div>
            <a href="https://orangevc.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-crm" aria-hidden="true">
            <div className="card-img-wrapper" style={{ height: '220px' }}>
              <Image src="/images/sales-crm.png" alt="Sales CRM Software Dashboard" fill sizes="(max-width: 768px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              <span className="card-img-badge">Sales CRM UI</span>
            </div>
            <div className="v-frame">
              <div className="v-bar"><span /><span /><span /></div>
              <div className="v-row"><span className="pill pill-orange">New</span> Acme Corp &mdash; 12 seats</div>
              <div className="v-row"><span className="pill pill-orange">Qualified</span> Globex &mdash; 48 seats</div>
              <div className="v-row"><span className="pill pill-green">Won</span> Enterprise Pod &mdash; $45k</div>
              <div className="v-footer">Pipeline value · $2.4M</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT 5 - WAREHOUSE MGMT ============== */}
      <section className="section" id="wms">
        <div className="container product-block">
          <div className="product-text">
            <span className="product-tag">05 · Operations</span>
            <h2>Warehouse Management Solution (WMS)</h2>
            <p className="lead-sm">Mobile-first WMS bringing real-time inventory control to warehouse operations.</p>
            <p>Our WMS gives logistics, manufacturing, and 3PL operators full visibility over every bin, pallet, and shipment. Built mobile-first with barcode/RFID support, it connects into Tally, SAP, and e-commerce platforms.</p>
            <ul className="feature-list">
              <li><span className="dot-orange"></span> Bin, zone &amp; multi-warehouse inventory control</li>
              <li><span className="dot-orange"></span> Pick-pack-ship workflows with barcode scan</li>
              <li><span className="dot-orange"></span> Returns, QC holds &amp; expiry tracking</li>
              <li><span className="dot-orange"></span> Integrations with Tally, SAP, Shopify &amp; 3PL partners</li>
            </ul>
            <div className="product-meta"><strong>Ideal for:</strong> Manufacturing, distribution, e-commerce fulfilment, 3PL operators.</div>
            <a href="https://orange-okapi-621808.hostingersite.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-wms" aria-hidden="true">
            <div className="card-img-wrapper" style={{ height: '220px' }}>
              <Image src="/images/wms.png" alt="Warehouse Management Solution WMS Dashboard" fill sizes="(max-width: 768px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              <span className="card-img-badge">WMS Control</span>
            </div>
            <div className="v-frame v-grid">
              <div className="v-tile">A1 · 240</div>
              <div className="v-tile full">A2 · 1,820</div>
              <div className="v-tile">A3 · 65</div>
              <div className="v-tile full">B1 · 3,410</div>
            </div>
            <div className="v-frame v-frame-sm">
              <strong>In stock</strong><span>32 SKUs · 6 zones</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRODUCT 6 - INVOICE GENERATOR ============== */}
      <section className="section section-soft" id="invoice-generator">
        <div className="container product-block product-reverse">
          <div className="product-text">
            <span className="product-tag">06 · Financial OS</span>
            <h2>Invoice Generator &ndash; Smart Invoicing &amp; GST Billing Platform</h2>
            <p className="lead-sm">Automated, tax-compliant invoice generation, instant payment links, and recurring client billing.</p>
            <p>Our Invoice Generator enables MSMEs, freelancers, digital agencies, and enterprise finance teams to create custom GST/VAT-compliant invoices in seconds, schedule automated recurring subscriptions, dispatch instant WhatsApp &amp; email payment links, and track payment receipts with real-time reporting.</p>
            <ul className="feature-list">
              <li><span className="dot-orange"></span> Multi-currency &amp; GST/VAT compliant invoice creation &amp; PDF export</li>
              <li><span className="dot-orange"></span> Instant WhatsApp, Email &amp; SMS payment link dispatch</li>
              <li><span className="dot-orange"></span> Automated recurring billing &amp; client subscription schedules</li>
              <li><span className="dot-orange"></span> Integrated payment gateway support (UPI, Credit/Debit, Netbanking)</li>
              <li><span className="dot-orange"></span> Real-time payment status tracking &amp; financial audit logs</li>
            </ul>
            <div className="product-meta"><strong>Ideal for:</strong> MSMEs, Agencies, Freelancers, SaaS Companies, &amp; B2B Enterprises.</div>
            <a href="https://paymentde.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">Visit Our Site &rarr;</a>
          </div>
          <div className="product-visual visual-invoice" aria-hidden="true">
            <div className="card-img-wrapper" style={{ height: '220px' }}>
              <Image src="/images/hero-dashboard-mockup.png" alt="Invoice Generator SaaS Dashboard" fill sizes="(max-width: 768px) 100vw, 500px" style={{ objectFit: 'cover' }} />
              <span className="card-img-badge">Invoice Generator UI</span>
            </div>
            <div className="v-frame">
              <div className="v-line"><span className="v-step s1">GST Ready</span><span className="v-msg">100% Tax Compliant</span></div>
              <div className="v-line"><span className="v-step s2">Dispatch</span><span className="v-msg">WhatsApp &amp; Email Links</span></div>
              <div className="v-line"><span className="v-step s3">Settled</span><span className="v-msg">Instant Reconciliation</span></div>
              <div className="v-footer">On-Time Payment Lift · 98.4%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}

