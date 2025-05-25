// src/components/MovingGoku.jsx
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function MovingGoku() {
    const ref = useRef();
    const { scene } = useGLTF('/Pradyunuydarp/models/son_goku_and_kintoun_nimbus.glb');

    // Apply any initial material tweaks
    scene.traverse(c => c.isMesh && (c.material.ior = 1.5));

    // We'll need the viewport size to convert vw/vh → world coordinates
    const { viewport } = useThree();

    // Radius of the orbit in world units
    const radiusX = viewport.width * 0.3;
    const radiusY = viewport.height * 0.1;

    useFrame((state) => {
        const t = state.clock.elapsedTime * 0.5; // slow it down

        // Elliptical path
        const x = Math.cos(t) * radiusX;
        const y = Math.sin(t) * radiusY;
        ref.current.position.set(x, y, 0);

        // Face direction of travel: tangent to the circle
        const dx = -Math.sin(t) * radiusX;
        const dz = 0;
        const angle = Math.atan2(dx, dz);
        ref.current.rotation.set(0, angle, 0);
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={1}
            position={[radiusX, 10, 0]} // start at rightmost point
        />
    );
}
