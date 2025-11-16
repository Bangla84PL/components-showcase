"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Zap } from "lucide-react";

// Hero Section 1: Split Text Animation (Awwwards-inspired)
export function HeroSplitText() {
  const text = "Transform Your Vision";
  const words = text.split(" ");

  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-lg overflow-hidden">
      <div className="text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-3">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-5xl font-bold text-white drop-shadow-lg"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white/80 text-lg"
        >
          Experience the future of web design
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-purple-900 rounded-full font-bold mt-6"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}

// Hero Section 2: Gradient Background with Floating Elements
export function HeroGradientFloat() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-lg overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 backdrop-blur rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="flex justify-center"
        >
          <Sparkles className="w-16 h-16 text-white" />
        </motion.div>
        <h1 className="text-6xl font-bold text-white">
          Beautiful Design
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Create stunning experiences with modern components
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-white/90 transition">
            Explore Now
          </button>
          <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition backdrop-blur">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// Hero Section 3: 3D Tilt Effect (Aceternity-inspired)
export function Hero3DTilt() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-lg overflow-hidden perspective-1000">
      <motion.div
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="glass-card p-12 max-w-2xl mx-6 transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white">
              Next-Gen <span className="text-emerald-400">Components</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80"
          >
            Powered by cutting-edge technology for exceptional user experiences
          </motion.p>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-600 transition">
              Get Started <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur">
              View Demo
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Hero Section 4: Animated Background Beams
export function HeroBackgroundBeams() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-slate-950 rounded-lg overflow-hidden">
      {/* Animated Beams */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 w-[500px] h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
        <motion.div
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 left-0 w-[500px] h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-20 left-0 w-[500px] h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            Innovation Awaits
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the power of modern web design with our curated collection
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-bold flex items-center gap-2 mx-auto"
        >
          <Zap className="w-5 h-5" />
          Launch Experience
        </motion.button>
      </div>
    </div>
  );
}

// Hero Section 5: Glassmorphism Card Stack
export function HeroGlassStack() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-lg overflow-hidden p-6">
      <div className="relative">
        {/* Background Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 0.3, scale: 0.95, y: 10 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 glass-card transform rotate-6"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 0.5, scale: 0.98, y: 5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute inset-0 glass-card transform rotate-3"
        />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative glass-enhanced p-12 min-w-[500px]"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Premium Experience
            </h2>
            <p className="text-lg text-white/80">
              Elevate your projects with stunning glassmorphism effects
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-white/90 transition">
                Start Free
              </button>
              <button className="px-6 py-2 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition backdrop-blur">
                See Plans
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
