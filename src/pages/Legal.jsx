import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Lock, FileText, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../data/company';

export function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">LEGAL & DATA GOVERNANCE</span>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-lead">
            Last Updated: November 2026. This policy outlines how MVP Syndicate collects, protects, and governs client and visitor data in accordance with international standards.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="content-container legal-layout">
          <div className="legal-body">
            <h2>1. Information We Collect</h2>
            <p>
              When you submit a project enquiry or interact with MVP Syndicate through our website (mvpsyndicate.com), phone (+91 9363166713), WhatsApp, or direct email (hello@mvpsyndicate.com), we collect information necessary to evaluate your project scope and provide engineering services:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Full name, professional email address, telephone number, and company name.</li>
              <li><strong>Project Scope Information:</strong> Technical requirements, estimated budget tier, target delivery timeline, and operational details provided in your enquiry.</li>
              <li><strong>Technical Metadata:</strong> Anonymized server logs, browser user agent, IP address for security rate-limiting, and basic navigation metrics to prevent malicious automated bot attacks.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We process your data strictly for legitimate engineering and business purposes:
            </p>
            <ul>
              <li>To evaluate project feasibility and prepare architectural proposals.</li>
              <li>To contact you directly regarding technical discovery calls and scoping milestones.</li>
              <li>To enforce website security, rate-limiting, and protect our infrastructure from DDoS attacks.</li>
              <li>To comply with statutory financial accounting and tax reporting obligations in India.</li>
            </ul>

            <h2>3. Absolute Prohibition of Data Sale</h2>
            <p>
              MVP Syndicate will <strong>never</strong> sell, rent, monetize, or disclose your personal or company information to third-party data brokers, advertising networks, or marketing syndicates.
            </p>

            <h2>4. Mutual Non-Disclosure & Intellectual Property</h2>
            <p>
              All confidential business logic, system schemas, and commercial strategies shared during consultation or under engagement are protected under binding Mutual Non-Disclosure Agreements (NDAs). Upon final project delivery, 100% of custom developed source code and intellectual property belongs to the client.
            </p>

            <h2>5. Contact Our Data Governance Team</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data erasure, contact founder Manoj directly at <a href={`mailto:${COMPANY.contact.email}`}>{COMPANY.contact.email}</a> or call <a href={`tel:${COMPANY.founder.phone}`}>{COMPANY.founder.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function TermsOfService() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">CONTRACTUAL GOVERNANCE</span>
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-lead">
            Last Updated: November 2026. Standard engagement terms governing software architecture, digital engineering services, and website use for MVP Syndicate.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="content-container legal-layout">
          <div className="legal-body">
            <h2>1. Engagement & Scoping</h2>
            <p>
              All engineering projects executed by MVP Syndicate are governed by a mutually executed Master Services Agreement (MSA) and a detailed Statement of Work (SOW). No work commences until technical requirements and milestone criteria have been documented and approved by both parties.
            </p>

            <h2>2. Milestone Payments & Retainers</h2>
            <p>
              Payments are structured in milestone disbursements aligned with tangible deliverables (Discovery, Staging, QA Validation, Production Deployment). Retainers and ongoing maintenance subscriptions are billed on a pre-agreed monthly or annual cadence.
            </p>

            <h2>3. Intellectual Property Ownership</h2>
            <p>
              Upon receipt of full payment for each respective milestone, all custom code, design files, schemas, and configurations authored specifically for the client transfer wholly and exclusively to the client. MVP Syndicate retains ownership only of pre-existing proprietary developer tooling, boilerplate libraries, and internal build utilities.
            </p>

            <h2>4. Warranties & Hypercare</h2>
            <p>
              We provide a formal hypercare warranty following live production release to identify and resolve any defects contrary to the agreed SOW. We do not warrant third-party cloud outages (AWS, Cloudflare, payment gateway downtimes) beyond our direct engineering control.
            </p>

            <h2>5. Jurisdiction & Governance</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under these terms shall be subject to amicable arbitration or the exclusive jurisdiction of the competent courts in India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CookiePolicy() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="content-container">
          <span className="eyebrow">TECHNICAL POLICY</span>
          <h1 className="page-title">Cookie & Tracking Policy</h1>
          <p className="page-lead">
            Last Updated: November 2026. How MVP Syndicate maintains privacy-first web infrastructure with zero intrusive behavioral tracking.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="content-container legal-layout">
          <div className="legal-body">
            <h2>1. Our Privacy-First Commitment</h2>
            <p>
              MVP Syndicate maintains a strict privacy-first engineering posture. We <strong>do not</strong> employ intrusive third-party advertising cookies, cross-site tracking pixels (such as Meta Pixel or TikTok tracking), or intrusive session recording software.
            </p>

            <h2>2. Essential & Functional Cookies</h2>
            <p>
              Our website uses only strictly essential session identifiers required for site operation:
            </p>
            <ul>
              <li><strong>Session Routing:</strong> Preserves navigation state and smooth page transitions.</li>
              <li><strong>Security & DDoS Mitigation:</strong> Cloudflare edge security cookies used to detect and prevent automated malicious bots.</li>
            </ul>

            <h2>3. Managing Your Preferences</h2>
            <p>
              You may configure your browser to block or alert you about cookies at any time. Because we do not rely on tracking cookies, disabling non-essential cookies will not impair your ability to browse our website or submit project enquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
