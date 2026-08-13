import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Blog & Case Studies | Orange Virtual Global Solutions',
  description: 'Orange Virtual Global Solutions Blog and Case Studies - real outcomes from Palkotech Engineering, Cable Sales and PrayasCare.',
};

export default function BlogPage() {
  return (
    <>
      {/* ============== INSIGHTS (BLOG STUBS) ============== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Blogs</span>
            <h2>From the OrangeVC desk.</h2>
          </div>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="card-img-wrapper">
                <Image src="/images/blog-ai-support.png" alt="AI Agents" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">AI Agents</span>
              </div>
              <div className="blog-tag">AI Agents</div>
              <h3>How AI Agents Are Replacing Tier-1 Support in Mid-Size Companies</h3>
              <p>The first line of customer support is undergoing a quiet revolution. Here&apos;s how mid-size companies are deploying trained AI agents &mdash; without losing the human touch.</p>
              <a href="#" className="blog-link">Read article &rarr;</a>
            </article>
            <article className="blog-card">
              <div className="card-img-wrapper">
                <Image src="/images/blog-payment-reminder.png" alt="Collections Automation" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Collections</span>
              </div>
              <div className="blog-tag">Collections</div>
              <h3>Payment Reminder Automation: Recovering 38% More Receivables Without Losing Trust</h3>
              <p>Collections is a relationship function. The right automated reminder sequence recovers faster, escalates calmer &mdash; and keeps your customer relationships intact.</p>
              <a href="#" className="blog-link">Read article &rarr;</a>
            </article>
            <article className="blog-card">
              <div className="card-img-wrapper">
                <Image src="/images/blog-hospital-os.png" alt="Healthcare Hospital OS" fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                <span className="card-img-badge">Healthcare</span>
              </div>
              <div className="blog-tag">Healthcare</div>
              <h3>Designing a Hospital OS That Doctors Actually Use</h3>
              <p>Most HIS systems fail at the bedside. Medora360 was designed the opposite way &mdash; starting with the doctor&apos;s mobile workflow and reverse-engineering the rest.</p>
              <a href="#" className="blog-link">Read article &rarr;</a>
            </article>
          </div>
        </div>
      </section>

      {/* ============== CASE STUDIES ============== */}
      <section className="section section-soft" id="case-studies">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-orange">Case Studies</span>
            <h2>Outcomes that moved the business needle.</h2>
            <p className="lead-sm">Three mid-size clients. Three different problems. Same disciplined delivery.</p>
          </div>

          {/* CASE STUDY 1 - PALKOTECH */}
          <article className="case-card" id="palkotech">
            <div className="case-head">
              <span className="case-tag">MSME · Collections Automation</span>
              <h3>Remind365 cuts DSO by 41% at Palkotech Engineering</h3>
              <p className="case-sub">An automated payment reminder workflow for a growing engineering MSME.</p>
            </div>

            <div className="case-body">
              <div className="case-block">
                <span className="case-label">Client</span>
                <p>Palkotech Engineering &mdash; a fast-growing engineering services MSME serving industrial customers across India.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Challenge</span>
                <p>Palkotech was bleeding working capital because payment reminders were manual, inconsistent and dependent on a single accounts executive. DSO had crept past 75 days, the sales team was chasing invoices instead of selling, and customer relationships were fraying with poorly timed follow-ups.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Solution</span>
                <p>We deployed <strong>Remind365</strong> &mdash; with WhatsApp-first reminder flows, automated escalation tiers (friendly &rarr; firm &rarr; legal notice), a reconciliation dashboard and a clean sync with their existing CRM and Tally books.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Outcome</span>
                <ul className="case-results">
                  <li><strong>41%</strong><span>DSO reduction within two billing cycles</span></li>
                  <li><strong>3×</strong><span>faster collections team throughput</span></li>
                  <li><strong>0</strong><span>customer escalations in the first 90 days</span></li>
                </ul>
              </div>
            </div>
          </article>

          {/* CASE STUDY 2 - CABLE SALES */}
          <article className="case-card" id="cablesales">
            <div className="case-head">
              <span className="case-tag">SME · Digital Growth</span>
              <h3>Cable Sales: 4.7× inbound leads in 6 months with a new website &amp; sales engine</h3>
              <p className="case-sub">A complete digital growth setup for a regional cabling distributor.</p>
            </div>

            <div className="case-body">
              <div className="case-block">
                <span className="case-label">Client</span>
                <p>Cable Sales &mdash; a regional cabling and connectivity distributor serving electricians, contractors and OEM buyers.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Challenge</span>
                <p>Cable Sales had no digital storefront, weak inbound lead generation and an overstretched sales team juggling inbound calls, custom quotes and field visits &mdash; all with no clear pipeline visibility.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Solution</span>
                <p>We designed &amp; built their first <strong>conversion-focused website</strong> &mdash; with product catalog, instant quote engine and WhatsApp click-to-chat. On top of that, we layered <strong>AI-driven sales &amp; lead support calling</strong>, SEO and paid social campaigns targeting electricians, contractors and OEMs.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Outcome</span>
                <ul className="case-results">
                  <li><strong>4.7×</strong><span>inbound qualified leads in 6 months</span></li>
                  <li><strong>28%</strong><span>lower cost-per-lead from paid mix</span></li>
                  <li><strong>Lift</strong><span>in repeat orders from contractor accounts</span></li>
                </ul>
              </div>
            </div>
          </article>

          {/* CASE STUDY 3 - PRAYASCARE */}
          <article className="case-card" id="prayascare">
            <div className="case-head">
              <span className="case-tag">Healthcare · Hospital Digitalization</span>
              <h3>PrayasCare: Medora360 powers end-to-end digitalization for a 10-bed hospital</h3>
              <p className="case-sub">From paper and spreadsheets to one connected hospital OS.</p>
            </div>

            <div className="case-body">
              <div className="case-block">
                <span className="case-label">Client</span>
                <p>PrayasCare &mdash; a 10-bed multi-speciality hospital committed to delivering patient-first care in its community.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Challenge</span>
                <p>PrayasCare was running on spreadsheets, paper registers and a fragmented billing workflow. Insurance claims were being rejected too often, doctors were spending their evenings on documentation, and the administration had no single source of truth for patients or revenue.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Solution</span>
                <p>We rolled out <strong>Medora360</strong> &mdash; covering OPD/IPD modules, EMR, pharmacy, lab, automated billing and insurance/TPA workflows &mdash; alongside a <strong>doctor-friendly mobile app</strong> that makes bedside documentation effortless.</p>
              </div>
              <div className="case-block">
                <span className="case-label">Outcome</span>
                <ul className="case-results">
                  <li><strong>62%</strong><span>drop in claim rejections</span></li>
                  <li><strong>35%</strong><span>faster discharge-to-billing cycle</span></li>
                  <li><strong>+22</strong><span>patient NPS lift in six months</span></li>
                </ul>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* ============== LET'S TALK / CONTACT SECTION ============== */}
      <ContactSection />
    </>
  );
}
