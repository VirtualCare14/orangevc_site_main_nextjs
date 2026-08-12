"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Bot, Laptop, PhoneCall, Headphones, Layers, Rocket, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    number: "01",
    badge: "UI/UX & Brand",
    nodeTag: "Node #01 Connected • Technology",
    title: "Website Designing",
    desc: "Conversion-led websites, brand systems and landing pages built for global mid-size buyers.",
    href: "/service-website-designing",
    imgSrc: "/images/webdesign-hero.png",
    icon: <Code className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 2,
    number: "02",
    badge: "Autonomous AI",
    nodeTag: "Node #02 Connected • AI Intelligence",
    title: "AI Agent Deployments",
    desc: "Custom-trained AI agents for sales outreach, lead qualification, customer support and internal ops.",
    href: "/service-ai-agent-deployments",
    imgSrc: "/images/ai-agent-hero.png",
    icon: <Bot className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 3,
    number: "03",
    badge: "Full Stack",
    nodeTag: "Node #03 Connected • Engineering",
    title: "Software Development",
    desc: "Bespoke web & mobile applications, integrations and internal tools — shipped in agile sprints.",
    href: "/service-software-development",
    imgSrc: "/images/software-engineering-hero.png",
    icon: <Laptop className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 4,
    number: "04",
    badge: "Outbound & Inbound",
    nodeTag: "Node #04 Connected • Operations",
    title: "Sales & Lead Support Calling",
    desc: "Outbound and inbound calling teams that fill your pipeline and qualify every opportunity that lands.",
    href: "/service-sales-lead-calling",
    imgSrc: "/images/sales-hero.png",
    icon: <PhoneCall className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 5,
    number: "05",
    badge: "24/7 Global",
    nodeTag: "Node #05 Connected • BPO Support",
    title: "Customer Service BPO",
    desc: "24/7 multilingual customer service — voice, chat, email and WhatsApp — under your brand.",
    href: "/service-customer-service-bpo",
    imgSrc: "/images/bpo-hero.png",
    icon: <Headphones className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 6,
    number: "06",
    badge: "MVP to Scale",
    nodeTag: "Node #06 Connected • Products",
    title: "SaaS Product Development",
    desc: "From idea to MVP to scale — we co-build SaaS products with founders and product teams.",
    href: "/service-saas-product-development",
    imgSrc: "/images/saas-engine-hero.png",
    icon: <Layers className="w-5 h-5 text-[#FF6A00]" />
  },
  {
    id: 7,
    number: "07",
    badge: "Growth & Traffic",
    nodeTag: "Node #07 Connected • Marketing",
    title: "SEO & Digital Marketing",
    desc: "Search-first content, performance ads and lifecycle campaigns that compound month over month.",
    href: "/service-seo-digital-marketing",
    imgSrc: "/images/seo-hero.png",
    icon: <Rocket className="w-5 h-5 text-[#FF6A00]" />
  }
];

// Framer Motion Stagger Container Variant
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

export default function EcosystemNodeGraph() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="section services-showcase-exact relative bg-white overflow-hidden py-16 lg:py-24 border-b border-slate-100" id="services">
      
      {/* Background Soft Orange Gradient & Ambient Wave Vector Overlay */}
      <div className="services-bg-decor pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400/5 blur-2xl rounded-full" />
        
        {/* Subtle Wave Vector Accent */}
        <svg className="absolute top-0 left-0 w-full h-96 opacity-30 stroke-orange-500/15" fill="none">
          <path d="M-100 100 C 300 250, 700 0, 1200 150 C 1700 300, 2000 50, 2400 100" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>

        {/* Ambient Glowing Dots */}
        <span className="ambient-dot dot-1" />
        <span className="ambient-dot dot-2" />
        <span className="ambient-dot dot-3" />
      </div>

      <div className="container relative z-10 max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Section Header (Exact Match to Uploaded Image) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block mb-3 text-[#FF6A00] font-extrabold text-xs md:text-sm tracking-widest uppercase">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight">
            Our <span className="text-[#FF6A00]">Services</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Discover our end-to-end technology, AI automation, and global business process solutions engineered for enterprise growth.
          </p>
          <div className="w-12 h-1 bg-[#FF6A00] rounded-full mx-auto mt-4" />
        </div>

        {/* 7 Cards Horizontal Showcase Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="services-cards-scroll-container flex items-stretch gap-4 md:gap-5 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setActiveDot(index)}
              className="group service-card-unit shrink-0 w-[270px] sm:w-[290px] md:w-[305px] h-[580px] sm:h-[600px] rounded-[24px] bg-white border border-slate-200/80 shadow-lg hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden relative"
            >
              {/* Top 42% Background Image Container with Gradient Overlay */}
              <div className="relative w-full h-[42%] overflow-hidden bg-slate-900 shrink-0">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Dark Vignette Overlay for Crisp Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800 tracking-wider shadow-sm border border-white/40">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Floating White Glass Icon Square Badge (Positioned at Boundary) */}
              <div className="absolute top-[38%] left-5 -translate-y-1/2 z-20 w-12 h-12 rounded-xl bg-white border border-orange-100 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Card Body Content */}
              <div className="p-5 pt-8 flex-1 flex flex-col justify-between text-left bg-white relative">
                
                <div>
                  {/* Service Number */}
                  <div className="text-xl font-extrabold text-[#FF6A00] tracking-wider mb-1">
                    {service.number}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2 group-hover:text-[#FF6A00] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom CTA Link & Orange Line */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF6A00] hover:text-[#D94A0F] transition-all"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>

                  {/* Bottom Thin Orange Progress Bar Line */}
                  <div className="w-full h-0.5 bg-slate-100 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-[#FF6A00] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Pagination Dots Bar (Matches Reference Image) */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {servicesData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveDot(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIdx === activeDot ? 'w-6 bg-[#FF6A00]' : 'w-2.5 bg-slate-200 hover:bg-orange-300'
              }`}
              aria-label={`Go to service card ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
