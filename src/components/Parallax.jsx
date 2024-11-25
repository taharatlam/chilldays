"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax" }) {
  const trigger = useRef(); // this is the element that will trigger the animation
  const target = useRef();  // this is the element that will be animated
  const timeline = useRef(); // this is the timeline of the animation that will be created by gsap 
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * speed * 0.1;


    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current, 
        scrub: true, 
        start: "top bottom",
        end: "bottom top", 
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline?.current?.kill(); // this will kill the animation when the component unmounts
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
