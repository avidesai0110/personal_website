// src/components/Experience.js
import React from 'react';
import './Experience.css';
import company1 from '../clio___cloud_based_legal_technology_logo.jpeg';
import company2 from '../digitalforcescorporation_logo.jpeg';
import company3 from '../revenuecat_logo.jpeg';
import amazonLogo from '../amazon logo.png';
import eblogo from '../transe@blogo.png';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Amazon',
      duration: 'May 2025 - Aug 2025',
      achievements: [
        'Details to be added',
      ],
      logo: amazonLogo,
    },
    {
      title: 'Software Project Manager',
      company: 'Clio',
      duration: 'Jan 2025 - May 2025',
      achievements: [
        'Researching new verticals using TAM, SAM, and SOM analysis',
        'Developing software solutions to adapt Clio products for new market segments',
        'Leading cross-functional initiatives for vertical expansion',
      ],
      logo: company1,
    },
    {
      title: 'Software Engineering Intern',
      company: 'Digital Forces Inc.',
      duration: 'May 2024 - Aug 2024',
      achievements: [
        'Developed AI-powered query system using OpenAI with PostgreSQL and Dataherald',
        'Built credit card reader solution with C# and integrated GlobalNet API',
        'Collaborated with team to deliver production-ready features',
      ],
      logo: company2,
    },
    {
      title: 'Software Consultant',
      company: 'RevenueCat',
      duration: 'Jan 2024 - May 2024',
      achievements: [
        'Identified key expansion metrics using regression analysis and clustering algorithms',
        'Integrated RevenueCat API into multiple client mobile subscription applications',
        'Delivered data-driven insights to drive business growth',
      ],
      logo: company3,
    },
  ];

  const leadership = [
    {
      title: 'Projects Vice President',
      org: 'Entrepreneurs @ Berkeley',
      achievements: [
        'Raised over $100K through strategy and consulting projects',
        'Secured new clients through cold outreach and warm connections',
        'Coordinated student consulting teams to deliver to external partners',
      ],
      logo: eblogo,
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-label">EXPERIENCE & LEADERSHIP</div>
        <h2 className="experience-heading">Experience & Leadership</h2>
        
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          <div className="experience-section">
            <h3 className="section-subheading">Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="timeline-dot"></div>
                  <div className="experience-card">
                    <div className="experience-header">
                      {exp.logo && (
                        <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                      )}
                      <div className="experience-info">
                        <h4 className="experience-title">{exp.title}</h4>
                        <p className="experience-company">{exp.company}</p>
                        <span className="experience-duration">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="section-subheading">Leadership</h3>
            <div className="experience-list">
              {leadership.map((role, index) => (
                <div key={index} className="experience-item">
                  <div className="timeline-dot"></div>
                  <div className="experience-card">
                    <div className="experience-header">
                      {role.logo && (
                        <img src={role.logo} alt={`${role.org} logo`} className="company-logo" />
                      )}
                      <div className="experience-info">
                        <h4 className="experience-title">{role.title}</h4>
                        <p className="experience-company">{role.org}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
