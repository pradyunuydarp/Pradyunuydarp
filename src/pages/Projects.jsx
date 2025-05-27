// // // import React from 'react'
// // // import {myProjects} from '../constants/index.js'
// // // const Projects = () => {
// // //     const currproject = myProjects[0];
// // //
// // //     return (
// // //         <section className={"c-space my-20"}>
// // //             <p className={"head-text"}>
// // //                 My Work
// // //             </p>
// // //             <div className={"grid ld:grid-cols-2 md:grid-cols-1 mt-12 gap-5 w-4"}>
// // //                 <div className={"flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"}>
// // //                     <div className={"absolute top-0 right-0"}>
// // //                         <img src={currproject.spotlight} alt="spotlight"
// // //                              className={"w-full h-96 object-cover rounded-xl"}/>
// // //                     </div>
// // //                     <div className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"}
// // //                          style={currproject.logoStyle}>
// // //                         <img src={currproject.logo} alt="logo" className={"w-20 h-10 shadow-sm"}/>
// // //                     </div>
// // //                     <div className={"flex flex-col gap-5 text-white-600 my-5"}>
// // //                         <p className={"textt-white text-2xl font-semibold animatedText"}>
// // //                             {currproject.description};
// // //                         </p>
// // //                         <p className={""}>
// // //                             {currproject.subdesc}
// // //                         </p>
// // //                     </div>
// // //                     <div className={"flex items-center justify-between flex-wrap gap-5"}>
// // //                         <div className={"flex items-center gap-3"}>
// // //                             {currproject.tags.map((tag, index) => (
// // //                                 <div key={index} className={"tech-logo"}>
// // //                                     <img src={tag.path} alt={tag.name}/>
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                         <a className={"flex items-center gap-2 cursor-pointer text-white-600"} href={currproject.href} target={"_blank"} rel={"noreferrer"}>
// // //                             <p>
// // //                                 Check Live Site
// // //                             </p>
// // //                             <img src = {"assets/arrowup.png"} alt="arrow" className={"w-3 h-3"}/>
// // //                         </a>
// // //
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //
// // //         </section>
// // //     )
// // // }
// // // export default Projects
// //
//


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Html } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import FloatingParticles from '../models/FloatingParticles.jsx';
import Footer from "../sections/Footer.jsx";
const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-20 relative bg-[#1a1a2e] text-white pt-10 overflow-y-auto" id="projects">
        {/*<section className="relative h-screen max-h-screen w-full bg-[#1a1a2e] text-white pt-10 mb-20 c-space my-20 overflow-y-auto " id="publications">*/}

            {/*<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">*/}

            {/*<Canvas*/}
            {/*    camera={{ position: [0, 0, 8], fov: 75 }}*/}
            {/*    className="absolute inset-0 z-0 pointer-events-none"*/}
            {/*>*/}
            {/*    <ambientLight intensity={0.5} />*/}
            {/*    <pointLight position={[5, 10, 5]} intensity={1} />*/}
            {/*    <FloatingParticles />*/}
            {/*    <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />*/}
            {/*    <Html fullscreen style={{ pointerEvents: 'none' }}>*/}
            <div className="relative z-10 c-space bg-transparent text-white max-w-6xl ">
                <h2 className="
    text-4xl sm:text-5xl font-bold text-gray-200
  ">
                    My Projects
                </h2>
            </div>
            {/*<div className="flex items-center gap-2">*/}
            {/*    <p className="head-text flex items-center gap-2">*/}
            {/*        My Projects*/}
            {/*            <a*/}
            {/*                href="#projects"*/}
            {/*                className="inline-flex items-center cursor-pointer text-white-600"*/}
            {/*                target="_blank"*/}
            {/*                rel="noreferrer"*/}
            {/*            >*/}
            {/*        <img*/}
            {/*            src="assets/right-arrow.png"*/}
            {/*            alt="arrow"*/}
            {/*            className="w-4 h-4 -rotate-45 inline-block"*/}
            {/*            style={{ verticalAlign: 'middle' }}*/}
            {/*        />*/}
            {/*            </a>*/}
            {/*    </p>*/}
            {/*</div>*/}

            {/*<div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">*/}
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 ">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-30 h-10 shadow-sm " src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    {/*<div className="flex items-center justify-between flex-wrap gap-5">*/}
                    {/*    <div className="flex items-center gap-3">*/}
                    {/*        {currentProject.tags.map((tag, index) => (*/}
                    {/*            <div key={index} className="tech-logo">*/}
                    {/*                {*/}
                    {/*                        <img src={tag.path} alt={tag.name} height={"full"} width={"full"} />*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                {/*</div>*/}
                {/*    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">*/}
                {/*        {currentProject.tags.map((tag, index) => (*/}
                {/*            <div key={index} className="tech-logo flex items-center justify-center p-0">*/}
                {/*                <img src={tag.path} alt={tag.name} className="h-8 w-8 object-contain" />*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                    <div className="flex flex-wrap items-center gap-[2px]">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo flex items-center justify-center p-[2px]">
                                <img src={tag.path} alt={tag.name} className="h-6 w-6 object-contain" />
                            </div>
                        ))}
                    </div>


                    <div>
                    <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
                    {/*</Html>*/}
                {/*</Canvas>*/}
        </section>
    );
};

