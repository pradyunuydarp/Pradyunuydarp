// // src/components/Resume.jsx
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import FloatingParticles from '../models/FloatingParticles'; // adjust path as needed
//
// const Resume = () => {
//     return (
//         <section className="relative h-screen bg-[#1a1a2e] text-white overflow-hidden">
//             {/* 3D background */}
//             {/*<Canvas camera={{ position: [0, 0, 108], fov: 75 }} className="inset-0">*/}
//             {/*    <ambientLight intensity={0.5} />*/}
//             {/*    <pointLight position={[10, 10, 10]} intensity={1} />*/}
//             {/*    <FloatingParticles />*/}
//             {/*    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />*/}
//             {/*</Canvas>*/}
//
//             {/* Overlay content */}
//             <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
//                 <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#3a4a8f] to-[#5c6bc0] bg-clip-text text-transparent text-white ">
//                     My Resume
//                 </h2>
//
//                 {/* PDF viewer */}
//                 <div className="w-full h-[60vh] bg-white rounded-lg overflow-hidden mb-8 shadow-lg">
//                     <iframe
//                         src="Pradyun_Resume.pdf"
//                         title="My Resume"
//                         className="w-full h-full"
//                         frameBorder="0"
//                     />
//                 </div>
//
//                 {/* Download button */}
//                 <a
//                     href="Pradyun_Resume.pdf"
//                     download="Pradyun_Resume.pdf"
//                     className="inline-block px-6 py-3 bg-[#4cc9f0] hover:bg-[#3a92b8] text-[#1a1a2e] font-semibold rounded-md transition"
//                 >
//                     Download Resume
//                 </a>
//             </div>
//         </section>
//     );
// };
//
// export default Resume;

// src/components/Resume.jsx
// src/components/Resume.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import FloatingParticles from '../models/FloatingParticles'; // adjust path

const Resume = () => (
    <section className="relative h-screen bg-[#1a1a2e] text-white">
        <Canvas
            camera={{ position: [0, 0, 8], fov: 75 }}
            className="absolute inset-0 z-0"
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/* particles in the background */}
            <FloatingParticles />

            {/* keep the controls but disable pointer-events so UI stays interactive */}
            <OrbitControls
                enableRotate={false}
                enableZoom={false}
                enablePan={false}
                makeDefault
            />

            {/* overlay everything with your React UI */}
            <Html
                fullscreen
                style={{ pointerEvents: 'none' }} // allow children to handle clicks
            >

                <div className="relative z-10 c-space bg-transparent text-white max-w-6xl">
                    <h2 className="
    text-4xl sm:text-5xl font-bold text-gray-200
  ">
                        My Resume
                    </h2>
                </div>


                <div className="pointer-events-auto flex flex-col items-center justify-center h-full ">
                    {/*<div className="pointer-events-auto max-w-7xl mx-auto px-6 py-16 c-space items-start">*/}
                    {/*<p className="head-text">My Resume</p>*/}
                    {/*</div>*/}

                    {/*<h1 className="text-4xl sm:text-5xl font-bold mb-8 mt-0 pt-0 bg-gradient-to-r from-[#3a4a8f] to-[#5c6bc0] bg-clip-text text-transparent text-white">*/}
                    {/*<h2 className="text-4xl sm:text-5xl font-bold mb-8 mt-0 pt-0 bg-gradient-to-r from-[#3a4a8f] to-[#5c6bc0] bg-clip-text text-transparent text-white">*/}
                    {/*    My Resume*/}
                    {/*</h2>*/}

                    {/* PDF viewer */}
                    <div className="w-full max-w-4xl h-[60vh] bg-white rounded-lg overflow-hidden mb-8 shadow-lg">
                        <iframe
                            src="Pradyun_Resume.pdf"
                            title="My Resume"
                            className="w-full h-full"
                            frameBorder="0"
                        />
                    </div>

                    {/* Download button */}
                    <a
                        href="Pradyun_Resume.pdf"
                        download="Pradyun_Resume.pdf"
                        className="inline-block px-6 py-3 bg-[#4cc9f0] hover:bg-[#3a92b8] text-[#1a1a2e] font-semibold rounded-md transition"
                    >
                        Download Resume
                    </a>
                </div>
            </Html>
        </Canvas>
    </section>
);

export default Resume;
