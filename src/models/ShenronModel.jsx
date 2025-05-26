// // // src/components/ShenronModel.jsx
// // import React, { useRef } from 'react';
// // import { useFrame, useThree } from '@react-three/fiber';
// // import { useGLTF } from '@react-three/drei';
// // import * as THREE from 'three';
// //
// // export default function ShenronModel() {
// //     const ref = useRef();
// //     const { scene } = useGLTF('/Pradyunuydarp/models/shenron_dragon_ball.glb');
// //
// //     // Apply any initial material tweaks
// //     scene.traverse(c => c.isMesh && (c.material.ior = 1.5));
// //
// //     // We'll need the viewport size to convert vw/vh → world coordinates
// //     const { viewport } = useThree();
// //
// //     return (
// //         <primitive
// //             ref={ref}
// //             object={scene}
// //             scale={0.0050}
// //             position={[-2, -2, 2]} // start at rightmost point
// //         />
// //     );
// // }
//
// import React, { useRef, useEffect, useState } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
//
// export default function ShenronModel() {
//     const ref = useRef();
//     const { scene } = useGLTF('/Pradyunuydarp/models/shenron_dragon_ball.glb');
//     const { viewport } = useThree();
//     const [scrollY, setScrollY] = useState(0);
//     const initialTilt = [0, Math.PI/2, 0];
//
//     // Apply the initial tilt once
//     useEffect(() => {
//         if (ref.current) {
//             ref.current.rotation.set(...initialTilt);
//         }
//     }, []);
//
//     // Update scroll position on scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//     // Modify materials
//     useEffect(() => {
//         scene.traverse((c) => {
//             if (c.isMesh) {
//                 c.material.ior = 1.5;
//             }
//         });
//     }, [scene]);
//
//     // Animate rotation based on scroll position
//     // useFrame(() => {
//     //     if (ref.current) {
//     //         ref.current.rotation.y = scrollY * 0.002; // adjust speed if needed
//     //     }
//     // });
//     useFrame(() => {
//         if (ref.current) {
//             ref.current.rotation.y = initialTilt[1] + scrollY * 0.002;
//         }
//     });
//
//
//     // return (
//     //     <primitive
//     //         ref={ref}
//     //         object={scene}
//     //         scale={0.0035}
//     //         position={[0, -1, 2]}
//     //         // rotation={[0, Math.PI, 0]} // adjust rotation if needed
//     //     />
//     // );
//     return (
//         <primitive
//             ref={ref}
//             object={scene}
//             scale={0.0035}
//             position={[2, 0, 2]}
//             // rotation={[0, Math.PI, 0]} // adjust rotation if needed
//         />
//     );
// }
import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export default function ShenronModel() {
    const ref = useRef();
    const { scene } = useGLTF('/Pradyunuydarp/models/shenron_dragon_ball.glb');
    const [scrollY, setScrollY] = useState(0);
    const initialTilt = [0, Math.PI/2, 0];

    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.set(...initialTilt);
        }

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        // Optimize materials for mobile
        if (isMobile) {
            scene.traverse((child) => {
                if (child.isMesh) {
                    child.material.metalness = 0.3;
                    child.material.roughness = 0.7;
                    child.material.envMapIntensity = 0.3;
                    child.castShadow = false;
                    child.receiveShadow = false;
                }
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scene]);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y = initialTilt[1] + scrollY * 0.002;
        }
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={isMobile ? 0.0025 : 0.0035}
            position={[2, 0, 2]}
        />
    );
}