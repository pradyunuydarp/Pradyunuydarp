// // // import { useRef, useEffect } from "react";
// // // import { useFrame } from "@react-three/fiber";
// // // import { Float, Line } from "@react-three/drei";
// // // import * as THREE from "three";
// // //
// // // const GraphModel = ({ animated }) => {
// // //     const ref = useRef();
// // //
// // //     useFrame((state, delta) => {
// // //         if (animated && ref.current) {
// // //             ref.current.rotation.y += delta * 0.1;
// // //             ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
// // //         }
// // //     });
// // //
// // //     useEffect(() => {
// // //         if (!ref.current) return;
// // //         console.log("GraphModel mounted, group ref is ready:", ref.current);
// // //         // You can attach events to ref.current if needed
// // //         // Example: ref.current.addEventListener is not valid, but you can manipulate mesh properties here
// // //     }, []);
// // //
// // //     // 6 carbon atoms in a hexagonal ring
// // //     const radius = 1;
// // //     const nodes = Array.from({ length: 6 }, (_, i) => {
// // //         const angle = (i / 6) * Math.PI * 2;
// // //         return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
// // //     });
// // //
// // //     // Directed edges for the benzene ring
// // //     const edges = [
// // //         [0, 1],
// // //         [1, 2],
// // //         [2, 3],
// // //         [3, 4],
// // //         [4, 5],
// // //         [5, 0],
// // //     ];
// // //
// // //     // Helper for cone direction
// // //     const getArrowTransform = (start, end) => {
// // //         const dir = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start));
// // //         const mid = new THREE.Vector3(...start).addScaledVector(dir, 0.7); // position for arrowhead
// // //         const length = dir.length();
// // //         const quaternion = new THREE.Quaternion().setFromUnitVectors(
// // //             new THREE.Vector3(0, 1, 0), // default cone up
// // //             dir.clone().normalize()
// // //         );
// // //         return { position: mid, quaternion, length };
// // //     };
// // //
// // //     return (
// // //         <group ref={ref} scale={1.5}>
// // //             {/* Nodes */}
// // //             {nodes.map((pos, i) => (
// // //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// // //                     <mesh position={pos}>
// // //                         <sphereGeometry args={[0.1, 32, 32]} />
// // //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// // //                     </mesh>
// // //                 </Float>
// // //             ))}
// // //
// // //             {/* Directed Edges + Arrows */}
// // //             {edges.map(([a, b], i) => {
// // //                 const start = nodes[a];
// // //                 const end = nodes[b];
// // //                 const { position, quaternion } = getArrowTransform(start, end);
// // //
// // //                 return (
// // //                     <group key={i}>
// // //                         <Line points={[start, end]} lineWidth={1} color="#D4AF37" />
// // //                         <mesh position={position} quaternion={quaternion}>
// // //                             <coneGeometry args={[0.05, 0.15, 8]} />
// // //                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// // //                         </mesh>
// // //                     </group>
// // //                 );
// // //             })}
// // //         </group>
// // //     );
// // // };
// // //
// // // export default GraphModel;
// //
// // import { useRef, useEffect } from "react";
// // import { useFrame } from "@react-three/fiber";
// // import { Float, Line } from "@react-three/drei";
// // import * as THREE from "three";
// //
// // const GraphModel = ({ animated }) => {
// //     const ref = useRef();
// //
// //     useFrame((state, delta) => {
// //         if (animated && ref.current) {
// //             ref.current.rotation.y += delta * 0.1;
// //             ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
// //         }
// //     });
// //
// //     useEffect(() => {
// //         if (!ref.current) return;
// //         console.log("GraphModel mounted with ref:", ref.current);
// //     }, []);
// //
// //     // 6 nodes in hexagon
// //     const radius = 1;
// //     const nodes = Array.from({ length: 6 }, (_, i) => {
// //         const angle = (i / 6) * Math.PI * 2;
// //         return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
// //     });
// //
// //     // All edges (in ring)
// //     const edges = [
// //         [0, 1],
// //         [1, 2],
// //         [2, 3],
// //         [3, 4],
// //         [4, 5],
// //         [5, 0],
// //     ];
// //
// //     // Double bonds to represent with two arrows
// //     const doubleBonds = new Set(["0-1", "2-3", "4-5"]);
// //
// //     const getArrowTransform = (start, end, offset = 0) => {
// //         const dir = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start));
// //         const length = dir.length();
// //         const mid = new THREE.Vector3(...start).addScaledVector(dir, 0.7);
// //
// //         // Offset the arrow slightly perpendicular to the bond for visual separation
// //         if (offset !== 0) {
// //             const normal = new THREE.Vector3(...start).cross(new THREE.Vector3(...end)).normalize();
// //             const perp = dir.clone().cross(normal).normalize().multiplyScalar(offset);
// //             mid.add(perp);
// //         }
// //
// //         const quaternion = new THREE.Quaternion().setFromUnitVectors(
// //             new THREE.Vector3(0, 1, 0), // default cone direction
// //             dir.clone().normalize()
// //         );
// //         return { position: mid, quaternion, length };
// //     };
// //
// //     return (
// //         <group ref={ref} scale={1.5}>
// //             {/* Nodes */}
// //             {nodes.map((pos, i) => (
// //                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
// //                     <mesh position={pos}>
// //                         <sphereGeometry args={[0.1, 32, 32]} />
// //                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// //                     </mesh>
// //                 </Float>
// //             ))}
// //
// //             {/* Edges and Arrows */}
// //             {edges.map(([a, b], i) => {
// //                 const start = nodes[a];
// //                 const end = nodes[b];
// //                 const key = `${a}-${b}`;
// //                 const reverseKey = `${b}-${a}`;
// //                 const isDouble = doubleBonds.has(key) || doubleBonds.has(reverseKey);
// //
// //                 return (
// //                     <group key={i}>
// //                         <Line points={[start, end]} lineWidth={1} color="#D4AF37" />
// //
// //                         {isDouble ? (
// //                             // Double bond → Two arrows, one in each direction, slightly offset
// //                             <>
// //                                 {(() => {
// //                                     const { position, quaternion } = getArrowTransform(start, end, 0.05);
// //                                     return (
// //                                         <mesh position={position} quaternion={quaternion}>
// //                                             <coneGeometry args={[0.05, 0.15, 8]} />
// //                                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// //                                         </mesh>
// //                                     );
// //                                 })()}
// //                                 {(() => {
// //                                     const { position, quaternion } = getArrowTransform(end, start, -0.05);
// //                                     return (
// //                                         <mesh position={position} quaternion={quaternion}>
// //                                             <coneGeometry args={[0.05, 0.15, 8]} />
// //                                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// //                                         </mesh>
// //                                     );
// //                                 })()}
// //                             </>
// //                         ) : (
// //                             // Single arrow
// //                             (() => {
// //                                 const { position, quaternion } = getArrowTransform(start, end);
// //                                 return (
// //                                     <mesh position={position} quaternion={quaternion}>
// //                                         <coneGeometry args={[0.05, 0.15, 8]} />
// //                                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
// //                                     </mesh>
// //                                 );
// //                             })()
// //                         )}
// //                     </group>
// //                 );
// //             })}
// //         </group>
// //     );
// // };
// //
// // export default GraphModel;
//
// import { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Float, Line } from "@react-three/drei";
// import * as THREE from "three";
//
// const GraphModel = ({ animated }) => {
//     const ref = useRef();
//
//     useFrame((state, delta) => {
//         if (animated && ref.current) {
//             ref.current.rotation.y += delta * 0.1;
//             ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
//         }
//     });
//
//     useEffect(() => {
//         if (!ref.current) return;
//         console.log("GraphModel mounted with ref:", ref.current);
//     }, []);
//
//     const radius = 1;
//     const nodes = Array.from({ length: 6 }, (_, i) => {
//         const angle = (i / 6) * Math.PI * 2;
//         return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
//     });
//
//     const edges = [
//         [0, 1],
//         [1, 2],
//         [2, 3],
//         [3, 4],
//         [4, 5],
//         [5, 0],
//     ];
//
//     const doubleBonds = new Set(["0-1", "2-3", "4-5"]);
//
//     const getOffsetVector = (start, end, scale = 0.05) => {
//         const s = new THREE.Vector3(...start);
//         const e = new THREE.Vector3(...end);
//         const dir = new THREE.Vector3().subVectors(e, s);
//         const z = new THREE.Vector3(0, 0, 1); // perpendicular to 2D plane
//         const offset = new THREE.Vector3().crossVectors(dir, z).normalize().multiplyScalar(scale);
//         return offset;
//     };
//
//     const getArrowTransform = (start, end, offsetVec = new THREE.Vector3()) => {
//         const dir = new THREE.Vector3().subVectors(end, start);
//         const mid = start.clone().addScaledVector(dir, 0.7).add(offsetVec);
//         const quaternion = new THREE.Quaternion().setFromUnitVectors(
//             new THREE.Vector3(0, 1, 0),
//             dir.clone().normalize()
//         );
//         return { position: mid, quaternion };
//     };
//
//     return (
//         <group ref={ref} scale={1.5}>
//             {/* Carbon atoms */}
//             {nodes.map((pos, i) => (
//                 <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
//                     <mesh position={pos}>
//                         <sphereGeometry args={[0.1, 32, 32]} />
//                         <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                     </mesh>
//                 </Float>
//             ))}
//
//             {/* Bonds */}
//             {edges.map(([a, b], i) => {
//                 const start = new THREE.Vector3(...nodes[a]);
//                 const end = new THREE.Vector3(...nodes[b]);
//                 const key = `${a}-${b}`;
//                 const revKey = `${b}-${a}`;
//                 const isDouble = doubleBonds.has(key) || doubleBonds.has(revKey);
//
//                 return (
//                     <group key={i}>
//                         {isDouble ? (
//                             // Double bond: Two lines and two arrows
//                             <>
//                                 {[0.05, -0.05].map((offsetScale, j) => {
//                                     const offset = getOffsetVector(start, end, offsetScale);
//                                     const s = start.clone().add(offset);
//                                     const e = end.clone().add(offset);
//                                     return (
//                                         <Line
//                                             key={`line-${j}`}
//                                             points={[s.toArray(), e.toArray()]}
//                                             lineWidth={1}
//                                             color="#D4AF37"
//                                         />
//                                     );
//                                 })}
//                                 {/* Two opposite arrows on offset lines */}
//                                 {(() => {
//                                     const offset = getOffsetVector(start, end, 0.05);
//                                     const { position, quaternion } = getArrowTransform(start, end, offset);
//                                     return (
//                                         <mesh position={position} quaternion={quaternion}>
//                                             <coneGeometry args={[0.05, 0.15, 8]} />
//                                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                                         </mesh>
//                                     );
//                                 })()}
//                                 {(() => {
//                                     const offset = getOffsetVector(end, start, -0.05);
//                                     const { position, quaternion } = getArrowTransform(end, start, offset);
//                                     return (
//                                         <mesh position={position} quaternion={quaternion}>
//                                             <coneGeometry args={[0.05, 0.15, 8]} />
//                                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                                         </mesh>
//                                     );
//                                 })()}
//                             </>
//                         ) : (
//                             // Single bond: one line, one arrow
//                             <>
//                                 <Line points={[start.toArray(), end.toArray()]} lineWidth={1} color="#D4AF37" />
//                                 {(() => {
//                                     const { position, quaternion } = getArrowTransform(start, end);
//                                     return (
//                                         <mesh position={position} quaternion={quaternion}>
//                                             <coneGeometry args={[0.05, 0.15, 8]} />
//                                             <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
//                                         </mesh>
//                                     );
//                                 })()}
//                             </>
//                         )}
//                     </group>
//                 );
//             })}
//         </group>
//     );
// };
//
// export default GraphModel;

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { Text } from "@react-three/drei";

