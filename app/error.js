"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Safely extract string message from Error or Event objects
    let sanitizedMessage = 'An unexpected runtime error occurred.';
    if (error instanceof Error) {
      sanitizedMessage = error.message;
    } else if (typeof error === 'string') {
      sanitizedMessage = error;
    } else if (error && typeof error === 'object') {
      try {
        sanitizedMessage = error.message || error.type || JSON.stringify(error);
      } catch (_) {
        sanitizedMessage = 'Runtime application exception';
      }
    }

    console.error('[Application Error Boundary]:', sanitizedMessage, error);
  }, [error]);

  const displayMessage =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
      ? error
      : 'An unexpected application issue occurred. Please refresh or try again.';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#FAFAFA]">
      <div className="w-16 h-16 rounded-full bg-[#FFF4EC] text-[#FF6A00] grid place-items-center text-2xl font-bold mb-4 shadow-sm">
        ⚠️
      </div>
      <span className="eyebrow eyebrow-orange">System Exception</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-3 font-sans">
        Something went wrong
      </h1>
      <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base mb-8">
        {displayMessage}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="btn btn-primary btn-sm shadow-md"
        >
          Try Again
        </button>
        <Link href="/" className="btn btn-ghost btn-sm">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
