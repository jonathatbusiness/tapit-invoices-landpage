import "./App.css";

import Hero from "./sections/Hero";
import ProductCarousel from "./sections/ProductCarousel";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";

import FinalCTA from "./sections/FinalCTA";

export default function App() {
  return (
    <div className="ti-app">
      <Hero />
      <ProductCarousel />
      <Features />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
