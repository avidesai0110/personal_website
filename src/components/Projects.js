// src/components/Projects.js
import React from 'react';
import './Projects.css';
import project1Image from '/Users/avi/Desktop/personal_website/src/shoes.jpeg'; 
import project3Image from '/Users/avi/Desktop/personal_website/src/credit_card fraud.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Shoe-Ecommerce Website',
      description: 'Built a website using React.js and a RESTful backend for data flow. Used a MYSql database to store listings.',
      link: 'https://github.com/avidesai0110/Shoe_ecommerce_',
      image: project1Image,
    },
    {
      title: 'Credit Card Fraud Decector',
      description: 'Build a Credit Card Fraud Detector using Python with the Numpy, Pandas, and Sklearn libraries.',
      link: 'https://github.com/avidesai0110/Credit_Card_Fraud',
      image: project3Image,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
