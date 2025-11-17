"use client";

import { Star, Quote, ThumbsUp, Award, Heart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Simple Card Testimonial
export function TestimonialCard() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
        <div>
          <h4 className="font-semibold text-gray-900">Alex Johnson</h4>
          <p className="text-sm text-gray-500">CEO, TechCorp</p>
        </div>
      </div>
      <p className="text-gray-600">
        "This product has transformed our workflow. Highly recommended!"
      </p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}

// Quote Style Testimonial
export function TestimonialQuote() {
  return (
    <div className="max-w-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
      <Quote className="w-16 h-16 mb-4 opacity-50" />
      <p className="text-xl font-medium mb-6">
        An absolute game-changer for our business. The results speak for themselves.
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full" />
        <div>
          <p className="font-semibold">Sarah Mitchell</p>
          <p className="text-sm text-white/80">Marketing Director</p>
        </div>
      </div>
    </div>
  );
}

// Grid Testimonials
export function TestimonialGrid() {
  const testimonials = [
    { name: "John", rating: 5, text: "Excellent!" },
    { name: "Emma", rating: 5, text: "Love it!" },
    { name: "Mike", rating: 4, text: "Great product" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4">
          <div className="flex gap-1 mb-2">
            {[...Array(t.rating)].map((_, j) => (
              <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-2">"{t.text}"</p>
          <p className="text-xs font-semibold text-gray-800">— {t.name}</p>
        </div>
      ))}
    </div>
  );
}

// Floating Avatar Testimonial
export function TestimonialFloating() {
  return (
    <div className="relative max-w-md bg-white rounded-2xl shadow-xl p-8 pt-16">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full border-4 border-white shadow-lg"
      />
      <div className="text-center">
        <p className="text-gray-700 mb-4">
          "The best investment we've made this year. Absolutely worth it!"
        </p>
        <p className="font-bold text-gray-900">Jennifer Lee</p>
        <p className="text-sm text-gray-500">Founder, StartupXYZ</p>
      </div>
    </div>
  );
}

// Video Style Testimonial
export function TestimonialVideo() {
  return (
    <div className="max-w-md bg-gray-900 rounded-xl overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
          <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1" />
        </div>
      </div>
      <div className="p-4 text-white">
        <p className="font-semibold mb-1">Robert Chen</p>
        <p className="text-sm text-gray-400">Watch my story</p>
      </div>
    </div>
  );
}

// Minimal Testimonial
export function TestimonialMinimal() {
  return (
    <div className="max-w-lg text-center">
      <p className="text-2xl text-gray-700 font-light italic mb-6">
        "Simply outstanding. Changed everything for us."
      </p>
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full" />
        <div className="text-left">
          <p className="font-semibold text-gray-900">David Park</p>
          <p className="text-sm text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  );
}

// Stats Testimonial
export function TestimonialStats() {
  return (
    <div className="max-w-md bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold">98%</p>
          <p className="text-sm opacity-90">Satisfaction</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">5.0</p>
          <p className="text-sm opacity-90">Rating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">10k+</p>
          <p className="text-sm opacity-90">Users</p>
        </div>
      </div>
      <p className="text-center text-sm">
        "Trusted by thousands of satisfied customers worldwide"
      </p>
    </div>
  );
}

// Badge Testimonial
export function TestimonialBadge() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <Award className="w-8 h-8 text-yellow-500" />
      </div>
      <p className="text-gray-700 mb-4 pr-8">
        "Award-winning service. Exceeded all our expectations!"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full" />
        <div>
          <p className="font-semibold text-gray-900">Lisa Wang</p>
          <p className="text-sm text-gray-500">Product Manager</p>
        </div>
      </div>
    </div>
  );
}

// Company Logo Testimonial
export function TestimonialCompany() {
  return (
    <div className="max-w-md bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded flex items-center justify-center text-white font-bold text-xl">
          TC
        </div>
        <div>
          <p className="font-bold text-gray-900">TechCorp Inc.</p>
          <p className="text-sm text-gray-500">Fortune 500 Company</p>
        </div>
      </div>
      <p className="text-gray-700">
        "A reliable partner that has helped us scale efficiently."
      </p>
    </div>
  );
}

// Social Proof Testimonial
export function TestimonialSocial() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-gray-900">Taylor Swift</p>
            <CheckCircle className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Amazing experience! Can't recommend enough 🎉
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>124</span>
            </div>
            <span>2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Before/After Testimonial
export function TestimonialBeforeAfter() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <h4 className="font-bold text-gray-900 mb-4 text-center">Results That Speak</h4>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Before</p>
          <p className="text-3xl font-bold text-red-600">-40%</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">After</p>
          <p className="text-3xl font-bold text-green-600">+180%</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center">
        "Incredible ROI in just 3 months" — Marcus Thompson
      </p>
    </div>
  );
}

// Carousel Item Testimonial
export function TestimonialCarouselItem() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl p-8 text-white"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-white text-white" />
        ))}
      </div>
      <p className="text-lg mb-6">
        "Outstanding quality and support. This team really cares about their customers."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-full" />
        <div>
          <p className="font-bold">Patricia Martinez</p>
          <p className="text-sm opacity-90">Head of Operations</p>
        </div>
      </div>
    </motion.div>
  );
}

// Long Form Testimonial
export function TestimonialLongForm() {
  return (
    <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex-shrink-0" />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">Christopher Adams</h4>
          <p className="text-sm text-gray-500">VP of Engineering, DataFlow</p>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">
        "We've been using this solution for over a year now, and it has completely
        transformed how we operate. The team is responsive, the product is reliable,
        and the ROI has been phenomenal. Highly recommend to any growing business."
      </p>
    </div>
  );
}

// Compact Testimonial
export function TestimonialCompact() {
  return (
    <div className="max-w-xs bg-gray-900 rounded-lg p-4 text-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full" />
        <div className="flex-1">
          <p className="font-semibold text-sm">Nina Patel</p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-300">"Perfect solution for our needs!"</p>
    </div>
  );
}

// Featured Testimonial
export function TestimonialFeatured() {
  return (
    <div className="max-w-3xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
      <div className="relative">
        <ThumbsUp className="w-12 h-12 mb-6 text-purple-400" />
        <p className="text-2xl font-light mb-8 leading-relaxed">
          "This is hands down the best decision we've made for our company.
          The impact has been immediate and substantial."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
          <div>
            <p className="font-bold text-lg">Michael Roberts</p>
            <p className="text-purple-300">CEO, Innovation Labs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
