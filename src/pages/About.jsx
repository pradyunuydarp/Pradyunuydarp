// // // // //
// // // // // // src/pages/About.jsx
// // // // // import React, { Suspense, useRef } from 'react';
// // // // // import { Canvas, useFrame } from '@react-three/fiber';
// // // // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // // // // import {motion, useViewportScroll, useTransform, useScroll} from 'framer-motion';
// // // // // import { useInView } from 'react-intersection-observer';
// // // // //
// // // // // // --- Models ---
// // // // //
// // // // // const GraphModel = () => {
// // // // //     const ref = useRef();
// // // // //     useFrame((_, delta) => (ref.current.rotation.y += delta * 0.2));
// // // // //     const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
// // // // //     const edges = [[0,1],[1,2],[2,0]];
// // // // //     return (
// // // // //         <group ref={ref} scale={2}>
// // // // //             {nodes.map((pos,i) => (
// // // // //                 <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
// // // // //                     <mesh position={pos}>
// // // // //                         <sphereGeometry args={[0.12,32,32]} />
// // // // //                         <meshStandardMaterial color="#BFA47A" metalness={0.7} roughness={0.2}/>
// // // // //                     </mesh>
// // // // //                 </Float>
// // // // //             ))}
// // // // //             {edges.map(([a,b],i)=>(
// // // // //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#BFA47A"/>
// // // // //             ))}
// // // // //         </group>
// // // // //     );
// // // // // };
// // // // //
// // // // // useGLTF.preload('models/rocks_vinyl.glb');
// // // // // const VinylModel = () => {
// // // // //     const { scene } = useGLTF('models/rocks_vinyl.glb');
// // // // //     scene.traverse(c => c.isMesh && (c.material.metalness=0.6, c.material.roughness=0.3));
// // // // //     return <primitive object={scene} scale={1} />;
// // // // // };
// // // // //
// // // // // useGLTF.preload('models/son_goku_and_kintoun_nimbus.glb');
// // // // // const GokuNimbusModel = () => {
// // // // //     const { scene } = useGLTF('models/son_goku_and_kintoun_nimbus.glb');
// // // // //     scene.traverse(c => c.isMesh && (c.material.ior=1.2));
// // // // //     return <primitive object={scene} scale={2} />;
// // // // // };
// // // // //
// // // // // // --- Page ---
// // // // //
// // // // // const AboutPage = () => {
// // // // //     // for goku scroll animation
// // // // //     const { scrollYProgress } = useScroll({ target: document.getElementById('about') });
// // // // //     // const { scrollYProgress } = useScroll();
// // // // //     // map scroll progress in this section [0,1] to x from -100% → +100%
// // // // //     const xRange = useTransform(scrollYProgress, [0.3, 0.6], ['-100%', '100%']);
// // // // //
// // // // //     // intersection for music section to pin it full-screen
// // // // //     const [musicRef, musicInView] = useInView({ threshold: 0.5 });
// // // // //
// // // // //     return (
// // // // //         <main className="bg-[#1F1F1F] text-white">
// // // // //             {/* --- Algorithms Section --- */}
// // // // //             <section className="min-h-screen flex flex-col md:flex-row items-center">
// // // // //                 <div className="w-full md:w-1/2 h-80 md:h-[60vh]">
// // // // //                     <Canvas>
// // // // //                         <ambientLight intensity={0.5}/>
// // // // //                         <directionalLight position={[5,5,5]} intensity={0.8}/>
// // // // //                         <Suspense fallback={null}><GraphModel/></Suspense>
// // // // //                         <OrbitControls enableZoom={false}/>
// // // // //                     </Canvas>
// // // // //                 </div>
// // // // //                 <motion.div
// // // // //                     className="w-full md:w-1/2 p-8"
// // // // //                     initial={{ opacity: 0, x: 50 }}
// // // // //                     whileInView={{ opacity: 1, x: 0 }}
// // // // //                     transition={{ duration: 0.8 }}
// // // // //                 >
// // // // //                     <h2 className="text-4xl font-bold mb-4 text-[#A67C00]">Algorithms</h2>
// // // // //                     <p className="text-gray-300 leading-relaxed">
// // // // //                         I turn complex data structures into interactive 3D experiences using Three.js and WebGL.
// // // // //                     </p>
// // // // //                 </motion.div>
// // // // //             </section>
// // // // //
// // // // //             {/* --- Music Section (Full-Screen Scrollable) --- */}
// // // // //             <section
// // // // //                 ref={musicRef}
// // // // //                 className="relative h-screen overflow-hidden"
// // // // //             >
// // // // //                 {/* 3D background */}
// // // // //                 <Canvas className="absolute inset-0">
// // // // //                     <ambientLight intensity={0.5}/>
// // // // //                     <directionalLight position={[5,5,5]} intensity={0.8}/>
// // // // //                     <Suspense fallback={null}><VinylModel/></Suspense>
// // // // //                     <OrbitControls enableZoom={false}/>
// // // // //                 </Canvas>
// // // // //                 {/* Overlay text */}
// // // // //                 <div className="relative z-10 flex items-center justify-center h-full px-8">
// // // // //                     <motion.div
// // // // //                         className="max-w-xl bg-black bg-opacity-50 p-6 rounded-lg"
// // // // //                         initial={{ opacity: 0 }}
// // // // //                         animate={musicInView ? { opacity: 1 } : { opacity: 0 }}
// // // // //                         transition={{ duration: 0.8 }}
// // // // //                     >
// // // // //                         <h2 className="text-5xl font-bold mb-4 text-[#004E64]">Music</h2>
// // // // //                         <p className="text-gray-200 leading-relaxed">
// // // // //                             Dive into ambient soundscapes and rock riffs—scroll past to see the vinyl zoom
// // // // //                             and spin you into the groove.
// // // // //                         </p>
// // // // //                     </motion.div>
// // // // //                 </div>
// // // // //             </section>
// // // // //
// // // // //             {/* --- Stories Section (Goku moves across) --- */}
// // // // //             <section className="relative min-h-screen flex items-center">
// // // // //                 <motion.div
// // // // //                     style={{ x: xRange }}
// // // // //                     className="absolute top-1/2 transform -translate-y-1/2 w-1/2 h-96"
// // // // //                 >
// // // // //                     <Canvas>
// // // // //                         <ambientLight intensity={0.5}/>
// // // // //                         <directionalLight position={[5,5,5]} intensity={0.8}/>
// // // // //                         <Suspense fallback={null}><GokuNimbusModel/></Suspense>
// // // // //                         <OrbitControls enableZoom={false}/>
// // // // //                     </Canvas>
// // // // //                 </motion.div>
// // // // //                 <div className="ml-auto w-full md:w-1/2 p-8">
// // // // //                     <h2 className="text-4xl font-bold mb-4 text-[#2E8B57]">Visual Storytelling</h2>
// // // // //                     <p className="text-gray-300 leading-relaxed">
// // // // //                         Great narratives fuel my creativity—watch Goku glide across the screen
// // // // //                         as you scroll through my world of epic tales.
// // // // //                     </p>
// // // // //                 </div>
// // // // //             </section>
// // // // //         </main>
// // // // //     );
// // // // // };
// // // // //
// // // // // export default AboutPage;
// // // //
// // // // import React, { Suspense, useRef } from 'react';
// // // // import { Canvas, useFrame } from '@react-three/fiber';
// // // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // // import { useInView } from 'react-intersection-observer';
// // // //
// // // // // --- Models ---
// // // // const GraphModel = () => {
// // // //     const ref = useRef();
// // // //     useFrame((_, delta) => {
// // // //         ref.current.rotation.y += delta * 0.1;
// // // //         ref.current.rotation.x = Math.sin(_.clock.elapsedTime) * 0.1;
// // // //     });
// // // //     const nodes = [[-0.6,0,0], [0.6,0,0], [0,0.8,0.2]];
// // // //     const edges = [[0,1], [1,2], [2,0]];
// // // //     return (
// // // //         <group ref={ref} scale={2}>
// // // //             {nodes.map((pos,i) => (
// // // //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// // // //                     <mesh position={pos}>
// // // //                         <sphereGeometry args={[0.12,32,32]} />
// // // //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1}/>
// // // //                     </mesh>
// // // //                 </Float>
// // // //             ))}
// // // //             {edges.map(([a,b],i) => (
// // // //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37"/>
// // // //             ))}
// // // //         </group>
// // // //     );
// // // // };
// // // //
// // // // useGLTF.preload('models/rocks_vinyl.glb');
// // // // const VinylModel = ({ scrollProgress }) => {
// // // //     const ref = useRef();
// // // //     const { scene } = useGLTF('models/rocks_vinyl.glb');
// // // //
// // // //     useFrame(() => {
// // // //         ref.current.rotation.y = scrollProgress.get() * Math.PI * 4;
// // // //         ref.current.position.y = scrollProgress.get() * 2;
// // // //     });
// // // //
// // // //     scene.traverse(c => {
// // // //         if (c.isMesh) {
// // // //             c.material.metalness = 0.8;
// // // //             c.material.roughness = 0.1;
// // // //         }
// // // //     });
// // // //
// // // //     return <primitive ref={ref} object={scene} scale={1} />;
// // // // };
// // // //
// // // // useGLTF.preload('models/son_goku_and_kintoun_nimbus.glb');
// // // // const GokuNimbusModel = () => {
// // // //     const { scene } = useGLTF('models/son_goku_and_kintoun_nimbus.glb');
// // // //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// // // //     return <primitive object={scene} scale={2} />;
// // // // };
// // // //
// // // // const AboutPage = () => {
// // // //     const containerRef = useRef();
// // // //     const { scrollYProgress } = useScroll({
// // // //         target: containerRef,
// // // //         offset: ["start end", "end start"]
// // // //     });
// // // //
// // // //     const gokuX = useTransform(scrollYProgress, [0.7, 0.9], ["-100%", "100%"]);
// // // //     const vinylRotation = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
// // // //
// // // //     return (
// // // //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// // // //             {/* Algorithms Section */}
// // // //             <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
// // // //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// // // //                     <motion.div
// // // //                         initial={{ opacity: 0, y: 50 }}
// // // //                         whileInView={{ opacity: 1, y: 0 }}
// // // //                         transition={{ duration: 1, ease: "easeOut" }}
// // // //                         className="md:w-1/2 md:pr-12"
// // // //                     >
// // // //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// // // //                             Algorithmic Artistry
// // // //                         </h2>
// // // //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// // // //                             Transforming complex computational concepts into elegant visual experiences.
// // // //                             Watch as mathematical precision meets artistic expression in this interactive
// // // //                             visualization of data structures and algorithms.
// // // //                         </p>
// // // //                     </motion.div>
// // // //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// // // //                         <Canvas>
// // // //                             <ambientLight intensity={0.4} />
// // // //                             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
// // // //                             <Suspense fallback={null}>
// // // //                                 <GraphModel />
// // // //                             </Suspense>
// // // //                             <OrbitControls enableZoom={false} enablePan={false} />
// // // //                         </Canvas>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //
// // // //             {/* Music Section */}
// // // //             <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
// // // //                 <Canvas className="absolute inset-0">
// // // //                     <ambientLight intensity={0.3} />
// // // //                     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// // // //                     <Suspense fallback={null}>
// // // //                         <VinylModel scrollProgress={vinylRotation} />
// // // //                     </Suspense>
// // // //                     <OrbitControls enableZoom={false} enablePan={false} />
// // // //                 </Canvas>
// // // //                 <motion.div
// // // //                     className="relative z-10 max-w-2xl mx-auto px-6 text-center"
// // // //                     style={{
// // // //                         opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0])
// // // //                     }}
// // // //                 >
// // // //                     <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
// // // //                         Rhythm & Code
// // // //                     </h2>
// // // //                     <p className="text-xl text-[#E5E5E5] leading-relaxed">
// // // //                         Where music meets technology. Explore the harmonious blend of
// // // //                         beats and algorithms that drive my creative process.
// // // //                     </p>
// // // //                 </motion.div>
// // // //             </section>
// // // //
// // // //             {/* Stories Section */}
// // // //             <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]">
// // // //                 <motion.div
// // // //                     style={{ x: gokuX }}
// // // //                     className="absolute w-1/2 h-96"
// // // //                 >
// // // //                     <Canvas>
// // // //                         <ambientLight intensity={0.5} />
// // // //                         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// // // //                         <Suspense fallback={null}>
// // // //                             <GokuNimbusModel />
// // // //                         </Suspense>
// // // //                     </Canvas>
// // // //                 </motion.div>
// // // //                 <div className="container mx-auto px-6">
// // // //                     <motion.div
// // // //                         className="ml-auto md:w-1/2 relative z-10"
// // // //                         initial={{ opacity: 0 }}
// // // //                         whileInView={{ opacity: 1 }}
// // // //                         transition={{ duration: 1 }}
// // // //                     >
// // // //                         <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">
// // // //                             Visual Storytelling
// // // //                         </h2>
// // // //                         <p className="text-lg text-[#B8B8B8] leading-relaxed">
// // // //                             Journey through narratives that inspire innovation. Watch as Goku
// // // //                             soars across the screen, symbolizing the boundless possibilities
// // // //                             when creativity meets technology.
// // // //                         </p>
// // // //                     </motion.div>
// // // //                 </div>
// // // //             </section>
// // // //         </main>
// // // //     );
// // // // };
// // // //
// // // // export default AboutPage;
// // // //
// // // // //
// // // // // import React, { Suspense, useRef } from 'react';
// // // // // import { Canvas, useFrame } from '@react-three/fiber';
// // // // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // // // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // // // import { useInView } from 'react-intersection-observer';
// // // // //
// // // // // // --- Models ---
// // // // // const GraphModel = () => {
// // // // //     const ref = useRef();
// // // // //     useFrame((_, delta) => {
// // // // //         ref.current.rotation.y += delta * 0.1;
// // // // //         ref.current.rotation.x = Math.sin(_.clock.elapsedTime) * 0.1;
// // // // //     });
// // // // //     const nodes = [[-0.6,0,0], [0.6,0,0], [0,0.8,0.2]];
// // // // //     const edges = [[0,1], [1,2], [2,0]];
// // // // //     return (
// // // // //         <group ref={ref} scale={2}>
// // // // //             {nodes.map((pos,i) => (
// // // // //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// // // // //                     <mesh position={pos}>
// // // // //                         <sphereGeometry args={[0.12,32,32]} />
// // // // //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1}/>
// // // // //                     </mesh>
// // // // //                 </Float>
// // // // //             ))}
// // // // //             {edges.map(([a,b],i) => (
// // // // //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37"/>
// // // // //             ))}
// // // // //         </group>
// // // // //     );
// // // // // };
// // // // //
// // // // // useGLTF.preload('models/rocks_vinyl.glb');
// // // // // const VinylModel = ({ scrollProgress }) => {
// // // // //     const ref = useRef();
// // // // //     const { scene } = useGLTF('models/rocks_vinyl.glb');
// // // // //
// // // // //     useFrame(() => {
// // // // //         ref.current.rotation.x = Math.PI * -0.25; // Tilt forward
// // // // //         ref.current.rotation.y = scrollProgress.get() * Math.PI * 4;
// // // // //         ref.current.position.y = scrollProgress.get() * 2;
// // // // //     });
// // // // //
// // // // //     scene.traverse(c => {
// // // // //         if (c.isMesh) {
// // // // //             c.material.metalness = 0.8;
// // // // //             c.material.roughness = 0.1;
// // // // //             c.material.envMapIntensity = 2;
// // // // //         }
// // // // //     });
// // // // //
// // // // //     return (
// // // // //         <group>
// // // // //             <ambientLight intensity={0.5} />
// // // // //             <spotLight
// // // // //                 position={[10, 10, 5]}
// // // // //                 angle={0.3}
// // // // //                 penumbra={1}
// // // // //                 intensity={2}
// // // // //                 castShadow
// // // // //             />
// // // // //             <primitive ref={ref} object={scene} scale={1.5} />
// // // // //         </group>
// // // // //     );
// // // // // };
// // // // //
// // // // // useGLTF.preload('models/son_goku_and_kintoun_nimbus.glb');
// // // // // const GokuNimbusModel = () => {
// // // // //     const { scene } = useGLTF('models/son_goku_and_kintoun_nimbus.glb');
// // // // //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// // // // //     return <primitive object={scene} scale={2} />;
// // // // // };
// // // // //
// // // // // const MusicProfileCard = ({ platform, color, link }) => (
// // // // //     <motion.a
// // // // //         href={link}
// // // // //         target="_blank"
// // // // //         rel="noopener noreferrer"
// // // // //         className="block p-6 rounded-xl backdrop-blur-lg transition-all duration-300"
// // // // //         style={{ backgroundColor: `${color}22` }}
// // // // //         whileHover={{
// // // // //             backgroundColor: `${color}33`,
// // // // //             transform: 'translateY(-5px)'
// // // // //         }}
// // // // //     >
// // // // //         <div className="flex items-center gap-4">
// // // // //             <img
// // // // //                 src={`/assets/${platform.toLowerCase()}.svg`}
// // // // //                 alt={platform}
// // // // //                 className="w-12 h-12"
// // // // //             />
// // // // //             <div>
// // // // //                 <h3 className="text-white text-lg font-semibold">{platform}</h3>
// // // // //                 <p className="text-gray-300">Follow my playlists</p>
// // // // //             </div>
// // // // //         </div>
// // // // //     </motion.a>
// // // // // );
// // // // //
// // // // // const AboutPage = () => {
// // // // //     const containerRef = useRef();
// // // // //     const { scrollYProgress } = useScroll({
// // // // //         target: containerRef,
// // // // //         offset: ["start end", "end start"]
// // // // //     });
// // // // //
// // // // //     // Create a curved path for Goku
// // // // //     const gokuX = useTransform(scrollYProgress, [0.7, 0.9], ["-120%", "120%"]);
// // // // //     const gokuY = useTransform(scrollYProgress,
// // // // //         [0.7, 0.8, 0.9],
// // // // //         ["0%", "10%", "0%"]
// // // // //     );
// // // // //     const vinylRotation = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
// // // // //
// // // // //     return (
// // // // //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// // // // //             {/* Algorithms Section */}
// // // // //             <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
// // // // //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// // // // //                     <motion.div
// // // // //                         initial={{ opacity: 0, y: 50 }}
// // // // //                         whileInView={{ opacity: 1, y: 0 }}
// // // // //                         transition={{ duration: 1, ease: "easeOut" }}
// // // // //                         className="md:w-1/2 md:pr-12"
// // // // //                     >
// // // // //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// // // // //                             Algorithmic Artistry
// // // // //                         </h2>
// // // // //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// // // // //                             Transforming complex computational concepts into elegant visual experiences.
// // // // //                             Watch as mathematical precision meets artistic expression in this interactive
// // // // //                             visualization of data structures and algorithms.
// // // // //                         </p>
// // // // //                     </motion.div>
// // // // //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// // // // //                         <Canvas>
// // // // //                             <ambientLight intensity={0.4} />
// // // // //                             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
// // // // //                             <Suspense fallback={null}>
// // // // //                                 <GraphModel />
// // // // //                             </Suspense>
// // // // //                             <OrbitControls enableZoom={false} enablePan={false} />
// // // // //                         </Canvas>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>
// // // // //
// // // // //             {/* Music Section */}
// // // // //             <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
// // // // //                 <Canvas className="absolute inset-0">
// // // // //                     <Suspense fallback={null}>
// // // // //                         <VinylModel scrollProgress={vinylRotation} />
// // // // //                     </Suspense>
// // // // //                     <OrbitControls enableZoom={false} enablePan={false} />
// // // // //                 </Canvas>
// // // // //                 <motion.div
// // // // //                     className="relative z-10 max-w-4xl mx-auto px-6 text-center"
// // // // //                     style={{
// // // // //                         opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0])
// // // // //                     }}
// // // // //                 >
// // // // //                     <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
// // // // //                         Rhythm & Code
// // // // //                     </h2>
// // // // //                     <p className="text-xl text-[#E5E5E5] leading-relaxed mb-12">
// // // // //                         Where music meets technology. Explore the harmonious blend of
// // // // //                         beats and algorithms that drive my creative process.
// // // // //                     </p>
// // // // //                     <div className="grid md:grid-cols-2 gap-6">
// // // // //                         <MusicProfileCard
// // // // //                             platform="Spotify"
// // // // //                             color="#1DB954"
// // // // //                             link="https://open.spotify.com/user/YOUR_SPOTIFY_ID"
// // // // //                         />
// // // // //                         <MusicProfileCard
// // // // //                             platform="Apple Music"
// // // // //                             color="#FC3C44"
// // // // //                             link="https://music.apple.com/profile/YOUR_APPLE_MUSIC_ID"
// // // // //                         />
// // // // //                     </div>
// // // // //                 </motion.div>
// // // // //             </section>
// // // // //
// // // // //             {/* Stories Section */}
// // // // //             <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]">
// // // // //                 <motion.div
// // // // //                     style={{
// // // // //                         x: gokuX,
// // // // //                         y: gokuY
// // // // //                     }}
// // // // //                     className="absolute w-1/2 h-96"
// // // // //                 >
// // // // //                     <Canvas>
// // // // //                         <ambientLight intensity={0.5} />
// // // // //                         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// // // // //                         <Suspense fallback={null}>
// // // // //                             <GokuNimbusModel />
// // // // //                         </Suspense>
// // // // //                     </Canvas>
// // // // //                 </motion.div>
// // // // //                 <motion.div
// // // // //                     className="container mx-auto px-6"
// // // // //                     style={{
// // // // //                         opacity: useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 1])
// // // // //                     }}
// // // // //                 >
// // // // //                     <div className="ml-auto md:w-1/2 relative z-10">
// // // // //                         <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">
// // // // //                             Visual Storytelling
// // // // //                         </h2>
// // // // //                         <p className="text-lg text-[#B8B8B8] leading-relaxed">
// // // // //                             Journey through narratives that inspire innovation. Watch as Goku
// // // // //                             soars across the screen, symbolizing the boundless possibilities
// // // // //                             when creativity meets technology.
// // // // //                         </p>
// // // // //                     </div>
// // // // //                 </motion.div>
// // // // //             </section>
// // // // //         </main>
// // // // //     );
// // // // // };
// // // // //
// // // // // export default AboutPage;
// // //
// // // // src/pages/About.jsx
// // // import React, { Suspense, useRef } from 'react';
// // // import { Canvas, useFrame } from '@react-three/fiber';
// // // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // import { useInView } from 'react-intersection-observer';
// // //
// // // // --- Models ---
// // //
// // // const GraphModel = () => {
// // //     const ref = useRef();
// // //     useFrame((_, delta) => {
// // //         ref.current.rotation.y += delta * 0.1;
// // //         ref.current.rotation.x = Math.sin(_.clock.elapsedTime) * 0.1;
// // //     });
// // //     const nodes = [[-0.6,0,0], [0.6,0,0], [0,0.8,0.2]];
// // //     const edges = [[0,1], [1,2], [2,0]];
// // //     return (
// // //         <group ref={ref} scale={2}>
// // //             {nodes.map((pos,i) => (
// // //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// // //                     <mesh position={pos}>
// // //                         <sphereGeometry args={[0.12,32,32]} />
// // //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1}/>
// // //                     </mesh>
// // //                 </Float>
// // //             ))}
// // //             {edges.map(([a,b],i) => (
// // //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37"/>
// // //             ))}
// // //         </group>
// // //     );
// // // };
// // //
// // // // preload your models
// // // useGLTF.preload('/Pradyunuydarp/models/rocks_vinyl.glb');
// // // useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // //
// // // const VinylModel = ({ scrollProgress }) => {
// // //     const ref = useRef();
// // //     const { scene } = useGLTF('/Pradyunuydarp/models/rocks_vinyl.glb');
// // //
// // //     // make sure the vinyl disk sits face-up initially:
// // //     // adjust these rotation values to change tilt:
// // //     //   X rotation (pitch), Y rotation (yaw), Z rotation (roll)
// // //     const initialTilt = [ -Math.PI / 6, Math.PI / 8, 0 ];
// // //
// // //     // apply initial tilt once
// // //     React.useEffect(() => {
// // //         ref.current.rotation.set(...initialTilt);
// // //     }, []);
// // //
// // //     useFrame(() => {
// // //         // spin faster as you scroll through this section:
// // //         ref.current.rotation.y = initialTilt[1] + scrollProgress.get() * Math.PI * 4;
// // //         // subtle float up/down:
// // //         ref.current.position.y = Math.sin(scrollProgress.get() * Math.PI * 2) * 0.5;
// // //     });
// // //
// // //     scene.traverse(c => {
// // //         if (c.isMesh) {
// // //             c.material.metalness = 0.8;
// // //             c.material.roughness = 0.1;
// // //         }
// // //     });
// // //
// // //     return <primitive ref={ref} object={scene} scale={1.5} />;
// // // };
// // //
// // // const GokuNimbusModel = () => {
// // //     const ref = useRef();
// // //     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // //
// // //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// // //     return <primitive ref={ref} object={scene} scale={2} />;
// // // };
// // //
// // // // --- Page Component ---
// // //
// // // const AboutPage = () => {
// // //     const containerRef = useRef();
// // //     const { scrollYProgress } = useScroll({
// // //         target: containerRef,
// // //         offset: ["start end", "end start"]
// // //     });
// // //
// // //     // Goku moves X from -100→100% and Y up/down in a curve
// // //     const gokuX = useTransform(scrollYProgress, [0.7, 0.9], ["-100%", "100%"]);
// // //     const gokuY = useTransform(scrollYProgress, [0.7, 0.8, 0.9], ["0%", "-20%", "0%"]);
// // //
// // //     // Vinyl spin progress
// // //     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
// // //
// // //     // intersection to fade in Music text
// // //     const [musicRef, musicInView] = useInView({ threshold: 0.4 });
// // //
// // //     // intersection to fade in Story text
// // //     const [storyRef, storyInView] = useInView({ threshold: 0.3 });
// // //
// // //     return (
// // //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// // //             {/* ===== Algorithms ===== */}
// // //             <section className="min-h-screen flex items-center justify-center overflow-hidden">
// // //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// // //                     <motion.div
// // //                         initial={{ opacity: 0, y: 50 }}
// // //                         whileInView={{ opacity: 1, y: 0 }}
// // //                         transition={{ duration: 1, ease: "easeOut" }}
// // //                         className="md:w-1/2 md:pr-12"
// // //                     >
// // //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// // //                             Algorithmic Artistry
// // //                         </h2>
// // //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// // //                             Transforming complex computational concepts into elegant visual experiences.
// // //                             Watch as mathematical precision meets artistic expression in this interactive
// // //                             visualization of data structures and algorithms.
// // //                         </p>
// // //                     </motion.div>
// // //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// // //                         <Canvas>
// // //                             <ambientLight intensity={0.4} />
// // //                             <spotLight
// // //                                 position={[5, 10, 5]}
// // //                                 angle={0.3}
// // //                                 penumbra={1}
// // //                                 intensity={1}
// // //                                 color="#FFD700"
// // //                             />
// // //                             <Suspense fallback={null}>
// // //                                 <GraphModel />
// // //                             </Suspense>
// // //                             <OrbitControls enableZoom={false} enablePan={false} />
// // //                         </Canvas>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //
// // //             {/* ===== Music ===== */}
// // //             <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
// // //                 <Canvas className="absolute inset-0">
// // //                     <ambientLight intensity={0.3} />
// // //                     <spotLight
// // //                         position={[0, 5, 10]}
// // //                         angle={0.4}
// // //                         penumbra={1}
// // //                         intensity={1.2}
// // //                         color="#FFA500"
// // //                     />
// // //                     <Suspense fallback={null}>
// // //                         <VinylModel scrollProgress={vinylSpin} />
// // //                     </Suspense>
// // //                     <OrbitControls enableZoom={false} enablePan={false} />
// // //                 </Canvas>
// // //
// // //                 <motion.div
// // //                     ref={musicRef}
// // //                     className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-6"
// // //                     initial={{ opacity: 0 }}
// // //                     animate={musicInView ? { opacity: 1 } : { opacity: 0 }}
// // //                     transition={{ duration: 0.8 }}
// // //                 >
// // //                     <h2 className="text-4xl md:text-6xl font-bold text-white">
// // //                         Rhythm & Code
// // //                     </h2>
// // //                     <p className="text-xl text-[#E5E5E5] leading-relaxed">
// // //                         Where music meets technology. Explore the harmonious blend of
// // //                         beats and algorithms that drive my creative process.
// // //                     </p>
// // //
// // //                     {/* 🎵 Music Links */}
// // //                     <div className="flex justify-center gap-6">
// // //                         <a
// // //                             href="https://open.spotify.com/playlist/your-playlist-id"
// // //                             className="px-4 py-2 rounded-lg bg-[#1DB954] text-white font-semibold hover:opacity-90 transition"
// // //                             target="_blank" rel="noopener noreferrer"
// // //                         >
// // //                             Spotify Playlist
// // //                         </a>
// // //                         <a
// // //                             href="https://music.apple.com/playlist/your-playlist-id"
// // //                             className="px-4 py-2 rounded-lg bg-[#FA57C1] text-white font-semibold hover:opacity-90 transition"
// // //                             target="_blank" rel="noopener noreferrer"
// // //                         >
// // //                             Apple Music
// // //                         </a>
// // //                     </div>
// // //                 </motion.div>
// // //             </section>
// // //
// // //             {/* ===== Stories ===== */}
// // //             <section
// // //                 ref={storyRef}
// // //                 className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"
// // //             >
// // //                 <motion.div
// // //                     style={{ x: gokuX, y: gokuY }}
// // //                     className="absolute w-1/2 h-96"
// // //                 >
// // //                     <Canvas>
// // //                         <ambientLight intensity={0.5} />
// // //                         <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
// // //                         <Suspense fallback={null}>
// // //                             <GokuNimbusModel />
// // //                         </Suspense>
// // //                     </Canvas>
// // //                 </motion.div>
// // //
// // //                 <motion.div
// // //                     className="ml-auto md:w-1/2 p-8 relative z-10"
// // //                     initial={{ opacity: 0 }}
// // //                     whileInView={{ opacity: 1 }}
// // //                     transition={{ duration: 1 }}
// // //                 >
// // //                     <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">
// // //                         Visual Storytelling
// // //                     </h2>
// // //                     <p className="text-lg text-[#B8B8B8] leading-relaxed">
// // //                         Journey through narratives that inspire innovation. Watch as Goku
// // //                         soars across the screen—symbolizing the boundless possibilities
// // //                         when creativity meets technology.
// // //                     </p>
// // //                 </motion.div>
// // //             </section>
// // //         </main>
// // //     );
// // // };
// // //
// // // export default AboutPage;
// //
// // // src/pages/About.jsx
// // import React, { Suspense, useRef, useEffect } from 'react';
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { OrbitControls, Float, useGLTF, Line } from '@react-three/drei';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import { Text } from '@react-three/drei';
// // import Music from '../components/Music';
// // // import VinylModel from "../models/VinylModel.jsx";
// // // --- Models ---
// //
// // const GraphModel = () => {
// //     const ref = useRef();
// //     useFrame((state, delta) => {
// //         ref.current.rotation.y += delta * 0.1;
// //         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
// //     });
// //     const nodes = [[-0.6,0,0], [0.6,0,0], [0,0.8,0.2]];
// //     const edges = [[0,1], [1,2], [2,0]];
// //     return (
// //         <group ref={ref} scale={2}>
// //             {nodes.map((pos,i) => (
// //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// //                     <mesh position={pos}>
// //                         <sphereGeometry args={[0.12,32,32]} />
// //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1}/>
// //                     </mesh>
// //                 </Float>
// //             ))}
// //             {edges.map(([a,b],i) => (
// //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37"/>
// //             ))}
// //         </group>
// //     );
// // };
// //
// // useGLTF.preload('/Pradyunuydarp/models/rocks_vinyl.glb');
// //
// // const VinylModel = ({ scrollProgress }) => {
// //     const ref = useRef();
// //     const { scene } = useGLTF('/Pradyunuydarp/models/rocks_vinyl.glb');
// //
// //     const initialTilt = [+Math.PI / 2, 0, 0];
// //
// //     useEffect(() => {
// //         if (ref.current) {
// //             ref.current.rotation.set(...initialTilt);
// //         }
// //     }, []);
// //
// //     useFrame(() => {
// //         const progress = scrollProgress.get();
// //
// //         // ✳️ Slower rotation multiplier (was Math.PI * 4)
// //         ref.current.rotation.y = initialTilt[1] + progress * Math.PI * 1.5;
// //
// //         // ✅ Bobbing effect stays the same
// //         ref.current.position.y = Math.sin(progress * Math.PI * 2) * 0.5;
// //     });
// //
// //     // Improve look: smooth material
// //     scene.traverse(c => {
// //         if (c.isMesh) {
// //             c.material.metalness = 0.8;
// //             c.material.roughness = 0.1;
// //         }
// //     });
// //
// //     return <primitive ref={ref} object={scene} scale={1} />;
// // };
// //
// // useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // const GokuNimbusModel = () => {
// //     const ref = useRef();
// //     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// //     return <primitive ref={ref} object={scene} scale={2} />;
// // };
// //
// // // --- Page Component ---
// //
// // const AboutPage = () => {
// //     const containerRef = useRef();
// //     const { scrollYProgress } = useScroll({
// //         target: containerRef,
// //         offset: ["start end", "end start"]
// //     });
// //
// //     // Music scroll trigger & spin
// //     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
// //     const [musicRef, musicInView] = useInView({ threshold: 0.4 });
// //
// //     // Stories scroll-driven motion
// //     const storyRef = useRef(null);
// //     const { scrollYProgress: storyProgress } = useScroll({
// //         target: storyRef,
// //         offset: ["start end", "end start"]
// //     });
// //     const gokuX = useTransform(storyProgress, [0, 1], ["-100%", "100%"]);
// //     const gokuY = useTransform(storyProgress, [0, 0.5, 1], ["0%", "-10%", "0%"]);
// //     const gokuTilt = useTransform(storyProgress, [0, 1], [0, Math.PI / 4]);
// //     const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
// //
// //     return (
// //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// //             {/* Algorithms Section */}
// //             <section className="min-h-screen flex items-center justify-center overflow-hidden">
// //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// //                     <motion.div
// //                         className="md:w-1/2 md:pr-12"
// //                         initial={{opacity: 0, y: 50}}
// //                         whileInView={{opacity: 1, y: 0}}
// //                         transition={{duration: 1, ease: "easeOut"}}
// //                     >
// //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// //                             Algorithmic Artistry
// //                         </h2>
// //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// //                             Transforming complex computational concepts into elegant visual experiences.
// //                         </p>
// //                     </motion.div>
// //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// //                         <Canvas>
// //                             <ambientLight intensity={0.4}/>
// //                             <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700"/>
// //                             <Suspense fallback={null}><GraphModel/></Suspense>
// //                             <OrbitControls enableZoom={false} enablePan={false}/>
// //                         </Canvas>
// //                     </div>
// //                 </div>
// //             </section>
// //
// //             <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden relative">
// //                 <Canvas className="absolute inset-0">
// //                     <ambientLight intensity={1}/>
// //                     <spotLight
// //                         position={[0, 3, 2]}
// //                         angle={0.5}
// //                         penumbra={0.8}
// //                         intensity={150}
// //                         color="#FFA500"
// //                         castShadow
// //                     />
// //                     <Suspense fallback={null}>
// //                         <VinylModel scrollProgress={vinylSpin}/>
// //                         <Text
// //                             position={[0, 0.2, 1.5]}
// //                             fontSize={0.3}
// //                             maxWidth={4}
// //                             lineHeight={1.2}
// //                             textAlign="center"
// //                             color="#ffffff"
// //                             anchorX="center"
// //                             anchorY="middle"
// //                         >
// //                             Rhythm & Code
// //                         </Text>
// //                         <Text
// //                             position={[0, -0.3, 1.5]}
// //                             fontSize={0.15}
// //                             maxWidth={3.5}
// //                             textAlign="center"
// //                             color="#E5E5E5"
// //                         >
// //                             Where music meets technology. Explore the harmonious blend of beats and algorithms.
// //                         </Text>
// //                     </Suspense>
// //                     <OrbitControls enableZoom={false} enablePan={false}/>
// //                 </Canvas>
// //
// //                 {/* 👇 Music component rendered on top of the canvas */}
// //                 <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
// //                     <Music/>
// //                 </div>
// //             </section>
// //
// //             {/* Stories Section */}
// //             <section
// //                 ref={storyRef}
// //                 className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"
// //             >
// //                 <motion.div
// //                     style={{x: gokuX, y: gokuY, rotateY: gokuTilt}}
// //                     className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 h-96"
// //                 >
// //                     <Canvas>
// //                         <ambientLight intensity={0.5}/>
// //                         <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1}/>
// //                         <Suspense fallback={null}><GokuNimbusModel/></Suspense>
// //                     </Canvas>
// //                 </motion.div>
// //                 <motion.div
// //                     ref={textRef}
// //                     className="ml-auto md:w-1/2 p-8 relative z-10"
// //                     initial={{opacity: 0, x: 50}}
// //                     whileInView={{opacity: 1, x: 0}}
// //                     transition={{duration: 1, ease: "easeOut"}}
// //                 >
// //                     <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">Visual Storytelling</h2>
// //                     <p className="text-lg text-[#B8B8B8] leading-relaxed">
// //                         Journey through narratives that inspire innovation. Watch as Goku soars across
// //                         the screen—symbolizing the limitless possibilities when creativity meets tech.
// //                     </p>
// //                 </motion.div>
// //             </section>
// //         </main>
// //     );
// // };
// //
// // export default AboutPage;
//
// // src/pages/About.jsx
// import React, { Suspense, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Float, useGLTF, Line, Text } from '@react-three/drei';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Music from '../components/Music';
// import VinylModel from '../models/VinylModel';
//
// // --- Graph Model ---
// const GraphModel = () => {
//     const ref = useRef();
//     useFrame((state, delta) => {
//         ref.current.rotation.y += delta * 0.1;
//         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
//     });
//     const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
//     const edges = [[0,1],[1,2],[2,0]];
//     return (
//         <group ref={ref} scale={2}>
//             {nodes.map((pos,i) => (
//                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
//                     <mesh position={pos}>
//                         <sphereGeometry args={[0.12,32,32]} />
//                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                     </mesh>
//                 </Float>
//             ))}
//             {edges.map(([a,b],i) => (
//                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37" />
//             ))}
//         </group>
//     );
// };
//
// // --- Goku Nimbus Model ---
// useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// const GokuNimbusModel = () => {
//     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
//     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
//     return <primitive object={scene} scale={2} />;
// };
//
// // --- About Page ---
// const AboutPage = () => {
//     const containerRef = useRef();
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end', 'end start'],
//     });
//
//     // Music section scroll-driven spin
//     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
//     const [musicRef, musicInView] = useInView({ threshold: 0.4 });
//
//     // Goku scroll-driven flight
//     const storyRef = useRef();
//     const { scrollYProgress: storyProgress } = useScroll({
//         target: storyRef,
//         offset: ['start end', 'end start'],
//     });
//     const gokuX = useTransform(storyProgress, [0, 1], ['-100%', '100%']);
//     const gokuY = useTransform(storyProgress, [0, 0.5, 1], ['0%', '-10%', '0%']);
//     const gokuTilt = useTransform(storyProgress, [0, 1], [0, Math.PI / 4]);
//     const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//
//     return (
//         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
//             {/* Algorithms Section */}
//             <section className="min-h-screen flex items-center justify-center overflow-hidden">
//                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
//                     <motion.div
//                         className="md:w-1/2 md:pr-12"
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, ease: 'easeOut' }}
//                     >
//                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
//                             Algorithmic Artistry
//                         </h2>
//                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
//                             Transforming complex computational concepts into elegant visual experiences.
//                         </p>
//                     </motion.div>
//                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
//                         <Canvas>
//                             <ambientLight intensity={0.4} />
//                             <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700" />
//                             <Suspense fallback={null}>
//                                 <GraphModel />
//                             </Suspense>
//                             <OrbitControls enableZoom={false} enablePan={false} />
//                         </Canvas>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Music Section */}
//             <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden relative">
//                 <Canvas className="absolute inset-0">
//                     <ambientLight intensity={1} />
//                     <spotLight
//                         position={[0, 3, 2]}
//                         angle={0.5}
//                         penumbra={0.8}
//                         intensity={150}
//                         color="#FFA500"
//                         castShadow
//                     />
//                     <Suspense fallback={null}>
//                         <VinylModel scrollProgress={vinylSpin} />
//                         <Text
//                             position={[0, 0.2, 1.5]}
//                             fontSize={0.3}
//                             maxWidth={4}
//                             lineHeight={1.2}
//                             textAlign="center"
//                             color="#ffffff"
//                             anchorX="center"
//                             anchorY="middle"
//                         >
//                             Rhythm & Code
//                         </Text>
//                         <Text
//                             position={[0, -0.3, 1.5]}
//                             fontSize={0.15}
//                             maxWidth={3.5}
//                             textAlign="center"
//                             color="#E5E5E5"
//                         >
//                             Where music meets technology. Explore the harmonious blend of beats and algorithms.
//                         </Text>
//                     </Suspense>
//                     <OrbitControls enableZoom={false} enablePan={false} />
//                 </Canvas>
//
//                 {/* Music UI overlay */}
//                 <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
//                     <Music />
//                 </div>
//             </section>
//
//             {/* Stories Section */}
//             <section
//                 ref={storyRef}
//                 className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"
//             >
//                 <motion.div
//                     style={{ x: gokuX, y: gokuY, rotateY: gokuTilt }}
//                     className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 h-96"
//                 >
//                     <Canvas>
//                         <ambientLight intensity={0.5} />
//                         <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
//                         <Suspense fallback={null}>
//                             <GokuNimbusModel />
//                         </Suspense>
//                     </Canvas>
//                 </motion.div>
//                 <motion.div
//                     ref={textRef}
//                     className="ml-auto md:w-1/2 p-8 relative z-10"
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1, ease: 'easeOut' }}
//                 >
//                     <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">Visual Storytelling</h2>
//                     <p className="text-lg text-[#B8B8B8] leading-relaxed">
//                         Journey through narratives that inspire innovation. Watch as Goku soars across
//                         the screen—symbolizing the limitless possibilities when creativity meets tech.
//                     </p>
//                 </motion.div>
//             </section>
//         </main>
//     );
// };
//
// export default AboutPage;

