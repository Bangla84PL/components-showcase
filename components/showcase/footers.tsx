"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Heart } from "lucide-react";

// 1. Simple Footer
export function FooterSimple() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/70">© 2025 Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

// 2. Footer with Social Links
export function FooterSocial() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">© 2025 Brand. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// 3. Footer with Columns
export function FooterColumns() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Brand</h3>
            <p className="text-white/70 text-sm">Building amazing web experiences</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">Terms</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition text-sm">License</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 4. Footer with Newsletter
export function FooterNewsletter() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Stay Updated</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none" />
              <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">Subscribe</button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <a href="#" className="text-white/70 hover:text-white transition"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 5. Footer with Contact Info
export function FooterContact() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-white/70 text-sm">contact@brand.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1">Phone</h4>
              <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1">Address</h4>
              <p className="text-white/70 text-sm">123 Main St, City, State</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 6. Footer with CTA
export function FooterCTA() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
          <p className="text-white/70 mb-6">Join thousands of satisfied customers today</p>
          <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
            Start Free Trial
          </button>
        </div>
        <div className="text-center">
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 7. Footer with Logo
export function FooterLogo() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="text-white font-bold text-2xl mb-4">BRAND</div>
          <div className="flex items-center gap-6 mb-4">
            <a href="#" className="text-white/70 hover:text-white transition text-sm">Home</a>
            <a href="#" className="text-white/70 hover:text-white transition text-sm">About</a>
            <a href="#" className="text-white/70 hover:text-white transition text-sm">Services</a>
            <a href="#" className="text-white/70 hover:text-white transition text-sm">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition"><Github className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 8. Footer with Wave
export function FooterWave() {
  return (
    <footer className="relative bg-white/10 backdrop-blur-md pt-20 pb-8">
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" fill="none">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="rgba(255,255,255,0.1)" />
      </svg>
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/70">© 2025 Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

// 9. Footer with Heart
export function FooterHeart() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/70 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Brand Team
        </p>
      </div>
    </footer>
  );
}

// 10. Footer with All Socials
export function FooterAllSocials() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-white font-bold text-xl">Connect With Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"><Github className="w-5 h-5" /></a>
          </div>
          <p className="text-white/70 text-sm">© 2025 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
