import Hero from "@/features/landing-page/components/Hero";
import Features from "@/features/landing-page/components/Features";
import CTA from "@/features/landing-page/components/CTA";
import HowItWorks from "@/features/landing-page/components/HowItWorks";
import Testimonials from "@/features/landing-page/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mt-10">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
}
