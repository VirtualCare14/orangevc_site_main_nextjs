import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 py-20 bg-[#FAFAFA]">
      <div className="w-12 h-12 border-4 border-[#FFF4EC] border-t-[#FF6A00] rounded-full animate-spin" />
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
        Loading Orange Virtual Global Solutions...
      </span>
    </div>
  );
}
