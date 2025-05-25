// // // // // // src/components/About.jsx
// // // // // import React, { Suspense } from 'react';
// // // // // import { motion } from 'framer-motion';
// // // // // import { useInView } from 'react-intersection-observer';
// // // // // import { Canvas, useFrame } from '@react-three/fiber';
// // // // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // // // //
// // // // // // ---- Helper Components ----
// // // // //
// // // // // // 1) Simple Algorithm Graph Visualization
// // // // // const GraphModel = () => {
// // // // //   // predefined node positions
// // // // //   const nodes = [
// // // // //     [ -0.6,  0.0,  0.0 ],
// // // // //     [  0.6,  0.0,  0.0 ],
// // // // //     [   0,   0.8,  0.2 ]
// // // // //   ];
// // // // //   const edges = [ [0,1], [1,2], [2,0] ];
// // // // //
// // // // //   // Rotate the whole graph
// // // // //   const ref = React.useRef();
// // // // //   useFrame((state, delta) => {
// // // // //     ref.current.rotation.y += delta * 0.2;
// // // // //   });
// // // // //
// // // // //   return (
// // // // //       <group ref={ref} scale={2}>
// // // // //         {nodes.map((pos, i) => (
// // // // //             <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
// // // // //               <mesh position={pos}>
// // // // //                 <sphereGeometry args={[0.12, 32, 32]} />
// // // // //                 <meshStandardMaterial
// // // // //                     color="#4cc9f0"
// // // // //                     metalness={0.6}
// // // // //                     roughness={0.3}
// // // // //                 />
// // // // //               </mesh>
// // // // //             </Float>
// // // // //         ))}
// // // // //         {edges.map(([a, b], i) => (
// // // // //             <Line
// // // // //                 key={i}
// // // // //                 points={[nodes[a], nodes[b]]}
// // // // //                 lineWidth={1}
// // // // //                 color="#4cc9f0"
// // // // //             />
// // // // //         ))}
// // // // //       </group>
// // // // //   );
// // // // // };
// // // // //
// // // // // // 2) Vinyl Model with tweaked materials
// // // // // useGLTF.preload('/public/models/rocks_vinyl.glb');
// // // // // const VinylModel = () => {
// // // // //   const { scene } = useGLTF('/public/models/rocks_vinyl.glb');
// // // // //
// // // // //   // enhance all meshes
// // // // //   scene.traverse((child) => {
// // // // //     if (child.isMesh) {
// // // // //       child.material.metalness = 0.5;
// // // // //       child.material.roughness = 0.4;
// // // // //     }
// // // // //   });
// // // // //
// // // // //   return (
// // // // //       <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
// // // // //         <primitive object={scene} scale={2} position={[0, -0.2, 0]} />
// // // // //       </Float>
// // // // //   );
// // // // // };
// // // // //
// // // // // const GokuNimbusModel = () => {
// // // // //   const { scene } = useGLTF('/public/models/son_goku_and_kintoun_nimbus.glb');
// // // // //
// // // // //   return (
// // // // //       <Float speed={1.2} floatIntensity={1.5} rotationIntensity={1}>
// // // // //         <primitive
// // // // //             object={scene}
// // // // //             scale={2}
// // // // //             position={[0, -1.5, 0]}
// // // // //             rotation={[0, Math.PI, 0]}
// // // // //         />
// // // // //       </Float>
// // // // //   );
// // // // // };
// // // // //
// // // // //
// // // // // // ---- About Component ----
// // // // //
// // // // // const About = () => {
// // // // //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
// // // // //
// // // // //   return (
// // // // //       <section id="about" className="min-h-screen py-20 px-6 bg-[#1a1a2e]">
// // // // //         <motion.div
// // // // //             ref={ref}
// // // // //             initial={{ opacity: 0, y: 40 }}
// // // // //             animate={inView ? { opacity: 1, y: 0 } : {}}
// // // // //             transition={{ duration: 0.8, ease: 'easeOut' }}
// // // // //             className="max-w-6xl mx-auto text-white"
// // // // //         >
// // // // //           <h2 className="text-4xl font-bold mb-12 text-[#4cc9f0]">
// // // // //             About Me
// // // // //           </h2>
// // // // //
// // // // //           <div className="grid gap-12 md:grid-cols-3">
// // // // //             {/* ---- Algorithms ---- */}
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="text-2xl font-semibold mb-4 text-[#4cc9f0]">
// // // // //                 Algorithms
// // // // //               </h3>
// // // // //               <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
// // // // //                 <Canvas>
// // // // //                   <ambientLight intensity={0.4} />
// // // // //                   <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // // // //                   <Suspense fallback={null}>
// // // // //                     <GraphModel />
// // // // //                   </Suspense>
// // // // //                   <OrbitControls enableZoom={false} />
// // // // //                 </Canvas>
// // // // //               </div>
// // // // //               <p className="mt-4 text-center text-gray-300">
// // // // //                 I love crafting efficient algorithms and visualizing complex data structures in 3D space.
// // // // //               </p>
// // // // //             </div>
// // // // //
// // // // //             {/* ---- Music ---- */}
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="text-2xl font-semibold mb-4 text-[#fcbf49]">
// // // // //                 Music
// // // // //               </h3>
// // // // //               <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
// // // // //                 <Canvas>
// // // // //                   <ambientLight intensity={0.4} />
// // // // //                   <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // // // //                   <Suspense fallback={null}>
// // // // //                     <VinylModel />
// // // // //                   </Suspense>
// // // // //                   <OrbitControls enableZoom={false} />
// // // // //                 </Canvas>
// // // // //               </div>
// // // // //               <p className="mt-4 text-center text-gray-300">
// // // // //                 From rock riffs to ambient house, I explore music both technically and creatively.
// // // // //               </p>
// // // // //             </div>
// // // // //
// // // // //             {/* ---- Stories ---- */}
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="text-2xl font-semibold mb-4 text-[#e76f51]">
// // // // //                 Good Stories
// // // // //               </h3>
// // // // //               <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
// // // // //                 <Canvas>
// // // // //                   <ambientLight intensity={0.4} />
// // // // //                   <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // // // //                   <Suspense fallback={null}>
// // // // //                     <GokuNimbusModel />
// // // // //                   </Suspense>
// // // // //                   <OrbitControls enableZoom={false} />
// // // // //                 </Canvas>
// // // // //               </div>
// // // // //               <p className="mt-4 text-center text-gray-300">
// // // // //                 A good visual storytelling—especially Dragon Ball Z—inspires my creative process.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </section>
// // // // //   );
// // // // // };
// // // // //
// // // // // export default About;
// // // //
// // // //
// // // // // src/components/About.jsx
// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { useInView } from 'react-intersection-observer';
// // // // import ExpandableCard from '../components/ExpandableCard.jsx';
// // // // import { GraphModel, VinylModel, GokuNimbusModel } from '../components/public/models.jsx';
// // // //
// // // // const About = () => {
// // // //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
// // // //
// // // //   return (
// // // //       <section id="about" className="min-h-screen py-20 px-6 bg-[#1a1a2e]">
// // // //         <motion.div
// // // //             ref={ref}
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             animate={inView ? { opacity: 1, y: 0 } : {}}
// // // //             transition={{ duration: 0.8, ease: 'easeOut' }}
// // // //             className="max-w-6xl mx-auto text-white"
// // // //         >
// // // //           <h2 className="text-4xl font-bold mb-12 text-[#4cc9f0]">About Me</h2>
// // // //           <div className="grid gap-12 md:grid-cols-3">
// // // //             <ExpandableCard
// // // //                 title="Algorithms"
// // // //                 color="#4cc9f0"
// // // //                 model={GraphModel}
// // // //                 description="I love crafting efficient algorithms and visualizing complex data structures."
// // // //                 details={`From graph traversals to dynamic programming, my work blends theory with visual design.
// // // //
// // // // I’ve implemented interactive 3D visualizations like rotating node-edge graphs to illustrate pathfinding and optimization.`}
// // // //             />
// // // //             <ExpandableCard
// // // //                 title="Music"
// // // //                 color="#fcbf49"
// // // //                 model={VinylModel}
// // // //                 description="From rock riffs to ambient house, I explore music both technically and creatively."
// // // //                 details={`I compose original tracks and score short films. My toolkit includes digital synthesis, sampling, and live recording.
// // // //
// // // // Check out my SoundCloud for demos and live sets.`}
// // // //             />
// // // //             <ExpandableCard
// // // //                 title="Good Stories"
// // // //                 color="#e76f51"
// // // //                 model={GokuNimbusModel}
// // // //                 description="A good visual storytelling—especially Dragon Ball Z—inspires my creative process."
// // // //                 details={`I’m fascinated by narrative structure across anime, comics, and games.
// // // //
// // // // I love dissecting character arcs and world-building techniques, then applying those lessons to UX and interactive design.`}
// // // //             />
// // // //           </div>
// // // //         </motion.div>
// // // //       </section>
// // // //   );
// // // // };
// // // //
// // // // export default About;
// // //
// // // // src/pages/About.jsx
// // // import React, { Suspense } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Canvas, useFrame } from '@react-three/fiber';
// // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // //
// // // // Graph Model
// // // const GraphModel = () => {
// // //     const nodes = [[-0.6, 0, 0], [0.6, 0, 0], [0, 0.8, 0.2]];
// // //     const edges = [[0, 1], [1, 2], [2, 0]];
// // //     const ref = React.useRef();
// // //     useFrame((_, delta) => (ref.current.rotation.y += delta * 0.2));
// // //     return (
// // //         <group ref={ref} scale={2}>
// // //             {nodes.map((pos, i) => (
// // //                 <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
// // //                     <mesh position={pos}>
// // //                         <sphereGeometry args={[0.12, 32, 32]} />
// // //                         <meshStandardMaterial color="#4cc9f0" metalness={0.6} roughness={0.3} />
// // //                     </mesh>
// // //                 </Float>
// // //             ))}
// // //             {edges.map(([a, b], i) => (
// // //                 <Line key={i} points={[nodes[a], nodes[b]]} lineWidth={1} color="#4cc9f0" />
// // //             ))}
// // //         </group>
// // //     );
// // // };
// // //
// // // useGLTF.preload('/public/models/rocks_vinyl.glb');
// // // const VinylModel = () => {
// // //     const { scene } = useGLTF('/public/models/rocks_vinyl.glb');
// // //     scene.traverse((child) => {
// // //         if (child.isMesh) {
// // //             child.material.metalness = 0.5;
// // //             child.material.roughness = 0.4;
// // //         }
// // //     });
// // //     return (
// // //         <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
// // //             <primitive object={scene} scale={2} position={[0, -0.2, 0]} />
// // //         </Float>
// // //     );
// // // };
// // //
// // // const GokuNimbusModel = () => {
// // //     const { scene } = useGLTF('/public/models/son_goku_and_kintoun_nimbus.glb');
// // //     return (
// // //         <Float speed={1.2} floatIntensity={1.5} rotationIntensity={1}>
// // //             <primitive object={scene} scale={2} position={[0, -1.5, 0]} rotation={[0, Math.PI, 0]} />
// // //         </Float>
// // //     );
// // // };
// // //
// // // const About = () => {
// // //     return (
// // //         <main className="bg-[#1a1a2e] text-white py-20 px-6">
// // //             <section className="max-w-6xl mx-auto">
// // //                 <h2 className="text-4xl font-bold mb-12 text-[#4cc9f0]">About Me</h2>
// // //
// // //                 {/* Professional Section */}
// // //                 <div className="grid gap-12 md:grid-cols-2 mb-24">
// // //                     <div>
// // //                         <h3 className="text-2xl font-semibold mb-4 text-[#4cc9f0]">My Background</h3>
// // //                         <p className="text-gray-300 leading-relaxed">
// // //                             I'm a Computer Science student passionate about problem-solving and algorithmic thinking.
// // //                             I enjoy building interactive visualizations that bridge theory and creativity, often using tools like
// // //                             Three.js and WebGL.
// // //                         </p>
// // //                         <p className="mt-4 text-gray-300 leading-relaxed">
// // //                             My work often revolves around transforming abstract computational ideas into tangible, immersive
// // //                             experiences—whether it's rendering graphs in 3D or optimizing algorithms for real-time performance.
// // //                         </p>
// // //                     </div>
// // //                     <div className="h-64 rounded-2xl overflow-hidden shadow-lg bg-[#0f0f1a]">
// // //                         <Canvas>
// // //                             <ambientLight intensity={0.4} />
// // //                             <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // //                             <Suspense fallback={null}>
// // //                                 <GraphModel />
// // //                             </Suspense>
// // //                             <OrbitControls enableZoom={false} />
// // //                         </Canvas>
// // //                     </div>
// // //                 </div>
// // //
// // //                 {/* Fun Section */}
// // //                 <h3 className="text-3xl font-bold mb-10 text-[#fcbf49]">Other Interests</h3>
// // //                 <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
// // //                     {/* Music */}
// // //                     <div className="flex flex-col items-center">
// // //                         <h4 className="text-xl font-semibold mb-4 text-[#fcbf49]">Music</h4>
// // //                         <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
// // //                             <Canvas>
// // //                                 <ambientLight intensity={0.4} />
// // //                                 <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // //                                 <Suspense fallback={null}>
// // //                                     <VinylModel />
// // //                                 </Suspense>
// // //                                 <OrbitControls enableZoom={false} />
// // //                             </Canvas>
// // //                         </div>
// // //                         <p className="mt-4 text-center text-gray-300">
// // //                             From rock riffs to ambient house, I explore music both technically and creatively.
// // //                         </p>
// // //                     </div>
// // //
// // //                     {/* Visual Storytelling */}
// // //                     <div className="flex flex-col items-center">
// // //                         <h4 className="text-xl font-semibold mb-4 text-[#e76f51]">Stories</h4>
// // //                         <div className="w-full h-64 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg">
// // //                             <Canvas>
// // //                                 <ambientLight intensity={0.4} />
// // //                                 <directionalLight position={[5, 5, 5]} intensity={0.8} />
// // //                                 <Suspense fallback={null}>
// // //                                     <GokuNimbusModel />
// // //                                 </Suspense>
// // //                                 <OrbitControls enableZoom={false} />
// // //                             </Canvas>
// // //                         </div>
// // //                         <p className="mt-4 text-center text-gray-300">
// // //                             Great storytelling, especially from Dragon Ball Z, fuels my imagination.
// // //                         </p>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </main>
// // //     );
// // // };
// // //
// // // export default About;
// //
// //
// // // src/pages/About.jsx
// // import React, { Suspense } from 'react';
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // import ExpandableCard from '../components/ExpandableCard.jsx';
// //
// // // --- Models (as before) ---
// // const GraphModel = () => {
// //     const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
// //     const edges = [[0,1],[1,2],[2,0]];
// //     const ref = React.useRef();
// //     useFrame((_,d) => ref.current.rotation.y += d * 0.2);
// //     return (
// //         <group ref={ref} scale={2}>
// //             {nodes.map((pos,i) => (
// //                 <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
// //                     <mesh position={pos}>
// //                         <sphereGeometry args={[0.12,32,32]} />
// //                         <meshStandardMaterial color="#4cc9f0" metalness={0.6} roughness={0.3}/>
// //                     </mesh>
// //                 </Float>
// //             ))}
// //             {edges.map(([a,b],i) => (
// //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#4cc9f0"/>
// //             ))}
// //         </group>
// //     );
// // };
// //
// // useGLTF.preload('/public/models/rocks_vinyl.glb');
// // const VinylModel = () => {
// //     const { scene } = useGLTF('/public/models/rocks_vinyl.glb');
// //     scene.traverse(c => c.isMesh && (c.material.metalness=0.5, c.material.roughness=0.4));
// //     return (
// //         <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
// //             <primitive object={scene} scale={2} position={[0,-0.2,0]}/>
// //         </Float>
// //     );
// // };
// //
// // const GokuNimbusModel = () => {
// //     const { scene } = useGLTF('/public/models/son_goku_and_kintoun_nimbus.glb');
// //     return (
// //         <Float speed={1.2} floatIntensity={1.5} rotationIntensity={1}>
// //             <primitive object={scene} scale={2} position={[0,-1.5,0]} rotation={[0,Math.PI,0]}/>
// //         </Float>
// //     );
// // };
// //
// // // --- About Page ---
// // const AboutPage = () => (
// //     <main className="bg-[#1a1a2e] text-white py-20 px-6">
// //         <section className="max-w-6xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12 text-[#4cc9f0]">About Me</h2>
// //
// //             {/* Professional Intro */}
// //             <div className="grid gap-12 md:grid-cols-2 mb-24">
// //                 <div>
// //                     <h3 className="text-2xl font-semibold mb-4 text-[#4cc9f0]">My Background</h3>
// //                     <p className="text-gray-300 mb-4">
// //                         I'm a Computer Science student passionate about problem-solving and algorithmic thinking.
// //                         I build interactive 3D visualizations (Three.js/WebGL) to bridge theory and creativity.
// //                     </p>
// //                     <p className="text-gray-300">
// //                         My focus lies in translating abstract concepts into immersive, real-time experiences—
// //                         from rotating graph renderings to optimized path-finding demos.
// //                     </p>
// //                 </div>
// //                 <div className="h-64 rounded-2xl overflow-hidden shadow-lg bg-[#0f0f1a]">
// //                     <Canvas>
// //                         <ambientLight intensity={0.4}/>
// //                         <directionalLight position={[5,5,5]} intensity={0.8}/>
// //                         <Suspense fallback={null}><GraphModel/></Suspense>
// //                         <OrbitControls enableZoom={false}/>
// //                     </Canvas>
// //                 </div>
// //             </div>
// //
// //             {/* Other Interests */}
// //             <h3 className="text-3xl font-bold mb-10 text-[#fcbf49]">Other Interests</h3>
// //             <div className="grid gap-12 md:grid-cols-3">
// //                 <ExpandableCard
// //                     title="Algorithms"
// //                     color="#4cc9f0"
// //                     model={GraphModel}
// //                     description="I love crafting efficient algorithms and visualizing data structures in 3D."
// //                 />
// //                 <ExpandableCard
// //                     title="Music"
// //                     color="#fcbf49"
// //                     model={VinylModel}
// //                     description="From rock riffs to ambient house, I explore music both technically and creatively."
// //                 />
// //                 <ExpandableCard
// //                     title="Stories"
// //                     color="#e76f51"
// //                     model={GokuNimbusModel}
// //                     description="Dragon Ball Z and great narratives fuel my imagination."
// //                 />
// //             </div>
// //         </section>
// //     </main>
// // );
// //
// // export default AboutPage;
//
// // src/pages/About.jsx
// import React, { Suspense, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
//
// // ----- 3D Models with Animations -----
//
// const GraphModel = () => {
//     const ref = useRef();
//     useFrame((_, delta) => {
//         ref.current.rotation.y += delta * 0.2;
//     });
//     const nodes = [[-0.6, 0, 0], [0.6, 0, 0], [0, 0.8, 0.2]];
//     const edges = [[0,1],[1,2],[2,0]];
//     return (
//         <group ref={ref} scale={2}>
//             {nodes.map((pos,i) => (
//                 <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
//                     <mesh position={pos}>
//                         <sphereGeometry args={[0.12,32,32]} />
//                         <meshStandardMaterial color="#BFA47A" metalness={0.7} roughness={0.2}/>
//                     </mesh>
//                 </Float>
//             ))}
//             {edges.map(([a,b],i)=>(
//                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#BFA47A" />
//             ))}
//         </group>
//     );
// };
//
// useGLTF.preload('/public/models/rocks_vinyl.glb');
// const VinylModel = ({ animate }) => {
//     const { scene } = useGLTF('/public/models/rocks_vinyl.glb');
//     scene.traverse(c => c.isMesh && (c.material.metalness=0.6, c.material.roughness=0.3));
//     // zoom control via parent motion scale
//     return <primitive object={scene} scale={2} />;
// };
//
// const GokuNimbusModel = ({ animate }) => {
//     const { scene } = useGLTF('/public/models/son_goku_and_kintoun_nimbus.glb');
//     scene.traverse(c => c.isMesh && (c.material.ior=1.2));
//     return <primitive object={scene} scale={2} />;
// };
//
// // ----- Section Wrapper with Scroll Trigger -----
//
// const Section = ({ children, onInView }) => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
//     React.useEffect(() => {
//         if (inView) controls.start('visible');
//         else controls.start('hidden');
//         if (onInView) onInView(inView);
//     }, [controls, inView, onInView]);
//     return (
//         <motion.section
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={{ hidden: {}, visible: {} }}
//             className="min-h-screen flex flex-col md:flex-row items-center justify-center"
//         >
//             {children}
//         </motion.section>
//     );
// };
//
// // ----- Page Component -----
//
// const AboutPage = () => (
//     <main className="overflow-y-auto bg-[#1F1F1F] text-white">
//         {/* Algorithms */}
//         <Section>
//             {/* Model */}
//             <div className="w-full md:w-1/2 h-80 md:h-[60vh]">
//                 <Canvas>
//                     <ambientLight intensity={0.5} />
//                     <directionalLight position={[5,5,5]} intensity={0.8} />
//                     <Suspense fallback={null}><GraphModel/></Suspense>
//                     <OrbitControls enableZoom={false} />
//                 </Canvas>
//             </div>
//             {/* Text */}
//             <motion.div
//                 className="w-full md:w-1/2 p-8"
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h2 className="text-4xl font-bold mb-4 text-[#A67C00]">Algorithms</h2>
//                 <p className="text-gray-300 leading-relaxed">
//                     As a CS student, I specialize in turning complex data structures into intuitive
//                     3D experiences. Watch how rotating graphs make pathfinding and optimization
//                     algorithms come alive in real time.
//                 </p>
//             </motion.div>
//         </Section>
//
//         {/* Music */}
//         <Section>
//             <motion.div
//                 className="w-full md:w-1/2 p-8 order-2 md:order-1"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <h2 className="text-4xl font-bold mb-4 text-[#004E64]">Music</h2>
//                 <p className="text-gray-300 leading-relaxed">
//                     From studio production to ambient soundscapes, I explore music
//                     both technically and artistically. Scroll to see the vinyl zoom in
//                     like a record spinning you into another dimension.
//                 </p>
//             </motion.div>
//             <motion.div
//                 className="w-full md:w-1/2 h-80 md:h-[60vh] order-1 md:order-2"
//                 initial={{ scale: 0.8 }}
//                 whileInView={{ scale: 1.05 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <Canvas>
//                     <ambientLight intensity={0.5}/>
//                     <directionalLight position={[5,5,5]} intensity={0.8}/>
//                     <Suspense fallback={null}><VinylModel/></Suspense>
//                     <OrbitControls enableZoom={false}/>
//                 </Canvas>
//             </motion.div>
//         </Section>
//
//         {/* Stories */}
//         <Section>
//             <div className="w-full md:w-1/2 h-80 md:h-[60vh]">
//                 <Canvas>
//                     <ambientLight intensity={0.5}/>
//                     <directionalLight position={[5,5,5]} intensity={0.8}/>
//                     <Suspense fallback={null}><GokuNimbusModel/></Suspense>
//                     <OrbitControls enableZoom={false}/>
//                 </Canvas>
//             </div>
//             <motion.div
//                 className="w-full md:w-1/2 p-8"
//                 initial={{ x: -100 }}
//                 whileInView={{ x: 0 }}
//                 transition={{ type: 'spring', stiffness: 50 }}
//             >
//                 <h2 className="text-4xl font-bold mb-4 text-[#2E8B57]">Visual Storytelling</h2>
//                 <p className="text-gray-300 leading-relaxed">
//                     From Dragon Ball Z epics to narrative-driven games, I draw inspiration from
//                     great stories. Here, Goku soars in on his Nimbus—scroll and watch him glide!
//                 </p>
//             </motion.div>
//         </Section>
//     </main>
// );
//
// export default AboutPage;


