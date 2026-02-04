'use client';

import { useState } from 'react';

interface FormData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa: string;
  }>;
  skills: string[];
}

export default function ResumeBuilderForm() {
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'summary', label: 'Summary', icon: '📝' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Build Your Resume
          </h1>
          <p 
            className="text-lg text-text-secondary"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Fill in your details and watch your resume come to life
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 animate-slideIn">
            <div className="card-warm sticky top-24">
              <h3 
                className="text-lg font-bold text-charcoal mb-4 pb-4 border-b border-sand"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Sections
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-warm-brown text-white shadow-warm'
                        : 'text-text-secondary hover:bg-warm-beige'
                    }`}
                    style={{ fontFamily: 'var(--font-ui)' }}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <span className="font-medium">{section.label}</span>
                  </button>
                ))}
              </nav>

              {/* Progress */}
              <div className="mt-8 pt-6 border-t border-sand">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-secondary" style={{ fontFamily: 'var(--font-ui)' }}>
                    Progress
                  </span>
                  <span className="text-sm font-bold text-warm-brown" style={{ fontFamily: 'var(--font-ui)' }}>
                    60%
                  </span>
                </div>
                <div className="h-2 bg-warm-beige rounded-full overflow-hidden">
                  <div className="h-full bg-warm-brown rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-9 space-y-8">
            {/* Personal Info Section */}
            {activeSection === 'personal' && (
              <div className="card-warm animate-scaleIn">
                <div className="mb-6">
                  <h2 
                    className="text-2xl font-bold text-charcoal mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Personal Information
                  </h2>
                  <p className="text-text-secondary" style={{ fontFamily: 'var(--font-lora)' }}>
                    Let's start with your basic information
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input-warm w-full"
                      value={formData.personalInfo.fullName}
                      onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input-warm w-full"
                      value={formData.personalInfo.email}
                      onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="input-warm w-full"
                      value={formData.personalInfo.phone}
                      onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="San Francisco, CA"
                      className="input-warm w-full"
                      value={formData.personalInfo.location}
                      onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      placeholder="linkedin.com/in/johndoe"
                      className="input-warm w-full"
                      value={formData.personalInfo.linkedin}
                      onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                      Website/Portfolio
                    </label>
                    <input
                      type="url"
                      placeholder="johndoe.com"
                      className="input-warm w-full"
                      value={formData.personalInfo.website}
                      onChange={(e) => handleInputChange('personalInfo', 'website', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8 pt-6 border-t border-sand">
                  <button 
                    className="btn-primary"
                    onClick={() => setActiveSection('summary')}
                  >
                    Continue to Summary →
                  </button>
                </div>
              </div>
            )}

            {/* Summary Section */}
            {activeSection === 'summary' && (
              <div className="card-warm animate-scaleIn">
                <div className="mb-6">
                  <h2 
                    className="text-2xl font-bold text-charcoal mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Professional Summary
                  </h2>
                  <p className="text-text-secondary" style={{ fontFamily: 'var(--font-lora)' }}>
                    Write a brief overview of your professional background
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2" style={{ fontFamily: 'var(--font-ui)' }}>
                    Summary *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Experienced professional with a track record of..."
                    className="input-warm w-full resize-none"
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-text-muted" style={{ fontFamily: 'var(--font-ui)' }}>
                      Aim for 3-5 sentences
                    </span>
                    <button className="text-sm font-medium text-warm-brown hover:text-dark-brown transition-colors" style={{ fontFamily: 'var(--font-ui)' }}>
                      ✨ Generate with AI
                    </button>
                  </div>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-sand">
                  <button 
                    className="btn-secondary"
                    onClick={() => setActiveSection('personal')}
                  >
                    ← Back
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={() => setActiveSection('experience')}
                  >
                    Continue to Experience →
                  </button>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="card-warm animate-scaleIn">
                  <div className="mb-6">
                    <h2 
                      className="text-2xl font-bold text-charcoal mb-2"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      Work Experience
                    </h2>
                    <p className="text-text-secondary" style={{ fontFamily: 'var(--font-lora)' }}>
                      Add your professional experience
                    </p>
                  </div>

                  {formData.experience.length === 0 ? (
                    <div className="text-center py-12 bg-warm-beige rounded-lg border-2 border-dashed border-sand">
                      <div className="text-4xl mb-4">💼</div>
                      <p className="text-text-secondary mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
                        No experience added yet
                      </p>
                      <button className="btn-primary">
                        + Add Experience
                      </button>
                    </div>
                  ) : (
                    <button className="btn-secondary w-full">
                      + Add Another Experience
                    </button>
                  )}

                  <div className="flex justify-between mt-8 pt-6 border-t border-sand">
                    <button 
                      className="btn-secondary"
                      onClick={() => setActiveSection('summary')}
                    >
                      ← Back
                    </button>
                    <button 
                      className="btn-primary"
                      onClick={() => setActiveSection('education')}
                    >
                      Continue to Education →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* AI Suggestions Card */}
            <div className="card-warm bg-gradient-warm animate-fadeIn stagger-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-lg font-bold text-charcoal mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    AI-Powered Suggestions
                  </h3>
                  <p className="text-text-secondary mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
                    Let AI help you craft compelling content based on your experience
                  </p>
                  <button className="btn-secondary text-sm px-6 py-2">
                    Get AI Suggestions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
