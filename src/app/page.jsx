"use client";
import ImageList from "@/components/ImageList";
import mobile from "@/images/mobile1.webp";
import Image from "next/image";
import phone2 from "@/images/mobile2.webp";
import bg from "@/images/bg.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const trigger = useRef(); 
  const target = useRef();  
  const bgTarget = useRef();
  const timeline = useRef(); 
  const mobileTarget = useRef();
  const textTarget = useRef();
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * 1 * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: "main-banner",
        trigger: trigger.current,
        pin: true,
        scrub: 2, 
        start: "top top",
        end: "+=300vh", 
        
      },
    });

    timeline.current.fromTo(
      target.current,
      {
        x: "50vw",
        y: "-80vh",
        rotate: -45, 
      },
      {
        x: "40vw",
        y: "4vh", 
        rotate: 0, 
        ease: "power2.out",
        duration: 2
      },
      0
    );
    timeline.current.to(
      bgTarget.current,
      {
        opacity: 0,
        duration: 2
      },
      0
    );
    timeline.current.to(
      mobileTarget.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1
      },
      0
    );
    timeline.current.to(
      textTarget.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );

    return () => {
      timeline?.current?.kill(); 
    };
  }, [windowWidth]);
 
  return (
    <main className="p-16 xl:p-32 flex flex-col w-full items-center justify-center" ref={trigger}>
      <div className="main-wrapper">
        <Image src={phone2} className="animated-phone" alt="bg" ref={target} />
        <header className="main-banner">
          <Image src={bg} className="animated-bg" ref={bgTarget} alt="bg" />
          <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="banner-mob">
              <Image src={mobile} ref={mobileTarget} alt="mobile" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="banner-text text-white" ref={textTarget}>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
              </div>
            </div>
          </div>
        </div>
        </header>
       
      </div>
    </main>
  );
}
