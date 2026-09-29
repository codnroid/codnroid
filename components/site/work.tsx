'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { projects, type Project } from '@/lib/content';
import { SectionHeading } from './primitives';
import { ProjectModal } from './project-modal';
import { ProjectMockupView } from './project-mockups';

type FilterCategory = 'all' | 'websites' | 'ecommerce' | 'saas' | 'mobile';

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Websites', value: 'websites' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'SaaS Platforms', value: 'saas' },
  { label: 'Mobile Apps', value: 'mobile' },
];

export function Work({
  onSelectPlanner,
}: {
  onSelectPlanner?: (projectName: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const handleOpenPlanner = (name: string) => {
    if (onSelectPlanner) {
      onSelectPlanner(name);
    } else {
      const el = document.getElementById('planner');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section work-section" id="work" tabIndex={-1}>
      <SectionHeading
        eyebrow="Selected Work & Prototypes"
        copy="Explore 8 dedicated product demonstrations across commerce, SaaS, mobile, and digital booking. Click any project for an interactive prototype inspection."
      >
        Look at what we can build
        <br />
        <span className="soft-text">for your business.</span>
      </SectionHeading>

      {/* Interactive Category Filter Bar */}
      <div
        className="work-filter-bar"
        role="tablist"
        aria-label="Filter portfolio by project type"
      >
        {filterTabs.map((tab) => {
          const count =
            tab.value === 'all'
              ? projects.length
              : projects.filter((p) => p.filterCategory === tab.value).length;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.value}
              className={`filter-tab-btn ${activeFilter === tab.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.value)}
            >
              <span>{tab.label}</span>
              <span className="filter-count">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Asymmetric Bento Showcase Grid */}
      <div className="work-bento-grid">
        {filteredProjects.map((project) => {
          const isFeaturedBento =
            project.id === 'outvibe' || project.id === 'cloudmetric';

          return (
            <div
              key={project.id}
              className={`project-bento-card card-${project.id} ${
                isFeaturedBento ? 'bento-span-2' : ''
              }`}
            >
              {/* Project Visual Area */}
              <div className="bento-visual-stage">
                <div className="bento-browser-frame">
                  <div className="bento-browser-top">
                    <span className="bento-dots">● ● ●</span>
                    <span className="bento-url">
                      demo.codnroid.com/{project.id}
                    </span>
                    <span className="bento-live-badge">
                      <span className="bento-pulse" /> Live Prototype
                    </span>
                  </div>

                  <div className="bento-screen-viewport">
                    {/* If we have a local image, render responsive picture, else render interactive micro-preview */}
                    {project.image ? (
                      <div className="bento-image-wrap">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={`/images/${project.image}-720.webp 720w, /images/${project.image}-1440.webp 1440w`}
                            sizes="(max-width: 768px) 95vw, 600px"
                          />
                          <Image
                            unoptimized
                            src={`/images/${project.image}.jpg`}
                            width={project.width || 1440}
                            height={project.height || 800}
                            alt={`${project.name} interface demonstration`}
                            loading="lazy"
                            className="bento-img"
                          />
                        </picture>
                      </div>
                    ) : (
                      <div className="bento-mockup-embed">
                        <ProjectMockupView
                          project={project}
                          viewport="desktop"
                        />
                      </div>
                    )}

                    {/* Interactive Overlay on Hover */}
                    <div className="bento-hover-overlay">
                      <button
                        type="button"
                        className="bento-inspect-btn"
                        onClick={() => setActiveModalProject(project)}
                      >
                        <Maximize2 size={16} />
                        <span>Inspect Interactive Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Unboxed Metadata & Content */}
              <div className="bento-info">
                <div className="bento-header-row">
                  <div>
                    <div className="bento-meta-clean">
                      <span>{project.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="bento-type">{project.type}</span>
                    </div>
                    <h3 className="bento-title">{project.name}</h3>
                  </div>

                  <button
                    type="button"
                    className="bento-open-arrow"
                    aria-label={`Open ${project.name} case study`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <p className="bento-summary">{project.summary}</p>

                {/* Tech chips & Action */}
                <div className="bento-footer">
                  <div className="bento-tech-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="bento-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="bento-view-cta"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flagship Featured Deep Dive (Outvibe / SaaS) */}
      <FeaturedFlagship onSelectProject={setActiveModalProject} />

      {/* Modal Popup Viewer */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectPlanner={handleOpenPlanner}
      />
    </section>
  );
}

function FeaturedFlagship({
  onSelectProject,
}: {
  onSelectProject: (p: Project) => void;
}) {
  const flagship = projects[0]; // Outvibe

  return (
    <div className="flagship-case-banner">
      <div className="flagship-copy">
        <span className="flagship-eyebrow">FEATURED CASE STUDY</span>
        <h2>
          Outvibe: Editorial commerce built for speed and visual attitude.
        </h2>
        <p>
          A high-fashion apparel platform designed around effortless product
          discovery, tactile hover previews, and an ultra-lean 3-step checkout
          funnel engineered for maximum mobile conversion.
        </p>

        <div className="flagship-metrics">
          <div>
            <strong>0.7s</strong>
            <span>Time to Interactive</span>
          </div>
          <div>
            <strong>98/100</strong>
            <span>Lighthouse Score</span>
          </div>
          <div>
            <strong>-62%</strong>
            <span>Checkout Drop-off</span>
          </div>
        </div>

        <div className="flagship-actions">
          <button
            type="button"
            className="flagship-explore-btn"
            onClick={() => onSelectProject(flagship)}
          >
            <span>Explore Full Case Study</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div
        className="flagship-preview"
        title="Click to inspect Outvibe prototype"
      >
        <div className="flagship-browser">
          <div className="bento-browser-top">
            <span className="bento-dots">● ● ●</span>
            <span className="bento-url">demo.codnroid.com/outvibe</span>
            <span className="bento-live-badge">
              <span className="bento-pulse" /> Flagship Prototype
            </span>
          </div>
          <Image
            unoptimized
            src="/images/outvibe.jpg"
            width={1440}
            height={798}
            alt="Outvibe Fashion Storefront Case Study"
            className="flagship-image"
          />
        </div>
      </div>
    </div>
  );
}

export function FeaturedProject() {
  return null; // Integrated directly into Work section via FeaturedFlagship
}
