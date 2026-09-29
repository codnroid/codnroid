import { Navigation } from '@/components/site/navigation';
import { Contact, Footer } from '@/components/site/contact';
import { Hero } from '@/components/site/hero';
import { Work, FeaturedProject } from '@/components/site/work';
import { Services, About, Process } from '@/components/site/studio';
import { Technology } from '@/components/site/technology';
import { Testimonials, FAQ } from '@/components/site/questions';
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
        <FeaturedProject />
        <About />
        <Process />
        <Technology />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
