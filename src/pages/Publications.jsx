// // // // import { motion } from 'framer-motion';
// // // //
// // // // const Publications = () => {
// // // //   // TODO: Add your publications data
// // // //   const publications = [
// // // //     {
// // // //       title: "[Publication Title]",
// // // //       authors: "[Authors]",
// // // //       journal: "[Journal/Conference Name]",
// // // //       year: "[Year]",
// // // //       link: "#"
// // // //     },
// // // //     // Add more publications...
// // // //   ];
// // // //
// // // //   return (
// // // //       // <section id="publications" className="min-h-screen py-20 px-4 bg-[#1a1a2e]">
// // // //       <section id="publications" className="c-space my-20">
// // // //         <p className="head-text">Publications</p>
// // // //         <div className="max-w-4xl mx-auto">
// // // //           {/*<h2 className="text-4xl font-bold text-[#4cc9f0] mb-12">Publications</h2>*/}
// // // //           <div className="space-y-8">
// // // //             {publications.map((pub, index) => (
// // // //                 <motion.div
// // // //                     key={index}
// // // //                     initial={{opacity: 0, x: -50}}
// // // //                     whileInView={{opacity: 1, x: 0}}
// // // //                     transition={{duration: 0.5}}
// // // //                     className="bg-[#252542] p-6 rounded-lg"
// // // //                 >
// // // //                   <h3 className="text-xl font-bold text-[#720967] mb-2">{pub.title}</h3>
// // // //                   <p className="text-gray-300 mb-2">{pub.authors}</p>
// // // //                   <p className="text-[#4cc9f0]">{pub.journal}, {pub.year}</p>
// // // //                   <a
// // // //                       href={pub.link}
// // // //                       className="inline-block mt-4 text-white hover:text-[#4cc9f0] transition-colors"
// // // //                   >
// // // //                     Read More →
// // // //                   </a>
// // // //                 </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //   );
// // // // };
// // // //
// // // // export default Publications;
// // //
// // // import { motion } from 'framer-motion';
// // // import {mypublications} from "../constants/index.js";
// // // // const Publications = () => {
// // // //   const publications = [
// // // //     {
// // // //       title: "A Deep Learning Approach to Pose Estimation",
// // // //       authors: "Pradyun Devarakonda, John Smith",
// // // //       journal: "IEEE CVPR",
// // // //       year: "2024",
// // // //       link: "#"
// // // //     },
// // // //     {
// // // //       title: "Optimizing Neural Rendering for Web Applications",
// // // //       authors: "Pradyun Devarakonda, Alice Doe",
// // // //       journal: "ACM SIGGRAPH",
// // // //       year: "2023",
// // // //       link: "#"
// // // //     },
// // // //     // Add more entries here...
// // // //   ];
// // //
// // //   return (
// // //       <section id="publications" className="c-space my-20 bg-[#1a1a2e]text-white pt-10">
// // //         <p className="head-text">Publications</p>
// // //         <div className="max-w-4xl mx-auto">
// // //           <div className="space-y-10 pt-10">
// // //             {publications.map((pub, index) => (
// // //                 <motion.div
// // //                     key={index}
// // //                     initial={{ opacity: 0, x: -50 }}
// // //                     whileInView={{ opacity: 1, x: 0 }}
// // //                     transition={{ duration: 0.5 }}
// // //                     className="bg-[#1e293b] p-6 rounded-lg shadow-lg"
// // //                 >
// // //                   <h3 className="text-2xl font-semibold text-[#4cc9f0] mb-2">{pub.title}</h3>
// // //                   <p className="text-gray-300 mb-1">{pub.authors}</p>
// // //                   <p className="text-[#94a3b8] italic">{pub.journal}, {pub.year}</p>
// // //                   <a
// // //                       href={pub.link}
// // //                       className="inline-block mt-4 text-[#4cc9f0] hover:text-[#38bdf8] transition-colors duration-300"
// // //                   >
// // //                     Read More →
// // //                   </a>
// // //                 </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //   );
// // // };
// // //
// // // export default Publications;
// //
// //
// // import gsap from 'gsap';
// // import { useGSAP } from '@gsap/react';
// // import {Suspense, useState} from 'react';
// // import { mypublications } from '../constants';
// // import DemoComputer from "../components/DemoComputer.jsx";
// // import {Canvas} from "@react-three/fiber";
// // import {Center, OrbitControls} from "@react-three/drei";
// // import CanvasLoader from "../components/Loading.jsx";
// // const publicationCount = mypublications.length;
// //
// // const Publications = () => {
// //   const [selectedIndex, setSelectedIndex] = useState(0);
// //
// //   const handleNavigation = (direction) => {
// //     setSelectedIndex((prevIndex) => {
// //       if (direction === 'previous') {
// //         return prevIndex === 0 ? publicationCount - 1 : prevIndex - 1;
// //       } else {
// //         return prevIndex === publicationCount - 1 ? 0 : prevIndex + 1;
// //       }
// //     });
// //   };
// //
// //   const currentPublication = mypublications[selectedIndex];
// //
// //   useGSAP(() => {
// //     gsap.fromTo(
// //         `.pubAnimated`,
// //         { opacity: 0, y: 20 },
// //         { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
// //     );
// //   }, [selectedIndex]);
// //
// //   return (
// //       <section id="publications" className="c-space my-30 bg-[#1a1a2e] text-white pt-10">
// //         <p className="head-text">Publications</p>
// //
// //         <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
// //           <div className="flex flex-col gap-5 p-8 relative shadow-2xl shadow-black-200 bg-[#1a1a2e] rounded-lg">
// //             <p className="text-2xl text-white font-bold pubAnimated">{currentPublication.title}</p>
// //             <p className="text-gray-300 pubAnimated">{currentPublication.authors}</p>
// //             <p className="text-[#4cc9f0] pubAnimated">
// //               {currentPublication.journal}, {currentPublication.year}
// //             </p>
// //
// //             <a
// //                 href={currentPublication.link}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-block mt-4 text-white hover:text-[#4cc9f0] transition-colors pubAnimated"
// //             >
// //               Read More →
// //             </a>
// //
// //             <div className="flex justify-between items-center mt-10">
// //               <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
// //                 <img src="assets/left-arrow.png" alt="left arrow"/>
// //               </button>
// //
// //               <button className="arrow-btn" onClick={() => handleNavigation('next')}>
// //                 <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
// //               </button>
// //             </div>
// //           </div>
// //
// //           {/* Optional: Add a symbolic image, figure, or animation here */}
// //           {/*<div className="border border-black-300 bg-black-200 rounded-lg h-96 flex items-center justify-center text-white">*/}
// //           {/*  <p className="text-xl text-center">Explore the ideas shaping research.</p>*/}
// //           {/*</div>*/}
// //           <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
// //             <Canvas>
// //               <ambientLight intensity={Math.PI}/>
// //               <directionalLight position={[10, 10, 5]}/>
// //               <Center>
// //                 <Suspense fallback={<CanvasLoader/>}>
// //                   <group scale={2.5} position={[0, -3, 0]} rotation={[0, -0.025, 0]}>
// //                     <DemoComputer texture={currentPublication.texture}/>
// //                   </group>
// //                 </Suspense>
// //               </Center>
// //               <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
// //             </Canvas>
// //           </div>
// //         </div>
// //       </section>
// //   );
// // };
// //
// // export default Publications;
// // // src/components/Publications.jsx
// // import React, { Suspense, useState } from 'react';
// // import gsap from 'gsap';
// // import { useGSAP } from '@gsap/react';
// // import { Canvas } from '@react-three/fiber';
// // import { Center, OrbitControls, Html } from '@react-three/drei';
// // import FloatingParticles from '../models/FloatingParticles'; // adjust path
// // import { mypublications } from '../constants';
// // import DemoComputer from '../components/DemoComputer.jsx';
// // import CanvasLoader from '../components/Loading.jsx';
// //
// // const Publications = () => {
// //   const [selectedIndex, setSelectedIndex] = useState(0);
// //   const current = mypublications[selectedIndex];
// //
// //   useGSAP(
// //       () => {
// //         gsap.fromTo(
// //             `.pubAnimated`,
// //             { opacity: 0, y: 20 },
// //             { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
// //         );
// //       },
// //       [selectedIndex]
// //   );
// //
// //   const handleNav = (dir) => {
// //     setSelectedIndex((i) =>
// //         dir === 'prev' ? (i === 0 ? mypublications.length - 1 : i - 1)
// //             : (i === mypublications.length - 1 ? 0 : i + 1)
// //     );
// //   };
// //
// //   return (
// //       <section className="relative h-screen w-full bg-[#1a1a2e] text-white overflow-hidden">
// //         <Canvas
// //             camera={{ position: [0, 0, 8], fov: 75 }}
// //             className="absolute inset-0 z-0 pointer-events-none"
// //         >
// //           <ambientLight intensity={0.5} />
// //           <pointLight position={[5, 10, 5]} intensity={1} />
// //           <FloatingParticles />
// //           <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
// //
// //           {/* Overlay the HTML UI */}
// //           <Html fullscreen style={{ pointerEvents: 'none' }}>
// //             <div className="pointer-events-auto max-w-6xl mx-auto px-6 py-16 c-space">
// //               <p className="head-text">Publications</p>
// //
// //               <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
// //                 {/* Details */}
// //                 <div className="flex flex-col gap-5 p-8 bg-[#1a1a2e] rounded-lg shadow-2xl pointer-events-auto">
// //                   <p className="text-2xl font-bold pubAnimated">{current.title}</p>
// //                   <p className="text-gray-300 pubAnimated">{current.authors}</p>
// //                   <p className="text-[#4cc9f0] pubAnimated">
// //                     {current.journal}, {current.year}
// //                   </p>
// //
// //                   <a
// //                       href={current.link}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="inline-block mt-4 text-white hover:text-[#4cc9f0] pubAnimated"
// //                   >
// //                     Read More →
// //                   </a>
// //
// //                   <div className="flex justify-between items-center mt-10">
// //                     <button onClick={() => handleNav('prev')} className="arrow-btn">
// //                       <img src="assets/left-arrow.png" alt="prev" />
// //                     </button>
// //                     <button onClick={() => handleNav('next')} className="arrow-btn">
// //                       <img src="assets/right-arrow.png" alt="next" className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //
// //                 {/* 3D Preview */}
// //                 <div className="bg-black-200 rounded-lg shadow-lg pointer-events-auto">
// //                   <Canvas>
// //                     <ambientLight intensity={Math.PI} />
// //                     <directionalLight position={[10, 10, 5]} />
// //                     <Center>
// //                       <Suspense fallback={<CanvasLoader />}>
// //                         <group scale={2.5} position={[0, -3, 0]} rotation={[0, -0.025, 0]}>
// //                           <DemoComputer texture={current.texture} />
// //                         </group>
// //                       </Suspense>
// //                     </Center>
// //                     <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
// //                   </Canvas>
// //                 </div>
// //               </div>
// //             </div>
// //           </Html>
// //         </Canvas>
// //       </section>
// //   );
// // };
// //
// // export default Publications;
//

