import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Impact from "@/components/Impact";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Engagement from "@/components/Engagement";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BgFx from "@/components/BgFx";

export default function Home() {
  return (
    <>
      <BgFx />
      <span id="top" />
      <Navbar />
      <Hero />
      <LogoStrip />
      <hr className="glow-divider" />
      <Services />
      <hr className="glow-divider" />
      <Work />
      <Impact />
      <hr className="glow-divider" />
      <Process />
      <hr className="glow-divider" />
      <TechStack />
      <hr className="glow-divider" />
      <Industries />
      <hr className="glow-divider" />
      <WhyUs />
      <hr className="glow-divider" />
      <About />
      <hr className="glow-divider" />
      <Testimonials />
      <hr className="glow-divider" />
      <Engagement />
      <FAQ />
      <hr className="glow-divider" />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
