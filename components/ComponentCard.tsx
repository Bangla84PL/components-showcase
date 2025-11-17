"use client";

import { useState, Suspense } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Component } from "@/lib/types";
import { copyToClipboard, cn } from "@/lib/utils";

interface ComponentCardProps {
  component: Component;
  index?: number;
}

export function ComponentCard({ component, index = 0 }: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    const success = await copyToClipboard(component.code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group glass-card p-6 hover:shadow-lg transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-strong">
            {component.name}
          </h3>
          {component.description && (
            <p className="text-sm text-white/70 line-clamp-2">
              {component.description}
            </p>
          )}
        </div>

        {/* Technology Badges */}
        <div className="flex gap-1 ml-4">
          {component.technologies.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className="relative mb-4 rounded-lg bg-white/5 border border-white/10 min-h-[200px] overflow-hidden">
        <div className="p-6 flex items-center justify-center">
          {component.previewComponent ? (
            <Suspense fallback={
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
              </div>
            }>
              <component.previewComponent />
            </Suspense>
          ) : (
            <div className="text-white/50 text-sm">Preview not available</div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleCopyCode}
          className={cn(
            "flex-1 px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center justify-center gap-2",
            copied
              ? "bg-emerald-500 text-white"
              : "bg-white text-forest-green hover:bg-white/90"
          )}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Code</span>
            </>
          )}
        </button>

        {component.sourceUrl && (
          <a
            href={component.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/10 text-white rounded-md font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 border border-white/30"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Source</span>
          </a>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {component.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30"
            >
              {category.replace(/-/g, " ")}
            </span>
          ))}
        </div>

        {/* Source */}
        <span className="text-white/60 text-xs">
          from <span className="text-white/80 font-medium">{component.sourceName}</span>
        </span>
      </div>

      {/* Dependencies (if any) */}
      {component.dependencies.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-white/50 mb-1">Dependencies:</p>
          <p className="text-xs text-white/70 font-mono">
            {component.dependencies.join(", ")}
          </p>
        </div>
      )}
    </motion.div>
  );
}
