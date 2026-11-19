import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronRight, 
  Shield, 
  Linkedin, 
  Github, 
  Instagram,
  Sparkles,
  Layers
} from 'lucide-react';
import { BrandMark } from './Brand';
import { COMPANY, NAV_LINKS } from '../data/company';
import { 
  NavigateTop, 
  ScrollProgressBar, 
  BackToTop, 
  WhatsAppFloatingButton, 
  CustomCursor 
} from './Utils';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      {/* Scroll to Top on Navigation */}
      <NavigateTop />

      {/* Progress Bar & Custom Cursor */}
      <ScrollProgressBar />
      <CustomCursor />
      <BackToTop />
      <WhatsAppFloatingButton />

      {/* Luxury Editorial Topline Bar */}
      <aside className="topline" aria-label="Syndicate Announcement">
        <div className="topline-inner">
          <span className="topline-left">
            <span className="live-dot" /> 
            MVP SYNDICATE · INDEPENDENT DIGITAL ENGINEERING EMPIRE
          </span>
          <span className="topline-center">
            {COMPANY.subTagline}
          </span>
          <span className="topline-right">
            DIRECT FOUNDER HOTLINE: <a href={`tel:${COMPANY.founder.phone}`}>+91 93631 66713</a>
          </span>
        </div>
      </aside>

      {/* Primary Sticky Navbar */}
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-brand-link" aria-label="MVP Syndicate Home">
            <BrandMark compact />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="nav-right-actions">
            <a 
              href={COMPANY.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-quick"
              title="Quick WhatsApp consultation with founder"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <Link className="button button-gold nav-cta" to="/contact">
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </Link>

            <button 
              className="menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.nav 
              className="mobile-nav-panel"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="mobile-nav-header">
                <span className="eyebrow">NAVIGATION DIRECTORY</span>
                <span className="mobile-nav-tagline">ENGINEER THE EXTRAORDINARY</span>
              </div>

              <div className="mobile-nav-links">
                {NAV_LINKS.map((link, idx) => (
                  <NavLink 
                    key={link.path} 
                    to={link.path} 
                    end={link.path === '/'}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-num">0{idx + 1}</span>
                    <span className="mobile-nav-text">{link.name}</span>
                    <ChevronRight size={18} className="mobile-nav-arrow" />
                  </NavLink>
                ))}
              </div>

              <div className="mobile-nav-footer">
                <div className="mobile-contact-card">
                  <span className="mobile-contact-title">Direct Connection · Manoj (Founder)</span>
                  <a href={`tel:${COMPANY.founder.phone}`} className="mobile-contact-item">
                    <Phone size={15} /> {COMPANY.founder.phone}
                  </a>
                  <a 
                    href={COMPANY.contact.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mobile-contact-item highlight"
                  >
                    <MessageCircle size={15} /> WhatsApp Project Enquiry
                  </a>
                  <a href={`mailto:${COMPANY.contact.email}`} className="mobile-contact-item">
                    <Mail size={15} /> {COMPANY.contact.email}
                  </a>
                </div>

                <Link 
                  to="/contact" 
                  className="button button-gold mobile-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Commence Project Enquiry <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Transition Container */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname} 
          initial={{ opacity: 0, y: 14 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }} 
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="main-content"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Luxury Footer */}
      <footer className="footer">
        <div className="footer-top">
          {/* Col 1: Identity & Ethos */}
          <div className="footer-col brand-col">
            <BrandMark showTagline={false} />
            <p className="footer-ethos">
              MVP Syndicate translates Ravana's legendary intellectual strength and multifaceted mastery into a contemporary software engineering discipline. We build systems that refuse to fail.
            </p>
            <div className="footer-founder-callout">
              <span className="founder-label">FOUNDED & DIRECTED BY</span>
              <span className="founder-name-text">Manoj — Founder</span>
              <a href={`tel:${COMPANY.founder.phone}`} className="founder-phone-link">
                +91 93631 66713
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="footer-col">
            <span className="footer-eyebrow">DIRECTORY</span>
            <ul className="footer-link-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="footer-col">
            <span className="footer-eyebrow">DISCIPLINES</span>
            <ul className="footer-link-list">
              <li><Link to="/services">Custom Software Engineering</Link></li>
              <li><Link to="/services">Luxury Web Development</Link></li>
              <li><Link to="/services">Enterprise ERP & CRM</Link></li>
              <li><Link to="/services">SaaS Product Architecture</Link></li>
              <li><Link to="/services">High-Conversion E-Commerce</Link></li>
              <li><Link to="/services">AI & Intelligent Automation</Link></li>
              <li><Link to="/services">Mission-Critical Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 4: Direct Communications */}
          <div className="footer-col contact-col">
            <span className="footer-eyebrow">CONNECT DIRECTLY</span>
            <p className="footer-contact-desc">
              All project enquiries are reviewed directly by our principal engineering leadership within 24 hours.
            </p>
            
            <div className="footer-contact-actions">
              <a href={`tel:${COMPANY.contact.phone}`} className="footer-contact-btn">
                <Phone size={14} /> {COMPANY.contact.phoneDisplay}
              </a>
              <a 
                href={COMPANY.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-contact-btn whatsapp-btn"
              >
                <MessageCircle size={14} /> WhatsApp Direct
              </a>
              <a href={`mailto:${COMPANY.contact.email}`} className="footer-contact-btn">
                <Mail size={14} /> {COMPANY.contact.email}
              </a>
            </div>

            <div className="footer-location-badge">
              <Shield size={14} className="gold-text" />
              <span>Registered in India · Serving International Clients</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} MVP SYNDICATE (mvpsyndicate.com). All rights reserved.
          </div>
          <div className="footer-motto">
            ENGINEER THE EXTRAORDINARY · NINE DIMENSIONS OF INTELLECT
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="sep">·</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="sep">·</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
