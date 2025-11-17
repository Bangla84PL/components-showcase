"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// 3D Card
export function Card3D() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  return (
    <div
      className="perspective-1000"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRotateY((x / rect.width - 0.5) * 20);
        setRotateX((y / rect.height - 0.5) * -20);
      }}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-64 h-40 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-2xl flex items-center justify-center text-white text-xl font-bold"
        style={{ transformStyle: "preserve-3d" }}
      >
        3D Card
      </motion.div>
    </div>
  );
}

// Floating Cube
export function Cube3D() {
  return (
    <div className="perspective-1000">
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-80" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-80"
          style={{ transform: "rotateY(90deg)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-700 opacity-80"
          style={{ transform: "rotateX(90deg)" }}
        />
      </motion.div>
    </div>
  );
}

// Flip Card
export function CardFlip() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-64 h-40 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          Front
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center text-white text-xl font-bold"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          Back
        </div>
      </motion.div>
    </div>
  );
}

// Levitating Button
export function ButtonLevitate() {
  return (
    <motion.button
      whileHover={{ y: -10, rotateX: 10 }}
      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold shadow-lg"
      style={{ transformStyle: "preserve-3d" }}
    >
      Hover Me
    </motion.button>
  );
}

// 3D Stack
export function Stack3D() {
  const layers = [0, 1, 2, 3];

  return (
    <div className="relative w-64 h-40">
      {layers.map((layer) => (
        <motion.div
          key={layer}
          className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl"
          style={{
            transform: `translateZ(${layer * -20}px) translateY(${layer * 8}px)`,
            transformStyle: "preserve-3d",
            opacity: 1 - layer * 0.15,
          }}
          whileHover={{ y: -layer * 5 }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-xl font-bold">
        3D Stack
      </div>
    </div>
  );
}

// Rotating Ring
export function Ring3D() {
  return (
    <div className="perspective-1000">
      <motion.div
        animate={{ rotateX: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 border-8 border-purple-500 rounded-full"
        style={{ transformStyle: "preserve-3d", borderStyle: "solid" }}
      />
    </div>
  );
}

// Isometric Box
export function BoxIsometric() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <div className="relative" style={{ transform: "rotateX(60deg) rotateZ(45deg)", transformStyle: "preserve-3d" }}>
        <div className="w-24 h-24 bg-indigo-600" style={{ transform: "translateZ(0px)" }} />
        <div className="w-24 h-24 bg-indigo-500 absolute top-0 left-0" style={{ transform: "translateZ(-24px)" }} />
        <div className="w-24 h-24 bg-indigo-400 absolute top-0 left-0" style={{ transform: "rotateY(90deg) translateZ(24px)" }} />
      </div>
    </div>
  );
}

// 3D Button Press
export function ButtonPress3D() {
  return (
    <motion.button
      whileTap={{ scale: 0.95, translateY: 4 }}
      className="px-8 py-4 bg-gradient-to-b from-green-500 to-green-700 text-white rounded-xl font-bold shadow-lg"
      style={{
        boxShadow: "0 8px 0 #15803d, 0 10px 10px rgba(0,0,0,0.3)",
      }}
    >
      Press Me
    </motion.button>
  );
}

// Perspective Text
export function TextPerspective() {
  return (
    <div className="perspective-1000">
      <motion.h2
        animate={{ rotateX: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent"
        style={{ transformStyle: "preserve-3d" }}
      >
        3D TEXT
      </motion.h2>
    </div>
  );
}

// Spinning Pyramid
export function Pyramid3D() {
  return (
    <div className="perspective-1000">
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-0 h-0 border-l-16 border-r-16 border-b-32 border-l-transparent border-r-transparent border-b-pink-500"
          style={{ transform: "translateZ(16px)" }}
        />
        <div
          className="absolute w-0 h-0 border-l-16 border-r-16 border-b-32 border-l-transparent border-r-transparent border-b-pink-600"
          style={{ transform: "rotateY(90deg) translateZ(16px)" }}
        />
      </motion.div>
    </div>
  );
}

// 3D Badge
export function Badge3D() {
  return (
    <motion.div
      whileHover={{ rotateY: 180, scale: 1.1 }}
      className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      BADGE
    </motion.div>
  );
}

// Depth Layers
export function LayersDepth() {
  return (
    <div className="relative w-64 h-48 perspective-1000">
      <motion.div
        animate={{ rotateY: [0, 5, 0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 bg-red-500/80 rounded-xl"
          style={{ transform: "translateZ(40px)" }}
        />
        <div
          className="absolute inset-0 bg-orange-500/80 rounded-xl"
          style={{ transform: "translateZ(20px)" }}
        />
        <div
          className="absolute inset-0 bg-yellow-500/80 rounded-xl"
          style={{ transform: "translateZ(0px)" }}
        />
      </motion.div>
    </div>
  );
}

// Tilted Image Frame
export function FrameTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="perspective-1000"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientY - rect.top) / rect.height - 0.5;
        const y = (e.clientX - rect.left) / rect.width - 0.5;
        setTilt({ x: x * -20, y: y * 20 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        className="w-64 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-full h-full bg-white/10 rounded-lg backdrop-blur flex items-center justify-center text-white font-bold">
          Tilt Frame
        </div>
      </motion.div>
    </div>
  );
}

// Folded Card
export function CardFolded() {
  return (
    <div className="perspective-1000">
      <div className="relative w-64 h-40" style={{ transformStyle: "preserve-3d" }}>
        <div
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-emerald-500 to-teal-500 origin-bottom"
          style={{ transform: "rotateX(-30deg)", transformStyle: "preserve-3d" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-teal-500 to-cyan-500" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10">
          Folded Card
        </div>
      </div>
    </div>
  );
}

// Extruded Text
export function TextExtruded() {
  return (
    <div className="perspective-1000">
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(8)].map((_, i) => (
          <h2
            key={i}
            className="absolute text-6xl font-bold text-rose-600"
            style={{
              transform: `translateZ(${-i * 2}px)`,
              opacity: 1 - i * 0.1,
            }}
          >
            3D
          </h2>
        ))}
        <h2 className="relative text-6xl font-bold text-rose-500" style={{ transform: "translateZ(0)" }}>
          3D
        </h2>
      </div>
    </div>
  );
}
