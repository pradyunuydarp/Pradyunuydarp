import { useGLTF } from '@react-three/drei';
import React, {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";

const DBLogoModel = () => {

    const { scene } = useGLTF('/Pradyunuydarp/models/dragonball__logo.glb');

    return (
        <primitive
            object={scene}
            scale={0.8} // adjust scale as needed
            position={[-12, 5, -15]} // push back into the background
            rotation={[0, -Math.PI / 100, 0]} // adjust rotation if needed
        />
    );

};

export default DBLogoModel;
