"use client";

import { motion } from "framer-motion";

// Loading 1: Spinner with Gradient
export function LoadingSpinnerGradient() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-transparent border-t-emerald-500 border-r-purple-500 rounded-full"
      />
    </div>
  );
}

// Loading 2: Dots Bouncing
export function LoadingDotsBounce() {
  return (
    <div className="flex items-center justify-center gap-2 p-8">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="w-4 h-4 bg-emerald-500 rounded-full"
        />
      ))}
    </div>
  );
}

// Loading 3: Pulse Ring
export function LoadingPulseRing() {
  return (
    <div className="relative flex items-center justify-center p-8">
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute w-16 h-16 bg-purple-500 rounded-full"
      />
      <div className="w-8 h-8 bg-purple-600 rounded-full" />
    </div>
  );
}

// Loading 4: Progress Bar
export function LoadingProgressBar() {
  return (
    <div className="w-full max-w-md p-8">
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-full w-1/3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}

// Loading 5: Skeleton Card
export function LoadingSkeleton() {
  return (
    <div className="glass-card p-6 max-w-sm space-y-4">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-3/4 h-6 bg-white/10 rounded"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        className="w-full h-4 bg-white/10 rounded"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        className="w-5/6 h-4 bg-white/10 rounded"
      />
    </div>
  );
}

// Loading 6: Circular Progress
export function LoadingCircularProgress() {
  return (
    <div className="flex items-center justify-center p-8">
      <svg className="w-20 h-20 transform -rotate-90">
        <circle
          cx="40"
          cy="40"
          r="36"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="226"
          initial={{ strokeDashoffset: 226 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Loading 7: Bars Wave
export function LoadingBarsWave() {
  return (
    <div className="flex items-end justify-center gap-2 h-20 p-8">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="w-2 bg-emerald-500 rounded-full origin-bottom"
          style={{ height: "100%" }}
        />
      ))}
    </div>
  );
}

// Loading 8: DNA Helix
export function LoadingDNAHelix() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
            className="absolute inset-0"
          >
            <div className="w-4 h-4 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
            <div className="w-4 h-4 bg-cyan-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Loading 9: Orbit
export function LoadingOrbit() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-20 h-20">
        <div className="w-4 h-4 bg-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        {[0, 120, 240].map((rotation, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Loading 10: Text Typing
export function LoadingTextTyping() {
  return (
    <div className="flex items-center gap-2 p-8">
      <span className="text-white font-semibold">Loading</span>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="text-white font-bold text-xl"
          >
            .
          </motion.span>
        ))}
      </div>
    </div>
  );
}
