// src/components/Navbar.js
import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.navbar-links a[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#bio">Bio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
