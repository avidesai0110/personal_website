// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Projects from './components/Projects';
import * as THREE from 'three';
import profile from './profile.jpg';
import { geometries, colors } from './Shapes';
import Contact from './components/Contact';

function App() {
  const mountRef = useRef(null);
  const [flippingText, setFlippingText] = useState('trying to build cool stuff');
  const [showShapes, setShowShapes] = useState(true);

  useEffect(() => {
    const texts = [
      'trying to build cool stuff',
      'trying to meet new people',
      'trying to make an impact',
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setFlippingText(texts[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!showShapes) {
      return;
    }

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 800);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    currentMount.appendChild(renderer.domElement);

    // Ignore pointer events on the canvas
    renderer.domElement.style.pointerEvents = 'none';

// Light setup
// Light setup with increased intensity
const ambientLight = new THREE.AmbientLight(0xffffff, 15); // Increased from 0.9 to 1.5 for more brightness
scene.add(ambientLight);



// Add an extra light for even more illumination
const directionalLight = new THREE.DirectionalLight(0xffffff, 7.0); // Added directional light for better illumination
directionalLight.position.set(-300, 500, 400);
scene.add(directionalLight);


// Store meshes for animation
const meshes = geometries.map((geometry, index) => {
  const material = new THREE.MeshStandardMaterial({
    color: colors[index],  // Keep the existing colors
    metalness: 0.8,        // Increased metalness to make it shinier
    roughness: 0.1,        // Reduced roughness to make the surface smoother and more reflective
  });
  const mesh = new THREE.Mesh(geometry, material);

  const positions = [
    { x: -300, y: 150, z: 100 },
    { x: 300, y: 150, z: 100 },
    { x: -400, y: 0, z: 100 },
    { x: 400, y: 0, z: 100 },
    { x: -300, y: -150, z: 100 },
    { x: 300, y: -150, z: 100 },
  ];

  const position = positions[index % positions.length];
  mesh.position.set(position.x, position.y, position.z);

  scene.add(mesh);
  return mesh;
});


    // Animate the shapes with a very subtle movement
    let time = 0;

    const animate = () => {
      if (!showShapes) return;
      requestAnimationFrame(animate);
      time += 0.005;

      meshes.forEach((mesh, index) => {
        const initialY = mesh.position.y;
        mesh.position.y = initialY + Math.sin(time + index) * 0.1;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [showShapes]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#bio');
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        setShowShapes(aboutTop > window.innerHeight / 3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar /> {/* Keep the navbar at the top */}
      <header className="App-header" id="hero">
        {showShapes && (
          <div
            ref={mountRef}
            className="floating-shapes"
            style={{ pointerEvents: 'none' }}
          ></div>
        )}
        <div className="sliding-name-background">
          <div className="name-slide">
            Avi Desai • Avi Desai • Avi Desai • Avi Desai • Avi Desai • Avi Desai
          </div>
        </div>
        <div className="hero-container">
          <div className="intro-text">
            <span className="greeting-text">Hi, I'm</span>{' '}
            <span className="name-text">Avi!</span>
          </div>
          <p className="flipping-text">{flippingText}</p>
          <img src={profile} alt="Avi" className="profile-picture" />
        </div>
      </header>

      <main className="App-main">
        <section id="bio">
          <Bio />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
