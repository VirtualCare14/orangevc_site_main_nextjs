"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroServices = [
  {
    id: "01",
    title: "Software Engineering",
    desc: "Bespoke web & mobile platforms, cloud microservices and enterprise ERP integrations.",
    href: "/service-software-development",
    imgSrc: "/images/software-engineering-hero.png",
    icon: "💻",
    stats: [
      { label: "Active Pods", val: "24" },
      { label: "Uptime SLA", val: "99.9%" },
      { label: "Sprint Velocity", val: "+42%" }
    ]
  },
  {
    id: "02",
    title: "Website Designing",
    desc: "Conversion-focused websites that build brand authority and drive enterprise growth.",
    href: "/service-website-designing",
    imgSrc: "/images/webdesign-hero.png",
    icon: "🎨",
    stats: [
      { label: "Conversion Lift", val: "+156%" },
      { label: "Avg Page Speed", val: "98/100" },
      { label: "Mobile Score", val: "100%" }
    ]
  },
  {
    id: "03",
    title: "AI Agent Deployments",
    desc: "Intelligent AI agents for sales qualification, customer support, and operations automation.",
    href: "/service-ai-agent-deployments",
    imgSrc: "/images/ai-agent-hero.png",
    icon: "🤖",
    stats: [
      { label: "Total Agents", val: "128" },
      { label: "Active Now", val: "98" },
      { label: "Resolution Rate", val: "96.4%" }
    ]
  },
  {
    id: "04",
    title: "SEO & Digital Marketing",
    desc: "Data-driven SEO & marketing strategies that deliver compound organic traffic and leads.",
    href: "/service-seo-digital-marketing",
    imgSrc: "/images/seo-hero.png",
    icon: "🚀",
    stats: [
      { label: "Organic Traffic", val: "+156%" },
      { label: "Rankings Top 3", val: "245" },
      { label: "Backlinks", val: "3.2K" }
    ]
  },
  {
    id: "05",
    title: "Sales & Lead Support",
    desc: "Outbound and inbound sales calling squads that qualify leads and accelerate pipeline velocity.",
    href: "/service-sales-lead-calling",
    imgSrc: "/images/sales-hero.png",
    icon: "📞",
    stats: [
      { label: "Dials / Day", val: "4.5K" },
      { label: "Connect Rate", val: "38%" },
      { label: "Qualified Leads", val: "1.2K" }
    ]
  },
  {
    id: "06",
    title: "Customer Service BPO",
    desc: "24/7/365 global customer support across voice, chat, email and WhatsApp channels.",
    href: "/service-customer-service-bpo",
    imgSrc: "/images/bpo-hero.png",
    icon: "🎧",
    stats: [
      { label: "CSAT Score", val: "98.2%" },
      { label: "Avg First Response", val: "< 45s" },
      { label: "Global Agents", val: "250+" }
    ]
  },
  {
    id: "07",
    title: "SaaS Product Engine",
    desc: "From idea to MVP to scale — co-building custom SaaS products and CRM platforms.",
    href: "/service-saas-product-development",
    imgSrc: "/images/saas-engine-hero.png",
    icon: "🧩",
    stats: [
      { label: "Active SaaS Users", val: "45K" },
      { label: "MRR Growth", val: "3.4x" },
      { label: "API Requests/s", val: "12K" }
    ]
  }
];

export default function HeroCardsShowcase() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with 03 AI Agent in Center
  const total = heroServices.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Continuous Automatic Side-by-Side Scroll (every 2.8s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2800);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="hero-stage-outer">
      {/* Floor Orbital Orange Glow Pattern */}
      <div className="hero-floor-orbital-glow" />

      {/* 3-Card Side-by-Side Stage */}
      <div className="hero-cards-stage-3d">
        {heroServices.map((service, idx) => {
          let diff = idx - activeIndex;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;

          // Determine position state
          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;

          return (
            <div
              key={service.id}
              className={`hero-glass-card ${isCenter ? 'card-center' : isLeft ? 'card-left' : isRight ? 'card-right' : 'card-hidden'}`}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Card Header Tag & Icon */}
              <div className="card-top-row">
                <div className="card-id-tag">
                  <span className="dot-orange-pulse" />
                  <span className="id-text">{service.id}</span>
                </div>
                <div className="card-3d-icon">{service.icon}</div>
              </div>

              {/* Title & Description */}
              <h3 className="card-title-text">{service.title}</h3>
              <p className="card-desc-text">{service.desc}</p>


              {/* Inner SaaS Window Mockup */}
              <div className="card-saas-window">
                <div className="saas-mac-bar">
                  <span className="mac-dot red" />
                  <span className="mac-dot yellow" />
                  <span className="mac-dot green" />
                  <span className="mac-title-tag">{service.title}</span>
                </div>

                {/* Dashboard Screenshot Preview */}
                <div className="saas-img-wrapper">
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: 'cover' }}
                    priority={isCenter}
                  />
                  <div className="saas-img-gradient" />
                </div>

                {/* Live Stats Strip */}
                <div className="saas-stats-strip">
                  {service.stats.map((st, i) => (
                    <div key={i} className="saas-stat-item">
                      <span className="stat-label">{st.label}</span>
                      <strong className="stat-value">{st.val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Indicator Dots Bar */}
      <div className="hero-pagination-dots">
        {heroServices.map((_, dotIdx) => (
          <button
            key={dotIdx}
            className={`pagination-dot ${dotIdx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
