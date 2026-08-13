import React from 'react';
import TeamVideoPlayer from '@/components/TeamVideoPlayer';

export const metadata = {
  title: 'About Us | Orange Virtual Global Solutions',
  description: 'Learn about Orange Virtual Global Solutions — enterprise technology, autonomous AI agent deployment, software engineering, and 24/7 global BPO partner for mid-market and enterprise businesses.',
};

export default function AboutPage() {
  return (
    <>
      {/* ============== OUR TEAM VIDEO SHOWCASE (WHITE & ORANGE THEME) ============== */}
      <section className="section bg-gradient-to-b from-white via-orange-50/50 to-white text-slate-900 pt-24 pb-12 md:pt-28 md:pb-16 relative overflow-hidden">
        {/* Soft Ambient Orange Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-400/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-5 md:mb-6">
            <h1 className="inline-block text-sm md:text-base font-extrabold tracking-widest uppercase text-orange-600 mb-2">
              OUR TEAM
            </h1>
          </div>

          {/* Full Resolution Native Video Showcase */}
          <div className="max-w-5xl mx-auto">
            <TeamVideoPlayer />
          </div>
        </div>
      </section>

      {/* ============== ABOUT ORANGE VIRTUAL GLOBAL SOLUTIONS HERO ============== */}
      <section className="page-hero pb-20">
        <div className="container">
          <span className="eyebrow">About Orange Virtual Global Solutions</span>
          <h2>Bridging business vision &amp; <span className="brand-orange">technical execution.</span></h2>
          <p className="lead">
            ORANGE VIRTUAL GLOBAL SOLUTIONS PRIVATE LIMITED combines AI-powered custom technology engineering with dedicated 24/7 global business process execution (BPO) &mdash; delivering a single accountable platform for growing enterprises.
          </p>
        </div>
      </section>
    </>
  );
}
