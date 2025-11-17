"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUp, ChevronDown } from "lucide-react";

// Parallax Scroll
export function ScrollParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative w-full max-w-md h-64 overflow-hidden rounded-xl">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold"
      >
        Scroll Effect
      </motion.div>
    </div>
  );
}

// Fade In on Scroll
export function ScrollFadeIn() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-8 text-white text-center"
    >
      <h3 className="text-2xl font-bold">Fade In Effect</h3>
    </motion.div>
  );
}

// Scroll Progress Bar
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="w-full max-w-md">
      <motion.div
        style={{ scaleX }}
        className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full origin-left"
      />
      <div className="mt-4 bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-700">Scroll to see the progress bar fill up</p>
      </div>
    </div>
  );
}

// Slide Up Animation
export function ScrollSlideUp() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6 }}
      className="max-w-md bg-white rounded-xl shadow-xl p-8"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">Slide Up Effect</h3>
      <p className="text-gray-600">Content appears as you scroll</p>
    </motion.div>
  );
}

// Sticky Header
export function ScrollStickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-md">
      <motion.div
        animate={{ y: isSticky ? 0 : 0, boxShadow: isSticky ? "0 4px 6px rgba(0,0,0,0.1)" : "none" }}
        className="bg-white rounded-xl p-4 text-center font-bold text-gray-900"
      >
        Sticky Header
      </motion.div>
    </div>
  );
}

// Scroll Reveal Cards
export function ScrollRevealCards() {
  const cards = ["Card 1", "Card 2", "Card 3"];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white text-center font-bold"
        >
          {card}
        </motion.div>
      ))}
    </div>
  );
}

// Zoom on Scroll
export function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div ref={ref} className="w-full max-w-md h-64 flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="w-48 h-48 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
      >
        Zoom Effect
      </motion.div>
    </div>
  );
}

// Scroll Snap Sections
export function ScrollSnapSections() {
  const sections = ["Section 1", "Section 2", "Section 3"];

  return (
    <div className="w-full max-w-md h-64 overflow-y-auto snap-y snap-mandatory rounded-xl">
      {sections.map((section, i) => (
        <div
          key={i}
          className={`h-64 snap-start flex items-center justify-center text-white text-2xl font-bold ${
            i === 0 ? "bg-gradient-to-br from-red-500 to-pink-500" :
            i === 1 ? "bg-gradient-to-br from-blue-500 to-purple-500" :
            "bg-gradient-to-br from-green-500 to-teal-500"
          }`}
        >
          {section}
        </div>
      ))}
    </div>
  );
}

// Horizontal Scroll
export function ScrollHorizontal() {
  return (
    <div className="w-full max-w-2xl overflow-x-auto hide-scrollbar">
      <div className="flex gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold"
          >
            Item {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Stagger Animation
export function ScrollStagger() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="max-w-md space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-white rounded-lg shadow-md p-4 text-gray-900 font-semibold"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

// Rotate on Scroll
export function ScrollRotate() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className="w-full max-w-md h-64 flex items-center justify-center">
      <motion.div
        style={{ rotate }}
        className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold"
      >
        Rotate
      </motion.div>
    </div>
  );
}

// Back to Top Button
export function ScrollBackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
}

// Scroll Indicator
export function ScrollIndicator() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Scroll Down</h3>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex justify-center"
      >
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </motion.div>
    </div>
  );
}

// Blur on Scroll
export function ScrollBlur() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div ref={ref} className="w-full max-w-md h-64 flex items-center justify-center overflow-hidden rounded-xl">
      <motion.div
        style={{ filter: `blur(${blur}px)` } as any}
        className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold"
      >
        Blur Effect
      </motion.div>
    </div>
  );
}

// Color Change on Scroll
export function ScrollColorChange() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(239, 68, 68)", "rgb(59, 130, 246)", "rgb(34, 197, 94)"]
  );

  return (
    <div ref={ref} className="w-full max-w-md h-64 flex items-center justify-center">
      <motion.div
        style={{ backgroundColor } as any}
        className="w-64 h-48 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-xl"
      >
        Color Shift
      </motion.div>
    </div>
  );
}
