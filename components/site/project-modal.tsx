'use client';

import { useState, useEffect } from 'react';
import {
  X,
  Laptop,
  Tablet,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Layers,
  Server,
  Database,
  Cloud,
} from 'lucide-react';
import type { Project } from '@/lib/content';
import { ProjectMockupView } from './project-mockups';

export function ProjectModal({
  project,
  onClose,
  onSelectPlanner,
}: {
  project: Project | null;
  onClose: () => void;
  onSelectPlanner: (projectName: string) => void;
}) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop'
  );

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Codnroid, I was exploring your "${project.name}" demo (${project.category}) on your website and would like to build something similar for my business.`
  );

  return (
    <dialog
      open
      className="project-modal-backdrop"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="project-modal-sheet">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-kicker">
              {project.type} · {project.industry}
            </span>
            <h2 id="modal-project-title">{project.name}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>

          <div className="modal-actions">
            {/* Viewport switcher */}
            <fieldset
              className="viewport-switcher"
              aria-label="Screen Viewport"
            >
              <button
                type="button"
                className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
                onClick={() => setViewport('desktop')}
                title="Desktop View"
              >
                <Laptop size={15} />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
                onClick={() => setViewport('tablet')}
                title="Tablet View"
              >
                <Tablet size={15} />
                <span>Tablet</span>
              </button>
              <button
                type="button"
                className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
                onClick={() => setViewport('mobile')}
                title="Mobile View"
              >
                <Smartphone size={15} />
                <span>Mobile</span>
              </button>
            </fieldset>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close project view"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="modal-scroll-body">
          {/* Interactive Screen Preview Frame */}
          <div className="modal-preview-stage">
            <div className={`modal-device-frame frame-${viewport}`}>
              <div className="device-chrome-bar">
                <span className="chrome-dots">● ● ●</span>
                <span className="chrome-url">
                  demo.codnroid.com/{project.id}
                </span>
                <span className="chrome-status">
                  <span className="live-indicator" /> Live Interactive Preview
                </span>
              </div>
              <div className="device-screen-body">
                <ProjectMockupView project={project} viewport={viewport} />
              </div>
            </div>
          </div>

          {/* Quick Stats / Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-metrics-bar">
              {project.metrics.map((m) => (
                <div key={m.label} className="modal-metric-item">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="modal-details-grid">
            {/* Left Column: Concept & Features */}
            <div className="modal-col-main">
              <div className="modal-section-card">
                <h3>The Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="modal-section-card">
                <h3>Interface & Product Solution</h3>
                <p>{project.solution}</p>
              </div>

              <div className="modal-section-card">
                <h3>Core Capabilities & Features</h3>
                <ul className="modal-feature-list">
                  {project.features.map((feat) => (
                    <li key={feat}>
                      <CheckCircle2 size={16} className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Spec, Architecture & CTA */}
            <div className="modal-col-side">
              {/* Project Meta Spec */}
              <div className="modal-spec-card">
                <h4>Project Specifications</h4>
                <dl className="modal-spec-list">
                  <div>
                    <dt>Industry</dt>
                    <dd>{project.industry}</dd>
                  </div>
                  <div>
                    <dt>Product Type</dt>
                    <dd>{project.category}</dd>
                  </div>
                  <div>
                    <dt>Classification</dt>
                    <dd>{project.type}</dd>
                  </div>
                  <div>
                    <dt>Deliverables</dt>
                    <dd>{project.services.join(' · ')}</dd>
                  </div>
                </dl>
              </div>

              {/* Architecture Stack */}
              <div className="modal-spec-card">
                <h4>Engineered Architecture</h4>
                <div className="modal-arch-items">
                  <div className="arch-item">
                    <Layers size={15} />
                    <div>
                      <small>Frontend</small>
                      <span>{project.architecture.frontend}</span>
                    </div>
                  </div>
                  <div className="arch-item">
                    <Server size={15} />
                    <div>
                      <small>Backend & APIs</small>
                      <span>{project.architecture.backend}</span>
                    </div>
                  </div>
                  <div className="arch-item">
                    <Database size={15} />
                    <div>
                      <small>Database</small>
                      <span>{project.architecture.database}</span>
                    </div>
                  </div>
                  <div className="arch-item">
                    <Cloud size={15} />
                    <div>
                      <small>Cloud & CDN</small>
                      <span>{project.architecture.cloud}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="modal-spec-card">
                <h4>Technologies Used</h4>
                <div className="modal-tech-cloud">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire CTA Card */}
              <div className="modal-cta-card">
                <h4>Want to build something similar?</h4>
                <p>
                  We can tailor this architecture and experience to your
                  industry and business objectives.
                </p>
                <div className="modal-cta-buttons">
                  <button
                    type="button"
                    className="modal-planner-btn"
                    onClick={() => {
                      onClose();
                      onSelectPlanner(project.name);
                    }}
                  >
                    <span>Start Project Planner</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-whatsapp-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
