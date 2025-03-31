import React from "react";
import LetterGlitch from "./animations/LetterGlitch";
import ScrambleIn from "./animations/ScrambleIn";

const Security = () => {
  return (
    <div className="relative w-full py-16 md:py-24 bg-transparent overflow-hidden">
      {/* Gradient fades at top and bottom */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>

      {/* LetterGlitch Background */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <LetterGlitch
          glitchColors={["#4c1d95", "#c084fc", "#a78bfa"]}
          glitchSpeed={80}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-sans">
              <ScrambleIn
                text="The Ultimate Anti-Rug Defense"
                scrambleSpeed={20}
                scrambledLetterCount={3}
                characters="!@#$%^&*()_+0123456789"
                className="text-purple-400"
                scrambledClassName="text-purple-300/70"
              />
            </h2>

            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Mind Matrix Firewall is an AI-powered security protocol designed to detect and eliminate scams, rug pulls, and malicious
                actors in real-time. Using advanced pattern recognition and predictive analysis, our system ensures that your investments
                stay safe in a decentralized world. Our firewall acts as an autonomous guardian, constantly scanning the blockchain for any
                suspicious activities and intervening before they can cause harm.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SecurityFeature
                title="Real-time Threat Detection"
                description="Continuous monitoring of blockchain transactions to identify suspicious patterns"
              />
              <SecurityFeature
                title="Smart Contract Audit"
                description="Automated analysis of smart contracts to detect potential vulnerabilities"
              />
              <SecurityFeature
                title="Malicious Actor Tracking"
                description="Database of known scammers and monitoring of their activities"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityFeature = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-transparent p-6 rounded-[5px] border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg shadow-purple-900/20 hover:shadow-purple-800/30 backdrop-blur-[2px] hover:bg-purple-100/10">
      <h3 className="text-xl font-bold text-purple-300 mb-3">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default Security;
