"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const services = ["Security", "AI Intelligence", "AntiRugging System"];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(1px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroAnim = () => {
  const topSection = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger); // register the hook to avoid React version discrepancies
      gsap.to(topSection.current, {
        width: "1500px",
        maxWidth: "auto",
        ease: "power1",
        scrollTrigger: {
          trigger: topSection.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}>
        <div
          className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem] container max-w-[1300px] xl:max-w-none xl:w-[1300px] w-[99%] bg-black mt-[6rem] mx-auto"
          ref={topSection}>
          <div className="pointer-events-none absolute left-0 top-0 h-full md:w-3/5 xl:w-auto">
            <Image
              src={"/services/service-1.png"}
              alt="smartest ai"
              width={800}
              height={730}
              className="size-full object-cover md:object-right"
            />
          </div>
          <div className="relative z-1 ml-auto max-w-[19rem]">
            <h4 className="h4 mb-4 text-3xl font-sans">Mind Matrix</h4>
            <p className="body-2 mb-12 text-xl">{`It's not just a coin—it’s an AI-driven supercomputer`}</p>
            <ul className="body-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start border-t border-n-6 py-4">
                  <Image src={"/check.svg"} alt="check" width={24} height={24} />
                  <p className="ml-4">{service}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedGroup>
    </div>
  );
};

export default HeroAnim;
