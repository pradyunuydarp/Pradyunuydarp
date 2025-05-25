// // import { motion } from 'framer-motion';
// //
// // const Publications = () => {
// //   // TODO: Add your publications data
// //   const publications = [
// //     {
// //       title: "[Publication Title]",
// //       authors: "[Authors]",
// //       journal: "[Journal/Conference Name]",
// //       year: "[Year]",
// //       link: "#"
// //     },
// //     // Add more publications...
// //   ];
// //
// //   return (
// //       // <section id="publications" className="min-h-screen py-20 px-4 bg-[#1a1a2e]">
// //       <section id="publications" className="c-space my-20">
// //         <p className="head-text">Publications</p>
// //         <div className="max-w-4xl mx-auto">
// //           {/*<h2 className="text-4xl font-bold text-[#4cc9f0] mb-12">Publications</h2>*/}
// //           <div className="space-y-8">
// //             {publications.map((pub, index) => (
// //                 <motion.div
// //                     key={index}
// //                     initial={{opacity: 0, x: -50}}
// //                     whileInView={{opacity: 1, x: 0}}
// //                     transition={{duration: 0.5}}
// //                     className="bg-[#252542] p-6 rounded-lg"
// //                 >
// //                   <h3 className="text-xl font-bold text-[#720967] mb-2">{pub.title}</h3>
// //                   <p className="text-gray-300 mb-2">{pub.authors}</p>
// //                   <p className="text-[#4cc9f0]">{pub.journal}, {pub.year}</p>
// //                   <a
// //                       href={pub.link}
// //                       className="inline-block mt-4 text-white hover:text-[#4cc9f0] transition-colors"
// //                   >
// //                     Read More →
// //                   </a>
// //                 </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //   );
// // };
// //
// // export default Publications;
//
// import { motion } from 'framer-motion';
// import {mypublications} from "../constants/index.js";
// // const Publications = () => {
// //   const publications = [
// //     {
// //       title: "A Deep Learning Approach to Pose Estimation",
// //       authors: "Pradyun Devarakonda, John Smith",
// //       journal: "IEEE CVPR",
// //       year: "2024",
// //       link: "#"
// //     },
// //     {
// //       title: "Optimizing Neural Rendering for Web Applications",
// //       authors: "Pradyun Devarakonda, Alice Doe",
// //       journal: "ACM SIGGRAPH",
// //       year: "2023",
// //       link: "#"
// //     },
// //     // Add more entries here...
// //   ];
//
//   return (
//       <section id="publications" className="c-space my-20 bg-[#1a1a2e]text-white pt-10">
//         <p className="head-text">Publications</p>
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-10 pt-10">
//             {publications.map((pub, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-[#1e293b] p-6 rounded-lg shadow-lg"
//                 >
//                   <h3 className="text-2xl font-semibold text-[#4cc9f0] mb-2">{pub.title}</h3>
//                   <p className="text-gray-300 mb-1">{pub.authors}</p>
//                   <p className="text-[#94a3b8] italic">{pub.journal}, {pub.year}</p>
//                   <a
//                       href={pub.link}
//                       className="inline-block mt-4 text-[#4cc9f0] hover:text-[#38bdf8] transition-colors duration-300"
//                   >
//                     Read More →
//                   </a>
//                 </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//   );
// };
//
// export default Publications;


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {Suspense, useState} from 'react';
import { mypublications } from '../constants';
import DemoComputer from "../components/DemoComputer.jsx";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
const publicationCount = mypublications.length;

const Publications = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? publicationCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === publicationCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentPublication = mypublications[selectedIndex];

  useGSAP(() => {
    gsap.fromTo(
        `.pubAnimated`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }
    );
  }, [selectedIndex]);

  return (
      <section id="publications" className="c-space my-30 bg-[#1a1a2e] text-white pt-10">
        <p className="head-text">Publications</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 p-8 relative shadow-2xl shadow-black-200 bg-[#1a1a2e] rounded-lg">
            <p className="text-2xl text-white font-bold pubAnimated">{currentPublication.title}</p>
            <p className="text-gray-300 pubAnimated">{currentPublication.authors}</p>
            <p className="text-[#4cc9f0] pubAnimated">
              {currentPublication.journal}, {currentPublication.year}
            </p>

            <a
                href={currentPublication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white hover:text-[#4cc9f0] transition-colors pubAnimated"
            >
              Read More →
            </a>

            <div className="flex justify-between items-center mt-10">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="assets/left-arrow.png" alt="left arrow"/>
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* Optional: Add a symbolic image, figure, or animation here */}
          {/*<div className="border border-black-300 bg-black-200 rounded-lg h-96 flex items-center justify-center text-white">*/}
          {/*  <p className="text-xl text-center">Explore the ideas shaping research.</p>*/}
          {/*</div>*/}
          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI}/>
              <directionalLight position={[10, 10, 5]}/>
              <Center>
                <Suspense fallback={<CanvasLoader/>}>
                  <group scale={2.5} position={[0, -3, 0]} rotation={[0, -0.025, 0]}>
                    <DemoComputer texture={currentPublication.texture}/>
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
            </Canvas>
          </div>
        </div>
      </section>
  );
};

export default Publications;
