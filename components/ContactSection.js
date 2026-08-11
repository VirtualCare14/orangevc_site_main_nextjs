"use client";

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
    helpMessage: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      id="contact"
      style={{
        backgroundColor: '#FAF8F5',
        backgroundImage: 'radial-gradient(#E5E2D9 1.2px, transparent 1.2px)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#181E29] tracking-tight mb-6 font-sans">
              Contact Us
            </h2>

            {/* 4 Soft Information Cards */}
            <div className="space-y-3.5">
              {/* Card 1: Email */}
              <div className="bg-[#F3F0EA] border border-[#E9E5DC] rounded-2xl p-4 flex items-center gap-4 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 rounded-xl bg-[#FFEFE5] flex items-center justify-center text-[#E54D19] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800">Email</span>
                  <a href="mailto:virtual.care@orangevirtualconnect.com" className="text-sm font-medium text-slate-600 hover:text-[#E54D19] transition-colors break-all">
                    virtual.care@orangevirtualconnect.com
                  </a>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-[#F3F0EA] border border-[#E9E5DC] rounded-2xl p-4 flex items-center gap-4 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 rounded-xl bg-[#FFEFE5] flex items-center justify-center text-[#E54D19] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800">Phone</span>
                  <a href="tel:+919310557136" className="text-sm font-medium text-slate-600 hover:text-[#E54D19] transition-colors">
                    +91 9310557136
                  </a>
                </div>
              </div>

              {/* Card 3: Working Hours */}
              <div className="bg-[#F3F0EA] border border-[#E9E5DC] rounded-2xl p-4 flex items-center gap-4 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 rounded-xl bg-[#FFEFE5] flex items-center justify-center text-[#E54D19] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800">Working Hours</span>
                  <span className="text-sm font-medium text-slate-600">
                    Monday &ndash; Friday: 10 AM &ndash; 6 PM IST
                  </span>
                </div>
              </div>

              {/* Card 4: Response Time */}
              <div className="bg-[#F3F0EA] border border-[#E9E5DC] rounded-2xl p-4 flex items-center gap-4 transition-transform hover:translate-x-1">
                <div className="w-11 h-11 rounded-xl bg-[#FFEFE5] flex items-center justify-center text-[#E54D19] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800">Response Time</span>
                  <span className="text-sm font-medium text-slate-600">
                    24 working hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#EFECE6]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm mb-6">
                    Thank you for reaching out. We will get back to you within 24 working hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', emailAddress: '', mobileNumber: '', helpMessage: '' });
                    }}
                    className="bg-[#FF4500] hover:bg-[#E03D00] text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contactForm" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#E54D19] focus:bg-white rounded-xl px-4 py-3 text-slate-800 text-base sm:text-sm placeholder-slate-400 outline-none transition-all"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  {/* Email & Mobile Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-1">
                    <div>
                      <label htmlFor="emailAddress" className="block text-sm font-bold text-slate-800 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#E54D19] focus:bg-white rounded-xl px-4 py-3 text-slate-800 text-base sm:text-sm placeholder-slate-400 outline-none transition-all"
                        placeholder="you@example.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-bold text-slate-800 mb-1.5">
                        Mobile number
                      </label>
                      <div className="flex items-center bg-[#F5F3ED] border border-transparent focus-within:border-[#E54D19] focus-within:bg-white rounded-xl px-3 py-1.5 transition-all">
                        <span className="text-xs font-bold text-slate-700 pr-2 border-r border-slate-300 shrink-0">
                          IN +91
                        </span>
                        <input
                          type="tel"
                          id="mobileNumber"
                          className="w-full bg-transparent border-0 px-2 py-1.5 text-slate-800 text-base sm:text-sm placeholder-slate-400 outline-none"
                          placeholder="Mobile Number"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Helper Text */}
                  <span className="text-[11px] text-slate-400 mb-4 block">
                    Provide at least one: a valid email or a complete mobile number (with country code).
                  </span>

                  {/* How can we help? */}
                  <div className="mb-6">
                    <label htmlFor="helpMessage" className="block text-sm font-bold text-slate-800 mb-1.5">
                      How can we help?
                    </label>
                    <textarea
                      id="helpMessage"
                      rows={4}
                      className="w-full bg-[#F5F3ED] border border-transparent focus:border-[#E54D19] focus:bg-white rounded-xl px-4 py-3 text-slate-800 text-base sm:text-sm placeholder-slate-400 outline-none transition-all resize-none"
                      placeholder="I would like to know more about your services."
                      value={formData.helpMessage}
                      onChange={(e) => setFormData({ ...formData, helpMessage: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-[#FF4500]/25 hover:shadow-[#FF4500]/40 transition-all flex items-center justify-center gap-2 text-base"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>Send Message</span>
                  </button>

                  {/* Privacy Footer */}
                  <span className="text-center text-xs text-slate-400 mt-4 block">
                    By submitting this form, you agree to our privacy policy.
                  </span>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
