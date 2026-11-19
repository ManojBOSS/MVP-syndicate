import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Process from './pages/Process';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './pages/Legal';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="process" element={<Process />} />
        <Route path="technology" element={<Technology />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="cookies" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
