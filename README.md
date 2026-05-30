# Me to Your Code — React Portfolio

Exact 1:1 React conversion of your static portfolio, upgraded with:
- Dynamic project pages (`/projects/:slug`)
- Single data file for all projects (`src/data/projects.js`)
- Scroll reveal animations (IntersectionObserver, same as original)
- Auto-sliding hero banner on project pages
- Image lightbox gallery
- Mobile-first responsive design
- Vercel-ready deployment

---

## Quick Start

```bash
# 1. Copy these files into your existing Vite+React project root
# 2. Install dependencies
npm install react-router-dom

# 3. Place your assets
#    public/assets/logo.png
#    public/assets/mine.png

# 4. Start dev server
npm run dev
```

---

## File Structure

```
src/
├── data/
│   └── projects.js          ← ADD / EDIT projects here only
├── hooks/
│   └── useReveal.js          ← Scroll reveal hook
├── components/
│   ├── Header.jsx / .css
│   ├── Footer.jsx / .css
│   ├── WhatsAppFloat.jsx / .css
│   ├── Hero.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Portfolio.jsx / .css
│   ├── Testimonials.jsx / .css
│   └── Contact.jsx / .css
├── pages/
│   ├── Home.jsx
│   ├── ProjectsPage.jsx / .css
│   └── ProjectDetail.jsx / .css
├── App.jsx                   ← Router + layout
├── main.jsx
└── index.css                 ← Global tokens & utilities
index.html                    ← Fonts, Font Awesome, EmailJS
vercel.json                   ← SPA rewrites for Vercel
```

---

## Adding a New Project

Open `src/data/projects.js` and add an object to the `projects` array:

```js
{
  id: 5,
  title: "My New Project",
  slug: "my-new-project",          // → URL: /projects/my-new-project
  shortDesc: "One-line teaser",
  description: "Full paragraph...",
  coverImage: "https://...",
  images: ["https://...", "https://..."],
  techStack: ["React", "Tailwind"],
  workflow: [
    { step: "01", title: "Discovery", desc: "..." },
  ],
  features: ["Feature one", "Feature two"],
  liveDemoUrl: "https://your-demo.com",
  category: "Web App",
}
```

That's it — the card, the route, and the detail page are all generated automatically.

---

## EmailJS Setup

In `src/components/Contact.jsx`, replace:

```js
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

---

## WhatsApp

In `src/components/WhatsAppFloat.jsx`, replace:

```js
const WHATSAPP_NUMBER = "919876543210";
```

---

## Deploy to Vercel

```bash
npm run build
# Push to GitHub → import in Vercel → deploy
```

`vercel.json` handles SPA client-side routing automatically.
