import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Solutions from "@/components/sections/Solutions";
import CB7Section from "@/components/sections/CB7Section";
import CB7CTA from "@/components/sections/CB7CTA";
import Marquee from "@/components/sections/Marquee";
import DigitalBanking from "@/components/sections/DigitalBanking";
import N7CTA from "@/components/sections/N7CTA";
import Insights from "@/components/sections/Insights";
import CaseStudies from "@/components/sections/CaseStudies";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Solutions />
      <CB7Section />
      <CB7CTA />
      <Marquee />
      <DigitalBanking />
      <N7CTA />
      <Insights />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
