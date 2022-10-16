import React from "react";
import backgroundVideo from "./../assets/video/hero_background.mp4";

export const HeroSection = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <video
          src={backgroundVideo}
          typeof="video/mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="absolute top-8 left-8 text-2xl text-gray-400">
        iPhone 14 Pro Max
      </div>
      <h1 className="absolute top-1/2 px-8 -translate-y-1/2 flex w-full justify-between items-center text-8xl text-gray-100 font-extrabold">
        <span>SO COLD</span>
        <span>SO BOLD</span>
      </h1>
    </div>
  );
};
