// src/components/SpaceScene.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useRef } from 'react';

function MoonMesh() {
  const ref = useRef();
  const texture = useTexture('https://threejs.org/examples/textures/planets/moon_1024.jpg');
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06;
    }
  });
  return (
    <mesh ref={ref} position={[2.6, 1.2, -3]} castShadow receiveShadow>
      <sphereGeometry args={[1.2, 48, 48]} />
      <meshStandardMaterial map={texture} roughness={1} metalness={0} />
    </mesh>
  );
}

const SpaceScene = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 2]} intensity={1.2} />
        <MoonMesh />
        {/* Keep controls disabled for stability */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default SpaceScene;


