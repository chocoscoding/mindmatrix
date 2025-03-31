"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/magicui/HyperText";
import { ArrowRight } from "lucide-react";
import ScrambleIn from "@/components/animations/ScrambleIn";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page = () => {
  const container = useRef(null);

  // Define sections for the whitepaper
  const sections = [
    {
      id: "ai-protocol",
      title: "AI Protocol: The Brainpower of Mind Matrix",
      content:
        "Mind Matrix is built on an AI-powered algorithmic framework that adapts in real-time, making transactions faster and blockchain interactions seamless. The protocol operates as a self-learning neural network, optimizing transaction validation and reducing network congestion. With AI-driven consensus mechanisms, we eliminate inefficiencies and ensure faster, cost-effective transactions.",
      icon: "/security.png",
    },
    {
      id: "matrix-computation",
      title: "Matrix Computation in Blockchain",
      content:
        "Mind Matrix employs high-dimensional matrix computation to accelerate cryptographic processes and enhance blockchain throughput. By leveraging multi-layered neural computations, our system dynamically adjusts block generation speeds, making it a first-of-its-kind, AI-powered smart blockchain assistant.",
      icon: "/window.svg",
    },
    {
      id: "blockchain-analysis",
      title: "Blockchain Technical Analysis",
      content:
        "Mind Matrix AI scans network data, liquidity flows, and security threats to keep blockchain interactions optimized and secure. Our AI monitors market fluctuations, on-chain analytics, and historical trade data to predict trends and provide users with actionable insights.",
      icon: "/globe.svg",
    },
    {
      id: "smart-contract",
      title: "Smart Contract Optimization",
      content:
        "Our AI automates smart contract audits, identifying vulnerabilities before they become a problem. With automated code analysis and anomaly detection, we ensure zero-exploit contracts that safeguard transactions against malicious attacks.",
      icon: "/file.svg",
    },
    {
      id: "high-frequency",
      title: "High-Frequency Blockchain Transactions",
      content:
        "The Mind Matrix AI predicts and executes transactions with unmatched efficiency, making it a game-changer for DeFi and beyond. Using predictive analytics and deep learning, it preemptively organizes transactions, reducing gas fees and eliminating unnecessary transaction delays.",
      icon: "/crypto image.avif",
    },
  ];

  const apiFeatures = [
    "Automated blockchain interactions",
    "Predictive transaction execution",
    "Security analytics and scam detection",
    "Real-time blockchain communication tools",
  ];

  return (
    <div ref={container} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-36 pb-16">
        <FlickeringGrid
          className="absolute right-0 inset-0 z-0 size-full flex justify-center [mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={600}
          width={1900}
        />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              <span>Technical Documentation</span>
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              The Blueprint of
              <ScrambleIn
                className="bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 inline-block text-transparent bg-clip-text leading-[4.9rem] font-sans"
                text=" Decentralized Intelligence"
                scrambleSpeed={0.5}
                scrambledLetterCount={10}
                characters="10"
              />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Our whitepaper outlines the entire technical framework behind Mind Matrix, from AI-based computation models to blockchain
              consensus innovations. Read it to understand why Mind Matrix is unlike anything before it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-[6px] px-5 text-base bg-purple-500 hover:bg-purple-400 text-white">
                <span className="text-nowrap">Download Whitepaper</span>
              </Button>
              <Button variant="outline" size="lg" className="rounded-[6px] px-5 text-base">
                <span className="text-nowrap">Join Community</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Sections */}
      <section className="py-16 md:py-24 bg-black/5">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <HyperText className="bg-gradient-to-r from-purple-600 to-purple-100 inline-block text-transparent bg-clip-text font-sans">
              Additional Technical Sections
            </HyperText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-xl border border-muted/20 p-6 bg-background/80 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Image src={section.icon} alt={section.title} width={24} height={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">API for Developers: Unlock AI-Powered Blockchain</h2>
              <p className="text-muted-foreground mb-8">
                Mind Matrix offers an advanced API suite that allows developers to integrate AI-driven blockchain functionalities into their
                applications.
              </p>

              <ul className="space-y-4">
                {apiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Image src="/check.svg" alt="check" width={20} height={20} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-muted-foreground">
                This API gives developers access to a self-learning AI protocol, unlocking limitless possibilities for DApps, DeFi
                platforms, and blockchain security innovations.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-xl border overflow-hidden shadow-2xl">
                <Image src="/main.png" alt="API Documentation" width={600} height={400} className="w-full h-auto" />
              </div>
              <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(241,49,255,0.37),rgba(255,255,255,0))]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-24 bg-black/5">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <HyperText className="bg-gradient-to-r from-purple-600 to-purple-100 inline-block text-transparent bg-clip-text font-sans">
              Advanced Technical Features
            </HyperText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-muted/20 p-6 bg-background/80 backdrop-blur-sm transition-all hover:border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4">AI-Driven Consensus Mechanism</h3>
              <p className="text-muted-foreground">
                Mind Matrix introduces a hybrid consensus model powered by AI. Unlike traditional Proof-of-Work (PoW) or Proof-of-Stake
                (PoS) mechanisms, our AI-enhanced consensus adapts dynamically based on network conditions, ensuring unparalleled security
                and efficiency.
              </p>
            </div>

            <div className="rounded-xl border border-muted/20 p-6 bg-background/80 backdrop-blur-sm transition-all hover:border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4">Quantum-Resistant Encryption</h3>
              <p className="text-muted-foreground">
                Our AI protocol incorporates quantum-resistant encryption methods to safeguard blockchain security against future quantum
                computing threats. This ensures that Mind Matrix remains secure, scalable, and future-proof.
              </p>
            </div>

            <div className="rounded-xl border border-muted/20 p-6 bg-background/80 backdrop-blur-sm transition-all hover:border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4">The Future of AI x Blockchain</h3>
              <p className="text-muted-foreground">
                Mind Matrix is just the beginning. We are working on cross-chain interoperability, AI-driven DApps, and fully autonomous
                blockchain governance powered by machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]">
              <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={3}
                gridGap={5}
                color="#8B5CF6"
                maxOpacity={0.3}
                flickerChance={0.1}
                height={800}
                width={1200}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {` Mind Matrix is not just a project—it's the future of blockchain intelligence`}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">Get ready to be part of something revolutionary. 🚀</p>
              <Button size="lg" className="rounded-[6px] px-8 py-6 text-lg bg-purple-500 hover:bg-purple-400 text-white">
                <span className="text-nowrap">Join the Revolution</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
