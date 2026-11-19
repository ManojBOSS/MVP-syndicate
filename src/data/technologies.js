export const TECH_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    description: "Ultra-fast, accessible, responsive user interfaces built with modern reactive architectures and fluid motion.",
    techs: [
      { name: "React", level: "Expert", desc: "Component architecture, hooks, and virtual DOM reconciliation for complex dynamic state." },
      { name: "Vite", level: "Expert", desc: "Lightning-fast HMR and optimized ES modules bundler delivering sub-second dev cycles." },
      { name: "TypeScript", level: "Expert", desc: "Strict type safety, self-documenting codebases, and compile-time defect elimination." },
      { name: "Next.js", level: "Advanced", desc: "Server-side rendering (SSR), static generation, and edge API routes for scalable web apps." },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility-first design token styling eliminating CSS bloat and ensuring design consistency." },
      { name: "Framer Motion", level: "Expert", desc: "Physics-based declarative animation engine powering 60fps micro-interactions." }
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    description: "Robust, scalable, high-concurrency server-side backbones handling mission-critical business transactions.",
    techs: [
      { name: "Node.js", level: "Expert", desc: "Asynchronous non-blocking I/O event loop powering high-throughput API endpoints." },
      { name: "Express", level: "Expert", desc: "Minimalist, battle-tested web framework providing flexible middleware pipelines." },
      { name: "Python", level: "Advanced", desc: "Rapid scripting, data processing, machine learning integration, and mathematical modeling." },
      { name: "FastAPI", level: "Advanced", desc: "High-performance Python API framework with automatic OpenAPI docs and type validation." },
      { name: ".NET Core", level: "Advanced", desc: "Enterprise-grade high-throughput computing with strict memory safety and enterprise integrations." },
      { name: "Go (Golang)", level: "Advanced", desc: "Compiled concurrency-first language ideal for microservices and background metric workers." }
    ]
  },
  {
    id: "database",
    name: "Database Architecture",
    description: "Structured, ACID-compliant relational schemas and high-velocity caching stores for deterministic data integrity.",
    techs: [
      { name: "PostgreSQL", level: "Expert", desc: "The world's most advanced open-source relational database with robust JSONB and indexing." },
      { name: "Redis", level: "Expert", desc: "In-memory key-value data structure store utilized for sub-millisecond caching and session queues." },
      { name: "MongoDB", level: "Advanced", desc: "Flexible document-based database engineered for dynamic schemaless catalog data." },
      { name: "MySQL", level: "Advanced", desc: "Proven relational database powering dependable transactional enterprise applications." },
      { name: "TimescaleDB", level: "Advanced", desc: "Time-series database built on PostgreSQL for real-time telemetry and financial audit logs." }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Automated continuous delivery pipelines, containerization, and edge infrastructure delivering global low latency.",
    techs: [
      { name: "Docker", level: "Expert", desc: "Containerized application packaging ensuring identical behavior across dev, staging, and prod." },
      { name: "Git & GitHub CI/CD", level: "Expert", desc: "Trunk-based development, automated testing gates, and hands-off production deployment." },
      { name: "Cloudflare", level: "Expert", desc: "Global edge CDN caching, DDoS mitigation, DNS security, and serverless edge functions." },
      { name: "AWS", level: "Advanced", desc: "Scalable cloud primitives including ECS, S3, RDS, Lambda, and SQS for enterprise workloads." },
      { name: "Vercel / Netlify", level: "Expert", desc: "Zero-latency global edge network deployments for static assets and modern frontend applications." }
    ]
  },
  {
    id: "ai-automation",
    name: "AI & Intelligent Automation",
    description: "Practical enterprise machine learning, LLM integrations, and automated decision workflows that drive real ROI.",
    techs: [
      { name: "LLM Integration", level: "Advanced", desc: "Custom RAG (Retrieval-Augmented Generation) pipelines, embeddings, and prompt orchestration." },
      { name: "Workflow Automation", level: "Expert", desc: "Webhook conduits connecting CRMs, payment gateways, WhatsApp, and internal ERP tables." },
      { name: "AI Decision Agents", level: "Advanced", desc: "Autonomous background agents designed to triage support requests and score inbound sales leads." },
      { name: "Document Extraction", level: "Advanced", desc: "Automated OCR and parsing pipelines converting scanned PDF invoices into structured database rows." }
    ]
  }
];
