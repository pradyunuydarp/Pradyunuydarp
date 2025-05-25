import { useGLTF } from '@react-three/drei';

const KameHouseModel = () => {
    const { scene } = useGLTF('models/kame_house.glb');

    return (
        <primitive
            object={scene}
            scale={0.7} // adjust scale as needed
            position={[0, -4, -8]} // push back into the background
        />
    );
};

export default KameHouseModel;
