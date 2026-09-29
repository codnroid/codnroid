import { ArrowDown, ArrowUpRight, Atom, Braces, Wind } from 'lucide-react';
import { ProjectLink } from './primitives';
import { ProductScene } from './product-scene';
import { siteConfig } from '@/lib/site';

export function Hero() {
  return (
    <>
      <section className="hero section" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Digital Product Studio
          </p>
          <h1 id="hero-heading">
            We turn ideas
            <br />
            into{' '}
            <span className="gradient-text">
              digital
              <br className="hero-break" /> experiences.
            </span>
          </h1>
          <p className="hero-description">{siteConfig.description}</p>
          <div className="hero-actions">
            <ProjectLink />
            <a href="#work" className="button button-secondary">
              Explore Our Work
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-capabilities">
            Web Development <span>·</span> SaaS <span>·</span> Mobile{' '}
            <span>·</span> E-Commerce <span>·</span> WordPress
          </p>
        </div>
        <ProductScene />
        <div className="hero-bottom">
          <span>Thoughtfully designed. Carefully engineered.</span>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={15} />
            <span>SCROLL TO EXPLORE</span>
          </a>
        </div>
      </section>
      <div className="credibility">
        <p>
          MODERN FOUNDATIONS.
          <br />
          <span>Built with technologies we use.</span>
        </p>
        <div>
          <Atom />
          <strong>React</strong>
        </div>
        <div>
          <Braces />
          <strong>TypeScript</strong>
        </div>
        <div>
          <Wind />
          <strong>Tailwind CSS</strong>
        </div>
        <span className="credibility-note">
          The stack behind this site <ArrowUpRight size={13} />
        </span>
      </div>
    </>
  );
}
