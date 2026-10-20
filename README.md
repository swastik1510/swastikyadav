# Swastik Yadav · Portfolio & Resume Website

A fast, static portfolio and resume website built with clean semantic HTML, vanilla CSS, and JavaScript. Inspired by the editorial, minimalist paper aesthetic and functional design of [Ronnie Wong's Resume](https://ronniewong.cc/resume.html).

---

## 🌟 Highlights & Features

- **Instant Zero-Latency Load Time:** 100% static files. No heavy client-side frameworks, no cold starts, no server sleep delays. Loads globally in under 50ms via Edge CDN.
- **Auto / Light / Dark Mode:** Elegant theme switcher supporting system preference (`auto`), crisp paper light mode, and obsidian dark mode with zero theme flickering on page load.
- **Recruiter-Friendly Print & PDF Engine:** Click **"Print / PDF"** (or press `Ctrl+P` / `Cmd+P`) to generate an ATS-friendly, clean, single/two-page PDF formatted exclusively for hiring teams.
- **One-Click Email Copy:** Built-in copy button with a floating confirmation toast.
- **Complete Resume Sections:**
  - Header & Contact Links (Email, Phone, LinkedIn, GitHub)
  - Executive Summary
  - Core Competencies & Skills (Product Strategy, 0-to-1, PRDs, SQL, etc.)
  - Work Experience (Head of Product at Miles Wealth)
  - Selected Projects (Salary SIP & Vertex Investment Intelligence)
  - Education & Honors (VIT Bhopal, GVSDP Scholar, Higher Secondary)
  - Research Experience (Cybersecurity Threats Against Seniors)
- **Search Engine & Social Previews (SEO):** Full OpenGraph, Twitter Cards, and Schema.org `Person` JSON-LD structured data.

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

## 🌐 Instant Always-On Hosting Setup

Because this is a pure static website, it can be hosted on **Global Edge Networks** with **99.99% uptime** and **zero cost**. It will **never sleep or spin down** (unlike containers on Render or Heroku that take 30-50s to wake up).

### Option 1: GitHub Pages (Recommended — 2 Minutes)

1. Create a repository on GitHub (e.g., `swastikyadav` or `swastik1510.github.io`).
2. Push your files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/swastik1510/swastikyadav.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Source: Deploy from a branch** -> branch: `main` / `root`.
   - Click **Save**.
4. Your website is instantly live at `https://swastik1510.github.io/swastikyadav` (or `https://swastik1510.github.io`).

---

### Option 2: Cloudflare Pages or Vercel (Fastest Global CDN)

- **Cloudflare Pages:** Connect your GitHub repo, select framework **None / Static HTML**, output directory `/`. Cloudflare provides 300+ edge locations for sub-30ms load times worldwide.
- **Vercel:** Run `npx vercel` or import the GitHub repo on [vercel.com](https://vercel.com). Instant SSL and continuous deployment.

---

## 🏷️ Setting up Custom Domain (`swastikyadav.com` / `swastikyadav.in`)

When you buy `swastikyadav.com` (or `.in` / `.dev`) from providers like Namecheap, Google/Squarespace, or GoDaddy:

1. **For GitHub Pages:**
   - The `CNAME` file in this repository already specifies your domain.
   - In your domain registrar's DNS settings, add:
     - **Apex A Records** (pointing to GitHub Pages IP addresses):
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - **CNAME Record**:
       - Name: `www`
       - Value: `swastik1510.github.io`
   - Check **"Enforce HTTPS"** in GitHub Pages Settings.

---

## 📁 File Structure

```text
├── index.html       # Primary resume & portfolio page
├── resume.html      # Direct alias for /resume.html
├── styles.css       # Editorial styling, theme variables, and @media print
├── script.js        # Theme toggle, clipboard copy, and print handlers
├── favicon.svg      # Minimalist SVG monogram
├── robots.txt       # Search engine crawler directives
├── sitemap.xml      # XML sitemap for SEO
├── CNAME            # Domain routing file for custom domain
└── README.md        # Documentation and deployment guide
```
