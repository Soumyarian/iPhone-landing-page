import React from "react";

export const ProcessorSection = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative bg-neutral-900 px-8 flex items-center">
      <h1 className="absolute w-full z-10 bottom-8 text-center text-6xl font-bold text-gradient">
        Fastest Processor
      </h1>
      <div className="absolute top-1/2 left-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 gradientShadow p-1 rounded-sm overflow-hidden">
        <img src="/chip.jpg" alt="Apple Chip" />
      </div>
      <p className="w-1/4 text-gray-300 text-xs leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        quibusdam obcaecati recusandae ex corporis alias maxime magni quae unde
        laboriosam nostrum, iste tempore voluptatem cum, veniam assumenda quasi!
        Molestiae natus nemo error accusantium, amet ducimus dolores nostrum
        animi adipisci veniam tempore explicabo soluta velit! Alias nostrum
        iusto quaerat voluptate quod, optio dicta ipsum tenetur culpa nobis ea.
        Aliquam quis fugiat vitae aperiam saepe excepturi dicta provident
        explicabo cupiditate reprehenderit, officia rem animi natus delectus
      </p>
    </div>
  );
};
