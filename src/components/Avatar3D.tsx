import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Stylized low-poly avatar built from primitives.
 * Waves its arm, blinks, and tracks the mouse via parent group.
 */
const Avatar3D = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, mouse.x * 0.5, 0.08);
      head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -mouse.y * 0.3, 0.08);
    }
    if (rightArm.current) {
      // waving motion
      rightArm.current.rotation.z = -1.2 + Math.sin(t * 4) * 0.4;
      rightArm.current.rotation.x = Math.cos(t * 4) * 0.2;
    }
    if (leftArm.current) {
      leftArm.current.rotation.z = 0.3 + Math.sin(t * 1.5) * 0.1;
    }
    if (body.current) {
      body.current.position.y = Math.sin(t * 1.5) * 0.05;
    }
    // blink
    const blink = Math.sin(t * 0.7) > 0.97 ? 0.05 : 1;
    if (leftEye.current) leftEye.current.scale.y = blink;
    if (rightEye.current) rightEye.current.scale.y = blink;
  });

  const skin = "#f4c9a8";
  const hair = "#1a1a1a";
  const shirt = "#a78bfa";
  const pants = "#1f1f2e";

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={body} position={[0, -0.2, 0]}>
        {/* Head group */}
        <group ref={head} position={[0, 1.45, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
            <meshStandardMaterial color={skin} roughness={0.6} />
          </mesh>
          {/* Hair cap */}
          <mesh position={[0, 0.18, -0.02]}>
            <sphereGeometry args={[0.44, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.9]} />
            <meshStandardMaterial color={hair} roughness={0.4} />
          </mesh>
          {/* Eyes */}
          <mesh ref={leftEye} position={[-0.14, 0.02, 0.38]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#0a0a0a" />
          </mesh>
          <mesh ref={rightEye} position={[0.14, 0.02, 0.38]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#0a0a0a" />
          </mesh>
          {/* Smile */}
          <mesh position={[0, -0.15, 0.38]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.08, 0.012, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#b14e4e" />
          </mesh>
        </group>

        {/* Torso */}
        <mesh position={[0, 0.7, 0]}>
          <capsuleGeometry args={[0.4, 0.7, 8, 16]} />
          <meshStandardMaterial color={shirt} roughness={0.5} metalness={0.1} />
        </mesh>

        {/* Arms */}
        <group ref={leftArm} position={[-0.45, 1.05, 0]}>
          <mesh position={[0, -0.4, 0]}>
            <capsuleGeometry args={[0.1, 0.7, 8, 16]} />
            <meshStandardMaterial color={shirt} />
          </mesh>
          <mesh position={[0, -0.85, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color={skin} />
          </mesh>
        </group>
        <group ref={rightArm} position={[0.45, 1.05, 0]}>
          <mesh position={[0, -0.4, 0]}>
            <capsuleGeometry args={[0.1, 0.7, 8, 16]} />
            <meshStandardMaterial color={shirt} />
          </mesh>
          <mesh position={[0, -0.85, 0]}>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshStandardMaterial color={skin} />
          </mesh>
        </group>

        {/* Legs */}
        <mesh position={[-0.18, -0.1, 0]}>
          <capsuleGeometry args={[0.13, 0.6, 8, 16]} />
          <meshStandardMaterial color={pants} />
        </mesh>
        <mesh position={[0.18, -0.1, 0]}>
          <capsuleGeometry args={[0.13, 0.6, 8, 16]} />
          <meshStandardMaterial color={pants} />
        </mesh>
      </group>
    </Float>
  );
};

export default Avatar3D;
