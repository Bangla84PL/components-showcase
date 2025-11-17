"use client";

import { motion } from "framer-motion";

// Simple animation components (15 total)
export function AnimFadeIn() {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Fade In Animation</h3></motion.div>;
}

export function AnimSlideUp() {
  return <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Slide Up Animation</h3></motion.div>;
}

export function AnimSlideDown() {
  return <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Slide Down Animation</h3></motion.div>;
}

export function AnimSlideLeft() {
  return <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Slide Left Animation</h3></motion.div>;
}

export function AnimSlideRight() {
  return <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Slide Right Animation</h3></motion.div>;
}

export function AnimScale() {
  return <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Scale Animation</h3></motion.div>;
}

export function AnimRotate() {
  return <motion.div initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Rotate Animation</h3></motion.div>;
}

export function AnimBounce() {
  return <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Bounce Animation</h3></motion.div>;
}

export function AnimPulse() {
  return <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="glass-card p-8"><h3 className="text-white text-xl">Pulse Animation</h3></motion.div>;
}

export function AnimShake() {
  return <motion.div animate={{ x: [-5, 5, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 2 }} className="glass-card p-8"><h3 className="text-white text-xl">Shake Animation</h3></motion.div>;
}

export function AnimFlip() {
  return <motion.div initial={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }} className="glass-card p-8" style={{ transformStyle: "preserve-3d" }}><h3 className="text-white text-xl">Flip Animation</h3></motion.div>;
}

export function AnimSwing() {
  return <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} className="glass-card p-8"><h3 className="text-white text-xl">Swing Animation</h3></motion.div>;
}

export function AnimRubberBand() {
  return <motion.div animate={{ scaleX: [1, 1.25, 0.75, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1, repeatDelay: 2 }} className="glass-card p-8"><h3 className="text-white text-xl">Rubber Band</h3></motion.div>;
}

export function AnimWobble() {
  return <motion.div animate={{ x: [0, -25, 20, -15, 10, 0], rotate: [0, -5, 3, -3, 2, 0] }} transition={{ repeat: Infinity, duration: 1, repeatDelay: 2 }} className="glass-card p-8"><h3 className="text-white text-xl">Wobble Animation</h3></motion.div>;
}

export function AnimGlow() {
  return <motion.div animate={{ boxShadow: ["0 0 0px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.8)", "0 0 0px rgba(16, 185, 129, 0)"] }} transition={{ repeat: Infinity, duration: 2 }} className="glass-card p-8"><h3 className="text-white text-xl">Glow Animation</h3></motion.div>;
}
