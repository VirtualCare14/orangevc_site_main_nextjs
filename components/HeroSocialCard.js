"use client";

import React from 'react';
import SocialLinks from './SocialLinks';

export default function HeroSocialCard() {
  return (
    <div className="my-6 p-5 sm:p-6 bg-white/90 backdrop-blur-md border border-[#F3F3F3] rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6A00] via-[#FF8C38] to-transparent" />
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <h4 className="text-base font-semibold text-slate-900 tracking-tight m-0 font-sans">Stay Connected</h4>
        </div>
        <p className="text-xs text-slate-500 font-normal m-0 mt-1 font-sans">Follow Orange Virtual Global Solutions</p>
      </div>
      <SocialLinks variant="hero" />
    </div>
  );
}
