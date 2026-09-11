# Baba Baidyanath Medical Trust — Website

A premium, production-ready website for **Baba Baidyanath Medical Trust**, a
multi-specialty healthcare institution. Built with the Next.js App Router,
TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production build
```

## Tech stack

- **Next.js 15** (App Router, Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS** driven by centralized CSS variables
- **Framer Motion** for subtle, accessible animation
- **lucide-react** icons
- **next/font** (Inter + Plus Jakarta Sans) and **next/image**

## Project structure

```
src/
├─ app/                     # Routes (App Router)
│  ├─ layout.tsx            # Root layout, fonts, chrome, org JSON-LD
│  ├─ page.tsx              # Home
│  ├─ about/ departments/ doctors/ services/ facilities/
│  ├─ emergency/ appointment/ contact/
│  ├─ patient-information/ health-library/ careers/
│  ├─ privacy-policy/ terms/
│  ├─ sitemap.ts robots.ts icon.svg not-found.tsx loading.tsx
│
├─ components/
│  ├─ layout/               # Header, Footer, MobileMenu, Logo, SearchDialog
│  ├─ ui/                   # Button, Card, Badge, Input, Select, Textarea, Modal
│  ├─ sections/             # Hero, Overview, Departments, Doctors, Facilities, CTAs…
│  ├─ departments/ doctors/ appointments/ contact/
│  └─ common/               # Container, SectionHeading, Breadcrumb, PageHeader, Reveal…
│
├─ config/                  # site.ts (constants), navigation.ts, images.ts
├─ data/                    # types.ts, departments.ts, doctors.ts, facilities.ts, hospital.ts
└─ lib/                     # api/ (abstraction), seo.ts, motion.ts, utils.ts
```

## Theming

All colors live as HSL tokens in `src/app/globals.css` (`--primary`,
`--secondary`, `--accent`, `--background`, `--surface`, `--foreground`,
`--muted`, `--border`, …) and are wired into Tailwind in `tailwind.config.ts`.
Change a value once to re-skin the entire site.

## Content & configuration

This site follows a strict **no-fabrication** rule. Placeholder values that must
be replaced with real, hospital-supplied information live in
`src/config/site.ts`:

- `HOSPITAL_ADDRESS` / `HOSPITAL_ADDRESS_TEXT`
- `HOSPITAL_PHONE`
- `HOSPITAL_EMAIL`
- `EMERGENCY_PHONE`
- `WORKING_HOURS`, `SITE_URL`

Doctor qualifications/specialties, hospital statistics, address, phone numbers
and emergency numbers are intentionally left as clearly-marked placeholders.

## Backend integration (future)

UI never calls the backend directly — all data/mutations go through
`src/lib/api/`. Set `NEXT_PUBLIC_API_BASE_URL` (see `.env.example`) and the
app will call the ASP.NET Core Web API:

```
GET  /api/departments
GET  /api/doctors
GET  /api/facilities
POST /api/appointments
POST /api/contact
```

With no base URL set, appointment and contact forms use built-in mock flows.

## Images

Real photography goes in `public/images/**`; update `src/config/images.ts` to
reference the local paths. Remote placeholders are used until then (allow-listed
in `next.config.mjs`).
