import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react';
import { FAQS, FAQ_CATEGORIES } from '../data/faqs';
import { SectionHeading, CTA } from '../components/Sections';
import { COMPANY } from '../data/company';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = activeCategory === "All Questions" || faq.category === activeCategory;
    const matchesQuery = !searchQuery.trim() || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="faq-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">KNOWLEDGE BASE / 07</span>
          <h1 className="page-title">
            Frequently Asked<br />
            <em>Questions.</em>
          </h1>
          <p className="page-lead">
            Transparent answers regarding our engineering standards, project engagement models, delivery timelines, pricing methodologies, and post-launch maintenance.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER BAR */}
      <section className="faq-controls-section">
        <div className="content-container">
          {/* Live Search Bar */}
          <div className="faq-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by topic, architecture, pricing, or timeline..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pill-list">
            {FAQ_CATEGORIES.map((cat) => (
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

      {/* 3. ACCORDION LIST */}
      <section className="section faq-list-section">
        <div className="content-container">
          {filteredFaqs.length === 0 ? (
            <div className="no-faqs-found">
              <HelpCircle size={36} className="gold-text" />
              <h3>No matching questions found</h3>
              <p>We couldn't find an answer matching "{searchQuery}". Connect directly with founder Manoj to get immediate answers.</p>
              <a 
                href={COMPANY.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-gold"
              >
                <MessageCircle size={15} /> Ask on WhatsApp
              </a>
            </div>
          ) : (
            <div className="faq-accordion-stack">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndexes.includes(index);

                return (
                  <article 
                    key={index} 
                    className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    <button 
                      className="accordion-trigger"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-category-tag">{faq.category}</span>
                      <h3 className="faq-question-text">{faq.question}</h3>
                      <div className="accordion-chevron-wrap">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          className="accordion-drawer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="drawer-inner-copy">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. STILL HAVE QUESTIONS? DIRECT CALLOUT */}
      <section className="section faq-help-callout-section">
        <div className="content-container help-box">
          <div className="help-info">
            <span className="eyebrow">SPECIFIC ARCHITECTURAL INQUIRY?</span>
            <h3 className="help-title">Have a specific question not covered here?</h3>
            <p className="help-text">
              Every business challenge is unique. Founder Manoj is available for direct inquiries regarding custom technical feasibility, legacy migrations, and proprietary integrations.
            </p>
          </div>
          <div className="help-actions">
            <a href={`tel:${COMPANY.founder.phone}`} className="button button-outline">
              <Phone size={15} /> Direct Call: +91 93631 66713
            </a>
            <a 
              href={COMPANY.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button button-gold"
            >
              <MessageCircle size={15} /> WhatsApp Manoj
            </a>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTA />
    </div>
  );
}
