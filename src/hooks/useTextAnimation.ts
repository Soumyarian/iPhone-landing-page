import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const useTextAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const textOne = useRef<HTMLParagraphElement>(null);
  const textTwo = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=500 top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1").fromTo(
      textTwo.current,
      { x: 0 },
      { x: "-10%" },
      "key1"
    );
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return {
    container,
    textOne,
    textTwo,
  };
};
