import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Sparkles} from "@react-three/drei";

const FloatingParticles = () => {
    const particlesRef = useRef();

    useFrame(({ clock }) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
            particlesRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <group ref={particlesRef}>
            <Sparkles
                count={100}
                scale={[10, 10, 10]}
                size={1}
                speed={0.2}
                color="#4cc9f0"
            />
            <Sparkles
                count={50}
                scale={[8, 8, 8]}
                size={2}
                speed={0.1}
                color="#7209b7"
            />
        </group>
    );
};

export default FloatingParticles;