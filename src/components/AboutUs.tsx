import Image from "next/image";
import { HyperText } from "./magicui/HyperText";

export default function AboutUs() {
  return (
    <section className="py-4 md:py-12 flex flex-col items-center">
      <HyperText
        className="text-center text-4xl mb-10 font-normal  bg-gradient-to-r from-purple-600 to-purple-100 inline-block text-transparent bg-clip-text  font-sans"
        startOnView={true}
        animateOnHover={false}>
        About Us
      </HyperText>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The First AI Protocol That Thinks in Matrices.</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground text-lg">
              Mind Matrix is the first AI protocol that directly communicates with the blockchain using advanced matrix calculations. <br />{" "}
              <br />
              <span className="text-accent-foreground font-bold">This enables:</span>
            </p>
            <p className="text-muted-foreground">
              Mind Matrix is the first AI protocol that directly communicates with the blockchain using advanced matrix calculations. Our
              AI-driven computation system enables ultra-fast consensus, <b>real-time self-optimization</b>, and{" "}
              <b>unprecedented blockchain efficiency</b>. Say goodbye to slow transactions and hello to the{" "}
              <b>future of decentralized intelligence</b>.
            </p>
          </div>
          <div className="relative mt-6 sm:-mt-11">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(241, 49, 255, 0.37),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(225, 0, 255, 0.418),rgba(255,255,255,0))]"></div>
            <div className="aspect-67/34 relative rounded-2xl p-px">
              <Image src="/main.png" className="rounded-[15px] shadow" alt="payments illustration light" width={1206} height={612} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
