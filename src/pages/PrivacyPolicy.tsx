import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  Lock,
  UserCheck,
  Trash2,
  Mail,
  Smartphone,
  Eye,
  FileText,
  AlertCircle,
  Clock,
  Car,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const effectiveDate = 'November 6, 2026';

  const sections = [
    { id: 'introduction', label: '1. Introduction & Overview' },
    { id: 'data-collected', label: '2. Information We Collect' },
    { id: 'background-location', label: '3. Background Location (Google Play Disclosure)' },
    { id: 'how-we-use', label: '4. How We Use Information' },
    { id: 'sharing', label: '5. Data Sharing & Disclosure' },
    { id: 'security', label: '6. Data Security & Storage' },
    { id: 'retention-deletion', label: '7. Data Retention & Account Deletion' },
    { id: 'permissions', label: '8. Mobile Device Permissions' },
    { id: 'children', label: "9. Children's Privacy" },
    { id: 'changes', label: '10. Changes to This Policy' },
    { id: 'contact', label: '11. Contact & Grievance Officer' },
  ];

  return (
    <div className="relative min-h-screen py-8 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Bar for Privacy Page */}
      <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="TOKUMA"
            className="h-10 w-10 object-contain rounded-xl p-1 bg-dark-900 border border-brand-500/30 shadow-[0_0_15px_rgba(0,212,219,0.25)]"
          />
          <span className="font-display text-xl font-extrabold tracking-wider text-white group-hover:text-brand-300 transition-colors">
            TOKUMA
          </span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card border-brand-500/30 text-brand-300 hover:text-white hover:border-brand-400 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,212,219,0.15)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
      {/* Header Banner */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-brand-500/30 text-brand-300 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4 text-brand-400" />
          <span>Google Play Developer Policy Compliant Privacy Policy</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          This Privacy Policy explains how <strong className="text-white">TOKUMA Technologies</strong> ("TOKUMA", "Tekumma", "we", "our", or "us")
          collects, uses, processes, and protects your information across the TOKUMA mobile applications, driver platform, passenger app, and associated services.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-brand-400/90 font-medium bg-brand-500/10 px-3 py-1 rounded-lg border border-brand-500/20">
          <Clock className="w-3.5 h-3.5" />
          <span>Effective Date: {effectiveDate}</span>
        </div>
      </div>

      {/* Prominent Google Play Background Location Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl glass-panel border-amber-500/30 bg-amber-500/5 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-white">
              Prominent Disclosure: Precise & Background Location Access
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The TOKUMA Driver application collects and transmits <strong className="text-white">precise GPS location data</strong> in the foreground and in the <strong className="text-brand-300">background (when the app is closed or not in active view)</strong>, strictly while the driver is toggled <strong className="text-white">"On Duty" / "Ready to Drive"</strong>.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              This data is required to calculate accurate distance-based fares, enable real-time dispatching by nearby passengers and call center operators, ensure passenger and driver safety, and facilitate trip auditing. Background location collection halts immediately once the driver toggles "Off Duty".
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Sidebar / Quick Navigation */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 p-5 rounded-2xl glass-card border-white/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-brand-400" />
              Table of Contents
            </h4>
            <nav className="space-y-1 text-xs">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1.5 px-2 rounded-lg text-slate-400 hover:text-brand-300 hover:bg-white/5 transition-colors"
                >
                  {sec.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] text-slate-400">Need immediate assistance?</p>
              <a
                href="mailto:support@tokuma.et"
                className="mt-1 inline-flex items-center gap-1.5 text-xs text-brand-400 font-semibold hover:underline"
              >
                <Mail className="w-3 h-3" />
                support@tokuma.et
              </a>
            </div>
          </div>
        </aside>

        {/* Policy Content */}
        <main className="lg:col-span-3 space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section id="introduction" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <FileText className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">1. Introduction & Overview</h2>
            </div>
            <p>
              TOKUMA Technologies ("TOKUMA", "we", "us", or "our") operates a state-of-the-art mobility, taxi dispatch, and smart logistics platform based in Addis Ababa, Ethiopia. We respect your privacy and are committed to protecting your personal data in full compliance with applicable Ethiopian data protection principles and international standards (including Google Play Store and Apple App Store Developer Policies).
            </p>
            <p>
              This policy governs all users of our ecosystem, including registered Drivers, Fleet Operators, Call Center Staff, and Passengers who hail rides digitally or via street-hail meters.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collected" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <UserCheck className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">2. Information We Collect</h2>
            </div>
            <p>We collect information to deliver safe, transparent, and seamless rides:</p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 space-y-1">
                <h4 className="font-semibold text-white">A. Personal Identification & Contact Details</h4>
                <p className="text-xs text-slate-400">
                  Full name, mobile telephone number, email address, profile photograph, National ID (Kebele ID / Fayda ID), and driver’s license documentation for identity verification.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 space-y-1">
                <h4 className="font-semibold text-white">B. Vehicle & Fleet Information</h4>
                <p className="text-xs text-slate-400">
                  Vehicle plate number, vehicle make and model, vehicle manufacturing year, vehicle color, and annual inspection certificates.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 space-y-1">
                <h4 className="font-semibold text-white">C. Precise Location & Trip Telemetry</h4>
                <p className="text-xs text-slate-400">
                  Precise GPS latitude, longitude, heading, altitude, speed, and timestamp telemetry. Collected continuously during active trips and when the driver is marked on-duty.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 space-y-1">
                <h4 className="font-semibold text-white">D. Device & Network Telemetry</h4>
                <p className="text-xs text-slate-400">
                  Hardware device identifiers (UUID), operating system version, push notification tokens, IP address, connection status, and diagnostic crash logs.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-dark-900/60 border border-white/5 space-y-1">
                <h4 className="font-semibold text-white">E. Transaction & Coupon History</h4>
                <p className="text-xs text-slate-400">
                  Ride receipts, completed trip logs, digital coupon redemption codes, base fare calculations, and operator settlement records.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="background-location" className="p-8 rounded-3xl glass-card space-y-4 border-brand-500/30">
            <div className="flex items-center gap-3 text-brand-400">
              <MapPin className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">
                3. Background Location (Google Play Developer Policy Disclosure)
              </h2>
            </div>
            <p className="text-white font-medium">
              Why does TOKUMA require background location access?
            </p>
            <p>
              To fulfill the core functionality of a real-time ride-hailing and meter application, the <strong className="text-brand-300">TOKUMA Driver app</strong> requires permission to access your device’s location continuously, including when the app is in the background or minimized:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Seamless Dispatching:</strong> Matches incoming ride requests and call-center bookings with the nearest available on-duty driver, even when the driver is looking at another app or the screen is locked.
              </li>
              <li>
                <strong className="text-white">Live Metering & Fair Calculation:</strong> Computes the exact distance traversed and travel duration without interruptions caused by screen time-outs or navigation switching.
              </li>
              <li>
                <strong className="text-white">Safety & Route Auditing:</strong> Enables our dispatch monitoring center to safeguard drivers and passengers against route deviations or distress events in real-time.
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300">
              <strong>Control:</strong> You maintain complete control over location tracking. When you toggle the switch to <em>"Off Duty"</em> in the app, background location tracking ceases immediately.
            </div>
          </section>

          {/* Section 4 */}
          <section id="how-we-use" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <Car className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">4. How We Use Information</h2>
            </div>
            <p>We use personal data strictly for legitimate operational purposes:</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Pairing drivers with passengers and facilitating navigation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Calculating transparent metered fares based on standard regulated formulas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Enforcing our strict single-device fleet policy to prevent unauthorized account sharing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Issuing digital SMS trip receipts and resolving coupon redemptions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                <span>Communicating service updates, safety alerts, and account notices.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="sharing" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <Eye className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">5. Data Sharing & Disclosure</h2>
            </div>
            <p>
              We do <strong>not</strong> sell, rent, or monetize your personal information to third-party advertisers. Information is only shared under these strict circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Between Driver and Passenger:</strong> During an active trip, the passenger sees the driver’s first name, photo, phone contact, vehicle plate number, and real-time car location.
              </li>
              <li>
                <strong className="text-white">With Dispatch Operations:</strong> Authorized call center operators and fleet managers access trip and driver telemetry to provide roadside assistance.
              </li>
              <li>
                <strong className="text-white">Legal & Law Enforcement:</strong> If required by valid court order, subpoena, or relevant law enforcement authorities under Ethiopian law to investigate emergencies or traffic incidents.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="security" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <Lock className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">6. Data Security & Storage</h2>
            </div>
            <p>
              We apply industry-leading security practices to safeguard personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>End-to-end transport layer encryption (<strong className="text-white">TLS 1.3 / HTTPS</strong>) across all API and WebSocket channels.</li>
              <li>Encrypted storage of sensitive driver identity tokens in Android Keystore / iOS Keychain via secure hardware modules.</li>
              <li>Role-based access controls (RBAC) and two-factor authentication (2FA) for administrative access.</li>
              <li>Continuous session verification and single active device pinning.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="retention-deletion" className="p-8 rounded-3xl glass-card space-y-4 border-red-500/30">
            <div className="flex items-center gap-3 text-red-400">
              <Trash2 className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">
                7. Data Retention & Account Deletion Request
              </h2>
            </div>
            <p>
              In accordance with Google Play Store User Data policies, users and drivers have the right to request deletion of their account and all associated personal data:
            </p>
            <div className="p-5 rounded-2xl bg-dark-900/80 border border-white/10 space-y-3">
              <h4 className="font-bold text-white text-base">How to Request Account & Data Deletion:</h4>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-300">
                <li>
                  <strong className="text-white">In-App Method:</strong> Open the mobile app &gt; Settings &gt; Profile &gt; tap <em>"Request Account Deletion"</em>.
                </li>
                <li>
                  <strong className="text-white">Email Method:</strong> Send an email from your registered email address or mobile number to{' '}
                  <a href="mailto:support@tokuma.et" className="text-brand-400 underline font-medium">
                    support@tokuma.et
                  </a>{' '}
                  with the subject <em>"Account Deletion Request - [Your Phone Number]"</em>.
                </li>
              </ol>
              <p className="text-xs text-slate-400 pt-2 border-t border-white/5">
                Upon verification, your profile, credentials, and uploaded identity documents will be permanently purged within 30 days, except records required to be retained under statutory financial or tax obligations in Ethiopia.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="permissions" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <Smartphone className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">8. Mobile Device Permissions</h2>
            </div>
            <p>Our applications request the following system permissions on your mobile device:</p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="p-2.5 rounded-lg bg-dark-900/40 border border-white/5">
                <strong className="text-white">ACCESS_FINE_LOCATION & ACCESS_BACKGROUND_LOCATION:</strong> Accurate live trip meter and dispatch matching.
              </li>
              <li className="p-2.5 rounded-lg bg-dark-900/40 border border-white/5">
                <strong className="text-white">POST_NOTIFICATIONS:</strong> Dispatch alerts, ride confirmations, and safety notifications.
              </li>
              <li className="p-2.5 rounded-lg bg-dark-900/40 border border-white/5">
                <strong className="text-white">CAMERA / READ_MEDIA_IMAGES:</strong> Driver onboarding document verification and profile photo capture.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="children" className="p-8 rounded-3xl glass-card space-y-3">
            <h2 className="font-display text-xl font-bold text-white">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has registered an account, contact us immediately to facilitate account removal.
            </p>
          </section>

          {/* Section 10 */}
          <section id="changes" className="p-8 rounded-3xl glass-card space-y-3">
            <h2 className="font-display text-xl font-bold text-white">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When significant updates occur, we will notify you through an in-app notice, push notification, or banner update on this website. Continued use of TOKUMA following such updates constitutes acknowledgment of the revised policy.
            </p>
          </section>

          {/* Section 11 */}
          <section id="contact" className="p-8 rounded-3xl glass-card space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <Mail className="w-5 h-5" />
              <h2 className="font-display text-xl font-bold text-white">11. Contact & Fleet Operations Office</h2>
            </div>
            <p>
              If you have any questions, inquiries, or requests regarding this Privacy Policy or our data handling practices, please contact our Data Protection Team:
            </p>
            <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-slate-300 space-y-1.5">
              <p><strong className="text-white">TOKUMA Technologies / Tekumma Fleet Operations</strong></p>
              <p>Email: <a href="mailto:support@tokuma.et" className="text-brand-400 hover:underline">support@tokuma.et</a> / <a href="mailto:privacy@tokuma.et" className="text-brand-400 hover:underline">privacy@tokuma.et</a></p>
              <p>Phone: +251 911 000 000 / +251 116 000 000</p>
              <p>Address: Bole Sub-City, Addis Ababa, Ethiopia</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
