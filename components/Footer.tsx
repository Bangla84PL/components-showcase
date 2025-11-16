"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-white/20"
      style={{
        backgroundImage: "url('/jungle background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="jungle-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Monkey Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/Monkey_SmartCampAI-no-background.png"
                alt="SmartCamp AI Monkey Mascot"
                width={160}
                height={160}
                className="h-32 w-32 sm:h-40 sm:w-40 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </motion.div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center gap-4">
              <Link href="/" className="group">
                <Image
                  src="/SmartCampAIpng.png"
                  alt="SmartCamp.AI"
                  width={200}
                  height={100}
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <p className="text-white/70 text-sm max-w-md">
                200+ spectacular web design components, curated for inspiration and implementation.
              </p>

              <p className="text-white/90 font-medium">
                © Created with <span className="text-red-500">❤️</span> by{" "}
                <Link
                  href="https://smartcamp.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200 font-semibold"
                >
                  SmartCamp.AI
                </Link>
              </p>

              <p className="text-white/60 text-xs">
                AI | Automations | Web Dev
              </p>
            </div>

            {/* n8n Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end"
            >
              <Link
                href="https://n8n.io/creators/smart-camp-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/n8n-certified-creator.png"
                  alt="n8n Certified Creator - SmartCamp AI"
                  width={144}
                  height={144}
                  className="h-28 w-28 sm:h-36 sm:w-36 hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <Link
                href="/about"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/categories"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Categories
              </Link>
              <Link
                href="/technologies"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Technologies
              </Link>
              <Link
                href="https://smartcamp.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors duration-200"
              >
                Visit SmartCamp.AI
              </Link>
            </div>

            <div className="mt-6 text-center text-xs text-white/50">
              <p>
                All components sourced with proper attribution. Original creators retain all rights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