//
import React, { Suspense, useState } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Html } from '@react-three/drei';
import FloatingParticles from '../models/FloatingParticles'; // adjust path
import { mypublications } from '../constants';
import DemoComputer from '../components/DemoComputer.jsx';
import CanvasLoader from '../components/Loading.jsx';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}
//
//
// const isMobile = useMediaQuery('(max-width: 640px)');

const Publications = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = mypublications[selectedIndex];
  const isMobile = useMediaQuery('(max-width: 640px)');
  useGSAP(
      () => {
        gsap.fromTo(
            `.pubAnimated`,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
        );
      },
      [selectedIndex]
  );

  const handleNav = (dir) => {
    setSelectedIndex((i) =>
        dir === 'prev' ? (i === 0 ? mypublications.length - 1 : i - 1)
            : (i === mypublications.length - 1 ? 0 : i + 1)
    );
  };

  return (
      <section className="relative h-screen max-h-screen w-full bg-[#1a1a2e] text-white pt-10 mb-20 c-space my-20 " id="publications">
        <Canvas
            camera={{ position: [0, 0, 8], fov: 75 }}
            className="absolute inset-0 z-0 pointer-events-none"
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 5]} intensity={1} />
          <FloatingParticles />
          <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />

          {/* Overlay the HTML UI */}
          <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div className="relative bg-transparent text-white max-w-6xl ">
              <h2 className="
    text-4xl sm:text-5xl font-bold text-gray-200
  ">
                Publications
              </h2>
            </div>
            <div className="pointer-events-auto max-w-7xl mx-auto px-6 py-16 c-space">
              <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 h-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-auto bg-[#1a1a2e] h-full rounded-lg shadow-2xl shadow-black-200">
                  <div className="absolute top-0 right-0">
                    <img src={current.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                  </div>
                  <div className="flex flex-col gap-5 text-white-600">
                    <p className="text-white text-2xl font-semibold animatedText">{current.title}</p>

                    <p className="animatedText">{current.authors}</p>
                    <p className="animatedText">{current.journal}, {current.year}</p>

                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-5">

                    <a
                        className="flex items-center gap-2 cursor-pointer text-white-600"
                        href={current.href}
                        target="_blank"
                        rel="noreferrer">
                      <p>Read more</p>
                      <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNav('previous')}>
                      <img src="assets/left-arrow.png" alt="left arrow" />
                    </button>

                    <button className="arrow-btn" onClick={() => handleNav('next')}>
                      <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-full">
                  <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                      <Suspense fallback={<CanvasLoader />}>
                        <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                          <DemoComputer texture={current.texture} />
                        </group>
                      </Suspense>
                    </Center>
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                  </Canvas>
                </div>
              </div>
              </div>
            {/*</div>*/}
          </Html>
        </Canvas>
      </section>


  );
};

