import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Layers, 
  Cpu, 
  ChevronRight,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';
import { PROCESS_STAGES } from '../data/process';
import { SectionHeading, CTA } from '../components/Sections';

export default function Process() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = PROCESS_STAGES[activeStageIndex];

  return (
    <div className="process-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">THE METHODOLOGY / 04</span>
          <h1 className="page-title">
            The Syndicate Protocol.<br />
            <em>Seven Stages of Precision.</em>
          </h1>
          <p className="page-lead">
            Great technology does not emerge from chaos or guesswork. Our deterministic seven-stage verification pipeline guarantees absolute clarity, predictable milestones, and zero architectural compromises from initial discovery through lifetime support.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE TIMELINE SCRUBBER */}
      <section className="timeline-scrubber-section">
        <div className="content-container">
          <div className="timeline-horizontal-nav">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`timeline-step-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="step-num">{stage.num}</span>
                  <span className="step-name">{stage.name}</span>
                  <span className="step-indicator" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE STAGE DEEP DIVE */}
      <section className="section active-stage-detail-section">
        <div className="content-container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStage.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="stage-deep-card"
            >
              <div className="stage-card-topbar">
                <div className="topbar-left">
                  <span className="stage-giant-number">STAGE {currentStage.num}</span>
                  <h2 className="stage-headline">{currentStage.name}</h2>
                </div>
                <div className="topbar-right">
                  <div className="cadence-badge">
                    <Clock size={14} className="gold-text" />
                    <span>Typical Cadence: {currentStage.duration}</span>
                  </div>
                </div>
              </div>

              <div className="stage-sub-banner">
                <p className="stage-tagline">{currentStage.tagline}</p>
                <p className="stage-overview-copy">{currentStage.overview}</p>
              </div>

              <div className="stage-breakdown-grid">
                {/* Column 1: Core Activities */}
                <div className="breakdown-card">
                  <span className="breakdown-title">
                    <Activity size={16} className="gold-text" /> CORE ENGINEERING ACTIVITIES
                  </span>
                  <ul className="breakdown-list">
                    {currentStage.activities.map((act, i) => (
                      <li key={i}>
                        <span className="gold-dash">—</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Deliverables & Artifacts */}
                <div className="breakdown-card">
                  <span className="breakdown-title">
                    <FileText size={16} className="gold-text" /> VERIFIABLE DELIVERABLES
                  </span>
                  <ul className="breakdown-list">
                    {currentStage.deliverables.map((del, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="gold-check" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quality Gate Guarantee */}
              <div className="quality-gate-banner">
                <div className="gate-icon-wrap">
                  <ShieldCheck size={24} className="gold-text" />
                </div>
                <div className="gate-info">
                  <span className="gate-title">MANDATORY QUALITY GATE</span>
                  <p className="gate-text">{currentStage.qualityGate}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stepper Navigation Buttons */}
          <div className="timeline-stepper-controls">
            <button
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStageIndex === 0}
              className="button button-outline"
            >
              ← Previous Stage
            </button>
            <span className="stepper-counter">
              STAGE {activeStageIndex + 1} OF {PROCESS_STAGES.length}
            </span>
            <button
              onClick={() => setActiveStageIndex((prev) => Math.min(PROCESS_STAGES.length - 1, prev + 1))}
              disabled={activeStageIndex === PROCESS_STAGES.length - 1}
              className="button button-gold"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </section>

      {/* 4. COMPLETE PROCESS SUMMARY TABLE */}
      <section className="section process-matrix-section">
        <div className="content-container">
          <SectionHeading 
            kicker="FULL PIPELINE OVERVIEW / 02"
            title={<>The complete lifecycle at a glance.</>}
            copy="Every project follows these deterministic milestones to ensure on-time, bug-free production launches."
          />

          <div className="process-matrix-table-wrap">
            <table className="process-matrix-table">
              <thead>
                <tr>
                  <th>STAGE</th>
                  <th>OBJECTIVE</th>
                  <th>KEY DELIVERABLE</th>
                  <th>QUALITY ASSURANCE GATE</th>
                </tr>
              </thead>
              <tbody>
                {PROCESS_STAGES.map((s) => (
                  <tr key={s.num} onClick={() => setActiveStageIndex(parseInt(s.num) - 1)} className="clickable-row">
                    <td className="matrix-stage-col">
                      <span className="matrix-num">{s.num}</span>
                      <strong className="matrix-name">{s.name}</strong>
                    </td>
                    <td>{s.subtitle}</td>
                    <td className="matrix-deliv">{s.deliverables[0]}</td>
                    <td className="matrix-gate">{s.qualityGate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTA 
        title="Experience the clarity of disciplined engineering."
        copy="Schedule an initial Discovery call with founder Manoj to map out the exact milestones and architecture for your next project."
      />
    </div>
  );
}