// src/pages/About.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
import {motion, useViewportScroll, useTransform, useScroll} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- Models ---

const GraphModel = () => {
    const ref = useRef();
    useFrame((_, delta) => (ref.current.rotation.y += delta * 0.2));
    const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
    const edges = [[0,1],[1,2],[2,0]];
    return (
        <group ref={ref} scale={2}>
            {nodes.map((pos,i) => (
                <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
                    <mesh position={pos}>
                        <sphereGeometry args={[0.12,32,32]} />
                        <meshStandardMaterial color="#BFA47A" metalness={0.7} roughness={0.2}/>
                    </mesh>
                </Float>
            ))}
            {edges.map(([a,b],i)=>(
                <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#BFA47A"/>
            ))}
        </group>
    );
};

useGLTF.preload('models/rocks_vinyl.glb');
const VinylModel = () => {
    const { scene } = useGLTF('models/rocks_vinyl.glb');
    scene.traverse(c => c.isMesh && (c.material.metalness=0.6, c.material.roughness=0.3));
    return <primitive object={scene} scale={1} />;
};

useGLTF.preload('models/son_goku_and_kintoun_nimbus.glb');
const GokuNimbusModel = () => {
    const { scene } = useGLTF('models/son_goku_and_kintoun_nimbus.glb');
    scene.traverse(c => c.isMesh && (c.material.ior=1.2));
    return <primitive object={scene} scale={2} />;
};

