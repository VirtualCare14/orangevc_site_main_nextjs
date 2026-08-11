"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function TeamVideoPlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay policy handled:", error);
        });
      }
    }
  }, [isMuted]);

  // Attempt to unmute automatically on first user click anywhere on page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setHasInteracted(true);
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleSound = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      setHasInteracted(true);
    }
  };

  return (
    <div 
      onClick={toggleSound}
      className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(255,106,0,0.18)] border border-orange-200/90 bg-black group select-none cursor-pointer"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover rounded-3xl"
        aria-label="OUR TEAM Video Showcase"
      >
        <source src="/videos/Untitled%20design%20(1).mp4" type="video/mp4" />
        <source src="/videos/Untitled design (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Ambient Glass Highlight Ring */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-white/10" />

      {/* Floating Sound Control Button (Top/Bottom Overlay) */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          type="button"
          onClick={toggleSound}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/80 hover:bg-orange-600 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 transform group-hover:scale-105"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-5 h-5 text-orange-400 group-hover:text-white animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase">Click to Unmute Music</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-green-400 group-hover:text-white" />
              <span className="text-xs font-semibold tracking-wide uppercase">Music Playing</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}



