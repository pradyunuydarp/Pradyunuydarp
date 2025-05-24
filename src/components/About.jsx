// src/components/About.jsx
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';

// ---- Helper Components ----

// 1) Simple Algorithm Graph Visualization
const GraphModel = () => {
  // predefined node positions
  const nodes = [
    [ -0.6,  0.0,  0.0 ],
    [  0.6,  0.0,  0.0 ],
    [   0,   0.8,  0.2 ]
  ];
  const edges = [ [0,1], [1,2], [2,0] ];

  // Rotate the whole graph
  const ref = React.useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2;
  });

  return (
      <group ref={ref} scale={2}>
        {nodes.map((pos, i) => (
            <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
              <mesh position={pos}>
                <sphereGeometry args={[0.12, 32, 32]} />
                <meshStandardMaterial
                    color="#4cc9f0"
                    metalness={0.6}
                    roughness={0.3}
                />
              </mesh>
            </Float>
        ))}
        {edges.map(([a, b], i) => (
            <Line
                key={i}
                points={[nodes[a], nodes[b]]}
                lineWidth={1}
                color="#4cc9f0"
            />
        ))}
      </group>
  );
};

// 2) Vinyl Model with tweaked materials
useGLTF.preload('/models/rocks_vinyl.glb');
const VinylModel = () => {
  const { scene } = useGLTF('/models/rocks_vinyl.glb');

  // enhance all meshes
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.5;
      child.material.roughness = 0.4;
    }
  });

  return (
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
        <primitive object={scene} scale={2} position={[0, -0.2, 0]} />
      </Float>
  );
};

const GokuNimbusModel = () => {
  const { scene } = useGLTF('/models/son_goku_and_kintoun_nimbus.glb');

  return (
      <Float speed={1.2} floatIntensity={1.5} rotationIntensity={1}>
        <primitive
            object={scene}
            scale={2}
            position={[0, -1.5, 0]}
            rotation={[0, Math.PI, 0]}
        />
      </Float>
  );
};


// ---- About Component ----

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
      <section id="about" className="min-h-screen py-20 px-6 bg-[#1a1a2e]">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-6xl mx-auto text-white"
        >
          <h2 className="text-4xl font-bold mb-12 text-[#4cc9f0]">
            About Me
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {/* ---- Algorithms ---- */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-[#4cc9f0]">
                Algorithms
              </h3>
              <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
                <Canvas>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                  <Suspense fallback={null}>
                    <GraphModel />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <p className="mt-4 text-center text-gray-300">
                I love crafting efficient algorithms and visualizing complex data structures in 3D space.
              </p>
            </div>

            {/* ---- Music ---- */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-[#fcbf49]">
                Music
              </h3>
              <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
                <Canvas>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                  <Suspense fallback={null}>
                    <VinylModel />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <p className="mt-4 text-center text-gray-300">
                From rock riffs to ambient house, I explore music both technically and creatively.
              </p>
            </div>

            {/* ---- Stories ---- */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-[#e76f51]">
                Good Stories
              </h3>
              <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
                <Canvas>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} />
                  <Suspense fallback={null}>
                    <GokuNimbusModel />
                  </Suspense>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <p className="mt-4 text-center text-gray-300">
                A good visual storytelling—especially Dragon Ball Z—inspires my creative process.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default About;
