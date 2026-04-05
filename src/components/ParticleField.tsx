import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = ({ count = 2000 }) => {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const palette = [
      new THREE.Color('#a855f7'), // purple
      new THREE.Color('#6366f1'), // indigo
      new THREE.Color('#ec4899'), // pink
      new THREE.Color('#06b6d4'), // cyan
      new THREE.Color('#ffffff'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      siz[i] = Math.random() * 3 + 0.5;
    }
    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;

    const geo = mesh.current.geometry;
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3 + 1;
      arr[idx] += Math.sin(state.clock.elapsedTime * 0.3 + i * 0.01) * 0.003;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = initialPos.current[1] + Math.sin(t * 0.5 + initialPos.current[0]) * 0.8;
    ref.current.position.x = initialPos.current[0] + Math.cos(t * 0.3 + initialPos.current[1]) * 0.4;
    ref.current.scale.setScalar(scale + Math.sin(t * 0.8) * 0.1);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

const NebulaClouds = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.01;
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 6 + Math.random() * 4;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, -10 - Math.random() * 5]}
          >
            <planeGeometry args={[8 + Math.random() * 6, 8 + Math.random() * 6]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? '#7c3aed' : '#ec4899'}
              transparent
              opacity={0.03}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const ParticleField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles count={1500} />
        <NebulaClouds />

        <FloatingOrb position={[-6, 3, -5]} color="#a855f7" scale={1.5} />
        <FloatingOrb position={[5, -2, -8]} color="#ec4899" scale={2} />
        <FloatingOrb position={[0, 4, -6]} color="#6366f1" scale={1.2} />
        <FloatingOrb position={[-4, -3, -4]} color="#06b6d4" scale={1} />
        <FloatingOrb position={[7, 1, -10]} color="#a855f7" scale={2.5} />
      </Canvas>
    </div>
  );
};

export default ParticleField;
