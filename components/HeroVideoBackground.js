"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroVideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setReducedMotion(true);
      }

      const handleChange = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handleChange);

      return () => {
        mediaQuery.removeEventListener?.('change', handleChange);
      };
    }
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    const video = videoRef.current;

    if (mounted && video && !reducedMotion && !videoError) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Prevent unhandled rejection or [object Event] error
          if (isSubscribed) {
            setVideoError(true);
          }
        });
      }
    }

    return () => {
      isSubscribed = false;
      if (video) {
        try {
          video.pause();
        } catch (_) {
          // Ignore pause errors on unmount
        }
      }
    };
  }, [mounted, reducedMotion]);

  const handleVideoError = (e) => {
    // Prevent event propagation to window.onerror
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="hero-video-wrapper" aria-hidden="true">
      {/* Fallback Static Poster Image */}
      <div
        className={`hero-poster-fallback transition-opacity duration-700 ${
          videoLoaded && !videoError && !reducedMotion ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src="/images/hero-dashboard-mockup.png"
          alt="Orange Virtual Global Solutions Hero Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* HTML5 Video Element - Kept stably in DOM */}
      {mounted && !reducedMotion && (
        <video
          ref={videoRef}
          className={`hero-bg-video ${videoLoaded && !videoError ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-dashboard-mockup.png"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark Gradient Overlay */}
      <div className="hero-video-overlay" />

      {/* Soft Orange & Dark Radial Glow */}
      <div className="hero-radial-glow" />

      {/* Soft Vignette Border Layer */}
      <div className="hero-vignette-layer" />
    </div>
  );
}
