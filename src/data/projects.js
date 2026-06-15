// =============================================
// ADD / EDIT PROJECTS HERE — single data file
// =============================================

export const projects = [
  {
    id: 1,
    title: "M2Y POS",
    slug: "Restaurant Billing POS",
    shortDesc: "Smart billing software for local eateries — combining speed, accuracy, and easy menu customization",
    description:
      "A modern POS solution built for small restaurants and hotels — offering fast billing, easy menu handling, clear day‑end sales reports, and receipts in both digital and printed form to keep daily operations simple and efficient.",
    coverImage: "/assets/projects/restaurant-pos/1.png",
    images: [
      "/assets/projects/restaurant-pos/1.png",
      "/assets/projects/restaurant-pos/2.png",
      "/assets/projects/restaurant-pos/3.png",
      "/assets/projects/restaurant-pos/4.png",
      "/assets/projects/restaurant-pos/5.png",
      "/assets/projects/restaurant-pos/6.png",

    ],
    techStack: ["Figma", "React Native", "TypeScript", "Tailwind CSS"],
    workflow: [
      { step: "01", title: "Discovery", desc: "User interviews, competitor audit, and pain-point mapping." },
      { step: "02", title: "Wireframes", desc: "Low-fidelity sketches iterated with stakeholders." },
      { step: "03", title: "Prototyping", desc: "Interactive Figma prototype for usability testing." },
      { step: "04", title: "Development", desc: "React Native implementation with accessibility standards." },
      { step: "05", title: "Testing & Launch", desc: "QA across devices and OS versions before release." },
    ],
    features: [
      "Biometric login & two-factor auth",
      "Real-time transaction feed",
      "Spending analytics with charts",
      "One-tap fund transfer",
      "Dark mode support",
      "Fully accessible (WCAG 2.1 AA)",
    ],
    liveDemoUrl: "https://example.com",
    category: "Restaurant Billing POS",
  },
  {
    id: 2,
    title: "MediCare Clinic",
    slug: "Doctor Clinic-Management Software",
    shortDesc: "quick patient booking, live queue updates, and smooth management of appointments and records.",
    description:
      "An all‑in‑one clinic management system — quick patient booking, live queue updates, smooth handling of appointments and records, direct access for doctors, and smart controls for clinic open/close timings and doctor availability",
    coverImage: "/assets/projects/doctorclinic/2.png",
    images: [
      "/assets/projects/doctorclinic/1.png",
      "/assets/projects/doctorclinic/2.png",
      "/assets/projects/doctorclinic/3.png",
      "/assets/projects/doctorclinic/4.png",
      "/assets/projects/doctorclinic/5.png",
      "/assets/projects/doctorclinic/6.png",

    ],
    techStack: ["React", "Chart.js", "Tailwind CSS", "Firebase", "PostgreSQL"],
    workflow: [
      { step: "01", title: "Requirements", desc: "Defined booking, queue, records, and doctor access." },
      { step: "02", title: "IA & Hierarchy", desc: "Mapped patient journey from booking → check‑in → consultation → billing → reports." },
      { step: "03", title: "Design System", desc: "Built a shared component library for consistent charts." },
      { step: "04", title: "Development", desc: "React + Vite with real‑time updates and availability control" },
      { step: "05", title: "Delivery", desc: "Iterative releases with doctor and patient feedback." },
    ],
    features: [
      "Real-time data via WebSocket",
      "12 chart types including heatmaps",
      "CSV / PDF report export",
      "Role-based access control",
      "Custom date-range filters",
      "Mobile-responsive layout",
    ],
    liveDemoUrl: "https://example.com",
    category: "Doctor Clinic Management Software",
  },
  {
    id: 3,
    title: "Bodycraft",
    slug: "Beauty Salon Management Website",
    shortDesc: "Salon platform — smooth appointments and personal brand showcase",
    description:
      "A conversion‑driven beauty website — clear service presentation, smooth client pre‑booking, and a professional portfolio showcase for salon functions and individual make‑up offerings.",
    coverImage: "/assets/projects/fashion/no1.png",
    images: [
     "/assets/projects/fashion/no1.png",
     "/assets/projects/fashion/no2.png",
     "/assets/projects/fashion/no3.png",
     "/assets/projects/fashion/no4.png",
     "/assets/projects/fashion/no5.png",
     "/assets/projects/fashion/no6.png",
     
    ],
    techStack: ["React.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    workflow: [
      { step: "01", title: "Strategy", desc: "Defined ICP, messaging hierarchy, and conversion goals." },
      { step: "02", title: "Copywriting", desc: "Jobs-to-be-done framing for all headline copy." },
      { step: "03", title: "Design", desc: "Figma design with motion specs for every animated element." },
      { step: "04", title: "Development", desc: "Next.js with Framer Motion for scroll-triggered animations." },
      { step: "05", title: "Optimisation", desc: "Google Optimize A/B tests and Hotjar session recordings." },
    ],
    features: [
      "Scroll-triggered micro-animations",
      "Social proof ticker with logos",
      "Pricing toggle (monthly / annual)",
      "Embedded demo video player",
      "Cookie-less analytics integration",
      "99 PageSpeed score on mobile",
    ],
    liveDemoUrl: "https://example.com",
    category: "Beauty Salon Management Website",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    slug: "e-commerce-store",
    shortDesc: "Full-featured online store with seamless checkout and product discovery.",
    description:
      "End-to-end e-commerce experience for a fashion brand — product discovery, cart, and checkout optimised to reduce drop-off. Shipped with headless CMS integration for easy catalogue management.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    techStack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe"],
    workflow: [
      { step: "01", title: "UX Audit", desc: "Heatmap analysis of the existing store's drop-off points." },
      { step: "02", title: "Information Architecture", desc: "Rebuilt category taxonomy and filter logic." },
      { step: "03", title: "Design", desc: "High-fidelity designs for all 12 core screens." },
      { step: "04", title: "Development", desc: "Next.js headless storefront connected to Shopify." },
      { step: "05", title: "Launch", desc: "Staged rollout with redirect mapping and SEO preservation." },
    ],
    features: [
      "Headless Shopify integration",
      "Wishlist & size guide",
      "One-page checkout flow",
      "Stripe & Apple Pay support",
      "Product zoom & 360° viewer",
      "Inventory-aware filtering",
    ],
    liveDemoUrl: "https://example.com",
    category: "E-Commerce",
  },
];

export default projects;
