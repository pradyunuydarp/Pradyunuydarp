// src/components/VinylModel.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

// Preload the GLTF
useGLTF.preload('/Pradyunuydarp/models/rocks_vinyl.glb');

export default function VinylModel({ scrollProgress }) {
    const ref = useRef();
    const { scene } = useGLTF('/Pradyunuydarp/models/rocks_vinyl.glb');

    // Face-up tilt: adjust these values to tweak X, Y, Z
    const initialTilt = [Math.PI / 2, 0, 0];

    // Apply the initial tilt once
    useEffect(() => {
        if (ref.current) {
            ref.current.rotation.set(...initialTilt);
        }
    }, []);

    // On each frame, spin and bob based on scrollProgress (0-1)
    useFrame(() => {
        const t = scrollProgress.get();
        // Slow rotation around Y axis
        ref.current.rotation.y = initialTilt[1] + t * Math.PI * 1.5;
        // Gentle up/down bob
        ref.current.position.y = Math.sin(t * Math.PI * 2) * 0.5;
    });

    // Polish all meshes in the scene
    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.metalness = 0.8;
            child.material.roughness = 0.1;
        }
    });

    return (
        <group ref={ref} scale={1.2}>
            <primitive object={scene} />
        </group>
    );
}
