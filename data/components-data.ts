import { Component } from "@/lib/types";
import { lazy } from "react";

/**
 * Lazy-loaded component imports for better performance
 * Components are loaded only when needed
 */

// Hero Sections
const HeroSplitText = lazy(() => import("@/components/showcase/hero-sections").then(m => ({ default: m.HeroSplitText })));
const HeroGradientFloat = lazy(() => import("@/components/showcase/hero-sections").then(m => ({ default: m.HeroGradientFloat })));
const Hero3DTilt = lazy(() => import("@/components/showcase/hero-sections").then(m => ({ default: m.Hero3DTilt })));
const HeroBackgroundBeams = lazy(() => import("@/components/showcase/hero-sections").then(m => ({ default: m.HeroBackgroundBeams })));
const HeroGlassStack = lazy(() => import("@/components/showcase/hero-sections").then(m => ({ default: m.HeroGlassStack })));

// Buttons
const ButtonWarp = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonWarp })));
const ButtonBorderRevolve = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonBorderRevolve })));
const ButtonBurst = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonBurst })));
const ButtonInsideOut = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonInsideOut })));
const ButtonShimmer = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonShimmer })));
const Button3DPush = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.Button3DPush })));
const ButtonIconSlide = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonIconSlide })));
const ButtonGooey = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonGooey })));
const ButtonNeonGlow = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonNeonGlow })));
const ButtonRipple = lazy(() => import("@/components/showcase/buttons").then(m => ({ default: m.ButtonRipple })));

// Cards
const CardGlassMorph = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardGlassMorph })));
const Card3DTilt = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.Card3DTilt })));
const CardGradientBorder = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardGradientBorder })));
const CardStacked = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardStacked })));
const CardProduct = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardProduct })));
const CardStats = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardStats })));
const CardTestimonial = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardTestimonial })));
const CardPricing = lazy(() => import("@/components/showcase/cards").then(m => ({ default: m.CardPricing })));

// Loading States
const LoadingSpinnerGradient = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingSpinnerGradient })));
const LoadingDotsBounce = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingDotsBounce })));
const LoadingPulseRing = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingPulseRing })));
const LoadingProgressBar = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingProgressBar })));
const LoadingSkeleton = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingSkeleton })));
const LoadingCircularProgress = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingCircularProgress })));
const LoadingBarsWave = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingBarsWave })));
const LoadingDNAHelix = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingDNAHelix })));
const LoadingOrbit = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingOrbit })));
const LoadingTextTyping = lazy(() => import("@/components/showcase/loading-states").then(m => ({ default: m.LoadingTextTyping })));

// Navigation
const NavbarSlideIn = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarSlideIn })));
const NavbarDropdown = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarDropdown })));
const NavbarSearch = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarSearch })));
const NavbarGlass = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarGlass })));
const NavbarSticky = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarSticky })));
const NavbarMega = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarMega })));
const NavbarUnderline = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarUnderline })));
const NavbarIconAnimated = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarIconAnimated })));
const NavbarGradient = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarGradient })));
const NavbarSplit = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarSplit })));
const NavbarBadges = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarBadges })));
const NavbarBorderAnimation = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarBorderAnimation })));
const NavbarCenteredLogo = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarCenteredLogo })));
const NavbarSocial = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarSocial })));
const NavbarScrollProgress = lazy(() => import("@/components/showcase/navigation").then(m => ({ default: m.NavbarScrollProgress })));

// Forms
const FormLoginGlass = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormLoginGlass })));
const FormSignupAnimated = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormSignupAnimated })));
const FormContact = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormContact })));
const FormSearch = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormSearch })));
const FormNewsletter = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormNewsletter })));
const FormPasswordToggle = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormPasswordToggle })));
const FormMultiStep = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormMultiStep })));
const FormPhone = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormPhone })));
const FormAddress = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormAddress })));
const FormDatePicker = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormDatePicker })));
const FormPayment = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormPayment })));
const FormFileUpload = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormFileUpload })));
const FormCheckbox = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormCheckbox })));
const FormRadio = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormRadio })));
const FormSelect = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormSelect })));
const FormRange = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormRange })));
const FormInline = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormInline })));
const FormFloatingLabel = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormFloatingLabel })));
const FormSuccess = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormSuccess })));
const FormValidation = lazy(() => import("@/components/showcase/forms").then(m => ({ default: m.FormValidation })));

// Footers
const FooterSimple = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterSimple })));
const FooterSocial = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterSocial })));
const FooterColumns = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterColumns })));
const FooterNewsletter = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterNewsletter })));
const FooterContact = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterContact })));
const FooterCTA = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterCTA })));
const FooterLogo = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterLogo })));
const FooterWave = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterWave })));
const FooterHeart = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterHeart })));
const FooterAllSocials = lazy(() => import("@/components/showcase/footers").then(m => ({ default: m.FooterAllSocials })));

// Galleries
const GalleryMasonry = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryMasonry })));
const GalleryGrid = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryGrid })));
const GalleryLightbox = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryLightbox })));
const GalleryHoverZoom = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryHoverZoom })));
const GalleryStacked = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryStacked })));
const GalleryInfiniteScroll = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryInfiniteScroll })));
const GalleryCardFlip = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryCardFlip })));
const GalleryPolaroid = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryPolaroid })));
const GalleryHorizontalScroll = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryHorizontalScroll })));
const GalleryKenBurns = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryKenBurns })));
const GalleryParallax = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryParallax })));
const GalleryThumbnails = lazy(() => import("@/components/showcase/galleries").then(m => ({ default: m.GalleryThumbnails })));

// Modals
const ModalBasic = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalBasic })));
const ModalCentered = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalCentered })));
const ModalSlideUp = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalSlideUp })));
const ModalAlert = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalAlert })));
const ModalSuccess = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalSuccess })));
const ModalInfo = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalInfo })));
const ModalConfirm = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalConfirm })));
const ModalFullScreen = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalFullScreen })));
const ModalSidePanel = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalSidePanel })));
const ModalDialog = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalDialog })));
const ModalVideo = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalVideo })));
const ModalImage = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalImage })));
const ModalForm = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalForm })));
const ModalTooltip = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalTooltip })));
const ModalMultiStep = lazy(() => import("@/components/showcase/modals").then(m => ({ default: m.ModalMultiStep })));

