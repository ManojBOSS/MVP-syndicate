export const PROCESS_STAGES = [
  {
    num: "01",
    name: "DISCOVER",
    subtitle: "Understand business realities and decompose the problem.",
    tagline: "Clarity preceding execution.",
    overview: "Every successful system starts by discarding assumptions. We interrogate your business model, interview stakeholders, analyze legacy constraints, and determine the exact technical outcomes needed to establish unfair competitive advantage.",
    duration: "Week 1",
    activities: [
      "In-depth stakeholder and technical architecture interviews",
      "Legacy system audit and data schema reverse engineering",
      "Competitive digital benchmark and user journey pain-point mapping",
      "Scope prioritization matrix (Must-Have vs Nice-to-Have)"
    ],
    deliverables: [
      "Project Discovery Charter",
      "High-Level Requirements Document",
      "System Boundary Map",
      "Initial Risk & Feasibility Assessment"
    ],
    qualityGate: "Sign-off on deterministic problem definition and project success metrics."
  },
  {
    num: "02",
    name: "STRATEGIZE",
    subtitle: "Define architecture, data contracts, and technical direction.",
    tagline: "Architectural foundations that refuse to crumble.",
    overview: "Before writing a single line of production code, our software architects design data schemas, choose the optimal technology stack, specify API contracts, and establish security protocols to guarantee future scalability.",
    duration: "Week 2",
    activities: [
      "Database schema normalization and indexing blueprint",
      "OpenAPI / REST / GraphQL contract definitions",
      "Infrastructure capacity planning and cloud cost modeling",
      "Zero-trust security modeling and authentication design"
    ],
    deliverables: [
      "Technical Architecture Specification",
      "Database Entity-Relationship Diagram (ERD)",
      "API Contract Schemas",
      "Infrastructure & DevOps Deployment Blueprint"
    ],
    qualityGate: "Full architectural review and data contract sign-off."
  },
  {
    num: "03",
    name: "DESIGN",
    subtitle: "Create intuitive, art-directed luxury digital experiences.",
    tagline: "Where mathematics meets visceral aesthetics.",
    overview: "We construct design systems where every pixel has intention. Blending deep dark obsidian palettes, antique gold accents, and mathematical typography ratios, we build interactive prototypes that test user intuition before engineering begins.",
    duration: "Weeks 2 – 3",
    activities: [
      "Design token architecture (spacing, typography, colors, shadows)",
      "High-fidelity desktop and mobile interface compositions",
      "Micro-interaction and motion curve prototyping in Framer Motion",
      "Accessibility (WCAG AA) contrast and readability verification"
    ],
    deliverables: [
      "Complete Figma Design System",
      "Interactive Clickable Prototype",
      "Responsive Layout Specification (Mobile, Tablet, Desktop)",
      "Motion & Animation Choreography Guidelines"
    ],
    qualityGate: "Client walkthrough and aesthetic & functional approval."
  },
  {
    num: "04",
    name: "ENGINEER",
    subtitle: "Develop clean, maintainable, high-performance software.",
    tagline: "Code written with discipline, speed, and precision.",
    overview: "Our engineering squad implements the verified architecture using modern typed languages and strict component patterns. We enforce clean code standards, modularity, and automated tests throughout the implementation cycle.",
    duration: "Weeks 4 – 8",
    activities: [
      "Component-driven frontend engineering with 60fps animations",
      "High-throughput backend service and REST/GraphQL API implementation",
      "Database migration scripts and automated indexing",
      "Third-party payment, WhatsApp, and telephony integrations"
    ],
    deliverables: [
      "Production-Grade Clean Source Code",
      "Automated Unit & Integration Test Suites",
      "Staging Environment Live Previews",
      "Continuous Integration (CI) Pipeline Configuration"
    ],
    qualityGate: "Passage of all unit tests, zero critical lint errors, and code review."
  },
  {
    num: "05",
    name: "TEST",
    subtitle: "Validate functionality, quality, performance, and security.",
    tagline: "Rigorous verification under hostile conditions.",
    overview: "Quality is never an afterthought. We subject the application to automated load testing, cross-browser compatibility checks, security vulnerability scans, and strict accessibility evaluations to ensure rock-solid stability.",
    duration: "Week 9",
    activities: [
      "Automated end-to-end user journey validation",
      "Load and stress testing simulating peak concurrent traffic",
      "Security audit (OWASP Top 10, penetration testing, CORS verification)",
      "Multi-device responsive testing across iOS, Android, and Desktop"
    ],
    deliverables: [
      "QA Test Execution & Traceability Matrix",
      "Lighthouse Performance & Core Web Vitals Report",
      "Security & Vulnerability Assessment Report",
      "Resolved Bug Fix Registry"
    ],
    qualityGate: "Zero blocker/critical defects and Lighthouse score ≥ 95."
  },
  {
    num: "06",
    name: "DEPLOY",
    subtitle: "Launch and configure production infrastructure.",
    tagline: "Flawless transitions to live production traffic.",
    overview: "We execute automated, zero-downtime production deployments with SSL configuration, CDN caching rules, DDoS protection, and automated database backups. Your product goes live with zero operational disruption.",
    duration: "Week 10",
    activities: [
      "Zero-downtime blue/green or containerized production deployment",
      "Custom domain DNS configuration and Cloudflare CDN caching rules",
      "SSL/TLS security hardening and HTTP security headers",
      "Production telemetry, error monitoring, and alerting activation"
    ],
    deliverables: [
      "Live Production Application",
      "Custom Domain & HTTPS Configuration",
      "Configured Sentry / Telemetry Monitoring",
      "Handover Documentation & Repository Access"
    ],
    qualityGate: "Live smoke test verification and production health clearance."
  },
  {
    num: "07",
    name: "SUPPORT",
    subtitle: "Maintain, harden, and evolve the deployed solution.",
    tagline: "Long-term engineering stewardship.",
    overview: "Shipping is just day one. We provide proactive hypercare, monitoring uptime around the clock, updating dependencies, patching security advisories, and iteratively optimizing features based on actual customer usage.",
    duration: "Ongoing",
    activities: [
      "24/7 automated ping and health check monitoring",
      "Regular dependency audits and proactive zero-day vulnerability patching",
      "Database performance indexing and storage optimization",
      "Feature iteration roadmap and continuous improvement"
    ],
    deliverables: [
      "Monthly System Performance & Security Report",
      "Automated Offsite Database Backups",
      "Dedicated Engineering SLA Response",
      "Continuous Optimization Log"
    ],
    qualityGate: "Sustained 99.9% uptime and rapid incident response."
  }
];
