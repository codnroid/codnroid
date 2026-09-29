import { Navigation } from '@/components/site/navigation';
import { Contact, Footer } from '@/components/site/contact';
import { Hero } from '@/components/site/hero';
import { Work } from '@/components/site/work';
import { Services, About, Process } from '@/components/site/studio';
import { Technology } from '@/components/site/technology';
import { Testimonials, FAQ } from '@/components/site/questions';
import { ProjectPlanner } from '@/components/site/project-planner';
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp';
import { ScrollRevealProvider } from '@/components/site/scroll-reveal';

export default function Home() {
  return (
    <div className="site-canvas" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Services />
        <ProjectPlanner />
        <Technology />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRevealProvider />
    </div>
  );
}
