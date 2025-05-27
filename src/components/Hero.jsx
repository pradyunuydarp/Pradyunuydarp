import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import FloatingParticles from '../models/FloatingParticles.jsx';

import { useNavigate, useLocation } from "react-router-dom";

function ScrollToProjectsButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToProjects = () => {
        if (location.pathname !== "/") {
            navigate("/"); // navigate to home
            // After navigation, scroll must be triggered — use effect or a delay
            // This can be tricky; simplest is to add a scroll handler on the home component
        } else {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center">
        <button
            onClick={scrollToProjects}
            className="inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"
        >
            Scroll Down to see my work ↓
        </button>
        </div>
    );
}

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

// const FloatingParticles = () => {
//   const particlesRef = useRef();
//
//   useFrame(({ clock }) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
//       particlesRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.1;
//     }
//   });
//
//   return (
//     <group ref={particlesRef}>
//       <Sparkles
//         count={100}
//         scale={[10, 10, 10]}
//         size={1}
//         speed={0.2}
//         color="#4cc9f0"
//       />
//       <Sparkles
//         count={50}
//         scale={[8, 8, 8]}
//         size={2}
//         speed={0.1}
//         color="#7209b7"
//       />
//     </group>
//   );
// };


// const Hero = () => {
//   return (
//       <section className="h-screen w-full relative">
//           <Canvas
//               camera={{position: [0, 0, 8], fov: 75}}
//               className="bg-[#1a1a2e]"
//           >
//               <ambientLight intensity={0.5}/>
//               <pointLight position={[10, 10, 10]} intensity={1}/>
//               <FloatingParticles/>
//               <OrbitControls
//                   enableZoom={false}
//                   enablePan={false}
//                   autoRotate
//                   autoRotateSpeed={0.5}
//               />
//           </Canvas>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
//               <h1 className="text-5xl font-bold text-white mb-4">
//                   {/*Creative Developer*/}
//                   Hey, I'm Pradyun
//               </h1>
//               <p className="text-xl text-[#4cc9f0]">
//                   {/*Blending Technology with Artistry*/}
//                   I'm a junior at iiitb, majoring in Computer Science.
//                   {/*where I explore the intersection of technology and creativity. My journey is fueled by a passion for crafting innovative solutions that make a difference.*/}
//               </p>
//           </div>
//           {/*<a*/}
//           {/*    href="#about"*/}
//           {/*    className="mt-6 inline-block text-[#4cc9f0] text-lg font-semibold underline underline-offset-4 hover:text-white transition-colors duration-300"*/}
//           {/*>*/}
//           {/*    Learn more about me and my interests →*/}
//           {/*</a>*/}
//           <a
//               href="#about"
//               className="mt-6 inline-block text-[#4cc9f0] text-lg font-semibold underline underline-offset-4 hover:text-white transition-colors duration-300 animate-glide"
//           >
//               Learn more about me and my interests →
//           </a>
//
//       </section>
//   );
// };
//
// export default Hero;


const Hero = () => {
    const linkRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (linkRef.current) {
            observer.observe(linkRef.current);
        }

        return () => {
            if (linkRef.current) {
                observer.unobserve(linkRef.current);
            }
        };
    }, []);

    return (
        <section className="h-screen w-full relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }} className="bg-[#1a1a2e]">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingParticles />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <h1 className="text-5xl font-bold text-white mb-4">Hey, I'm Pradyun</h1>
                <p className="text-xl text-[#4cc9f0]">
                    I'm a junior at iiitb, majoring in Computer Science.
                </p>
                {/*<a*/}
                {/*    href="#projects"*/}
                {/*    className="inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
                {/*>*/}
                {/*    Scroll Down to see my work →*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href={`${window.location.pathname}#projects`}*/}
                {/*    className="inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
                {/*>*/}
                {/*    Scroll Down to see my work →*/}
                {/*</a>*/}


                <a
                    ref={linkRef}
                    href="#about"
                    className={"inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"}
                >
                    Learn more about me and my interests →
                </a>

                {/*<div className="space-x-4 mt-6">*/}
                {/*    <a*/}
                {/*        href="https://www.linkedin.com/in/your-profile"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        aria-label="LinkedIn"*/}
                {/*        className="inline-block p-3 rounded-md bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
                {/*    >*/}
                {/*        <FaLinkedin size={24} color="#fff" />*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        href="https://github.com/your-username"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        aria-label="GitHub"*/}
                {/*        className="inline-block p-3 rounded-md bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
                {/*    >*/}
                {/*        <FaGithub size={24} color="#fff" />*/}
                {/*    </a>*/}
                {/*    <a*/}
                {/*        href="https://instagram.com/your-username"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        aria-label="Instagram"*/}
                {/*        className="inline-block p-3 rounded-md bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"*/}
                {/*    >*/}
                {/*        <FaInstagram size={24} color="#fff" />*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div>
                <a
                    href="#/contact"
                    className="inline-block mt-6 px-6 py-2 rounded-md text-lg font-semibold text-300 bg-[#4cc9f0] hover:bg-[#62646C] transition duration-300"
                >
                    Contact me →
                </a>
                </div>

                <ScrollToProjectsButton />

                <ScrollToResumeButton />

            </div>
        </section>
    );
};

export default Hero;