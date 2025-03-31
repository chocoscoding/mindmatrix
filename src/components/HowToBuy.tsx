"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wallet, CreditCard, Link as LinkIcon, DollarSign, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { HyperText } from "./magicui/HyperText";

export default function Howtobuy() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4" | "item-5";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/phantom.webp",
      alt: "Set up Phantom Wallet",
    },
    "item-2": {
      image: "/fund.jpg",
      alt: "Fund your wallet",
    },
    "item-3": {
      image: "/connect.avif",
      alt: "Connect to Photon Exchange",
    },
    "item-4": {
      image: "/profit.avif",
      alt: "Buy MMT",
    },
    "item-5": {
      image: "/profit.avif",
      alt: "HODL & Profit",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 flex flex-col items-center relative">
      <HyperText
        className="text-center text-4xl mb-10 font-normal  bg-gradient-to-r from-purple-600 to-purple-100 inline-block text-transparent bg-clip-text  font-sans"
        startOnView={true}
        animateOnHover={false}>
        How To Buy
      </HyperText>
      <div className="bg-linear-to-b absolute left-0 inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl block to-[color-mix(in_oklab,var(--color-purple-900)_9%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 [--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Are you ready for NEXT gen AI</h2>
          <p>Buy Mind Matrix in just 5 steps.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion type="single" value={activeItem} onValueChange={(value) => setActiveItem(value as ImageKey)} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Wallet className="size-4" />
                  Set Up a Phantom Wallet
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {`Install the Phantom wallet extension from your browser's store or download the mobile app. Create a new wallet and securely
                store your recovery phrase to protect your private keys.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <CreditCard className="size-4" />
                  Fund Your Wallet
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {`Purchase SOL directly through Phantom's built-in fiat on-ramp or transfer cryptocurrency from another exchange or wallet.
                Ensure you have enough to cover your MMT purchase and transaction fees.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <LinkIcon className="size-4" />
                  Connect to Photon Exchange
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {`Visit the Photon Exchange platform and click "Connect Wallet". Select Phantom from the wallet options and approve the
                connection request in your Phantom wallet to access MMT trading.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <DollarSign className="size-4" />
                  Buy MMT
                </div>
              </AccordionTrigger>
              <AccordionContent>
                On the exchange interface, select the MMT/SOL trading pair. Enter the amount of MMT you want to purchase or the amount of
                SOL you want to spend. Review the transaction details and confirm your purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <TrendingUp className="size-4" />
                  HODL & Profit
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Congratulations, you now own the future of AI-driven blockchain! Your MMT tokens will appear in your Phantom wallet. Hold
                your tokens securely as Mind Matrix continues to revolutionize the blockchain space.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam duration={6} size={200} className="from-transparent to-transparent via-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
