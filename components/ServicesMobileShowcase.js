"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import {
  Code,
  Bot,
  Laptop,
  PhoneCall,
  Headphones,
  Layers,
  Rocket,
  Sparkles
} from 'lucide-react';

const servicesData = [
  {
    id: 'web-design',
    number: '01',
    badge: 'UI/UX & Web Tech',
    title: 'Website Designing',
    subtitle: 'High-Converting Web Platforms',
    desc: 'Bespoke, conversion-led website designs built with modern React & Next.js architectures.',
    href: '/service-website-designing',
    urlSlug: 'orangevirtualconnect.com/services/website-designing',
    icon: Code,
    color: '#FF6A00',
    videoSrc: '/videos/service-1.mp4',
  },
  {
    id: 'ai-agents',
    number: '02',
    badge: 'Autonomous AI',
    title: 'AI Agent Deployments',
    subtitle: 'Self-Learning Workflows',
    desc: 'Deploy custom-trained AI agents that automate customer service and qualify sales leads 24/7.',
    href: '/service-ai-agent-deployments',
    urlSlug: 'orangevirtualconnect.com/services/ai-agents',
    icon: Bot,
    color: '#FF7A1A',
    videoSrc: '/videos/service-2.mp4',
  },
  {
    id: 'software-dev',
    number: '03',
    badge: 'Full-Stack Tech',
    title: 'Software Development',
    subtitle: 'Enterprise App Architectures',
    desc: 'Cloud-native Web APIs and robust cross-platform mobile apps shipped in agile sprints.',
    href: '/service-software-development',
    urlSlug: 'orangevirtualconnect.com/services/software-development',
    icon: Laptop,
    color: '#FF6A00',
    videoSrc: '/videos/service-3.mp4',
  },
  {
    id: 'sales-calling',
    number: '04',
    badge: 'Outbound Pipeline',
    title: 'Sales & Lead Support Calling',
    subtitle: 'Accelerated SDR Outreach',
    desc: 'Dedicated outbound sales caller pods and inbound teams booking qualified meetings.',
    href: '/service-sales-lead-calling',
    urlSlug: 'orangevirtualconnect.com/services/sales-calling',
    icon: PhoneCall,
    color: '#FF8024',
    videoSrc: '/videos/service-4.mp4',
  },
  {
    id: 'bpo-services',
    number: '05',
    badge: '24/7 BPO Operations',
    title: 'Customer Service BPO',
    subtitle: 'Multilingual Support Pods',
    desc: '24/7 dedicated customer service teams handling voice, chat, email, and ticketing support.',
    href: '/service-customer-service-bpo',
    urlSlug: 'orangevirtualconnect.com/services/customer-bpo',
    icon: Headphones,
    color: '#FF6A00',
    videoSrc: '/videos/service-5.mp4',
  },
  {
    id: 'saas-dev',
    number: '06',
    badge: 'SaaS Architecture',
    title: 'SaaS Product Development',
    subtitle: 'MVP to Scalable Enterprise',
    desc: 'Multi-tenant cloud architectures, Stripe billing integrations, and analytics dashboards.',
    href: '/service-saas-product-development',
    urlSlug: 'orangevirtualconnect.com/services/saas-development',
    icon: Layers,
    color: '#FF7A1A',
    videoSrc: '/videos/service-6.mp4',
  },
  {
    id: 'seo-marketing',
    number: '07',
    badge: 'Growth & Traffic',
    title: 'SEO & Digital Marketing',
    subtitle: 'Organic Search Dominance',
    desc: 'Technical SEO, search-first content strategies, and high-ROI performance ads.',
    href: '/service-seo-digital-marketing',
    urlSlug: 'orangevirtualconnect.com/services/seo-digital-marketing',
    icon: Rocket,
    color: '#FF8024',
    videoSrc: '/videos/service-7.mp4',
  }
];

// Duplicate items for seamless infinite continuous forward loop
const displayServices = [...servicesData, { ...servicesData[0], id: 'web-design-repeat' }];

