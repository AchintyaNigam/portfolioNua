"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
function Stars() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);
  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, []);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.015;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#7dd3fc"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
function FloatingOrb({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(clock.elapsedTime * speed) * 1.5;
      ref.current.position.x =
        position[0] + Math.cos(clock.elapsedTime * speed * 0.7) * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}
export default function StarField() {
  return (
    <div className="absolute inset-0 three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#38bdf8" />
        <Stars />
        <FloatingOrb position={[-8, 3, -5]} color="#0ea5e9" speed={0.5} />
        <FloatingOrb position={[6, -2, -8]} color="#38bdf8" speed={0.7} />
        <FloatingOrb position={[0, 5, -10]} color="#7dd3fc" speed={0.3} />
        <FloatingOrb position={[-4, -4, -6]} color="#0284c7" speed={0.6} />
      </Canvas>
    </div>
  );
}

