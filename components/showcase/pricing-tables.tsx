"use client";

import { Check, X, Star, Zap, Crown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Simple Pricing Card
export function PricingSimple() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-indigo-600">$29</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="w-5 h-5 text-green-500" />
          <span>Unlimited projects</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="w-5 h-5 text-green-500" />
          <span>24/7 support</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="w-5 h-5 text-green-500" />
          <span>Advanced analytics</span>
        </li>
      </ul>
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
        Get Started
      </button>
    </div>
  );
}

// Three Tier Pricing
export function PricingThreeTier() {
  const plans = [
    { name: "Basic", price: "$9", color: "from-gray-500 to-gray-600" },
    { name: "Pro", price: "$29", color: "from-indigo-500 to-purple-600" },
    { name: "Enterprise", price: "$99", color: "from-orange-500 to-red-600" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-4xl">
      {plans.map((plan, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-full`} />
          <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
          <p className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</p>
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-800">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  );
}

// Popular Badge Pricing
export function PricingPopular() {
  return (
    <div className="max-w-sm bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative">
      <div className="absolute -top-3 right-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
        Popular
      </div>
      <h3 className="text-2xl font-bold mb-2">Premium</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold">$49</span>
        <span className="text-white/80">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {["Everything in Pro", "Priority support", "Custom integrations", "Advanced security"].map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-bold hover:bg-gray-100">
        Start Free Trial
      </button>
    </div>
  );
}

// Toggle Pricing (Monthly/Yearly)
export function PricingToggle() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-gray-600">Monthly</span>
        <div className="relative w-14 h-7 bg-indigo-600 rounded-full cursor-pointer">
          <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full" />
        </div>
        <span className="font-semibold text-gray-900">Yearly</span>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Save 20%</span>
      </div>
      <div className="text-center mb-6">
        <span className="text-5xl font-bold text-gray-900">$23</span>
        <span className="text-gray-500">/month</span>
        <p className="text-sm text-gray-500 mt-1">Billed annually at $276</p>
      </div>
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
        Subscribe Now
      </button>
    </div>
  );
}

// Feature Comparison Table
export function PricingComparison() {
  return (
    <div className="max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-3 bg-gray-50 border-b">
        <div className="p-4 font-semibold">Features</div>
        <div className="p-4 text-center font-semibold">Basic</div>
        <div className="p-4 text-center font-semibold">Pro</div>
      </div>
      {["Projects", "Storage", "Support"].map((feature, i) => (
        <div key={i} className="grid grid-cols-3 border-b">
          <div className="p-4 text-gray-700">{feature}</div>
          <div className="p-4 text-center">
            {i === 2 ? <X className="w-5 h-5 text-red-500 mx-auto" /> : <Check className="w-5 h-5 text-green-500 mx-auto" />}
          </div>
          <div className="p-4 text-center">
            <Check className="w-5 h-5 text-green-500 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Minimal Pricing
export function PricingMinimal() {
  return (
    <div className="max-w-xs text-center">
      <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Starter</h3>
      <div className="mb-6">
        <span className="text-6xl font-light text-gray-900">$19</span>
      </div>
      <button className="px-8 py-2 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors">
        Buy Now
      </button>
    </div>
  );
}

// Gradient Pricing Card
export function PricingGradient() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-1"
    >
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <Crown className="w-10 h-10 mb-4 text-yellow-400" />
        <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
        <div className="mb-6">
          <span className="text-5xl font-bold">$99</span>
          <span className="text-white/70">/month</span>
        </div>
        <ul className="space-y-2 mb-8 text-sm">
          {["Unlimited everything", "White-glove support", "Custom development"].map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-bold">
          Contact Sales
        </button>
      </div>
    </motion.div>
  );
}

// Free Plan Card
export function PricingFree() {
  return (
    <div className="max-w-sm bg-white border-2 border-gray-200 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-gray-900">$0</span>
        <span className="text-gray-500">/forever</span>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-2 text-gray-700">
          <Check className="w-5 h-5 text-green-500" />
          <span>5 projects</span>
        </li>
        <li className="flex items-center gap-2 text-gray-400">
          <X className="w-5 h-5 text-gray-300" />
          <span>Advanced features</span>
        </li>
        <li className="flex items-center gap-2 text-gray-400">
          <X className="w-5 h-5 text-gray-300" />
          <span>Priority support</span>
        </li>
      </ul>
      <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300">
        Get Started
      </button>
    </div>
  );
}

// Highlighted Feature Pricing
export function PricingHighlighted() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-xl p-8 border-4 border-indigo-500">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-indigo-600" />
        <h3 className="text-2xl font-bold text-gray-900">Business</h3>
      </div>
      <div className="mb-6">
        <span className="text-5xl font-bold text-indigo-600">$79</span>
        <span className="text-gray-500">/month</span>
      </div>
      <div className="space-y-3 mb-8">
        {[
          { text: "Up to 50 team members", highlight: true },
          { text: "Unlimited storage" },
          { text: "Advanced analytics" },
          { text: "API access", highlight: true },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 ${item.highlight ? "bg-indigo-50 -mx-4 px-4 py-2 rounded" : ""}`}
          >
            <Check className="w-5 h-5 text-green-500" />
            <span className={item.highlight ? "font-semibold text-indigo-900" : "text-gray-700"}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700">
        Start 14-day Trial
      </button>
    </div>
  );
}

// Dark Theme Pricing
export function PricingDark() {
  return (
    <div className="max-w-sm bg-gray-900 text-white rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-bold mb-2">Developer</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold">$39</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {["API access", "Webhooks", "Custom domains", "99.9% uptime"].map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
}

// Compact Pricing Row
export function PricingCompactRow() {
  return (
    <div className="flex items-center justify-between max-w-md bg-white rounded-lg shadow-md p-6">
      <div>
        <h4 className="font-bold text-gray-900 text-lg">Startup Plan</h4>
        <p className="text-sm text-gray-500">Perfect for small teams</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold text-indigo-600">$49</p>
        <button className="mt-2 px-4 py-1 bg-indigo-600 text-white text-sm rounded-full font-semibold hover:bg-indigo-700">
          Select
        </button>
      </div>
    </div>
  );
}

// Annual Pricing
export function PricingAnnual() {
  return (
    <div className="max-w-sm bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
      <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
        Best Value
      </div>
      <h3 className="text-2xl font-bold mb-2">Annual Plan</h3>
      <div className="mb-2">
        <span className="text-5xl font-bold">$199</span>
        <span className="text-white/80">/year</span>
      </div>
      <p className="text-sm text-white/80 mb-6">Save $140 vs monthly</p>
      <ul className="space-y-2 mb-8">
        {["All features included", "2 months free", "Money-back guarantee"].map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-white text-emerald-600 py-3 rounded-lg font-bold hover:bg-gray-100">
        Subscribe Annually
      </button>
    </div>
  );
}

// Usage Based Pricing
export function PricingUsageBased() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay As You Go</h3>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center pb-3 border-b">
          <span className="text-gray-700">API Calls</span>
          <span className="font-bold text-gray-900">$0.001 each</span>
        </div>
        <div className="flex justify-between items-center pb-3 border-b">
          <span className="text-gray-700">Storage</span>
          <span className="font-bold text-gray-900">$0.10/GB</span>
        </div>
        <div className="flex justify-between items-center pb-3 border-b">
          <span className="text-gray-700">Bandwidth</span>
          <span className="font-bold text-gray-900">$0.05/GB</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">Only pay for what you use. No monthly fees.</p>
      <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
        Start Using
      </button>
    </div>
  );
}

// Enterprise Pricing
export function PricingEnterprise() {
  return (
    <div className="max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-white">
      <Crown className="w-12 h-12 mb-4 text-yellow-400" />
      <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
      <p className="text-white/70 mb-8">Custom solutions for large organizations</p>
      <ul className="space-y-4 mb-10">
        {[
          "Unlimited users",
          "Dedicated support team",
          "Custom SLA",
          "On-premise deployment",
          "Advanced security",
        ].map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-slate-900" />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300">
        Contact Sales Team
      </button>
    </div>
  );
}

// Limited Offer Pricing
export function PricingLimitedOffer() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-bold transform rotate-45 translate-x-8 translate-y-2">
        50% OFF
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch Special</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-400 line-through">$58</span>
        <span className="text-5xl font-bold text-red-600 ml-2">$29</span>
        <span className="text-gray-500">/month</span>
      </div>
      <p className="text-sm text-red-600 font-semibold mb-6">⏰ Offer ends in 3 days!</p>
      <ul className="space-y-3 mb-8">
        {["All premium features", "Lifetime updates", "Priority support"].map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <Check className="w-5 h-5 text-green-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
        Claim Offer Now
      </button>
    </div>
  );
}
