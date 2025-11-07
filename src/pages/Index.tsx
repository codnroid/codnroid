import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
