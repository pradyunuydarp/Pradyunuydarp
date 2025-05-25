// src/components/Models.jsx
import React from 'react';
// import { Float, Line, useGLTF, useFrame } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'; // ✅ RIGHT
import { Float, Line, useGLTF } from '@react-three/drei'; // ✅ RIGHT
export const GraphModel = () => {
    const nodes = [
        [-0.6, 0.0, 0.0],
        [0.6, 0.0, 0.0],
        [0, 0.8, 0.2],
    ];
    const edges = [[0, 1], [1, 2], [2, 0]];
    const ref = React.useRef();

    useFrame((_, delta) => {
        ref.current.rotation.y += delta * 0.2;
    });

    return (
        <group ref={ref} scale={2}>
            {nodes.map((pos, i) => (
                <Float key={i} speed={1} floatIntensity={0.3} rotationIntensity={0.2}>
                    <mesh position={pos}>
                        <sphereGeometry args={[0.12, 32, 32]} />
                        <meshStandardMaterial color="#4cc9f0" metalness={0.6} roughness={0.3} />
                    </mesh>
                </Float>
            ))}
            {edges.map(([a, b], i) => (
                <Line key={i} points={[nodes[a], nodes[b]]} lineWidth={1} color="#4cc9f0" />
            ))}
        </group>
    );
};

useGLTF.preload('/models/rocks_vinyl.glb');
export const VinylModel = () => {
    const { scene } = useGLTF('/models/rocks_vinyl.glb');
    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.metalness = 0.5;
            child.material.roughness = 0.4;
        }
    });
    return (
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.5}>
            <primitive object={scene} scale={2} position={[0, -0.2, 0]} />
        </Float>
    );
};

export const GokuNimbusModel = () => {
    const { scene } = useGLTF('/models/son_goku_and_kintoun_nimbus.glb');
    return (
        <Float speed={1.2} floatIntensity={1.5} rotationIntensity={1}>
            <primitive object={scene} scale={2} position={[0, -1.5, 0]} rotation={[0, Math.PI, 0]} />
        </Float>
    );
};
