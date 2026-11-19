# MVP SYNDICATE — Corporate Digital Platform

> **ENGINEER THE EXTRAORDINARY.**  
> *Powered by Intelligence. Built with Precision.*

A luxury multi-page React + Vite web platform engineered for **MVP SYNDICATE**, an elite software architecture, digital solutions, and custom development company.

The visual identity is inspired by the legendary intellectual strength, strategic mastery, and ambition associated with Ravana—interpreting the metaphor of the nine heads as multidisciplinary engineering excellence, rendered in an obsidian, antique gold, and deep crimson palette.

---

## Key Highlights & Architecture

- **Official Brand Artwork**: High-definition 9-headed King emblem centerpiece with golden crown, trishul, and crimson silk ribbon.
- **Nine Complete Pages**:
  - **Home (`/`)**: Full-screen cinematic hero, company statistics, brand mindset & philosophy, featured capabilities, selected case studies, 4 engineering pillars, 7-stage delivery summary, tech stack, and direct founder spotlight.
  - **About Us (`/about`)**: Company genesis, the 9 dimensions of intellectual mastery, mission & vision, core engineering principles, and founder profile.
  - **Services (`/services`)**: Comprehensive breakdown of all 12 disciplines (Custom Software, Luxury Web, E-Commerce, Enterprise Solutions, ERP, CRM, SaaS, UI/UX, API Integration, Backend Engineering, Applications, Support), with interactive filtering and expandable specification drawers.
  - **Work / Portfolio (`/work`)**: Architectural case studies, problem-solution-outcome breakdowns, live performance metrics, and interactive blueprint modal.
  - **Our Process (`/process`)**: Interactive 7-stage verification protocol (Discover, Strategize, Design, Engineer, Test, Deploy, Support) with deliverables, timelines, and mandatory quality gates.
  - **Technology (`/technology`)**: Full stack matrix spanning Frontend, Backend, Database Architecture, Cloud/DevOps, and AI & Automation.
  - **Contact (`/contact`)**: High-converting project enquiry flow, client-side validation, spam honeypot trap, dynamic WhatsApp generator, and direct phone/email connections.
  - **FAQ (`/faq`)**: Live search bar, category filtering, and animated expandable accordions.
  - **Legal (`/privacy`, `/terms`, `/cookies`)**: Comprehensive corporate governance and privacy-first commitments.
- **Advanced Interactive Features**:
  - Desktop custom ambient gold cursor follower
  - Top scroll progress bar
  - Sticky glass navbar with route highlights
  - Mobile slide-out drawer
  - Floating direct WhatsApp connection with founder Manoj (+91 9363166713)
  - Back to top button
  - WCAG AA accessibility & `prefers-reduced-motion` compliance

---

## Technical Stack

- **Framework**: React 18 + Vite 6
- **Routing**: React Router 6 (SPA with zero-latency route switching)
- **Animation**: Framer Motion (physics-driven 60fps micro-interactions)
- **Icons**: Lucide React
- **Typography**: Playfair Display, Cinzel, Manrope, JetBrains Mono
- **Styling**: Modular CSS custom design tokens (Obsidian Black `#070707`, Antique Gold `#C8A45D`, Deep Crimson `#8E1723`, Warm Ivory `#F4EFE5`)

---

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ LTS recommended)
- npm or yarn

### Installation

```bash
cd mvp-syndicate
npm install
```

### Local Development

```bash
npm run dev
```

The application runs at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

Production-ready assets are compiled into `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## Content Editing Guide

All dynamic content is organized in `src/data/`:

| File | Purpose |
|------|---------|
| `src/data/company.js` | Company identity, founder info, phone numbers, WhatsApp link, statistics, and pillars |
| `src/data/services.js` | All 12 services, problem statements, features, technologies, deliverables |
| `src/data/projects.js` | Case studies, client types, metrics, challenges, and architectural solutions |
| `src/data/process.js` | The 7-stage methodology, activities, deliverables, and quality gates |
| `src/data/technologies.js`| Stack categories, proficiency ratings, and architectural justifications |
| `src/data/faqs.js` | Categorized questions and answers |

---

## Deployment & Domain Setup

### Deploying to Vercel
1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. The build command is `npm run build` and output directory is `dist`.
4. SPA routing is already configured in `vercel.json`.

### Deploying to Netlify
1. Connect the repository in [Netlify](https://netlify.com).
2. SPA redirect rules are already configured in `netlify.toml`.

### Connecting Custom Domain (`mvpsyndicate.com`)
1. In your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap), point an **A Record** to your host's IP address (or CNAME for `www.mvpsyndicate.com`).
2. Enable automatic SSL/TLS certificate issuing.

---

## Executive Contact

- **Founder**: Manoj
- **Direct Telephone**: +91 9363166713
- **Official Email**: hello@mvpsyndicate.com
- **WhatsApp**: [Chat with Manoj](https://wa.me/919363166713)
- **Primary Domain**: [mvpsyndicate.com](https://mvpsyndicate.com)
