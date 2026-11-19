import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  PanelsTopLeft, 
  ShoppingBag, 
  Workflow, 
  Layers3, 
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe2,
  Lock,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { SectionHeading, CTA } from '../components/Sections';

const serviceIcons = {
  "01": Code2,
  "02": PanelsTopLeft,
  "03": ShoppingBag,
  "04": ShieldCheck,
  "05": Workflow,
  "06": Zap,
  "07": Layers3,
  "08": Sparkles,
  "09": Cpu,
  "10": Lock,
  "11": Globe2,
  "12": Layers
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All Capabilities");
  const [expandedService, setExpandedService] = useState(null);

  const filteredServices = activeCategory === "All Capabilities" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">CAPABILITIES & DISCIPLINES / 02</span>
          <h1 className="page-title">
            Twelve Disciplines of<br />
            <em>Engineering Excellence.</em>
          </h1>
          <p className="page-lead">
            From high-converting luxury web flagships to fault-tolerant enterprise ERPs and multi-tenant SaaS architectures, we bring strategy, design, and heavyweight engineering into one unified partnership.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="services-filter-strip">
        <div className="content-container">
          <div className="filter-pill-list">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES CATALOGUE */}
      <section className="section services-catalogue-section">
        <div className="content-container">
          <div className="services-stack">
            {filteredServices.map((service) => {
              const IconComp = serviceIcons[service.num] || Code2;
              const isExpanded = expandedService === service.id;

              return (
                <article 
                  key={service.id} 
                  id={service.id}
                  className={`service-detail-card ${isExpanded ? 'expanded' : ''}`}
                >
                  <div className="card-primary-row" onClick={() => toggleExpand(service.id)}>
                    <div className="card-identity">
                      <span className="service-index-tag">{service.num} / 12</span>
                      <span className="service-category-tag">{service.category}</span>
                    </div>

                    <div className="card-main-info">
                      <div className="service-title-wrap">
                        <IconComp size={24} className="service-header-icon" />
                        <h2 className="service-name">{service.title}</h2>
                      </div>
                      <p className="service-tagline-text">{service.tagline}</p>
                      <p className="service-short-summary">{service.shortDesc}</p>
                    </div>

                    <div className="card-expand-toggle">
                      <button 
                        className="toggle-button"
                        aria-expanded={isExpanded}
                        aria-label={`Toggle details for ${service.title}`}
                      >
                        {isExpanded ? (
                          <><span>Collapse Specs</span> <ChevronUp size={16} /></>
                        ) : (
                          <><span>Full Specifications</span> <ChevronDown size={16} /></>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Specifications Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        className="card-drawer-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="drawer-grid">
                          {/* Column 1: Problems Addressed */}
                          <div className="drawer-column">
                            <span className="drawer-subhead">PROBLEMS ADDRESSED</span>
                            <ul className="drawer-check-list">
                              {service.problemsSolved.map((prob, idx) => (
                                <li key={idx}>
                                  <span className="red-dash">—</span>
                                  <span>{prob}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 2: Key Features & Capabilities */}
                          <div className="drawer-column">
                            <span className="drawer-subhead">ENGINEERED CAPABILITIES</span>
                            <ul className="drawer-check-list">
                              {service.features.map((feat, idx) => (
                                <li key={idx}>
                                  <CheckCircle2 size={14} className="gold-check" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 3: Approach, Technologies & Deliverables */}
                          <div className="drawer-column">
                            <span className="drawer-subhead">TECHNOLOGIES & STACK</span>
                            <div className="tech-badge-cloud">
                              {service.technologies.map((t) => (
                                <span key={t} className="tech-cloud-item">{t}</span>
                              ))}
                            </div>

                            <span className="drawer-subhead" style={{ marginTop: '20px' }}>DELIVERABLES</span>
                            <ul className="drawer-check-list">
                              {service.deliverables.map((del, idx) => (
                                <li key={idx}>
                                  <span className="gold-bullet">✦</span>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="drawer-cta-wrap">
                              <Link 
                                to={`/contact?service=${encodeURIComponent(service.title)}`}
                                className="button button-gold drawer-cta"
                              >
                                Request {service.title} Scoping <ArrowUpRight size={15} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ADVISORY CONSULTATION BANNER */}
      <section className="section advisory-banner-section">
        <div className="content-container advisory-card">
          <div className="advisory-copy">
            <span className="eyebrow">NOT SURE WHICH DISCIPLINE YOU NEED?</span>
            <h3 className="advisory-title">
              Bring us the business problem.<br />
              <em>We will engineer the architecture.</em>
            </h3>
            <p className="advisory-desc">
              Whether you are scaling an existing system or creating an entirely new platform, our engineering leadership will conduct an initial technical discovery session with zero sales pressure.
            </p>
          </div>
          <div className="advisory-actions">
            <Link to="/contact" className="button button-gold">
              Schedule Architecture Consultation <ArrowUpRight size={16} />
            </Link>
            <a 
              href={COMPANY.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button button-outline"
            >
              <MessageCircle size={16} /> WhatsApp with Founder
            </a>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTA />
    </div>
  );
}
