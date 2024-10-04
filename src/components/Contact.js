// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Phone:</strong> <a href="tel:+630943835">630-943-835</a></p>
        <p><strong>Email:</strong> <a href="mailto:avidesai0110@gmail.com">avidesai0110@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/avi-desai-243872172/" target="_blank" rel="noopener noreferrer">Avi Desai LinkedIn</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/avidesai0110" target="_blank" rel="noopener noreferrer">Avi's GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact;
