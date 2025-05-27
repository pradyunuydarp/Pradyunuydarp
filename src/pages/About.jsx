// // // // src/pages/About.jsx
// // // import React, { Suspense, useRef } from 'react';
// // // import { Canvas, useFrame } from '@react-three/fiber';
// // // import { OrbitControls, Float, useGLTF, Line, Text } from '@react-three/drei';
// // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // import { useInView } from 'react-intersection-observer';
// // //
// // // import Music from '../components/Music';
// // // import VinylModel from '../models/VinylModel';
// // // import StoriesSection from "../sections/StoriesSection.jsx";
// // // import { Html } from '@react-three/drei';
// // // // --- Graph Model ---
// // // const GraphModel = () => {
// // //     const ref = useRef();
// // //     useFrame((state, delta) => {
// // //         ref.current.rotation.y += delta * 0.1;
// // //         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
// // //     });
// // //     const nodes = [[-0.6,0,0],[0.6,0,0],[0,0.8,0.2]];
// // //     const edges = [[0,1],[1,2],[2,0]];
// // //     return (
// // //         <group ref={ref} scale={2}>
// // //             {nodes.map((pos,i) => (
// // //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// // //                     <mesh position={pos}>
// // //                         <sphereGeometry args={[0.12,32,32]} />
// // //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// // //                     </mesh>
// // //                 </Float>
// // //             ))}
// // //             {edges.map(([a,b],i) => (
// // //                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37" />
// // //             ))}
// // //         </group>
// // //     );
// // // };
// // //
// // // // --- Vinyl Model is in src/components/VinylModel.jsx ---
// // //
// // // // --- Goku Nimbus Model ---
// // // useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // // const GokuNimbusModel = () => {
// // //     const ref = useRef();
// // //     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// // //     return <primitive ref={ref} object={scene} scale={3} />;
// // // };
// // //
// // // // --- About Page ---
// // // const AboutPage = () => {
// // //     const containerRef = useRef();
// // //     const { scrollYProgress } = useScroll({
// // //         target: containerRef,
// // //         offset: ['start end', 'end start'],
// // //     });
// // //
// // //     // Music section spin
// // //     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
// // //
// // //     // Stories scroll
// // //     const storyRef = useRef();
// // //     const { scrollYProgress: storyProgress } = useScroll({
// // //         target: storyRef,
// // //         offset: ['start end', 'end start'],
// // //     });
// // //     // const gokuX = useTransform(storyProgress, [0, 1], ['-100%', '100%']);
// // //     // const gokuY = useTransform(storyProgress, [0, 0.5, 1], ['0%', '-10%', '0%']);
// // //     // const gokuTilt = useTransform(
// // //     //     storyProgress,
// // //     //     [0, 1],
// // //     //     [Math.PI, 0]              // start facing left (π), end facing right (0)
// // //     // );
// // //         const gokuX = useTransform(storyProgress, [0, 1], ['-100%', '100%']);
// // // // Map scroll to Y following a slight dip: [0 → 0.2 → 1] maps [0% → -20% → 50%]
// // //         const gokuY = useTransform(storyProgress, [0, 0.5, 1], ['0%', '-20%', '50%']);
// // // // Rotate Y from π (facing left) → 0 (facing right)
// // //         const gokuRotateY = useTransform(storyProgress, [0, 1], [Math.PI, 0]);
// // //
// // //     const textOpacity = useTransform(
// // //         storyProgress,
// // //         [0.8, 0.9],
// // //         [0, 1]
// // //     );
// // //
// // //     // const gokuTilt = useTransform(storyProgress, [0, 1], [0, Math.PI / 4]);
// // //     const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
// // //
// // //     const [musicRef, musicInView] = useInView({ threshold: 0.4 });
// // //
// // //     return (
// // //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// // //             {/* Algorithms Section */}
// // //             <section className="min-h-screen flex items-center justify-center overflow-hidden">
// // //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// // //                     <motion.div
// // //                         className="md:w-1/2 md:pr-12"
// // //                         initial={{opacity: 0, y: 50}}
// // //                         whileInView={{opacity: 1, y: 0}}
// // //                         transition={{duration: 1, ease: 'easeOut'}}
// // //                     >
// // //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// // //                             Algorithmic Artistry
// // //                         </h2>
// // //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// // //                             Transforming complex computational concepts into elegant visual experiences.
// // //                         </p>
// // //                     </motion.div>
// // //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// // //                         <Canvas>
// // //                             <ambientLight intensity={0.4}/>
// // //                             <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700"/>
// // //                             <Suspense fallback={null}><GraphModel/></Suspense>
// // //                             <OrbitControls enableZoom={false} enablePan={false}/>
// // //                         </Canvas>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //
// // //             {/* Music Section */}
// // //             <section className="h-screen sticky top-0 overflow-hidden relative">
// // //                 <Canvas className="absolute inset-0 transform -translate-x-8">
// // //                     <ambientLight intensity={1}/>
// // //                     <spotLight
// // //                         position={[0, 3, 2]}
// // //                         angle={0.5}
// // //                         penumbra={0.8}
// // //                         intensity={150}
// // //                         color="#FFA500"
// // //                         castShadow
// // //                     />
// // //                     <Suspense fallback={null}>
// // //                         <VinylModel scrollProgress={vinylSpin}/>
// // //                         <Text
// // //                             position={[0, 0.2, 1.5]}
// // //                             fontSize={0.3}
// // //                             maxWidth={4}
// // //                             lineHeight={1.2}
// // //                             textAlign="center"
// // //                             color="#ffffff"
// // //                             anchorX="center"
// // //                             anchorY="middle"
// // //                         >
// // //                             {/*Music*/}
// // //                         </Text>
// // //                         <Text
// // //                             position={[0, -0.3, 1.5]}
// // //                             fontSize={0.15}
// // //                             maxWidth={3.5}
// // //                             textAlign="center"
// // //                             color="#E5E5E5"
// // //                         >
// // //                             {/*Explore the harmonious blend of beats and algorithms.*/}
// // //                         </Text>
// // //                     </Suspense>
// // //                     <OrbitControls enableZoom={false} enablePan={false}/>
// // //                 </Canvas>
// // //
// // //                 {/*<div className="absolute bottom-6 right-10 z-10">*/}
// // //                 {/*    <Music />*/}
// // //                 {/*</div>*/}
// // //                 <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
// // //                     <Music/>
// // //                 </div>
// // //             </section>
// // //
// // //
// // //             <StoriesSection/>
// // //         </main>
// // //     );
// // // };
// // //
// // // export default AboutPage;
// // //
// //
// // // {/* Stories Section */}
// // // {/*<section*/}
// // // {/*    ref={storyRef}*/}
// // // {/*    className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"*/}
// // // {/*>*/}
// // // {/*    <motion.div*/}
// // // {/*        style={{ x: gokuX, y: gokuY, rotateY: gokuTilt }}*/}
// // // {/*        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 h-96"*/}
// // // {/*    >*/}
// // // {/*        <Canvas>*/}
// // // {/*            <ambientLight intensity={0.5} />*/}
// // // {/*            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />*/}
// // // {/*            <Suspense fallback={null}><GokuNimbusModel /></Suspense>*/}
// // // {/*        </Canvas>*/}
// // // {/*    </motion.div>*/}
// // // {/*    <motion.div*/}
// // // {/*        ref={textRef}*/}
// // // {/*        className="ml-auto md:w-1/2 p-8 relative z-10"*/}
// // // {/*        initial={{ opacity: 0, x: 50 }}*/}
// // // {/*        whileInView={{ opacity: 1, x: 0 }}*/}
// // // {/*        transition={{ duration: 1, ease: 'easeOut' }}*/}
// // // {/*    >*/}
// // // {/*        <h2 className="text-4xl font-bold mb-6 text-[#E5E5E5]">Visual Storytelling</h2>*/}
// // // {/*        <p className="text-lg text-[#B8B8B8] leading-relaxed">*/}
// // // {/*            Journey through narratives that inspire innovation. Watch as Goku soars across*/}
// // // {/*            the screen—symbolizing the limitless possibilities when creativity meets tech.*/}
// // // {/*        </p>*/}
// // // {/*    </motion.div>*/}
// // // {/*</section>*/}
// // // {/*<section*/}
// // // {/*    ref={storyRef}*/}
// // // {/*    className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"*/}
// // // {/*>*/}
// // // {/*    /!* Fixed right‐side text *!/*/}
// // // {/*    <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 max-w-md">*/}
// // // {/*        <h2 className="text-4xl font-bold mb-4 text-white">Visual Storytelling</h2>*/}
// // // {/*        <p className="text-lg text-gray-300 leading-relaxed">*/}
// // // {/*            Journey through narratives that inspire innovation. Watch as Goku soars below this text,*/}
// // // {/*            symbolizing the limitless possibilities when creativity meets technology.*/}
// // // {/*        </p>*/}
// // // {/*    </div>*/}
// // //
// // // {/*    /!* Goku on a curved Framer‐Motion path *!/*/}
// // // {/*    <motion.div*/}
// // // {/*        style={{*/}
// // // {/*            x: gokuX,*/}
// // // {/*            y: gokuY,*/}
// // // {/*            rotateY: gokuRotateY*/}
// // // {/*        }}*/}
// // // {/*        className="absolute top-1/2 left-0 w-1/4 h-96 transform -translate-y-1/2"*/}
// // // {/*    >*/}
// // // {/*        <Canvas>*/}
// // // {/*            <ambientLight intensity={0.5}/>*/}
// // // {/*            <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1}/>*/}
// // // {/*            <Suspense fallback={null}>*/}
// // // {/*                <GokuNimbusModel/>*/}
// // // {/*            </Suspense>*/}
// // // {/*            <OrbitControls enableZoom={false} enablePan={false}/>*/}
// // // {/*        </Canvas>*/}
// // // {/*    </motion.div>*/}
// // // {/*</section>*/}
// //
// // // src/pages/AboutPage.jsx
// // import React, { Suspense, useRef } from 'react';
// // import { Canvas, useFrame } from '@react-three/fiber';
// // import { OrbitControls, Float, useGLTF, Line, Text } from '@react-three/drei';
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import LoadingOverlay from "../components/LoadingOverlay.jsx";
// // import Music from '../components/Music';
// // import VinylModel from '../models/VinylModel';
// // import StoriesSection from '../sections/StoriesSection';
// //
// // const GraphModel = () => {
// //     const ref = useRef();
// //     useFrame((state, delta) => {
// //         ref.current.rotation.y += delta * 0.1;
// //         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
// //     });
// //     const nodes = [
// //         [-0.6, 0, 0],
// //         [0.6, 0, 0],
// //         [0, 0.8, 0.2],
// //     ];
// //     const edges = [
// //         [0, 1],
// //         [1, 2],
// //         [2, 0],
// //     ];
// //     return (
// //         <group ref={ref} scale={2}>
// //             {nodes.map((pos, i) => (
// //                 <Float
// //                     key={i}
// //                     speed={1}
// //                     floatIntensity={0.2}
// //                     rotationIntensity={0.1}
// //                 >
// //                     <mesh position={pos}>
// //                         <sphereGeometry args={[0.12, 32, 32]} />
// //                         <meshStandardMaterial
// //                             color="#D4AF37"
// //                             metalness={0.9}
// //                             roughness={0.1}
// //                         />
// //                     </mesh>
// //                 </Float>
// //             ))}
// //             {edges.map(([a, b], i) => (
// //                 <Line
// //                     key={i}
// //                     points={[nodes[a], nodes[b]]}
// //                     lineWidth={1}
// //                     color="#D4AF37"
// //                 />
// //             ))}
// //         </group>
// //     );
// // };
// //
// // useGLTF.preload('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // const GokuNimbusModel = () => {
// //     const ref = useRef();
// //     const { scene } = useGLTF(
// //         '/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb'
// //     );
// //     scene.traverse((c) => c.isMesh && (c.material.ior = 1.5));
// //     return <primitive ref={ref} object={scene} scale={3} />;
// // };
// //
// // const AboutPage = () => {
// //     // drive vinyl spin
// //     const containerRef = useRef();
// //     const { scrollYProgress } = useScroll({
// //         target: containerRef,
// //         offset: ['start end', 'end start'],
// //     });
// //     const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
// //
// //     return (
// //         <>
// //         <LoadingOverlay />
// //         <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D]">
// //             {/*<p className={"head-text"}>My Interests</p>*/}
// //             {/* 1) Algorithms Section */}
// //             <section className="min-h-screen flex items-center justify-center overflow-hidden">
// //                 <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
// //                     <motion.div
// //                         className="md:w-1/2 md:pr-12"
// //                         initial={{opacity: 0, y: 50}}
// //                         whileInView={{opacity: 1, y: 0}}
// //                         transition={{duration: 1, ease: 'easeOut'}}
// //                     >
// //                         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
// //                             Algorithmic Artistry
// //                         </h2>
// //                         <p className="text-[#E5E5E5] text-lg leading-relaxed">
// //                             Transforming complex computational concepts into elegant visual
// //                             experiences.
// //                         </p>
// //                     </motion.div>
// //                     <div className="md:w-1/2 h-[60vh] mt-12 md:mt-0">
// //                         <Canvas>
// //                             <ambientLight intensity={0.4}/>
// //                             <spotLight
// //                                 position={[5, 10, 5]}
// //                                 angle={0.3}
// //                                 penumbra={1}
// //                                 intensity={1}
// //                                 color="#FFD700"
// //                             />
// //                             <Suspense fallback={null}>
// //                                 <GraphModel/>
// //                             </Suspense>
// //                             <OrbitControls enableZoom={false} enablePan={false}/>
// //                         </Canvas>
// //                     </div>
// //                 </div>
// //             </section>
// //
// //             {/* 2) Music Section (sticky full-screen) */}
// //             {/*<section className="h-screen sticky top-0 overflow-hidden relative">*/}
// //             {/*    <Canvas className="absolute inset-0 transform -translate-x-8">*/}
// //             {/*        <ambientLight intensity={1} />*/}
// //             {/*        <spotLight*/}
// //             {/*            position={[0, 3, 2]}*/}
// //             {/*            angle={0.5}*/}
// //             {/*            penumbra={0.8}*/}
// //             {/*            intensity={150}*/}
// //             {/*            color="#FFA500"*/}
// //             {/*            castShadow*/}
// //             {/*        />*/}
// //             {/*        <Suspense fallback={null}>*/}
// //             {/*            <VinylModel scrollProgress={vinylSpin} />*/}
// //             {/*        </Suspense>*/}
// //             {/*        <OrbitControls enableZoom={false} enablePan={false} />*/}
// //             {/*    </Canvas>*/}
// //
// //             {/*    <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">*/}
// //             {/*        <Music />*/}
// //             {/*    </div>*/}
// //             {/*</section>*/}
// //
// //             {/*/!* 3) Stories Section (renders after Music) *!/*/}
// //             {/*<StoriesSection />*/}
// //             <section className="h-screen overflow-hidden relative">
// //                 <Canvas className="absolute inset-0 transform -translate-x-8">
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
// //                     </Suspense>
// //                     <OrbitControls enableZoom={false} enablePan={false}/>
// //                 </Canvas>
// //
// //                 <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
// //                     <Music/>
// //                 </div>
// //             </section>
// //
// //             {/* Stories Section now renders below */}
// //             <div className="pt-20">
// //                 <StoriesSection/>
// //             </div>
// //         </main>
// //         </>
// //     );
// // };
// //
// // export default AboutPage;
//
// // src/pages/AboutPage.jsx
// import React, { Suspense, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Float, Line } from '@react-three/drei';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import LoadingOverlay from "../components/LoadingOverlay.jsx";
// import Music from '../components/Music';
// import VinylModel from '../models/VinylModel';
// import StoriesSection from '../sections/StoriesSection';
//
// const GraphModel = () => {
//     const ref = useRef();
//     useFrame((state, delta) => {
//         ref.current.rotation.y += delta * 0.1;
//         ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
//     });
//     const nodes = [
//         [-0.6,0,0],
//         [0.6,0,0],
//         [0,0.8,0.2],
//     ];
//     const edges = [[0,1],[1,2],[2,0]];
//     return (
//         <group ref={ref} scale={1.5}>
//             {nodes.map((pos,i)=>(
//                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
//                     <mesh position={pos}>
//                         <sphereGeometry args={[0.1, 32, 32]}/>
//                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1}/>
//                     </mesh>
//                 </Float>
//             ))}
//             {edges.map(([a,b],i)=>(
//                 <Line key={i} points={[nodes[a],nodes[b]]} lineWidth={1} color="#D4AF37"/>
//             ))}
//         </group>
//     );
// };
//
// const AboutPage = () => {
//     const containerRef = useRef();
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end','end start']
//     });
//     const vinylSpin = useTransform(scrollYProgress, [0.3,0.6], [0,0.8]);
//
//     return (
//         <>
//             <LoadingOverlay/>
//
//             <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D] text-white">
//                 {/* 1) Algorithms */}
//                 <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-12">
//                     <motion.div
//                         className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0"
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, ease: 'easeOut' }}
//                     >
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
//                             Algorithmic Artistry
//                         </h2>
//                         <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
//                             Transforming complex computational concepts into elegant visual experiences.
//                         </p>
//                     </motion.div>
//                     <div className="w-full md:w-1/2 lg:w-3/5 h-64 sm:h-80 md:h-[50vh] lg:h-[60vh]">
//                         <Canvas>
//                             <ambientLight intensity={0.4}/>
//                             <spotLight position={[5,10,5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700"/>
//                             <Suspense fallback={null}><GraphModel/></Suspense>
//                             <OrbitControls enableZoom={false} enablePan={false}/>
//                         </Canvas>
//                     </div>
//                 </section>
//
//                 {/* 2) Music */}
//                 <section className="h-screen overflow-hidden relative mb-16">
//                     <Canvas className="absolute inset-0 scale-105 sm:scale-110 md:scale-100 lg:scale-105">
//                         <ambientLight intensity={1}/>
//                         <spotLight
//                             position={[0, 3, 2]}
//                             angle={0.5}
//                             penumbra={0.8}
//                             intensity={150}
//                             color="#FFA500"
//                             castShadow
//                         />
//                         <Suspense fallback={null}>
//                             <VinylModel scrollProgress={vinylSpin}/>
//                         </Suspense>
//                         <OrbitControls enableZoom={false} enablePan={false}/>
//                     </Canvas>
//                     {/*<div className="absolute inset-6 flex-col items-center justify-center pointer-events-none">*/}
//                     {/*    <Music/>*/}
//                     {/*</div>*/}
//                     <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center pointer-events-none">
//                         <Music/>
//                     </div>
//
//                 </section>
//
//                 {/* 3) Stories */}
//                 <div className="pt-16">
//                     <StoriesSection/>
//                 </div>
//             </main>
//         </>
//     );
// };
//
// export default AboutPage;
//

