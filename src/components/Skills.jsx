// // import React from 'react';
// //
// // const skills = {
// //     Programming: [
// //         'C++', 'Java', 'Python', 'C', 'MySQL',
// //         'HTML', 'CSS', 'JavaScript', 'React', 'Redis',
// //         'Object Oriented Programming'
// //     ],
// //     Technical: [
// //         'Data Structures', 'Algorithms', 'Data Modeling',
// //         'Software Engineering', 'Database Systems',
// //         'Operating Systems', 'Software Development',
// //         'Machine Learning'
// //     ],
// //     'Technologies & Frameworks': [
// //         'LaTeX', 'Linux', 'Docker'
// //     ]
// // };
// //
// // const Skills = () => {
// //     return (
// //         <section id="skills" className="c-space bg-[#1a1a2e] text-white pt-16 pb-24">
// //             <div className="text-center mb-12">
// //                 <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#3a4a8f] to-[#5c6bc0] bg-clip-text text-transparent">
// //                     Skills
// //                 </h2>
// //             </div>
// //
// //             <div className="max-w-6xl mx-auto flex flex-col gap-12">
// //                 {Object.entries(skills).map(([category, items]) => (
// //                     <div key={category}>
// //                         <h3 className="text-2xl font-semibold text-[#4cc9f0] mb-4">{category}</h3>
// //                         <div className="flex flex-wrap gap-3">
// //                             {items.map((skill, index) => (
// //                                 <span
// //                                     key={index}
// //                                     className="px-4 py-2 bg-[#2d2d44] text-white rounded-full shadow-sm hover:bg-[#4cc9f0] hover:text-[#1a1a2e] transition duration-200 text-sm font-medium"
// //                                 >
// //                   {skill}
// //                 </span>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </section>
// //     );
// // };
// //
// // export default Skills;
//
// // src/components/Skills.jsx
// import React from 'react';
// import { FaCode, FaDatabase, FaDocker, FaLinux, FaCog } from 'react-icons/fa';
//
// const skills = {
//     Programming: [
//         { name: 'C++',     icon: <FaCode /> },
//         { name: 'Java',    icon: <FaCode /> },
//         { name: 'Python',  icon: <FaCode /> },
//         { name: 'C',       icon: <FaCode /> },
//         { name: 'MySQL',   icon: <FaDatabase /> },
//         { name: 'HTML',    icon: <FaCode /> },
//         { name: 'CSS',     icon: <FaCode /> },
//         { name: 'JavaScript', icon: <FaCode /> },
//         { name: 'React',   icon: <FaCode /> },
//         { name: 'Redis',   icon: <FaDatabase /> },
//         { name: 'OOP',     icon: <FaCog /> },
//     ],
//     Technical: [
//         { name: 'Data Structures',    icon: <FaDatabase /> },
//         { name: 'Algorithms',         icon: <FaCode /> },
//         { name: 'Data Modeling',      icon: <FaDatabase /> },
//         { name: 'Software Engineering', icon: <FaCog /> },
//         { name: 'Database Systems',   icon: <FaDatabase /> },
//         { name: 'Operating Systems',  icon: <FaCog /> },
//         { name: 'Software Development', icon: <FaCode /> },
//         { name: 'Machine Learning',   icon: <FaCode /> },
//     ],
//     'Technologies & Frameworks': [
//         { name: 'LaTeX',  icon: <FaCode /> },
//         { name: 'Linux',  icon: <FaLinux /> },
//         { name: 'Docker', icon: <FaDocker /> },
//     ],
// };
//
// const Skills = () => (
//     <section id="skills" className="c-space bg-[#1a1a2e] text-white py-20">
//         <div className="text-center mb-12">
//             <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#3a4a8f] to-[#5c6bc0] bg-clip-text text-transparent">
//                 Skills
//             </h2>
//         </div>
//
//         <div className="max-w-6xl mx-auto space-y-16 px-4">
//             {Object.entries(skills).map(([category, items]) => (
//                 <div key={category}>
//                     <h3 className="text-2xl font-semibold text-[#4cc9f0] mb-6">{category}</h3>
//                     <div
//                         className="
//               grid
//               grid-cols-2
//               sm:grid-cols-3
//               md:grid-cols-4
//               lg:grid-cols-6
//               gap-4
//             "
//                     >
//                         {items.map(({ name, icon }, idx) => (
//                             <div
//                                 key={idx}
//                                 className="
//                   flex
//                   items-center
//                   gap-2
//                   bg-[#2d2d44]
//                   hover:bg-[#4cc9f0]
//                   hover:text-[#1a1a2e]
//                   transition
//                   duration-200
//                   rounded-full
//                   py-2
//                   px-4
//                 "
//                             >
//                                 <span className="text-lg">{icon}</span>
//                                 <span className="font-medium text-sm">{name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </section>
// );
//
// export default Skills;