// // src/pages/About.jsx
// import React, { Suspense, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Float, useGLTF, Line, Text } from '@react-three/drei';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
//
// import Music from '../components/Music';
// import VinylModel from '../models/VinylModel';
// import StoriesSection from "../sections/StoriesSection.jsx";
// import { Html } from '@react-three/drei';
// // --- Graph Model ---
// const GraphModel = () => {
//     const ref = useRef();
//     useFrame((state, delta) => {
//         ref.current.rotation.y += delta * 0.1;
//         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
//     });
//     const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
//     const edges = [[0,1],[1,2],[2,0]];
//     return (
//         <group ref={ref} scale={2}>
//             {nodes.map((pos,i) => (
//                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
//                     <mesh position={pos}>
//                         <sphereGeometry args={[0.12,32,32]} />
//                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                     </mesh>
//                 </Float>
//             ))}
//             {edges.map(([a,b],i) => (
//                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37" />
//             ))}
//         </group>
//     );
// };
//
// // --- Vinyl Model is in src/components/VinylModel.jsx ---
//
// // --- Goku Nimbus Model ---
// useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// const GokuNimbusModel = () => {
//     const ref = useRef();
//     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
//     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
//     return <primitive ref={ref} object={scene} scale={3} />;
// };
//
// // --- About Page ---
// const AboutPage = () => {
//     const containerRef = useRef();
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end', 'end start'],
//     });
//
//     // Music section spin
//     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
//
//     // Stories scroll
//     const storyRef = useRef();
//     const { scrollYProgress: storyProgress } = useScroll({
//         target: storyRef,
//         offset: ['start end', 'end start'],
//     });
//     // const gokuX = useTransform(storyProgress, [0, 1], ['-100%', '100%']);
//     // const gokuY = useTransform(storyProgress, [0, 0.5, 1], ['0%', '-10%', '0%']);
//     // const gokuTilt = useTransform(
//     //     storyProgress,
//     //     [0, 1],
//     //     [Math.PI, 0]              // start facing left (π), end facing right (0)
//     // );
//         const gokuX = useTransform(storyProgress, [0, 1], ['-100%', '100%']);
// // Map scroll to Y following a slight dip: [0 → 0.2 → 1] maps [0% → -20% → 50%]
//         const gokuY = useTransform(storyProgress, [0, 0.5, 1], ['0%', '-20%', '50%']);
// // Rotate Y from π (facing left) → 0 (facing right)
//         const gokuRotateY = useTransform(storyProgress, [0, 1], [Math.PI, 0]);
//
//     const textOpacity = useTransform(
//         storyProgress,
//         [0.8, 0.9],
//         [0, 1]
//     );
//
//     // const gokuTilt = useTransform(storyProgress, [0, 1], [0, Math.PI / 4]);
//     const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//
//     const [musicRef, musicInView] = useInView({ threshold: 0.4 });
//
//     return (
//         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
//             {/* Algorithms Section */}
//             <section className="min-h-screen flex items-center justify-center overflow-hidden">
//                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
//                     <motion.div
//                         className="md:w-1/2 md:pr-12"
//                         initial={{opacity: 0, y: 50}}
//                         whileInView={{opacity: 1, y: 0}}
//                         transition={{duration: 1, ease: 'easeOut'}}
//                     >
//                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
//                             Algorithmic Artistry
//                         </h2>
//                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
//                             Transforming complex computational concepts into elegant visual experiences.
//                         </p>
//                     </motion.div>
//                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
//                         <Canvas>
//                             <ambientLight intensity={0.4}/>
//                             <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700"/>
//                             <Suspense fallback={null}><GraphModel/></Suspense>
//                             <OrbitControls enableZoom={false} enablePan={false}/>
//                         </Canvas>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Music Section */}
//             <section className="h-screen sticky top-0 overflow-hidden relative">
//                 <Canvas className="absolute inset-0 transform -translate-x-8">
//                     <ambientLight intensity={1}/>
//                     <spotLight
//                         position={[0, 3, 2]}
//                         angle={0.5}
//                         penumbra={0.8}
//                         intensity={150}
//                         color="#FFA500"
//                         castShadow
//                     />
//                     <Suspense fallback={null}>
//                         <VinylModel scrollProgress={vinylSpin}/>
//                         <Text
//                             position={[0, 0.2, 1.5]}
//                             fontSize={0.3}
//                             maxWidth={4}
//                             lineHeight={1.2}
//                             textAlign="center"
//                             color="#ffffff"
//                             anchorX="center"
//                             anchorY="middle"
//                         >
//                             {/*Music*/}
//                         </Text>
//                         <Text
//                             position={[0, -0.3, 1.5]}
//                             fontSize={0.15}
//                             maxWidth={3.5}
//                             textAlign="center"
//                             color="#E5E5E5"
//                         >
//                             {/*Explore the harmonious blend of beats and algorithms.*/}
//                         </Text>
//                     </Suspense>
//                     <OrbitControls enableZoom={false} enablePan={false}/>
//                 </Canvas>
//
//                 {/*<div className="absolute bottom-6 right-10 z-10">*/}
//                 {/*    <Music />*/}
//                 {/*</div>*/}
//                 <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
//                     <Music/>
//                 </div>
//             </section>
//
//
//             <StoriesSection/>
//         </main>
//     );
// };
//
// export default AboutPage;
//

