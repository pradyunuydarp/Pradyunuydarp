import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

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

const Hero = () => {
  return (
    <section className="h-screen w-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        className="bg-[#1a1a2e]"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingParticles />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Creative Developer
        </h1>
        <p className="text-xl text-[#4cc9f0]">
          Blending Technology with Artistry
        </p>
      </div>
    </section>
  );
};

export default Hero;