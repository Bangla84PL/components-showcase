"use client";

import { motion } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { useState } from "react";

// 1. Navbar with Slide-In Menu
export function NavbarSlideIn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        className="fixed top-0 right-0 h-full w-64 bg-forest-green/95 backdrop-blur-md p-6 z-50"
      >
        <div className="flex flex-col gap-4 text-white">
          <a href="#" className="hover:text-emerald-300 transition">Home</a>
          <a href="#" className="hover:text-emerald-300 transition">About</a>
          <a href="#" className="hover:text-emerald-300 transition">Services</a>
          <a href="#" className="hover:text-emerald-300 transition">Contact</a>
        </div>
      </motion.div>
    </nav>
  );
}

// 2. Navbar with Dropdown Menu
export function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-white hover:text-emerald-300 transition"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg p-2"
              >
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded">Web Design</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded">Development</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10 rounded">Marketing</a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// 3. Navbar with Search Bar
export function NavbarSearch() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
          />
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 text-white cursor-pointer hover:text-emerald-300 transition" />
          <User className="w-6 h-6 text-white cursor-pointer hover:text-emerald-300 transition" />
        </div>
      </div>
    </nav>
  );
}

// 4. Navbar with Glass Effect
export function NavbarGlass() {
  return (
    <nav className="glass-card p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">About</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Services</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// 5. Navbar with Sticky Animation
export function NavbarSticky() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Portfolio</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Blog</a>
        </div>
      </div>
    </motion.nav>
  );
}

// 6. Navbar with Mega Menu
export function NavbarMega() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md p-4 relative">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <button
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
            className="text-white hover:text-emerald-300 transition"
          >
            Products
          </button>
        </div>
      </div>
      {isMegaOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => setIsMegaOpen(false)}
          className="absolute top-full left-0 right-0 mt-0 bg-white/10 backdrop-blur-md p-8 grid grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-white font-semibold mb-2">Category 1</h3>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 1</a>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 2</a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Category 2</h3>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 3</a>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 4</a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Category 3</h3>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 5</a>
            <a href="#" className="block text-white/80 hover:text-white py-1">Item 6</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// 7. Navbar with Underline Animation
export function NavbarUnderline() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="relative text-white hover:text-emerald-300 transition pb-1"
              whileHover="hover"
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-300"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// 8. Navbar with Icon Animations
export function NavbarIconAnimated() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Search className="w-6 h-6 text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <User className="w-6 h-6 text-white cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

// 9. Navbar with Gradient Background
export function NavbarGradient() {
  return (
    <nav className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md border-b border-white/20 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Features</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Pricing</a>
          <button className="px-4 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-white/90 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

// 10. Navbar with Split Layout
export function NavbarSplit() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">About</a>
        </div>
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Services</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// 11. Navbar with Badges
export function NavbarBadges() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="relative text-white hover:text-emerald-300 transition">
            Products
            <span className="absolute -top-2 -right-3 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">New</span>
          </a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
        </div>
      </div>
    </nav>
  );
}

// 12. Navbar with Border Animation
export function NavbarBorderAnimation() {
  return (
    <nav className="relative bg-white/10 backdrop-blur-md p-4">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">About</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Services</a>
        </div>
      </div>
    </nav>
  );
}

// 13. Navbar with Centered Logo
export function NavbarCenteredLogo() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:text-emerald-300 transition">Shop</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">About</a>
        </div>
        <div className="text-white font-bold text-xl text-center">BRAND</div>
        <div className="flex items-center gap-4 justify-end">
          <a href="#" className="text-white hover:text-emerald-300 transition">Blog</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// 14. Navbar with Social Icons
export function NavbarSocial() {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">About</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">f</a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">t</a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">in</a>
        </div>
      </div>
    </nav>
  );
}

// 15. Navbar with Scroll Progress
export function NavbarScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <nav className="relative bg-white/10 backdrop-blur-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Brand</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white hover:text-emerald-300 transition">Home</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Blog</a>
          <a href="#" className="text-white hover:text-emerald-300 transition">Contact</a>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-emerald-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
}
