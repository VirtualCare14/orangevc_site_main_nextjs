import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Orange Virtual Global Solutions',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#FAFAFA]">
      <span className="text-6xl font-extrabold text-[#FF6A00] font-sans mb-2">404</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-sans mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base mb-8">
        The requested resource or service route could not be found on Orange Virtual Global Solutions.
      </p>
      <Link href="/" className="btn btn-primary btn-sm shadow-md">
        Back to Home &rarr;
      </Link>
    </div>
  );
}