// --- Page ---

const AboutPage = () => {
    // for goku scroll animation
    const { scrollYProgress } = useScroll({ target: document.getElementById('about') });
    // const { scrollYProgress } = useScroll();
    // map scroll progress in this section [0,1] to x from -100% → +100%
    const xRange = useTransform(scrollYProgress, [0.3, 0.6], ['-100%', '100%']);

    // intersection for music section to pin it full-screen
    const [musicRef, musicInView] = useInView({ threshold: 0.5 });

    return (
        <main className="bg-[#1F1F1F] text-white">
            {/* --- Algorithms Section --- */}
            <section className="min-h-screen flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-80 md:h-[60vh]">
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[5,5,5]} intensity={0.8}/>
                        <Suspense fallback={null}><GraphModel/></Suspense>
                        <OrbitControls enableZoom={false}/>
                    </Canvas>
                </div>
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#A67C00]">Algorithms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I turn complex data structures into interactive 3D experiences using Three.js and WebGL.
                    </p>
                </motion.div>
            </section>

            {/* --- Music Section (Full-Screen Scrollable) --- */}
            <section
                ref={musicRef}
                className="relative h-screen overflow-hidden"
            >
                {/* 3D background */}
                <Canvas className="absolute inset-0">
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[5,5,5]} intensity={0.8}/>
                    <Suspense fallback={null}><VinylModel/></Suspense>
                    <OrbitControls enableZoom={false}/>
                </Canvas>
                {/* Overlay text */}
                <div className="relative z-10 flex items-center justify-center h-full px-8">
                    <motion.div
                        className="max-w-xl bg-black bg-opacity-50 p-6 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={musicInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl font-bold mb-4 text-[#004E64]">Music</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Dive into ambient soundscapes and rock riffs—scroll past to see the vinyl zoom
                            and spin you into the groove.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Stories Section (Goku moves across) --- */}
            <section className="relative min-h-screen flex items-center">
                <motion.div
                    style={{ x: xRange }}
                    className="absolute top-1/2 transform -translate-y-1/2 w-1/2 h-96"
                >
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[5,5,5]} intensity={0.8}/>
                        <Suspense fallback={null}><GokuNimbusModel/></Suspense>
                        <OrbitControls enableZoom={false}/>
                    </Canvas>
                </motion.div>
                <div className="ml-auto w-full md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold mb-4 text-[#2E8B57]">Visual Storytelling</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Great narratives fuel my creativity—watch Goku glide across the screen
                        as you scroll through my world of epic tales.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
