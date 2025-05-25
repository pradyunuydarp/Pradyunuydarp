import { useGLTF } from '@react-three/drei';

const GokuHouseModel = () => {
    const { scene } = useGLTF('models/gokus_childhood_home.glb');

    return (
        <primitive
            object={scene}
            scale={0.009} // adjust scale as needed
            position={[0, 0, -10]} // push back into the background
        />
    );
};

export default GokuHouseModel;
