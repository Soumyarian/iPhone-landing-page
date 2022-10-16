import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useLayoutEffect, useRef } from "react";

export const Quote = () => {
  const quoteSection = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const section = quoteSection.current;
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <section
      ref={quoteSection}
      className="w-full min-h-screen bg-neutral-900 relative flex justify-center items-center top-0 left-0 pin">
      <div className="absolute text-white flex flex-col gap-2 lg:gap-4">
        <div className="overflow-hidden">
          <p className="quote-text">
            " You can't connect the dots by looking forward,
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="quote-text" style={{ animationDelay: "0.25s" }}>
            &nbsp;&nbsp; you can only connect them looking backward.
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="quote-text" style={{ animationDelay: "0.5s" }}>
            &nbsp;&nbsp; So you have to trust the dots,
          </p>
        </div>
        <div className="overflow-hidden ">
          <p className="quote-text" style={{ animationDelay: "0.75s" }}>
            &nbsp;&nbsp; will somehow connect in your future. "
          </p>
        </div>
        <div className="overflow-hidden">
          <p
            className="text-sm lg:text-xl text-right relative translate-y-8 moveUpAnimation bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
            style={{ animationDelay: "1s" }}>
            - Steve Jobs
          </p>
        </div>
      </div>
    </section>
  );
};
