import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../Components/Model";

export const Enviournment3D = () => {
  return (
    <div
      id="enviournment"
      className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-transparent pointer-events-none">
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={5}></directionalLight>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