// src/pages/AboutPage.jsx
import React, { Suspense, useRef, useState, useEffect, lazy } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Line } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import {aboutme} from "../constants/index.js";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import {useLocation, useNavigate} from "react-router-dom";
// import Music from '../components/Music';
// import VinylModel from '../models/VinylModel';
// import StoriesSection from '../sections/StoriesSection';
const VinylModel = lazy(() => import('../models/VinylModel.jsx'));
const StoriesSection = lazy(() => import('../sections/StoriesSection.jsx'));
const Music = lazy(() => import('../components/Music.jsx'));
// import CanvasLoader  from "../components/Loading.jsx";
const CanvasLoader = lazy(() => import('../components/Loading.jsx'));
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const GraphModel = ({ animated }) => {
    const ref = useRef();
    useFrame((state, delta) => {
        if (animated && ref.current) {
            ref.current.rotation.y += delta * 0.1;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });
    const nodes = [
        [-0.6, 0, 0],
        [0.6, 0, 0],
        [0, 0.8, 0.2],
    ];
    const edges = [[0, 1], [1, 2], [2, 0]];
    return (
        <group ref={ref} scale={1.5}>
            {nodes.map((pos, i) => (
                <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
                    <mesh position={pos}>
                        <sphereGeometry args={[0.1, 32, 32]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                    </mesh>
                </Float>
            ))}
            {edges.map(([a, b], i) => (
                <Line key={i} points={[nodes[a], nodes[b]]} lineWidth={1} color="#D4AF37" />
            ))}
        </group>
    );
};


function ScrollToResumeButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToResume = () => {
        if (location.pathname !== "/") {
            navigate("/"); // navigate to home
            // After navigation, scroll must be triggered — use effect or a delay
            // This can be tricky; simplest is to add a scroll handler on the home component
        } else {
            const el = document.getElementById("resume");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            {/*<button*/}
            {/*    onClick={scrollToResume}*/}
            {/*    className="inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
            {/*>*/}
            {/*    For a deeper look, scroll down to see my Resume ↓*/}
            {/*</button>*/}
            <button onClick={scrollToResume}
                    className="text-[#4cc9f0] text-600 hover:text-blue-400 font-semibold transition-colors duration-200"
            >
                View Resume →
            </button>

        </div>
    );
}



const AboutPage = () => {
    const containerRef = useRef();
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const vinylSpin = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);

    return (
        <>
            {/*<LoadingOverlay />*/}

            <main ref={containerRef} className="bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D] text-white">
                {/*<section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-12">*/}
                {/*        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">*/}
                {/*            About Me*/}
                {/*        </h2>*/}
                {/*<p className="text-base sm:text-lg lg:text-xl leading-relaxed mx-auto my-auto text-gray-500">*/}
                {/*    {aboutme.desc}*/}
                {/*</p>*/}
                {/*</section>*/}
                <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px8 lg:px-12 py-8 ">
                    <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                            {aboutme.title}
                        </h2>
                        <p className="text-base sm:text-lg text-left lg:text-xl text-gray-400 leading-relaxed whitespace-pre-line">
                            {aboutme.desc}
                        </p>
                        <p className = "text-[#FFD700]">
                            Scroll Down to see a creative page filled with my interests ↓
                        </p>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-12 lg:w-1/3 flex justify-center">
                        <img
                            src={aboutme.pic}
                            alt="Pradyun Devarakonda"
                            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-yellow-300"
                        />
                    </div>
                </section>

                {/* 1) Algorithms */}
                <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-12">
                    <motion.div
                        className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                            Algorithmic Artistry
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                            Transforming complex computational concepts into elegant visual experiences.
                        </p>
                    </motion.div>
                    <div className="w-full md:w-1/2 lg:w-3/5 h-64 sm:h-80 md:h-[50vh] lg:h-[60vh]">
                        <Canvas
                            dpr={isMobile ? 1 : [1, 2]} gl={{ antialias: !isMobile }}>
                            <ambientLight intensity={0.4} />
                            <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} color="#FFD700" />
                            <Suspense fallback={<CanvasLoader />}>
                                <GraphModel animated={!isMobile} />
                            </Suspense>
                            {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
                        </Canvas>
                    </div>
                </section>

                {/* 2) Music */}
                <section className="h-screen overflow-hidden relative ">
                    <Canvas className="absolute inset-0 scale-105 sm:scale-110 md:scale-100 lg:scale-105"
                            dpr={isMobile ? 1 : [1, 2]} gl={{ antialias: !isMobile }}>
                        <ambientLight intensity={1} />
                        <spotLight
                            position={[0, 3, 2]}
                            angle={0.5}
                            penumbra={0.8}
                            intensity={150}
                            color="#FFA500"
                            castShadow
                        />
                        <Suspense fallback={<CanvasLoader />}>
                            {/*<VinylModel scrollProgress={isMobile ? 0 : vinylSpin} />*/}
                            <VinylModel scrollProgress={vinylSpin} />
                        </Suspense>
                        {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
                    </Canvas>

                    <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center pointer-events-none">
                        <Music />
                    </div>
                </section>

                {/* 3) Stories */}
                <div>
                    <StoriesSection />
                </div>
            </main>
        </>
    );
};

export default AboutPage;
