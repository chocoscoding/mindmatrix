import Image from "next/image";
import ScrambleIn from "./animations/ScrambleIn";

const LaunchAndSupply = () => {
  return (
    <section className="py-16 text-white flex flex-col items-center mt-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-1 font-sans">
        <ScrambleIn
          text="Tokenomics"
          scrambleSpeed={20}
          scrambledLetterCount={3}
          characters="!@#$%^&*()_+0123456789"
          className="text-purple-400"
          scrambledClassName="text-purple-300/70"
        />
      </h2>

      <h2 className="text-xl md:text-3xl mb-12">Transparent & Fair Allocation</h2>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center flex-wrap-reverse">
          {/* Left Section: Text Content */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Total Supply:</h4>
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">1,000,000,000 MMX</p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The revolution begins April 6, 2025, at 1:30 PM UTC. This is your chance to get in early on the future of AI-powered
              blockchain evolution. Don’t miss out!
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold">Public Sale:</span> 50% – 500,000,000 MMX
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold">Development Team (Vested 4 Years):</span> 20% – 200,000,000 MMX
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold">Reserve Fund:</span> 15% – 150,000,000 MMX
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold">Marketing & Partnerships:</span> 10% – 100,000,000 MMX
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <div>
                  <span className="font-semibold">Community Rewards:</span> 5% – 50,000,000 MMX
                </div>
              </li>
            </ul>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-[6px] shadow-md transition">
              Buy Now
            </button>
          </div>

          {/* Right Section: Decorative Content */}
          <div className="flex justify-center items-center">
            <Image src="/fairlaunch.jpg" alt="Tokenomics Illustration" width={500} height={500} className="rounded-[6px] shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchAndSupply;
