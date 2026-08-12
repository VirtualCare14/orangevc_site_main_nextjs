"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const enterpriseSlides = [
  {
    id: 1,
    title: "Bespoke Technology",
    description: "Tailored software, websites, integrations and platforms engineered to your exact operating reality.",
    url: "technology.orangevirtualconnect.com",
    imageSrc: "/images/bespoke-tech.gif",
    accentColor: "#FF6A00"
  },
  {
    id: 2,
    title: "AI Enablement",
    description: "AI agents and automation deployed across sales, support, ops — tuned to your data, brand and KPIs.",
    url: "ai.orangevirtualconnect.com",
    imageSrc: "/images/ai-enablement.mp4",
    accentColor: "#FF6A00"
  },
  {
    id: 3,
    title: "Business Process Excellence",
    description: "Sales calling, customer service and back-office support teams who treat your customers as their own.",
    url: "bpo.orangevirtualconnect.com",
    imageSrc: "/images/bpo-excellence.gif",
    accentColor: "#FF6A00"
  }
];

export default function EnterpriseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = enterpriseSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slide rotation every 2 seconds (paused on mouse enter)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = enterpriseSlides[currentIndex];

  return (
    <div 
      className="enterprise-carousel-outer light-theme"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Light Orange & White Theme Carousel Card Container */}
      <div className="enterprise-carousel-card-light">
        
        {/* Slide Content Grid: Left Info (Heading + Text) + Right Browser Mockup */}
        <div className="enterprise-slide-grid-light">
          
          {/* Left Column: Slide Title & Description (No Icons, No Button) */}
          <div className="enterprise-slide-content-light">
            
            {/* Slide Title */}
            <h3 className="enterprise-slide-title-light">
              {currentSlide.title}
            </h3>

            {/* Description Text */}
            <p className="enterprise-slide-desc-light">
              {currentSlide.description}
            </p>

          </div>

          {/* Right Column: Light Browser Frame Mockup with Website Preview */}
          <div className="enterprise-slide-preview-light">
            <div className="browser-mockup-frame-light">
              {/* Browser Top Header Bar */}
              <div className="browser-top-bar-light">
                {/* Window control dots */}
                <div className="browser-controls">
                  <span className="control-dot dot-close" />
                  <span className="control-dot dot-min" />
                  <span className="control-dot dot-expand" />
                </div>

                {/* Back / Forward arrows */}
                <div className="browser-nav-btns-light">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </div>

                {/* URL Bar */}
                <div className="browser-url-bar-light">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lock-icon-light">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span className="url-text-light">{currentSlide.url}</span>
                </div>

                {/* Browser action icons */}
                <div className="browser-actions-light">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
              </div>

              {/* Website Screenshot / Video Canvas */}
              <div className="browser-content-area-light relative w-full aspect-[16/10] overflow-hidden">
                {currentSlide.imageSrc.endsWith('.mp4') ? (
                  <video
                    src={currentSlide.imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center browser-screenshot"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={currentSlide.imageSrc}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover object-top browser-screenshot"
                  />
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Bottom Indicators Bar */}
        <div className="enterprise-indicators-bar-light">
          {enterpriseSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`enterprise-indicator-item-light ${idx === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="indicator-line-light" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
