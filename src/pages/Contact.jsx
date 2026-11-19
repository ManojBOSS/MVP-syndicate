import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  Send, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  ChevronDown,
  Sparkles,
  Lock
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { SERVICES } from '../data/services';
import { SectionHeading, CTA } from '../components/Sections';

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialService = searchParams.get('service') || 'Custom Software Development';

  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    requiredService: initialService,
    projectBudget: '₹1,00,000 – ₹3,00,000',
    projectTimeline: '1 to 2 Months',
    projectDescription: '',
    honeypot: '' // Anti-spam trap
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappDirectUrl, setWhatsappDirectUrl] = useState(COMPANY.contact.whatsappUrl);

  // Update WhatsApp prefilled text dynamically based on form inputs
  useEffect(() => {
    const text = encodeURIComponent(
      `Hello Manoj, I am ${formData.fullName || 'interested in MVP Syndicate'}${formData.companyName ? ' from ' + formData.companyName : ''}. ` +
      `We require: ${formData.requiredService}. Budget: ${formData.projectBudget}. Timeline: ${formData.projectTimeline}. ` +
      `${formData.projectDescription ? 'Details: ' + formData.projectDescription.substring(0, 150) : ''}`
    );
    setWhatsappDirectUrl(`https://wa.me/919363166713?text=${text}`);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn("Spam submission blocked by honeypot.");
      return;
    }

    // Basic validation
    if (!formData.fullName.trim() || !formData.businessEmail.trim() || !formData.projectDescription.trim()) {
      setStatus('error');
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setStatus('submitting');

    // Prepare mailto payload fallback
    const subject = `[Project Enquiry] ${formData.requiredService} — ${formData.fullName} (${formData.companyName || 'Private Client'})`;
    const body = 
      `MVP SYNDICATE PROJECT ENQUIRY\n` +
      `==============================\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Business Email: ${formData.businessEmail}\n` +
      `Phone Number: ${formData.phoneNumber || 'Not provided'}\n` +
      `Company / Brand: ${formData.companyName || 'Not provided'}\n` +
      `Required Service: ${formData.requiredService}\n` +
      `Estimated Budget: ${formData.projectBudget}\n` +
      `Target Timeline: ${formData.projectTimeline}\n\n` +
      `Project Scope & Objectives:\n` +
      `---------------------------\n` +
      `${formData.projectDescription}\n\n` +
      `Generated from mvpsyndicate.com at ${new Date().toISOString()}`;

    // Execute mailto dispatch
    try {
      window.location.href = `mailto:${COMPANY.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => {
        setStatus('success');
      }, 700);
    } catch (err) {
      setStatus('error');
      setErrorMessage("Could not launch default mail client. Please email us directly or connect via WhatsApp.");
    }
  };

  return (
    <div className="contact-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">START A PROJECT / 06</span>
          <h1 className="page-title">
            Let's Build What<br />
            <em>Comes Next.</em>
          </h1>
          <p className="page-lead">
            Have a critical software system to build, an operational bottleneck to automate, or a digital presence that commands international authority? Share your scope below.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT SPLIT */}
      <section className="section contact-main-section">
        <div className="content-container contact-split-grid">
          {/* Left Column: Direct Communication Channels */}
          <aside className="contact-info-aside">
            <span className="eyebrow">DIRECT COMMUNICATIONS</span>
            <h2 className="aside-headline">
              Direct connection with<br />
              <em>engineering leadership.</em>
            </h2>
            <p className="aside-subtext">
              At MVP Syndicate, you don't talk to junior account managers. All initial enquiries are evaluated directly by founder Manoj to evaluate architectural feasibility, timeline, and investment scope.
            </p>

            <div className="contact-methods-stack">
              {/* WhatsApp Primary Card */}
              <a 
                href={whatsappDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card-box whatsapp-box"
              >
                <div className="box-icon-wrap">
                  <MessageCircle size={22} />
                </div>
                <div className="box-details">
                  <span className="box-eyebrow">INSTANT MESSAGING</span>
                  <strong className="box-title">WhatsApp with Founder</strong>
                  <span className="box-hint">Fastest turnaround for quick scoping</span>
                </div>
                <ArrowUpRight size={18} className="box-arrow" />
              </a>

              {/* Direct Telephone */}
              <a href={`tel:${COMPANY.contact.phone}`} className="contact-card-box">
                <div className="box-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="box-details">
                  <span className="box-eyebrow">DIRECT TELEPHONE</span>
                  <strong className="box-title">{COMPANY.contact.phoneDisplay}</strong>
                  <span className="box-hint">Mon – Sat: 09:00 – 20:00 IST</span>
                </div>
                <ArrowUpRight size={18} className="box-arrow" />
              </a>

              {/* Official Email */}
              <a href={`mailto:${COMPANY.contact.email}`} className="contact-card-box">
                <div className="box-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="box-details">
                  <span className="box-eyebrow">OFFICIAL INBOX</span>
                  <strong className="box-title">{COMPANY.contact.email}</strong>
                  <span className="box-hint">Reviewed within 24 hours</span>
                </div>
                <ArrowUpRight size={18} className="box-arrow" />
              </a>
            </div>

            {/* Founder Credentials Badge */}
            <div className="founder-contact-card">
              <span className="founder-card-eyebrow">EXECUTIVE LEADERSHIP</span>
              <h4 className="founder-card-name">Manoj — Founder</h4>
              <p className="founder-card-role">Principal Software Architect, MVP Syndicate</p>
              <div className="founder-trust-badges">
                <span><ShieldCheck size={14} className="gold-text" /> Strict Mutual NDA</span>
                <span><Lock size={14} className="gold-text" /> 100% IP Handover</span>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Functional Project Enquiry Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="enquiry-form">
              {/* Anti-spam trap field (hidden from legitimate users) */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                style={{ display: 'none' }} 
                tabIndex="-1" 
                autoComplete="off" 
              />

              <div className="form-header">
                <span className="eyebrow">PROJECT SCOPE CHARTER</span>
                <h3 className="form-title">Tell us about your project.</h3>
                <p className="form-sub">Fields marked with an asterisk (*) are required.</p>
              </div>

              <div className="form-inputs-grid">
                {/* 1. Full Name */}
                <div className="form-field">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                {/* 2. Business Email */}
                <div className="form-field">
                  <label htmlFor="businessEmail">Business Email *</label>
                  <input
                    id="businessEmail"
                    type="email"
                    name="businessEmail"
                    required
                    placeholder="alexander@company.com"
                    value={formData.businessEmail}
                    onChange={handleChange}
                  />
                </div>

                {/* 3. Phone Number */}
                <div className="form-field">
                  <label htmlFor="phoneNumber">Phone / WhatsApp Number</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                {/* 4. Company Name */}
                <div className="form-field">
                  <label htmlFor="companyName">Company or Brand Name</label>
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    placeholder="Your Organization"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                {/* 5. Required Service */}
                <div className="form-field full-width">
                  <label htmlFor="requiredService">Primary Engineering Discipline *</label>
                  <div className="select-container">
                    <select
                      id="requiredService"
                      name="requiredService"
                      value={formData.requiredService}
                      onChange={handleChange}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.num}. {s.title}
                        </option>
                      ))}
                      <option value="Multiple Integrated Disciplines">Integrated Multi-Disciplinary Architecture</option>
                      <option value="Other Technical Advisory">Other Custom Technical Scope</option>
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>

                {/* 6. Estimated Budget */}
                <div className="form-field">
                  <label htmlFor="projectBudget">Estimated Investment Budget</label>
                  <div className="select-container">
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                    >
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Initial Flagship / Audit)</option>
                      <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000 (Complete Platform)</option>
                      <option value="₹3,00,000 – ₹8,00,000">₹3,00,000 – ₹8,00,000 (Custom ERP / SaaS)</option>
                      <option value="₹8,00,000+">₹8,00,000+ (Large Enterprise Infrastructure)</option>
                      <option value="To Be Determined">To Be Determined Based on Scoping</option>
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>

                {/* 7. Target Timeline */}
                <div className="form-field">
                  <label htmlFor="projectTimeline">Target Launch Timeline</label>
                  <div className="select-container">
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleChange}
                    >
                      <option value="Immediate (Under 3 Weeks)">Immediate (Accelerated Sprint)</option>
                      <option value="1 to 2 Months">1 to 2 Months (Standard Lifecycle)</option>
                      <option value="3 to 6 Months">3 to 6 Months (Multi-Phase Enterprise)</option>
                      <option value="Flexible / Long-Term">Flexible / Exploratory Advisory</option>
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>

                {/* 8. Project Description */}
                <div className="form-field full-width">
                  <label htmlFor="projectDescription">Project Scope & Objectives *</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={5}
                    placeholder="Briefly describe what you are looking to engineer, your core business objectives, and any critical integration requirements..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Form Status Messages */}
              {status === 'error' && (
                <div className="form-status-alert error">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="form-status-alert success">
                  <CheckCircle2 size={16} />
                  <span>
                    Your enquiry details have been drafted in your default email client. You can also message Manoj directly via WhatsApp below for instant confirmation!
                  </span>
                </div>
              )}

              {/* Submit Button & Direct WhatsApp Alternative */}
              <div className="form-action-row">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="button button-gold submit-btn"
                >
                  {status === 'submitting' ? (
                    <span>Preparing Dispatch...</span>
                  ) : (
                    <>
                      <span>Transmit Project Enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <a 
                  href={whatsappDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button button-outline whatsapp-submit-alt"
                >
                  <MessageCircle size={15} /> Send via WhatsApp
                </a>
              </div>

              <div className="form-privacy-disclaimer">
                <Lock size={12} className="gold-text" />
                <span>
                  Your information is treated with strict confidentiality. No data is ever shared with third parties or advertising brokers.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
