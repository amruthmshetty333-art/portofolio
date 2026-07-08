# Amruth M Shetty - Professional Developer Portfolio

A premium, modern, fully responsive, and SEO-optimized developer portfolio website built using **React**, **TypeScript**, and **Tailwind CSS**. Designed to immediately showcase engineering expertise to technical recruiters.

---

## 🚀 Live Demo & Links

Depending on your GitHub Pages configuration:
* **User Page URL**: `https://amruth-shetty.github.io/` (If repository is named `amruth-shetty.github.io`)
* **Project Page URL**: `https://amruth-shetty.github.io/portfolio/` (If repository is named `portfolio`)

---

## ✨ Features

* **Premium Theme**: Modern slate/navy background with royal blue, sky blue, and teal accents.
* **Interactive Particle Background**: Custom HTML5 canvas particles tracking mouse movements for high-performance visual depth.
* **Typing Animation**: Rotating professional statements in the hero section.
* **Tabbed Technical Skills**: Categorized representation of technical skills using modern icon assets.
* **Featured Projects**: Clean project cards. Supports interactive **System Architecture** dialog overlays for displaying system modules.
* **Education Timeline**: Animated vertical timeline showing academic credentials.
* **GitHub Integration**: Client-side fetch utilizing GitHub REST API displaying profile stats (followers, repos, stars) and pinned repo details with fallback cards.
* **Resume Actions**: Instant viewing and downloading of ATS-optimized PDF resume.
* **Contact Form**: Interactive form with built-in validation alerts, using EmailJS.

---

## 🛠️ Tech Stack

* **Core**: React.js, TypeScript, Vite
* **Styling**: Tailwind CSS (v3)
* **Animations**: Framer Motion, AOS (Animate On Scroll)
* **Icons**: React Icons (Fa, Si)
* **Forms**: EmailJS Integration

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic Pages deployment
├── public/
│   ├── resume.pdf              # Replace with your actual PDF resume
│   ├── profile.jpg             # Replace with your professional profile photo
│   ├── favicon.ico             # Site favicon
│   └── robots.txt              # robots.txt file for SEO indexing
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Responsive navigation bar
│   │   ├── SectionHeader.tsx   # Header styling for sections
│   │   └── ParticleCanvas.tsx  # Dynamic interactive background
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth (resume details, education, certificates)
│   ├── hooks/
│   │   └── useGithubData.ts    # GitHub REST API hook with rate-limiting fallback
│   ├── sections/               # Layout page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── GithubStats.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── App.tsx                 # App layout configuration
│   ├── index.css               # Global styles & glassmorphism utilities
│   └── main.tsx                # Entry point
├── tailwind.config.js          # Tailwind styling rules and custom theme colors
├── vite.config.ts              # Vite configurations using relative base pathing
└── package.json                # Project dependencies and setup commands
```

---

## 💻 Local Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amruth-shetty/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## ⚙️ Customization Guide

### 1. Update Profile Image & PDF Resume
Replace the placeholder files directly in the `public/` folder:
* Place your professional headshot image as `public/profile.jpg`.
* Place your latest resume as `public/resume.pdf`.

### 2. Configure Contact Form (EmailJS)
To make the contact form active:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Open `src/sections/Contact.tsx` and replace the placeholder keys with your credentials:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
   ```

---

## 📦 Production Build & Deploy

This project is fully configured for automated deployments to GitHub Pages using GitHub Actions:

1. Create a public repository on GitHub named `portfolio` (or `amruth-shetty.github.io`).
2. Push your local codebase to the repository on the `main` or `master` branch.
3. In your GitHub Repository:
   * Go to **Settings** > **Pages**.
   * Under **Build and deployment**, set the Source to **GitHub Actions**.
4. The deployment workflow `.github/workflows/deploy.yml` will trigger automatically, build the code, and publish it to the `gh-pages` branch.
