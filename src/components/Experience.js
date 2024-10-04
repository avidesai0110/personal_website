// src/components/Experience.js
import React from 'react';
import './Experience.css';
import company1 from '/Users/avi/Desktop/personal_website/src/clio___cloud_based_legal_technology_logo.jpeg';
import company2 from '/Users/avi/Desktop/personal_website/src/digitalforcescorporation_logo.jpeg';
import company3 from '/Users/avi/Desktop/personal_website/src/revenuecat_logo.jpeg';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Project Manager',
      company: 'Clio',
      duration: 'Sep 2024 - Present',
      description: 'Working on researching new verticals using insgights from TAM, SAM, and SOM analysis. We will work on software solutions to help adapt current Clio software to these new ventures',
      logo: company1,
    },
    {
      title: 'Software Engineering Intern',
      company: 'Digital Forces Inc.',
      duration: 'May 2024 - Aug 2024',
      description: 'Developed query system using Open AI with a Postgres database and Dataherald for a local Docker machine. I also worked on a team to designed a credit card reader solution with C# and integrating the GlobalNet API.',
      logo: company2,
    },
    {
      title: 'Software Consultant',
      company: 'Revenue Cat',
      duration: 'Jan 2024- May 2024',
      description: 'Utilized regression analysis and clustering algorithms to identify key metrics for expansion. Integrated Revenue Cat into different software clients with Revenue Cat API for mobile subscription applications.',
      logo: company3,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className={`timeline-content-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="company-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
