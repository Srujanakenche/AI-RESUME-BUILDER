'use client';

import { useState } from 'react';

const features = [
  {
    icon: '✨',
    title: 'AI-Powered Content',
    description: 'Let our advanced AI generate compelling, professional content tailored to your experience and the job you\'re targeting.',
    color: 'accent-coral',
  },
  {
    icon: '🎨',
    title: 'Beautiful Templates',
    description: 'Choose from a curated collection of professional, modern templates designed to make you stand out.',
    color: 'accent-sage',
  },
  {
    icon: '⚡',
    title: 'ATS Optimization',
    description: 'Our resumes are optimized to pass Applicant Tracking Systems, increasing your chances of getting noticed.',
    color: 'accent-terracotta',
  },
  {
    icon: '📱',
    title: 'Multi-Format Export',
    description: 'Download your resume in PDF, DOCX, or share it online with a custom link.',
    color: 'warm-brown',
  },
  {
    icon: '🔄',
    title: 'Real-time Preview',
    description: 'See changes instantly as you build your resume with our live preview feature.',
    color: 'terracotta',
  },
  {
    icon: '🎯',
    title: 'Job-Specific Optimization',
    description: 'Tailor your resume for specific job postings with AI-powered suggestions and keyword optimization.',
    color: 'dark-brown',
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-warm-beige rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-sand shadow-warm mb-6">
            <span className="text-sm font-medium text-warm-brown" style={{ fontFamily: 'var(--font-ui)' }}>
              Why Choose Us
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Everything You Need to
            <span className="block mt-2 text-warm-brown">Create Your Perfect Resume</span>
          </h2>
          
          <p 
            className="text-lg text-text-secondary"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Powerful features designed to help you create a standout resume that gets results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-warm p-8 cursor-pointer animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transform transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}
                  style={{ 
                    backgroundColor: `var(--${feature.color})`,
                    opacity: 0.2,
                  }}
                >
                  <span className="relative z-10">{feature.icon}</span>
                </div>
                <div 
                  className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ backgroundColor: `var(--${feature.color})` }}
                ></div>
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-bold text-charcoal mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="text-text-secondary leading-relaxed"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {feature.description}
              </p>

              {/* Hover Line */}
              <div 
                className={`h-1 rounded-full mt-6 transition-all duration-300 ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`}
                style={{ backgroundColor: `var(--${feature.color})` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn stagger-4">
          <button className="btn-primary px-10 py-4 text-base">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
