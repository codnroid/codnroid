'use client';
import { useRef } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Command,
  Layers,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  ShoppingBag,
} from 'lucide-react';

export function ProductScene() {
  const scene = useRef<HTMLDivElement>(null);
  return (
    <div
      className="product-scene"
      ref={scene}
      onPointerMove={(event) => {
        if (
          !window.matchMedia(
            '(hover:hover) and (prefers-reduced-motion:no-preference)',
          ).matches
        )
          return;
        const bounds = event.currentTarget.getBoundingClientRect();
        scene.current?.style.setProperty(
          '--pointer-x',
          `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}px`,
        );
        scene.current?.style.setProperty(
          '--pointer-y',
          `${((event.clientY - bounds.top) / bounds.height - 0.5) * 7}px`,
        );
      }}
      onPointerLeave={() => {
        scene.current?.style.setProperty('--pointer-x', '0px');
        scene.current?.style.setProperty('--pointer-y', '0px');
      }}
    >
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-orbit" aria-hidden="true" />
      <figure
        className="product-art"
        aria-label="Illustrative product interfaces: a SaaS workspace, a mobile commerce screen, and a deployment status card. Sample data only."
      >
        <div className="mini-design" aria-hidden="true">
          <span className="mini-icon">
            <Layers size={16} />
          </span>
          <div>
            Thoughtfully designed<small>Beautiful at every breakpoint</small>
          </div>
          <span className="design-swatches">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="dashboard" aria-hidden="true">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>workspace / overview</span>
            <Command size={11} />
          </div>
          <div className="dashboard-body">
            <div className="dashboard-rail">
              <div className="app-mark">/</div>
              <LayoutDashboard size={15} />
              <Layers size={15} />
              <ShoppingBag size={15} />
              <Code2 size={15} />
              <span className="rail-avatar">C</span>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-top">
                <span>Workspace</span>
                <span className="mini-avatar">C</span>
              </div>
              <div className="dashboard-heading">
                <div>
                  <small>LET’S MAKE SOMETHING GREAT</small>
                  <strong>Your product, in focus.</strong>
                </div>
                <span className="mock-add">
                  <Plus size={10} /> New project
                </span>
              </div>
              <div className="metric-row">
                <div>
                  <small>Active projects</small>
                  <strong>
                    12 <span>↗</span>
                  </strong>
                  <span className="metric-caption">Across your workspace</span>
                </div>
                <div>
                  <small>Tasks completed</small>
                  <strong>
                    84<span className="metric-spark">▁▂▁▃▂▅▆</span>
                  </strong>
                  <span className="metric-caption">This month</span>
                </div>
              </div>
              <div className="chart-card">
                <div>
                  <strong>Project activity</strong>
                  <span>This week⌄</span>
                </div>
                <div className="chart-grid">
                  <svg viewBox="0 0 350 95" preserveAspectRatio="none">
                    <defs>
                      <linearGradient
                        id="chart-fill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#a291ea"
                          stopOpacity=".3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#a291ea"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 80 C25 85 28 54 58 60 S105 90 135 48 S180 73 205 38 S245 54 269 22 S315 41 350 8 L350 95 L0 95Z"
                      fill="url(#chart-fill)"
                    />
                    <path
                      d="M0 80 C25 85 28 54 58 60 S105 90 135 48 S180 73 205 38 S245 54 269 22 S315 41 350 8"
                      fill="none"
                      stroke="#8971d6"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <div className="chart-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="project-mini-row">
                <span className="project-mini-icon">↗</span>
                <span>
                  Website redesign<small>Design system · In progress</small>
                </span>
                <span className="mini-progress" />
              </div>
            </div>
          </div>
        </div>
        <div className="phone" aria-hidden="true">
          <div className="phone-camera" />
          <div className="phone-bar">
            <span>9:41</span>
            <span>▮▮▮</span>
          </div>
          <div className="phone-title">
            the everyday.
            <ShoppingBag size={12} />
          </div>
          <div className="phone-object">
            <div className="vase" />
            <span>
              MADE FOR
              <br />
              YOUR SPACE
            </span>
          </div>
          <small>THE STUDIO COLLECTION</small>
          <strong>
            A little everyday
            <br />
            extraordinary.
          </strong>
          <div className="phone-price">
            <span>Explore collection</span>
            <ArrowUpRight size={14} />
          </div>
          <div className="phone-line" />
        </div>
        <div className="deploy-card" aria-hidden="true">
          <span className="deploy-check">
            <Check size={17} />
          </span>
          <div>
            Ready for the world.<small>Production deployment successful</small>
          </div>
          <MoreHorizontal size={15} />
        </div>
        <span className="scene-bracket" aria-hidden="true">
          /
        </span>
      </figure>
      <span className="scene-caption">
        DESIGN MEETS ENGINEERING <span>·</span> ILLUSTRATIVE UI
      </span>
    </div>
  );
}
