'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  mobileImage: string;
  badge: string;
  speed: string;
  stack: string;
  metricLabel: string;
  metricValue: string;
  mobileHeadline: string;
  mobileSub: string;
  themeColor: string;
}

const heroShowcaseProjects: ShowcaseProject[] = [
  {
    id: 'outvibe',
    name: 'Outvibe Fashion',
    category: 'LUXURY E-COMMERCE',
    tagline: 'High-conversion minimalist apparel storefront',
    image: '/images/outvibe.jpg',
    mobileImage: '/images/hero-mobile.jpg',
    badge: 'Flagship Storefront',
    speed: '0.38s LCP',
    stack: 'Next.js 15 · Tailwind · Stripe',
    metricLabel: 'Checkout Lift',
    metricValue: '+44%',
    mobileHeadline: 'Autumn Edition 2026',
    mobileSub: 'Exclusive cashmere & outerwear',
    themeColor: '#7944ca',
  },
  {
    id: 'cloudmetric',
    name: 'CloudMetric AI',
    category: 'ENTERPRISE SAAS',
    tagline: 'Autonomous cloud cost & telemetry dashboard',
    image: '/images/hero-saas.jpg',
    mobileImage: '/images/hero-analytics.jpg',
    badge: 'Real-Time Telemetry',
    speed: '12ms Query',
    stack: 'React · TypeScript · Go Engine',
    metricLabel: 'Cloud Savings',
    metricValue: '38.2%',
    mobileHeadline: 'Fleet Health: 99.98%',
    mobileSub: '14 regions operational',
    themeColor: '#008aab',
  },
  {
    id: 'easytravel',
    name: 'Easy Travel',
    category: 'GLOBAL TRAVEL PLATFORM',
    tagline: 'Multi-destination discovery & booking engine',
    image: '/images/easy-travel.jpg',
    mobileImage: '/images/hero-mobile.jpg',
    badge: 'Mobile & Web Engine',
    speed: '60 FPS',
    stack: 'React Native · Node · PostgreSQL',
    metricLabel: 'Booking Velocity',
    metricValue: '3.8x',
    mobileHeadline: 'Kyoto Sanctuary',
    mobileSub: 'Flight & luxury ryokan confirmed',
    themeColor: '#f29526',
  },
  {
    id: 'nexus',
    name: 'Nexus Digital',
    category: 'PRODUCT GROWTH SUITE',
    tagline: 'Modern business operations & analytics platform',
    image: '/images/hero-marketing.jpg',
    mobileImage: '/images/hero-analytics.jpg',
    badge: 'B2B Growth Platform',
    speed: '0.42s LCP',
    stack: 'Next.js · PostgreSQL · Docker',
    metricLabel: 'Active Workflows',
    metricValue: '2.4M',
    mobileHeadline: 'Quarterly Ingress',
    mobileSub: 'Conversion funnel up 32%',
    themeColor: '#10b981',
  },
];

export function ProductScene() {
  const [activeTab, setActiveTab] = useState(0);
  const scene = useRef<HTMLDivElement>(null);
  const project = heroShowcaseProjects[activeTab];

  return (
    <div
      className="product-scene-v2"
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
          `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}px`,
        );
        scene.current?.style.setProperty(
          '--pointer-y',
          `${((event.clientY - bounds.top) / bounds.height - 0.5) * 10}px`,
        );
      }}
      onPointerLeave={() => {
        scene.current?.style.setProperty('--pointer-x', '0px');
        scene.current?.style.setProperty('--pointer-y', '0px');
      }}
    >
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="scene-v2-glow" aria-hidden="true" />
      <div className="scene-v2-ambient-ring" aria-hidden="true" />

      {/* Interactive Tabs: Let visitors switch showcased products */}
      <div className="scene-tab-bar" role="tablist" aria-label="Hero project switcher">
        {heroShowcaseProjects.map((p, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`scene-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-dot" style={{ backgroundColor: p.themeColor }} />
              <span className="tab-name">{p.name}</span>
            </button>
          );
        })}
      </div>

      <figure className="scene-stage-art" aria-label={`Interactive preview of ${project.name}`}>
        {/* Top Floating Badge */}
        <div className="floating-badge-top" aria-hidden="true">
          <div className="badge-glow-icon">
            <Sparkles size={14} color="#7944ca" />
          </div>
          <div>
            <strong>Thoughtfully designed</strong>
            <small>Pixel-perfect across all breakpoints</small>
          </div>
        </div>

        {/* Main Desktop Glass Browser Frame */}
        <div className="hero-browser-window">
          {/* Window Chrome Header */}
          <div className="hero-chrome-bar">
            <div className="hero-chrome-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-chrome-url">
              <span className="lock-icon">🔒</span>
              <span>codnroid.com/showcase/{project.id}</span>
            </div>
            <div className="hero-live-indicator">
              <span className="live-pulse" />
              <span>LIVE DEMO</span>
            </div>
          </div>

          {/* Main Visual Display Area: Real Dribbble-Grade UI Artwork */}
          <div className="hero-window-canvas">
            <div className="hero-image-canvas">
              <Image
                unoptimized
                src={project.image}
                width={1440}
                height={840}
                alt={`${project.name} Digital Product Interface`}
                className="hero-project-img"
                priority
              />
              <div className="hero-image-glass-overlay">
                <div className="glass-meta">
                  <span className="glass-kicker">{project.category}</span>
                  <h4>{project.name}</h4>
                  <p>{project.tagline}</p>
                </div>
                <div className="glass-tags">
                  <span className="glass-tag">{project.stack}</span>
                  <span className="glass-tag highlight">
                    {project.metricLabel}: {project.metricValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mobile Companion Mockup displaying real mobile app UI */}
        <div className="hero-mobile-device" aria-hidden="true">
          <div className="mobile-dynamic-island">
            <span className="island-camera" />
            <span className="island-mic" />
          </div>

          <div className="mobile-screen-content">
            <div className="mobile-header">
              <span className="mobile-time">9:41</span>
              <div className="mobile-battery">
                <span />
              </div>
            </div>

            {/* Mobile Real Photo Preview */}
            <div className="mobile-photo-wrap">
              <Image
                unoptimized
                src={project.mobileImage}
                width={360}
                height={260}
                alt="Mobile Product Interface"
                className="mobile-img"
              />
              <div className="mobile-photo-scrim" />
              <div className="mobile-photo-copy">
                <span className="app-category">{project.category}</span>
                <h5>{project.mobileHeadline}</h5>
              </div>
            </div>

            <div className="mobile-kpi-card">
              <div className="kpi-icon">
                <Zap size={14} color="#7944ca" />
              </div>
              <div>
                <small>{project.metricLabel}</small>
                <strong>{project.metricValue}</strong>
              </div>
            </div>

            <div className="mobile-action-pill">
              <span>Inspect Flow</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>

        {/* Bottom Floating Deployment Verification Card */}
        <div className="floating-badge-bottom" aria-hidden="true">
          <div className="badge-check-icon">
            <CheckCircle2 size={16} color="#008aab" />
          </div>
          <div>
            <strong>Ready for production</strong>
            <small>High throughput · 99.99% uptime SLA</small>
          </div>
        </div>
      </figure>

      <div className="scene-footer-caption">
        <span>CODNROID STUDIO SHOWCASE</span>
        <span aria-hidden="true">·</span>
        <span>ENGINEERED FOR SCALE</span>
      </div>
    </div>
  );
}
