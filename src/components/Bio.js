import React, { useEffect, useState } from 'react';
import './Bio.css';
import profile1 from '/Users/avi/Desktop/personal_website/personal-website/src/Gradpic.jpeg';
import profile2 from '/Users/avi/Desktop/personal_website/personal-website/src/grad.jpg';
import profile3 from '/Users/avi/Desktop/personal_website/personal-website/src/hogwarts.jpg';

const Bio = () => {
  const images = [profile1, profile2, profile3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <section id="bio" className="bio">
      <div className="bio-content">
        <div className="bio-text">
          <h2>About Me</h2>
          <p>
            Hi! I’m Avi, a passionate software engineer dedicated to creating visually engaging and functional user experiences. My journey started with small web applications, but now I'm taking on complex software challenges and loving every moment of it.
          </p>
          <p>
            With a background that spans software development, product management and consulting, I bridge the gap between technology and business needs. I'm always looking for ways to grow, learn, and create solutions that make a real impact.
          </p>
          <p>
            Let’s connect—whether it's about technology, new trends, or just enjoying a good cup of boba!
          </p>
        </div>
        <div className="bio-image">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Avi ${index + 1}`}
              className={`bio-photo ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
