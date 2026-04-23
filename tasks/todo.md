# Silverdale Medical — Mockup Plan

> Client-facing mockup only. No real functionality. Used to showcase redesign direction before the real build.
> Stack: Vite + TypeScript. Placeholder images via placehold.co. Generic copy throughout.

---

## Phase 0 — Project Setup
- [ ] Initialise Vite + TypeScript project (`npm create vite@latest`)
- [ ] Configure multi-page mode in `vite.config.ts` (one HTML entry per page)
- [ ] Set up folder structure (see below)
- [ ] Create `src/styles/tokens.css` — design system tokens (colours, type, spacing, radius, shadow)
- [ ] Create `src/styles/global.css` — resets, base typography, utility classes
- [ ] Create `src/components/nav.ts` + `nav.css` — shared navigation
- [ ] Create `src/components/footer.ts` + `footer.css` — shared footer
- [ ] Write `screenshot.js` in project root for visual review

---

## Design System (tokens.css)

Define once, use everywhere. Based on the current SDM brand colours observed in the screenshots.

| Token | Value | Use |
|---|---|---|
| `--color-green` | `#89c65a` | Brand green — CTAs, highlights, leaf icon |
| `--color-green-dark` | `#6aaa3d` | Hover on green buttons |
| `--color-navy` | `#032134` | Nav background, headings, strong text |
| `--color-navy-mid` | `#0a3a57` | Secondary dark surfaces |
| `--color-grey` | `#898d89` | Secondary text, "MEDICAL" wordmark colour |
| `--color-grey-light` | `#e8eae8` | Borders, dividers, subtle backgrounds |
| `--color-bg` | `#f5f7f5` | Page background (very light warm white) |
| `--color-surface` | `#ffffff` | Cards, panels |
| `--color-text` | `#032134` | Body text (matches navy) |
| `--color-muted` | `#898d89` | Secondary/caption text (matches grey) |
| `--font-heading` | `'Inter', sans-serif` | All headings |
| `--font-body` | `'Inter', sans-serif` | Body copy |
| `--radius-sm` | `6px` | Buttons, tags |
| `--radius-md` | `12px` | Cards |
| `--radius-lg` | `20px` | Hero sections |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,.06)` | Cards |
| `--shadow-md` | `0 4px 24px rgba(0,0,0,.10)` | Modals, dropdowns |

---

## Global Components

### Navigation (every page)
- Sticky top bar — stays visible on scroll
- Left: SDM logo (placeholder SVG)
- Centre: nav links — Home, About, Specialists, Fees, News, Patient Resources
- Right: phone number (tap-to-call) + "Book Appointment" button (accent colour)
- Mobile: hamburger menu collapses to a drawer
- Enrolment notice: slim banner just below nav ("We're currently accepting new enrolments — find out more")

### Footer (every page)
- Three columns: About blurb | Quick links | Contact & hours
- Single "View All Locations →" link (replaces the four map embeds)
- Social: Facebook icon link only (no embed)
- Bottom strip: Privacy Policy | © Silverdale Medical 2026
- Clean, generous padding — nothing cramped

---

## Pages

### 1. Home (`index.html`)
Based on 10 annotations identified.

**Sections to build:**
- [ ] **Hero** — Full-width, placeholder photo, headline "Your health, close to home", subline, two CTAs: "Book an Appointment" (primary) + "Meet Our Team" (ghost)
- [ ] **Action bar** — 4 icon+label buttons: Book Appointment / Repeat Scripts / Blood Results / Pay Online. Distinct styles — primary for Book, outlined for the rest
- [ ] **Info cards strip** — 3 cards (ADHD notice, Pay Bill, Online Booking). Consistent card style: icon, heading, one-line desc, link
- [ ] **Location tiles** — 3 clinic cards (Silverdale, Millwater, Watt Creek). Each: map pin icon, name, opening hours, "Get Directions" link. Consistent style
- [ ] **Services grid** — Modern icon grid with label + one-line desc per service (8–10 services). Subtle card surface, hover effect
- [ ] **Trust strip** — "Serving the community since 2008 · 4 locations · 20+ GPs · Accepting new enrolments". Consider 2–3 patient quote cards
- [ ] **"We're here for you" CTA** — Full-width warm section, placeholder team photo, headline, two buttons (Book Online + Call Us)
- [ ] **Footer**

---

### 2. About Us (`about.html`)
Based on 6 annotations identified.

**Sections to build:**
- [ ] **Hero** — Placeholder team/building photo with overlay headline "Proudly serving Silverdale and surrounding communities"
- [ ] **Our story** — Two-column: left = copy (founding, values, community), right = placeholder building photo. "Read more" expand optional
- [ ] **Meet the Team** — Grid of GP/staff cards. Each: circular placeholder headshot, name, role, 2-line bio, speciality tags. At least 6 cards to show the grid
- [ ] **Accreditations strip** — "Proud members of…" logo row: RNZCGP placeholder, Te Whatu Ora placeholder, 2–3 others
- [ ] **Footer**

---

### 3. Careers (`careers.html`)
Based on 7 annotations identified.

**Sections to build:**
- [ ] **Hero** — Team-at-work placeholder photo, headline "Grow your career in a community you love", scroll CTA
- [ ] **Why join us** — 4–6 benefit tiles: Work-life balance / Professional development / Great team / Beautiful location / Modern facilities / Community impact
- [ ] **Culture section** — Short narrative copy + landscape placeholder photo as full-width divider
- [ ] **Team photos strip** — Consistent headshots grid (same as About, subset). Name + role beneath each
- [ ] **Current openings** — 3 job cards: GP / Practice Nurse / Reception. Each: role title, location, type (FT/PT), 2-line desc, "Apply for this role" button
- [ ] **Apply CTA** — "Don't see your role? Get in touch" section with email link button
- [ ] **Aerial photo divider** — Full-width Silverdale landscape photo, light text overlay ("A great place to live and work")
- [ ] **Footer**

---

### 4. Health Alerts (`health-alerts.html`)
*(formerly Covid-19 — broadened to a living health resource)*
Based on 5 annotations identified.

**Sections to build:**
- [ ] **Page header** — Branded heading "Health Alerts & Current Guidance", last reviewed date, short intro sentence
- [ ] **Active alert card** — Highlighted card for current primary topic (e.g. Flu Season 2026). Icon, title, date, brief guidance
- [ ] **Symptom checklist** — Icon-based visual list. Each symptom: icon + label. Clean grid, easy to scan
- [ ] **What to do next CTA** — Callout box: "If you have symptoms, call us before coming in" + tap-to-call number + book online link
- [ ] **Additional guidance cards** — 2–3 cards for other topics (Covid, RSV, general illness)
- [ ] **Footer**

---

### 5. Specialists (`specialists.html`)
Based on 5 annotations identified.

**Sections to build:**
- [ ] **Page header** — Branded heading + intro: "Our visiting specialists work alongside your GP to provide integrated, specialist-level care"
- [ ] **"How it works" explainer** — 3-step horizontal flow: 1. See your GP → 2. GP arranges referral → 3. Specialist appointment booked
- [ ] **Specialist grid** — Cards for each specialist. Each: placeholder headshot, name, specialty, visiting schedule (e.g. "Every Tuesday"), 2-line bio, "Learn more" expand
- [ ] **Category filters** — Filter pills above the grid: All / Surgical / Physician / Allied Health
- [ ] **Footer**

---

### 6. Fees (`fees.html`)
Based on 6 annotations identified.

**Sections to build:**
- [ ] **Page header** — Branded heading + "Fees current as of April 2026" date badge
- [ ] **Enrolment explainer callout** — Friendly box at top: "Enrolled patients receive subsidised fees. Not enrolled yet? Enrol today →"
- [ ] **In-page anchor nav** — Sticky pill nav: Enrolled Patients | Casual Patients | Specialist Fees | Pharmacy
- [ ] **Colour legend** — Small key: Green = enrolled, Orange = casual, Grey = standard
- [ ] **Fee tables** (4 sections, one per anchor):
  - Enrolled patient fees — responsive table, green accent
  - Casual patient fees — orange accent
  - Specialist fees — neutral
  - Pharmacy — neutral
- [ ] **Pay Online CTA** — Button at top and bottom of page: "Pay Your Bill Online →"
- [ ] **Footer**

---

### 7. Latest News (`news.html`)
Based on 6 annotations identified.

**Sections to build:**
- [ ] **Page header** — "Latest News" heading + category filter tabs: All / Practice Updates / Health Information / Community
- [ ] **News card grid** — 6 article cards (2 rows of 3). Each: placeholder featured image, category tag, headline, date, 2-line excerpt, "Read more →"
- [ ] **Featured article** — First card is larger/hero-style, spans more columns
- [ ] **Newsletter signup strip** — "Get updates in your inbox" — email input + subscribe button
- [ ] **Follow on Facebook** — Simple social link button (no embed)
- [ ] **Pagination** — Simple prev/next with page indicator
- [ ] **Footer**

---

### 8. Patient Resources (`resources.html`)
*(formerly "Links")*
Based on 5 annotations identified.

**Sections to build:**
- [ ] **Page header** — "Patient Resources" heading + intro: "We've put together some trusted resources to support your health at home." + "Last reviewed: April 2026"
- [ ] **Category sections** (4 groups, each with 3–4 resource cards):
  - Government & Official Health (Ministry of Health, Healthpoint, etc.)
  - Mental Health Support
  - Children's Health
  - Chronic Condition Management
- [ ] Each resource card: organisation name, one-line description, external link icon + "Visit →" button
- [ ] **Community section** — Small callout for the Arts Centre / community partnership content
- [ ] **Footer**

---

## Folder Structure

```
src/
  components/
    nav.ts
    nav.css
    footer.ts
    footer.css
  styles/
    tokens.css
    global.css
  pages/
    home.ts
    about.ts
    careers.ts
    health-alerts.ts
    specialists.ts
    fees.ts
    news.ts
    resources.ts

