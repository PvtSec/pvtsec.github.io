import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const text = "PvtSec";
const fontUrl = "/fonts/roboto/Roboto-Thin.json";

const GlowingLight = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Pendulum parameters
  const origin = new THREE.Vector3(3.25, 4.2, 0.05);
  const length = 4;
  const swingAmplitude = Math.PI / 4;
  const swingSpeed = 1.2;

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const angle = swingAmplitude * Math.cos(swingSpeed * elapsed);

    const x = origin.x + length * Math.sin(angle);
    const y = origin.y - length * Math.cos(angle);
    const z = origin.z;

    meshRef.current.position.set(x, y, z);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.04, 64, 64]} />
      <meshStandardMaterial
        emissive={"#FF7518"}
        color="#FF7518"
        emissiveIntensity={1.5}
      />
      <pointLight color="#AA4203" intensity={200} distance={48} />
    </mesh>
  );
};

const Title3DText = () => (
  <Center>
    <Text3D
      font={fontUrl}
      size={1.5}
      height={0.01}
      bevelEnabled
      bevelThickness={0.01}
      bevelSize={0.02}
      bevelSegments={5}
    >
      {text}
      <meshStandardMaterial color="#444" transparent opacity={0.5} />
    </Text3D>
    <GlowingLight />
  </Center>
);

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Fixed fullscreen Canvas in background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
          <ambientLight intensity={0.3} />
          <Title3DText />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* All scrollable content above */}
      <div className="relative z-10">
        <div className="h-screen" />
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full border-t-4 border-white/85 text-center h-[60vh] font-roboto text-2xl font-semibold tracking-widest text-white backdrop-blur-[0.4em] z-50 rounded-t-[4em]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
