'use client';

import { useState } from 'react';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    graduationDate: string;
  }>;
  skills: string[];
}

export default function ResumePreview({ data }: { data?: ResumeData }) {
  const [zoom, setZoom] = useState(100);

  // Sample data for preview
  const previewData = data || {
    personalInfo: {
      fullName: 'Bethany Jones',
      email: 'bethany.jones@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/bethanyjones',
    },
    summary: 'Dedicated culture critic and blogger with 8+ years of experience in content creation, editorial strategy, and digital storytelling. Proven track record of building engaged audiences and creating compelling narratives that resonate with diverse communities.',
    experience: [
      {
        company: 'Culture Magazine',
        position: 'Senior Content Strategist',
        startDate: '2020',
        endDate: 'Present',
        description: 'Lead content strategy for digital platform reaching 2M+ monthly readers. Develop editorial calendars and manage team of 8 writers.',
      },
      {
        company: 'The Digital Review',
        position: 'Culture Editor',
        startDate: '2018',
        endDate: '2020',
        description: 'Curated and edited cultural commentary pieces. Increased readership by 150% through strategic content initiatives.',
      },
    ],
    education: [
      {
        school: 'University of California, Berkeley',
        degree: 'Master of Arts',
        field: 'Cultural Studies',
        graduationDate: '2016',
      },
    ],
    skills: ['Content Strategy', 'Editorial Leadership', 'SEO Optimization', 'Social Media', 'Analytics'],
  };

  return (
    <div className="sticky top-24">
      {/* Preview Controls */}
      <div className="card-warm mb-4 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-text-secondary" style={{ fontFamily: 'var(--font-ui)' }}>
            Preview
          </span>
          <div className="flex items-center space-x-2 bg-warm-beige px-3 py-1 rounded-lg">
            <button 
              onClick={() => setZoom(Math.max(50, zoom - 10))}
              className="text-warm-brown hover:text-dark-brown"
            >
              −
            </button>
            <span className="text-sm font-medium text-text-secondary min-w-[3rem] text-center" style={{ fontFamily: 'var(--font-ui)' }}>
              {zoom}%
            </span>
            <button 
              onClick={() => setZoom(Math.min(150, zoom + 10))}
              className="text-warm-brown hover:text-dark-brown"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-warm-beige rounded-lg transition-colors" title="Download PDF">
            <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-warm-beige rounded-lg transition-colors" title="Print">
            <svg className="w-5 h-5 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Resume Preview Paper */}
      <div className="bg-white rounded-lg shadow-warm-lg overflow-hidden">
        <div 
          className="origin-top transition-transform duration-300"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {/* A4 Paper Aspect Ratio */}
          <div className="w-full bg-white p-12" style={{ aspectRatio: '8.5/11' }}>
            {/* Header */}
            <div className="border-b-2 border-warm-brown pb-6 mb-6">
              <h1 
                className="text-4xl font-bold text-charcoal mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {previewData.personalInfo.fullName}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary" style={{ fontFamily: 'var(--font-ui)' }}>
                <span>{previewData.personalInfo.email}</span>
                <span>•</span>
                <span>{previewData.personalInfo.phone}</span>
                <span>•</span>
                <span>{previewData.personalInfo.location}</span>
                <span>•</span>
                <span className="text-warm-brown">{previewData.personalInfo.linkedin}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 
                className="text-xl font-bold text-warm-brown mb-3 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Professional Summary
              </h2>
              <p 
                className="text-text-secondary leading-relaxed text-sm"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {previewData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 
                className="text-xl font-bold text-warm-brown mb-3 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Professional Experience
              </h2>
              <div className="space-y-4">
                {previewData.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 
                          className="font-bold text-charcoal"
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {exp.position}
                        </h3>
                        <p 
                          className="text-sm text-text-secondary italic"
                          style={{ fontFamily: 'var(--font-lora)' }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span 
                        className="text-sm text-text-muted font-medium"
                        style={{ fontFamily: 'var(--font-ui)' }}
                      >
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p 
                      className="text-sm text-text-secondary leading-relaxed"
                      style={{ fontFamily: 'var(--font-lora)' }}
                    >
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 
                className="text-xl font-bold text-warm-brown mb-3 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Education
              </h2>
              <div className="space-y-3">
                {previewData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 
                          className="font-bold text-charcoal"
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {edu.degree} in {edu.field}
                        </h3>
                        <p 
                          className="text-sm text-text-secondary italic"
                          style={{ fontFamily: 'var(--font-lora)' }}
                        >
                          {edu.school}
                        </p>
                      </div>
                      <span 
                        className="text-sm text-text-muted font-medium"
                        style={{ fontFamily: 'var(--font-ui)' }}
                      >
                        {edu.graduationDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 
                className="text-xl font-bold text-warm-brown mb-3 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {previewData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-warm-beige text-text-secondary rounded-full text-sm font-medium"
                    style={{ fontFamily: 'var(--font-ui)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="card-warm mt-4 p-4">
        <h3 
          className="text-sm font-bold text-charcoal mb-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Export Options
        </h3>
        <div className="space-y-2">
          <button className="w-full btn-primary text-sm py-3">
            Download as PDF
          </button>
          <button className="w-full btn-secondary text-sm py-3">
            Download as DOCX
          </button>
          <button className="w-full text-warm-brown hover:text-dark-brown font-medium py-2 transition-colors" style={{ fontFamily: 'var(--font-ui)' }}>
            Share Link
          </button>
        </div>
      </div>
    </div>
  );
}
