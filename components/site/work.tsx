import Image from 'next/image';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projects, type Project } from '@/lib/content';
import { SectionHeading } from './primitives';

function ProjectDetails({ project }: { project: Project }) {
  return (
    <details className="project-details">
      <summary>
        View Case Study
        <Plus size={17} aria-hidden="true" />
      </summary>
      <div className="case-details">
        <p className="case-note">
          Portfolio preview · Based on the supplied project interface.
        </p>
        <div>
          <h4>Design challenge</h4>
          <p>{project.challenge}</p>
        </div>
        <div>
          <h4>Interface approach</h4>
          <p>{project.solution}</p>
        </div>
        <div>
          <h4>Technologies & results</h4>
          <p>
            Full implementation details and verified project outcomes are
            pending publication.
          </p>
        </div>
      </div>
    </details>
  );
}

export function Work() {
  return (
    <section className="section work-section" id="work" tabIndex={-1}>
      <SectionHeading
        eyebrow="Selected Work"
        copy="Distinct businesses. Thoughtful digital experiences. A closer look at the interfaces in our portfolio."
      >
        We don&apos;t just write code.
        <br />
        <span className="soft-text">We ship products.</span>
      </SectionHeading>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card project-${project.id}`}
            key={project.id}
          >
            <div className="project-visual">
              <span className="project-index">
                0{index + 1} / {project.category.split(' / ')[0]}
              </span>
              <div className="project-browser">
                <div className="project-browser-bar">
                  <span>● ● ●</span>
                  <span>{project.name.toLowerCase()} / preview</span>
                  <ArrowUpRight size={10} />
                </div>
                <div
                  className={`project-image-viewport ${project.id === 'easy-travel' ? 'travel-crop' : ''}`}
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/images/${project.image}-720.webp 720w, /images/${project.image}-1440.webp 1440w`}
                      sizes="(max-width: 700px) 90vw, 50vw"
                    />
                    <Image
                      unoptimized
                      src={`/images/${project.image}.jpg`}
                      width={project.width}
                      height={project.height}
                      alt={`${project.name} supplied website interface`}
                      loading="lazy"
                      sizes="(max-width: 700px) 90vw, 50vw"
                    />
                  </picture>
                </div>
              </div>
              <span className="project-visual-label">PORTFOLIO INTERFACE</span>
            </div>
            <div className="project-meta">
              <div>
                <p>{project.category}</p>
                <h3>{project.name}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" size={24} />
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function FeaturedProject() {
  const project = projects[0];
  return (
    <section
      className="featured-section section"
      aria-labelledby="featured-heading"
    >
      <div className="featured-copy">
        <p className="eyebrow">
          <span />
          Under the Surface
        </p>
        <h2 id="featured-heading">
          Good design.
          <br />
          Even better
          <br />
          <span>under the hood.</span>
        </h2>
        <p>
          A closer look at Outvibe. An expressive storefront, built around a
          simple idea: let the collection do the talking.
        </p>
        <div className="featured-label">
          <span>FEATURED INTERFACE</span>
          <strong>
            Outvibe <ArrowUpRight size={17} />
          </strong>
        </div>
        <ProjectDetails project={project} />
      </div>
      <div className="featured-visual">
        <div className="feature-browser">
          <div className="project-browser-bar">
            <span>● ● ●</span>
            <span>Outvibe / the storefront</span>
            <ArrowUpRight size={12} />
          </div>
          <Image
            unoptimized
            src="/images/outvibe.jpg"
            width={1440}
            height={798}
            alt="Outvibe fashion storefront with collection imagery and a prominent shopping call to action"
            loading="lazy"
          />
        </div>
        <div className="feature-note">
          <span className="feature-note-slash">/</span>
          <p>
            Distinctive on the outside.
            <br />
            <strong>Thoughtful at every layer.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
