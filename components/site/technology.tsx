'use client';
import { useState } from 'react';
import { technologyCategories } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { SectionHeading } from './primitives';

export function Technology() {
  const [active, setActive] = useState(technologyCategories[0].id);
  const category =
    technologyCategories.find((item) => item.id === active) ??
    technologyCategories[0];
  return (
    <section
      className="section technology-section"
      id="technology"
      tabIndex={-1}
    >
      <SectionHeading
        eyebrow="Our Capabilities"
        copy="From your first website to a growing digital product, we bring design, development, and launch support together around your goals."
      >
        Your vision.
        <br />
        <span className="soft-text">The skills to build it.</span>
      </SectionHeading>
      <div className="technology-layout">
        <div className="technology-controls">
          <div
            className="technology-buttons"
            aria-label="Capability categories"
          >
            {technologyCategories.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                className="technology-button"
                aria-pressed={active === item.id}
                aria-controls="technology-panel"
                onClick={() => setActive(item.id)}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </Button>
            ))}
          </div>
          <p>
            Explore what we can help you build. Every project starts with an
            agreed scope and the right tools for the job.
          </p>
        </div>
        <div
          id="technology-panel"
          className="technology-panel"
          aria-live="polite"
          aria-atomic="true"
        >
          <p>{category.description}</p>
          <div className="technology-cards">
            {category.technologies.map((tech) => (
              <article key={tech.name}>
                <span className="technology-mark" aria-hidden="true">
                  {tech.mark}
                </span>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
