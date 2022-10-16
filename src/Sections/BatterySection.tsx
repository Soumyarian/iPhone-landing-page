import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const BatterySection = () => {
  const container = useRef<HTMLDivElement>(null);
  const battery = useRef<HTMLUListElement>(null);
  const elements = gsap.utils.selector(battery);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    elements("li").forEach((el, index) => {
      tl.to(el, {
        scrollTrigger: {
          trigger: container.current,
          start: `top+=${index * (window.innerHeight / 10)} top`,
          end: `bottom-=${(10 - index) * (window.innerHeight / 10)} center`,
          scrub: true,
        },
        opacity: 1,
      });
    });
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <div
      id="batterySection"
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-gray-200 flex justify-center items-center">
      <div className="w-4/6 flex flex-col items-center gap-8">
        <h1 className="text-8xl font-bold text-center capitalize leading-tight">
          Go all day with single charge
        </h1>
        <ul
          ref={battery}
          className="w-3/4 h-48 flex gap-2 rounded-lg p-2 shadow-lg shadow-cyan-500/50 ">
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
          <li className="h-full opacity-0 flex-1 bg-gradient-to-tr from-fuchsia-400 to-blue-400" />
        </ul>
      </div>
    </div>
  );
};