export default Projects;

// // src/sections/Projects.jsx
// import React, { Suspense, useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls, Html } from '@react-three/drei';
// import FloatingParticles from '../models/FloatingParticles';
// import {myProjects, mypublications} from '../constants';
// import DemoComputer from '../components/DemoComputer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
//
// function useMediaQuery(query) {
//     const [matches, setMatches] = useState(false);
//     useEffect(() => {
//         const mq = window.matchMedia(query);
//         setMatches(mq.matches);
//         const handler = (e) => setMatches(e.matches);
//         mq.addEventListener('change', handler);
//         return () => mq.removeEventListener('change', handler);
//     }, [query]);
//     return matches;
// }
//
// export default function Projects() {
//     const [index, setIndex] = useState(0);
//     const current = myProjects[index];
//     const isMobile = useMediaQuery('(max-width: 640px)');
//
//     useGSAP(() => {
//         gsap.fromTo(
//             `.pubAnimated`,
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
//         );
//     }, [index]);
//
//     const nav = (dir) =>
//         setIndex((i) =>
//             dir === 'prev'
//                 ? i === 0
//                     ? mypublications.length - 1
//                     : i - 1
//                 : i === mypublications.length - 1
//                     ? 0
//                     : i + 1
//         );
//
//     // The group we reuse in both canvases:
//     const Preview = (
//         <group scale={2.5} position={[2.5, -2, 0]} rotation={[0.03, -0.12, 0]}>
//             <DemoComputer texture={current.texture} />
//         </group>
//     );
//
//     return (
//         <section id="publications" className="relative h-screen w-full">
//             {/* full‐screen Canvas background */}
//             <Canvas
//                 camera={{ position: [0, 0, 8], fov: 75 }}
//                 className="absolute inset-0 z-0"
//             >
//                 <ambientLight intensity={2} />
//                 <pointLight position={[5, 10, 5]} intensity={5} />
//
//                 {/* particles always */}
//                 <FloatingParticles />
//
//                 {/* only show preview in *desktop* background */}
//                 {!isMobile && (
//                     <Center>
//                         <Suspense fallback={<CanvasLoader />}>{Preview}</Suspense>
//                     </Center>
//                 )}
//
//                 <OrbitControls
//                     // enableRotate={!isMobile}
//                     enableRotate={false}
//                     enablePan={true}
//                     enableZoom={false}
//                 />
//
//                 {/* overlay UI on top */}
//                 <Html fullscreen style={{ pointerEvents: 'none' }}>
//                     <div className="relative z-10 max-w-4xl px-6 py-16 text-white pointer-events-auto">
//                         <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-8 pubAnimated">
//                             My Projects
//                         </h2>
//
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div className="space-y-4 pubAnimated">
//                                 <h3 className="text-2xl font-semibold">{current.title}</h3>
//                                 <p className="text-gray-300">{current.desc}</p>
//                                 <p className="text-dark-gray-400">
//                                     {current.subdesc}
//                                     {/*{current.year}*/}
//                                 </p>
//                                 <div className="flex items-center justify-between flex-wrap gap-5">
//
//                                     <a
//                                         className="flex items-center gap-2 cursor-pointer text-white-600"
//                                         href={current.href}
//                                         target="_blank"
//                                         rel="noreferrer">
//                                         <p>Read more</p>
//                                         <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
//                                     </a>
//                                 </div>
//
//                                 <div className="flex justify-between items-center mt-7">
//                                     <button className="arrow-btn" onClick={() => handleNav('previous')}>
//                                         <img src="assets/left-arrow.png" alt="left arrow" />
//                                     </button>
//
//                                     <button className="arrow-btn" onClick={() => handleNav('next')}>
//                                         <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
//                                     </button>
//                                 </div>
//
//                             </div>
//                         </div>
//                         {/* empty right cell on desktop */}
//                         <div />
//                         {/*</div>*/}
//
//                         {/* on mobile, drop the preview *below* the text */}
//                         {isMobile && (
//                             <div className="mt-8 w-full h-64">
//                                 <Canvas
//                                     camera={{ position: [0, 0, 8], fov: 75 }}
//                                     className="w-full h-full"
//                                 >
//                                     <ambientLight intensity={5} />
//                                     <pointLight position={[5, 10, 5]} intensity={2} />
//                                     <Suspense fallback={<CanvasLoader />}>
//                                         <group scale={3.48} position={[-1, -4, 0]} rotation={[0.03, -0.05, 0]}>
//                                             <DemoComputer texture={current.texture} />
//                                         </group>
//                                         {/*<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />*/}
//                                     </Suspense>
//                                 </Canvas>
//                             </div>
//                         )}
//                     </div>
//                 </Html>
//             </Canvas>
//         </section>
//     );
// }
