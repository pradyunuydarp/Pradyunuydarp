// // // import { motion, useScroll, useTransform } from 'framer-motion';
// // // import { Canvas } from '@react-three/fiber';
// // // import { OrbitControls, useGLTF } from '@react-three/drei';
// // // import { useRef, Suspense } from 'react';
// // // import GokuHouseModel from "../models/GokuHouseModel.jsx";
// // // const GokuNimbusModel = () => {
// // //     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// // //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// // //     return (
// // //         <primitive
// // //             object={scene}
// // //             scale={2}
// // //             rotation={[0, Math.PI/2, 0]} // <== Modify this
// // //         />
// // //     );
// // //     // return <primitive object={scene} scale={2} />;
// // // };
// // //
// // // const StoriesSection = () => {
// // //     const ref = useRef();
// // //     const { scrollYProgress } = useScroll({
// // //         target: ref,
// // //         offset: ['start end', 'end start']
// // //     });
// // //
// // //     // compute x: from 0vw (left) to 75vw (right minus 25vw width)
// // //     const x = useTransform(scrollYProgress, [0, 1], ['0vw', '75vw']);
// // //     // gentle arc: up 10vh at mid, back to center
// // //     const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0vh', '-10vh', '0vh']);
// // //     // rotate from facing left (π) to facing right (0)
// // //     const rotateY = useTransform(scrollYProgress, [0, 1], [Math.PI, 0]);
// // //
// // //     return (
// // //         <section
// // //             ref={ref}
// // //             className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"
// // //         >
// // //             <Canvas>
// // //                 <ambientLight/>
// // //                 <directionalLight position={[10, 10, 5]} intensity={1.5}/>
// // //
// // //                 {/* Background model */}
// // //                 <GokuHouseModel/>
// // //
// // //             {/* Fixed right‐side overlay text */}
// // //             <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 max-w-md">
// // //                 <h2 className="text-4xl font-bold mb-4 text-white">Visual Storytelling</h2>
// // //                 <p className="text-lg text-gray-300 leading-relaxed">
// // //                     Journey through narratives that inspire innovation. Watch as Goku soars below this text,
// // //                     symbolizing the limitless possibilities when creativity meets technology.
// // //                 </p>
// // //             </div>
// // //
// // //             {/* Goku flying from left→right */}
// // //             <motion.div
// // //                 style={{ x, y, rotateY }}
// // //                 className="absolute top-1/2 left-0 w-1/4 h-96 transform -translate-y-1/2"
// // //             >
// // //                 <Canvas>
// // //
// // //                     <ambientLight intensity={0.5} />
// // //                     <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
// // //                     <Suspense fallback={null}>
// // //                         <GokuNimbusModel />
// // //                     </Suspense>
// // //                     <OrbitControls enableZoom={false} enablePan={false} />
// // //                 </Canvas>
// // //             </motion.div>
// // //             </Canvas>
// // //         </section>
// // //     );
// // // };
// // //
// // // export default StoriesSection;
// // import { motion, useScroll, useTransform } from 'framer-motion';
// // import { Canvas } from '@react-three/fiber';
// // import { OrbitControls, useGLTF } from '@react-three/drei';
// // import { useRef, Suspense } from 'react';
// // import GokuHouseModel from '../models/GokuHouseModel.jsx';
// //
// // const GokuNimbusModel = () => {
// //     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
// //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// //     return (
// //         <primitive
// //             object={scene}
// //             scale={2}
// //             rotation={[0, Math.PI / 2, 0]}
// //         />
// //     );
// // };
// //
// // const StoriesSection = () => {
// //     const ref = useRef();
// //     const { scrollYProgress } = useScroll({
// //         target: ref,
// //         offset: ['start end', 'end start']
// //     });
// //
// //     const x = useTransform(scrollYProgress, [0, 1], ['0vw', '75vw']);
// //     const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0vh', '-10vh', '0vh']);
// //     const rotateY = useTransform(scrollYProgress, [0, 1], [Math.PI, 0]);
// //
// //     return (
// //         <section
// //             ref={ref}
// //             className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]"
// //         >
// //             {/* 3D scene */}
// //             <Canvas className="absolute inset-0 z-0">
// //                 <ambientLight />
// //                 <directionalLight position={[10, 10, 5]} intensity={1.5} />
// //
// //                 <Suspense fallback={null}>
// //                     {/* Background: Goku's house */}
// //                     <GokuHouseModel />
// //                 </Suspense>
// //             </Canvas>
// //
// //             {/* Goku flying from left to right */}
// //             <motion.div
// //                 style={{ x, y, rotateY }}
// //                 className="absolute top-1/2 left-0 w-1/4 h-96 transform -translate-y-1/2 z-10 pointer-events-none"
// //             >
// //                 <Canvas>
// //                     <ambientLight intensity={0.5} />
// //                     <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
// //                     <Suspense fallback={null}>
// //                         <GokuNimbusModel />
// //                     </Suspense>
// //                     <OrbitControls enableZoom={false} enablePan={false} />
// //                 </Canvas>
// //             </motion.div>
// //
// //             {/* Right-side overlay text */}
// //             <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-20 max-w-md">
// //                 <h2 className="text-4xl font-bold mb-4 text-white">Visual Storytelling</h2>
// //                 <p className="text-lg text-gray-300 leading-relaxed">
// //                     Journey through narratives that inspire innovation. Watch as Goku soars below this text,
// //                     symbolizing the limitless possibilities when creativity meets technology.
// //                 </p>
// //             </div>
// //         </section>
// //     );
// // };
// //
// // export default StoriesSection;
// // src/components/StoriesSection.jsx
// import React, { useRef, Suspense } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import GokuHouseModel from '../models/GokuHouseModel.jsx';
//
// const GokuNimbusModel = () => {
//     const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');
//     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
//     return <primitive object={scene} scale={2} />;
// };
//
// const StoriesSection = () => {
//     const ref = useRef();
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ['start end', 'end start']
//     });
//
//     // X goes from flush-left → 75vw (so Goku stays within view)
//     const x = useTransform(scrollYProgress, [0, 1], ['0vw', '75vw']);
//     // Y follows a gentle arc
//     const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0vh', '-10vh', '0vh']);
//     // Rotate from facing left → facing right
//     const rotateY = useTransform(scrollYProgress, [0, 1], [Math.PI, 0]);
//
//     return (
//         <section
//             ref={ref}
//             className="relative w-full h-screen overflow-hidden bg-[#2D2D2D]"
//         >
//             {/* Full‐screen Canvas */}
//             <Canvas
//                 className="absolute inset-0"
//                 camera={{ position: [0, 1.5, 8], fov: 50 }}
//             >
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[10, 10, 10]} intensity={1} />
//
//                 <Suspense fallback={null}>
//                     {/* 1) Background: Goku’s house fills entire view */}
//                     <GokuHouseModel />
//
//                     {/* 2) Goku flying on curved path */}
//                     <motion.group style={{ x, y, rotateY }}>
//                         <GokuNimbusModel />
//                     </motion.group>
//                 </Suspense>
//
//                 <OrbitControls enableZoom={false} enablePan={false} />
//             </Canvas>
//
//             {/* Fixed overlay text on the right */}
//             <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 max-w-md">
//                 <h2 className="text-4xl font-bold mb-4 text-white">Visual Storytelling</h2>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                     Journey through narratives that inspire innovation. Watch as Goku soars below this text,
//                     symbolizing the limitless possibilities when creativity meets technology.
//                 </p>
//             </div>
//         </section>
//     );
// };
//
// export default StoriesSection;

