import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Import components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Solutions from './pages/Solutions';
import LegalPage from './pages/LegalPage';
import Contact from './pages/Contact';
import GuideInvestissement from './pages/products/GuideInvestissement';
import GuideFiscal from './pages/products/GuideFiscal';
import GuideImmobilier from './pages/products/GuideImmobilier';
import Kickstart from './pages/products/Kickstart';
import AnalyseExpress from './pages/products/AnalyseExpress';
import PackComplet from './pages/products/PackComplet';
import CoachingPremium from './pages/products/CoachingPremium';
import { CartProvider } from './context/CartContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FFFCEF] flex flex-col">
        <Navigation />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/products/guide-investissement" element={<GuideInvestissement />} />
            <Route path="/products/guide-fiscal" element={<GuideFiscal />} />
            <Route path="/products/guide-immobilier" element={<GuideImmobilier />} />
            <Route path="/products/kickstart" element={<Kickstart />} />
            <Route path="/products/analyse-express" element={<AnalyseExpress />} />
            <Route path="/products/pack-complet" element={<PackComplet />} />
            <Route path="/products/coaching-premium" element={<CoachingPremium />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;