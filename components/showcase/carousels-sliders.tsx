"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Simple Auto Carousel
export function CarouselAuto() {
  const [current, setCurrent] = useState(0);
  const images = ["🏔️", "🌊", "🌅", "🌲", "🏖️"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg h-48 flex items-center justify-center text-6xl">
        {images[current]}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === current ? "bg-purple-500 w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Carousel with Arrows
export function CarouselArrows() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { emoji: "🎨", title: "Creative Design" },
    { emoji: "⚡", title: "Fast Performance" },
    { emoji: "🔒", title: "Secure Platform" },
  ];

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-md">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl h-56 flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">{slides[current].emoji}</div>
        <h3 className="text-white text-xl font-bold">{slides[current].title}</h3>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

// 3D Carousel
export function Carousel3D() {
  const [active, setActive] = useState(1);
  const items = ["🎭", "🎪", "🎨", "🎬", "🎮"];

  return (
    <div className="relative w-full max-w-lg h-64 flex items-center justify-center gap-4">
      {items.map((item, i) => {
        const offset = i - active;
        const absOffset = Math.abs(offset);
        return (
          <motion.div
            key={i}
            className="absolute cursor-pointer"
            animate={{
              x: offset * 80,
              scale: 1 - absOffset * 0.3,
              zIndex: 5 - absOffset,
              opacity: absOffset > 1 ? 0 : 1 - absOffset * 0.4,
            }}
            onClick={() => setActive(i)}
          >
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl w-32 h-40 flex items-center justify-center text-5xl shadow-lg">
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Fade Transition Slider
export function SliderFade() {
  const [index, setIndex] = useState(0);
  const content = [
    { bg: "from-red-500 to-orange-500", text: "Slide 1" },
    { bg: "from-green-500 to-teal-500", text: "Slide 2" },
    { bg: "from-blue-500 to-purple-500", text: "Slide 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % content.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md h-64 overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${content[index].bg} flex items-center justify-center`}
        >
          <h2 className="text-white text-4xl font-bold">{content[index].text}</h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Card Carousel
export function CarouselCards() {
  const [current, setCurrent] = useState(0);
  const cards = [
    { title: "Product 1", price: "$99", rating: 4.5 },
    { title: "Product 2", price: "$149", rating: 5.0 },
    { title: "Product 3", price: "$79", rating: 4.8 },
  ];

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg h-40 mb-4" />
        <h3 className="text-xl font-bold mb-2">{cards[current].title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">{cards[current].price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{cards[current].rating}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-indigo-600 w-8" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Infinite Scroll Carousel
export function CarouselInfinite() {
  const items = ["🎸", "🎹", "🥁", "🎺", "🎻", "🎸", "🎹", "🥁"];

  return (
    <div className="w-full max-w-md overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -400] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-4xl"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Thumbnail Carousel
export function CarouselThumbnails() {
  const [selected, setSelected] = useState(0);
  const images = ["🌄", "🏔️", "🌅", "🌊"];

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl h-56 flex items-center justify-center text-8xl">
        {images[selected]}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`h-16 rounded-lg flex items-center justify-center text-3xl transition-all ${
              i === selected
                ? "bg-gradient-to-br from-teal-500 to-cyan-500 scale-105 ring-4 ring-teal-300"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {img}
          </button>
        ))}
      </div>
    </div>
  );
}

// Vertical Slider
export function SliderVertical() {
  const [index, setIndex] = useState(0);
  const slides = ["🚀", "⭐", "🌙", "☀️"];

  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-2xl bg-gray-900">
      <motion.div
        animate={{ y: -index * 320 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute w-full"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="h-80 flex items-center justify-center text-9xl"
          >
            {slide}
          </div>
        ))}
      </motion.div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Parallax Slider
export function SliderParallax() {
  const [offset, setOffset] = useState(0);

  return (
    <div
      className="relative w-full max-w-md h-64 overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOffset(((e.clientX - rect.left) / rect.width - 0.5) * 40);
      }}
      onMouseLeave={() => setOffset(0)}
    >
      <motion.div
        animate={{ x: offset }}
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold"
      >
        Move Your Mouse
      </motion.div>
    </div>
  );
}

// Cover Flow Carousel
export function CarouselCoverFlow() {
  const [center, setCenter] = useState(2);
  const items = ["🎵", "🎶", "🎼", "🎤", "🎧"];

  return (
    <div className="flex items-center justify-center gap-2 w-full max-w-2xl h-64">
      {items.map((item, i) => {
        const offset = i - center;
        const isCentered = i === center;
        return (
          <motion.div
            key={i}
            className="cursor-pointer"
            animate={{
              scale: isCentered ? 1.2 : 0.8,
              rotateY: offset * -20,
              x: offset * -30,
              zIndex: isCentered ? 10 : 5 - Math.abs(offset),
            }}
            onClick={() => setCenter(i)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-32 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-5xl shadow-2xl">
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Testimonial Carousel
export function CarouselTestimonial() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { text: "Amazing product!", author: "John D." },
    { text: "Highly recommend!", author: "Sarah M." },
    { text: "Best purchase ever!", author: "Mike R." },
  ];

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <Quote className="w-12 h-12 text-indigo-500 mb-4" />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <p className="text-gray-700 text-lg mb-4">{testimonials[current].text}</p>
          <p className="text-indigo-600 font-semibold">— {testimonials[current].author}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-indigo-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Multi-Item Carousel
export function CarouselMultiItem() {
  const items = ["📱", "💻", "⌚", "🎧", "📷", "🖥️"];

  return (
    <div className="w-full max-w-2xl overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -600] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-5xl shadow-lg"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Snap Scroll Carousel
export function CarouselSnapScroll() {
  const colors = [
    "from-red-500 to-pink-500",
    "from-yellow-500 to-orange-500",
    "from-green-500 to-teal-500",
    "from-blue-500 to-indigo-500",
  ];

  return (
    <div className="w-full max-w-md h-64 overflow-x-auto snap-x snap-mandatory flex gap-4 rounded-xl hide-scrollbar">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`flex-shrink-0 w-full h-full snap-center bg-gradient-to-br ${color} rounded-xl flex items-center justify-center`}
        >
          <span className="text-white text-4xl font-bold">Slide {i + 1}</span>
        </div>
      ))}
    </div>
  );
}

// Kenburns Effect Carousel
export function CarouselKenburns() {
  const [index, setIndex] = useState(0);
  const slides = ["🏝️", "🏔️", "🌃"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md h-64 overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 5 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-9xl"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Progress Bar Carousel
export function CarouselProgress() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = ["🎯", "🎪", "🎭"];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl h-56 flex items-center justify-center text-8xl">
        {slides[current]}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          animate={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