// {/* Stories Section */}
// {/*<section*/}
// {/*    ref={storyRef}*/}
// {/*    className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"*/}
// {/*>*/}
// {/*    <motion.div*/}
// {/*        style={{ x: gokuX, y: gokuY, rotateY: gokuTilt }}*/}
// {/*        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 h-96"*/}
// {/*    >*/}
// {/*        <Canvas>*/}
// {/*            <ambientLight intensity={0.5} />*/}
// {/*            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />*/}
// {/*            <Suspense fallback={null}><GokuNimbusModel /></Suspense>*/}
// {/*        </Canvas>*/}
// {/*    </motion.div>*/}
// {/*    <motion.div*/}
// {/*        ref={textRef}*/}
// {/*        className="ml-auto md:w-1/2 p-8 relative z-10"*/}
// {/*        initial={{ opacity: 0, x: 50 }}*/}
// {/*        whileInView={{ opacity: 1, x: 0 }}*/}
// {/*        transition={{ duration: 1, ease: 'easeOut' }}*/}
// {/*    >*/}
// {/*        <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">Visual Storytelling</h2>*/}
// {/*        <p className="text-lg text-[#B8B8B8] leading-relaxed">*/}
// {/*            Journey through narratives that inspire innovation. Watch as Goku soars across*/}
// {/*            the screen—symbolizing the limitless possibilities when creativity meets tech.*/}
// {/*        </p>*/}
// {/*    </motion.div>*/}
// {/*</section>*/}
// {/*<section*/}
// {/*    ref={storyRef}*/}
// {/*    className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"*/}
// {/*>*/}
// {/*    /!* Fixed right‐side text *!/*/}
// {/*    <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 max-w-md">*/}
// {/*        <h2 className="text-4xl font-bold mb-4 text-white">Visual Storytelling</h2>*/}
// {/*        <p className="text-lg text-gray-300 leading-relaxed">*/}
// {/*            Journey through narratives that inspire innovation. Watch as Goku soars below this text,*/}
// {/*            symbolizing the limitless possibilities when creativity meets technology.*/}
// {/*        </p>*/}
// {/*    </div>*/}
//
// {/*    /!* Goku on a curved Framer‐Motion path *!/*/}
// {/*    <motion.div*/}
// {/*        style={{*/}
// {/*            x: gokuX,*/}
// {/*            y: gokuY,*/}
// {/*            rotateY: gokuRotateY*/}
// {/*        }}*/}
// {/*        className="absolute top-1/2 left-0 w-1/4 h-96 transform -translate-y-1/2"*/}
// {/*    >*/}
// {/*        <Canvas>*/}
// {/*            <ambientLight intensity={0.5}/>*/}
// {/*            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1}/>*/}
// {/*            <Suspense fallback={null}>*/}
// {/*                <GokuNimbusModel/>*/}
// {/*            </Suspense>*/}
// {/*            <OrbitControls enableZoom={false} enablePan={false}/>*/}
// {/*        </Canvas>*/}
// {/*    </motion.div>*/}
// {/*</section>*/}

