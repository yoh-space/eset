<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:esset-letiwlid-project -->

# ESSET LETIWLID Charitable Organization — Next.js Website

## Project Goal
Build a complete, modern, single Next.js website for **ESSET LETIWLID Charitable Organization**, an Ethiopian charity. The site should be professional, visually clean, and internationally presentable — on par with top NGO sites like CARE, Plan International, and BRAC.

---

## Organization Overview
ESSET LETIWLID is an Ethiopian charitable organization working across 7 mission pillars:
1. **Food Security** — material, financial & technical support to vulnerable families
2. **Cultural Heritage Preservation** — protecting national identity and traditions
3. **Youth Technology Empowerment** — skills, entrepreneurship & digital literacy
4. **Environment & Biodiversity** — community-led conservation action
5. **Women, Children, Disabled & Elderly Rights** — social & economic protection
6. **Community Health & Education** — improving social development outcomes
7. **Ethics & Moral Development** — training, mentorship & experience sharing

---

## Site Architecture (Pages & Sections)

### 1. `/` — Home Page
- Hero section: bold headline, subheadline, CTA buttons ("Donate", "Learn More")
- Mission summary: 3–4 sentence overview of the organization
- 7 mission pillars displayed as icon cards
- Impact numbers section (e.g. families supported, youth trained, communities reached)
- Featured programs (3 cards linking to Programs page)
- Partners/affiliates logos strip
- Newsletter signup CTA

### 2. `/about` — About Us
- Organization story & founding vision
- Core values
- Team section (placeholder cards)
- Legal/registration info section

### 3. `/programs` — Our Programs
- One detailed section per pillar (7 total)
- Each with: icon, title, description, goals, and a "Get Involved" CTA

### 4. `/get-involved` — Get Involved
- Volunteer form
- Partnership inquiry section
- Donation CTA with impact statement

### 5. `/contact` — Contact
- Contact form (name, email, subject, message)
- Address, phone, email display
- Embedded Google Map placeholder

### 6. Shared Layout
- Navbar: logo + nav links + "Donate" button (sticky)
- Footer: links, social icons, copyright, registration number

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or Heroicons
- **Fonts:** Google Fonts (e.g. Inter or Plus Jakarta Sans)
- **Images:** next/image with placeholder images from Unsplash (nature, community, Ethiopia)
- **Forms:** Controlled React components (no `<form>` HTML tags, use onClick handlers)
- **Deployment-ready:** Static export or Vercel-ready

---

## Design Direction
- Color palette: deep green (#1a6b3c) + warm gold (#e8a020) + white + light gray
- Clean, minimal layout with generous whitespace
- Mobile-first, fully responsive
- Professional NGO aesthetic — inspired by care.org, plan-international.org, brac.net
- Smooth hover states and transitions on cards and buttons

---

## Deliverables
1. Full folder/file structure for the Next.js project
2. All page components with real placeholder content
3. Reusable components: Navbar, Footer, PillarCard, ImpactStat, ProgramCard, TeamCard
4. `tailwind.config.js` with custom colors and fonts
5. `README.md` with setup instructions

---

## Notes
- Use realistic placeholder content (not "Lorem Ipsum") — write as if for a real launch
- All 7 mission pillars must appear prominently throughout the site
- Prioritize accessibility (semantic HTML, alt text, keyboard nav)
- No external UI libraries (shadcn, MUI) — Tailwind only

<!-- END:esset-letiwlid-project -->
