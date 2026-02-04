'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Templates from '@/components/Templates';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Templates />
      
      {/* How It Works Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-sand shadow-warm mb-6">
              <span className="text-sm font-medium text-warm-brown" style={{ fontFamily: 'var(--font-ui)' }}>
                Simple Process
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Create Your Resume in
              <span className="block mt-2 text-warm-brown">Three Easy Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Choose a Template',
                description: 'Select from our collection of professional, ATS-friendly templates designed by experts.',
                icon: '🎨',
              },
              {
                step: '02',
                title: 'Fill Your Details',
                description: 'Add your information with AI-powered suggestions to help craft compelling content.',
                icon: '✍️',
              },
              {
                step: '03',
                title: 'Download & Apply',
                description: 'Export your resume in multiple formats and start applying to your dream jobs.',
                icon: '🚀',
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="card-warm text-center animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div 
                  className="text-5xl font-bold text-warm-beige mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.step}
                </div>
                <h3 
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-text-secondary leading-relaxed"
                  style={{ fontFamily: 'var(--font-lora)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-sand shadow-warm mb-6">
              <span className="text-sm font-medium text-warm-brown" style={{ fontFamily: 'var(--font-ui)' }}>
                Success Stories
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Loved by Thousands of
              <span className="block mt-2 text-warm-brown">Job Seekers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Software Engineer',
                company: 'Tech Corp',
                quote: 'The AI suggestions were incredibly helpful. I landed 3 interviews in my first week of applying!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Marketing Manager',
                company: 'Creative Agency',
                quote: 'Beautiful templates and so easy to use. My new resume got me noticed by top companies.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Data Analyst',
                company: 'Finance Inc',
                quote: 'The ATS optimization feature is a game-changer. Finally, a resume builder that actually works!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="card-warm animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-coral" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p 
                  className="text-text-secondary leading-relaxed mb-6 italic"
                  style={{ fontFamily: 'var(--font-lora)' }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-terracotta rounded-full mr-4"></div>
                  <div>
                    <h4 
                      className="font-bold text-charcoal"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      className="text-sm text-text-muted"
                      style={{ fontFamily: 'var(--font-ui)' }}
                    >
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-warm-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-coral rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ready to Land Your Dream Job?
            </h2>
            <p 
              className="text-xl text-sand mb-10 leading-relaxed"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Join thousands of successful job seekers who used ResumeAI to create 
              professional resumes that get results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-warm-brown text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-warm-beige hover:text-charcoal transition-all duration-300 transform hover:scale-105 shadow-warm-lg">
                Create Your Resume Now
              </button>
              <button className="bg-transparent text-warm-beige border-2 border-warm-beige px-10 py-4 rounded-lg font-bold text-lg hover:bg-warm-beige hover:text-charcoal transition-all duration-300">
                View Pricing
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-dark-brown">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-beige mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  50,000+
                </div>
                <div className="text-sm text-sand" style={{ fontFamily: 'var(--font-ui)' }}>
                  Resumes Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-beige mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  4.9/5
                </div>
                <div className="text-sm text-sand" style={{ fontFamily: 'var(--font-ui)' }}>
                  User Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-beige mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  95%
                </div>
                <div className="text-sm text-sand" style={{ fontFamily: 'var(--font-ui)' }}>
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
