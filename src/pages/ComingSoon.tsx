import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  MapPin,
  Car,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Receipt,
  WifiOff,
  BellRing,
  Lock,
} from 'lucide-react';

export const ComingSoon: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [role, setRole] = useState<'passenger' | 'driver'>('passenger');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background radial glow & geometric gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] radial-glow pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-brand-500/30 text-brand-300 text-xs sm:text-sm font-medium mb-8 animate-float">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-ping" />
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>Launch Announcement • Coming Soon to Google Play & App Store</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Redefining How Ethiopia Moves.{' '}
          <span className="block mt-2 bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-300 bg-clip-text text-transparent">
            Smarter, Faster & Verified.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          TOKUMA (Tekumma) brings modern ride-hailing, dynamic street hailing, transparent live metering,
          and bank-grade cryptographic security to the heart of Addis Ababa.
        </p>

        {/* Action Waitlist Form */}
        <div id="waitlist" className="mt-10 max-w-md mx-auto">
          {submitted ? (
            <div className="p-5 rounded-2xl glass-panel border-brand-500/40 text-center space-y-2">
              <div className="mx-auto w-10 h-10 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">You're on the Priority List!</h3>
              <p className="text-xs text-slate-300">
                Thank you for joining. We'll send you an exclusive early access invite as soon as the mobile app launches on Google Play.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex justify-center gap-2 p-1 rounded-xl bg-dark-900 border border-white/10 max-w-[280px] mx-auto text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setRole('passenger')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    role === 'passenger'
                      ? 'bg-brand-500 text-dark-950 font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  I'm a Rider
                </button>
                <button
                  type="button"
                  onClick={() => setRole('driver')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    role === 'driver'
                      ? 'bg-brand-500 text-dark-950 font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  I'm a Driver
                </button>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  required
                  placeholder="Enter your phone or email..."
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 text-dark-950 font-bold text-sm shadow-[0_0_24px_rgba(0,212,219,0.4)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>Notify Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                Strict privacy guarantee. No spam. Read our{' '}
                <Link to="/privacy" className="text-brand-400 underline hover:text-brand-300">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>

        {/* Store Badges Teaser */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border-white/10 opacity-90 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current text-brand-400" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.715 2.37 2.37 0 0 1-.225-1.03V3.56a2.37 2.37 0 0 1 .225-1.03 2.41 2.41 0 0 1 .61-.716zM15.207 13.415l2.671 2.672-13.447 7.76 10.776-10.432zm0-2.83L4.431.153l13.447 7.76-2.671 2.672zm1.415 1.415l3.208 1.853c1.077.622 1.077 1.637 0 2.259l-3.208 1.853-2.122-2.122 2.122-1.99.001.147z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase font-medium text-slate-400">Arriving Soon on</p>
              <p className="text-xs font-bold text-white tracking-wide">Google Play</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border-white/10 opacity-90 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.15.65-2.81 1.42-.58.67-1.1 1.74-1.02 2.78 1.07.08 2.2-.58 2.82-1.33z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase font-medium text-slate-400">Arriving Soon on</p>
              <p className="text-xs font-bold text-white tracking-wide">Apple App Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section id="features" className="py-20 bg-dark-900/60 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Engineered for Ethiopian Roads
            </h2>
            <p className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
              Why TOKUMA Changes the Urban Travel Experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-3xl relative group transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-6 border border-brand-500/30">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Transparent Live Metering
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No more guessing or sudden fare inflations. Our live trip meter tracks accurate GPS coordinates,
                distance, and time increments second-by-second with clear base-fare formulas.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 rounded-3xl relative group transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-6 border border-brand-500/30">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Instant Street Hail
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hail an available taxi directly on the street. Drivers can initiate a trip on-the-spot
                with destination geocoding, verified coupon discounts, and digital SMS receipts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-3xl relative group transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-6 border border-brand-500/30">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Seamless Offline Resilience
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Network drops in Addis Ababa won't break your ride. Local caching and outbox queues
                persist meter state and synchronize instantly once connectivity restores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver & Safety Section */}
      <section id="fleet" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              Bank-Grade Fleet Safety
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Single-Device Security & Verified Driver Fleet
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Every driver is thoroughly verified with driving license credentials, vehicle inspection,
              and dedicated phone binding. Strict single-device authorization prevents account sharing
              and guarantees ride authenticity.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Verified driver profiles with instant fleet dispatch monitoring</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <BellRing className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Real-time dispatch alerts and passenger safety checkpoints</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-sm">
                <TrendingUp className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Driver-first revenue with transparent coupon redemptions</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 group"
              >
                <span>Read our full Google Play Safety & Privacy Policy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Interactive visual card */}
          <div className="relative">
            <div className="relative mx-auto max-w-md p-8 rounded-3xl glass-panel border-brand-500/30 shadow-[0_20px_60px_-15px_rgba(0,212,219,0.3)]">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="TOKUMA"
                    className="h-10 w-10 object-contain rounded-xl p-1 bg-dark-950 border border-brand-500/30"
                  />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">TOKUMA Driver</h4>
                    <p className="text-[11px] text-brand-400 font-medium">Ready for Dispatch</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  Online
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Live GPS Telemetry</span>
                    <span className="text-brand-400 font-mono">10 Hz Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <MapPin className="w-4 h-4 text-brand-400" />
                    <span>Bole Medhanialem → Kazanchis</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/5">
                    <p className="text-[11px] text-slate-400 uppercase">Trip Distance</p>
                    <p className="text-lg font-bold text-white mt-1">4.82 km</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/5">
                    <p className="text-[11px] text-slate-400 uppercase">Estimated Fare</p>
                    <p className="text-lg font-bold text-brand-300 mt-1">295 ETB</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-slate-400">
                  Launching nationwide across Ethiopia soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