// src/components/Skills.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import FloatingParticles from '../models/FloatingParticles'; // your sparkle group
import { FaCode, FaDatabase, FaDocker, FaLinux, FaCog } from 'react-icons/fa';

const skills = {
    Programming: [
        { name: 'C++',     icon: <FaCode /> },
        { name: 'Java',    icon: <FaCode /> },
        { name: 'Python',  icon: <FaCode /> },
        { name: 'C',       icon: <FaCode /> },
        { name: 'MySQL',   icon: <FaDatabase /> },
        { name: 'HTML',    icon: <FaCode /> },
        { name: 'CSS',     icon: <FaCode /> },
        { name: 'JavaScript', icon: <FaCode /> },
        { name: 'React',   icon: <FaCode /> },
        { name: 'Redis',   icon: <FaDatabase /> },
        { name: 'OOP',     icon: <FaCog /> },
    ],
    Technical: [
        { name: 'Data Structures',    icon: <FaDatabase /> },
        { name: 'Algorithms',         icon: <FaCode /> },
        { name: 'Data Modeling',      icon: <FaDatabase /> },
        { name: 'Software Engineering', icon: <FaCog /> },
        { name: 'Database Systems',   icon: <FaDatabase /> },
        { name: 'Operating Systems',  icon: <FaCog /> },
        { name: 'Software Development', icon: <FaCode /> },
        { name: 'Machine Learning',   icon: <FaCode /> },
    ],
    'Technologies & Frameworks': [
        { name: 'LaTeX',  icon: <FaCode /> },
        { name: 'Linux',  icon: <FaLinux /> },
        { name: 'Docker', icon: <FaDocker /> },
    ],
};

export default function Skills() {
    return (
        // <section id="skills" className="min-h-screen overflow-y-auto w-full mt-auto mb-auto">
        <section className="h-screen w-full sticky overflow-y-auto mb-16" id="skills">
            {/*<Canvas*/}
            {/*    className="absolute inset-0 z-0 pointer-events-none"*/}
            {/*    camera={{ position: [0, 0, 8], fov: 75 }}*/}
            {/*>*/}
            <Canvas
                // className="absolute inset-0 z-0 pointer-events-none h-100% w-100% min-h-100vh"
                style={{ height: '100%', width: '100%', minHeight: '100vh' }}
                camera={{ position: [0, 0, 8], fov: 75 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingParticles />

                {/* Move the HTML overlay *inside* the Canvas */}
                <Html fullscreen>
                    {/*<div className="relative z-10 c-space bg-transparent text-white py-20 px-4 max-w-6xl">*/}
                    <div className="relative z-10 c-space bg-transparent text-white py-20 px-4 max-w-6xl overflow-y-auto"
                         style={{ maxHeight: '100vh' }}>
                        <div className="text-left mb-12">
                            <h2 className="
    text-4xl sm:text-5xl font-bold text-gray-200
  ">
                                Skills
                            </h2>
                        </div>


                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="mb-16">
                                <h3 className="text-2xl font-semibold text-[#4cc9f0] mb-6">
                                    {category}
                                </h3>
                                <div
                                    className="
                    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
                    gap-4
                  "
                                >
                                    {items.map(({ name, icon }, i) => (
                                        <div
                                            key={i}
                                            className="
                        flex items-center gap-2
                        bg-[#2d2d44] hover:bg-[#4cc9f0] hover:text-[#1a1a1a]
                        transition duration-200
                        rounded-full py-2 px-4
                      "
                                        >
                                            <span className="text-lg">{icon}</span>
                                            <span className="font-medium text-sm">{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Html>
            </Canvas>
        </section>
    );
}
// export default Skills;