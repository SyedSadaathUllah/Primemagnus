import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppLink from './components/WhatsAppLink';
import PageMetadata from './components/PageMetadata';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DigitalAI from './pages/DigitalAI';
import CaseStudies from './pages/CaseStudies';
import InternationalHealthcare from './pages/InternationalHealthcare';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal font-body antialiased selection:bg-gold/30 selection:text-evergreen">
      <ScrollToTop />
      <PageMetadata />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/operate" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/digital-ai" element={<DigitalAI />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/international-healthcare" element={<InternationalHealthcare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppLink />
    </div>
  );
}
