import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import ScrambleIn from "./animations/ScrambleIn";
import HeroAnim from "./HeroAnim";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import CountUp from "./animations/CountUp";

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

export default function HeroSection() {
  return (
    <>
      <main className="">
        <section>
          <div className="relative pt-24 md:pt-36">
            <FlickeringGrid
              className="absolute bg-transparent right-0 inset-0 z-0 size-full flex justify-center [mask-image:radial-gradient(650px_circle_at_center,black,transparent)]"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={1300}
              width={1300}
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  {/* <Link
                    href="/whitepaper"
                    className="hover:bg-background hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors duration-300 border-t-white/5 shadow-zinc-950">
                    <span className="text-foreground text-sm">Read our whitepaper</span>
                    <span className="border-background block h-4 w-0.5 border-l bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link> */}
                  <div className="m-fit flex justify-center text-center">
                    <HoverBorderGradient
                      containerClassName="rounded-full border-[#e7bcff19]"
                      as="button"
                      className="bg-black text-white text-xl flex items-center space-x-2">
                      <span>
                        <CountUp className="font-sans" from={2999900} to={3000000} separator="," duration={2} /> Blocks <b> Processed</b>
                      </span>
                    </HoverBorderGradient>
                  </div>

                  <h1 className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.5rem] z-2">
                    The Future of <br />
                    <ScrambleIn
                      className="text-4xl sm:text-5xl md:text-7xl xl:text-[5rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 inline-block text-transparent bg-clip-text sm:leading-[6.8rem] -mb-6  font-sans"
                      text="Decentralized Intelligence"
                      scrambleSpeed={5}
                      scrambledLetterCount={5}
                      characters="10"
                    />
                  </h1>
                  <TextEffect
                    per="line"
                    preset="slide"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                  </TextEffect>
                </AnimatedGroup>

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
                  }}
                  className="mt-7 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-[6px] px-5 text-base  bg-purple-500 hover:bg-purple-400 text-white w-[200px] h-[48px]">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <HeroAnim />
          </div>
        </section>
      </main>
    </>
  );
}
