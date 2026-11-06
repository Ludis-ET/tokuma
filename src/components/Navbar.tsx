import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="TOKUMA"
              className="h-12 w-12 object-contain rounded-2xl p-1 bg-dark-900 border border-brand-500/30 shadow-[0_0_24px_rgba(0,212,219,0.35)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-brand-500 border-2 border-dark-950 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold tracking-wider text-white group-hover:text-brand-300 transition-colors">
                TOKUMA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/25">
                ET
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400 tracking-wider">
              Urban Mobility & Logistics
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors flex items-center gap-1.5 ${
              location.pathname === '/'
                ? 'text-brand-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            Home
          </Link>
          <a
            href="/#features"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="/#fleet"
            className="text-slate-300 hover:text-white transition-colors"
          >
            For Drivers
          </a>
          <Link
            to="/privacy"
            className={`transition-colors flex items-center gap-1.5 ${
              location.pathname === '/privacy'
                ? 'text-brand-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            Privacy Policy
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 text-dark-950 font-semibold text-sm shadow-[0_0_20px_rgba(0,212,219,0.4)] hover:shadow-[0_0_30px_rgba(0,212,219,0.6)] hover:brightness-105 active:scale-95 transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Get Early Access</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>

          <Link
            to="/privacy"
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-medium"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacy
          </Link>
        </div>
      </div>
    </header>
  );
};

