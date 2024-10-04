// Shapes.js
import * as THREE from 'three';

// Function to create a rounded star shape
export const createRoundedStar = (outerRadius, innerRadius, points, depth, smoothness) => {
  const starShape = new THREE.Shape();
  const step = Math.PI / points;
  for (let i = 0; i < 2 * points; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = i * step;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }
  starShape.closePath();

  const extrudeSettings = {
    depth: depth,
    bevelEnabled: true,
    bevelThickness: smoothness,
    bevelSize: smoothness,
    bevelSegments: 10,
  };

  return new THREE.ExtrudeGeometry(starShape, extrudeSettings);
};

// Custom Rounded Box Geometry for consistent size across shapes
export const createRoundedBox = (width, height, depth, radius, smoothness) => {
  const shape = new THREE.Shape();
  const halfWidth = width / 2 - radius;
  const halfHeight = height / 2 - radius;

  shape.moveTo(-halfWidth, halfHeight);
  shape.lineTo(halfWidth, halfHeight);
  shape.quadraticCurveTo(width / 2, halfHeight, width / 2, halfHeight - radius);
  shape.lineTo(width / 2, -halfHeight);
  shape.quadraticCurveTo(width / 2, -height / 2, halfWidth, -height / 2);
  shape.lineTo(-halfWidth, -height / 2);
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2, -halfHeight);
  shape.lineTo(-width / 2, halfHeight - radius);
  shape.quadraticCurveTo(-width / 2, halfHeight, -halfWidth, halfHeight);

  const extrudeSettings = {
    depth: depth,
    bevelEnabled: true,
    bevelSegments: smoothness,
    steps: 2,
    bevelSize: radius,
    bevelThickness: radius,
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
};

// Export geometries
export const geometries = [
  new THREE.SphereGeometry(45, 32, 32),          // Sphere
  new THREE.CylinderGeometry(40, 40, 80, 32),    // Cylinder replacing the cone
  new THREE.TorusGeometry(35, 15, 16, 100),      // Torus
  createRoundedBox(70, 70, 70, 8, 16),           // Rounded Box
  new THREE.TorusKnotGeometry(30, 10, 100, 16),  // Torus Knot for a unique twist
  createRoundedStar(60, 30, 5, 40, 3),           // Custom Rounded Star
];

// Export colors
export const colors = [
  0xffa500,   // Orange
  0xbb66ff,   // Purple
  0x6699ff,   // Light Blue
  0x87cefa,   // Sky Blue
  0x90ee90,   // Light Green
  0xffff66,   // Yellow
];
