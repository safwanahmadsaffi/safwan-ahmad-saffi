import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Wave = ({ color = '#a855f7', speed = 1, amplitude = 0.3 }: { color?: string; speed?: number; amplitude?: number }) => {
  const mesh = useRef<THREE.Mesh>(null);

  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(20, 2, 128, 16);
    return g;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const pos = (mesh.current.geometry as THREE.PlaneGeometry).getAttribute('position') as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const t = state.clock.elapsedTime * speed;

    for (let i = 0; i < pos.count; i++) {
      const x = arr[i * 3];
      const y = arr[i * 3 + 1];
      arr[i * 3 + 2] = Math.sin(x * 0.8 + t) * amplitude + Math.sin(y * 1.5 + t * 0.7) * amplitude * 0.5;
    }
    pos.needsUpdate = true;
    (mesh.current.geometry as THREE.PlaneGeometry).computeVertexNormals();
  });

  return (
    <mesh ref={mesh} geometry={geo} rotation={[-Math.PI / 3, 0, 0]} position={[0, 0, 0]}>
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const WaveDivider = ({ variant = 'purple' }: { variant?: 'purple' | 'pink' | 'cyan' }) => {
  const colors = {
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  };

  return (
    <div className="w-full h-32 -my-16 relative z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Wave color={colors[variant]} speed={0.8} amplitude={0.25} />
        <Wave color={colors[variant]} speed={1.2} amplitude={0.15} />
      </Canvas>
    </div>
  );
};

export default WaveDivider;
