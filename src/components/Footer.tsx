import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-dark-950/80 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="TOKUMA"
            className="h-7 w-7 object-contain rounded-lg p-0.5 bg-dark-900 border border-brand-500/30"
          />
          <p>© {new Date().getFullYear()} TOKUMA Technologies. All rights reserved.</p>
        </div>

        {/* Center/Right: Contact & Privacy Policy */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            Addis Ababa, Ethiopia
          </span>
          <a
            href="mailto:support@tokuma.et"
            className="inline-flex items-center gap-1.5 hover:text-brand-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-400" />
            support@tokuma.et
          </a>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-1.5 text-brand-400 font-semibold hover:text-brand-300 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
