import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PageTransition } from '@/components/PageTransition';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { ContactPage } from '@/pages/ContactPage';

// ─────────────────────────────────────────────
// Service Sub Pages
// ─────────────────────────────────────────────
import { BusinessStrategyPage } from '@/pages/services/BusinessStrategyPage';
import { FinancialPlanningPage } from '@/pages/services/FinancialPlanningPage';
import { WorkforceOptimizationPage } from '@/pages/services/WorkforceOptimizationPage';
import { TaxCompliancePage } from '@/pages/services/TaxCompliancePage';
import { RiskManagementPage } from '@/pages/services/RiskManagementPage';
import { OngoingSupportPage } from '@/pages/services/OngoingSupportPage';

// ─────────────────────────────────────────────
// Animated Routes (NEW – does not affect logic)
// ─────────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* Main Pages */}
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />

        {/* Services Sub Pages */}
        <Route path="/services/business-strategy" element={<PageTransition><BusinessStrategyPage /></PageTransition>} />
        <Route path="/services/financial-planning" element={<PageTransition><FinancialPlanningPage /></PageTransition>} />
        <Route path="/services/workforce-optimization" element={<PageTransition><WorkforceOptimizationPage /></PageTransition>} />
        <Route path="/services/tax-compliance" element={<PageTransition><TaxCompliancePage /></PageTransition>} />
        <Route path="/services/risk-management" element={<PageTransition><RiskManagementPage /></PageTransition>} />
        <Route path="/services/ongoing-support" element={<PageTransition><OngoingSupportPage /></PageTransition>} />

      </Routes>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// App Component (ORIGINAL + EXTENDED)
// ─────────────────────────────────────────────
export default function App() {

  // ─────────────────────────────────────────────
  // Typewriter Logic (UNCHANGED)
  // ─────────────────────────────────────────────
  const messages = [
    "BUSINESS MANAGEMENT CONSULTANT",
    "Accounts | Audit | Tax | Assurance"
  ];

  const typeWriterEffect = () => {
    const element = document.querySelector(".typewriter-text") as HTMLElement;
    if (!element) return;

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentMessage = messages[messageIndex];

      if (!isDeleting) {
        element.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentMessage.length) {
          setTimeout(() => (isDeleting = true), 1500);
        }
      } else {
        element.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          messageIndex = (messageIndex + 1) % messages.length;
        }
      }

      setTimeout(type, isDeleting ? 40 : 60);
    };

    type();
  };

  useEffect(() => {
    typeWriterEffect();
  }, []);

  // ─────────────────────────────────────────────

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Navbar - Fixed */}
        <Navbar />

        {/* Typing Banner */}
        <div className="w-full bg-purple-900 text-white py-3 text-center mt-[80px] shadow-md">
          <span className="typewriter-text text-lg lg:text-xl font-semibold tracking-wide"></span>
        </div>

        {/* Main Page Content (Animated) */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

      </div>
    </Router>
  );
}
