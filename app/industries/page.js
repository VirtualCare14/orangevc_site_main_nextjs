import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Industries We Serve | Orange Virtual Global Solutions',
  description: 'Industries served by Orange Virtual Global Solutions - Healthcare, Manufacturing, SME, MSME, Technology and Startups.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Industries We Serve</span>
          <h1>Six industries. <span className="brand-orange">One operating model.</span></h1>
          <p className="lead">
            We partner with mid-size organizations across regulated, operations-heavy and high-growth verticals.
            Our teams speak your language &mdash; because we&apos;ve already delivered inside your industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-grid">

            {/* HEALTHCARE */}
            <article className="industry-card" id="healthcare">
              <div className="card-img-wrapper">
                <Image src="/images/ind-healthcare.png" alt="Healthcare" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Medora360 OS</span>
              </div>
              <div className="industry-num">01</div>
              <div className="industry-icon">🩺</div>
              <h3>Healthcare</h3>
              <p>From 10-bed hospitals to multi-city diagnostic chains &mdash; we help healthcare operators digitize end-to-end without disrupting clinical care.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> Hospital OS through Medora360 (HIS + EMR + billing)</li>
                <li><span className="dot-orange"></span> Teleconsultation, patient engagement &amp; reminders</li>
                <li><span className="dot-orange"></span> Insurance &amp; TPA claim automation</li>
                <li><span className="dot-orange"></span> HIPAA-style data discipline &amp; access controls</li>
              </ul>
              <Link href="/blog#prayascare" className="industry-link">See a healthcare case study &rarr;</Link>
            </article>

            {/* MANUFACTURING */}
            <article className="industry-card" id="manufacturing">
              <div className="card-img-wrapper">
                <Image src="/images/ind-manufacturing.png" alt="Manufacturing" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Industrial Tech</span>
              </div>
              <div className="industry-num">02</div>
              <div className="industry-icon">🏭</div>
              <h3>Manufacturing</h3>
              <p>We help manufacturers modernise plant operations, connect the supply chain and unlock data-driven decisions across the shop floor.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> ERP bridges, shop-floor digitalization &amp; vendor portals</li>
                <li><span className="dot-orange"></span> Predictive maintenance &amp; IoT data ingestion</li>
                <li><span className="dot-orange"></span> Warehouse &amp; inventory control via WMS</li>
                <li><span className="dot-orange"></span> Dealer &amp; distributor enablement platforms</li>
              </ul>
              <Link href="/products#wms" className="industry-link">See WMS for manufacturing &rarr;</Link>
            </article>

            {/* SME */}
            <article className="industry-card" id="sme">
              <div className="card-img-wrapper">
                <Image src="/images/ind-sme.png" alt="SME" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Growth Stack</span>
              </div>
              <div className="industry-num">03</div>
              <div className="industry-icon">🏢</div>
              <h3>SME</h3>
              <p>Plug-and-play growth stacks for small and mid-size enterprises that want to compete with larger players &mdash; without enterprise overhead.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> Conversion-led website + SEO + paid media</li>
                <li><span className="dot-orange"></span> Sales CRM &amp; inbound calling support</li>
                <li><span className="dot-orange"></span> WhatsApp business automation</li>
                <li><span className="dot-orange"></span> Customer service BPO under your brand</li>
              </ul>
              <Link href="/#services" className="industry-link">Explore SME services &rarr;</Link>
            </article>

            {/* MSME */}
            <article className="industry-card" id="msme">
              <div className="card-img-wrapper">
                <Image src="/images/ind-msme.png" alt="MSME" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Cash Flow &amp; Ops</span>
              </div>
              <div className="industry-num">04</div>
              <div className="industry-icon">🧰</div>
              <h3>MSME</h3>
              <p>Capex-light technology for micro, small &amp; medium enterprises &mdash; focused on faster cash cycles, leaner ops and modern customer experiences.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> Payment reminders via Remind365</li>
                <li><span className="dot-orange"></span> Low-cost AI agents for sales &amp; support</li>
                <li><span className="dot-orange"></span> GST, compliance &amp; invoicing toolkits</li>
                <li><span className="dot-orange"></span> Custom software at SME budgets</li>
              </ul>
              <Link href="/blog#palkotech" className="industry-link">See Remind365 in action &rarr;</Link>
            </article>

            {/* TECHNOLOGY */}
            <article className="industry-card" id="technology">
              <div className="card-img-wrapper">
                <Image src="/images/ind-technology.png" alt="Technology" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">SaaS Ecosystem</span>
              </div>
              <div className="industry-num">05</div>
              <div className="industry-icon">⚙️</div>
              <h3>Technology</h3>
              <p>Engineering partnerships for software companies, SaaS vendors and tech-first businesses &mdash; from MVP to scale, with white-label delivery options.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> SaaS product development &amp; co-building</li>
                <li><span className="dot-orange"></span> White-label AI agent deployments</li>
                <li><span className="dot-orange"></span> API integrations, DevOps &amp; QA pods</li>
                <li><span className="dot-orange"></span> Dedicated engineering capacity on demand</li>
              </ul>
              <Link href="/products#sales-crm" className="industry-link">Explore our products &rarr;</Link>
            </article>

            {/* STARTUPS */}
            <article className="industry-card" id="startups">
              <div className="card-img-wrapper">
                <Image src="/images/webdesign.png" alt="Startups" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">MVP &amp; Scale</span>
              </div>
              <div className="industry-num">06</div>
              <div className="industry-icon">🚀</div>
              <h3>Startups</h3>
              <p>Fractional product, GTM and ops teams for founders &mdash; so you can ship faster, sell smarter and stay investor-ready without burning runway.</p>
              <ul className="industry-points">
                <li><span className="dot-orange"></span> MVP-to-scale product engineering</li>
                <li><span className="dot-orange"></span> Founder-led GTM &amp; lead support calling</li>
                <li><span className="dot-orange"></span> Investor-ready dashboards &amp; reporting</li>
                <li><span className="dot-orange"></span> 24/7 customer service from Day 1</li>
              </ul>
              <Link href="/#contact" className="industry-link">Talk to a startup partner &rarr;</Link>
            </article>

          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <span className="eyebrow eyebrow-orange">Cross-industry Capabilities</span>
            <h2>Whatever your industry, you get the same operating system behind it.</h2>
            <p>Our delivery engine is the same across all six verticals &mdash; a senior Account Lead, a cross-functional pod, transparent commercials and KPI-linked reporting. So your team always knows who&apos;s accountable and where your money is going.</p>
          </div>
          <div className="capability-grid">
            <div className="capability"><span>🎨</span><strong>Brand &amp; Web</strong><p>Conversion-led websites, brand systems, landing pages.</p></div>
            <div className="capability"><span>🤖</span><strong>AI Agents</strong><p>Sales, support and ops agents trained on your data.</p></div>
            <div className="capability"><span>💻</span><strong>Custom Software</strong><p>Web, mobile &amp; integration engineering at agile speed.</p></div>
            <div className="capability"><span>📞</span><strong>Voice &amp; Chat Ops</strong><p>Outbound calling, inbound support and chat operations.</p></div>
            <div className="capability"><span>📈</span><strong>Growth Marketing</strong><p>SEO, paid media, lifecycle &amp; WhatsApp commerce.</p></div>
            <div className="capability"><span>📦</span><strong>SaaS Products</strong><p>Plug-and-play products you can deploy in weeks.</p></div>
          </div>
        </div>
      </section>

      {/* ============== LET'S TALK / CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
