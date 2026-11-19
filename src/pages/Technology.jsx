import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Cpu, 
  Server, 
  Database, 
  Cloud, 
  Bot, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck,
  Zap,
  Layers,
  Code
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data/technologies';
import { SectionHeading, CTA } from '../components/Sections';

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  "cloud-devops": Cloud,
  "ai-automation": Bot
};

export default function Technology() {
  const [selectedCatId, setSelectedCatId] = useState("frontend");
  const activeCategory = TECH_CATEGORIES.find(c => c.id === selectedCatId) || TECH_CATEGORIES[0];

  return (
    <div className="technology-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">TECHNICAL CAPABILITIES & STACK / 05</span>
          <h1 className="page-title">
            The Modern Matrix.<br />
            <em>Engineered for High Stakes.</em>
          </h1>
          <p className="page-lead">
            We reject the dogma of fashion-driven software development. We choose technologies based on deterministic benchmarks: execution speed, security guarantees, concurrency models, and multi-decade ecosystem stability.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="tech-tabs-section">
        <div className="content-container">
          <div className="tech-nav-pills">
            {TECH_CATEGORIES.map((cat) => {
              const IconComp = categoryIcons[cat.id] || Cpu;
              const isActive = selectedCatId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={16} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE CATEGORY GRID */}
      <section className="section active-tech-section">
        <div className="content-container">
          <div className="cat-overview-banner">
            <span className="eyebrow">{activeCategory.name.toUpperCase()} ARCHITECTURE</span>
            <h2 className="cat-banner-title">{activeCategory.name}</h2>
            <p className="cat-banner-desc">{activeCategory.description}</p>
          </div>

          <div className="tech-cards-grid">
            {activeCategory.techs.map((tech) => (
              <motion.div 
                key={tech.name} 
                className="tech-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="tech-card-header">
                  <span className="tech-name-text">{tech.name}</span>
                  <span className={`tech-level-badge ${tech.level.toLowerCase()}`}>{tech.level}</span>
                </div>
                <p className="tech-card-desc">{tech.desc}</p>
                <div className="tech-card-footer">
                  <span className="footer-standard">MVP Certified Runtime</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR ENGINEERING PRINCIPLES FOR TECH SELECTION */}
      <section className="section tech-philosophy-section">
        <div className="content-container">
          <SectionHeading 
            kicker="ARCHITECTURAL STANDARDS / 02"
            title={<>Why our stack remains <br /><em>rock solid over time.</em></>}
            copy="We adhere to strict engineering constraints to protect our clients from expensive rewrites and fragile dependencies."
          />

          <div className="tech-principles-grid">
            <div className="tech-principle-card">
              <Zap size={22} className="gold-text" />
              <h3>Deterministic Type Safety</h3>
              <p>Strict TypeScript across the front-end and typed models across back-ends eliminate entire classes of runtime null-pointer bugs before code ever deploys.</p>
            </div>

            <div className="tech-principle-card">
              <Database size={22} className="gold-text" />
              <h3>Relational Integrity</h3>
              <p>We prioritize ACID-compliant relational schemas (PostgreSQL) for transactional business logic, preventing the silent data corruptions common to unstructured stores.</p>
            </div>

            <div className="tech-principle-card">
              <ShieldCheck size={22} className="gold-text" />
              <h3>Zero-Trust Edge Security</h3>
              <p>Cloudflare edge caching, strict CORS headers, token-bucket rate limiters, and automated dependency CVE auditing protect your company from day zero.</p>
            </div>

            <div className="tech-principle-card">
              <Terminal size={22} className="gold-text" />
              <h3>Zero Monolithic Lock-In</h3>
              <p>Everything is containerized with Docker and cleanly documented using OpenAPI specifications. You retain full portability to host on AWS, GCP, Azure, or on-premise hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTA 
        title="Need an architectural review of your existing stack?"
        copy="Bring us your current architecture and performance bottlenecks. We will conduct a thorough technical audit and propose a modern migration path."
      />
    </div>
  );
}
