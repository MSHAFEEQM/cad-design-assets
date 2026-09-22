import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Check, ShieldCheck, Star, Zap, Flame, Clock, Lock, BadgeCheck,
  ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Eye, X, Layers, Box, Paintbrush, FileText,
  Video, Sparkles, CheckCircle2, LayoutGrid, Users, Briefcase, DraftingCompass,
  Building2, Compass, Image, Award, AlertCircle
} from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { StickyCTA } from "@/components/StickyCTA";
import { PaymentBadges } from "@/components/PaymentBadges";

const CHECKOUT_URL = "https://superprofile.bio/vp/premium-interior-architecture-designing-assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Interior Design Toolkit — 5,000+ CAD Blocks, 3D Models & Renders @ ₹299" },
      { name: "description", content: "The complete Interior Architecture & Design Master Toolkit: 5,000+ CAD blocks, 550+ Revit families, 450+ SketchUp models, 2,000+ PNG cutouts, 1,000+ PBR textures, brushes & 4 free bonuses. Lifetime access for ₹299 only." },
      { property: "og:title", content: "Interior Design Toolkit — 5,000+ CAD Blocks & 3D Renders @ ₹299" },
      { property: "og:description", content: "Stop wasting hours searching for assets. Get every CAD block, Revit family, SketchUp model, PNG cutout, PBR texture and client template in one pack." },
      { property: "og:image", content: "https://orbitdigital.shop/wp-content/uploads/2025/11/u_mnZMGuQKu2vEr-1tGRcA.webp" },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://orbitdigital.shop/wp-content/uploads/2025/11/u_mnZMGuQKu2vEr-1tGRcA.webp" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Interior Design Toolkit & Architecture Master Bundle",
        brand: { "@type": "Brand", name: "Orbit Digital" },
        description: "Complete design asset kit for interior designers and architects including 5,000+ CAD blocks, 550+ Revit families, 450+ SketchUp models, 2,000+ PNG entourage, textures, brushes and project templates.",
        image: "https://orbitdigital.shop/wp-content/uploads/2025/11/u_mnZMGuQKu2vEr-1tGRcA.webp",
        offers: {
          "@type": "Offer",
          price: "299",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3500",
        },
      }),
    }],
  }),
  component: InteriorDesignToolkitLanding,
});

/* ---------------- Data ---------------- */