export default Publications;

// // src/sections/Publications.jsx
// import React, { Suspense, useState, useEffect } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls, Html } from '@react-three/drei';
// import FloatingParticles from '../models/FloatingParticles';
// import { mypublications } from '../constants';
// import DemoComputer from '../components/DemoComputer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
//
// function useMediaQuery(query) {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia(query);
//     setMatches(mq.matches);
//     const handler = (e) => setMatches(e.matches);
//     mq.addEventListener('change', handler);
//     return () => mq.removeEventListener('change', handler);
//   }, [query]);
//   return matches;
// }
//
// export default function Publications() {
//   const [index, setIndex] = useState(0);
//   const current = mypublications[index];
//   const isMobile = useMediaQuery('(max-width: 640px)');
//
//   useGSAP(() => {
//     gsap.fromTo(
//         `.pubAnimated`,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
//     );
//   }, [index]);
//
//   const nav = (dir) => {
//     setIndex((i) =>
//         dir === 'prev'
//             ? i === 0
//                 ? mypublications.length - 1
//                 : i - 1
//             : i === mypublications.length - 1
//                 ? 0
//                 : i + 1
//     );
//   };
//
//   return (
//       <section
//           id="publications"
//           className="relative h-screen w-full bg-[#1a1a2e] text-white overflow-hidden mb-20 c-space my-20"
//       >
//         {/* 1) Full‐screen background Canvas: particles + desktop preview */}
//         <Canvas
//             camera={{ position: [0, 0, 8], fov: 75 }}
//             className="absolute inset-0 z-0 pointer-events-none"
//         >
//           <ambientLight intensity={0.5} />
//           <pointLight position={[5, 10, 5]} intensity={1} />
//           <FloatingParticles />
//
//           {/* Desktop preview behind the UI */}
//           {!isMobile && (
//               <Center>
//                 <Suspense fallback={<CanvasLoader />}>
//                   <group
//                       scale={2.5}
//                       position={[2.5, -2, 0]}
//                       rotation={[0.03, -0.12, 0]}
//                   >
//                     <DemoComputer texture={current.texture} />
//                   </group>
//                 </Suspense>
//               </Center>
//           )}
//
//           <OrbitControls
//               enableRotate={false}
//               enableZoom={false}
//               enablePan={false}
//           />
//
//           {/* 2) HTML UI overlay */}
//           <Html fullscreen style={{ pointerEvents: 'none' }}>
//             <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 pointer-events-auto">
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-8 pubAnimated">
//                 Publications
//               </h2>
//
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Details */}
//                 <div className="space-y-4 pubAnimated">
//                   <h3 className="text-2xl font-semibold">{current.title}</h3>
//                   <p className="text-gray-300">{current.authors}</p>
//                   <p className="text-[#4cc9f0]">
//                     {current.journal}, {current.year}
//                   </p>
//                   <div className="flex items-center justify-between flex-wrap gap-5">
//                     <a
//                         className="flex items-center gap-2 text-white-600"
//                         href={current.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                       Read more
//                       <img
//                           src="assets/arrow-up.png"
//                           alt="arrow"
//                           className="w-3 h-3"
//                       />
//                     </a>
//                   </div>
//                   <div className="flex justify-between items-center mt-7">
//                     <button
//                         className="arrow-btn"
//                         onClick={() => nav('prev')}
//                     >
//                       ←
//                     </button>
//                     <button
//                         className="arrow-btn"
//                         onClick={() => nav('next')}
//                     >
//                       →
//                     </button>
//                   </div>
//                 </div>
//
//                 {/* Spacer on desktop */}
//                 <div />
//               </div>
//             </div>
//           </Html>
//         </Canvas>
//
//         {/* 3) Mobile‐only inline Canvas below the UI */}
//         {isMobile && (
//             <div className="mt-8 w-full h-64">
//               <Canvas
//                   camera={{ position: [0, 0, 8], fov: 75 }}
//                   className="w-full h-full"
//               >
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[5, 10, 5]} intensity={1} />
//                 <Suspense fallback={<CanvasLoader />}>
//                   <group
//                       scale={3.0}
//                       position={[-1, -3.5, 0]}
//                       rotation={[0.03, -0.05, 0]}
//                   >
//                     <DemoComputer texture={current.texture} />
//                   </group>
//                 </Suspense>
//                 {/* disable controls on mobile preview */}
//               </Canvas>
//             </div>
//         )}
//       </section>
//   );
// }



