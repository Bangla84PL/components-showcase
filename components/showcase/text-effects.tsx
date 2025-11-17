"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Gradient Text
export function TextGradient() {
  return (
    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
      Gradient Text
    </h1>
  );
}

// Glitch Effect
export function TextGlitch() {
  return (
    <div className="relative">
      <h2 className="text-4xl font-bold text-white">GLITCH</h2>
      <motion.h2
        animate={{
          x: [0, -2, 2, -2, 0],
          opacity: [1, 0.8, 0.9, 0.8, 1],
        }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-0 left-0 text-4xl font-bold text-cyan-500 opacity-70"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      >
        GLITCH
      </motion.h2>
      <motion.h2
        animate={{
          x: [0, 2, -2, 2, 0],
          opacity: [1, 0.8, 0.9, 0.8, 1],
        }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-0 left-0 text-4xl font-bold text-red-500 opacity-70"
        style={{ clipPath: "inset(50% 0 0 0)" }}
      >
        GLITCH
      </motion.h2>
    </div>
  );
}

// Typing Animation
export function TextTyping() {
  const [text, setText] = useState("");
  const fullText = "Hello, World!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-mono font-bold text-gray-900">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-indigo-600"
      >
        |
      </motion.span>
    </div>
  );
}

// Neon Text
export function TextNeon() {
  return (
    <h2
      className="text-5xl font-bold text-pink-500"
      style={{
        textShadow: "0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899, 0 0 40px #ec4899",
      }}
    >
      NEON
    </h2>
  );
}

// Fade In Text
export function TextFadeIn() {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="text-4xl font-bold text-gray-900"
    >
      Fade In Effect
    </motion.h2>
  );
}

// Bounce Text
export function TextBounce() {
  const letters = "BOUNCE".split("");

  return (
    <div className="flex gap-1">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="text-4xl font-bold text-orange-500"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

// Stroke Text
export function TextStroke() {
  return (
    <h2
      className="text-6xl font-bold text-transparent"
      style={{
        WebkitTextStroke: "2px #4f46e5",
      }}
    >
      STROKE
    </h2>
  );
}

// Shadow Text
export function TextShadow() {
  return (
    <h2 className="text-5xl font-bold text-white" style={{ textShadow: "4px 4px 8px rgba(0,0,0,0.5)" }}>
      3D Shadow
    </h2>
  );
}

// Wave Text
export function TextWave() {
  const text = "WAVE".split("");

  return (
    <div className="flex">
      {text.map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          className="text-4xl font-bold text-blue-600"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

// Rotate Words
export function TextRotateWords() {
  const words = ["Amazing", "Beautiful", "Creative", "Dynamic"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold text-gray-900">
      This is{" "}
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-purple-600"
      >
        {words[index]}
      </motion.span>
    </div>
  );
}

// Blur Text
export function TextBlur() {
  return (
    <motion.h2
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold text-gray-900"
    >
      Blur Reveal
    </motion.h2>
  );
}

// Scale Text
export function TextScale() {
  return (
    <motion.h2
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-4xl font-bold text-indigo-600"
    >
      PULSE
    </motion.h2>
  );
}

// Split Text
export function TextSplit() {
  const text = "SPLIT";

  return (
    <div className="flex gap-2">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-4xl font-bold text-emerald-600"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

// Underline Animation
export function TextUnderline() {
  return (
    <div className="relative inline-block">
      <h2 className="text-4xl font-bold text-gray-900">Hover Me</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 origin-left"
      />
    </div>
  );
}

// Shimmer Text
export function TextShimmer() {
  return (
    <h2
      className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 bg-clip-text text-transparent"
      style={{
        backgroundSize: "200% auto",
        animation: "shimmer 3s linear infinite",
      }}
    >
      SHIMMER
    </h2>
  );
}

// Rainbow Text
export function TextRainbow() {
  return (
    <motion.h2
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ duration: 3, repeat: Infinity }}
      className="text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      style={{ backgroundSize: "200% auto" }}
    >
      RAINBOW
    </motion.h2>
  );
}

// Highlight Text
export function TextHighlight() {
  return (
    <h2 className="text-4xl font-bold text-gray-900">
      This is{" "}
      <span className="bg-yellow-300 px-2 py-1 rounded">highlighted</span> text
    </h2>
  );
}

// Flip Text
export function TextFlip() {
  return (
    <motion.h2
      animate={{ rotateX: [0, 360] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      className="text-4xl font-bold text-cyan-600"
      style={{ transformStyle: "preserve-3d" }}
    >
      FLIP
    </motion.h2>
  );
}

// Stagger Reveal
export function TextStagger() {
  const words = "Stagger Reveal Effect".split(" ");

  return (
    <div className="flex gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
          className="text-3xl font-bold text-purple-600"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Glowing Text
export function TextGlow() {
  return (
    <motion.h2
      animate={{
        textShadow: [
          "0 0 10px #3b82f6",
          "0 0 20px #3b82f6, 0 0 30px #3b82f6",
          "0 0 10px #3b82f6",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-5xl font-bold text-blue-500"
    >
      GLOW
    </motion.h2>
  );
}