// src/pages/AboutPage.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF, Line, Text } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Music from '../components/Music';
import VinylModel from '../models/VinylModel';
import StoriesSection from '../sections/StoriesSection';

const GraphModel = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.1;
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    });
    const nodes = [
        [-0.6, 0, 0],
        [0.6, 0, 0],
        [0, 0.8, 0.2],
    ];
    const edges = [
        [0, 1],
        [1, 2],
        [2, 0],
    ];
    return (
        <group ref={ref} scale={2}>
            {nodes.map((pos, i) => (
                <Float
                    key={i}
                    speed={1}
                    floatIntensity={0.2}
                    rotationIntensity={0.1}
                >
                    <mesh position={pos}>
                        <sphereGeometry args={[0.12, 32, 32]} />
                        <meshStandardMaterial
                            color="#D4AF37"
                            metalness={0.9}
                            roughness={0.1}
                        />
                    </mesh>
                </Float>
            ))}
            {edges.map(([a, b], i) => (
                <Line
                    key={i}
                    points={[nodes[a], nodes[b]]}
                    lineWidth={1}
                    color="#D4AF37"
                />
            ))}
        </group>
    );
};

useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
const GokuNimbusModel = () => {
    const ref = useRef();
    const { scene } = useGLTF(
        '/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb'
    );
    scene.traverse((c) => c.isMesh && (c.material.ior = 1.5));
    return <primitive ref={ref} object={scene} scale={3} />;
};

