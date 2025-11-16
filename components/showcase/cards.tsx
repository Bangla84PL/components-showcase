"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

// Card 1: Glass Morphism with Hover
export function CardGlassMorph() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 max-w-sm hover:shadow-2xl transition-shadow"
    >
      <div className="space-y-4">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <Star className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Premium Feature</h3>
        <p className="text-white/70">
          Experience the elegance of glassmorphism design with smooth animations
        </p>
        <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
          Explore
        </button>
      </div>
    </motion.div>
  );
}

// Card 2: 3D Tilt Card (Aceternity-inspired)
export function Card3DTilt() {
  return (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative glass-card p-6 max-w-sm"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">3D Perspective</h3>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </div>
        <p className="text-white/70">
          Hover to see the 3D tilt effect in action
        </p>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
            3D
          </div>
          <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
            Tilt
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Card 3: Gradient Border Card
export function CardGradientBorder() {
  return (
    <div className="relative p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg max-w-sm">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-slate-900 p-6 rounded-lg h-full"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            <div>
              <h4 className="text-white font-semibold">John Doe</h4>
              <p className="text-white/60 text-sm">@johndoe</p>
            </div>
          </div>
          <p className="text-white/80">
            Amazing gradient border effect that makes cards stand out beautifully
          </p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" /> 234
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> 56
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-4 h-4" /> 12
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Card 4: Stacked Cards (Magic UI-inspired)
export function CardStacked() {
  return (
    <div className="relative max-w-sm h-64">
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 glass-card p-6 z-30"
      >
        <h3 className="text-xl font-bold text-white mb-2">Top Card</h3>
        <p className="text-white/70">Hover to see the stack effect</p>
      </motion.div>

      <motion.div
        initial={{ y: 8, opacity: 0.7 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="absolute inset-0 glass-card bg-white/10 z-20"
        style={{ transform: "translateY(8px)" }}
      />

      <motion.div
        initial={{ y: 16, opacity: 0.5 }}
        whileHover={{ y: 8, opacity: 0.7 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute inset-0 glass-card bg-white/5 z-10"
        style={{ transform: "translateY(16px)" }}
      />
    </div>
  );
}

// Card 5: Product Card with Image
export function CardProduct() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden max-w-sm group"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
        >
          IMG
        </motion.div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-white">Premium Product</h3>
        <p className="text-white/70">
          High-quality product with amazing features
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-400">$99</span>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Card 6: Stats Card
export function CardStats() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card p-6 max-w-xs"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-purple-400" />
        </div>
        <span className="text-emerald-400 text-sm font-semibold">+12.5%</span>
      </div>
      <h4 className="text-3xl font-bold text-white mb-1">24.5K</h4>
      <p className="text-white/60 text-sm">Total Users</p>
    </motion.div>
  );
}

// Card 7: Testimonial Card
export function CardTestimonial() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-6 max-w-md"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-white/80 mb-6 italic">
        "This component library has completely transformed our development workflow.
        The animations are smooth and the designs are absolutely stunning!"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        <div>
          <h5 className="text-white font-semibold">Sarah Johnson</h5>
          <p className="text-white/60 text-sm">Lead Designer at TechCorp</p>
        </div>
      </div>
    </motion.div>
  );
}

// Card 8: Pricing Card
export function CardPricing() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-enhanced p-8 max-w-sm"
    >
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
          <p className="text-white/70">For growing teams</p>
        </div>

        <div>
          <span className="text-5xl font-bold text-white">$49</span>
          <span className="text-white/60">/month</span>
        </div>

        <ul className="space-y-3 text-white/80 text-left">
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-400" />
            Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-400" />
            Priority support
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-emerald-400" />
            Advanced analytics
          </li>
        </ul>

        <button className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition">
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
