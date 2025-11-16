/**
 * Component category identifiers
 */
export type CategoryId =
  | "hero-sections"
  | "navigation"
  | "cards"
  | "buttons-ctas"
  | "forms"
  | "footers"
  | "testimonials"
  | "pricing-tables"
  | "galleries"
  | "animations"
  | "text-effects"
  | "backgrounds"
  | "loading-states"
  | "data-visualization"
  | "modals-overlays"
  | "carousels-sliders"
  | "scrolling-effects"
  | "3d-elements";

/**
 * Technology stack identifiers
 */
export type TechnologyId =
  | "css-only"
  | "react"
  | "framer-motion"
  | "gsap"
  | "react-spring"
  | "three-js"
  | "tailwind"
  | "vanilla-js"
  | "webgl"
  | "canvas";

/**
 * Difficulty levels
 */
export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

/**
 * Component source platforms
 */
export type SourcePlatform =
  | "awwwards"
  | "codrops"
  | "codepen"
  | "dribbble"
  | "aceternity"
  | "magic-ui"
  | "ui-verse"
  | "custom";

/**
 * Category interface
 */
export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  componentCount: number;
  description?: string;
}

/**
 * Technology tag interface
 */
export interface TechnologyTag {
  id: TechnologyId;
  name: string;
  color: string;
}

/**
 * Main component interface
 */
export interface Component {
  id: string;
  name: string;
  description: string;
  categories: CategoryId[];
  technologies: TechnologyId[];
  code: string;
  dependencies: string[];
  sourceUrl: string;
  sourceName: SourcePlatform;
  dateAdded: string;
  featured: boolean;
  difficulty?: DifficultyLevel;
  previewComponent?: React.ComponentType;
}

/**
 * Filter state interface
 */
export interface FilterState {
  searchQuery: string;
  selectedCategories: CategoryId[];
  selectedTechnologies: TechnologyId[];
}

/**
 * Component metadata for external components
 */
export interface ComponentMetadata {
  id: string;
  name: string;
  description: string;
  categories: CategoryId[];
  technologies: TechnologyId[];
  sourceUrl: string;
  sourceName: SourcePlatform;
  dependencies: string[];
  code: string;
}
