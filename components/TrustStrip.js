import React from 'react';
import Image from 'next/image';

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-strip-layout">
        {/* Left: Core Stats Grid */}
        <div className="trust-grid">
          <div className="trust-item">
            <strong>12+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="trust-item">
            <strong>500+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="trust-item">
            <strong>35+</strong>
            <span>Global Clients</span>
          </div>
          <div className="trust-item">
            <strong>6</strong>
            <span>Industries Served</span>
          </div>
          <div className="trust-item">
            <strong>24/7</strong>
            <span>SLA Support</span>
          </div>
        </div>

        {/* Vertical Glass Divider */}
        <div className="trust-divider" aria-hidden="true" />

        {/* Right: Certificate Seals */}
        <div className="trust-certs-wrapper">
          <div className="certs-badges-row">
            <div className="cert-seal-card" title="ISO 20000-1:2018 Certified">
              <div className="cert-seal-img">
                <Image
                  src="/images/iso-certified.png"
                  alt="ISO 20000-1:2018 Certified"
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="cert-seal-tag">ISO 20000-1</span>
            </div>

            <div className="cert-seal-card" title="CMMI Level 3 Certified">
              <div className="cert-seal-img">
                <Image
                  src="/images/cmmi-level3.png"
                  alt="CMMI Level 3 Certified"
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="cert-seal-tag">CMMI Level 3</span>
            </div>

            <div className="cert-seal-card" title="MSME Govt. Registered">
              <div className="cert-seal-img">
                <Image
                  src="/images/msme-certified.png"
                  alt="MSME Certified Enterprise"
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="cert-seal-tag">MSME Govt.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
