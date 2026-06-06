import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
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
import PageEffects from "@/components/PageEffects";
import BgFx from "@/components/BgFx";

export default function Home() {
  return (
    <>
      <BgFx />
      <span id="top" />
      <Navbar />
      <Hero />
      <Statement />
      <LogoStrip />
      <hr className="divider" />
      <Services />
      <hr className="divider" />
      <Work />
      <Impact />
      <hr className="divider" />
      <Process />
      <hr className="divider" />
      <TechStack />
      <hr className="divider" />
      <Industries />
      <hr className="divider" />
      <WhyUs />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Testimonials />
      <hr className="divider" />
      <Engagement />
      <FAQ />
      <hr className="divider" />
      <Contact />
      <Footer />
      <ScrollReveal />
      <PageEffects />
    </>
  );
}