export default function ServicesMobileShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const videoRefs = useRef({});

  const handleNext = () => {
    setWithTransition(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setWithTransition(true);
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  // Seamless wrap-around handler when reaching the duplicate end item
  useEffect(() => {
    if (activeIndex >= servicesData.length) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setActiveIndex(0);
      }, 770); // Wait for smooth slide transition (750ms) to complete, then silently reset to 0

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  // Manage video playback when activeIndex changes
  useEffect(() => {
    if (isDragging) return;

    // Reset and play active video
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      const playPromise = currentVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback if prevented by browser policies
        });
      }
    }

    // Pause all non-active videos
    Object.keys(videoRefs.current).forEach((key) => {
      const idx = parseInt(key, 10);
      if (idx !== activeIndex && videoRefs.current[idx]) {
        try {
          videoRefs.current[idx].pause();
        } catch (_) {}
      }
    });
  }, [activeIndex, isDragging]);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-white overflow-hidden text-slate-800" id="services-showcase">
      {/* Background Light Orange Ambient Wave Pattern */}
      <div className="absolute inset-0 pointer-events-none aria-hidden overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFF0E6] via-[#FFE2D1]/40 to-transparent blur-3xl opacity-75" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FFF4EC] via-[#FFE5D4]/30 to-transparent blur-3xl opacity-75" />
        <div className="absolute inset-0 bg-[radial-gradient(#FF6A00_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.05]" />
      </div>

      {/* Section Header */}
      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl mb-3 sm:mb-5">
        <div className="inline-flex items-center gap-2 text-[#FF6A00] text-xs md:text-sm font-extrabold tracking-widest uppercase mb-1">
          <Sparkles className="w-4 h-4 text-[#FF6A00] animate-pulse" />
          <span>OUR SERVICES</span>
        </div>
      </div>

      {/* FULL-WIDTH CINEMATIC HORIZONTAL SLIDING CAROUSEL STAGE */}
      <div className="relative w-full flex flex-col items-center justify-center select-none py-2 overflow-hidden touch-pan-y z-10">

        {/* RESPONSIVE CENTER LAPTOP CONTAINER */}
        <div className="relative w-full max-w-[320px] xs:max-w-[420px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[780px] xl:max-w-[840px] aspect-[892/764] flex items-center justify-center flex-shrink-0 mx-auto">

          {/* HORIZONTAL CAROUSEL SLIDING TRACK (FULL WIDTH STAGE, UNCLIPPED SIDE VIDEOS) */}
          <div
            className="absolute z-10 pointer-events-auto overflow-visible p-0 m-0"
            style={{
              left: '11.2%',
              top: '3.4%',
              width: '77.6%',
              height: '58.5%'
            }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{ x: `calc(-${activeIndex} * (100% + 30px))` }}
              transition={withTransition ? { duration: 0.75, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
              className="w-full h-full flex items-center gap-[30px]"
            >
              {displayServices.map((service, index) => {
                const isCurrent = index % servicesData.length === activeIndex % servicesData.length;
                const isUpcomingRight = (index === activeIndex + 1) || (activeIndex === servicesData.length - 1 && index === 0);

                return (
                  <div
                    key={`${service.id}-${index}`}
                    onClick={() => {
                      setWithTransition(true);
                      setActiveIndex(index % servicesData.length);
                    }}
                    className={`w-full h-full shrink-0 overflow-hidden transition-all duration-700 cursor-pointer relative ${
                      isCurrent
                        ? 'opacity-100 scale-100 shadow-none z-10 bg-black rounded-none border-0'
                        : 'opacity-75 hover:opacity-100 scale-[0.92] bg-slate-900 rounded-xl border border-slate-700/60 shadow-xl'
                    }`}
                  >
                    {/* Video Player */}
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      src={service.videoSrc}
                      autoPlay={isCurrent}
                      muted
                      playsInline
                      controls={false}
                      onEnded={() => {
                        if (index % servicesData.length === activeIndex % servicesData.length) {
                          handleNext();
                        }
                      }}
                      className={`w-full h-full block p-0 m-0 border-0 outline-none ${
                        isCurrent ? 'object-fill object-top' : 'object-cover object-center'
                      }`}
                    />

                    {/* Title Badge Overlay for Left & Right Side Preview Cards */}
                    {!isCurrent && (
                      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-center justify-between text-white">
                        <span className="text-[9px] sm:text-[11px] font-extrabold flex items-center gap-1 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
                          {service.number}. {service.title}
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] font-bold text-[#FF8024] bg-[#FF6A00]/20 px-1.5 py-0.5 rounded border border-[#FF6A00]/40">
                          {isUpcomingRight ? 'NEXT' : 'PREV'}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* STATIONARY LAPTOP FRAME OVERLAY */}
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/laptop-frame.png"
                alt="Orange Virtual Global Solutions Laptop Frame"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 680px, 840px"
                style={{ objectFit: 'fill' }}
              />
            </div>
          </div>

        </div>

        {/* RESPONSIVE SERVICE NAVIGATION & BADGES BELOW LAPTOP */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 max-w-5xl mx-auto z-30 relative">
          {servicesData.map((s, idx) => {
            const isActive = idx === activeIndex % servicesData.length;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setWithTransition(true);
                  setActiveIndex(idx);
                }}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/25 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-slate-400'}`} />
                <span>{s.number}. {s.title}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
