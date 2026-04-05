import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

const Particles = ({ count = 2500 }) => {
  const mesh = useRef<THREE.Points>(null);

  const [positions, colors, sizes, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const spd = new Float32Array(count);

    const palette = [
      new THREE.Color('#a855f7'),
      new THREE.Color('#6366f1'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#f472b6'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      siz[i] = Math.random() * 3.5 + 0.5;
      spd[i] = Math.random() * 0.5 + 0.2;
    }
    return [pos, col, siz, spd];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.015;
    mesh.current.rotation.x = Math.sin(t * 0.008) * 0.15;

    const posAttr = mesh.current.geometry.getAttribute('position') as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const speed = speeds[i];
      arr[i * 3 + 1] += Math.sin(t * speed + i * 0.02) * 0.004;
      arr[i * 3] += Math.cos(t * speed * 0.7 + i * 0.015) * 0.002;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingOrb = ({ position, color, scale = 1, pulseSpeed = 0.5 }: { position: [number, number, number]; color: string; scale?: number; pulseSpeed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = initialPos.current[1] + Math.sin(t * pulseSpeed + initialPos.current[0]) * 1.2;
    ref.current.position.x = initialPos.current[0] + Math.cos(t * pulseSpeed * 0.6 + initialPos.current[1]) * 0.8;
    ref.current.position.z = initialPos.current[2] + Math.sin(t * 0.2) * 0.5;
    const s = scale + Math.sin(t * pulseSpeed * 1.5) * 0.2;
    ref.current.scale.setScalar(s);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.08 + Math.sin(t * pulseSpeed) * 0.06;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

const NebulaClouds = () => {
  const ref = useRef<THREE.Group>(null);
  const cloudsData = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const r = 5 + Math.random() * 6;
      return {
        pos: [Math.cos(angle) * r, Math.sin(angle) * r, -8 - Math.random() * 8] as [number, number, number],
        size: [6 + Math.random() * 8, 6 + Math.random() * 8] as [number, number],
        color: i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#ec4899' : '#06b6d4',
      };
    });
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.008;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.05;
  });

  return (
    <group ref={ref}>
      {cloudsData.map((cloud, i) => (
        <mesh key={i} position={cloud.pos}>
          <planeGeometry args={cloud.size} />
          <meshBasicMaterial
            color={cloud.color}
            transparent
            opacity={0.04}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
};

const ConnectingLines = () => {
  const ref = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const count = 30;
    const pos = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      pos[i * 6] = (Math.random() - 0.5) * 30;
      pos[i * 6 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 6 + 2] = (Math.random() - 0.5) * 20;
      pos[i * 6 + 3] = pos[i * 6] + (Math.random() - 0.5) * 8;
      pos[i * 6 + 4] = pos[i * 6 + 1] + (Math.random() - 0.5) * 8;
      pos[i * 6 + 5] = pos[i * 6 + 2] + (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    (ref.current.material as THREE.LineBasicMaterial).opacity = 0.06 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#a855f7" transparent opacity={0.06} blending={THREE.AdditiveBlending} depthWrite={false} />
    </lineSegments>
  );
};

const ParticleField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles count={2000} />
        <NebulaClouds />
        <ConnectingLines />

        <FloatingOrb position={[-7, 4, -5]} color="#a855f7" scale={1.8} pulseSpeed={0.4} />
        <FloatingOrb position={[6, -3, -8]} color="#ec4899" scale={2.2} pulseSpeed={0.6} />
        <FloatingOrb position={[1, 5, -6]} color="#6366f1" scale={1.5} pulseSpeed={0.5} />
        <FloatingOrb position={[-5, -4, -4]} color="#06b6d4" scale={1.2} pulseSpeed={0.7} />
        <FloatingOrb position={[8, 2, -10]} color="#a855f7" scale={2.8} pulseSpeed={0.3} />
        <FloatingOrb position={[-3, 0, -7]} color="#f472b6" scale={1.6} pulseSpeed={0.55} />
        <FloatingOrb position={[4, 6, -9]} color="#06b6d4" scale={2} pulseSpeed={0.45} />
      </Canvas>
    </div>
  );
};

export default ParticleField;
