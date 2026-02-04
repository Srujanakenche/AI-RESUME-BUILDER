'use client';

import { useState } from 'react';
import Link from 'next/link';

const templates = [
  {
    id: 1,
    name: 'Classic Professional',
    category: 'Traditional',
    preview: 'classic',
    color: 'warm-brown',
  },
  {
    id: 2,
    name: 'Modern Minimal',
    category: 'Modern',
    preview: 'modern',
    color: 'accent-coral',
  },
  {
    id: 3,
    name: 'Creative Bold',
    category: 'Creative',
    preview: 'creative',
    color: 'accent-sage',
  },
  {
    id: 4,
    name: 'Executive Elite',
    category: 'Executive',
    preview: 'executive',
    color: 'dark-brown',
  },
  {
    id: 5,
    name: 'Tech Forward',
    category: 'Tech',
    preview: 'tech',
    color: 'terracotta',
  },
  {
    id: 6,
    name: 'Academic Scholar',
    category: 'Academic',
    preview: 'academic',
    color: 'accent-terracotta',
  },
];

const categories = ['All', 'Traditional', 'Modern', 'Creative', 'Executive', 'Tech', 'Academic'];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section className="py-24 bg-warm-beige relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-accent-coral rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-sage rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-sand shadow-warm mb-6">
            <span className="text-sm font-medium text-warm-brown" style={{ fontFamily: 'var(--font-ui)' }}>
              Professional Templates
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Choose Your
            <span className="block mt-2 text-warm-brown">Perfect Template</span>
          </h2>
          
          <p 
            className="text-lg text-text-secondary"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Hand-crafted, professionally designed templates that showcase your experience beautifully
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn stagger-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-warm-brown text-white shadow-warm'
                  : 'bg-white text-text-secondary hover:bg-sand border border-sand'
              }`}
              style={{ fontFamily: 'var(--font-ui)' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className={`group animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className="card-warm p-6 cursor-pointer">
                {/* Template Preview */}
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-[8.5/11] bg-white border-2 border-sand">
                  {/* Simulated Resume Layout */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div 
                          className={`h-3 rounded`}
                          style={{ 
                            backgroundColor: `var(--${template.color})`,
                            width: '70%',
                          }}
                        ></div>
                        <div className="h-2 bg-sand rounded w-1/2"></div>
                      </div>
                      <div 
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: `var(--${template.color})`, opacity: 0.3 }}
                      ></div>
                    </div>

                    {/* Content Lines */}
                    <div className="space-y-2 pt-3">
                      <div className="h-1.5 bg-warm-beige rounded w-full"></div>
                      <div className="h-1.5 bg-warm-beige rounded w-4/5"></div>
                      <div className="h-1.5 bg-warm-beige rounded w-3/5"></div>
                    </div>

                    {/* Section */}
                    <div className="pt-3 space-y-1.5">
                      <div 
                        className="h-2 rounded w-2/5"
                        style={{ backgroundColor: `var(--${template.color})`, opacity: 0.7 }}
                      ></div>
                      <div className="h-1.5 bg-warm-beige rounded w-full"></div>
                      <div className="h-1.5 bg-warm-beige rounded w-4/5"></div>
                    </div>

                    {/* Section */}
                    <div className="pt-3 space-y-1.5">
                      <div 
                        className="h-2 rounded w-2/5"
                        style={{ backgroundColor: `var(--${template.color})`, opacity: 0.7 }}
                      ></div>
                      <div className="h-1.5 bg-warm-beige rounded w-full"></div>
                      <div className="h-1.5 bg-warm-beige rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredTemplate === template.id 
                        ? 'opacity-100 bg-charcoal bg-opacity-90' 
                        : 'opacity-0 bg-charcoal bg-opacity-0'
                    }`}
                  >
                    <div className="text-center space-y-4">
                      <Link href={`/builder?template=${template.id}`}>
                        <button className="btn-primary px-8 py-3 text-sm">
                          Use Template
                        </button>
                      </Link>
                      <Link href={`/preview/${template.id}`}>
                        <button className="btn-secondary text-white border-white px-8 py-3 text-sm">
                          Preview
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 
                      className="text-lg font-bold text-charcoal"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {template.name}
                    </h3>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ 
                        backgroundColor: `var(--${template.color})`,
                        fontFamily: 'var(--font-ui)',
                      }}
                    >
                      {template.category}
                    </span>
                  </div>
                  
                  <div 
                    className={`h-1 rounded-full transition-all duration-300 ${
                      hoveredTemplate === template.id ? 'w-full' : 'w-0'
                    }`}
                    style={{ backgroundColor: `var(--${template.color})` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center animate-fadeIn stagger-3">
          <Link href="/templates">
            <button className="btn-secondary px-10 py-4 text-base">
              View All Templates
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
