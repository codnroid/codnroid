import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Search,
  Workflow,
} from 'lucide-react';
import { services, principles, processSteps } from '@/lib/content';
import { ProjectLink, SectionHeading } from './primitives';
import { ProcessStepper } from './process-stepper';

const serviceIcons = {
  web: Code2,
  design: Layers,
  wordpress: Globe,
  apps: Smartphone,
  saas: Workflow,
  commerce: ShoppingBag,
  seo: Search,
  brand: Sparkles,
};

function ServiceArt({ type }: { type: string }) {
  if (type === 'web')
    return (
      <div className="service-art web-art" aria-hidden="true">
        <div className="art-browser">
          <span>● ● ●</span>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
        <span className="art-code">&lt; / &gt;</span>
      </div>
    );
  if (type === 'design')
    return (
      <div className="service-art design-art" aria-hidden="true">
        <span>Aa</span>
        <div>
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="design-cursor">
          ↖ <small>Make it matter.</small>
        </span>
      </div>
    );
  if (type === 'saas')
    return (
      <div className="service-art saas-art" aria-hidden="true">
        <span>YOUR PRODUCT</span>
        <div>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="art-status">
          <i /> Built to scale
        </span>
      </div>
    );
  return null;
}

export function Services() {
  return (
    <section className="section services-section" id="services" tabIndex={-1}>
      <SectionHeading
        eyebrow="What We Do"
        copy="One studio. The full picture. We connect strategy, design, and engineering to bring your next chapter to life."
      >
        From first sketch
        <br />
        to final deploy<span className="gradient-text">.</span>
      </SectionHeading>
      <div className="services-grid">
        {services.map((service) => {
          const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
          return (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card service-${service.id}`}
            >
              <div className="service-card-top">
                <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                <span>{service.category}</span>
              </div>
              <ServiceArt type={service.id} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#contact"
                className="service-link"
                aria-label={`Discuss ${service.title}`}
              >
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about-section" id="about" tabIndex={-1}>
      <div className="about-intro">
        <p className="eyebrow">
          <span />
          Why Codnroid
        </p>
        <h2>
          Built differently.
          <br />
          <span className="soft-text">Built to perform.</span>
        </h2>
        <p>
          We bring a designer&apos;s eye and an engineer&apos;s mindset to the
          same table. Because the best digital products need both.
        </p>
        <ProjectLink variant="text">Let&apos;s build together</ProjectLink>
        <div className="about-motif" aria-hidden="true">
          <svg
            viewBox="0 0 240 130"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="about-spectrum"
                x1="143"
                y1="18"
                x2="105"
                y2="112"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ed354a" />
                <stop offset=".25" stopColor="#f29526" />
                <stop offset=".5" stopColor="#754ad7" />
                <stop offset=".75" stopColor="#3665dc" />
                <stop offset="1" stopColor="#008aab" />
              </linearGradient>
            </defs>
            <path
              d="M78 28 30 65 78 102M162 28 210 65 162 102"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m143 18-38 94"
              stroke="url(#about-spectrum)"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="principles">
        {principles.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process-section" id="process" tabIndex={-1}>
      <SectionHeading
        eyebrow="How We Work"
        copy="A clear process. Open conversations. No black boxes. You know where we are and what comes next."
      >
        From idea to impact.
      </SectionHeading>
      <ProcessStepper steps={processSteps} />
      <div className="process-footnote">
        <span>YOUR VISION</span>
        <div />
        <span>
          OUR SHARED MOMENTUM <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
