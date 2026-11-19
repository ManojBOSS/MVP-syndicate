export const SERVICES = [
  {
    id: "custom-software",
    num: "01",
    title: "Custom Software Development",
    tagline: "Purpose-engineered systems built around your exact operational reality.",
    category: "Core Engineering",
    shortDesc: "Tailored software systems engineered from first principles to automate mission-critical workflows, eliminate manual friction, and scale seamlessly with business growth.",
    problemsSolved: [
      "Off-the-shelf software failing to match specific proprietary business logic",
      "Manual data re-entry across disconnected legacy tools causing operational bottlenecks",
      "Inability to scale infrastructure as transaction or user volume accelerates",
      "Data security vulnerabilities and lack of compliance in third-party SaaS tools"
    ],
    features: [
      "Custom domain-driven business logic architectures",
      "High-throughput transactional data pipelines",
      "Role-based access control (RBAC) & enterprise security audits",
      "Modular microservices and event-driven architecture",
      "Comprehensive automated unit and end-to-end test suites"
    ],
    technologies: ["Node.js", "TypeScript", "Python / FastAPI", "PostgreSQL", "Docker", "Redis"],
    approach: "We begin with domain modeling and architectural discovery, establishing deterministic boundaries before writing production code with full test coverage.",
    deliverables: ["Complete Source Code & Architecture Spec", "CI/CD Deployment Pipelines", "Interactive Documentation & API Schemas", "90-Day Production Hypercare"]
  },
  {
    id: "website-design-development",
    num: "02",
    title: "Website Design & Development",
    tagline: "Luxury digital flagships engineered for international brand authority.",
    category: "Digital Flagships",
    shortDesc: "High-performance, art-directed web platforms that command market attention, convey uncompromising quality, and convert high-value prospects.",
    problemsSolved: [
      "Generic template-driven websites that diminish brand credibility and perceived value",
      "Sluggish loading speeds and poor Core Web Vitals damaging SEO rankings and conversion",
      "Inconsistent mobile experiences that fail on modern smartphones and tablets",
      "Difficult content updates causing stale messaging and developer dependencies"
    ],
    features: [
      "Bespoke luxury editorial art direction and typography hierarchy",
      "Sub-second First Contentful Paint (FCP) and perfect Core Web Vitals",
      "Fluid 60fps Framer Motion interactions and micro-animations",
      "Headless CMS integration or lightweight configurable content schemas",
      "Comprehensive multi-viewport responsiveness and strict accessibility standards"
    ],
    technologies: ["React", "Vite", "Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    approach: "We treat your digital flagship as an interactive publication—balancing editorial whitespace, cinematic visual storytelling, and obsessive front-end optimization.",
    deliverables: ["Production Web Application", "Responsive Typography & Design System", "SEO & Meta Tag Configuration", "Performance Audit Report"]
  },
  {
    id: "ecommerce-development",
    num: "03",
    title: "E-Commerce Development",
    tagline: "High-conversion commerce architectures built for friction-free buying journeys.",
    category: "Commerce Systems",
    shortDesc: "Resilient online stores and custom commerce platforms featuring frictionless checkouts, intelligent product catalogs, and automated order workflows.",
    problemsSolved: [
      "High shopping cart abandonment rates caused by friction-heavy checkout flows",
      "Database bottlenecks during flash sales, seasonal campaigns, or product drops",
      "Complicated multi-currency, multi-tax, and cross-border shipping configurations",
      "Poor synchronization between inventory levels, warehouse stock, and storefronts"
    ],
    features: [
      "Streamlined single-page checkouts with zero-latency payment gateways",
      "Intelligent instant search, facet filtering, and automated upselling logic",
      "Omnichannel inventory synchronization and automated supplier alerts",
      "Robust webhook integrations for Razorpay, Stripe, PayPal, and Shiprocket",
      "Real-time analytics dashboard with customer lifetime value tracking"
    ],
    technologies: ["React", "Shopify Storefront API", "Node.js", "PostgreSQL", "Stripe / Razorpay", "Redis"],
    approach: "We optimize every millisecond of the customer journey from catalog discovery to order confirmation, ensuring zero drop-off during peak traffic spikes.",
    deliverables: ["Full E-Commerce Platform", "Payment & Logistics Gateways", "Admin Order & Inventory Console", "Conversion Optimization Audit"]
  },
  {
    id: "enterprise-software",
    num: "04",
    title: "Enterprise Software Solutions",
    tagline: "Resilient, audit-ready systems designed for mission-critical operations.",
    category: "Core Engineering",
    shortDesc: "Large-scale software infrastructure engineered for multi-department enterprises requiring stringent data governance, multi-tenant security, and high fault tolerance.",
    problemsSolved: [
      "Siloed departmental systems unable to exchange data in real time",
      "High downtime costs caused by fragile monolithic software stacks",
      "Regulatory non-compliance regarding customer data privacy and audit logging",
      "Excessive licensing fees for rigid off-the-shelf enterprise suites"
    ],
    features: [
      "Enterprise Service Bus (ESB) and real-time message brokering",
      "Granular audit trails with immutable event logging",
      "Single Sign-On (SSO) with SAML, OAuth2, and active directory sync",
      "Disaster recovery architecture with multi-region failover",
      "Comprehensive telemetry, distributed tracing, and automated health checks"
    ],
    technologies: [".NET Core", "Java / Spring", "PostgreSQL", "Kafka", "Docker", "AWS / Azure"],
    approach: "We implement rigorous architecture documentation, zero-trust security postures, and modular service boundaries designed to withstand enterprise scale.",
    deliverables: ["Enterprise System Implementation", "Architecture Governance Blueprint", "Security & Pen-Test Compliance Suite", "SLA & Disaster Recovery Plan"]
  },
  {
    id: "erp-development",
    num: "05",
    title: "ERP Development",
    tagline: "Unified operating intelligence connecting finance, operations, and supply chains.",
    category: "Operational Platforms",
    shortDesc: "Custom Enterprise Resource Planning suites that centralize procurement, inventory, manufacturing, human capital, and real-time ledger accounting into one source of truth.",
    problemsSolved: [
      "Fragmented spreadsheets and outdated ERPs with exorbitant annual maintenance costs",
      "Lack of real-time visibility into inventory levels, leading to stockouts or overstock",
      "Delayed financial closing cycles and error-prone manual invoicing",
      "Inability of staff to adopt overly convoluted legacy software interfaces"
    ],
    features: [
      "Real-time multi-location warehouse and stock tracking with barcode scanning",
      "Automated double-entry accounting ledger and tax compliance calculation",
      "Automated purchase order approval matrices and vendor management",
      "Executive KPI dashboards with visual forecasting and drill-down metrics",
      "Intuitive, clean UI tailored specifically to reduce worker training time"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "TimescaleDB", "Docker", "Tailwind CSS"],
    approach: "We map your company's physical supply chain and financial logic first, constructing an intuitive modular system that employees actually love using.",
    deliverables: ["Modular Custom ERP Suite", "Role-Based Staff Portals", "Database Migration Scripts", "Staff Training & Video Documentation"]
  },
  {
    id: "crm-development",
    num: "06",
    title: "CRM Development",
    tagline: "Precision customer intelligence engines built to accelerate deal velocity.",
    category: "Operational Platforms",
    shortDesc: "Custom Customer Relationship Management systems built to capture leads, track deal pipelines, automate follow-ups, and empower sales teams with actionable intelligence.",
    problemsSolved: [
      "Leads falling through the cracks due to disorganized sales pipelines",
      "Generic CRMs cluttered with hundreds of unused features and exorbitant per-seat costs",
      "No automated synchronization between marketing inbound forms and sales reps",
      "Lack of historical customer communication tracking across phone, email, and WhatsApp"
    ],
    features: [
      "Interactive visual Kanban pipelines with drag-and-drop deal stage progression",
      "Automated WhatsApp and email trigger sequences based on deal status",
      "Comprehensive contact timelines consolidating calls, notes, quotes, and emails",
      "AI-driven lead scoring and win-probability forecasting",
      "Deep integration with telephony systems, VoIP, and payment gateways"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Twilio / WhatsApp API", "Redis"],
    approach: "We strip away bloat to create lightning-fast sales workflows, providing your reps with the exact context needed to close high-value accounts.",
    deliverables: ["Production CRM Platform", "Automated Communication Pipelines", "Lead Import / Migration Utility", "Managerial Analytics Suite"]
  },
  {
    id: "saas-product-development",
    num: "07",
    title: "SaaS Product Development",
    tagline: "From concept architecture to commercially scalable cloud products.",
    category: "Product Innovation",
    shortDesc: "End-to-end engineering for SaaS startups and established innovators—covering multi-tenant architectures, subscription billing, onboarding flows, and customer retention loops.",
    problemsSolved: [
      "Prolonged time-to-market leading to missed market windows and burned capital",
      "Architectural technical debt that breaks when onboarding the first 1,000 customers",
      "Complex recurring billing, tiered pricing, and seat allocation challenges",
      "High initial churn due to confusing user onboarding experiences"
    ],
    features: [
      "Isolated multi-tenant database partitioning and data privacy boundaries",
      "Automated Stripe Billing integration with tiered, usage-based, or per-seat models",
      "Self-service team invitation, role management, and audit log portals",
      "In-app telemetry to track user activation, feature usage, and retention drops",
      "Serverless or containerized autoscaling infrastructure handling variable loads"
    ],
    technologies: ["Next.js", "React", "Node.js", "FastAPI", "PostgreSQL", "Stripe", "AWS"],
    approach: "We apply rigorous MVP discipline: shipping your core value proposition rapidly, followed by telemetry-backed iterative engineering cycles.",
    deliverables: ["Production-Ready SaaS Platform", "Billing & Subscription Gateway", "Admin Analytics Console", "Continuous Deployment Pipeline"]
  },
  {
    id: "ui-ux-design",
    num: "08",
    title: "UI/UX Design & Product Strategy",
    tagline: "Tactile digital luxury engineered with mathematical clarity.",
    category: "Digital Flagships",
    shortDesc: "World-class digital product design that fuses dark aesthetic elegance, intuitive spatial hierarchy, and frictionless user flows to make complex software effortless to use.",
    problemsSolved: [
      "Cluttered, confusing interfaces that drive users away and frustrate teams",
      "Design-to-code translation gaps where final products fail to match design mocks",
      "Lack of a coherent design system leading to inconsistent UI across screens",
      "Inaccessible visual palettes that fail accessibility standards"
    ],
    features: [
      "Comprehensive Figma design system with tokens, variants, and responsive auto-layout",
      "Interactive high-fidelity prototypes simulating real data interactions",
      "Information architecture mapping and user journey friction audits",
      "Micro-interaction choreography with detailed easing and timing curves",
      "Hand-off specifications with ready-to-use CSS tokens and component contracts"
    ],
    technologies: ["Figma", "Design Tokens", "Framer Motion", "Tailwind CSS", "Storybook"],
    approach: "We design with developer empathy: every layout, spacing token, and animation is designed from the beginning to be implemented cleanly and performantly.",
    deliverables: ["Figma Design Library & Component Tokens", "Interactive UX Prototypes", "User Flow Diagrams", "Design System Documentation"]
  },
  {
    id: "api-development",
    num: "09",
    title: "API Development & Integration",
    tagline: "Secure, low-latency communication conduits powering digital ecosystems.",
    category: "Core Engineering",
    shortDesc: "Robust RESTful and GraphQL API backbones engineered for lightning-fast latency, deterministic data contracts, strict rate limiting, and bulletproof security.",
    problemsSolved: [
      "Slow, unoptimized API endpoints causing sluggish frontend responsiveness",
      "Lack of documentation causing prolonged integration cycles for third-party partners",
      "Security vulnerabilities including unauthorized data exposure and injection attacks",
      "Unversioned breaking changes causing mobile app crashes and customer churn"
    ],
    features: [
      "OpenAPI / Swagger interactive documentation with contract testing",
      "Sub-50ms caching layers utilizing Redis in-memory stores",
      "Token bucket rate limiting, IP throttling, and DDoS protection",
      "Secure OAuth2, JWT, and API key authentication flows",
      "Webhook delivery engines with exponential backoff and replay mechanisms"
    ],
    technologies: ["Node.js / Express", "FastAPI / Python", "GraphQL", "Redis", "PostgreSQL", "Postman"],
    approach: "We engineer APIs as standalone products—ensuring strict semantic versioning, zero breaking changes, and comprehensive automated regression suites.",
    deliverables: ["Production API Microservices", "Interactive OpenAPI / Swagger Documentation", "Security Audit & Rate-Limiter Suite", "SDK Integration Samples"]
  },
  {
    id: "backend-engineering",
    num: "10",
    title: "Backend Engineering & Architecture",
    tagline: "The invisible bedrock of high-availability, fault-tolerant computing.",
    category: "Core Engineering",
    shortDesc: "Heavyweight server-side engineering handling database optimization, concurrent asynchronous background workers, distributed caching, and zero-downtime scaling.",
    problemsSolved: [
      "Database connection pooling failures and unindexed queries causing CPU spikes",
      "Synchronous blocking processes that stall web servers during heavy requests",
      "Data corruption during concurrent writes or race conditions",
      "Lack of automated backups and high failover recovery times"
    ],
    features: [
      "Relational & NoSQL database architecture with automated query indexing",
      "Asynchronous job queues with BullMQ / Celery and Redis brokers",
      "Distributed transactions with ACID guarantees and idempotent consumers",
      "Zero-downtime blue/green or rolling deployment strategies",
      "Centralized structured logging with Winston / Pino and Prometheus metrics"
    ],
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    approach: "We design backends for resilience: gracefully handling network partitions, hardware degradation, and unpredictable traffic surges without data loss.",
    deliverables: ["Production Backend Codebase", "Database Migration Scripts", "Load & Stress Test Benchmark Suite", "Monitoring & Alerting Setup"]
  },
  {
    id: "application-development",
    num: "11",
    title: "Application Development (Web & Mobile)",
    tagline: "Seamless cross-platform experiences engineered for continuous utility.",
    category: "Digital Flagships",
    shortDesc: "Modern Progressive Web Apps (PWAs) and high-performance cross-platform applications delivering native-grade fluidity, offline capabilities, and instant push notifications.",
    problemsSolved: [
      "Costly redundant development cycles across separate iOS, Android, and web codebases",
      "Sluggish hybrid apps that feel clunky and unresponsive compared to native apps",
      "App store review delays holding back critical bug fixes and feature rollouts",
      "Lack of offline functionality in areas with spotty internet connectivity"
    ],
    features: [
      "High-performance single codebase targeting mobile browsers and installed desktop PWAs",
      "Offline-first state synchronization with IndexedDB and service workers",
      "Hardware-accelerated touch animations and tactile gesture controls",
      "Automated web-push notification triggers and background sync",
      "Lightweight bundle footprints ensuring instant boot-up even on 3G connections"
    ],
    technologies: ["React", "TypeScript", "Vite", "PWA Service Workers", "Capacitor / React Native", "Tailwind CSS"],
    approach: "We build applications that feel instant—optimistic UI updates, smart pre-fetching, and memory-conscious asset pipelines that conserve user battery life.",
    deliverables: ["Cross-Platform Web/Mobile App", "Service Worker & Offline Cache Engine", "Push Notification Integration", "App Store / PWA Deployment Build"]
  },
  {
    id: "maintenance-support",
    num: "12",
    title: "Website Maintenance & Engineering Support",
    tagline: "Proactive stewardship, vulnerability patching, and continuous performance tuning.",
    category: "Support & Care",
    shortDesc: "Dedicated ongoing technical maintenance, 24/7 uptime monitoring, security vulnerability patches, dependency upgrades, and rapid incident response.",
    problemsSolved: [
      "Websites breaking silently due to unmonitored server crashes or SSL expiry",
      "Security compromises resulting from outdated CMS plugins and unpatched dependencies",
      "Slow degradation of page speeds over time as media and code accumulate",
      "Lack of a trusted senior engineer on retainer when critical bugs arise"
    ],
    features: [
      "Automated 60-second interval uptime and health ping monitoring",
      "Bi-weekly security dependency audits and zero-downtime hotfix deployments",
      "Automated off-site database backups with daily restoration verification",
      "Continuous Core Web Vitals profiling and asset optimization",
      "Priority SLA support directly with the engineering team"
    ],
    technologies: ["Uptime Kuma", "GitHub Actions", "Sentry", "Cloudflare", "Dependabot", "Docker"],
    approach: "We treat your software as a living asset—actively hardening defenses and keeping dependencies pristine before issues ever reach your end customers.",
    deliverables: ["Monthly Health & Security Report", "Automated Daily Backups", "Emergency Incident SLA Response", "Allocated Monthly Engineering Hours"]
  }
];

export const SERVICE_CATEGORIES = [
  "All Capabilities",
  "Core Engineering",
  "Digital Flagships",
  "Operational Platforms",
  "Commerce Systems",
  "Support & Care"
];