// src/sections/Publications.jsx
// import React, { Suspense, useState } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls, Html } from '@react-three/drei';
// import FloatingParticles from '../models/FloatingParticles';
// import { mypublications } from '../constants';
// import DemoComputer from '../components/DemoComputer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
//
// export default function Publications() {
//   const [index, setIndex] = useState(0);
//   const current = mypublications[index];
//
//   useGSAP(() => {
//     gsap.fromTo(
//         `.pubAnimated`,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
//     );
//   }, [index]);
//
//   const nav = (dir) =>
//       setIndex((i) =>
//           dir === 'prev'
//               ? i === 0
//                   ? mypublications.length - 1
//                   : i - 1
//               : i === mypublications.length - 1
//                   ? 0
//                   : i + 1
//       );
//
//   return (
//       <section id="publications" className="relative h-screen w-full">
//         <Canvas
//             camera={{ position: [0, 0, 8], fov: 75 }}
//             className="absolute inset-0 z-0"
//         >
//           {/* 1) Particles in the BACK */}
//           <ambientLight intensity={0.5} />
//           <pointLight position={[5, 10, 5]} intensity={1} />
//           <FloatingParticles />
//
//           {/* 2) 3D preview box */}
//           <Center>
//             <Suspense fallback={<CanvasLoader />}>
//               <group scale={2.5} position={[3.2, -2, 0]}
//                      rotation={[0.03, -0.2, 0]}
//               >
//                 <DemoComputer texture={current.texture} />
//               </group>
//             </Suspense>
//           </Center>
//
//           {/* Disable canvas interactions under your UI */}
//           <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
//
//           {/* 3) Your HTML UI ON TOP of everything */}
//           <Html fullscreen style={{ pointerEvents: 'none' }}>
//             <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-white pointer-events-auto">
//               {/* Heading */}
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-8 pubAnimated">
//                 Publications
//               </h2>
//
//               {/* Responsive grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* LEFT: Details */}
//                 <div className="space-y-4 pubAnimated">
//                   <h3 className="text-2xl font-semibold">{current.title}</h3>
//                   <p className="text-gray-300">{current.authors}</p>
//                   <p className="text-[#4cc9f0]">
//                     {current.journal}, {current.year}
//                   </p>
//                   {/*<div className="flex items-center gap-4">*/}
//                   {/*  <button*/}
//                   {/*      onClick={() => nav('prev')}*/}
//                   {/*      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"*/}
//                   {/*  >*/}
//                   {/*    ←*/}
//                   {/*  </button>*/}
//                   {/*  <a*/}
//                   {/*      href={current.link}*/}
//                   {/*      target="_blank"*/}
//                   {/*      rel="noopener noreferrer"*/}
//                   {/*      className="text-lg font-medium text-[#4cc9f0] underline"*/}
//                   {/*  >*/}
//                   {/*    Read More →*/}
//                   {/*  </a>*/}
//                   {/*  <button*/}
//                   {/*      onClick={() => nav('next')}*/}
//                   {/*      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"*/}
//                   {/*  >*/}
//                   {/*    →*/}
//                   {/*  </button>*/}
//                   {/*</div>*/}
//                   <div className="flex items-center justify-between flex-wrap gap-5">
//
//                     <a
//                         className="flex items-center gap-2 cursor-pointer text-white-600"
//                         href={current.href}
//                         target="_blank"
//                         rel="noreferrer">
//                       <p>Read more</p>
//                       <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
//                     </a>
//                   </div>
//
//                   <div className="flex justify-between items-center mt-7">
//                     <button className="arrow-btn" onClick={() => handleNav('previous')}>
//                       <img src="assets/left-arrow.png" alt="left arrow" />
//                     </button>
//
//                     <button className="arrow-btn" onClick={() => handleNav('next')}>
//                       <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//
//                 {/* RIGHT: empty, since 3D preview is already in canvas */}
//                 <div />
//               </div>
//             </div>
//           </Html>
//         </Canvas>
//       </section>
//   );
// }

