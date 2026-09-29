import { ArrowDown, ArrowUpRight, Atom, Braces, Wind } from 'lucide-react';
import { ProjectLink } from './primitives';
import { ProductScene } from './product-scene';

export function Hero() {
  return (
    <>
      <section className="hero section" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            DIGITAL PRODUCT STUDIO
          </p>
          <h1 id="hero-heading">
            We design and build{' '}
            <span className="gradient-text">digital products</span> that move
            businesses forward.
          </h1>
          <p className="hero-description">
            Websites, e-commerce experiences, SaaS platforms, and mobile
            applications designed and engineered from concept to launch.
          </p>
          <div className="hero-actions">
            <ProjectLink>Start a Project</ProjectLink>
            <a href="#work" className="button button-secondary">
              Explore Our Work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-capabilities">
            Web Development <span>·</span> Mobile Apps <span>·</span> SaaS{' '}
            <span>·</span> E-Commerce <span>·</span> UI/UX Design
          </p>
        </div>
        <ProductScene />
        <div className="hero-bottom">
          <span>Look at what we can build for your business.</span>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={15} />
            <span>SCROLL TO EXPLORE WORK</span>
          </a>
        </div>
      </section>
      <div className="credibility">
        <p>
          ENGINEERED FOR SCALE.
          <br />
          <span>Modern full-stack technical foundation.</span>
        </p>
        <div>
          <Atom />
          <strong>React & Next.js</strong>
        </div>
        <div>
          <Braces />
          <strong>TypeScript</strong>
        </div>
        <div>
          <Wind />
          <strong>Tailwind CSS</strong>
        </div>
        <a href="#technology" className="credibility-note">
          Explore our capabilities <ArrowUpRight size={13} />
        </a>
      </div>
    </>
  );
}
