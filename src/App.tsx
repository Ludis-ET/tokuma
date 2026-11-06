import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ComingSoon } from './pages/ComingSoon';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col">
      <ScrollToTop />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
