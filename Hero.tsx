'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-warm-beige rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sand rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-1/4 w-2 h-2 bg-accent-coral rounded-full animate-pulse"></div>
      <div className="absolute bottom-60 left-1/3 w-3 h-3 bg-warm-brown rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent-sage rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-sand shadow-warm">
              <span className="w-2 h-2 bg-accent-coral rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-text-secondary" style={{ fontFamily: 'var(--font-ui)' }}>
                AI-Powered Resume Creation
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Craft Your
              <span className="block mt-2 bg-gradient-terracotta bg-clip-text text-transparent">
                Perfect Resume
              </span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-xl text-text-secondary max-w-xl leading-relaxed"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Create professional, ATS-friendly resumes in minutes with the power of AI. 
              Stand out from the crowd and land your dream job.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/builder">
                <button className="btn-primary px-8 py-4 text-base group">
                  Start Building Now
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
              <Link href="/templates">
                <button className="btn-secondary px-8 py-4 text-base">
                  Browse Templates
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sand">
              <div>
                <div className="text-3xl font-bold text-warm-brown" style={{ fontFamily: 'var(--font-playfair)' }}>
                  50K+
                </div>
                <div className="text-sm text-text-muted mt-1" style={{ fontFamily: 'var(--font-ui)' }}>
                  Resumes Created
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warm-brown" style={{ fontFamily: 'var(--font-playfair)' }}>
                  95%
                </div>
                <div className="text-sm text-text-muted mt-1" style={{ fontFamily: 'var(--font-ui)' }}>
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warm-brown" style={{ fontFamily: 'var(--font-playfair)' }}>
                  4.9★
                </div>
                <div className="text-sm text-text-muted mt-1" style={{ fontFamily: 'var(--font-ui)' }}>
                  User Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Resume Preview */}
          <div className={`relative ${mounted ? 'animate-fadeIn stagger-2' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Resume Card */}
              <div className="card-warm p-8 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="h-3 bg-warm-brown rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-sand rounded w-1/2"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-warm rounded-full"></div>
                  </div>

                  {/* Content Lines */}
                  <div className="space-y-3 pt-4">
                    <div className="h-2 bg-warm-beige rounded w-full"></div>
                    <div className="h-2 bg-warm-beige rounded w-5/6"></div>
                    <div className="h-2 bg-warm-beige rounded w-4/6"></div>
                  </div>

                  {/* Section */}
                  <div className="pt-4 space-y-2">
                    <div className="h-2.5 bg-terracotta rounded w-2/5"></div>
                    <div className="h-2 bg-warm-beige rounded w-full"></div>
                    <div className="h-2 bg-warm-beige rounded w-4/5"></div>
                  </div>

                  {/* Section */}
                  <div className="pt-4 space-y-2">
                    <div className="h-2.5 bg-terracotta rounded w-2/5"></div>
                    <div className="h-2 bg-warm-beige rounded w-full"></div>
                    <div className="h-2 bg-warm-beige rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-coral opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-sage opacity-20 rounded-full blur-2xl"></div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-warm-lg border border-sand animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-text-secondary" style={{ fontFamily: 'var(--font-ui)' }}>
                    ATS Optimized
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
