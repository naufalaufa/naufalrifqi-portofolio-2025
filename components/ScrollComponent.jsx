"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = "CODE ✦ EAT ✦ SLEEP ✦ REPEAT ✦";

const ScrollComponent = () => {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(rowOneRef.current, {
        x: 60,
        scrollTrigger: {
          trigger: rowOneRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(rowTwoRef.current, {
        x: -60,
        scrollTrigger: {
          trigger: rowTwoRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden py-2 select-none">
      <div
        ref={rowOneRef}
        className="flex bg-white text-black py-4 -rotate-1"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="text-sm md:text-xl lg:text-2xl font-extrabold tracking-[0.2em] uppercase whitespace-nowrap px-8"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>

      <div
        ref={rowTwoRef}
        className="flex bg-black text-white py-4 rotate-1 border-y border-white/10"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="text-sm md:text-xl lg:text-2xl font-extrabold tracking-[0.2em] uppercase whitespace-nowrap px-8"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
