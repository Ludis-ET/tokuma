import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const ComingSoon: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden py-12">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-brand-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold mb-8 animate-float">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-ping" />
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="tracking-wide">Something Big is Coming to Ethiopia</span>
        </div>

        {/* Big Beautiful Brand Logo */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/30 to-cyan-400/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-4 sm:p-5 rounded-3xl bg-dark-900/90 border border-brand-500/40 shadow-[0_0_60px_rgba(0,212,219,0.35)] backdrop-blur-xl">
            <img
              src="/logo.png"
              alt="TOKUMA Logo"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-2.5 mb-3">
          <h2 className="font-display text-2xl sm:text-3xl font-black tracking-[0.25em] text-white">
            TOKUMA
          </h2>
          <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
            ET
          </span>
        </div>

        {/* Coming Soon Text */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none mb-6">
          <span className="bg-gradient-to-r from-brand-200 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
            COMING SOON
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed font-normal mb-8">
          We are building Ethiopia's next-generation urban mobility and smart ride ecosystem.
          Stay tuned as we prepare for launch.
        </p>

        {/* App Store / Google Play subtle indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs text-slate-400">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border-white/10">
            <svg className="w-4 h-4 fill-current text-brand-400" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.715 2.37 2.37 0 0 1-.225-1.03V3.56a2.37 2.37 0 0 1 .225-1.03 2.41 2.41 0 0 1 .61-.716zM15.207 13.415l2.671 2.672-13.447 7.76 10.776-10.432zm0-2.83L4.431.153l13.447 7.76-2.671 2.672zm1.415 1.415l3.208 1.853c1.077.622 1.077 1.637 0 2.259l-3.208 1.853-2.122-2.122 2.122-1.99.001.147z" />
            </svg>
            <span className="text-slate-300 font-medium">Google Play Store</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border-white/10">
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.15.65-2.81 1.42-.58.67-1.1 1.74-1.02 2.78 1.07.08 2.2-.58 2.82-1.33z" />
            </svg>
            <span className="text-slate-300 font-medium">Apple App Store</span>
          </div>
        </div>

        {/* Privacy Policy Link Button (Essential for Play Store Review) */}
        <div>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border-brand-500/30 text-brand-300 hover:text-white hover:border-brand-400 hover:bg-brand-500/10 text-sm font-semibold transition-all shadow-[0_0_20px_rgba(0,212,219,0.15)]"
          >
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Read Privacy Policy & Legal Disclosures</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
