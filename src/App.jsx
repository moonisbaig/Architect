import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PortfolioPage from '@/pages/PortfolioPage';
import TimelinePage from '@/pages/TimelinePage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import InfoPage from '@/pages/InfoPage'; // Added InfoPage import
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/info" element={<InfoPage />} /> {/* Added InfoPage route */}
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;