index.html          (Home)
about.html
careers.html
health-alerts.html
specialists.html
fees.html
news.html
resources.html
vite.config.ts
```

---

## Build Order

1. **Phase 0** — Setup, tokens, nav, footer (shared across all pages)
2. **Home** — Most complex, sets the visual tone for everything else
3. **About** — Second most important for client impression
4. **Fees** — High patient utility, client will scrutinise closely
5. **Specialists** — Clean, fast to build once the card pattern is established
6. **Latest News** — Card pattern largely reusable from Home
7. **Health Alerts** — Short page, quick win
8. **Careers** — Mostly reuse of existing patterns
9. **Patient Resources** — Simplest page, last

---

## Screenshot Checkpoints

After each page, screenshot at:
- 1440px (desktop)
- 768px (tablet)
- 390px (mobile)

Compare against the annotations. Fix any visible gaps before moving on.

---

## Brand Assets — Confirmed

- **Logo:** `brand assets/silverdale-logo-1-scaled.jpg` — leaf icon (green) + "SILVERDALE" (navy) + "MEDICAL" (grey) wordmark
- **Hero CTA:** "Book an Appointment" (primary)

## Clinic Locations — Confirmed

| Clinic | Phone | Address |
|---|---|---|
| Silverdale Medical | 09 427 9997 | 7 Polarity Rise, Silverdale, Hibiscus Coast 0932 (Corner of Millwater Parkway & Hibiscus Coast Hwy) — Urgent Care + By Appointment |
| Millwater Medical | 09 320 0873 | 23/175 Millwater Parkway, Millwater 0992 — By Appointment |
| Weiti Creek Medical | 09 972 9133 | 3 Brian Smith Drive, Silverdale 0992 — By Appointment |
| SkinSafe Skin Cancer Clinic | 09 242 7546 | 18 Florence Avenue, Orewa 0931 — By Appointment |
