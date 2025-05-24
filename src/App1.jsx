import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingSphere = () => {
    const meshRef = useRef();
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 0.2, 5, 10]} />
            <meshLambertMaterial color="#468585" emissive="#468585" roughness={0.5} metalness={0.5} />
        </mesh>
    );
};

/**
 * The main React component for the entire application.
 *
 * This component renders a React Three Fiber Canvas which fills the entire
 * window. It also renders an OrbitControls component which allows the user to
 * rotate the scene with the mouse. A rotating sphere is also rendered.
 *
 * The ambient light in the scene is colored a soft, pale blue-green color.
 * The background color of the canvas is also set to this color.
 *
 * Finally, a Sparkles component is rendered which creates a scattered,
 * sparkly effect in the scene.
 *
 * @returns {JSX.Element} The JSX element for the App1 component.
 */
const App1 = () => {
    return (
        <Canvas style={{ height: "100vh", width: "100vw", backgroundColor: "#F1F1F1" }}>
            <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping={true}/>
            <ambientLight intensity={0.5} color={"#9CDBA6"} />
            <color attach="background" args={["#F0F0F0"]} />
            <RotatingSphere />
            <Sparkles count={100} size={5} scale={[5, 5, 5]} speed={1} color='#9CDBA6' noise={0.2}/>
        </Canvas>
    );
};

export default App1;