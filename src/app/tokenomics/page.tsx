"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrambleIn from "@/components/animations/ScrambleIn";

export default function TokenomicsPage() {
  const [selectedTab, setSelectedTab] = useState("allocation");

  const tabs = [
    { id: "allocation", label: "Token Allocation" },
    { id: "vesting", label: "Vesting Schedule" },
    { id: "utility", label: "Token Utility" },
  ];

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16">
      <motion.section
        className="py-16 text-white flex flex-col items-center mt-6 h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center">
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
        </motion.div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section: Text Content */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}>
              <h4 className="text-lg font-semibold mb-2">Total Supply:</h4>
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">1,000,000,000 MMX</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The revolution begins April 6, 2024. MindMatrix token (MMX) employs a fair launch model designed to reward early adopters
                and ensure long-term sustainability.
              </p>

              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500 mt-1 mr-3 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-white">Public Sale: 40%</span> - Available through DEX launch and CEX listings
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-white">Community Rewards: 25%</span> - Allocated for staking rewards, airdrops, and
                    ecosystem growth
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-white">Team & Development: 15%</span> - 2-year vesting with 6-month cliff
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 mt-1 mr-3 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-white">Treasury & Partnerships: 10%</span> - For strategic investments and exchange
                    listings
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-pink-500 mt-1 mr-3 flex-shrink-0"></div>
                  <p>
                    <span className="font-semibold text-white">Liquidity Pool: 10%</span> - Locked for 2 years to ensure stability
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Section: Chart/Visual */}
            <motion.div
              className="relative flex justify-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}>
              <div className="w-full max-w-md aspect-square">
                <Image
                  src="/fairlaunch.jpg"
                  alt="MMX Token Allocation Chart"
                  width={500}
                  height={500}
                  className="rounded-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/placeholder-chart.png";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="mt-24 w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 p-1 bg-[#1b191e] rounded-[6px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 py-2 rounded-[5px] transition-all duration-300 ${
                    selectedTab === tab.id ? "bg-purple-600 text-white" : "bg-transparent text-gray-400 hover:text-white"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content with sliding animations */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {selectedTab === "allocation" && (
                <motion.div
                  key="allocation"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full">
                  <div className="bg-[#1b191e] p-6 rounded-[6px]">
                    <h3 className="text-2xl font-bold mb-4">Token Allocation Details</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-purple-400 mb-2">Public Sale (40%)</h4>
                        <p className="text-gray-300">
                          400,000,000 MMX tokens available through our fair launch on DEXs and subsequent CEX listings. No presale or
                          private allocation ensures everyone has equal opportunity.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-400 mb-2">Community Rewards (25%)</h4>
                        <p className="text-gray-300">
                          250,000,000 MMX allocated for staking rewards, community competitions, airdrops, and ecosystem growth initiatives.
                          Released over 4 years to sustain long-term community engagement.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-400 mb-2">Team & Development (15%)</h4>
                        <p className="text-gray-300">
                          150,000,000 MMX reserved for the team, advisors, and future development. Subject to a 2-year vesting schedule with
                          a 6-month cliff to align incentives with long-term success.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-2">Treasury & Partnerships (10%)</h4>
                        <p className="text-gray-300">
                          100,000,000 MMX allocated for strategic partnerships, exchange listings, and market making. Multi-sig controlled
                          and transparent utilization.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-pink-400 mb-2">Liquidity Pool (10%)</h4>
                        <p className="text-gray-300">
                          100,000,000 MMX paired with ETH and locked in liquidity pools for 2 years minimum to ensure trading stability and
                          reduce price impact of large transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedTab === "vesting" && (
                <motion.div
                  key="vesting"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full">
                  <div className="bg-[#1b191e] p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Vesting Schedule</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto text-left">
                        <thead>
                          <tr className="bg-[#242228]">
                            <th className="px-4 py-2 border-b border-gray-700">Allocation</th>
                            <th className="px-4 py-2 border-b border-gray-700">Cliff</th>
                            <th className="px-4 py-2 border-b border-gray-700">Vesting Duration</th>
                            <th className="px-4 py-2 border-b border-gray-700">Release Schedule</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr>
                            <td className="px-4 py-3 border-b border-gray-700">Public Sale</td>
                            <td className="px-4 py-3 border-b border-gray-700">None</td>
                            <td className="px-4 py-3 border-b border-gray-700">Immediate</td>
                            <td className="px-4 py-3 border-b border-gray-700">100% at TGE</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 border-b border-gray-700">Team & Development</td>
                            <td className="px-4 py-3 border-b border-gray-700">6 months</td>
                            <td className="px-4 py-3 border-b border-gray-700">24 months</td>
                            <td className="px-4 py-3 border-b border-gray-700">Linear daily after cliff</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 border-b border-gray-700">Community Rewards</td>
                            <td className="px-4 py-3 border-b border-gray-700">None</td>
                            <td className="px-4 py-3 border-b border-gray-700">48 months</td>
                            <td className="px-4 py-3 border-b border-gray-700">Progressive release</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 border-b border-gray-700">Treasury & Partnerships</td>
                            <td className="px-4 py-3 border-b border-gray-700">3 months</td>
                            <td className="px-4 py-3 border-b border-gray-700">36 months</td>
                            <td className="px-4 py-3 border-b border-gray-700">Strategic release</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 border-b border-gray-700">Liquidity Pool</td>
                            <td className="px-4 py-3 border-b border-gray-700">None</td>
                            <td className="px-4 py-3 border-b border-gray-700">24 months lock</td>
                            <td className="px-4 py-3 border-b border-gray-700">100% locked for 2 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedTab === "utility" && (
                <motion.div
                  key="utility"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full">
                  <div className="bg-[#1b191e] p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">MMX Token Utility</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        className="bg-[#242228] p-5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <h4 className="text-xl font-semibold text-purple-400 mb-3">Governance</h4>
                        <p className="text-gray-300">
                          MMX holders can vote on important protocol decisions, proposals, and ecosystem fund allocations. The more tokens
                          staked, the higher your governance power.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-[#242228] p-5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <h4 className="text-xl font-semibold text-green-400 mb-3">Platform Access</h4>
                        <p className="text-gray-300">
                          Access premium features within the MindMatrix ecosystem, with token holders receiving priority for new feature
                          rollouts and exclusive functionality.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-[#242228] p-5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <h4 className="text-xl font-semibold text-blue-400 mb-3">Staking Rewards</h4>
                        <p className="text-gray-300">
                          Stake MMX to earn passive rewards and boost your APY through longer lock periods. Staking also provides governance
                          rights within the DAO.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-[#242228] p-5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-3">Fee Discounts</h4>
                        <p className="text-gray-300">
                          Hold MMX to receive tiered discounts on platform fees and special access to new products before they launch to the
                          general public.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
