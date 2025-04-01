import AboutUs from "@/components/AboutUs";
import Howtobuy from "@/components/HowToBuy";
// import LaunchAndSupply from "@/components/LaunchAndSupply";
import Security from "@/components/Security";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Security />
      {/* <LaunchAndSupply /> */}
      <Howtobuy />
    </>
  );
}