const AboutPage = () => {
    // drive vinyl spin
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });
    const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);

    return (
        <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
            {/* 1) Algorithms Section */}
            <section className="min-h-screen flex items-center justify-center overflow-hidden">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                    <motion.div
                        className="md:w-1/2 md:pr-12"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: 'easeOut'}}
                    >
                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                            Algorithmic Artistry
                        </h2>
                        <p className="text-[#E5E5E5] text-lg leading-relaxed">
                            Transforming complex computational concepts into elegant visual
                            experiences.
                        </p>
                    </motion.div>
                    <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
                        <Canvas>
                            <ambientLight intensity={0.4}/>
                            <spotLight
                                position={[5, 10, 5]}
                                angle={0.3}
                                penumbra={1}
                                intensity={1}
                                color="#FFD700"
                            />
                            <Suspense fallback={null}>
                                <GraphModel/>
                            </Suspense>
                            <OrbitControls enableZoom={false} enablePan={false}/>
                        </Canvas>
                    </div>
                </div>
            </section>

            {/* 2) Music Section (sticky full-screen) */}
            {/*<section className="h-screen sticky top-0 overflow-hidden relative">*/}
            {/*    <Canvas className="absolute inset-0 transform -translate-x-8">*/}
            {/*        <ambientLight intensity={1} />*/}
            {/*        <spotLight*/}
            {/*            position={[0, 3, 2]}*/}
            {/*            angle={0.5}*/}
            {/*            penumbra={0.8}*/}
            {/*            intensity={150}*/}
            {/*            color="#FFA500"*/}
            {/*            castShadow*/}
            {/*        />*/}
            {/*        <Suspense fallback={null}>*/}
            {/*            <VinylModel scrollProgress={vinylSpin} />*/}
            {/*        </Suspense>*/}
            {/*        <OrbitControls enableZoom={false} enablePan={false} />*/}
            {/*    </Canvas>*/}

            {/*    <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">*/}
            {/*        <Music />*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*/!* 3) Stories Section (renders after Music) *!/*/}
            {/*<StoriesSection />*/}
            <section className="h-screen overflow-hidden relative">
                <Canvas className="absolute inset-0 transform -translate-x-8">
                    <ambientLight intensity={1}/>
                    <spotLight
                        position={[0, 3, 2]}
                        angle={0.5}
                        penumbra={0.8}
                        intensity={150}
                        color="#FFA500"
                        castShadow
                    />
                    <Suspense fallback={null}>
                        <VinylModel scrollProgress={vinylSpin}/>
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false}/>
                </Canvas>

                <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
                    <Music/>
                </div>
            </section>

            {/* Stories Section now renders below */}
            <div className="pt-20">
                <StoriesSection/>
            </div>
        </main>
    );
};

export default AboutPage;
