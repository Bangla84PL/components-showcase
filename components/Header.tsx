"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/20"
      style={{
        backgroundImage: "url('/jungle background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="jungle-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              <Image
                src="/SmartCampAIpng.png"
                alt="SmartCamp.AI"
                width={200}
                height={100}
                className="h-12 w-auto sm:h-14 md:h-16"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white/90 hover:text-emerald-500 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="/components"
                className="text-white/90 hover:text-emerald-500 transition-colors duration-200 font-medium"
              >
                Components
              </Link>
              <Link
                href="/categories"
                className="text-white/90 hover:text-emerald-500 transition-colors duration-200 font-medium"
              >
                Categories
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-forest-green rounded-md font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105"
                aria-label="Search components"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
