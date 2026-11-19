export const PROJECTS = [
  {
    id: "elysian-haute-horlogerie",
    num: "01",
    title: "Elysian Haute Horlogerie",
    category: "Commerce Systems",
    clientType: "Luxury Watchmaker & Private Vault",
    year: "2026",
    tagline: "Frictionless digital flagship with immersive 3D time-piece discovery.",
    type: "Digital Flagship / Luxury E-Commerce",
    isConcept: true,
    accentColor: "#C8A45D",
    heroImage: "/brand/mvp-emblem-hd.png",
    overview: "An art-directed, ultra-high-performance online private viewing suite engineered for high-net-worth collectors. Featuring sub-second asset streaming, multi-currency escrow checkout, and private consultation scheduling.",
    challenge: "Traditional luxury e-commerce platforms struggle with heavy visual assets, causing sluggish 4+ second load times that erode brand prestige and high-intent buyer trust.",
    solution: "Engineered a headless React architecture with automated edge image quantization, sub-second progressive rendering, and zero-latency single-page checkout.",
    outcome: "Achieved a 99/100 Google Lighthouse score, 420ms First Contentful Paint, and a smooth 60fps interaction profile across both high-end desktop displays and mobile viewports.",
    architecture: [
      "Edge-quantized asset delivery with WebP/AVIF dynamic negotiation",
      "Headless checkout with secure multi-signature escrow hooks",
      "Framer Motion micro-interaction physics tuned for luxury editorial pacing",
      "Zero-dependency custom audio tactile feedback for interactive dials"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Cloudflare Workers", "Stripe Private API"],
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "First Contentful Paint", value: "420ms" },
      { label: "Frame Rate Performance", value: "60 FPS" },
      { label: "Asset Payload Reduced", value: "-68%" }
    ]
  },
  {
    id: "vanguard-operating-system",
    num: "02",
    title: "Vanguard Global Operations Hub",
    category: "Operational Platforms",
    clientType: "Supply Chain & Manufacturing Syndicate",
    year: "2026",
    tagline: "Unified ERP ledger integrating distributed warehouses and real-time logistics.",
    type: "Enterprise ERP & Supply Chain",
    isConcept: true,
    accentColor: "#8E1723",
    heroImage: "/brand/mvp-emblem-hd.png",
    overview: "A mission-critical enterprise operating platform designed to synthesize multi-country freight logistics, live stock inventories, automated customs compliance, and supplier accounts into a single deterministic view.",
    challenge: "The organization suffered from fragmented spreadsheets, disconnected legacy desktop ERP software, and an average 36-hour delay in reconciled financial ledger balance.",
    solution: "Architected a modern event-driven web ERP utilizing PostgreSQL with TimescaleDB, Redis message brokers, and sub-100ms real-time WebSocket state synchronizers.",
    outcome: "Reduced ledger reconciliation time from 36 hours to under 2 seconds, while eliminating duplicate stock entries across 14 distributed fulfillment nodes.",
    architecture: [
      "Event sourcing pattern ensuring complete non-repudiation audit trails",
      "High-throughput WebSocket layer with optimistic UI updates and auto-retry",
      "Fine-grained Role-Based Access Control (RBAC) with cryptographic session tokens",
      "Automated daily snapshot backups with geo-redundant cold storage"
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "TimescaleDB", "Redis", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Ledger Reconciliation", value: "< 2s" },
      { label: "Fulfillment Nodes", value: "14 Nodes" },
      { label: "Concurrent Transactions", value: "15,000/s" },
      { label: "Uptime Standard", value: "99.98%" }
    ]
  },
  {
    id: "strata-cloud-intelligence",
    num: "03",
    title: "Strata Cloud Intelligence Platform",
    category: "SaaS Products",
    clientType: "FinTech & Cloud Governance",
    year: "2026",
    tagline: "Multi-tenant cloud infrastructure cost monitoring and automated anomaly detection.",
    type: "B2B SaaS / Telemetry Platform",
    isConcept: true,
    accentColor: "#E4C47A",
    heroImage: "/brand/mvp-emblem-hd.png",
    overview: "A developer-first B2B SaaS platform that continuously ingests AWS, GCP, and Azure billing metrics, applying predictive machine learning to alert engineering leaders to abnormal runaway spend.",
    challenge: "Cloud teams lacked a centralized, real-time mechanism to detect runaway serverless workloads before billing cycles concluded with multi-thousand dollar surprises.",
    solution: "Built a distributed ingestion pipeline with Python FastAPI and Go background workers, paired with a React dashboard featuring interactive time-series charts.",
    outcome: "Detected infrastructure cost spikes within 45 seconds of occurrence, saving early test organizations an average of 24% on monthly compute expenditures.",
    architecture: [
      "High-throughput ingest workers written in Go handling 50k metric payloads/min",
      "TimescaleDB time-series storage with automated retention policies",
      "Multi-tenant data isolation using schema-based PostgreSQL partitioning",
      "Stripe customer billing engine with tiered metered usage webhooks"
    ],
    technologies: ["Next.js", "Python FastAPI", "Go", "PostgreSQL", "Docker", "Stripe Billing", "AWS SQS"],
    metrics: [
      { label: "Detection Latency", value: "< 45s" },
      { label: "Average Cloud Savings", value: "24%" },
      { label: "Ingestion Throughput", value: "50k/min" },
      { label: "Data Isolation", value: "100%" }
    ]
  },
  {
    id: "aura-private-client-crm",
    num: "04",
    title: "Aura Private Client CRM",
    category: "Operational Platforms",
    clientType: "Wealth Advisory & Private Family Office",
    year: "2026",
    tagline: "End-to-end client intelligence suite for confidential high-stakes advisory.",
    type: "Custom CRM & Client Portal",
    isConcept: true,
    accentColor: "#B51F2B",
    heroImage: "/brand/mvp-emblem-hd.png",
    overview: "A zero-trust client relationship management interface featuring end-to-end encrypted document sharing, bi-directional WhatsApp transaction summaries, and audit-proof interaction logs.",
    challenge: "Advisors relied on unencrypted messaging apps and unorganized email threads to exchange sensitive financial contracts, introducing regulatory liabilities.",
    solution: "Constructed a hardened private web application with WebCrypto client-side encryption, automated WhatsApp API integration, and one-click PDF contract generation.",
    outcome: "100% of confidential advisory communications brought into compliant channels, reducing client document turnaround time by 60%.",
    architecture: [
      "Client-side AES-GCM 256-bit encryption for sensitive financial attachments",
      "Official WhatsApp Cloud API webhook receiver with verified templates",
      "Dynamic PDF engine with vector rendering and cryptographic timestamps",
      "Strict content security policy (CSP) and zero third-party tracking scripts"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WebCrypto API", "WhatsApp Cloud API", "Tailwind CSS"],
    metrics: [
      { label: "Document Turnaround", value: "-60%" },
      { label: "Encryption Grade", value: "AES-256" },
      { label: "Compliance Score", value: "100%" },
      { label: "Third-party Trackers", value: "0" }
    ]
  }
];

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Commerce Systems",
  "Operational Platforms",
  "SaaS Products"
];
