"use client";

import { motion } from "framer-motion";

// Gradient Background
export function BackgroundGradient() {
  return (
    <div className="w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
      <h3 className="text-white text-2xl font-bold">Gradient</h3>
    </div>
  );
}

// Mesh Gradient
export function BackgroundMesh() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/30 via-transparent to-cyan-400/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Mesh Gradient</h3>
      </div>
    </div>
  );
}

// Animated Gradient
export function BackgroundAnimatedGradient() {
  return (
    <motion.div
      animate={{
        background: [
          "linear-gradient(to right, #f59e0b, #ef4444)",
          "linear-gradient(to right, #ef4444, #ec4899)",
          "linear-gradient(to right, #ec4899, #8b5cf6)",
          "linear-gradient(to right, #f59e0b, #ef4444)",
        ],
      }}
      transition={{ duration: 5, repeat: Infinity }}
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
    >
      <h3 className="text-white text-2xl font-bold">Animated</h3>
    </motion.div>
  );
}

// Dots Pattern
export function BackgroundDots() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundColor: "#1f2937",
      }}
    >
      <h3 className="text-white text-2xl font-bold bg-gray-900/80 px-4 py-2 rounded">Dots Pattern</h3>
    </div>
  );
}

// Grid Pattern
export function BackgroundGrid() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        backgroundColor: "#ffffff",
      }}
    >
      <h3 className="text-gray-900 text-2xl font-bold bg-white/90 px-4 py-2 rounded shadow">Grid</h3>
    </div>
  );
}

// Diagonal Stripes
export function BackgroundStripes() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        backgroundImage: "repeating-linear-gradient(45deg, #6366f1 0px, #6366f1 10px, #8b5cf6 10px, #8b5cf6 20px)",
      }}
    >
      <h3 className="text-white text-2xl font-bold">Stripes</h3>
    </div>
  );
}

// Glassmorphism
export function BackgroundGlass() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
          <h3 className="text-white text-2xl font-bold">Glassmorphism</h3>
        </div>
      </div>
    </div>
  );
}

// Radial Gradient
export function BackgroundRadial() {
  return (
    <div className="w-full max-w-md h-64 rounded-xl bg-gradient-radial from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center"
      style={{ background: "radial-gradient(circle, #fbbf24, #f97316, #dc2626)" }}
    >
      <h3 className="text-white text-2xl font-bold">Radial</h3>
    </div>
  );
}

// Blob Background
export function BackgroundBlob() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-gray-900 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-50"
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Blob</h3>
      </div>
    </div>
  );
}

// Noise Texture
export function BackgroundNoise() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Noise</h3>
      </div>
    </div>
  );
}

// Conic Gradient
export function BackgroundConic() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        background: "conic-gradient(from 0deg, #f59e0b, #ef4444, #ec4899, #8b5cf6, #3b82f6, #10b981, #f59e0b)",
      }}
    >
      <h3 className="text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded">Conic</h3>
    </div>
  );
}

// Wave Background
export function BackgroundWave() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-blue-600 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#3b82f6"
          d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Wave</h3>
      </div>
    </div>
  );
}

// Particles Background
export function BackgroundParticles() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-slate-900 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            x: [Math.random() * 400, Math.random() * 400],
            y: [Math.random() * 250, Math.random() * 250],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Particles</h3>
      </div>
    </div>
  );
}

// Checkerboard
export function BackgroundCheckerboard() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
          linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
          linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
        backgroundColor: "#ffffff",
      }}
    >
      <h3 className="text-gray-900 text-2xl font-bold bg-white/90 px-4 py-2 rounded shadow">Checker</h3>
    </div>
  );
}

// Duotone
export function BackgroundDuotone() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/50 to-transparent mix-blend-multiply" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Duotone</h3>
      </div>
    </div>
  );
}

// Spotlight
export function BackgroundSpotlight() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Spotlight</h3>
      </div>
    </div>
  );
}

// Gradient Border
export function BackgroundGradientBorder() {
  return (
    <div className="p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl">
      <div className="w-full max-w-md h-64 bg-white rounded-lg flex items-center justify-center">
        <h3 className="text-gray-900 text-2xl font-bold">Gradient Border</h3>
      </div>
    </div>
  );
}

// Aurora
export function BackgroundAurora() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-slate-900 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 blur-3xl"
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Aurora</h3>
      </div>
    </div>
  );
}

// Comic Book
export function BackgroundComic() {
  return (
    <div className="relative w-full max-w-md h-64 rounded-xl bg-yellow-300 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="comic-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#comic-dots)" opacity="0.2" />
      </svg>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className="text-gray-900 text-2xl font-bold">Comic</h3>
      </div>
    </div>
  );
}

// Sunset Gradient
export function BackgroundSunset() {
  return (
    <div
      className="w-full max-w-md h-64 rounded-xl flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #1e3a8a, #f97316, #fbbf24, #fef3c7)",
      }}
    >
      <h3 className="text-white text-2xl font-bold text-shadow">Sunset</h3>
    </div>
  );
}
