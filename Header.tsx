'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/templates', label: 'Templates' },
    { href: '/builder', label: 'Builder' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect shadow-warm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-warm-brown rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-cream font-bold text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                    R
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-coral rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-charcoal" style={{ fontFamily: 'var(--font-playfair)' }}>
                ResumeAI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-warm-brown'
                    : 'text-text-secondary hover:text-warm-brown'
                }`}
                style={{ fontFamily: 'var(--font-ui)' }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-warm-brown rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button className="btn-secondary text-sm px-6 py-2.5">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="btn-primary text-sm px-6 py-2.5">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-warm-brown">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
