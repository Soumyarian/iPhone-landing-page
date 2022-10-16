import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model3 } from "../Components/Model3";
import {
  colorsAndTextData,
  useColorSectionContext,
} from "../Context/ColorSectionProvider";

export const PricingSection = () => {
  const { leftColor, rightColor, textColor, text, updateColorAndText } =
    useColorSectionContext();
  return (
    <div
      style={{ background: leftColor }}
      className="w-full h-screen flex items-center justify-end overflow-hidden relative z-10">
      <div className="flex relative w-3/4 h-full cursor-grab justify-center items-center">
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={5}></directionalLight>
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>
          <OrbitControls enableZoom={false} />
          <Environment preset="night" />
        </Canvas>
        <ul className="absolute top-1/2 -translate-y-1/2 right-12 flex flex-col gap-8">
          {colorsAndTextData.map(ctData => {
            return (
              <li
                key={ctData.textColor}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => updateColorAndText(ctData)}>
                <div
                  className={`w-10 h-10 rounded-full border-4`}
                  style={{
                    background: ctData.textColor,
                    borderColor: ctData.rightColor,
                  }}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-white">
                    {ctData.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-4 absolute top-1/2 -translate-y-1/2 left-12">
        <p className="text-2xl font-semibold text-white">iPhone</p>
        <h1 className="text-8xl font-extrabold text-white">14 Pro Max</h1>
        <h3 className="text-4xl font-semibold text-white">From $1099*</h3>
        <div className="flex items-center gap-4">
          <button
            style={{ background: textColor }}
            className="text-black focus:ring-4 font-medium rounded-full text-lg px-5 py-2.5 text-center">
            Buy Now
          </button>
          <button
            style={{ borderColor: textColor, color: textColor }}
            className="text-black border-2 focus:ring-4 font-medium rounded-full text-lg px-5 py-2.5 text-center">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
