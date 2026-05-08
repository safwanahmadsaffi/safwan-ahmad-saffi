import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment, ContactShadows, Stars } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import Avatar3D from "./Avatar3D";

const Blob = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.3;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color={color} distort={0.5} speed={2.2} roughness={0.1} metalness={0.95} />
      </mesh>
    </Float>
  );
};

const Loader = ({ onDone }: { onDone: () => void }) => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 2200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / dur) * 100));
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const words = ["A CREATIVE DEVELOPER", "A GENAI BUILDER", "A DATA ENGINEER"];
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "#e8e4ec" }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="absolute top-6 left-6 font-display font-bold text-sm text-black">safwan.dev</div>
      <div className="absolute top-6 right-6 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} className="w-px h-5 bg-black"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12 text-black font-display font-bold tracking-tighter"
          style={{ fontSize: "clamp(60px, 11vw, 180px)", lineHeight: 1 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          {[...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="inline-block w-3 h-3 rounded-full bg-black" />
            </span>
          ))}
        </motion.div>
      </div>
      <div className="relative z-10 flex items-center gap-6 rounded-full bg-black text-white px-10 py-5"
        style={{ boxShadow: "0 0 0 2px #a78bfa, 0 30px 80px -20px rgba(0,0,0,0.6)" }}>
        <span className="font-display font-semibold tracking-wider text-sm">LOADING</span>
        <span className="font-display text-sm tabular-nums opacity-70">{pct}%</span>
        <div className="w-12 h-1.5 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full bg-white" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </motion.div>
  );
};

const MoncyHero = () => {
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const h = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <section id="hero" className="relative min-h-screen w-full overflow-hidden" style={{ background: "#e8e4ec" }}>
        <div className="absolute inset-0">
          <Canvas shadows camera={{ position: [0, 0.5, 5], fov: 45 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 6, 4]} intensity={1.4} castShadow />
              <pointLight position={[-5, -3, 2]} intensity={0.8} color="#a78bfa" />
              <pointLight position={[5, 3, 2]} intensity={0.6} color="#ec4899" />
              <Environment preset="city" />

              <group position={[mouse.x * 0.3, -mouse.y * 0.2, 0]}>
                <Avatar3D mouse={mouse} />
              </group>

              {/* Floating decor blobs */}
              <Blob position={[-2.6, 1.2, -1]} color="#a78bfa" scale={0.45} />
              <Blob position={[2.5, -0.6, -0.5]} color="#ec4899" scale={0.55} />
              <Blob position={[2.2, 1.6, -2]} color="#1a1a1a" scale={0.35} />

              <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={6} blur={2.5} far={2} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute top-6 left-6 z-10 font-display font-bold text-sm text-black">safwan.dev</div>
        <div className="absolute top-6 right-6 z-10 flex items-center gap-5 text-xs font-display font-semibold text-black tracking-widest uppercase">
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#projects" className="hover:opacity-60">Work</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </div>

        <div className="absolute bottom-0 inset-x-0 overflow-hidden whitespace-nowrap py-5 border-y border-black/10 z-10">
          <motion.div
            className="flex gap-10 text-black font-display font-bold tracking-tighter"
            style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 1 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10">
                SAFWAN AHMAD
                <span className="inline-block w-3 h-3 rounded-full bg-black" />
                GENAI · DATA · DEV
                <span className="inline-block w-3 h-3 rounded-full bg-black" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute left-6 bottom-32 z-10 max-w-xs text-xs font-display text-black/70 leading-relaxed">
          <div className="mb-2 uppercase tracking-widest text-black font-bold">[ Portfolio · 2026 ]</div>
          Builder & GenAI developer crafting intelligent, data-driven products.
        </div>
        <div className="absolute right-6 bottom-32 z-10 text-right text-xs font-display text-black/70 leading-relaxed">
          <div className="mb-2 uppercase tracking-widest text-black font-bold">[ Available ]</div>
          For freelance & collabs<br />safwanahmadsaffi836@gmail.com
        </div>
      </section>
    </>
  );
};

export default MoncyHero;
