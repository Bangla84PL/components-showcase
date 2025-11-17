"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// 1. Masonry Gallery
export function GalleryMasonry() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="mb-4 break-inside-avoid bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Image {i}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// 2. Grid Gallery
export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="aspect-square bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
        >
          <span className="text-white text-xl font-bold">{i}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 3. Lightbox Gallery
export function GalleryLightbox() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(i)}
            className="aspect-square bg-white/10 backdrop-blur-md rounded-lg cursor-pointer flex items-center justify-center"
          >
            <span className="text-white">Image {i}</span>
          </motion.div>
        ))}
      </div>
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl">Image {selected}</span>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white hover:text-emerald-300"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

// 4. Hover Zoom Gallery
export function GalleryHoverZoom() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative overflow-hidden rounded-lg aspect-square bg-white/10 group">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center"
          >
            <span className="text-white">Image {i}</span>
          </motion.div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ZoomIn className="text-white w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  );
}

// 5. Stacked Gallery
export function GalleryStacked() {
  return (
    <div className="relative h-96">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ y: i * 20, rotate: i * 2 }}
          whileHover={{ y: 0, rotate: 0, zIndex: 10 }}
          className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg p-8 flex items-center justify-center cursor-pointer"
          style={{ top: i * 20, left: i * 20, right: -i * 20, bottom: -i * 20 }}
        >
          <span className="text-white text-2xl">Card {i}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 6. Infinite Scroll Gallery
export function GalleryInfiniteScroll() {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center"
        >
          <span className="text-white">Item {i + 1}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 7. Card Flip Gallery
export function GalleryCardFlip() {
  const [flipped, setFlipped] = useState<number[]>([]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="relative aspect-square cursor-pointer"
          onClick={() => setFlipped(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
        >
          <motion.div
            animate={{ rotateY: flipped.includes(i) ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-lg flex items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
              <span className="text-white">Front {i}</span>
            </div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <span className="text-white">Back {i}</span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// 8. Polaroid Gallery
export function GalleryPolaroid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, rotate: 0 }}
          className="bg-white p-4 rounded-lg shadow-xl"
          style={{ rotate: i % 2 === 0 ? 3 : -3 }}
        >
          <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 mb-3"></div>
          <p className="text-center text-gray-700 font-handwriting">Photo {i}</p>
        </motion.div>
      ))}
    </div>
  );
}

// 9. Horizontal Scroll Gallery
export function GalleryHorizontalScroll() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-64 aspect-video bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center"
        >
          <span className="text-white">Slide {i}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 10. Ken Burns Effect Gallery
export function GalleryKenBurns() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-video overflow-hidden rounded-lg relative group">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 3 }}
            className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center"
          >
            <span className="text-white">Image {i}</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// 11. Parallax Gallery
export function GalleryParallax() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-video bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center"
        >
          <span className="text-white text-2xl">Section {i}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 12. Thumbnail Gallery
export function GalleryThumbnails() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
        <span className="text-white text-2xl">Main Image {selected}</span>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelected(i)}
            className={`aspect-square bg-white/10 rounded cursor-pointer flex items-center justify-center ${
              selected === i ? "ring-2 ring-emerald-500" : ""
            }`}
          >
            <span className="text-white text-sm">{i}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