// // src/sections/StoriesSection.jsx
// import { Canvas } from '@react-three/fiber';
// import {OrbitControls, SpotLight} from '@react-three/drei';
// import { Suspense } from 'react';
//
// import GokuHouseModel from '../models/GokuHouseModel';
// import MovingGoku from '../models/MovingGoku';
// import BreakingBad from "../models/BreakingBad.jsx";
// import ShenronModel from "../models/ShenronModel.jsx";
// import DBLogoModel from "../models/DBLogoModel.jsx";
// import KamisamaShrine from "../models/KamisamaShrine.jsx";
// import ThunderstormModel from "../models/ThunderStorm.jsx";
//
// import KameHouseModel from "../models/KameHouse.jsx";
// import SunnydayModel from "../models/Sunnyday.jsx";
//
// // export default function StoriesSection() {
// //     return (
// //         <section className="relative h-screen w-screen">
// //             {/* Fullscreen 3D Canvas Background */}
// //             <Canvas
// //                 className="absolute inset-0 z-0"
// //                 camera={{ position: [0, 1.5, 8], fov: 50 }}
// //             >
// //                 <ambientLight intensity={0.5} />
// //                 <directionalLight position={[10, 10, 10]} intensity={1} />
// //
// //                 <Suspense fallback={null}>
// //                     <GokuHouseModel />
// //                     <MovingGoku />
// //                 </Suspense>
// //
// //                 <OrbitControls enableZoom={false} enablePan={false} />
// //             </Canvas>
// //
// //             {/* Fixed Right-Aligned Text Overlay */}
// //             <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 text-white max-w-md">
// //                 <h2 className="text-4xl font-bold mb-4">Visual Storytelling</h2>
// //                 <p className="text-lg leading-relaxed">
// //                     Journey through narratives that inspire innovation.
// //                     <br />
// //                     Watch as Goku soars through the canvas, symbolizing the limitless possibilities when creativity meets technology.
// //                 </p>
// //             </div>
// //             <Canvas>
// //                 <ambientLight intensity={0.5} />
// //                 <directionalLight position={[10, 10, 10]} intensity={1} />
// //                 <Suspense fallback={null}>
// //                     <BreakingBad />
// //                 </Suspense>
// //                 <OrbitControls enableZoom={false} enablePan={false} />
// //             </Canvas>
// //         </section>
// //     );
// // }
// export default function StoriesSection() {
//     return (
//         <>
//             {/* Goku Section */}
//             <section className="relative h-screen w-screen">
//                 <Canvas
//                     className="absolute inset-0 z-0"
//                     camera={{position: [0, 1.5, 8], fov: 50}}
//                 >
//                     <ambientLight intensity={0.5}/>
//                     <directionalLight position={[10, 10, 10]} intensity={1}/>
//                     <Suspense fallback={null}>
//                         <DBLogoModel/>
//                         <SunnydayModel/>
//                         <KameHouseModel/>
//                         {/*<GokuHouseModel/>*/}
//                         <MovingGoku/>
//                         {/*<KamisamaShrine/>*/}
//                         {/*<ShenronModel/>*/}
//                     </Suspense>
//                     <OrbitControls enableZoom={false} enablePan={false}/>
//                 </Canvas>
//
//                 {/*<div className="absolute right-10 top-1/3 transform -translate-y-1/2 z-10 text-white max-w-md">*/}
//                 {/*    <h2 className="text-4xl font-bold mb-4 text-[#1C4595]">Great Stories</h2>*/}
//                 {/*        <p className="text-lg leading-relaxed text-[#FF9922] font-semibold">*/}
//                 {/*        Journey through narratives that inspire innovation.*/}
//                 {/*        <br />*/}
//                 {/*        Watch as Goku soars through the canvas, symbolizing the limitless possibilities when creativity meets technology.*/}
//                 {/*    </p>*/}
//                 {/*</div>*/}
//                 {/*<div className="absolute right-10 top-0.58 transform -translate-y-1/2 z-10 max-w-md">*/}
//                 {/*    <div className="bg-[#1C4595] bg-opacity-90 rounded-xl shadow-lg p-6 border-2 border-[#FF6A00]">*/}
//                 {/*        <h2 className="text-4xl font-bold mb-4 text-[#FF6A00]">Great Stories</h2>*/}
//                 {/*        <p className="text-lg leading-relaxed text-white font-semibold">*/}
//                 {/*            Journey through narratives that inspire innovation.*/}
//                 {/*            <br/>*/}
//                 {/*            Watch as Goku soars through the canvas, symbolizing the limitless possibilities when*/}
//                 {/*            creativity meets technology.*/}
//                 {/*        </p>*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//
//
//             </section>
//             <div className="absolute right-10 top-0.58 transform -translate-y-1/2 z-10 max-w-md">
//                 <div className="bg-[#1C4595] bg-opacity-90 rounded-xl shadow-lg p-6 border-4 border-[#FF6A00]">
//                     <h2 className="text-4xl font-bold mb-4 text-[#FF6A00]">Great Stories</h2>
//                     <p className="text-lg leading-relaxed text-white font-semibold">
//                         Journey through narratives that inspire innovation.
//                         <br/>
//                         Watch as Goku soars through the canvas, symbolizing the limitless possibilities when
//                         creativity meets technology.
//                     </p>
//                 </div>
//             </div>
//             <section className="relative h-screen w-screen">
//                 <Canvas>
//                     <ambientLight intensity={0.1}/>
//                     {/*<directionalLight position={[0, 1, 5]} intensity={1} />*/}
//                     <pointLight position={[0, 0, 4]} intensity={10}/>
//                     {/*<SpotLight position={[0,3,5]} angle={0.2} penumbra={0.001} intensity={100} />*/}
//                     <Suspense fallback={null}>
//                         <ThunderstormModel/>
//                         <KamisamaShrine/>
//                         <ShenronModel/>
//                     </Suspense>
//                 </Canvas>
//             </section>
//             {/* Breaking Bad Section */}
//
//             <div className="absolute left-10  transform -translate-y-1/2 z-10 max-w-md">
//                 <div
//                     // className="bg-[#1A1A1A] bg-opacity-95 bg-[#b2c3953] border-2 border-[#4FB1BC] rounded-xl shadow-2xl p-6">
//                     className="bg-[#1A1A1A] bg-opacity-95 bg-[#2c3953] border-2 border-[#722018] border-4 rounded-xl shadow-2xl p-6">
//                     {/*<h2 className="text-4xl font-bold mb-4 text-[#F0C02F]">Cinematic Universes</h2>*/}
//                     <h2 className="text-4xl font-bold mb-4 text-[#b39255]">Cinematic Universes</h2>
//                     <p className="text-lg leading-relaxed text-[#dcd492] font-medium">
//                         Dive deeper into iconic stories that have shaped our culture.
//                         <br/>
//                         {/*This scene pays homage to <span className="text-[#29773e] font-semibold">Br</span><span*/}
//                         {/*className="text-[#7ADFE1] font-semibold">eaking</span> <span*/}
//                         {/*className="text-[#29773e] font-semibold">Ba</span><span*/}
//                         {/*className="text-[#7ADFE1] font-semibold">d</span> —*/}
//                         {/*a legacy of visual grit and storytelling mastery.*/}
//                         This scene pays homage to <span className="text-[#29773e] font-semibold">Br</span><span
//                         className="text-[#032202] font-semibold">eaking</span> <span
//                         className="text-[#29773e] font-semibold">Ba</span><span
//                         className="text-[#032202] font-semibold">d</span> —
//                         a legacy of visual grit and storytelling mastery.
//                         {/*his scene pays homage to <span*/}
//                         {/*className="text-[#29773e] font-semibold">Breaking Bad</span> —*/}
//                         {/*a legacy of visual grit and storytelling mastery.*/}
//                     </p>
//                 </div>
// //             </div>
//             <section className="relative h-screen w-screen">
//                 <Canvas
//                     className="absolute inset-0 z-0"
//                     camera={{position: [0, 1.5, 8], fov: 50}}
//                 >
//                     <ambientLight intensity={0.5}/>
//                     <directionalLight position={[10, 10, 10]} intensity={1}/>
//                     <Suspense fallback={null}>
//                         <BreakingBad/>
//                     </Suspense>
//                     <OrbitControls enableZoom={false} enablePan={false}/>
//                 </Canvas>
//
//                 {/*<div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 text-white max-w-md">*/}
//                 {/*    <h2 className="text-4xl font-bold mb-4">Cinematic Universes</h2>*/}
//                 {/*    <p className="text-lg leading-relaxed">*/}
//                 {/*        Dive deeper into iconic stories that have shaped our culture.*/}
//                 {/*        <br/>*/}
//                 {/*        This scene pays homage to Breaking Bad — a legacy of visual grit and storytelling mastery.*/}
//                 {/*    </p>*/}
//                 {/*</div>*/}
//
//
//             </section>
//         </>
//     );
// }

