import React from "react";
import { useTextAnimation } from "../hooks";

export const DisplaySection = () => {
  const { container, textOne, textTwo } = useTextAnimation();

  return (
    <div className="h-[200vh] w-full overflow-hidden relative bg-neutral-900 px-8">
      <div className="h-1/4 flex items-center justify-start text-white">
        <p className="text-6xl font-bold leading-snug bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Immersive <br /> Display
        </p>
      </div>
      <div className="h-1/4 flex flex-col gap-4 items-end justify-center text-white">
        <h5 className="text-2xl font-semibold">Super Ratina XDR Display</h5>
        <p className="text-right w-1/4 text-gray-300">
          Super bright and high resolution display. Get an silky smooth
          scrolling experience.
        </p>
      </div>
      <div className="h-1/4 flex flex-col gap-4 items-start justify-center text-white">
        <h5 className="text-2xl font-semibold">Bigger is Better</h5>
        <p className="text-left w-1/4 text-gray-300">
          Super bright and high resolution display. Get an silky smooth
          scrolling experience with 120Hz display.
        </p>
      </div>
      <div
        ref={container}
        className="h-1/4 text-6xl font-bold leading-snug flex flex-col items-center justify-center text-white">
        <p ref={textOne}>Tougher then ever!</p>
        <p ref={textTwo}> Every touch matters.</p>
      </div>
    </div>
  );
};
