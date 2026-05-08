import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Text3D, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const SpinShape = ({ position, geo, color, speed = 1 }: { position: [number, number, number]; geo: "torus" | "ico" | "knot" | "octa"; color: string; speed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    ref.current.rotation.x = t * 0.4 * speed;
    ref.current.rotation.y = t * 0.3 * speed;
  });
  const Geo =
    geo === "torus" ? <torusKnotGeometry args={[0.7, 0.22, 128, 32]} /> :
    geo === "ico" ? <icosahedronGeometry args={[0.9, 0]} /> :
    geo === "knot" ? <torusGeometry args={[0.8, 0.28, 16, 64]} /> :
    <octahedronGeometry args={[0.9, 0]} />;
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        {Geo}
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.85} />
      </mesh>
    </Float>
  );
};

const Scene3DSection = ({ title, subtitle, accent = "#a78bfa", id }: { title: string; subtitle: string; accent?: string; id?: string }) => {
  return (
    <section id={id} className="relative min-h-[80vh] w-full overflow-hidden" style={{ background: "#e8e4ec" }}>
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-4, 2, 3]} intensity={0.7} color={accent} />
            <Environment preset="studio" />
            <SpinShape position={[-2.5, 0.8, 0]} geo="torus" color={accent} speed={1} />
            <SpinShape position={[2.5, -0.5, 0]} geo="ico" color="#1a1a1a" speed={1.2} />
            <SpinShape position={[2.2, 1.4, -1]} geo="octa" color="#ec4899" speed={0.8} />
            <SpinShape position={[-2, -1, -1]} geo="knot" color="#1a1a1a" speed={1.4} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6 pointer-events-none">
        <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-black/60 mb-4">[ {subtitle} ]</div>
        <h2 className="font-display font-bold tracking-tighter text-black leading-[0.9]"
          style={{ fontSize: "clamp(48px, 9vw, 140px)" }}>
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Scene3DSection;
