// // src/components/ExpandableCard.jsx
// import React, { useState, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
//
// const ExpandableCard = ({ title, color, model: Model, description, details }) => {
//     const [expanded, setExpanded] = useState(false);
//
//     return (
//         <div className="flex flex-col items-center">
//             <h3 className={`text-2xl font-semibold mb-4`} style={{ color }}>
//                 {title}
//             </h3>
//
//             <div
//                 className={`w-full ${expanded ? 'h-64' : 'h-40'} bg-[#0f0f1a] transition-all duration-500 rounded-2xl overflow-hidden shadow-lg`}
//             >
//                 {expanded && (
//                     <Canvas>
//                         <ambientLight intensity={0.4} />
//                         <directionalLight position={[5, 5, 5]} intensity={0.8} />
//                         <Suspense fallback={null}>
//                             <Model />
//                         </Suspense>
//                         <OrbitControls enableZoom={false} />
//                     </Canvas>
//                 )}
//             </div>
//
//             <p className="mt-4 text-center text-gray-300">
//                 {description}
//                 {expanded && <span className="block mt-2 text-sm text-gray-400">{details}</span>}
//             </p>
//
//             <button
//                 onClick={() => setExpanded((prev) => !prev)}
//                 className="mt-2 text-sm text-[#4cc9f0] hover:underline focus:outline-none"
//             >
//                 {expanded ? 'Collapse' : 'Read more'}
//             </button>
//         </div>
//     );
// };
//
// export default ExpandableCard;

// src/components/ExpandableCard.jsx
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const ExpandableCard = ({ title, color, model: Model, description, details }) => {
    const [expanded, setExpanded] = useState(false);

    // Render overlay when expanded
    const Overlay = () => (
        createPortal(
            <div className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-auto">
                <div className="relative max-w-4xl mx-auto p-6 bg-[#1a1a2e] rounded-2xl mt-12 mb-12">
                    <button
                        onClick={() => setExpanded(false)}
                        className="absolute top-4 right-4 text-white text-xl font-bold"
                    >
                        ✕
                    </button>
                    <h3 className="text-3xl font-bold mb-4" style={{ color }}>
                        {title}
                    </h3>
                    <div className="w-full h-96 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg mb-4">
                        <Canvas>
                            <ambientLight intensity={0.4} />
                            <directionalLight position={[5, 5, 5]} intensity={0.8} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                            <OrbitControls enableZoom={false} />
                        </Canvas>
                    </div>
                    <p className="text-gray-300 mb-2">{description}</p>
                    <p className="text-gray-400 whitespace-pre-line">{details}</p>
                </div>
            </div>,
            document.body
        )
    );

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4" style={{ color }}>
                {title}
            </h3>

            <div
                className="w-full h-40 bg-[#0f0f1a] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setExpanded(true)}
            >
                {/* Preview: static or small canvas can go here if desired */}
            </div>

            <p className="mt-4 text-center text-gray-300">
                {description}
            </p>

            {expanded && <Overlay />}
        </div>
    );
};

export default ExpandableCard;
