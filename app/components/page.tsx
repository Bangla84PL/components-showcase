"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComponentCard } from "@/components/ComponentCard";
import { componentsData } from "@/data/components-data";
import { CATEGORIES, TECHNOLOGY_TAGS } from "@/lib/constants";
import { CategoryId, TechnologyId } from "@/lib/types";

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyId[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter components based on search and filters
  const filteredComponents = useMemo(() => {
    let filtered = componentsData;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (comp) =>
          comp.name.toLowerCase().includes(query) ||
          comp.description.toLowerCase().includes(query) ||
          comp.categories.some((cat) => cat.toLowerCase().includes(query)) ||
          comp.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((comp) =>
        selectedCategories.every((cat) => comp.categories.includes(cat))
      );
    }

    // Technology filter
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter((comp) =>
        selectedTechnologies.every((tech) => comp.technologies.includes(tech))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategories, selectedTechnologies]);

  const toggleCategory = (categoryId: CategoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleTechnology = (techId: TechnologyId) => {
    setSelectedTechnologies((prev) =>
      prev.includes(techId) ? prev.filter((t) => t !== techId) : [...prev, techId]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedTechnologies([]);
  };

  const hasActiveFilters =
    searchQuery || selectedCategories.length > 0 || selectedTechnologies.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-strong">
              Component Showcase
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Explore {componentsData.length} spectacular components from leading design
              platforms
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="glass-card p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition"
              />
            </div>

            {/* Filter Toggle Button */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-xs rounded-full">
                    {selectedCategories.length + selectedTechnologies.length}
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Filter Panels */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-6"
              >
                {/* Categories */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.slice(0, 12).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          selectedCategories.includes(category.id)
                            ? "bg-emerald-500 text-white"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {TECHNOLOGY_TAGS.slice(0, 8).map((tech) => (
                      <button
                        key={tech.id}
                        onClick={() => toggleTechnology(tech.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          selectedTechnologies.includes(tech.id)
                            ? "bg-purple-500 text-white"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        {tech.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-white/70">
            Showing <span className="text-white font-semibold">{filteredComponents.length}</span> of{" "}
            <span className="text-white font-semibold">{componentsData.length}</span> components
          </div>

          {/* Components Grid */}
          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredComponents.map((component, index) => (
                <ComponentCard key={component.id} component={component} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-12 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">No components found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