const softwareLogos = [
  { name: "AutoCAD", text: "5,000+ CAD Blocks", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/autocad-logo-png_seeklogo-482394.png" },
  { name: "Photoshop", text: "Brushes & Cutouts", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Adobe_Photoshop_CC_icon.svg.png" },
  { name: "Procreate", text: "Brushes & Overlays", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/procreate-dreams-logo-icon.webp" },
  { name: "LibreCAD", text: "2D Drafting", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/LibreCAD_icon.svg-1024x1024.png" },
  { name: "Revit", text: "550+ BIM Families", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/revit-lt-logo.png" },
  { name: "SketchUp", text: "450+ 3D Models", img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-12.png" },
];

const pillars = [
  {
    num: "1",
    title: "Drafting & Modeling Essentials",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/a-modern-3d-rendered-composition-featuri_VllKPqfiTeGZJBQNsftHNA_DGGHsTTcRf-vgXpicBOZGw.jpeg",
    items: [
      { bold: "5,000+ CAD Blocks:", text: "furniture, doors, windows, sanitary, lighting, structural details, cars, trees, elevation symbols & complete interior sets." },
      { bold: "550+ Revit Families:", text: "fully parametric furniture, lighting, décor, fixtures, windows/doors, BIM symbols & annotation packs." },
      { bold: "450+ SketchUp Models:", text: "optimized furniture, plants, humans, interior décor, lighting setups & scene-ready props." }
    ],
    takeaway: "👉 The complete starter kit for fast drafting, smart modeling, and clean technical drawings — fully organized for quick access."
  },
  {
    num: "2",
    title: "Design Assets (Entourage + Visuals)",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/a-clean-premium-3d-composition-rendered-_x1pET6HaTnipo7UXra3fuA_BuqLnCAbQMSLi5TBpCGrvA.jpeg",
    items: [
      { bold: "2,000+ PNG Furniture & Entourage:", text: "top/side/elevation views, silhouettes, sketch style, realistic cutouts & moodboard elements." },
      { bold: "Cutout People, Trees & Cars:", text: "drag-and-drop ready elements for plans, sections, renders & diagrams." },
      { bold: "Diagram & Analysis Icons:", text: "arrows, north points, sun paths, movement lines, zoning hatches, bubble symbols & site analysis tools." }
    ],
    takeaway: "👉 Perfect for populating plans, sections & presentations — saves hours on every single project."
  },
  {
    num: "3",
    title: "Rendering & Post-Production Tools",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/a-high-quality-3d-composition-on-a-clean_fKcQSlGSRoWVYqVHyoZ5Lg_lsW9c6yqRROnr5M9OuBlyA-1.jpeg",
    items: [
      { bold: "1,000+ Textures & PBR Materials:", text: "wood, marble, tiles, concrete, fabric, metals & seamless high-quality maps." },
      { bold: "500+ Photoshop & Procreate Brushes:", text: "shading, hatching, pencil, ink, watercolor & material texture brushes." },
      { bold: "100+ Lighting & Shadow Overlays:", text: "window light, soft shadows, gradients & depth overlays to enhance any render." }
    ],
    takeaway: "👉 Perfect toolkit to make your renders, moodboards & presentations look sharp, consistent & professional."
  }
];

const galleryImages = [
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-11.jpg", title: "2D CAD Floor Plans & Elevation Blocks" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-10.jpg", title: "Parametric Revit BIM Families" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-9.jpg", title: "3D SketchUp Furniture Models" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-8.jpg", title: "High-Res PNG Entourage Cutouts" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-7.jpg", title: "Seamless PBR Textures & Materials" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-6.jpg", title: "Photoshop & Procreate Architectural Brushes" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-5.jpg", title: "Lighting & Shadow Overlay Packs" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-4.jpg", title: "Site Analysis & Diagram Icons" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-3.jpg", title: "Canva Presentation & Moodboard Templates" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-2.jpg", title: "Fixtures & Finishes Schedule Templates" },
  { img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Add-a-heading-1.jpg", title: "Project Proposal & Client Welcome Decks" }
];

const painPoints = [
  {
    title: "❌ No Time to Create Assets",
    desc: "Every project needs CAD blocks, textures, templates — making them from scratch kills hours.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-8.png"
  },
  {
    title: "❌ Hard to Find Quality Files",
    desc: "Most assets online are low-quality, outdated, or scattered everywhere.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-9.png"
  },
  {
    title: "❌ Tools Are Not Organized",
    desc: "Files in different folders, formats, and drives = wasted time searching.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-10.png"
  }
];

const targetAudiences = [
  {
    title: "The Aspiring Designer",
    desc: "Work smarter on your college projects with ready-made assets. Create clean drawings, moodboards, and renders that impress your professors without late-night stress.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-19.png"
  },
  {
    title: "Architect or Interior Designer",
    desc: "Deliver polished work faster, close more clients, and boost project efficiency with a complete library you can rely on for every stage of the design process.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-18.png"
  },
  {
    title: "Small Studio or Growing Team",
    desc: "Standardize your workflow, maintain consistent output across the team, and speed up design, drafting, and visualization with organized assets ready to plug into any project.",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Growing-Team.png"
  }
];

const bonuses = [
  {
    title: "Client Welcome Pack",
    desc: "A client welcome packet helps to establish a professional, trust-building relationship and sets clear expectations for the work ahead.",
    oldPrice: "₹4,000",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Untitled-design-15-1.png"
  },
  {
    title: "Fixtures and Finishes Schedule",
    desc: "A fixtures and finishes schedule lists all materials, products, and colors used in a construction or interior project.",
    oldPrice: "₹3,500",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/12/FixturesSchedule1_2fd4679e-42fd-4acd-b205-1681982ba582.webp"
  },
  {
    title: "Project Proposal",
    desc: "A project proposal template includes the cover page, summary, project details, objectives, scope, budget, and timeline.",
    oldPrice: "₹5,000",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/a-modern-3d-rendered-composition-featuri_VllKPqfiTeGZJBQNsftHNA_DGGHsTTcRf-vgXpicBOZGw.jpeg"
  },
  {
    title: "Interior Reels Bundle",
    desc: "Editable reel templates and effects to create viral interior design videos in minutes.",
    oldPrice: "₹1,000",
    img: "https://orbitdigital.shop/wp-content/uploads/2025/11/Growing-Team-3.jpg"
  }
];

const testimonialsImages = [
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-11.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-5.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-9.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-8.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-7.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-10.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-6.png",
  "https://orbitdigital.shop/wp-content/uploads/2025/11/Partnering-with-Thynk-Unlimited-has-been-a-game-changer-for-our-business.-Their-professionalism-expertise-and-commitment-to-excellence-have-helped-us-achieve-outstanding-results.-4.png"
];

const faqs = [
  {
    q: "Are all the templates and assets fully editable?",
    a: "Yes! Everything inside the bundle — presentations, documents, infographics, assets, and bonuses — is fully editable in Canva, AutoCAD, SketchUp, Lumion, 3DS, Word, PowerPoint, and other standard tools."
  },
  {
    q: "How do I download the bundle after purchase?",
    a: "You'll receive an instant download link on the checkout page + by email. No waiting — you can start using everything immediately."
  },
  {
    q: "Do I get lifetime access?",
    a: "Yes! One-time purchase = lifetime access. You can download the files anytime and use them forever."
  },
  {
    q: "Can I use these assets for client projects?",
    a: "Absolutely. All assets come with a full commercial-use license. Use them in unlimited personal and client projects."
  },
  {
    q: "Are the files organized or mixed together?",
    a: "Everything is neatly sorted into labeled folders — CAD, PNGs, SKP, brushes, textures, templates, overlays, etc. No more searching through messy downloads."
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. Whether you're a student, freelancer, or studio owner, the assets are drag-and-drop ready and easy to use in any workflow."
  },
  {
    q: "What if the files don't work for me?",
    a: "If you face any issue (missing files, download problems, compatibility), our support team will fix it immediately. You'll always get a working download."
  }
];

/* ---------------- Helpers ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), obs.disconnect()),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={shown ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function TestimonialsCarousel({ images, onImageClick }: { images: string[]; onImageClick: (img: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, images.length]);

  return (
    <div
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slide Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full shrink-0 p-4 sm:p-8 flex items-center justify-center">
              <div
                onClick={() => onImageClick(img)}
                className="group relative cursor-pointer max-w-2xl w-full rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:border-amber-400/50 transition-all bg-slate-950"
              >
                <img
                  src={img}
                  alt={`Student & Designer Review ${i + 1}`}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-amber-400 text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-md">
                    <Eye className="h-4 w-4" /> Click to Expand Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Review"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/90 border border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center justify-center shadow-xl z-10 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Review"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-slate-950/90 border border-slate-700 text-white hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center justify-center shadow-xl z-10 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Carousel Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === i ? "w-8 bg-amber-400 shadow-md shadow-amber-400/30" : "w-2.5 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */

export default function InteriorDesignToolkitLanding() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white text-xs sm:text-sm font-bold py-2.5 px-4 text-center tracking-wide uppercase shadow-md flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse text-amber-300">🔥</span>
        <span>MEGA LAUNCH OFFER | Up to 90% OFF — Limited Time!</span>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-800/80">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-5 py-1.5 text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform mb-6"
            >
              <span>🔥 MEGA LAUNCH OFFER</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight sm:leading-none tracking-tight">
              Stop Wasting Hours Searching - <br className="hidden sm:inline" />
              <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                Get Every Design Asset in One Pack
              </span>
            </h1>
          </Reveal>

          {/* Hero Image Showcase */}
          <Reveal delay={180}>
            <div className="mt-8 relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-amber-500/10 group">
              <img
                src="https://orbitdigital.shop/wp-content/uploads/2025/11/u_mnZMGuQKu2vEr-1tGRcA.webp"
                alt="Interior Design Toolkit Showcase"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 text-base sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto">
              Design Assets &amp; Templates — Ready for Real Client Projects.
            </p>
          </Reveal>

          {/* Key Stats Counter */}
          <Reveal delay={300}>
            <div className="mt-8 grid grid-cols-3 max-w-2xl mx-auto gap-3 sm:gap-6 bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-black text-amber-400">3500+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Architects &amp; Designers</div>
              </div>
              <div className="text-center border-x border-slate-800">
                <div className="text-xl sm:text-3xl font-black text-amber-400">10+ hrs</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Saved Per Project</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-black text-amber-400">4.9★</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">Average Rating</div>
              </div>
            </div>
          </Reveal>

          {/* Main CTA Button */}
          <Reveal delay={360}>
            <div className="mt-8 flex flex-col items-center">
              <a
                href={CHECKOUT_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-lg sm:text-2xl px-8 py-5 shadow-2xl shadow-amber-500/40 hover:brightness-110 active:scale-95 transition-all animate-pulse"
              >
                <span>🔥 Buy Now for Just ₹299</span>
                <ArrowRight className="h-6 w-6 stroke-[3]" />
              </a>

              <p className="mt-4 text-sm font-bold text-slate-300 flex items-center gap-2">
                <span>🚀 Work 3× Faster — Impress Every Client.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Software Logos / Trust Banner */}
      <section className="py-12 bg-slate-950/60 border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="text-xs uppercase tracking-[0.25em] text-slate-400 font-extrabold mb-8">
            TRUSTED BY ARCHITECTS &amp; DESIGNERS — COMPATIBLE WITH ALL MAJOR TOOLS
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softwareLogos.map((s) => (
              <div key={s.name} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center hover:border-amber-500/40 transition-colors">
                <img src={s.img} alt={s.name} className="h-10 w-10 object-contain mb-2" />
                <span className="text-sm font-bold text-slate-200">{s.name}</span>
                <span className="text-[11px] text-slate-400">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three Asset Category Pillars */}
      <section className="py-16 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-black text-xs px-4 py-1.5 uppercase tracking-wider mb-3">
                🔥 MEGA LAUNCH OFFER
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Everything You Need to <br /> Deliver Studio-Level Projects, Instantly.
              </h2>
              <div className="mt-4 inline-block bg-slate-900 border border-amber-500/30 rounded-xl px-5 py-2">
                <p className="text-sm sm:text-base font-bold text-slate-200">
                  🎁 Get <span className="text-amber-400 font-extrabold text-lg">90% OFF</span> Today Only — <span className="line-through text-slate-500">₹2,999</span> Value for Just <span className="text-amber-400 text-xl font-black">₹299!</span>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 100}>
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:border-amber-500/40 transition-colors shadow-xl">
                  <div className="relative aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-950">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md">
                      Pillar #{p.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {p.num}. {p.title}
                  </h3>

                  <ul className="space-y-3.5 mb-6 text-sm text-slate-300 flex-1">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-100">{item.bold} </strong>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-slate-950 border border-amber-500/20 rounded-xl p-3.5 text-xs text-amber-300 font-medium leading-relaxed">
                    {p.takeaway}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-lg px-8 py-4 shadow-xl shadow-amber-400/20 hover:scale-105 transition-transform"
              >
                <span>GET INSTANT ACCESS!</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs font-bold text-slate-400">⚡ One click, fully organized, permanently yours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Complete Design Library Visual Carousel */}
      <section className="py-16 sm:py-24 bg-slate-950/40 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-extrabold">INSIDE THE VAULT</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                What’s Inside the <br /><span className="text-amber-400">Complete Design Library</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((g, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  onClick={() => setActiveLightbox(g.img)}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-400/50 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Eye className="h-4 w-4" /> Expand Preview
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{g.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-4 shadow-lg shadow-amber-400/20 hover:scale-105 transition-transform"
            >
              <span>GET INSTANT ACCESS!</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-2 text-xs font-bold text-slate-400">⚡ One click, fully organized, permanently yours.</p>
          </div>
        </div>
      </section>

      {/* 6. Problem Section */}
      <section className="py-16 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                The Problem <span className="text-amber-400">Every Designer Faces</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mt-2">
                You’re Not Slow — Your Tools Are.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400">
                Most designers waste hours every week just looking for the right assets instead of actually designing.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center h-full hover:border-red-500/40 transition-colors">
                  <img src={p.img} alt={p.title} className="h-24 w-24 object-contain mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 bg-slate-900 border border-amber-500/30 rounded-2xl p-6 text-center max-w-xl mx-auto">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4">
                All of this in less than the <span className="text-red-400">price of a Pizza.</span>
              </h3>
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-3.5 shadow-lg shadow-amber-400/20 hover:scale-105 transition-transform"
              >
                <span>GET INSTANT ACCESS!</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs font-bold text-slate-400">⚡ One click, fully organized, permanently yours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Who Is This Bundle For? */}
      <section className="py-16 sm:py-24 bg-slate-950/40 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block rounded-full bg-amber-400/10 text-amber-400 font-extrabold text-xs px-4 py-1.5 uppercase tracking-wider mb-2">
                ⚡ Perfect For Everyone ⚡
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Who Is This Bundle For?</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400">
                This toolkit is designed to fit every designer’s workflow — <span className="text-amber-400 font-semibold">whether you're learning, freelancing, or leading a team.</span>
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {targetAudiences.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center h-full hover:border-amber-400/40 transition-colors">
                  <img src={t.img} alt={t.title} className="h-28 w-28 object-contain mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{t.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Exclusive Free Bonuses Section */}
      <section className="py-16 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block rounded-full bg-amber-400/10 text-amber-400 font-extrabold text-xs px-4 py-1.5 uppercase tracking-wider mb-2">
                ⚡ Mega Launch Offer Bonuses ⚡
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Unlock 4 Premium Bonuses <br /><span className="text-amber-400">Worth ₹13,500</span> — Absolutely <span className="text-orange-500">FREE!</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400">
                Get these exclusive add-ons at no extra cost when you grab the complete bundle today.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-full hover:border-amber-400/40 transition-colors">
                  <div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 mb-4">
                      <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 right-2 bg-emerald-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
                        FREE
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{b.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{b.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-center">
                    <span className="line-through text-slate-500 text-xs mr-2">{b.oldPrice}</span>
                    <span className="text-emerald-400 font-extrabold text-sm">FREE Today!</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center max-w-xl mx-auto">
              <p className="text-sm font-semibold text-slate-300 mb-4">
                Save <span className="text-red-400 font-bold">hours</span> on presentations, portfolios, and client documents all ready to customize and deliver instantly. <span className="text-amber-400 font-bold">FREE</span> with purchase today!
              </p>
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-4 shadow-lg shadow-amber-400/20 hover:scale-105 transition-transform"
              >
                <span>GET INSTANT ACCESS!</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs font-bold text-slate-400">⚡ One click, fully organized, permanently yours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Testimonials Carousel */}
      <section className="py-16 sm:py-24 bg-slate-950/40 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Don't just take our word for it.</h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Here's what students, freelancers, and studio owners think after using this Design Master Bundle
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <TestimonialsCarousel images={testimonialsImages} onImageClick={setActiveLightbox} />
          </Reveal>
        </div>
      </section>

      {/* 10. Final Checkout Offer Box */}
      <section className="py-16 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl shadow-amber-500/10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Get Instant, Lifetime Access to Design Master Bundle
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                Join today and get the complete toolkit, all future updates, and limited-time bonuses — for a single, one-time payment.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Instant Download</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Lifetime Updates</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Commercial License</span>
              </div>

              {/* Product Card Image */}
              <div className="mt-8 max-w-md mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <img
                  src="https://orbitdigital.shop/wp-content/uploads/2025/11/a-clean-professional-product-showcase-fe_OqikHUE3QHCx_L9eRH8EmQ_5MCRmabuRvO5_VIyZugOPQ.jpeg"
                  alt="Design Master Bundle Product"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Price & Timer */}
              <div className="mt-8">
                <div className="flex items-center justify-center gap-3">
                  <span className="line-through text-slate-500 text-lg sm:text-xl font-semibold">₹2,999</span>
                  <span className="bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                    94% OFF
                  </span>
                </div>
                <div className="text-4xl sm:text-6xl font-black text-amber-400 mt-2">
                  ₹299/-
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="mt-6 max-w-md mx-auto bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Offer Expires In</div>
                <Countdown hours={3} minutes={42} />
              </div>

              {/* Big CTA */}
              <div className="mt-8">
                <a
                  href={CHECKOUT_URL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-xl sm:text-2xl px-10 py-5 shadow-2xl shadow-amber-500/40 hover:brightness-110 transition-all animate-pulse"
                >
                  <span>GET INSTANT ACCESS!</span>
                  <ArrowRight className="h-6 w-6 stroke-[3]" />
                </a>
              </div>

              {/* Payment Badges */}
              <div className="mt-6">
                <PaymentBadges />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-slate-950/40 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block rounded-full bg-amber-400/10 text-amber-400 font-extrabold text-xs px-4 py-1.5 uppercase tracking-wider mb-2">
                ❓ GOT QUESTIONS ❓
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Still Have Questions? We've Got Answers.</h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Everything you need to know about Design Master Bundle — answered in seconds
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-slate-200 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-amber-400" : "text-slate-500"}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Still deciding?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 max-w-lg mx-auto">
                Join architects and designers who upgraded their workflow with Design Master Bundle — download and start using it today.
              </p>
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-base px-8 py-4 shadow-lg shadow-amber-400/20 hover:scale-105 transition-transform"
              >
                <span>GET INSTANT ACCESS!</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs font-bold text-slate-400">⚡ One click, fully organized, permanently yours.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. Legal Disclaimer & Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 text-xs">
        <div className="mx-auto max-w-6xl px-4 text-center space-y-6">
          <div className="max-w-4xl mx-auto leading-relaxed text-slate-500">
            <h5 className="font-extrabold text-slate-400 uppercase tracking-wider mb-2">IMPORTANT DISCLAIMER</h5>
            <p>
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools, or strategies. We just want to help you by giving great content, direction, and strategies that worked well for us and our students. All terms, privacy policies, and disclaimers for this website can be accessed via the links below.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-400 pt-4 border-t border-slate-900">
            <a href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="/contact-us" className="hover:text-amber-400 transition-colors">Contact Us</a>
            <a href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
            <a href="/refund-policy" className="hover:text-amber-400 transition-colors">Refund and Returns Policy</a>
          </div>

          <p className="text-slate-600">© {new Date().getFullYear()} Orbit Digital — Interior Design Toolkit. All rights reserved.</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
            <img src={activeLightbox} alt="Preview" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <StickyCTA price="299" originalPrice="2999" checkoutUrl={CHECKOUT_URL} />
    </div>
  );
}
