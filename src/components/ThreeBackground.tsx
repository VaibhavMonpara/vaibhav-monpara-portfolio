import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingGeometry 
          position={[-3, 2, 0]} 
          geometry={<icosahedronGeometry args={[1, 0]} />}
          color="#5B9FED"
        />
        <FloatingGeometry 
          position={[3, -2, -2]} 
          geometry={<octahedronGeometry args={[1.2, 0]} />}
          color="#1AC3D4"
        />
        <FloatingGeometry 
          position={[0, 0, -3]} 
          geometry={<torusGeometry args={[1, 0.4, 16, 32]} />}
          color="#5B9FED"
        />
        <FloatingGeometry 
          position={[-4, -3, -1]} 
          geometry={<tetrahedronGeometry args={[1, 0]} />}
          color="#1AC3D4"
        />
        <FloatingGeometry 
          position={[4, 3, -4]} 
          geometry={<boxGeometry args={[1.5, 1.5, 1.5]} />}
          color="#5B9FED"
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