// // src/sections/Publications.jsx
// import React, { useState, useEffect, Suspense } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Canvas } from '@react-three/fiber';
// import { Center, OrbitControls, Html } from '@react-three/drei';
// import FloatingParticles from '../models/FloatingParticles';
// import { mypublications } from '../constants';
// import DemoComputer from '../components/DemoComputer.jsx';
// import CanvasLoader from '../components/Loading.jsx';
//
// function useMediaQuery(query) {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia(query);
//     setMatches(mq.matches);
//     const handler = (e) => setMatches(e.matches);
//     mq.addEventListener('change', handler);
//     return () => mq.removeEventListener('change', handler);
//   }, [query]);
//   return matches;
// }
//
// export default function Publications() {
//   const [index, setIndex] = useState(0);
//   const current = mypublications[index];
//   const isMobile = useMediaQuery('(max-width: 640px)');
//
//   useGSAP(() => {
//     gsap.fromTo(
//         `.pubAnimated`,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
//     );
//   }, [index]);
//
//   const nav = (dir) =>
//       setIndex((i) =>
//           dir === 'prev'
//               ? i === 0
//                   ? mypublications.length - 1
//                   : i - 1
//               : i === mypublications.length - 1
//                   ? 0
//                   : i + 1
//       );
//
//   // The group we reuse in both canvases:
//   const Preview = (
//       <group scale={2.5} position={[2.5, -2, 0]} rotation={[0.03, -0.12, 0]}>
//         <DemoComputer texture={current.texture} />
//       </group>
//   );
//
//   return (
//       <section id="publications" className="relative h-screen w-full">
//         {/* full‐screen Canvas background */}
//         <Canvas
//             camera={{ position: [0, 0, 8], fov: 75 }}
//             className="absolute inset-0 z-0"
//         >
//           <ambientLight intensity={2} />
//           <pointLight position={[5, 10, 5]} intensity={5} />
//
//           {/* particles always */}
//           <FloatingParticles />
//
//           {/* only show preview in *desktop* background */}
//           {!isMobile && (
//               <Center>
//                 <Suspense fallback={<CanvasLoader />}>{Preview}</Suspense>
//               </Center>
//           )}
//
//           <OrbitControls
//               // enableRotate={!isMobile}
//               enableRotate={false}
//               enablePan={true}
//               enableZoom={false}
//           />
//
//           {/* overlay UI on top */}
//           <Html fullscreen style={{ pointerEvents: 'none' }}>
//             <div className="relative z-10 max-w-4xl px-6 py-16 text-white pointer-events-auto">
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-8 pubAnimated">
//                 Publications
//               </h2>
//
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-4 pubAnimated">
//                   <h3 className="text-2xl font-semibold">{current.title}</h3>
//                   <p className="text-gray-300">{current.authors}</p>
//                   <p className="text-[#4cc9f0]">
//                     {current.journal}, {current.year}
//                   </p>
//                     <div className="flex items-center justify-between flex-wrap gap-5">
//
//                       <a
//                           className="flex items-center gap-2 cursor-pointer text-white-600"
//                           href={current.href}
//                           target="_blank"
//                           rel="noreferrer">
//                         <p>Read more</p>
//                         <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
//                       </a>
//                     </div>
//
//                     <div className="flex justify-between items-center mt-7">
//                       <button className="arrow-btn" onClick={() => handleNav('previous')}>
//                         <img src="assets/left-arrow.png" alt="left arrow" />
//                       </button>
//
//                       <button className="arrow-btn" onClick={() => handleNav('next')}>
//                         <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
//                       </button>
//                     </div>
//
//                   </div>
//                 </div>
//                 {/* empty right cell on desktop */}
//                 <div />
//               {/*</div>*/}
//
//               {/* on mobile, drop the preview *below* the text */}
//               {isMobile && (
//                   <div className="mt-8 w-full h-64">
//                     <Canvas
//                         camera={{ position: [0, 0, 8], fov: 75 }}
//                         className="w-full h-full"
//                     >
//                       <ambientLight intensity={5} />
//                       <pointLight position={[5, 10, 5]} intensity={2} />
//                       <Suspense fallback={<CanvasLoader />}>
//                         <group scale={3.48} position={[-1, -4, 0]} rotation={[0.03, -0.05, 0]}>
//                           <DemoComputer texture={current.texture} />
//                         </group>
//                         {/*<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />*/}
//                       </Suspense>
//                     </Canvas>
//                   </div>
//               )}
//             </div>
//           </Html>
//         </Canvas>
//       </section>
//   );
// }
