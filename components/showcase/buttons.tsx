"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Heart, Send, Star } from "lucide-react";
import { useState } from "react";

// Button 1: Warp Effect (CodePen trending)
export function ButtonWarp() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <span className="relative z-10">Hover Me</span>
    </motion.button>
  );
}

// Button 2: Border Revolve Effect
export function ButtonBorderRevolve() {
  return (
    <button className="relative px-8 py-4 bg-transparent text-white font-semibold rounded-lg overflow-hidden group">
      <svg className="absolute inset-0 w-full h-full">
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="8"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset="0"
          className="group-hover:animate-[dash_2s_linear_infinite]"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="relative z-10">Revolving Border</span>
    </button>
  );
}

// Button 3: Burst Effect
export function ButtonBurst() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 600);
      }}
      className="relative px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition overflow-hidden"
    >
      {clicked && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-white rounded-full"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <Star className="w-5 h-5" />
        Click Me
      </span>
    </button>
  );
}

// Button 4: Inside-Out Effect
export function ButtonInsideOut() {
  return (
    <button className="relative px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg overflow-hidden group">
      <motion.div
        className="absolute inset-0 bg-purple-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Scale Inside
      </span>
    </button>
  );
}

// Button 5: Shimmer Effect
export function ButtonShimmer() {
  return (
    <button className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden group">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <span className="relative z-10">Shimmer Effect</span>
    </button>
  );
}

// Button 6: 3D Push
export function Button3DPush() {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      className="px-8 py-4 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold rounded-lg shadow-lg"
      style={{
        boxShadow: "0 6px 0 #b91c1c, 0 8px 10px rgba(0,0,0,0.3)",
      }}
    >
      3D Button
    </motion.button>
  );
}

// Button 7: Icon Slide
export function ButtonIconSlide() {
  return (
    <button className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg overflow-hidden hover:bg-indigo-700 transition">
      <span className="flex items-center gap-2">
        <span>Get Started</span>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </span>
    </button>
  );
}

// Button 8: Gooey Effect
export function ButtonGooey() {
  return (
    <button className="relative px-8 py-4 bg-pink-500 text-white font-semibold rounded-full overflow-visible group">
      <svg className="absolute inset-0 w-full h-full" style={{ filter: "url(#goo)" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
          </filter>
        </defs>
      </svg>
      <span className="relative z-10">Gooey Button</span>
    </button>
  );
}

// Button 9: Neon Glow
export function ButtonNeonGlow() {
  return (
    <motion.button
      whileHover={{
        boxShadow: "0 0 20px #10b981, 0 0 40px #10b981, 0 0 60px #10b981",
      }}
      transition={{ duration: 0.3 }}
      className="px-8 py-4 bg-black text-emerald-400 font-bold rounded-lg border-2 border-emerald-400"
      style={{
        textShadow: "0 0 10px #10b981",
      }}
    >
      Neon Glow
    </motion.button>
  );
}

// Button 10: Ripple Effect
export function ButtonRipple() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      onClick={addRipple}
      className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:bg-blue-700 transition"
    >
      <span className="relative z-10">Click for Ripple</span>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-5 h-5 bg-white rounded-full"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
          }}
        />
      ))}
    </button>
  );
}
