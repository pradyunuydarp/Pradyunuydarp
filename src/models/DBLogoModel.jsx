import { useGLTF } from '@react-three/drei';
import React, {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";

const DBLogoModel = () => {

    const { scene } = useGLTF('models/dragonball__logo.glb');

    return (
        <primitive
            object={scene}
            scale={2.8} // adjust scale as needed
            position={[-4, -0.5, -15]} // push back into the background
            rotation={[0, -0.01, 0]} // adjust rotation if needed
        />
    );

};

export default DBLogoModel;
