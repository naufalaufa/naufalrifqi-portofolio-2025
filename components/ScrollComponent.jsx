"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    gsap.to(rowOneRef.current, {
      x: 26,
      scrollTrigger: {
        trigger: rowOneRef.current,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.to(rowTwoRef.current, {
      x: -8,
      scrollTrigger: {
        trigger: rowTwoRef.current,
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div
        ref={rowOneRef}
        className="grid grid-cols-3 gap-28 bg-black text-white -rotate-1"
      >
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
      </div>

      <div
        ref={rowTwoRef}
        className="grid grid-cols-3 gap-28 bg-white text-black -rotate-0 "
      >
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
        <div className=" text-xs text-center w-full md:text-xl lg:text-3xl font-bold whitespace-nowrap">
          CODE EAT SLEEP REPEAT
        </div>
      </div>
    </>
  );
};

export default ScrollComponent;
