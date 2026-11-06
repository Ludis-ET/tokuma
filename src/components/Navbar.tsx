import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="TOKUMA"
              className="h-11 w-11 object-contain rounded-2xl p-1 bg-dark-900 border border-brand-500/30 shadow-[0_0_20px_rgba(0,212,219,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-brand-500 border-2 border-dark-950 animate-pulse" />
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

        {/* Action Link */}
        <div className="flex items-center gap-3">
          {isPrivacy ? (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card border-brand-500/30 text-brand-300 hover:text-white hover:border-brand-400 text-xs sm:text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          ) : (
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card border-brand-500/30 text-brand-300 hover:text-white hover:border-brand-400 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,212,219,0.15)]"
            >
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Privacy Policy</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
