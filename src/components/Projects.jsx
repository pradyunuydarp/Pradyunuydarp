// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
//
// const ProjectCard = ({ title, description, technologies, link }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-[#252542] p-6 rounded-lg"
//     >
//       <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <mesh>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color="#4cc9f0" />
//           </mesh>
//           <OrbitControls enableZoom={false} autoRotate />
//         </Canvas>
//       </div>
//       <h3 className="text-xl font-bold text-[#4cc9f0] mb-2">{title}</h3>
//       <p className="text-gray-300 mb-4">{description}</p>
//       <div className="flex flex-wrap gap-2">
//         {technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-[#7209b7] text-white rounded-full text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };
//
// const Projects = () => {
//   // TODO: Add your projects data
//   const projects = [
//     {
//       title: "Project 1",
//       description: "[Your project description]",
//       technologies: ["React", "Three.js", "WebGL"],
//       link: "#"
//     },
//     // Add more projects...
//   ];
//
//   return (
//     <section id="projects" className="min-h-screen py-20 px-4 bg-[#1a1a2e]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#4cc9f0] mb-12">Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Projects;