"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, Sparkles, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">
                  250+ Spectacular Components
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-strong">
                Web Design Components
                <br />
                <span className="text-emerald-500">You Can&apos;t Resist</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 drop-shadow-strong">
                Explore a curated collection of spectacular web design components
                from leading design platforms. Live demos, copyable code, and
                instant implementation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/components"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-forest-green rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Explore Components
                </Link>

                <Link
                  href="/categories"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-200 border border-white/30 backdrop-blur-sm"
                >
                  Browse Categories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Copy & Paste Ready
                </h3>
                <p className="text-white/70">
                  One-click code copying with syntax highlighting and all
                  dependencies included.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Live Interactive Demos
                </h3>
                <p className="text-white/70">
                  See components in action with fully functional, interactive
                  previews.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Smart Search & Filter
                </h3>
                <p className="text-white/70">
                  Find exactly what you need with powerful search and category
                  filtering.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-enhanced p-12 rounded-2xl"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
                <span className="text-emerald-500">You are the Future!</span>
              </p>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Empower your projects with cutting-edge design components and
                take control of your technological destiny.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
