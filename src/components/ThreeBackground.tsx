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
      <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Left side */}
        <FloatingGeometry 
          position={[-8, 2, -1]} 
          geometry={<icosahedronGeometry args={[0.6, 0]} />}
          color="#5B9FED"
        />
        <FloatingGeometry 
          position={[-9, -2, -3]} 
          geometry={<octahedronGeometry args={[0.7, 0]} />}
          color="#1AC3D4"
        />
        
        {/* Left-center */}
        <FloatingGeometry 
          position={[-4, 3, -2]} 
          geometry={<icosahedronGeometry args={[0.6, 0]} />}
          color="#5B9FED"
        />
        <FloatingGeometry 
          position={[-5, -3, -1]} 
          geometry={<tetrahedronGeometry args={[0.6, 0]} />}
          color="#1AC3D4"
        />
        
        {/* Center */}
        <FloatingGeometry 
          position={[0, 0, -3]} 
          geometry={<boxGeometry args={[0.9, 0.9, 0.9]} />}
          color="#5B9FED"
        />
        
        {/* Right-center */}
        <FloatingGeometry 
          position={[4, 3, -2]} 
          geometry={<octahedronGeometry args={[0.7, 0]} />}
          color="#1AC3D4"
        />
        <FloatingGeometry 
          position={[5, -3, -1]} 
          geometry={<dodecahedronGeometry args={[0.6, 0]} />}
          color="#5B9FED"
        />
        
        {/* Right side */}
        <FloatingGeometry 
          position={[8, 2, -1]} 
          geometry={<icosahedronGeometry args={[0.6, 0]} />}
          color="#5B9FED"
        />
        <FloatingGeometry 
          position={[9, -2, -3]} 
          geometry={<tetrahedronGeometry args={[0.6, 0]} />}
          color="#1AC3D4"
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
