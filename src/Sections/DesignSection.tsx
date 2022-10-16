import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useTextAnimation } from "../hooks";

export const DesignSection = () => {
  const { container, textOne, textTwo } = useTextAnimation();

  return (
    <div
      ref={container}
      className="h-screen bg-neutral-100 w-full overflow-hidden relative">
      <div className="h-1/2 flex items-center p-8 justify-start">
        <p
          ref={textOne}
          className="w-3/6 text-left text-6xl leading-snug font-semibold">
          Flaw-less design with strong durability.
        </p>
      </div>
      <div className="h-1/2 flex items-center p-8 justify-end">
        <p
          ref={textTwo}
          className="w-3/4 text-right text-6xl leading-snug font-semibold">
          Flat edge design with toughest smartphones glass.
        </p>
      </div>
    </div>
  );
};