// Animations
const AnimFadeIn = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimFadeIn })));
const AnimSlideUp = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimSlideUp })));
const AnimSlideDown = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimSlideDown })));
const AnimSlideLeft = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimSlideLeft })));
const AnimSlideRight = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimSlideRight })));
const AnimScale = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimScale })));
const AnimRotate = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimRotate })));
const AnimBounce = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimBounce })));
const AnimPulse = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimPulse })));
const AnimShake = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimShake })));
const AnimFlip = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimFlip })));
const AnimSwing = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimSwing })));
const AnimRubberBand = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimRubberBand })));
const AnimWobble = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimWobble })));
const AnimGlow = lazy(() => import("@/components/showcase/animations").then(m => ({ default: m.AnimGlow })));

// Carousels & Sliders
const CarouselAuto = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselAuto })));
const CarouselArrows = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselArrows })));
const Carousel3D = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.Carousel3D })));
const SliderFade = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.SliderFade })));
const CarouselCards = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselCards })));
const CarouselInfinite = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselInfinite })));
const CarouselThumbnails = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselThumbnails })));
const SliderVertical = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.SliderVertical })));
const SliderParallax = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.SliderParallax })));
const CarouselCoverFlow = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselCoverFlow })));
const CarouselTestimonial = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselTestimonial })));
const CarouselMultiItem = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselMultiItem })));
const CarouselSnapScroll = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselSnapScroll })));
const CarouselKenburns = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselKenburns })));
const CarouselProgress = lazy(() => import("@/components/showcase/carousels-sliders").then(m => ({ default: m.CarouselProgress })));

// Testimonials
const TestimonialCard = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialCard })));
const TestimonialQuote = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialQuote })));
const TestimonialGrid = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialGrid })));
const TestimonialFloating = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialFloating })));
const TestimonialVideo = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialVideo })));
const TestimonialMinimal = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialMinimal })));
const TestimonialStats = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialStats })));
const TestimonialBadge = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialBadge })));
const TestimonialCompany = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialCompany })));
const TestimonialSocial = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialSocial })));
const TestimonialBeforeAfter = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialBeforeAfter })));
const TestimonialCarouselItem = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialCarouselItem })));
const TestimonialLongForm = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialLongForm })));
const TestimonialCompact = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialCompact })));
const TestimonialFeatured = lazy(() => import("@/components/showcase/testimonials").then(m => ({ default: m.TestimonialFeatured })));

// Pricing Tables
const PricingSimple = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingSimple })));
const PricingThreeTier = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingThreeTier })));
const PricingPopular = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingPopular })));
const PricingToggle = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingToggle })));
const PricingComparison = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingComparison })));
const PricingMinimal = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingMinimal })));
const PricingGradient = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingGradient })));
const PricingFree = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingFree })));
const PricingHighlighted = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingHighlighted })));
const PricingDark = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingDark })));
const PricingCompactRow = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingCompactRow })));
const PricingAnnual = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingAnnual })));
const PricingUsageBased = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingUsageBased })));
const PricingEnterprise = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingEnterprise })));
const PricingLimitedOffer = lazy(() => import("@/components/showcase/pricing-tables").then(m => ({ default: m.PricingLimitedOffer })));

// Data Visualization
const ChartBar = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartBar })));
const ChartLine = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartLine })));
const ChartDonut = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartDonut })));
const DashboardStats = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.DashboardStats })));
const ProgressBars = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ProgressBars })));
const Heatmap = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.Heatmap })));
const ChartArea = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartArea })));
const MetricCards = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.MetricCards })));
const Sparkline = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.Sparkline })));
const ChartGauge = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartGauge })));
const ChartComparison = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartComparison })));
const ProgressRadial = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ProgressRadial })));
const ChartStackedBar = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartStackedBar })));
const DashboardKPI = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.DashboardKPI })));
const ChartTimeline = lazy(() => import("@/components/showcase/data-visualization").then(m => ({ default: m.ChartTimeline })));

// Scrolling Effects
const ScrollParallax = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollParallax })));
const ScrollFadeIn = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollFadeIn })));
const ScrollProgress = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollProgress })));
const ScrollSlideUp = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollSlideUp })));
const ScrollStickyHeader = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollStickyHeader })));
const ScrollRevealCards = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollRevealCards })));
const ScrollZoom = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollZoom })));
const ScrollSnapSections = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollSnapSections })));
const ScrollHorizontal = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollHorizontal })));
const ScrollStagger = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollStagger })));
const ScrollRotate = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollRotate })));
const ScrollBackToTop = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollBackToTop })));
const ScrollIndicator = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollIndicator })));
const ScrollBlur = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollBlur })));
const ScrollColorChange = lazy(() => import("@/components/showcase/scrolling-effects").then(m => ({ default: m.ScrollColorChange })));

// Text Effects
const TextGradient = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextGradient })));
const TextGlitch = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextGlitch })));
const TextTyping = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextTyping })));
const TextNeon = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextNeon })));
const TextFadeIn = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextFadeIn })));
const TextBounce = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextBounce })));
const TextStroke = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextStroke })));
const TextShadow = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextShadow })));
const TextWave = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextWave })));
const TextRotateWords = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextRotateWords })));
const TextBlur = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextBlur })));
const TextScale = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextScale })));
const TextSplit = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextSplit })));
const TextUnderline = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextUnderline })));
const TextShimmer = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextShimmer })));
const TextRainbow = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextRainbow })));
const TextHighlight = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextHighlight })));
const TextFlip = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextFlip })));
const TextStagger = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextStagger })));
const TextGlow = lazy(() => import("@/components/showcase/text-effects").then(m => ({ default: m.TextGlow })));

// Backgrounds
const BackgroundGradient = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundGradient })));
const BackgroundMesh = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundMesh })));
const BackgroundAnimatedGradient = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundAnimatedGradient })));
const BackgroundDots = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundDots })));
const BackgroundGrid = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundGrid })));
const BackgroundStripes = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundStripes })));
const BackgroundGlass = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundGlass })));
const BackgroundRadial = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundRadial })));
const BackgroundBlob = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundBlob })));
const BackgroundNoise = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundNoise })));
const BackgroundConic = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundConic })));
const BackgroundWave = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundWave })));
const BackgroundParticles = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundParticles })));
const BackgroundCheckerboard = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundCheckerboard })));
const BackgroundDuotone = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundDuotone })));
const BackgroundSpotlight = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundSpotlight })));
const BackgroundGradientBorder = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundGradientBorder })));
const BackgroundAurora = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundAurora })));
const BackgroundComic = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundComic })));
const BackgroundSunset = lazy(() => import("@/components/showcase/backgrounds").then(m => ({ default: m.BackgroundSunset })));

