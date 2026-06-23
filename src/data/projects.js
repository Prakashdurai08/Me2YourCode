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
    slug: "Clinic-Management Software",
    shortDesc: "Online appointment booking, live token queue, doctor dashboard and TV token board — built for real clinics, handed over to the client.",
    description:
      "A complete clinic digitalization system built with React + Vite and Google Sheets as the backend. Patients book appointment slots online 24/7 from any device. The reception staff manages walk-ins, marks arrivals and prints token slips from a live dashboard. The doctor gets a separate personal view showing who's currently being seen, their reason for visit, and who's next — with one tap to call the next patient. A full-screen TV token board runs in the waiting room. The entire system is deployed on Vercel with a custom domain and handed over to the clinic — no monthly fees, no vendor lock-in.",
    coverImage: "/assets/projects/doctorclinic/2.png",
    images: [
      "/assets/projects/doctorclinic/1.png",
      "/assets/projects/doctorclinic/2.png",
      "/assets/projects/doctorclinic/3.png",
      "/assets/projects/doctorclinic/4.png",
      "/assets/projects/doctorclinic/5.png",
      "/assets/projects/doctorclinic/6.png",

    ],
    techStack: ["React", "Vite", "Firebase Auth", "Google Sheets", "Recharts", "Vercel"],
    workflow: [
       { step: "01", title: "Requirements", desc: "Defined four user flows: patient booking, staff reception, doctor view and waiting room TV board." },
    { step: "02", title: "Architecture", desc: "Chose Google Sheets as a zero-cost backend via Apps Script. Firebase for auth. Vercel for hosting." },
    { step: "03", title: "UI & Design System", desc: "Built custom CSS design system — purple/teal/navy palette, responsive across mobile, tablet and desktop." },
    { step: "04", title: "Development", desc: "React + Vite SPA with real-time queue, animated stat cards, Doctor View toggle, TV mode and thermal token slip printing." },
    { step: "05", title: "Delivery", desc: "One-time setup, custom domain, full handover to clinic staff in 48 hours. No monthly fees." },

    ],
    features: [
      "24/7 online appointment booking with slot grid",
    "Live token queue — walk-in + online patients unified",
    "Doctor's personal view — now seeing, up next, reason for visit",
    "Full-screen TV token board for waiting room",
    "Thermal token slip printing from browser",
    "WhatsApp + Email booking notifications",
    "Staff dashboard — walk-in registration, mark arrivals, Excel export",
    "Clinic open/close toggle controlled by doctor",
    "Google Sheets backend — client owns all data",
    "Mobile responsive — works on all devices",
    ],
    liveDemoUrl: "https://doctor-clinic-zeta.vercel.app/",
    category: "Clinic Management Software",
  },
  {
  id: 3,
  title: "Bodycraft",
  slug: "Beauty Salon Management Website",
  shortDesc: "Bridal beauty platform — seamless appointment booking and stunning portfolio showcase",
  description:
    "A production-ready beauty salon website built for Body Craft by Hollywood Saloon — featuring a full bridal portfolio gallery, transparent service pricing, WhatsApp-integrated appointment booking, and a mobile-first design that showcases the salon's Indian bridal expertise to attract and convert new clients.",
  coverImage: "/assets/projects/fashion/no1.png",
  images: [
    "/assets/projects/fashion/no1.png",
    "/assets/projects/fashion/no2.png",
    "/assets/projects/fashion/no3.png",
    "/assets/projects/fashion/no4.png",
    "/assets/projects/fashion/no5.png",
    "/assets/projects/fashion/no6.png",
  ],
  techStack: ["React.js", "Vite", "EmailJS", "CSS Modules", "Vercel"],
  workflow: [
    { step: "01", title: "Discovery", desc: "Mapped the salon's core services, bridal packages, and target audience of Indian brides and beauty clients." },
    { step: "02", title: "Design", desc: "Built a pink-and-gold brand identity with Playfair Display typography and a dark-luxury aesthetic throughout." },
    { step: "03", title: "Development", desc: "React + Vite with custom CSS — hero slideshow, filterable portfolio gallery, tabbed pricing, and scroll-reveal animations." },
    { step: "04", title: "Integrations", desc: "EmailJS contact form for appointment requests and WhatsApp float button for instant client chat." },
    { step: "05", title: "Optimisation", desc: "Mobile-first responsive build with portrait hero images, stacked layouts, and IntersectionObserver-driven animations." },
  ],
  features: [
    "Auto-advancing hero slideshow with mobile portrait image swap",
    "Filterable portfolio gallery with lightbox (Bridal, Mehendi, Makeup, Hair)",
    "Tabbed pricing section across 5 service categories with stagger animations",
    "EmailJS-powered appointment contact form",
    "WhatsApp float button for instant client enquiries",
    "Sticky mobile booking bar that hides when footer is visible",
  ],
  liveDemoUrl: "https://bodycraft-fashion.vercel.app/",
  category: "Beauty Salon Management Website",
},
  {
  id: 4,
  title: "MM Builders",
  slug: "construction-website",
  shortDesc: "Tamil Nadu builder website — service showcase, project portfolio, and WhatsApp-first inquiry flow",
  description:
    "A conversion-driven construction company website built for the Tamil Nadu market. Features a full service showcase including Vaastu-compliant planning, a filterable project portfolio with real photography, a 5-step process flow covering government approvals and permits, EmailJS-powered contact form, and a floating WhatsApp CTA — all optimised for mobile-first browsing.",
  coverImage: "/assets/projects/builders/1.png",
  images: [
    "/assets/projects/builders/1.png",
    "/assets/projects/builders/2.png",
    "/assets/projects/builders/3.png",
    "/assets/projects/builders/4.png",
    "/assets/projects/builders/5.png",
  ],
  techStack: ["React", "Vite", "CSS3", "EmailJS"],
  workflow: [
    { step: "01", title: "Audit & Strategy", desc: "Analysed the Tamil Nadu construction market — identified RERA trust signals, Vaastu demand, and WhatsApp-first contact behaviour as key conversion factors." },
    { step: "02", title: "Information Architecture", desc: "Structured 8 sections: Hero → Services → Why Us → Projects → Process → Testimonials → Contact → Footer, with smooth-scroll nav." },
    { step: "03", title: "Design", desc: "Dark-gold brand system with Barlow Condensed display font, scroll-reveal animations, and a full mobile-responsive layout down to 375px." },
    { step: "04", title: "Development", desc: "Built in React + Vite with component-scoped CSS, IntersectionObserver reveal animations, animated stat counters, and filterable project grid." },
    { step: "05", title: "Localisation", desc: "Tamil Nadu positioning — Chennai/Coimbatore/Madurai service zones, Govt approval process step, Vaastu service, Indian address and phone format, Open Graph meta for WhatsApp link previews." },
  ],
  features: [
    "Filterable project portfolio (Residential / Commercial / Renovation)",
    "Vaastu-compliant planning service",
    "Govt approvals & permits process step",
    "EmailJS contact form with validation",
    "Floating WhatsApp CTA button",
    "Scroll-reveal + animated stat counters",
    "Mobile-first responsive (375px–1920px)",
    "Open Graph & Twitter Card meta for social sharing",
  ],
  liveDemoUrl: "https://construction-cyan-two.vercel.app/",
  category: "Construction Website",
},
];

export default projects;