const GraphModel = ({ animated }) => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (animated && ref.current) {
            ref.current.rotation.y += delta * 0.1;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    const radius = 1;
    const nodes = Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
    });

    const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 0],
    ];

    const doubleBonds = new Set(["0-1", "2-3", "4-5"]);

    const getOffsetVector = (start, end, scale = 0.05) => {
        const s = new THREE.Vector3(...start);
        const e = new THREE.Vector3(...end);
        const dir = new THREE.Vector3().subVectors(e, s);
        const z = new THREE.Vector3(0, 0, 1); // perpendicular to XY plane
        return new THREE.Vector3().crossVectors(dir, z).normalize().multiplyScalar(scale);
    };

    const getArrowTransform = (start, end) => {
        const dir = new THREE.Vector3().subVectors(end, start);
        const mid = new THREE.Vector3().addVectors(start, dir.clone().multiplyScalar(0.7));
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            dir.clone().normalize()
        );
        return { position: mid, quaternion };
    };

    return (
        <group ref={ref} scale={1.5}>
            {/* Nodes */}
            {nodes.map((pos, i) => (
                <Float key={i} speed={1} floatIntensity={0.2} rotationIntensity={0.1}>
                    <mesh position={pos}>
                        <sphereGeometry args={[0.1, 32, 32]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                    </mesh>
                </Float>
            ))}

            {/* Edges */}
            {edges.map(([a, b], i) => {
                const start = new THREE.Vector3(...nodes[a]);
                const end = new THREE.Vector3(...nodes[b]);
                const key = `${a}-${b}`;
                const revKey = `${b}-${a}`;
                const isDouble = doubleBonds.has(key) || doubleBonds.has(revKey);

                if (isDouble) {
                    const offset = getOffsetVector(start, end, 0.05);
                    const s1 = start.clone().add(offset);
                    const e1 = end.clone().add(offset);
                    const s2 = start.clone().sub(offset);
                    const e2 = end.clone().sub(offset);

                    const arrow1 = getArrowTransform(s1, e1);
                    const arrow2 = getArrowTransform(e2, s2); // reversed direction

                    return (
                        <group key={i}>
                            {/* Two parallel lines */}
                            <Line points={[s1.toArray(), e1.toArray()]} lineWidth={1} color="#D4AF37" />
                            <Line points={[s2.toArray(), e2.toArray()]} lineWidth={1} color="#D4AF37" />
                            {/* Arrow on upper line */}
                            <mesh position={arrow1.position} quaternion={arrow1.quaternion}>
                                <coneGeometry args={[0.05, 0.15, 8]} />
                                <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                            </mesh>
                            {/* Arrow on lower line (reversed direction) */}
                            <mesh position={arrow2.position} quaternion={arrow2.quaternion}>
                                <coneGeometry args={[0.05, 0.15, 8]} />
                                <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                            </mesh>
                        </group>
                    );
                } else {
                    const arrow = getArrowTransform(start, end);
                    return (
                        <group key={i}>
                            <Line points={[start.toArray(), end.toArray()]} lineWidth={1} color="#D4AF37" />
                            <mesh position={arrow.position} quaternion={arrow.quaternion}>
                                <coneGeometry args={[0.05, 0.15, 8]} />
                                <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
                            </mesh>
                        </group>
                    );
                }
            })}
            <Text
                position={[0, 0, 0]}
                fontSize={0.3}
                color="#D4AF37"
                anchorX="center"
                anchorY="middle"
                font="fonts/Merriweather,Roboto/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf" // optional: use any font you prefer
            >
                Benzene
            </Text>


        </group>
    );
};

export default GraphModel;

