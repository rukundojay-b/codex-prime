// import React, { useState, useEffect, useRef, Suspense } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// import { FiMail, FiPhone, FiMapPin, FiX, FiMoon, FiSun, FiMenu, FiGithub, FiExternalLink, FiHeart } from 'react-icons/fi';

// // 3D Scene Component
// const ThreeScene = ({ darkMode, activeSection }) => {
//   const mountRef = useRef();
//   const sceneRef = useRef();
//   const rendererRef = useRef();
//   const frameRef = useRef();

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);

//     sceneRef.current = scene;
//     rendererRef.current = renderer;

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(darkMode ? 0x404040 : 0x606060, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(darkMode ? 0x8b5cf6 : 0x3b82f6, 1);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     // Floating geometric shapes
//     const shapes = [];
//     const geometries = [
//       new THREE.BoxGeometry(1, 1, 1),
//       new THREE.SphereGeometry(0.5, 32, 32),
//       new THREE.ConeGeometry(0.5, 1, 32),
//       new THREE.OctahedronGeometry(0.6),
//       new THREE.TorusGeometry(0.5, 0.2, 16, 100)
//     ];

//     for (let i = 0; i < 15; i++) {
//       const geometry = geometries[Math.floor(Math.random() * geometries.length)];
//       const material = new THREE.MeshPhongMaterial({
//         color: darkMode ? 0x8b5cf6 : 0x3b82f6,
//         transparent: true,
//         opacity: 0.3 + Math.random() * 0.4
//       });
      
//       const shape = new THREE.Mesh(geometry, material);
//       shape.position.set(
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 20
//       );
//       shape.rotation.set(
//         Math.random() * Math.PI,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI
//       );
      
//       shapes.push(shape);
//       scene.add(shape);
//     }

//     // Particle system
//     const particleGeometry = new THREE.BufferGeometry();
//     const particleCount = 1000;
//     const positions = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 50;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
//     }

//     particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
//     const particleMaterial = new THREE.PointsMaterial({
//       color: darkMode ? 0x8b5cf6 : 0x3b82f6,
//       size: 0.5,
//       opacity: 0.6,
//       transparent: true
//     });

//     const particles = new THREE.Points(particleGeometry, particleMaterial);
//     scene.add(particles);

//     camera.position.z = 10;

//     // Animation loop
//     const animate = () => {
//       frameRef.current = requestAnimationFrame(animate);

//       // Rotate shapes
//       shapes.forEach((shape, index) => {
//         shape.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
//         shape.rotation.y += 0.01 * (index % 3 === 0 ? 1 : -1);
//         shape.rotation.z += 0.005;
        
//         // Floating motion
//         shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
//       });

//       // Rotate particles
//       particles.rotation.y += 0.002;
      
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (frameRef.current) {
//         cancelAnimationFrame(frameRef.current);
//       }
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, [darkMode]);

//   return <div ref={mountRef} className="fixed inset-0 -z-10" />;
// };

// export default ThreeScene




import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { FiMail, FiPhone, FiMapPin, FiX, FiMoon, FiSun, FiMenu, FiGithub, FiExternalLink, FiHeart, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';

// 3D Scene Component
const ThreeScene = ({ darkMode, activeSection }) => {
  const mountRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const frameRef = useRef();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Lighting - Blue theme for backend
    const ambientLight = new THREE.AmbientLight(darkMode ? 0x404040 : 0x606060, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(darkMode ? 0x3b82f6 : 0x1d4ed8, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Backend-themed geometric shapes (servers, databases, networks)
    const shapes = [];
    const geometries = [
      new THREE.BoxGeometry(1, 2, 1), // Server rack
      new THREE.CylinderGeometry(0.8, 0.8, 0.3, 32), // Database
      new THREE.TorusGeometry(1, 0.1, 16, 100), // Network ring
      new THREE.OctahedronGeometry(0.7), // CPU chip
      new THREE.SphereGeometry(0.6, 32, 32), // Cloud node
      new THREE.BoxGeometry(1.5, 0.1, 1.5) // Circuit board
    ];

    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: darkMode ? 
          [0x3b82f6, 0x10b981, 0x8b5cf6][i % 3] : // Blue, Green, Purple
          [0x2563eb, 0x059669, 0x7c3aed][i % 3], // Darker shades for light mode
        transparent: true,
        opacity: 0.2 + Math.random() * 0.3,
        wireframe: Math.random() > 0.7 // Some shapes as wireframes for tech look
      });
      
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Add different movement patterns based on shape type
      shape.userData = {
        speed: 0.01 + Math.random() * 0.02,
        floatSpeed: 0.5 + Math.random() * 1,
        rotationAxis: Math.floor(Math.random() * 3)
      };
      
      shapes.push(shape);
      scene.add(shape);
    }

    // Data stream particles (representing API requests/data flow)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Create data streams flowing between points
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 15;
      const height = (Math.random() - 0.5) * 20;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Blue and green colors for data flow
      const colorChoice = Math.random();
      if (colorChoice < 0.6) {
        // Blue particles (primary data)
        colors[i * 3] = 0.2; // R
        colors[i * 3 + 1] = 0.5; // G
        colors[i * 3 + 2] = 1.0; // B
      } else if (colorChoice < 0.9) {
        // Green particles (success/processed data)
        colors[i * 3] = 0.1; // R
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 0.3; // B
      } else {
        // Purple particles (special events)
        colors[i * 3] = 0.6; // R
        colors[i * 3 + 1] = 0.2; // G
        colors[i * 3 + 2] = 0.8; // B
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Network connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(300); // 50 lines * 2 points * 3 coordinates
    let lineIndex = 0;

    for (let i = 0; i < 50; i++) {
      const startX = (Math.random() - 0.5) * 30;
      const startY = (Math.random() - 0.5) * 30;
      const startZ = (Math.random() - 0.5) * 30;
      
      const endX = startX + (Math.random() - 0.5) * 10;
      const endY = startY + (Math.random() - 0.5) * 10;
      const endZ = startZ + (Math.random() - 0.5) * 10;

      linePositions[lineIndex++] = startX;
      linePositions[lineIndex++] = startY;
      linePositions[lineIndex++] = startZ;
      
      linePositions[lineIndex++] = endX;
      linePositions[lineIndex++] = endY;
      linePositions[lineIndex++] = endZ;
    }

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: darkMode ? 0x3b82f6 : 0x1e40af,
      transparent: true,
      opacity: 0.1
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Animate backend shapes with different behaviors
      shapes.forEach((shape, index) => {
        const { speed, floatSpeed, rotationAxis } = shape.userData;
        
        // Different rotation patterns
        if (rotationAxis === 0) {
          shape.rotation.x += speed;
        } else if (rotationAxis === 1) {
          shape.rotation.y += speed;
        } else {
          shape.rotation.z += speed;
        }
        
        // Floating motion - servers "humming", databases "processing"
        shape.position.y += Math.sin(Date.now() * 0.001 * floatSpeed + index) * 0.008;
        
        // Some shapes pulse in size (like processing loads)
        if (index % 4 === 0) {
          const scale = 1 + Math.sin(Date.now() * 0.002 + index) * 0.1;
          shape.scale.set(scale, scale, scale);
        }
      });

      // Animate particles as data flowing through system
      particles.rotation.y += 0.001;
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Create flowing data effect
        positions[i + 1] += 0.02; // Move upward
        if (positions[i + 1] > 25) {
          positions[i + 1] = -25; // Reset to bottom
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Pulse network lines occasionally
      lines.material.opacity = 0.1 + Math.sin(Date.now() * 0.001) * 0.05;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [darkMode]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default ThreeScene;