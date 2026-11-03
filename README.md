# Swastik Yadav · Product Portfolio & Resume Website

A fast, minimalist portfolio and case study website built for **Swastik Yadav** (Head of Product & 0-to-1 Product Builder). Crafted with clean semantic HTML, custom typography, vanilla CSS, and JavaScript.

---

## 🌟 Multi-Page Portfolio Architecture

The website is structured into 4 dedicated pages connected via a unified sticky navigation bar:

1. **Home (`index.html` / `/`):**
   - High-impact hero introducing Swastik's product leadership and 0-to-1 ethos.
   - Featured Work highlight card for **Salary SIP** (Miles Wealth).
   - Selected Project highlight card for **Vertex** (Investment Intelligence Platform).
   - Core product competencies: 0-to-1 Strategy, User Discovery, Fintech Rails, and Quantitative Rigor.
   - Direct CTA buttons to Work, Projects, Resume, and Email Copy.

2. **Work (`work.html` / `/work`):**
   - In-depth Product Case Study for **Salary SIP** at Miles Wealth.
   - **Executive Overview & Role:** Head of Product owning ideation to launch.
   - **01 Problem & Opportunity:** The core thesis: *"What if saving happened before spending — directly at the source of income?"*
   - **02 User Research & Validation:** 20+ qualitative interviews with employees and corporate HR.
   - **03 Product Definition & Experience:** Core capabilities and mobile product showcase (`assets/salary-sip.png`) highlighting Contribution Setup & Goal Selection.
   - **04 Ecosystem Partnerships:** Deep dive into Razorpay, FundsNet, Xoxoday, and Zoho Payroll integrations.
   - **Launch & Execution:** 0-to-1 launch ownership.

3. **Projects (`projects.html` / `/projects`):**
   - Deep dive into **Vertex — Investment Intelligence Platform**.
   - Quantitative metric callout badges:
     - **250K+** stock-level daily records trained & evaluated
     - **40+** quantitative factor dimensions
     - **63-day** forward trading-day prediction horizon
   - Direct link to live platform: [Explore Live Website ↗](https://vertex-engine.onrender.com/)
   - Methodological breakdown: The Problem, How I Approached It, 3 Key Outputs (Outperformance Probability, Expected Alpha, Factor Attribution), and Key Features.
   - Academic research highlight on cybersecurity threat mitigation.

4. **Resume (`resume.html` / `/resume`):**
   - Clean, ATS-friendly, single-sheet printable resume.
   - Interactive PDF / Print engine (`Ctrl+P` / `Cmd+P` or button trigger).
   - Direct reciprocal links to Work Case Studies and Project Architecture.

---

## ⚡ Technical Highlights

- **Pure Static Zero-Cold-Start Performance:** Under 50ms global response time via Vercel Edge / GitHub Pages.
- **Instant Light & Dark Theme Toggle:** Stored in `localStorage` with zero flicker on page load.
- **Responsive Navigation:** Fluid responsive header with active page indicators across mobile, tablet, and desktop.
- **Copy Email with Floating Toast Notification:** One-click email copying.
- **Search Engine & Social Previews (SEO):** Full OpenGraph metadata, Twitter Cards, `sitemap.xml`, `robots.txt`, and Schema.org structured data.

---

## 🚀 Running Locally

To view the website on your local machine:

1. Open a terminal in this directory:
   ```bash
   cd "e:\Antigravity Projects\Swastik Yadav Resume"
   ```
2. Run any static HTTP server:
   - **Using Python:**
     ```bash
     python -m http.server 8000
     ```
   - **Using Node:**
     ```bash
     npx serve .
     ```
3. Open `http://localhost:8000` in your web browser.

---

## 🌐 Deployment

The project includes `vercel.json` with clean URL routing (`cleanUrls: true`) and `CNAME` for `swastikyadav.com`. Simply connect the repository to Vercel or GitHub Pages.