// src/sections/StoriesSection.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';

import DBLogoModel from '../models/DBLogoModel.jsx';
import SunnydayModel from '../models/Sunnyday.jsx';
import KameHouseModel from '../models/KameHouse.jsx';
import MovingGoku from '../models/MovingGoku.jsx';
import ThunderstormModel from '../models/ThunderStorm.jsx';
import KamisamaShrine from '../models/KamisamaShrine.jsx';
import ShenronModel from '../models/ShenronModel.jsx';
import BreakingBad from '../models/BreakingBad.jsx';

export default function StoriesSection() {
    // 1) Mobile detection hook
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => {
            setIsMobile(
                window.innerWidth < 768 ||
                /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
            );
        };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <>
            {/* --- Goku + House + Logos --- */}
            <section className="relative h-screen w-screen overflow-hidden">
                <Canvas
                    className="absolute inset-0 z-0"
                    camera={{position: [0, 1.5, 8], fov: 50}}
                    dpr={isMobile ? 1 : [1, 2]} gl={{ antialias: !isMobile }}
                >
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[10, 10, 10]} intensity={1}/>

                    <Suspense fallback={<CanvasLoader />}>
                        <DBLogoModel/>
                        <SunnydayModel/>
                        <KameHouseModel/>
                        <MovingGoku/>
                    </Suspense>

                    {/* disable controls on mobile */}
                    {!isMobile && (
                        <OrbitControls enableZoom={false} enablePan={false}/>
                    )}
                </Canvas>

                {/* Overlay "Great Stories" card */}
                {/*<div className="absolute right-6 top-1/3 transform -translate-y-1/2 z-10">*/}
                {/*    <div className="bg-[#1C4595] bg-opacity-90 rounded-xl shadow-lg p-6 border-4 border-[#FF6A00] max-w-sm">*/}
                {/*        <h2 className="text-3xl font-bold mb-2 text-[#FF6A00]">Great Stories</h2>*/}
                {/*        <p className="text-white font-semibold leading-relaxed">*/}
                {/*            Journey through narratives that inspire innovation.*/}
                {/*            <br />*/}
                {/*            Watch as Goku soars through the canvas, symbolizing limitless possibilities.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div
                    className="absolute right-10 bottom-4 transform -translate-y-1/2 z-10 max-w-md
             max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:top-[60%] max-sm:px-4"
                >
                    <div
                        className="bg-[#1C4595] bg-opacity-90 rounded-xl shadow-lg p-6
               border-4 border-[#FF6A00] max-w-sm max-sm:max-w-xs"
                    >
                        <h2 className="text-3xl font-bold mb-2 text-[#FF6A00] max-sm:text-2xl max-sm:text-center">Great
                            Stories</h2>
                        <p className="text-white font-semibold leading-relaxed max-sm:text-sm max-sm:text-center">
                            Journey through narratives that inspire innovation.
                            <br/>
                            Watch as Goku soars through the canvas, symbolizing limitless possibilities.
                        </p>
                    </div>
                </div>


                {/*<div className="absolute right-10 top-0.58 transform -translate-y-1/2 z-10 max-w-md">*/}
                {/*    <div className="bg-[#1C4595] bg-opacity-90 rounded-xl shadow-lg p-6 border-4 border-[#FF6A00]">*/}
                {/*    <h2 className="text-4xl font-bold mb-4 text-[#FF6A00]">Great Stories</h2>*/}
                {/*    <p className="text-lg leading-relaxed text-white font-semibold">*/}
                {/*    Journey through narratives that inspire innovation.*/}
                {/*    <br/>*/}
                {/*     Watch as Goku soars through the canvas, symbolizing the limitless possibilities when*/}
                {/*     creativity meets technology.*/}
                {/*     </p>*/}
                {/*     </div>*/}

                {/*</div>*/}
            </section>

            {/* --- Storm + Shrine + Shenron --- */}
            <section className="relative h-screen w-screen overflow-hidden">
                <Canvas className="absolute inset-0 z-0" camera={{position: [0, 2, 8], fov: 60}}
                        dpr={isMobile ? 1 : [1, 2]} gl={{ antialias: !isMobile }}>
                    <ambientLight intensity={0.1}/>
                    <pointLight position={[2, 0, 4]} intensity={10}/>

                    <Suspense fallback={<CanvasLoader />}>
                        <ThunderstormModel/>
                        <KamisamaShrine/>
                        <ShenronModel/>
                    </Suspense>

                    {!isMobile && (
                        <OrbitControls enableZoom={false} enablePan={false}/>
                    )}
                </Canvas>
            </section>

            {/* --- Breaking Bad --- */}
            <section className="relative h-screen w-screen overflow-hidden">
                <Canvas
                    className="absolute inset-0 z-0"
                    camera={{position: [0, 1.5, 8], fov: 50}}
                    dpr={isMobile ? 1 : [1, 2]} gl={{ antialias: !isMobile }}
                >
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[10, 10, 10]} intensity={1}/>

                    <Suspense fallback={<CanvasLoader />}>
                        <BreakingBad/>
                    </Suspense>

                    {!isMobile && (
                        <OrbitControls enableZoom={false} enablePan={false}/>
                    )}
                </Canvas>

                {/*<div className="absolute left-6 top-1/3 transform -translate-y-1/2 z-10">*/}
                {/*    <div className="bg-[#2c3953] bg-opacity-95 rounded-xl shadow-2xl p-6 border-4 border-[#722018] max-w-sm">*/}
                {/*        <h2 className="text-3xl font-bold mb-2 text-[#b39255]">Cinematic Universes</h2>*/}
                {/*        <p className="text-[#dcd492] font-medium leading-relaxed">*/}
                {/*            Dive deeper into iconic stories that have shaped our culture.*/}
                {/*            <br />*/}
                {/*            This scene pays homage to <span className="text-[#29773e]">Breaking</span>*/}
                {/*            <span className="text-[#032202]"> Bad</span>—a legacy of visual grit.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="absolute left-10 bottom-1/2 transform -translate-y-1/2 z-10 max-w-md">*/}
                {/*    <div*/}
                {/*        // className="bg-[#1A1A1A] bg-opacity-95 bg-[#b2c3953] border-2 border-[#4FB1BC] rounded-xl shadow-2xl p-6">*/}
                {/*        className="bg-[#1A1A1A] bg-opacity-95 bg-[#2c3953] border-2 border-[#722018] border-4 rounded-xl shadow-2xl p-6">*/}
                {/*        /!*<h2 className="text-4xl font-bold mb-4 text-[#F0C02F]">Cinematic Universes</h2>*!/*/}
                {/*        <h2 className="text-4xl font-bold mb-4 text-[#b39255]">Cinematic Universes</h2>*/}
                {/*        <p className="text-lg leading-relaxed text-[#dcd492] font-medium">*/}
                {/*            Dive deeper into iconic stories that have shaped our culture.*/}
                {/*            <br/>*/}
                {/*            This scene pays homage to <span className="text-[#29773e] font-semibold">Br</span><span*/}
                {/*            className="text-[#032202] font-semibold">eaking</span> <span*/}
                {/*            className="text-[#29773e] font-semibold">Ba</span><span*/}
                {/*            className="text-[#032202] font-semibold">d</span> —*/}
                {/*            a legacy of visual grit and storytelling mastery.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div
                    className="absolute left-10 top-1 transform translate-y-1/2 z-10 max-w-md
             max-sm:left-1/2 max-sm:translate-x-[-50%] max-sm:bottom-[60%] max-sm:px-4"
                >
                    <div
                        className="bg-[#1A1A1A] bg-opacity-95 bg-[#2c3953] border-4 border-[#722018] rounded-xl shadow-2xl p-6
               max-sm:max-w-xs"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-[#b39255] max-sm:text-2xl max-sm:text-center">
                            Cinematic Universes
                        </h2>
                        <p className="text-lg leading-relaxed text-[#dcd492] font-medium max-sm:text-sm max-sm:text-center">
                            Dive deeper into iconic stories that have shaped our culture.
                            <br/>
                            This scene pays homage to <span className="text-[#29773e] font-semibold">Br</span><span
                            className="text-[#032202] font-semibold">eaking</span> <span
                            className="text-[#29773e] font-semibold">Ba</span><span
                            className="text-[#032202] font-semibold">d</span> —
                            a legacy of visual grit and storytelling mastery.
                        </p>
                    </div>
                </div>

            </section>
        </>
    );
}
