import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const KamisamaShrine = (props) => {
    const ref = useRef();
    const { scene } = useGLTF('/Pradyunuydarp/models/dendes_lookout__kamis_temple.glb');

    // Optional: apply material or scene tweaks
    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
                // Example tweak: obj.material.metalness = 0.2;
            }
        });
    }, [scene]);

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={20}
            position={[0, -1, 0]}
            {...props}
        />
    );
};

export default KamisamaShrine;

// src/components/KamisamaModel.jsx
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
//
// export default function KamisamaModel(props) {
//     const group = useRef();
//     const { scene } = useGLTF('/Pradyunuydarp/models/scene.gltf');
//
//     return (
//         <primitive
//             ref={group}
//             object={scene}
//             scale={0.5}
//             position={[0, -1.5, 0]}
//             rotation={[0, Math.PI, 0]} // adjust if needed
//             {...props}
//         />
//     );
// }
