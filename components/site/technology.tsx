'use client';

import { useState } from 'react';
import { technologyCategories } from '@/lib/content';
import { SectionHeading } from './primitives';
import { CheckCircle2 } from 'lucide-react';

export function Technology() {
  const [activeCategory, setActiveCategory] = useState(
    technologyCategories[0].id
  );

  const category =
    technologyCategories.find((item) => item.id === activeCategory) ??
    technologyCategories[0];

  return (
    <section
      className="section technology-section"
      id="technology"
      tabIndex={-1}
    >
      <SectionHeading
        eyebrow="Our Engineering Capabilities"
        copy="Modern full-stack technical foundations. We select tools for speed, architectural durability, and zero runtime waste."
      >
        Your vision.
        <br />
        <span className="soft-text">The engineered stack to build it.</span>
      </SectionHeading>

      <div className="technology-layout">
        {/* Left Column: Category Selector */}
        <div className="technology-controls">
          <div
            className="technology-buttons"
            aria-label="Capability categories"
          >
            {technologyCategories.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`technology-button ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                  aria-controls="technology-panel"
                  onClick={() => setActiveCategory(item.id)}
                >
                  <span>{item.label}</span>
                  <span className="tech-arrow" aria-hidden="true">
                    {isActive ? '●' : '→'}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="tech-aside-note">
            Production-grade tooling curated for performance, reliable delivery,
            and long-term software maintainability.
          </p>
        </div>

        {/* Right Column: Dynamic Tech Cards */}
        <div
          id="technology-panel"
          className="technology-panel"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="technology-panel-header">
            <span className="tech-badge-category">{category.label}</span>
            <p>{category.description}</p>
          </div>

          <div className="technology-cards">
            {category.technologies.map((tech) => (
              <article key={tech.name} className="tech-card">
                <div className="tech-card-top">
                  <span className="technology-mark" aria-hidden="true">
                    {tech.mark}
                  </span>
                  <span className="tech-status-dot" title="Production Ready" />
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>

                <div className="tech-card-footer">
                  <span className="tech-detail-trigger">
                    <span>Production Standard</span>
                    <CheckCircle2 size={13} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
