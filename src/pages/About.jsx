import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Target, 
  Compass, 
  Eye, 
  Layers3, 
  ShieldCheck, 
  Check, 
  Phone, 
  MessageCircle, 
  Mail,
  Award,
  Cpu,
  BrainCircuit,
  Lock
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { BrandHeroEmblem, BrandMark } from '../components/Brand';
import { SectionHeading, FounderSpotlight, CTA } from '../components/Sections';

export default function About() {
  const principles = [
    {
      num: "01",
      title: "Think Deeply First",
      desc: "We diagnose the root organizational and technical bottleneck before recommending any code. A problem accurately understood is already half-engineered.",
      icon: Target
    },
    {
      num: "02",
      title: "Build With Strict Purpose",
      desc: "Every database column, micro-interaction, and third-party library must earn its keep. We ruthlessly eliminate unnecessary bloat to protect speed and maintainability.",
      icon: Compass
    },
    {
      num: "03",
      title: "Respect The Micro-Details",
      desc: "Sub-second load times, fluid 60fps animations, semantic accessibility, zero horizontal scroll, and zero security holes are not optional bonuses—they are baseline requirements.",
      icon: Eye
    },
    {
      num: "04",
      title: "Uncompromising Accountability",
      desc: "We communicate transparently, document architectural choices rigorously, test under hostile edge conditions, and stand firmly behind the systems we deliver.",
      icon: Layers3
    }
  ];

  const dimensions = [
    { num: "01", name: "Strategic Architectural Modeling", desc: "Designing system boundaries and domain models that support exponential growth without rewrites." },
    { num: "02", name: "High-Performance Reactive UI", desc: "Constructing luxury, tactile digital flagships that convert high-value clientele with zero latency." },
    { num: "03", name: "Resilient Server-Side Engines", desc: "Building concurrent, fault-tolerant backend services capable of handling millions of requests." },
    { num: "04", name: "Transactional Database Rigour", desc: "Designing ACID-compliant schemas, optimized index plans, and ultra-fast Redis caching layers." },
    { num: "05", name: "Enterprise Security & Governance", desc: "Enforcing zero-trust authentication, cryptographic encryption, and OWASP-compliant practices." },
    { num: "06", name: "Cloud-Native Infrastructure & CI/CD", desc: "Automating zero-downtime containerized deployments, edge routing, and multi-region backups." },
    { num: "07", name: "Operational Workflow Automation", desc: "Eliminating manual data re-entry through intelligent webhook conduits and ERP/CRM pipelines." },
    { num: "08", name: "Conversion Pacing & Design Psychology", desc: "Crafting visual hierarchies and friction-free user journeys that convert visitors into revenue." },
    { num: "09", name: "Proactive Long-Term Stewardship", desc: "Continuous 24/7 uptime monitoring, proactive security updates, and dedicated engineering retainers." }
  ];

  return (
    <div className="about-page">
      {/* 1. EDITORIAL PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">ABOUT MVP SYNDICATE / 01</span>
          <h1 className="page-title">
            Built on Ambition.<br />
            <em>Grounded in Craft.</em>
          </h1>
          <p className="page-lead">
            We are an independent software architecture and digital engineering company. We partner with ambitious leaders to engineer technology that commands respect and drives unstoppable momentum.
          </p>
        </div>
      </section>

      {/* 2. THE BRAND PHILOSOPHY & RAVANA INTELLECTUAL METAPHOR */}
      <section className="section about-genesis-section">
        <div className="content-container about-grid">
          <div className="about-visual-emblem">
            <BrandHeroEmblem />
            <div className="emblem-caption-box">
              <span className="caption-gold">METAPHOR OF THE NINE HEADS</span>
              <p className="caption-text">
                Representing multidimensional intellectual mastery, strategic foresight, and relentless ambition applied strictly to modern engineering.
              </p>
            </div>
          </div>

          <div className="about-story-copy">
            <span className="eyebrow">OUR GENESIS & PHILOSOPHY</span>
            <h2 className="story-heading">
              A technology empire built for the <em>modern digital age.</em>
            </h2>
            <p className="story-paragraph">
              MVP Syndicate was founded by <strong>Manoj</strong> with a single mission: to provide ambitious businesses with software engineering of uncompromising quality. We observed an industry saturated with outsourced shops that assemble brittle WordPress plugins, generate generic templates, and disappear the moment problems arise.
            </p>
            <p className="story-paragraph">
              Our brand draws its artistic inspiration from the legendary intellectual strength, multifaceted mastery, and ambition associated with Ravana—specifically the metaphor of the nine heads representing distinct dimensions of knowledge working in unified harmony. We do not portray our brand as entertainment or mythology; rather, we treat this metaphor as a philosophical standard for holistic, multidisciplinary engineering excellence.
            </p>
            <p className="story-paragraph">
              Whether building an enterprise resource planning suite, an e-commerce platform handling cross-border commerce, or a luxury digital flagship, we bring architectural discipline, mathematical clarity, and aesthetic luxury together under one roof.
            </p>

            <div className="genesis-points">
              <div className="genesis-point">
                <BrainCircuit className="point-icon" size={20} />
                <div>
                  <h4>Intellectual Autonomy</h4>
                  <p>100% in-house architecture and engineering. No third-party outsourcing or unaccountable subcontractors.</p>
                </div>
              </div>

              <div className="genesis-point">
                <Lock className="point-icon" size={20} />
                <div>
                  <h4>Zero-Compromise Security</h4>
                  <p>Stringent data isolation, cryptographic hashing, and automated penetration audits on all releases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NINE DIMENSIONS OF ENGINEERING MASTERY */}
      <section className="section dimensions-section">
        <div className="content-container">
          <SectionHeading 
            kicker="MULTIDISCIPLINARY EXPERTISE / 02"
            title={<>The nine dimensions of <br /><em>engineering mastery.</em></>}
            copy="Our engineering squad integrates nine core technical disciplines into every engagement, ensuring your solution is balanced, scalable, and resilient."
          />

          <div className="dimensions-grid">
            {dimensions.map((dim) => (
              <div key={dim.num} className="dimension-card">
                <div className="dim-header">
                  <span className="dim-num">{dim.num}</span>
                  <span className="dim-dot" />
                </div>
                <h3 className="dim-name">{dim.name}</h3>
                <p className="dim-desc">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="section mission-vision-section">
        <div className="content-container mission-grid">
          <div className="mission-card">
            <span className="eyebrow">OUR MISSION</span>
            <h3 className="mission-title">Engineer Digital Supremacy</h3>
            <p className="mission-text">
              To engineer mission-critical software, luxury web experiences, and scalable business systems that free our clients from operational friction, elevate their market authority, and deliver measurable technological advantage.
            </p>
          </div>

          <div className="mission-card highlight">
            <span className="eyebrow">OUR VISION</span>
            <h3 className="mission-title">The Global Standard for Digital Craft</h3>
            <p className="mission-text">
              To stand as an internationally recognized technology empire known for unapologetic craftsmanship, architectural rigour, and enduring digital assets that operate reliably for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING VALUES */}
      <section className="section values-section">
        <div className="content-container">
          <SectionHeading 
            kicker="CORE PRINCIPLES / 03"
            title={<>Principles over <br /><em>empty promises.</em></>}
            copy="These four foundational principles govern every line of code we write, every architecture review we conduct, and every client conversation we hold."
          />

          <div className="values-grid">
            {principles.map((p) => (
              <article key={p.num} className="value-card">
                <div className="value-icon-wrap">
                  <p.icon size={22} className="gold-icon" />
                </div>
                <span className="value-num">{p.num}</span>
                <h3 className="value-title">{p.title}</h3>
                <p className="value-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER PROFILE — MANOJ */}
      <section className="section founder-profile-section">
        <div className="content-container">
          <FounderSpotlight />
        </div>
      </section>

      {/* 7. CTA */}
      <CTA 
        title="Ready to build technology with enduring intent?"
        copy="Initiate a direct conversation with founder Manoj to review your project scope and architectural roadmap."
      />
    </div>
  );
}
