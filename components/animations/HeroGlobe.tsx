"use client";



import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { type MotionValue } from "framer-motion";
import * as THREE from "three";

const ACCENT = "#1E566C";

type OrbitNodeProps = {
  radius: number;
  speed: number;
  phase: number;
  tilt: [number, number, number];
  scrollBoost: React.MutableRefObject<number>;
};

function OrbitNode({ radius, speed, phase, tilt, scrollBoost }: OrbitNodeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * (speed + scrollBoost.current * 0.35) + phase;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.85) * 0.35, Math.sin(t) * radius);
  });

  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={1.4}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

type CoreAssemblyProps = {
  progress?: MotionValue<number>;
};

function CoreAssembly({ progress }: CoreAssemblyProps) {
  const root = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!progress) return;
    scrollRef.current = progress.get();
    return progress.on("change", (value) => {
      scrollRef.current = value;
    });
  }, [progress]);

  useFrame((state, delta) => {
    if (!root.current) return;
    const { pointer, clock } = state;
    const scroll = scrollRef.current;
    root.current.rotation.y += delta * (0.14 + scroll * 0.22);
    root.current.rotation.x = THREE.MathUtils.lerp(
      root.current.rotation.x,
      pointer.y * 0.18 + Math.sin(clock.elapsedTime * 0.35) * 0.06 + scroll * 0.28,
      0.04,
    );
    root.current.rotation.z = THREE.MathUtils.lerp(
      root.current.rotation.z,
      pointer.x * 0.1 - scroll * 0.12,
      0.04,
    );
    const scale = 0.72 + scroll * 0.15;
    root.current.scale.setScalar(scale);

    if (inner.current) {
      inner.current.rotation.y -= delta * (0.22 + scroll * 0.35);
      inner.current.rotation.x += delta * 0.12;
    }
  });

  const ringPoints = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 9) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * 1.55, 0, Math.sin(a) * 1.55);
  });
  ringPoints.push(ringPoints[0].clone());

  return (
    <group ref={root}>
      <Float speed={1.15} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshPhysicalMaterial
            color="#e9eff1"
            metalness={0.35}
            roughness={0.28}
            clearcoat={1}
            clearcoatRoughness={0.12}
            emissive={ACCENT}
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh scale={1.02}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.35} />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 120]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.55} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 3.1, 0.6, 0.4]}>
        <torusGeometry args={[1.85, 0.008, 10, 120]} />
        <meshStandardMaterial color="#0b1118" emissive="#0b1118" emissiveIntensity={0.05} metalness={0.7} roughness={0.45} transparent opacity={0.25} />
      </mesh>

      <Line points={ringPoints} color={ACCENT} lineWidth={1} transparent opacity={0.35} />

      <OrbitNode radius={1.55} speed={0.55} phase={0} tilt={[0.2, 0.4, 0]} scrollBoost={scrollRef} />
      <OrbitNode radius={1.55} speed={0.55} phase={2.1} tilt={[0.2, 0.4, 0]} scrollBoost={scrollRef} />
      <OrbitNode radius={1.55} speed={0.55} phase={4.2} tilt={[0.2, 0.4, 0]} scrollBoost={scrollRef} />
      <OrbitNode radius={1.85} speed={-0.42} phase={1.2} tilt={[0.9, 0.2, 0.5]} scrollBoost={scrollRef} />
      <OrbitNode radius={1.85} speed={-0.42} phase={3.5} tilt={[0.9, 0.2, 0.5]} scrollBoost={scrollRef} />
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 4, 2]} intensity={22} color={ACCENT} />
      <pointLight position={[-4, -2, 3]} intensity={10} color="#ffffff" />
      <spotLight position={[0, 6, 0]} angle={0.42} penumbra={0.8} intensity={14} color={ACCENT} />
    </>
  );
}

type HeroGlobeProps = {
  progress?: MotionValue<number>;
};

export function HeroGlobe({ progress }: HeroGlobeProps) {
  return (
    <Canvas
      className="h-[380px] w-[380px] touch-none"
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#f7f9fa", 4.5, 9]} />
      <SceneLights />
      <Sparkles count={72} scale={5.5} size={1.8} speed={0.22} opacity={0.35} color={ACCENT} />
      <CoreAssembly progress={progress} />
    </Canvas>
  );
}
