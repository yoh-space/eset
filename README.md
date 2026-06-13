# ESSET LETIWLID Charitable Organization — Website

A modern, professional Next.js website for **ESSET LETIWLID Charitable Organization**, an Ethiopian charity working across 7 mission pillars: Food Security, Cultural Heritage Preservation, Youth Technology Empowerment, Environment & Biodiversity, Rights, Community Health & Education, and Ethics & Moral Development.

Built with Next.js 16 (App Router), Tailwind CSS v4, Lucide React icons, and the Inter font family.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Font | Inter (via next/font/google) |
| Language | TypeScript |
| Forms | Controlled React components (no `<form>` tags) |

---

## Project Structure

```
eset/
├── app/
│   ├── globals.css          # Tailwind v4 theme (colors, fonts)
│   ├── layout.tsx           # Root layout: Navbar + Footer wrapper
│   ├── page.tsx             # Home page (hero, pillars, stats, programs, partners, newsletter)
│   ├── about/
│   │   └── page.tsx         # About page (story, values, team, legal info)
│   ├── programs/
│   │   └── page.tsx         # Programs page (all 7 pillars with goals & CTAs)
│   ├── get-involved/
│   │   └── page.tsx         # Get Involved page (donate, volunteer form, partnership form)
│   └── contact/
│       └── page.tsx         # Contact page (form, address, map placeholder)
├── components/
│   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   ├── Footer.tsx           # Footer with links, contact, social, copyright
│   ├── PillarCard.tsx       # Mission pillar card with dynamic icon
│   ├── ImpactStat.tsx       # Impact statistic display
│   ├── ProgramCard.tsx      # Featured program card
│   └── TeamCard.tsx         # Team member card
├── lib/
│   └── constants.ts         # All data: pillars, stats, team, partners, nav
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

---

## Pages

| Route | Page | Sections |
|-------|------|----------|
| `/` | Home | Hero, Mission, 7 Pillar Cards, Impact Stats, Featured Programs, Partners, Newsletter |
| `/about` | About Us | Story, Core Values, Team Cards, Legal/Registration Info |
| `/programs` | Programs | 7 detailed sections (icon, description, goals, CTA per pillar) |
| `/get-involved` | Get Involved | Donation CTA, Volunteer Form, Partnership Inquiry Form |
| `/contact` | Contact | Contact Form, Address/Phone/Email, Map Placeholder |

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#1a6b3c` | Deep green — headings, buttons, accents |
| `primary-dark` | `#145a32` | Darker green — gradients, hover states |
| `primary-light` | `#1e7e47` | Lighter green — subtle highlights |
| `gold` | `#e8a020` | Warm gold — CTAs, highlights, accents |
| `gold-dark` | `#d08c1a` | Darker gold — hover states |
| `gold-light` | `#f0b84a` | Lighter gold — subtle accents |
| `surface` | `#f8faf9` | Light gray — alternate section backgrounds |

### Font

- **Inter** — loaded via `next/font/google` with the `--font-inter` CSS variable
- Applied globally via Tailwind's `font-sans` theme token

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yoh-space/eset.git
cd eset

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The static output is written to `.next/`. For static export, add `output: "export"` to `next.config.ts`.

### Lint

```bash
npm run lint
```

---

## Key Conventions

- **No `<form>` HTML tags** — All forms use controlled React components with `onClick` handlers on buttons
- **No external UI libraries** — Pure Tailwind CSS only (no shadcn, MUI, etc.)
- **Realistic content** — All text is written as if for an actual launch (no Lorem Ipsum)
- **Accessibility** — Semantic HTML, descriptive alt text, keyboard-navigable menus
- **Responsive** — Mobile-first design with breakpoints at `sm` (640px), `lg` (1024px), `xl` (1280px)

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed

### Static Export

Update `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Then run `npm run build` — the static site is output to the `out/` directory.

---

## License

&copy; 2026 ESSET LETIWLID Charitable Organization. All rights reserved.
