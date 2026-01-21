import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatYouCanDo from "@/components/WhatYouCanDo";
import ExampleOutputs from "@/components/ExampleOutputs";
import TrustPrivacy from "@/components/TrustPrivacy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-hero-glow">
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouCanDo />
        <ExampleOutputs />
        <TrustPrivacy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
