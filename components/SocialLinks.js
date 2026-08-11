"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, AtSign, Twitter, Youtube } from 'lucide-react';

export const socialLinksData = [
  {
    name: "WhatsApp",
    icon: "MessageCircle",
    url: "https://wa.me/919310557136"
  },
  {
    name: "Facebook",
    icon: "Facebook",
    url: "https://facebook.com/orangevirtualconnect"
  },
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com/orangevirtualconnect"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/mukesh-sharma-5242a6362/"
  },
  {
    name: "Threads",
    icon: "AtSign",
    url: "https://www.threads.net/@orangevirtualconnect"
  },
  {
    name: "X",
    icon: "Twitter",
    url: "https://x.com/OVconnect"
  },
  {
    name: "YouTube",
    icon: "Youtube",
    url: "https://youtube.com/@orangevirtualconnect"
  }
];

export function SocialIcon({ iconName, size = 20, className = "" }) {
  if (iconName === "MessageCircle") {
    return (
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={size}
        height={size}
        style={{ objectFit: "contain", display: "inline-block" }}
      />
    );
  }
  switch (iconName) {
    case "Facebook":
      return <Facebook size={size} className={className} />;
    case "Instagram":
      return <Instagram size={size} className={className} />;
    case "Linkedin":
      return <Linkedin size={size} className={className} />;
    case "AtSign":
      return <AtSign size={size} className={className} />;
    case "Twitter":
      return <Twitter size={size} className={className} />;
    case "Youtube":
      return <Youtube size={size} className={className} />;
    default:
      return null;
  }
}

export default function SocialLinks({ variant = "hero" }) {
  if (variant === "footer") {
    return (
      <div className="flex flex-wrap items-center gap-[12px]">
        {socialLinksData.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-[36px] h-[36px] rounded-full bg-[#1F242D] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#FF6A00] hover:text-white hover:-translate-y-[3px] shadow-sm hover:shadow-md cursor-pointer"
          >
            <SocialIcon iconName={item.icon} size={16} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-3">
      {socialLinksData.map((item) => (
        <div key={item.name} className="group relative">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-[48px] h-[48px] rounded-full bg-white border border-[#F3F3F3] text-slate-700 flex items-center justify-center transition-all duration-300 hover:border-[#FF6A00] hover:text-[#FF6A00] hover:scale-[1.08] shadow-sm hover:shadow-md cursor-pointer"
          >
            <SocialIcon iconName={item.icon} size={20} />
          </a>
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
