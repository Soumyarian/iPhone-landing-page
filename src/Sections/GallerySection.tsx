import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import scruba_diving from "./../assets/video/scuba_diving.mp4";
import skate from "./../assets/video/skate.mp4";

export const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const elem = sectionRef.current!;
    const video1 = videoRef1.current!;
    const video2 = videoRef2.current!;
    const elements = gsap.utils.selector(titleRef);

    const trigger = ScrollTrigger.create({
      trigger: elem,
      start: "top top",
      end: `bottom+=500 bottom`,
      pin: true,
      pinSpacing: true,
    });

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: true,
        },
      })
      .to(video2, { scale: 0.5 }, "key")
      .to(video1, { scale: 0.5 }, "key");

    elements("p").forEach(el => {
      tl.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    });

    return () => {
      if (trigger) trigger.kill();
      if (tl) tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen relative w-full bg-stone-100 z-10">
      <video
        ref={videoRef1}
        typeof="video/mp4"
        className="absolute top-0 left-0 w-full h-screen object-cover origin-top-left"
        src={skate}
        autoPlay
        loop
        muted
      />
      <video
        ref={videoRef2}
        typeof="video/mp4"
        className="absolute top-0 left-0 w-full h-screen object-cover origin-bottom-left scale-0"
        src={scruba_diving}
        autoPlay
        loop
        muted
      />
      <div
        ref={titleRef}
        className="w-1/2 h-full flex flex-col justify-around items-center gap-8 absolute top-0 right-0 ">
        <p className="text-9xl uppercase font-bold">Ready</p>
        <p className="text-9xl uppercase font-bold">Steady</p>
        <p className="text-9xl uppercase font-bold">Action</p>
      </div>
    </div>
  );
};
