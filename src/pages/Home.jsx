import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDown, 
  MoveUpRight, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Workflow, 
  Check, 
  Phone, 
  MessageCircle, 
  ExternalLink,
  ChevronRight,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { TECH_CATEGORIES } from '../data/technologies';
import { BrandHeroEmblem, BrandMark } from '../components/Brand';
import { 
  SectionHeading, 
  StatsBar, 
  PillarsSection, 
  ServiceGrid, 
  ProcessOverview, 
  FounderSpotlight, 
  CTA 
} from '../components/Sections';

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="home-page">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-atmosphere">
          <div className="hero-dark-vignette" />
          <div className="hero-radial-glow" />
          <div className="hero-particle-field" />
        </div>

        <div className="hero-container">
          <div className="hero-copy-column">
            <motion.div 
              className="status-pill"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pulsing-beacon" />
              INDEPENDENT SOFTWARE ARCHITECTURE & DIGITAL EMPIRE
            </motion.div>

            <motion.h1 
              className="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              ENGINEER THE<br />
              <span className="serif-gold-text">EXTRAORDINARY</span>
              <span className="crimson-dot">.</span>
            </motion.h1>

            <motion.p 
              className="hero-subtext"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              MVP Syndicate designs and engineers mission-critical enterprise software, luxury web experiences, scalable e-commerce systems, and intelligent digital products. Translating intellectual mastery into dependable computing.
            </motion.p>

            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/services" className="button button-gold">
                Explore Capabilities <ArrowUpRight size={17} />
              </Link>
              <Link to="/contact" className="button button-outline">
                Start a Project <MoveUpRight size={16} />
              </Link>
            </motion.div>

            <div className="hero-footer-metadata">
              <div className="meta-item">
                <span className="meta-label">ARCHITECTURE</span>
                <span className="meta-value">Zero-Trust & High-Availability</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">DIRECT LINE</span>
                <a href={`tel:${COMPANY.founder.phone}`} className="meta-value link">
                  +91 93631 66713
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Ravana-Inspired Nine-Headed Emblem Artwork */}
          <motion.div 
            className="hero-art-column"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <BrandHeroEmblem />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={14} className="bounce-subtle" />
        </div>
      </section>

      {/* 2. MARQUEE BANNER */}
      <section className="marquee-strip" aria-hidden="true">
        <div className="marquee-container">
          <div className="marquee-content">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} className="marquee-item">
                ENGINEER THE EXTRAORDINARY <b className="gold-spark">✦</b> 
                POWERED BY INTELLIGENCE <b className="gold-spark">✦</b> 
                BUILT WITH PRECISION <b className="gold-spark">✦</b> 
                THE NINE DIMENSIONS OF INTELLECT <b className="gold-spark">✦</b>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HONEST STATISTICS SECTION */}
      <section className="section stats-section">
        <div className="content-container">
          <div className="stats-header-wrap">
            <span className="eyebrow">DETERMINISTIC METRICS / 01</span>
            <h2 className="stats-section-title">Engineered to eliminate friction, latency, and technical debt.</h2>
          </div>
          <StatsBar />
        </div>
      </section>

      {/* 4. BRAND PHILOSOPHY & RAVANA INTELLECTUAL METAPHOR */}
      <section className="section philosophy-section">
        <div className="content-container philosophy-layout">
          <div className="philosophy-aside">
            <span className="eyebrow">THE PHILOSOPHY / 02</span>
            <div className="nine-heads-callout">
              <span className="callout-num">09</span>
              <span className="callout-title">Dimensions of Intellectual Mastery</span>
              <p className="callout-desc">
                In classical lore, Ravana represented profound intellectual capability, strategic mastery, and command across multiple sciences. We channel this metaphor strictly as a standard for multidisciplinary modern engineering.
              </p>
            </div>
          </div>

          <div className="philosophy-body">
            <h2 className="philosophy-heading">
              Technology should not be generic.<br />
              It must create <em>unstoppable momentum.</em>
            </h2>
            <p className="philosophy-text">
              MVP Syndicate was founded by Manoj on the conviction that ambitious businesses are held back by cookie-cutter agencies, fragile templates, and superficial design. We approach software engineering with architectural rigour, building custom systems that withstand high transaction volumes and convey undeniable market authority.
            </p>
            <p className="philosophy-text">
              Every system we engineer—from consumer-facing digital flagships to internal ERP engines—is handcrafted with clean typed code, sub-second latency targets, and zero-compromise security boundaries.
            </p>

            <div className="philosophy-badges">
              <span className="badge-item"><Check size={14} className="gold-check" /> 100% In-House Strategy & Engineering</span>
              <span className="badge-item"><Check size={14} className="gold-check" /> Zero Generic WordPress / Theme Builders</span>
              <span className="badge-item"><Check size={14} className="gold-check" /> Direct Access to Senior Architects</span>
            </div>

            <div className="philosophy-link">
              <Link to="/about" className="text-link">
                Read Our Complete Genesis & Principles <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE MVP — 4 PILLARS OF EXCELLENCE */}
      <section className="section pillars-section">
        <div className="content-container">
          <SectionHeading 
            kicker="WHY CHOOSE MVP SYNDICATE / 03"
            title={<>Built on principles that <br /><em>never compromise.</em></>}
            copy="We operate not as outsourced ticket-closers, but as an elite digital engineering team deeply invested in your long-term technological supremacy."
          />
          <PillarsSection />
        </div>
      </section>

      {/* 6. FEATURED CAPABILITIES / SERVICES PREVIEW */}
      <section className="section services-preview-section">
        <div className="content-container">
          <div className="section-header-split">
            <SectionHeading 
              kicker="OUR CAPABILITIES / 04"
              title={<>Twelve disciplines of <br /><em>engineering excellence.</em></>}
              copy="A comprehensive array of specialized digital capabilities united under one coherent architectural standard."
            />
            <div className="header-action-wrap">
              <Link to="/services" className="button button-outline">
                View All 12 Services <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <ServiceGrid limit={6} />
        </div>
      </section>

      {/* 7. SELECTED WORK / CASE STUDY TEASER */}
      <section className="section work-preview-section">
        <div className="content-container">
          <div className="section-header-split">
            <SectionHeading 
              kicker="SELECTED ARCHITECTURES / 05"
              title={<>Thoughtful ideas.<br /><em>Engineered outcomes.</em></>}
              copy="Explore real and concept case studies demonstrating our approach to performance, security, and digital luxury."
            />
            <div className="header-action-wrap">
              <Link to="/work" className="button button-outline">
                Explore Full Portfolio <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="featured-project-card">
                <div className="project-card-header">
                  <span className="project-num">PROJECT {project.num}</span>
                  <span className="project-cat">{project.category}</span>
                </div>

                <div className="project-preview-visual">
                  <div className="visual-top-bar">
                    <span className="visual-dot red" />
                    <span className="visual-dot gold" />
                    <span className="visual-dot" />
                    <span className="visual-title">{project.title}</span>
                  </div>
                  <div className="visual-body">
                    <div className="visual-glow-ring" />
                    <span className="visual-hero-type">{project.type}</span>
                    <div className="visual-metrics-row">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="metric-pill">
                          <span className="pill-val">{m.value}</span>
                          <span className="pill-lbl">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-card-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-desc">{project.overview}</p>
                  
                  <div className="project-tech-pills">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <Link to="/work" className="project-card-link">
                    Inspect Architecture Case Study <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR 7-STAGE PROCESS SUMMARY */}
      <section className="section process-preview-section">
        <div className="content-container">
          <SectionHeading 
            kicker="THE SYNDICATE METHODOLOGY / 06"
            title={<>A deterministic path from<br /><em>concept to production.</em></>}
            copy="Our seven-stage delivery pipeline guarantees transparent progress, rigorous quality gates, and zero surprise delays."
          />
          <ProcessOverview />
          <div className="process-footer-action">
            <Link to="/process" className="text-link">
              Deep-Dive into Our 7-Stage Quality Pipeline <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY STACK PREVIEW */}
      <section className="section tech-preview-section">
        <div className="content-container">
          <SectionHeading 
            kicker="TECHNOLOGY MATRIX / 07"
            title={<>Modern, battle-tested <br /><em>engineering stack.</em></>}
            copy="We select technologies based on deterministic performance, enterprise security, and long-term maintainability."
          />

          <div className="tech-matrix-preview">
            {TECH_CATEGORIES.slice(0, 4).map((cat) => (
              <div key={cat.id} className="tech-cat-box">
                <span className="cat-box-name">{cat.name}</span>
                <div className="cat-box-list">
                  {cat.techs.slice(0, 5).map((t) => (
                    <span key={t.name} className="tech-item-badge">
                      <Zap size={11} className="gold-icon" /> {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-footer-action">
            <Link to="/technology" className="button button-outline">
              Review Full Tech Capabilities & Infrastructure <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FOUNDER SPOTLIGHT */}
      <section className="section founder-feature-section">
        <div className="content-container">
          <FounderSpotlight />
        </div>
      </section>

      {/* 11. CALL TO ACTION */}
      <CTA 
        title="Ready to engineer your next technological breakthrough?"
        copy="Whether you need a luxury digital presence, an enterprise ERP system, or a scalable SaaS platform, connect directly with our engineering leadership."
      />
    </div>
  );
}
