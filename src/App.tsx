import "@fontsource/montserrat";
import "@fontsource/lora";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

import {
  HeroSection,
  Quote,
  DesignSection,
  DisplaySection,
  ProcessorSection,
  BatterySection,
  ColorSection,
  GallerySection,
  Enviournment3D,
  PricingSection,
} from "./Sections";
import { ColorSectionProvider } from "./Context/ColorSectionProvider";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ColorSectionProvider>
      <Quote />
      <Enviournment3D />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <GallerySection />
      <PricingSection />
    </ColorSectionProvider>
  );
}

export default App;
