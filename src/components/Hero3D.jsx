import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

function TorusKnot({ mouse, isMobile }) {
  const ref = useRef(null);

  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;

    // responsive anchors
    const baseX = isMobile ? 0.0 : 1.35; // desktop right; mobile centered
    const baseY = isMobile ? -1.25 : 0.0;
    const targetScale = isMobile ? 0.52 : 0.68;

    // reduce motion on mobile (no mouse)
    const mx = isMobile ? 0 : mouse.current.x;
    const my = isMobile ? 0 : mouse.current.y;

    // idle rotation (slower on mobile)
    const idleY = isMobile ? 0.08 : 0.12;
    const idleX = isMobile ? 0.03 : 0.05;
    g.rotation.y += delta * idleY;
    g.rotation.x += delta * idleX;

    // parallax (disabled on mobile)
    const targetRotY = mx * (isMobile ? 0.0 : 0.6);
    const targetRotX = my * (isMobile ? 0.0 : 0.45);

    g.rotation.y += (targetRotY - g.rotation.y) * 0.12;
    g.rotation.x += (targetRotX - g.rotation.x) * 0.12;

    // anchor position (+ small parallax on desktop)
    g.position.x += (baseX + mx * 0.18 - g.position.x) * 0.12;
    g.position.y += (baseY + my * 0.10 - g.position.y) * 0.12;

    // smooth scale
    g.scale.x += (targetScale - g.scale.x) * 0.12;
    g.scale.y += (targetScale - g.scale.y) * 0.12;
    g.scale.z += (targetScale - g.scale.z) * 0.12;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.85, 0.22, 96, 16]} />
      <meshStandardMaterial color="#e6e6e6" metalness={1} roughness={0.35} />
    </mesh>
  );
}

export default function Hero3D() {
  const isMobile = useIsMobile(768);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => (mouse.current = { x: 0, y: 0 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    !isMobile && <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      <Canvas
        style={{ pointerEvents: "none" }}
        dpr={isMobile ? [1, 1] : [1, 1.25]} // mobile perf win
        camera={{ position: [0, 0.1, 3.2], fov: 45 }}
        gl={{ alpha: true, antialias: !isMobile, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 6, 4]} intensity={1.3} />
        <directionalLight position={[-4, 2, 3]} intensity={0.8} />
        <directionalLight position={[0, 0, 6]} intensity={0.6} />

        <TorusKnot mouse={mouse} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
