import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Layers, 
  Cpu, 
  Lock, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { SectionHeading, CTA } from '../components/Sections';
import { COMPANY } from '../data/company';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="work-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">PORTFOLIO & ARCHITECTURES / 03</span>
          <h1 className="page-title">
            Thoughtful Ideas.<br />
            <em>Engineered Outcomes.</em>
          </h1>
          <p className="page-lead">
            Every engagement begins with understanding what success looks like in measurable business terms—then engineering the resilient software architecture to get there.
          </p>

          <div className="portfolio-transparency-note">
            <Info size={16} className="gold-text" />
            <span>
              <strong>Transparency Notice:</strong> In adherence to strict client Non-Disclosure Agreements (NDAs), sensitive proprietary client codebases are showcased below via anonymized architectural concept blueprints and verified engineering benchmarks.
            </span>
          </div>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="work-filter-strip">
        <div className="content-container">
          <div className="filter-pill-list">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY SHOWCASE */}
      <section className="section portfolio-showcase-section">
        <div className="content-container">
          <div className="project-case-studies-list">
            {filteredProjects.map((project) => (
              <article key={project.id} className="case-study-row">
                {/* Visual / Blueprint Mockup */}
                <div className="case-study-visual-wrap">
                  <div className="blueprint-terminal">
                    <div className="terminal-header">
                      <div className="terminal-dots">
                        <span className="dot red" />
                        <span className="dot gold" />
                        <span className="dot" />
                      </div>
                      <span className="terminal-title">MVP // ARCHITECTURE SPEC #{project.num}</span>
                      <span className="terminal-year">{project.year}</span>
                    </div>

                    <div className="terminal-screen">
                      <div className="screen-grid-overlay" />
                      <div className="screen-center-lockup">
                        <span className="screen-badge">{project.clientType}</span>
                        <h4 className="screen-project-name">{project.title}</h4>
                        <span className="screen-project-type">{project.type}</span>
                      </div>

                      {/* Performance Metric Badges */}
                      <div className="screen-metrics-grid">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="screen-metric-cell">
                            <span className="cell-val">{m.value}</span>
                            <span className="cell-lbl">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Written Narrative */}
                <div className="case-study-content">
                  <div className="case-meta-header">
                    <span className="case-num">CASE STUDY 0{project.num}</span>
                    <span className="case-category">{project.category}</span>
                  </div>

                  <h2 className="case-title">{project.title}</h2>
                  <p className="case-tagline">{project.tagline}</p>
                  <p className="case-overview-text">{project.overview}</p>

                  <div className="case-narrative-blocks">
                    <div className="narrative-block">
                      <span className="block-label">THE CHALLENGE</span>
                      <p>{project.challenge}</p>
                    </div>

                    <div className="narrative-block">
                      <span className="block-label">OUR ARCHITECTURAL SOLUTION</span>
                      <p>{project.solution}</p>
                    </div>

                    <div className="narrative-block">
                      <span className="block-label">MEASURABLE OUTCOME</span>
                      <p>{project.outcome}</p>
                    </div>
                  </div>

                  <div className="case-tech-pills">
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="case-actions">
                    <button 
                      onClick={() => setActiveModalProject(project)}
                      className="button button-gold"
                    >
                      Inspect Deep Blueprint <ArrowUpRight size={15} />
                    </button>
                    <Link to="/contact" className="button button-outline">
                      Commission Similar Architecture <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL FOR DEEP BLUEPRINT SPEC */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div 
              className="blueprint-modal-panel"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="eyebrow">DETAILED ARCHITECTURAL BLUEPRINT</span>
                  <h3 className="modal-title">{activeModalProject.title}</h3>
                  <span className="modal-sub">{activeModalProject.type} · {activeModalProject.clientType}</span>
                </div>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <span className="modal-section-title">CORE ARCHITECTURAL PILLARS</span>
                  <ul className="modal-spec-list">
                    {activeModalProject.architecture.map((arch, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="gold-check" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <span className="modal-section-title">BENCHMARKED PERFORMANCE METRICS</span>
                  <div className="modal-metrics-grid">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="modal-metric-box">
                        <span className="metric-box-val">{m.value}</span>
                        <span className="metric-box-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <span className="modal-section-title">DEPLOYED TECHNOLOGY STACK</span>
                  <div className="modal-tech-cloud">
                    {activeModalProject.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <Link 
                  to={`/contact?project=${encodeURIComponent(activeModalProject.title)}`}
                  className="button button-gold"
                  onClick={() => setActiveModalProject(null)}
                >
                  Discuss Custom Architecture for Your Business <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CTA */}
      <CTA 
        title="Your software architecture could be our next case study."
        copy="Tell us about your upcoming project or operational challenges. We will evaluate technical feasibility and deliver a preliminary architecture blueprint."
      />
    </div>
  );
}
