import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-dark-900/90 text-slate-300 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TOKUMA"
                className="h-10 w-10 object-contain rounded-xl p-1 bg-dark-950 border border-brand-500/30"
              />
              <span className="font-display text-xl font-bold tracking-wider text-white">
                TOKUMA
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Empowering urban mobility and digital ride solutions across Addis Ababa and Ethiopia.
              Built with precision, passenger safety, driver-first economics, and seamless telemetry.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                Addis Ababa, Ethiopia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                support@tokuma.et
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                +251 911 000 000
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-brand-300 transition-colors">
                  Coming Soon Overview
                </Link>
              </li>
              <li>
                <a href="/#features" className="hover:text-brand-300 transition-colors">
                  Smart Live Metering
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-brand-300 transition-colors">
                  Instant Street Hail
                </a>
              </li>
              <li>
                <a href="/#fleet" className="hover:text-brand-300 transition-colors">
                  Driver Fleet & Earnings
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (Crucial for Google Play) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Compliance & Safety
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-brand-400 font-medium"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy#location" className="hover:text-brand-300 transition-colors">
                  Background Location Usage
                </Link>
              </li>
              <li>
                <Link to="/privacy#rights" className="hover:text-brand-300 transition-colors">
                  Account & Data Deletion
                </Link>
              </li>
              <li>
                <Link to="/privacy#security" className="hover:text-brand-300 transition-colors">
                  Data Security Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TOKUMA Technologies / Tekumma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for next-generation mobility with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