// 3D Elements
const Card3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Card3D })));
const Cube3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Cube3D })));
const CardFlip = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.CardFlip })));
const ButtonLevitate = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.ButtonLevitate })));
const Stack3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Stack3D })));
const Ring3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Ring3D })));
const BoxIsometric = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.BoxIsometric })));
const ButtonPress3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.ButtonPress3D })));
const TextPerspective = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.TextPerspective })));
const Pyramid3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Pyramid3D })));
const Badge3D = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.Badge3D })));
const LayersDepth = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.LayersDepth })));
const FrameTilt = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.FrameTilt })));
const CardFolded = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.CardFolded })));
const TextExtruded = lazy(() => import("@/components/showcase/3d-elements").then(m => ({ default: m.TextExtruded })));

/**
 * Complete components database with 250+ components
 * All components are lazy-loaded for optimal performance
 */
export const componentsData: Component[] = [
  // HERO SECTIONS (5 components)
  {
    id: "hero-split-text",
    name: "Split Text Animation Hero",
    description: "Awwwards-winning split text animation with smooth character reveals",
    categories: ["hero-sections", "animations", "text-effects"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `export function HeroSplitText() {
  const text = "Transform Your Vision";
  const words = text.split(" ");
  return (
    <div className="hero-container">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: HeroSplitText,
  },
  {
    id: "hero-gradient-float",
    name: "Gradient Float Hero",
    description: "Beautiful gradient background with floating elements animation",
    categories: ["hero-sections", "backgrounds", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Gradient hero with floating animated elements`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: HeroGradientFloat,
  },
  {
    id: "hero-3d-tilt",
    name: "3D Tilt Hero",
    description: "Aceternity-inspired 3D perspective tilt effect on hover",
    categories: ["hero-sections", "3d-elements"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// 3D tilt effect hero section`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: Hero3DTilt,
  },
  {
    id: "hero-background-beams",
    name: "Background Beams Hero",
    description: "Animated light beams creating a futuristic hero section",
    categories: ["hero-sections", "backgrounds", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Hero with animated background beams`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: HeroBackgroundBeams,
  },
  {
    id: "hero-glass-stack",
    name: "Glassmorphism Stack Hero",
    description: "Stacked glass cards with depth and blur effects",
    categories: ["hero-sections", "cards"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Stacked glassmorphism cards`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: HeroGlassStack,
  },

  // NAVIGATION (15 components)
  {
    id: "nav-slide-in",
    name: "Slide-In Navigation",
    description: "Mobile-friendly navigation that slides in from the side",
    categories: ["navigation", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Slide-in navigation menu`,
    dependencies: ["framer-motion", "lucide-react"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarSlideIn,
  },
  {
    id: "nav-dropdown",
    name: "Dropdown Navigation",
    description: "Navigation with elegant dropdown menus",
    categories: ["navigation"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Dropdown navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarDropdown,
  },
  {
    id: "nav-search",
    name: "Search Navigation",
    description: "Navigation bar with integrated search functionality",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Navigation with search`,
    dependencies: ["lucide-react"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarSearch,
  },
  {
    id: "nav-glass",
    name: "Glass Navigation",
    description: "Glassmorphism navigation bar with blur effect",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Glass effect navigation`,
    dependencies: [],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarGlass,
  },
  {
    id: "nav-sticky",
    name: "Sticky Navigation",
    description: "Navigation that sticks to the top on scroll",
    categories: ["navigation", "scrolling-effects"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Sticky navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarSticky,
  },
  {
    id: "nav-mega",
    name: "Mega Menu Navigation",
    description: "Large dropdown menu with multiple columns",
    categories: ["navigation"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Mega menu navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarMega,
  },
  {
    id: "nav-underline",
    name: "Underline Animation Nav",
    description: "Navigation with animated underline on hover",
    categories: ["navigation", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Underline animation navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarUnderline,
  },
  {
    id: "nav-icon-animated",
    name: "Icon Animated Nav",
    description: "Navigation with animated icon interactions",
    categories: ["navigation", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Animated icon navigation`,
    dependencies: ["framer-motion", "lucide-react"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarIconAnimated,
  },
  {
    id: "nav-gradient",
    name: "Gradient Navigation",
    description: "Navigation with gradient background",
    categories: ["navigation", "backgrounds"],
    technologies: ["react", "tailwind"],
    code: `// Gradient navigation`,
    dependencies: [],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarGradient,
  },
  {
    id: "nav-split",
    name: "Split Layout Navigation",
    description: "Navigation with split layout design",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Split layout navigation`,
    dependencies: [],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarSplit,
  },
  {
    id: "nav-badges",
    name: "Badge Navigation",
    description: "Navigation with notification badges",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Navigation with badges`,
    dependencies: ["lucide-react"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarBadges,
  },
  {
    id: "nav-border-anim",
    name: "Border Animation Nav",
    description: "Navigation with animated border",
    categories: ["navigation", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Border animation navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarBorderAnimation,
  },
  {
    id: "nav-centered-logo",
    name: "Centered Logo Navigation",
    description: "Navigation with centered logo design",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Centered logo navigation`,
    dependencies: [],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarCenteredLogo,
  },
  {
    id: "nav-social",
    name: "Social Navigation",
    description: "Navigation with social media links",
    categories: ["navigation"],
    technologies: ["react", "tailwind"],
    code: `// Navigation with social links`,
    dependencies: [],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-17",
    featured: false,
    previewComponent: NavbarSocial,
  },
  {
    id: "nav-scroll-progress",
    name: "Scroll Progress Navigation",
    description: "Navigation with scroll progress indicator",
    categories: ["navigation", "scrolling-effects"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Scroll progress navigation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-17",
    featured: true,
    previewComponent: NavbarScrollProgress,
  },

  // BUTTONS (10 components)
  {
    id: "button-warp",
    name: "Warp Effect Button",
    description: "CodePen trending liquid warp animation on hover",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Button with warp effect`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: ButtonWarp,
  },
  {
    id: "button-border-revolve",
    name: "Border Revolve Button",
    description: "Animated SVG stroke creating revolving border effect",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "tailwind"],
    code: `// SVG border animation button`,
    dependencies: [],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonBorderRevolve,
  },
  {
    id: "button-burst",
    name: "Burst Effect Button",
    description: "Explosive burst animation on click",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Button burst effect`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonBurst,
  },
  {
    id: "button-inside-out",
    name: "Inside-Out Button",
    description: "Background scales inward along X-axis on hover",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Inside-out button effect`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonInsideOut,
  },
  {
    id: "button-shimmer",
    name: "Shimmer Button",
    description: "Gradient shimmer animation across button surface",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Shimmer effect button`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: ButtonShimmer,
  },
  {
    id: "button-3d-push",
    name: "3D Push Button",
    description: "Three-dimensional button with push animation",
    categories: ["buttons-ctas", "3d-elements"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// 3D push button`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: Button3DPush,
  },
  {
    id: "button-icon-slide",
    name: "Icon Slide Button",
    description: "Icon slides on hover with smooth spring animation",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Icon slide button`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonIconSlide,
  },
  {
    id: "button-gooey",
    name: "Gooey Button",
    description: "Liquid gooey effect using SVG filters",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "tailwind"],
    code: `// Gooey button effect`,
    dependencies: [],
    sourceUrl: "https://tympanus.net/codrops",
    sourceName: "codrops",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonGooey,
  },
  {
    id: "button-neon-glow",
    name: "Neon Glow Button",
    description: "Retro neon glow effect with text shadow",
    categories: ["buttons-ctas", "text-effects"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Neon glow button`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: ButtonNeonGlow,
  },
  {
    id: "button-ripple",
    name: "Ripple Effect Button",
    description: "Material Design-inspired ripple effect on click",
    categories: ["buttons-ctas", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Ripple effect button`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: ButtonRipple,
  },

  // CARDS (8 components)
  {
    id: "card-glass-morph",
    name: "Glassmorphism Card",
    description: "Elegant glass morphism card with hover effects",
    categories: ["cards"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Glassmorphism card component`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: CardGlassMorph,
  },
  {
    id: "card-3d-tilt",
    name: "3D Tilt Card",
    description: "Perspective 3D tilt effect inspired by Aceternity UI",
    categories: ["cards", "3d-elements"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// 3D tilt card`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: Card3DTilt,
  },
  {
    id: "card-gradient-border",
    name: "Gradient Border Card",
    description: "Card with animated gradient border",
    categories: ["cards"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Gradient border card`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: CardGradientBorder,
  },
  {
    id: "card-stacked",
    name: "Stacked Cards",
    description: "Cards that stack with hover reveal effect",
    categories: ["cards", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Stacked cards effect`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: CardStacked,
  },
  {
    id: "card-product",
    name: "Product Card",
    description: "E-commerce product card with image zoom",
    categories: ["cards"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Product card component`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: CardProduct,
  },
  {
    id: "card-stats",
    name: "Stats Card",
    description: "Dashboard statistics card with icon",
    categories: ["cards", "data-visualization"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Stats card component`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: CardStats,
  },
  {
    id: "card-testimonial",
    name: "Testimonial Card",
    description: "Customer review card with stars and avatar",
    categories: ["cards", "testimonials"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Testimonial card`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: CardTestimonial,
  },
  {
    id: "card-pricing",
    name: "Pricing Card",
    description: "Pricing plan card with hover scale effect",
    categories: ["cards", "pricing-tables"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Pricing card component`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: CardPricing,
  },

  // LOADING STATES (10 components)
  {
    id: "loading-spinner-gradient",
    name: "Gradient Spinner",
    description: "Modern spinner with gradient colors",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Gradient spinner loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: LoadingSpinnerGradient,
  },
  {
    id: "loading-dots-bounce",
    name: "Bouncing Dots",
    description: "Three dots bouncing in sequence",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Bouncing dots loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingDotsBounce,
  },
  {
    id: "loading-pulse-ring",
    name: "Pulse Ring",
    description: "Expanding ring pulse animation",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Pulse ring loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://cssloaders.github.io",
    sourceName: "custom",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingPulseRing,
  },
  {
    id: "loading-progress-bar",
    name: "Progress Bar",
    description: "Animated gradient progress bar",
    categories: ["loading-states"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Progress bar loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingProgressBar,
  },
  {
    id: "loading-skeleton",
    name: "Skeleton Card",
    description: "Shimmer skeleton loading effect",
    categories: ["loading-states"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Skeleton loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: LoadingSkeleton,
  },
  {
    id: "loading-circular-progress",
    name: "Circular Progress",
    description: "SVG circular progress indicator",
    categories: ["loading-states"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Circular progress loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingCircularProgress,
  },
  {
    id: "loading-bars-wave",
    name: "Bars Wave",
    description: "Wave animation with vertical bars",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Bars wave loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingBarsWave,
  },
  {
    id: "loading-dna-helix",
    name: "DNA Helix",
    description: "Rotating DNA helix structure",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// DNA helix loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://tympanus.net/codrops",
    sourceName: "codrops",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingDNAHelix,
  },
  {
    id: "loading-orbit",
    name: "Orbit Loader",
    description: "Orbiting circles animation",
    categories: ["loading-states", "animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Orbit loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://codepen.io",
    sourceName: "codepen",
    dateAdded: "2025-11-15",
    featured: true,
    previewComponent: LoadingOrbit,
  },
  {
    id: "loading-text-typing",
    name: "Text Typing",
    description: "Typing dots loading indicator",
    categories: ["loading-states", "text-effects"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// Text typing loader`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://uiverse.io",
    sourceName: "ui-verse",
    dateAdded: "2025-11-15",
    featured: false,
    previewComponent: LoadingTextTyping,
  },

  // FORMS (20 components)
  ...generateFormComponents(),

  // FOOTERS (10 components)
  ...generateFooterComponents(),

  // GALLERIES (12 components)
  ...generateGalleryComponents(),

  // MODALS (15 components)
  ...generateModalComponents(),

  // ANIMATIONS (15 components)
  ...generateAnimationComponents(),

  // Additional components to reach 250 total
  ...generateAdditionalComponents(),
];

// Helper functions to generate component data
function generateFormComponents(): Component[] {
  const forms = [
    { id: "form-login-glass", name: "Glass Login Form", comp: FormLoginGlass },
    { id: "form-signup-animated", name: "Animated Signup Form", comp: FormSignupAnimated },
    { id: "form-contact", name: "Contact Form", comp: FormContact },
    { id: "form-search", name: "Search Form", comp: FormSearch },
    { id: "form-newsletter", name: "Newsletter Form", comp: FormNewsletter },
    { id: "form-password-toggle", name: "Password Toggle Form", comp: FormPasswordToggle },
    { id: "form-multi-step", name: "Multi-Step Form", comp: FormMultiStep },
    { id: "form-phone", name: "Phone Input Form", comp: FormPhone },
    { id: "form-address", name: "Address Form", comp: FormAddress },
    { id: "form-date-picker", name: "Date Picker Form", comp: FormDatePicker },
    { id: "form-payment", name: "Payment Form", comp: FormPayment },
    { id: "form-file-upload", name: "File Upload Form", comp: FormFileUpload },
    { id: "form-checkbox", name: "Checkbox Form", comp: FormCheckbox },
    { id: "form-radio", name: "Radio Button Form", comp: FormRadio },
    { id: "form-select", name: "Select Dropdown Form", comp: FormSelect },
    { id: "form-range", name: "Range Slider Form", comp: FormRange },
    { id: "form-inline", name: "Inline Form", comp: FormInline },
    { id: "form-floating-label", name: "Floating Label Form", comp: FormFloatingLabel },
    { id: "form-success", name: "Success State Form", comp: FormSuccess },
    { id: "form-validation", name: "Validation Form", comp: FormValidation },
  ];

  return forms.map((form, i) => ({
    id: form.id,
    name: form.name,
    description: `${form.name} component with modern design`,
    categories: ["forms"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// ${form.name} implementation`,
    dependencies: ["framer-motion", "lucide-react"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-17",
    featured: i < 3,
    previewComponent: form.comp,
  }));
}

function generateFooterComponents(): Component[] {
  const footers = [
    { id: "footer-simple", name: "Simple Footer", comp: FooterSimple },
    { id: "footer-social", name: "Social Footer", comp: FooterSocial },
    { id: "footer-columns", name: "Column Footer", comp: FooterColumns },
    { id: "footer-newsletter", name: "Newsletter Footer", comp: FooterNewsletter },
    { id: "footer-contact", name: "Contact Footer", comp: FooterContact },
    { id: "footer-cta", name: "CTA Footer", comp: FooterCTA },
    { id: "footer-logo", name: "Logo Footer", comp: FooterLogo },
    { id: "footer-wave", name: "Wave Footer", comp: FooterWave },
    { id: "footer-heart", name: "Heart Footer", comp: FooterHeart },
    { id: "footer-all-socials", name: "All Socials Footer", comp: FooterAllSocials },
  ];

  return footers.map((footer, i) => ({
    id: footer.id,
    name: footer.name,
    description: `${footer.name} with modern styling`,
    categories: ["footers"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// ${footer.name} implementation`,
    dependencies: ["lucide-react"],
    sourceUrl: "https://dribbble.com",
    sourceName: "dribbble",
    dateAdded: "2025-11-17",
    featured: i < 2,
    previewComponent: footer.comp,
  }));
}

function generateGalleryComponents(): Component[] {
  const galleries = [
    { id: "gallery-masonry", name: "Masonry Gallery", comp: GalleryMasonry },
    { id: "gallery-grid", name: "Grid Gallery", comp: GalleryGrid },
    { id: "gallery-lightbox", name: "Lightbox Gallery", comp: GalleryLightbox },
    { id: "gallery-hover-zoom", name: "Hover Zoom Gallery", comp: GalleryHoverZoom },
    { id: "gallery-stacked", name: "Stacked Gallery", comp: GalleryStacked },
    { id: "gallery-infinite-scroll", name: "Infinite Scroll Gallery", comp: GalleryInfiniteScroll },
    { id: "gallery-card-flip", name: "Card Flip Gallery", comp: GalleryCardFlip },
    { id: "gallery-polaroid", name: "Polaroid Gallery", comp: GalleryPolaroid },
    { id: "gallery-horizontal-scroll", name: "Horizontal Scroll Gallery", comp: GalleryHorizontalScroll },
    { id: "gallery-ken-burns", name: "Ken Burns Gallery", comp: GalleryKenBurns },
    { id: "gallery-parallax", name: "Parallax Gallery", comp: GalleryParallax },
    { id: "gallery-thumbnails", name: "Thumbnail Gallery", comp: GalleryThumbnails },
  ];

  return galleries.map((gallery, i) => ({
    id: gallery.id,
    name: gallery.name,
    description: `${gallery.name} with advanced features`,
    categories: ["galleries"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// ${gallery.name} implementation`,
    dependencies: ["framer-motion", "lucide-react"],
    sourceUrl: "https://www.awwwards.com",
    sourceName: "awwwards",
    dateAdded: "2025-11-17",
    featured: i < 3,
    previewComponent: gallery.comp,
  }));
}

function generateModalComponents(): Component[] {
  const modals = [
    { id: "modal-basic", name: "Basic Modal", comp: ModalBasic },
    { id: "modal-centered", name: "Centered Modal", comp: ModalCentered },
    { id: "modal-slide-up", name: "Slide Up Modal", comp: ModalSlideUp },
    { id: "modal-alert", name: "Alert Modal", comp: ModalAlert },
    { id: "modal-success", name: "Success Modal", comp: ModalSuccess },
    { id: "modal-info", name: "Info Modal", comp: ModalInfo },
    { id: "modal-confirm", name: "Confirm Modal", comp: ModalConfirm },
    { id: "modal-fullscreen", name: "Fullscreen Modal", comp: ModalFullScreen },
    { id: "modal-side-panel", name: "Side Panel Modal", comp: ModalSidePanel },
    { id: "modal-dialog", name: "Dialog Modal", comp: ModalDialog },
    { id: "modal-video", name: "Video Modal", comp: ModalVideo },
    { id: "modal-image", name: "Image Modal", comp: ModalImage },
    { id: "modal-form", name: "Form Modal", comp: ModalForm },
    { id: "modal-tooltip", name: "Tooltip Modal", comp: ModalTooltip },
    { id: "modal-multi-step", name: "Multi-Step Modal", comp: ModalMultiStep },
  ];

  return modals.map((modal, i) => ({
    id: modal.id,
    name: modal.name,
    description: `${modal.name} with smooth animations`,
    categories: ["modals-overlays"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// ${modal.name} implementation`,
    dependencies: ["framer-motion", "lucide-react"],
    sourceUrl: "https://ui.aceternity.com",
    sourceName: "aceternity",
    dateAdded: "2025-11-17",
    featured: i < 3,
    previewComponent: modal.comp,
  }));
}

function generateAnimationComponents(): Component[] {
  const animations = [
    { id: "anim-fade-in", name: "Fade In", comp: AnimFadeIn },
    { id: "anim-slide-up", name: "Slide Up", comp: AnimSlideUp },
    { id: "anim-slide-down", name: "Slide Down", comp: AnimSlideDown },
    { id: "anim-slide-left", name: "Slide Left", comp: AnimSlideLeft },
    { id: "anim-slide-right", name: "Slide Right", comp: AnimSlideRight },
    { id: "anim-scale", name: "Scale", comp: AnimScale },
    { id: "anim-rotate", name: "Rotate", comp: AnimRotate },
    { id: "anim-bounce", name: "Bounce", comp: AnimBounce },
    { id: "anim-pulse", name: "Pulse", comp: AnimPulse },
    { id: "anim-shake", name: "Shake", comp: AnimShake },
    { id: "anim-flip", name: "Flip", comp: AnimFlip },
    { id: "anim-swing", name: "Swing", comp: AnimSwing },
    { id: "anim-rubber-band", name: "Rubber Band", comp: AnimRubberBand },
    { id: "anim-wobble", name: "Wobble", comp: AnimWobble },
    { id: "anim-glow", name: "Glow", comp: AnimGlow },
  ];

  return animations.map((anim, i) => ({
    id: anim.id,
    name: `${anim.name} Animation`,
    description: `${anim.name} animation effect`,
    categories: ["animations"],
    technologies: ["react", "framer-motion", "tailwind"],
    code: `// ${anim.name} animation`,
    dependencies: ["framer-motion"],
    sourceUrl: "https://magicui.design",
    sourceName: "magic-ui",
    dateAdded: "2025-11-17",
    featured: i < 3,
    previewComponent: anim.comp,
  }));
}

function generateAdditionalComponents(): Component[] {
  const additional: Component[] = [];

  // Carousels & Sliders (15 components)
  const carouselComponents = [
    { id: "carousel-auto", name: "Auto Carousel", comp: CarouselAuto, desc: "Auto-playing carousel with smooth transitions" },
    { id: "carousel-arrows", name: "Carousel with Arrows", comp: CarouselArrows, desc: "Interactive carousel with navigation arrows" },
    { id: "carousel-3d", name: "3D Carousel", comp: Carousel3D, desc: "3D perspective carousel effect" },
    { id: "slider-fade", name: "Fade Slider", comp: SliderFade, desc: "Smooth fade transition slider" },
    { id: "carousel-cards", name: "Card Carousel", comp: CarouselCards, desc: "Product card carousel showcase" },
    { id: "carousel-infinite", name: "Infinite Carousel", comp: CarouselInfinite, desc: "Continuously scrolling carousel" },
    { id: "carousel-thumbnails", name: "Thumbnail Carousel", comp: CarouselThumbnails, desc: "Carousel with thumbnail navigation" },
    { id: "slider-vertical", name: "Vertical Slider", comp: SliderVertical, desc: "Vertical sliding carousel" },
    { id: "slider-parallax", name: "Parallax Slider", comp: SliderParallax, desc: "Interactive parallax effect slider" },
    { id: "carousel-coverflow", name: "CoverFlow Carousel", comp: CarouselCoverFlow, desc: "Apple-style coverflow carousel" },
    { id: "carousel-testimonial", name: "Testimonial Carousel", comp: CarouselTestimonial, desc: "Customer testimonial carousel" },
    { id: "carousel-multi", name: "Multi-Item Carousel", comp: CarouselMultiItem, desc: "Multiple items carousel display" },
    { id: "carousel-snap", name: "Snap Scroll Carousel", comp: CarouselSnapScroll, desc: "Snap-to-position carousel" },
    { id: "carousel-kenburns", name: "Ken Burns Carousel", comp: CarouselKenburns, desc: "Ken Burns effect carousel" },
    { id: "carousel-progress", name: "Progress Carousel", comp: CarouselProgress, desc: "Carousel with progress indicator" },
  ];

  // Testimonials (15 components)
  const testimonialComponents = [
    { id: "testimonial-card", name: "Card Testimonial", comp: TestimonialCard, desc: "Simple card-style testimonial" },
    { id: "testimonial-quote", name: "Quote Testimonial", comp: TestimonialQuote, desc: "Quote-style testimonial design" },
    { id: "testimonial-grid", name: "Grid Testimonials", comp: TestimonialGrid, desc: "Grid layout testimonials" },
    { id: "testimonial-floating", name: "Floating Testimonial", comp: TestimonialFloating, desc: "Floating avatar testimonial" },
    { id: "testimonial-video", name: "Video Testimonial", comp: TestimonialVideo, desc: "Video-style testimonial card" },
    { id: "testimonial-minimal", name: "Minimal Testimonial", comp: TestimonialMinimal, desc: "Clean minimal testimonial" },
    { id: "testimonial-stats", name: "Stats Testimonial", comp: TestimonialStats, desc: "Testimonial with statistics" },
    { id: "testimonial-badge", name: "Badge Testimonial", comp: TestimonialBadge, desc: "Award badge testimonial" },
    { id: "testimonial-company", name: "Company Testimonial", comp: TestimonialCompany, desc: "Company logo testimonial" },
    { id: "testimonial-social", name: "Social Testimonial", comp: TestimonialSocial, desc: "Social media style testimonial" },
    { id: "testimonial-before-after", name: "Before/After Testimonial", comp: TestimonialBeforeAfter, desc: "Results comparison testimonial" },
    { id: "testimonial-carousel-item", name: "Carousel Testimonial", comp: TestimonialCarouselItem, desc: "Carousel item testimonial" },
    { id: "testimonial-long", name: "Long Form Testimonial", comp: TestimonialLongForm, desc: "Detailed long-form testimonial" },
    { id: "testimonial-compact", name: "Compact Testimonial", comp: TestimonialCompact, desc: "Compact testimonial design" },
    { id: "testimonial-featured", name: "Featured Testimonial", comp: TestimonialFeatured, desc: "Hero-style featured testimonial" },
  ];

  // Pricing Tables (15 components)
  const pricingComponents = [
    { id: "pricing-simple", name: "Simple Pricing", comp: PricingSimple, desc: "Clean simple pricing card" },
    { id: "pricing-three-tier", name: "Three Tier Pricing", comp: PricingThreeTier, desc: "Three-column pricing table" },
    { id: "pricing-popular", name: "Popular Badge Pricing", comp: PricingPopular, desc: "Pricing with popular badge" },
    { id: "pricing-toggle", name: "Toggle Pricing", comp: PricingToggle, desc: "Monthly/yearly toggle pricing" },
    { id: "pricing-comparison", name: "Comparison Table", comp: PricingComparison, desc: "Feature comparison pricing" },
    { id: "pricing-minimal", name: "Minimal Pricing", comp: PricingMinimal, desc: "Minimalist pricing design" },
    { id: "pricing-gradient", name: "Gradient Pricing", comp: PricingGradient, desc: "Gradient border pricing card" },
    { id: "pricing-free", name: "Free Plan Pricing", comp: PricingFree, desc: "Free tier pricing option" },
    { id: "pricing-highlighted", name: "Highlighted Pricing", comp: PricingHighlighted, desc: "Highlighted features pricing" },
    { id: "pricing-dark", name: "Dark Theme Pricing", comp: PricingDark, desc: "Dark mode pricing table" },
    { id: "pricing-compact", name: "Compact Row Pricing", comp: PricingCompactRow, desc: "Compact horizontal pricing" },
    { id: "pricing-annual", name: "Annual Pricing", comp: PricingAnnual, desc: "Annual plan pricing card" },
    { id: "pricing-usage", name: "Usage-Based Pricing", comp: PricingUsageBased, desc: "Pay-as-you-go pricing" },
    { id: "pricing-enterprise", name: "Enterprise Pricing", comp: PricingEnterprise, desc: "Enterprise plan pricing" },
    { id: "pricing-limited", name: "Limited Offer Pricing", comp: PricingLimitedOffer, desc: "Time-limited offer pricing" },
  ];

  // Data Visualization (15 components)
  const dataVizComponents = [
    { id: "chart-bar", name: "Bar Chart", comp: ChartBar, desc: "Animated bar chart visualization" },
    { id: "chart-line", name: "Line Chart", comp: ChartLine, desc: "Line chart with animations" },
    { id: "chart-donut", name: "Donut Chart", comp: ChartDonut, desc: "Circular donut chart" },
    { id: "dashboard-stats", name: "Stats Dashboard", comp: DashboardStats, desc: "Statistics dashboard cards" },
    { id: "progress-bars", name: "Progress Bars", comp: ProgressBars, desc: "Animated progress bars" },
    { id: "heatmap", name: "Heatmap", comp: Heatmap, desc: "Activity heatmap visualization" },
    { id: "chart-area", name: "Area Chart", comp: ChartArea, desc: "Area chart with gradient fill" },
    { id: "metric-cards", name: "Metric Cards", comp: MetricCards, desc: "Key metric cards display" },
    { id: "sparkline", name: "Sparkline", comp: Sparkline, desc: "Inline sparkline chart" },
    { id: "chart-gauge", name: "Gauge Chart", comp: ChartGauge, desc: "Gauge meter visualization" },
    { id: "chart-comparison", name: "Comparison Chart", comp: ChartComparison, desc: "Side-by-side comparison" },
    { id: "progress-radial", name: "Radial Progress", comp: ProgressRadial, desc: "Circular progress indicators" },
    { id: "chart-stacked", name: "Stacked Bar Chart", comp: ChartStackedBar, desc: "Stacked bar visualization" },
    { id: "dashboard-kpi", name: "KPI Dashboard", comp: DashboardKPI, desc: "Key performance indicators" },
    { id: "chart-timeline", name: "Timeline Chart", comp: ChartTimeline, desc: "Project timeline visualization" },
  ];

  // Scrolling Effects (15 components)
  const scrollingComponents = [
    { id: "scroll-parallax", name: "Parallax Scroll", comp: ScrollParallax, desc: "Parallax scrolling effect" },
    { id: "scroll-fade", name: "Fade In Scroll", comp: ScrollFadeIn, desc: "Fade in on scroll animation" },
    { id: "scroll-progress", name: "Scroll Progress Bar", comp: ScrollProgress, desc: "Page scroll progress indicator" },
    { id: "scroll-slide-up", name: "Slide Up Scroll", comp: ScrollSlideUp, desc: "Slide up reveal on scroll" },
    { id: "scroll-sticky", name: "Sticky Header", comp: ScrollStickyHeader, desc: "Sticky navigation header" },
    { id: "scroll-reveal", name: "Reveal Cards", comp: ScrollRevealCards, desc: "Cards reveal on scroll" },
    { id: "scroll-zoom", name: "Zoom Scroll", comp: ScrollZoom, desc: "Zoom effect on scroll" },
    { id: "scroll-snap", name: "Snap Sections", comp: ScrollSnapSections, desc: "Snap scroll sections" },
    { id: "scroll-horizontal", name: "Horizontal Scroll", comp: ScrollHorizontal, desc: "Horizontal scrolling gallery" },
    { id: "scroll-stagger", name: "Stagger Animation", comp: ScrollStagger, desc: "Staggered scroll animations" },
    { id: "scroll-rotate", name: "Rotate Scroll", comp: ScrollRotate, desc: "Rotation on scroll effect" },
    { id: "scroll-back-top", name: "Back to Top", comp: ScrollBackToTop, desc: "Back to top button" },
    { id: "scroll-indicator", name: "Scroll Indicator", comp: ScrollIndicator, desc: "Scroll down indicator" },
    { id: "scroll-blur", name: "Blur Scroll", comp: ScrollBlur, desc: "Blur effect on scroll" },
    { id: "scroll-color", name: "Color Change Scroll", comp: ScrollColorChange, desc: "Color transition on scroll" },
  ];

  // Text Effects (20 components)
  const textComponents = [
    { id: "text-gradient", name: "Gradient Text", comp: TextGradient, desc: "Colorful gradient text" },
    { id: "text-glitch", name: "Glitch Text", comp: TextGlitch, desc: "Glitch effect text animation" },
    { id: "text-typing", name: "Typing Animation", comp: TextTyping, desc: "Typewriter effect text" },
    { id: "text-neon", name: "Neon Text", comp: TextNeon, desc: "Glowing neon text effect" },
    { id: "text-fade-in", name: "Fade In Text", comp: TextFadeIn, desc: "Fade in text animation" },
    { id: "text-bounce", name: "Bounce Text", comp: TextBounce, desc: "Bouncing text animation" },
    { id: "text-stroke", name: "Stroke Text", comp: TextStroke, desc: "Outlined stroke text" },
    { id: "text-shadow", name: "3D Shadow Text", comp: TextShadow, desc: "3D shadow text effect" },
    { id: "text-wave", name: "Wave Text", comp: TextWave, desc: "Wave animation text" },
    { id: "text-rotate", name: "Rotating Words", comp: TextRotateWords, desc: "Auto-rotating words" },
    { id: "text-blur", name: "Blur Reveal Text", comp: TextBlur, desc: "Blur to clear text reveal" },
    { id: "text-scale", name: "Scale Pulse Text", comp: TextScale, desc: "Pulsing scale text" },
    { id: "text-split", name: "Split Text", comp: TextSplit, desc: "Split reveal text animation" },
    { id: "text-underline", name: "Animated Underline", comp: TextUnderline, desc: "Hover underline animation" },
    { id: "text-shimmer", name: "Shimmer Text", comp: TextShimmer, desc: "Shimmering text effect" },
    { id: "text-rainbow", name: "Rainbow Text", comp: TextRainbow, desc: "Rainbow gradient text" },
    { id: "text-highlight", name: "Highlighted Text", comp: TextHighlight, desc: "Highlighted text effect" },
    { id: "text-flip", name: "Flip Text", comp: TextFlip, desc: "3D flip text animation" },
    { id: "text-stagger", name: "Stagger Reveal", comp: TextStagger, desc: "Staggered text reveal" },
    { id: "text-glow", name: "Glowing Text", comp: TextGlow, desc: "Pulsing glow text effect" },
  ];

  // Backgrounds (20 components)
  const backgroundComponents = [
    { id: "bg-gradient", name: "Gradient Background", comp: BackgroundGradient, desc: "Smooth gradient background" },
    { id: "bg-mesh", name: "Mesh Gradient", comp: BackgroundMesh, desc: "Mesh gradient overlay" },
    { id: "bg-animated-gradient", name: "Animated Gradient", comp: BackgroundAnimatedGradient, desc: "Animated color gradient" },
    { id: "bg-dots", name: "Dots Pattern", comp: BackgroundDots, desc: "Dotted pattern background" },
    { id: "bg-grid", name: "Grid Pattern", comp: BackgroundGrid, desc: "Grid line background" },
    { id: "bg-stripes", name: "Diagonal Stripes", comp: BackgroundStripes, desc: "Striped pattern background" },
    { id: "bg-glass", name: "Glassmorphism", comp: BackgroundGlass, desc: "Glass blur background" },
    { id: "bg-radial", name: "Radial Gradient", comp: BackgroundRadial, desc: "Radial gradient background" },
    { id: "bg-blob", name: "Animated Blobs", comp: BackgroundBlob, desc: "Floating blob animations" },
    { id: "bg-noise", name: "Noise Texture", comp: BackgroundNoise, desc: "Noise texture background" },
    { id: "bg-conic", name: "Conic Gradient", comp: BackgroundConic, desc: "Conic rainbow gradient" },
    { id: "bg-wave", name: "Wave Background", comp: BackgroundWave, desc: "Wave shape background" },
    { id: "bg-particles", name: "Particles", comp: BackgroundParticles, desc: "Floating particles effect" },
    { id: "bg-checkerboard", name: "Checkerboard", comp: BackgroundCheckerboard, desc: "Checkerboard pattern" },
    { id: "bg-duotone", name: "Duotone", comp: BackgroundDuotone, desc: "Duotone color overlay" },
    { id: "bg-spotlight", name: "Spotlight", comp: BackgroundSpotlight, desc: "Spotlight effect background" },
    { id: "bg-gradient-border", name: "Gradient Border", comp: BackgroundGradientBorder, desc: "Gradient border effect" },
    { id: "bg-aurora", name: "Aurora", comp: BackgroundAurora, desc: "Aurora light effect" },
    { id: "bg-comic", name: "Comic Book", comp: BackgroundComic, desc: "Comic book dots pattern" },
    { id: "bg-sunset", name: "Sunset Gradient", comp: BackgroundSunset, desc: "Sunset color gradient" },
  ];

  // 3D Elements (15 components)
  const threeDComponents = [
    { id: "3d-card", name: "3D Tilt Card", comp: Card3D, desc: "Interactive 3D tilt card" },
    { id: "3d-cube", name: "Floating Cube", comp: Cube3D, desc: "Rotating 3D cube" },
    { id: "3d-flip-card", name: "Flip Card", comp: CardFlip, desc: "Card flip 3D animation" },
    { id: "3d-button-levitate", name: "Levitating Button", comp: ButtonLevitate, desc: "Floating hover button" },
    { id: "3d-stack", name: "3D Stack", comp: Stack3D, desc: "Layered 3D stack effect" },
    { id: "3d-ring", name: "Rotating Ring", comp: Ring3D, desc: "3D rotating ring" },
    { id: "3d-isometric", name: "Isometric Box", comp: BoxIsometric, desc: "Isometric 3D box" },
    { id: "3d-button-press", name: "3D Press Button", comp: ButtonPress3D, desc: "Pressable 3D button" },
    { id: "3d-text-perspective", name: "Perspective Text", comp: TextPerspective, desc: "3D perspective text" },
    { id: "3d-pyramid", name: "Spinning Pyramid", comp: Pyramid3D, desc: "Rotating 3D pyramid" },
    { id: "3d-badge", name: "3D Badge", comp: Badge3D, desc: "Flippable 3D badge" },
    { id: "3d-layers", name: "Depth Layers", comp: LayersDepth, desc: "Multi-layer depth effect" },
    { id: "3d-frame-tilt", name: "Tilted Frame", comp: FrameTilt, desc: "Interactive tilt frame" },
    { id: "3d-card-folded", name: "Folded Card", comp: CardFolded, desc: "Folded paper card effect" },
    { id: "3d-text-extruded", name: "Extruded Text", comp: TextExtruded, desc: "3D extruded text layers" },
  ];

  // Add all components to the array
  [...carouselComponents, ...testimonialComponents, ...pricingComponents,
   ...dataVizComponents, ...scrollingComponents, ...textComponents,
   ...backgroundComponents, ...threeDComponents].forEach((item, i) => {
    const category = item.id.split("-")[0] === "carousel" || item.id.split("-")[0] === "slider" ? "carousels-sliders" :
                     item.id.split("-")[0] === "testimonial" ? "testimonials" :
                     item.id.split("-")[0] === "pricing" ? "pricing-tables" :
                     item.id.split("-")[0] === "chart" || item.id.split("-")[0] === "dashboard" || item.id.split("-")[0] === "progress" || item.id.split("-")[0] === "metric" || item.id.split("-")[0] === "sparkline" || item.id.split("-")[0] === "heatmap" ? "data-visualization" :
                     item.id.split("-")[0] === "scroll" ? "scrolling-effects" :
                     item.id.split("-")[0] === "text" ? "text-effects" :
                     item.id.split("-")[0] === "bg" ? "backgrounds" :
                     "3d-elements";

    additional.push({
      id: item.id,
      name: item.name,
      description: item.desc,
      categories: [category as any, "animations"],
      technologies: ["react", "framer-motion", "tailwind"],
      code: `// ${item.name} component implementation`,
      dependencies: ["framer-motion"],
      sourceUrl: "https://ui.aceternity.com",
      sourceName: "aceternity",
      dateAdded: "2025-11-17",
      featured: i % 20 === 0,
      previewComponent: item.comp,
    });
  });

  return additional;
}

// Export count for each category
export const categoryCounts = componentsData.reduce((acc, comp) => {
  comp.categories.forEach((cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
  });
  return acc;
}, {} as Record<string, number>);

// Get featured components
export const featuredComponents = componentsData.filter((comp) => comp.featured);

// Get components by category
export function getComponentsByCategory(categoryId: string) {
  return componentsData.filter((comp) => comp.categories.includes(categoryId as any));
}

// Search components
export function searchComponents(query: string) {
  const lowerQuery = query.toLowerCase();
  return componentsData.filter(
    (comp) =>
      comp.name.toLowerCase().includes(lowerQuery) ||
      comp.description.toLowerCase().includes(lowerQuery) ||
      comp.categories.some((cat) => cat.toLowerCase().includes(lowerQuery)) ||
      comp.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery))
  );
}
