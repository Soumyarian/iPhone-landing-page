import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Model2 } from "../Components/Model2";
import {
  colorsAndTextData,
  StateData,
  useColorSectionContext,
} from "../Context/ColorSectionProvider";

export const ColorSection = () => {
  const { leftColor, rightColor, textColor, text, updateColorAndText } =
    useColorSectionContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let rightElem = rightRef.current!;
    let leftElem = leftRef.current!;
    let textElem = textRef.current!;

    textElem.innerText = text;
    textElem.style.color = textColor;

    leftElem.style.background = leftColor;
    rightElem.style.background = rightColor;
  }, [leftColor, rightColor, textColor, text]);

  useLayoutEffect(() => {
    let elem = sectionRef.current!;

    let updateColor = (data: StateData) => {
      updateColorAndText(data);
    };

    const trigger = ScrollTrigger.create({
      trigger: elem,
      start: "top top",
      end: `+=${elem.offsetWidth + 1000}`,
      pin: true,
      pinSpacing: true,
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "top top",
        end: `+=${elem.offsetWidth + 1000}`,
        scrub: true,
      },
    });
    colorsAndTextData.forEach(ctData => {
      t2.to(elem, {
        onStart: updateColor,
        onStartParams: [ctData],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ctData],
      });
    });

    return () => {
      if (trigger) trigger.kill();
      if (t2) t2.kill();
    };
  }, []);

  return (
    <div
      id="colorSection"
      ref={sectionRef}
      className="relative h-screen overflow-hidden w-full grid grid-cols-2">
      <div ref={leftRef} className="w-full"></div>
      <div ref={rightRef} className="w-full">
        <Canvas camera={{ fov: 7 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={5}></directionalLight>
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
        </Canvas>
      </div>
      <h4
        ref={textRef}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-8xl font-bold uppercase`}>
        {text}
      </h4>
    </div>
  );
};
