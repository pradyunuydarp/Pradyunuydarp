import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/Pradyunuydarp/models/hermano_los_polos.glb');
useGLTF.preload('/Pradyunuydarp/models/walter_white__breaking_bad_cubic_worlds.glb');
useGLTF.preload('/Pradyunuydarp/models/toon_jesse_pinkman_i.a.glb');
useGLTF.preload('/Pradyunuydarp/models/fleetwood_bounder_-_breaking_bad.glb');
useGLTF.preload('/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout.glb');

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
useGLTF.preload('/Pradyunuydarp/models/hermano_los_polos_small.glb');
useGLTF.preload('/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout_small.glb');
const BreakingBad = (props) => {
    const ref = useRef();

    // const hermanoModel = useGLTF('/Pradyunuydarp/models/hermano_los_polos.glb');
    const hermanoModel = useGLTF(
        isMobile ? '/Pradyunuydarp/models/hermano_los_polos_small.glb' : '/Pradyunuydarp/models/hermano_los_polos.glb'
    );
    const skyPanoModel = useGLTF(
        isMobile ? '/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout_small.glb' : '/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout.glb'
    );
    const walterModel = useGLTF('/Pradyunuydarp/models/walter_white__breaking_bad_cubic_worlds.glb');
    const jesseModel = useGLTF('/Pradyunuydarp/models/toon_jesse_pinkman_i.a.glb');
    const fleetwoodModel = useGLTF('/Pradyunuydarp/models/fleetwood_bounder_-_breaking_bad.glb');
    // const skyPanoModel = useGLTF('/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout.glb');
    const initialTilt = [0, Math.PI, 0];

    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.set(...initialTilt);
        }
    }, []);



    return (
        <group ref={ref} scale={1} {...props}>
            <primitive object={skyPanoModel.scene}
                        scale={5}
                       position={[0, 5, -5]}
                          rotation={[0, Math.PI / 2, 0]} // Y-axis 90 degrees
            ></primitive>
            <primitive object={hermanoModel.scene}
            position={[0, -0.5, 0]}/>
            <primitive
                object={walterModel.scene}
                position={[-1.3, -0.25, -4.99]}
                scale={0.3}
                rotation={[ Math.PI/10, Math.PI, 0]} // Y-axis 90 degrees
            />
            <primitive object={jesseModel.scene}
                       // position={[1, 0.13, -3.5]}
                       position={[1, -0.12, -3.5]}
                       scale={60}
                          rotation={[Math.PI/10, Math.PI, 0]} // Y-axis 180 degrees
            />
            <primitive object={fleetwoodModel.scene}
                       // position={[-2, 0.13, -4.5]}
                          position={[-2, -0.12, -4.5]}
                       scale={0.3}
                       rotation={[0, -Math.PI/2, 0]} // Y-axis 180 degrees
            />
            {/*<primitive object={walterModel.scene} position={[0, 0, -5]} scale={1}/>*/}
        </group>
    );
};

export default BreakingBad;
//
// import React, { useEffect, useRef, useState } from 'react';
// import { useGLTF } from '@react-three/drei';
//
// // Device width check
// const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
//
// // Preload all necessary models
// useGLTF.preload('/Pradyunuydarp/models/hermano_los_polos.glb');
// useGLTF.preload('/Pradyunuydarp/models/walter_white__breaking_bad_cubic_worlds.glb');
// useGLTF.preload('/Pradyunuydarp/models/toon_jesse_pinkman_i.a.glb');
// useGLTF.preload('/Pradyunuydarp/models/fleetwood_bounder_-_breaking_bad.glb');
// useGLTF.preload('/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout.glb');
//
// // Preload mobile-friendly versions
// useGLTF.preload('/Pradyunuydarp/models/hermano_los_polos_small.glb');
// useGLTF.preload('/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout_small.glb');
//
// const BreakingBad = (props) => {
//     const ref = useRef();
//     const [isClient, setIsClient] = useState(false);
//
//     // Prevents mismatch during SSR (Next.js or similar)
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     // Load appropriate models based on device
//     const hermanoModel = useGLTF(
//         isMobile ? '/Pradyunuydarp/models/hermano_los_polos_small.glb' : '/Pradyunuydarp/models/hermano_los_polos.glb'
//     );
//     const skyPanoModel = useGLTF(
//         isMobile ? '/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout_small.glb' : '/Pradyunuydarp/models/sky_pano_-_monument_valley_lookout.glb'
//     );
//     const walterModel = useGLTF('/Pradyunuydarp/models/walter_white__breaking_bad_cubic_worlds.glb');
//     const jesseModel = useGLTF('/Pradyunuydarp/models/toon_jesse_pinkman_i.a.glb');
//     const fleetwoodModel = useGLTF('/Pradyunuydarp/models/fleetwood_bounder_-_breaking_bad.glb');
//
//     const initialTilt = [0, Math.PI, 0];
//
//     useEffect(() => {
//         if (ref.current) {
//             ref.current.rotation.set(...initialTilt);
//         }
//     }, []);
//
//     // Avoid rendering on server (for frameworks like Next.js)
//     if (!isClient) return null;
//
//     return (
//         <group ref={ref} scale={1} {...props}>
//             <primitive
//                 object={skyPanoModel.scene}
//                 scale={5}
//                 position={[0, 5, -5]}
//                 rotation={[0, Math.PI / 2, 0]}
//             />
//             <primitive object={hermanoModel.scene} position={[0, -0.5, 0]}
//                 rotation={[0, 0, 0]}/>
//             <primitive
//                 object={walterModel.scene}
//                 position={[-1.3, -0.25, -4.99]}
//                 scale={0.3}
//                 rotation={[Math.PI / 10, Math.PI, 0]}
//             />
//             <primitive
//                 object={jesseModel.scene}
//                 position={[1, -0.12, -3.5]}
//                 scale={60}
//                 rotation={[Math.PI / 10, Math.PI, 0]}
//             />
//             <primitive
//                 object={fleetwoodModel.scene}
//                 position={[-2, -0.12, -4.5]}
//                 scale={0.3}
//                 rotation={[0, -Math.PI / 2, 0]}
//             />
//         </group>
//     );
// };
//
// export default BreakingBad;
