import "./App.css";
import { useEffect } from "react";

import Hero from "./sections/Hero";
import ProductCarousel from "./sections/ProductCarousel";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FinalCTA from "./sections/FinalCTA";

export default function App() {
  useEffect(() => {
    // Respect user preference
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document
        .querySelectorAll("[data-ti-animate]")
        .forEach((el) => el.classList.add("ti-in"));
      return;
    }

    const els = Array.from(document.querySelectorAll("[data-ti-animate]"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("ti-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
