import { Category, TechnologyTag } from "./types";

/**
 * All available categories
 */
export const CATEGORIES: Category[] = [
  { id: "hero-sections", name: "Hero Sections", icon: "🎯", componentCount: 0 },
  { id: "navigation", name: "Navigation", icon: "🧭", componentCount: 0 },
  { id: "cards", name: "Cards", icon: "🎴", componentCount: 0 },
  { id: "buttons-ctas", name: "Buttons & CTAs", icon: "🔘", componentCount: 0 },
  { id: "forms", name: "Forms", icon: "📝", componentCount: 0 },
  { id: "footers", name: "Footers", icon: "⬇️", componentCount: 0 },
  { id: "testimonials", name: "Testimonials", icon: "💬", componentCount: 0 },
  { id: "pricing-tables", name: "Pricing Tables", icon: "💰", componentCount: 0 },
  { id: "galleries", name: "Galleries", icon: "🖼️", componentCount: 0 },
  { id: "animations", name: "Animations", icon: "✨", componentCount: 0 },
  { id: "text-effects", name: "Text Effects", icon: "🔤", componentCount: 0 },
  { id: "backgrounds", name: "Backgrounds", icon: "🌄", componentCount: 0 },
  { id: "loading-states", name: "Loading States", icon: "⏳", componentCount: 0 },
  { id: "data-visualization", name: "Data Visualization", icon: "📊", componentCount: 0 },
  { id: "modals-overlays", name: "Modals & Overlays", icon: "🪟", componentCount: 0 },
  { id: "carousels-sliders", name: "Carousels & Sliders", icon: "🎠", componentCount: 0 },
  { id: "scrolling-effects", name: "Scrolling Effects", icon: "📜", componentCount: 0 },
  { id: "3d-elements", name: "3D Elements", icon: "🎲", componentCount: 0 },
];

/**
 * All available technology tags
 */
export const TECHNOLOGY_TAGS: TechnologyTag[] = [
  { id: "css-only", name: "CSS Only", color: "#3b82f6" },
  { id: "react", name: "React", color: "#61dafb" },
  { id: "framer-motion", name: "Framer Motion", color: "#a855f7" },
  { id: "gsap", name: "GSAP", color: "#88ce02" },
  { id: "react-spring", name: "React Spring", color: "#f59e0b" },
  { id: "three-js", name: "Three.js", color: "#000000" },
  { id: "tailwind", name: "Tailwind CSS", color: "#06b6d4" },
  { id: "vanilla-js", name: "Vanilla JS", color: "#f7df1e" },
  { id: "webgl", name: "WebGL", color: "#ec4899" },
  { id: "canvas", name: "Canvas API", color: "#10b981" },
];

/**
 * Source website URLs for reference
 */
export const SOURCE_WEBSITES = {
  awwwards: "https://www.awwwards.com",
  codrops: "https://tympanus.net/codrops",
  codepen: "https://codepen.io",
  dribbble: "https://dribbble.com",
  aceternity: "https://ui.aceternity.com",
  "magic-ui": "https://magicui.design",
  "ui-verse": "https://uiverse.io",
} as const;
