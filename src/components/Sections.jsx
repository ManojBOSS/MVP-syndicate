import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Code2, 
  PanelsTopLeft, 
  ShoppingBag, 
  Workflow, 
  Layers3, 
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  Lock,
  Zap,
  Globe2
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { PROCESS_STAGES } from '../data/process';

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

export function SectionHeading({ kicker, title, copy, align = "left", className = "" }) {
  return (
    <div className={`section-heading ${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
      {kicker && <span className="eyebrow">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
      <div className={`gold-divider ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="stats-bar-grid">
      {COMPANY.stats.map((stat, i) => (
        <motion.div 
          key={i} 
          className="stat-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="stat-number-wrap">
            <span className="stat-value">{stat.value}</span>
            {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
          </div>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-sub">Deterministic Standard</span>
        </motion.div>
      ))}
    </div>
  );
}

export function PillarsSection() {
  return (
    <div className="pillars-grid">
      {COMPANY.pillars.map((pillar) => (
        <motion.div 
          key={pillar.num} 
          className="pillar-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="pillar-num">{pillar.num}</div>
          <h3 className="pillar-title">{pillar.title}</h3>
          <p className="pillar-desc">{pillar.desc}</p>
          <div className="pillar-bottom-line" />
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceGrid({ limit = 12 }) {
  const displayServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="service-grid">
      {displayServices.map((service) => {
        const IconComponent = serviceIcons[service.num] || Code2;
        return (
          <motion.article 
            key={service.id} 
            className="service-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="card-top">
              <span className="service-number">{service.num} / 12</span>
              <span className="service-category-badge">{service.category}</span>
              <IconComponent size={22} className="service-icon" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.shortDesc}</p>
            <div className="tech-badge-list">
              {service.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="card-footer">
              <Link to="/services" className="service-explore-link">
                Explore Specification <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export function ProcessOverview() {
  return (
    <div className="process-timeline-overview">
      <div className="timeline-spine" />
      <div className="process-steps-grid">
        {PROCESS_STAGES.map((step) => (
          <div key={step.num} className="process-step-node">
            <div className="node-indicator">
              <span className="node-dot" />
              <span className="node-number">{step.num}</span>
            </div>
            <h4 className="node-name">{step.name}</h4>
            <p className="node-desc">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FounderSpotlight() {
  return (
    <div className="founder-spotlight-card">
      <div className="founder-emblem-badge">
        <div className="founder-monogram">M<span>V</span></div>
        <span className="founder-tag">EXECUTIVE LEADERSHIP</span>
      </div>
      <div className="founder-bio-wrap">
        <span className="eyebrow">FOUNDER & PRINCIPAL ARCHITECT</span>
        <h3 className="founder-name">Manoj <em>Vellingiri</em></h3>
        <p className="founder-designation">Founder, MVP Syndicate · +91 93631 66713</p>
        <p className="founder-quote">
          “We believe engineering is an intellectual responsibility. Great digital architecture is not built by taking shortcuts or adopting generic templates—it is forged through deep strategy, mathematical clarity, and obsessive craft.”
        </p>
        <div className="founder-actions">
          <a href={`tel:${COMPANY.founder.phone}`} className="button button-outline">
            <Phone size={15} /> Direct Call: +91 93631 66713
          </a>
          <a 
            href={COMPANY.contact.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-gold"
          >
            <MessageCircle size={15} /> Connect on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export function CTA({ 
  title = "Ready to Engineer the Extraordinary?", 
  copy = "Have an ambitious project, an operational bottleneck, or a digital presence that demands international authority? Connect with our engineering leadership." 
}) {
  return (
    <section className="cta-band">
      <div className="cta-ambient-glow" />
      <div className="cta-content">
        <span className="eyebrow">COMMENCE AN ENGAGEMENT</span>
        <h2 className="cta-title">{title}</h2>
        <p className="cta-copy">{copy}</p>
        <div className="cta-badges">
          <span><CheckCircle2 size={13} /> Strict NDA Protection</span>
          <span><CheckCircle2 size={13} /> Direct Architect Consultation</span>
          <span><CheckCircle2 size={13} /> 24-Hour Scoping Turnaround</span>
        </div>
      </div>
      <div className="cta-actions">
        <Link className="button button-gold cta-btn" to="/contact">
          Start a Project <ArrowUpRight size={17} />
        </Link>
        <a 
          href={COMPANY.contact.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button button-outline"
        >
          <MessageCircle size={16} /> WhatsApp Founder
        </a>
      </div>
    </section>
  );
}
