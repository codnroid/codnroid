'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Clock,
  MapPin,
  Cpu,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { Project } from '@/lib/content';

export function ProjectMockupView({
  project,
  viewport = 'desktop',
}: {
  project: Project;
  viewport?: 'desktop' | 'tablet' | 'mobile';
}) {
  switch (project.id) {
    case 'outvibe':
      return <OutvibePreview viewport={viewport} />;
    case 'food-and-kitchen':
      return <FoodKitchenPreview viewport={viewport} />;
    case 'easy-travel':
      return <EasyTravelPreview viewport={viewport} />;
    case 'aura-salon':
      return <AuraSalonPreview viewport={viewport} />;
    case 'apex-realty':
      return <ApexRealtyPreview viewport={viewport} />;
    case 'pulsefit':
      return <PulseFitPreview viewport={viewport} />;
    case 'cloudmetric':
      return <CloudMetricPreview viewport={viewport} />;
    case 'nexus-corp':
      return <NexusCorpPreview viewport={viewport} />;
    default:
      return <OutvibePreview viewport={viewport} />;
  }
}

/* 1. Outvibe Mockup */
function OutvibePreview({ viewport }: { viewport: string }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [bagCount, setBagCount] = useState(1);

  return (
    <div className={`mockup-canvas outvibe-theme ${viewport}`}>
      <div className="ov-nav">
        <span className="ov-logo">OUTVIBE / STUDIO</span>
        <div className="ov-links">
          <span>COLLECTIONS</span>
          <span>EDITORIAL</span>
          <span>ARCHIVE</span>
        </div>
        <button
          type="button"
          onClick={() => setBagCount((c) => c + 1)}
          className="ov-bag-btn"
        >
          BAG ({bagCount})
        </button>
      </div>

      <div className="ov-hero">
        <div className="ov-headline">
          <p className="ov-season">AUTUMN / WINTER 2026</p>
          <h2>MONOLITH UTILITY COAT</h2>
          <p className="ov-desc">
            Waterproof bonded Japanese technical cotton with magnetic storm
            collar.
          </p>

          <div className="ov-action-row">
            <div className="ov-sizes">
              {['S', 'M', 'L', 'XL'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`ov-size-btn ${selectedSize === s ? 'active' : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setBagCount((c) => c + 1)}
              className="ov-buy-btn"
            >
              ADD TO BAG · $380
            </button>
          </div>
        </div>

        <div className="ov-card-visual">
          <div className="ov-img-box">
            <Image
              src="/images/outvibe.jpg"
              alt="Outvibe Fashion preview"
              width={640}
              height={380}
              className="ov-img"
              unoptimized
            />
            <span className="ov-tag">IN STOCK · SHIPS TODAY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. Food & Kitchen Mockup */
function FoodKitchenPreview({ viewport }: { viewport: string }) {
  const [activeTab, setActiveTab] = useState('pantry');

  return (
    <div className={`mockup-canvas fk-theme ${viewport}`}>
      <div className="fk-header">
        <div className="fk-brand">
          <span className="fk-mark">F&K</span>
          <span className="fk-sub">CULINARY PROVISIONS</span>
        </div>
        <div className="fk-tabs">
          <button
            type="button"
            className={activeTab === 'pantry' ? 'active' : ''}
            onClick={() => setActiveTab('pantry')}
          >
            ARTISANAL PANTRY
          </button>
          <button
            type="button"
            className={activeTab === 'boxes' ? 'active' : ''}
            onClick={() => setActiveTab('boxes')}
          >
            FARM SUBSCRIPTIONS
          </button>
          <button
            type="button"
            className={activeTab === 'cookware' ? 'active' : ''}
            onClick={() => setActiveTab('cookware')}
          >
            COPPER COOKWARE
          </button>
        </div>
      </div>

      <div className="fk-body">
        <div className="fk-featured-box">
          <div className="fk-text">
            <span className="fk-kicker">HARVEST HARMONY NO. 4</span>
            <h3>Cold-Pressed Single-Estate Tuscan Olive Oil</h3>
            <p>
              Hand-harvested in Lucignano. First cold extraction with peppery
              artichoke finish.
            </p>
            <div className="fk-price-row">
              <span className="fk-price">$44.00</span>
              <button type="button" className="fk-btn">
                Add to Box
              </button>
            </div>
          </div>
          <div className="fk-visual">
            <Image
              src="/images/food-and-kitchen.jpg"
              alt="Food and Kitchen culinary selection"
              width={600}
              height={360}
              className="fk-img"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. Easy Travel Mockup */
function EasyTravelPreview({ viewport }: { viewport: string }) {
  const [tripType, setTripType] = useState('flights');

  return (
    <div className={`mockup-canvas travel-theme ${viewport}`}>
      <div className="trv-bar">
        <div className="trv-brand">
          <span className="trv-icon">✈</span>
          <strong>EASY TRAVEL</strong>
        </div>
        <div className="trv-types">
          <button
            type="button"
            className={tripType === 'flights' ? 'active' : ''}
            onClick={() => setTripType('flights')}
          >
            Flights
          </button>
          <button
            type="button"
            className={tripType === 'hotels' ? 'active' : ''}
            onClick={() => setTripType('hotels')}
          >
            Hotels
          </button>
          <button
            type="button"
            className={tripType === 'expeditions' ? 'active' : ''}
            onClick={() => setTripType('expeditions')}
          >
            Expeditions
          </button>
        </div>
      </div>

      <div className="trv-search-panel">
        <div className="trv-field">
          <small>FROM</small>
          <span>Tokyo (HND)</span>
        </div>
        <div className="trv-field">
          <small>TO</small>
          <span>Reykjavík (KEF)</span>
        </div>
        <div className="trv-field">
          <small>DATES</small>
          <span>Oct 14 – Oct 22</span>
        </div>
        <button type="button" className="trv-search-btn">
          Find Fares
        </button>
      </div>

      <div className="trv-results">
        <div className="trv-card">
          <div className="trv-card-main">
            <span className="trv-airline">Nordic Express · Direct</span>
            <h4>08:40 HND → 14:10 KEF</h4>
            <span className="trv-eco">Low CO₂ Aircraft · Free Carry-on</span>
          </div>
          <div className="trv-card-fare">
            <strong>$740</strong>
            <button type="button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4. Aura Salon & Spa Mockup */
function AuraSalonPreview({ viewport }: { viewport: string }) {
  const [selectedStylist, setSelectedStylist] = useState('Elena');
  const [selectedSlot, setSelectedSlot] = useState('14:30');

  const stylists = [
    { name: 'Elena', role: 'Master Colorist', rating: '4.9' },
    { name: 'Marcus', role: 'Senior Stylist', rating: '5.0' },
    { name: 'Chloe', role: 'Holistic Therapist', rating: '4.9' },
  ];

  const slots = ['11:00', '13:15', '14:30', '16:00', '17:30'];

  return (
    <div className={`mockup-canvas salon-theme ${viewport}`}>
      <div className="sln-top">
        <div>
          <span className="sln-logo">AURA WELLNESS & SALON</span>
          <p className="sln-sub">Quiet luxury appointments</p>
        </div>
        <span className="sln-badge">OPEN FOR RESERVATIONS</span>
      </div>

      <div className="sln-grid">
        <div className="sln-col">
          <p className="sln-col-label">SELECT PRACTITIONER</p>
          <div className="sln-stylists">
            {stylists.map((st) => (
              <button
                key={st.name}
                type="button"
                className={`sln-stylist-card ${selectedStylist === st.name ? 'active' : ''}`}
                onClick={() => setSelectedStylist(st.name)}
              >
                <div className="sln-avatar">{st.name[0]}</div>
                <div>
                  <strong>{st.name}</strong>
                  <span>{st.role}</span>
                </div>
                <small>★ {st.rating}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="sln-col">
          <p className="sln-col-label">TODAY&apos;S TIME SLOTS</p>
          <div className="sln-slots">
            {slots.map((sl) => (
              <button
                key={sl}
                type="button"
                className={`sln-slot-btn ${selectedSlot === sl ? 'active' : ''}`}
                onClick={() => setSelectedSlot(sl)}
              >
                <Clock size={12} />
                <span>{sl}</span>
              </button>
            ))}
          </div>

          <div className="sln-summary-box">
            <div className="sln-sum-row">
              <span>Selected Treatment</span>
              <strong>Aromatherapy Sculpt & Blowout</strong>
            </div>
            <div className="sln-sum-row">
              <span>Time & Stylist</span>
              <strong>
                {selectedSlot} with {selectedStylist}
              </strong>
            </div>
            <button type="button" className="sln-confirm-btn">
              Instant Reserve · WhatsApp Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. Apex Realty Mockup */
function ApexRealtyPreview({ viewport }: { viewport: string }) {
  const [filter, setFilter] = useState('all');

  return (
    <div className={`mockup-canvas realty-theme ${viewport}`}>
      <div className="rlt-nav">
        <span className="rlt-logo">APEX ARCHITECTURAL REALTY</span>
        <div className="rlt-filters">
          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Residences
          </button>
          <button
            type="button"
            className={filter === 'villas' ? 'active' : ''}
            onClick={() => setFilter('villas')}
          >
            Villas
          </button>
          <button
            type="button"
            className={filter === 'penthouses' ? 'active' : ''}
            onClick={() => setFilter('penthouses')}
          >
            Penthouses
          </button>
        </div>
      </div>

      <div className="rlt-showcase">
        <div className="rlt-img-wrap">
          <div className="rlt-hero-card">
            <span className="rlt-tag">FEATURED LISTING</span>
            <h3>The Cantilever Pavilion</h3>
            <p className="rlt-location">
              <MapPin size={13} /> Kyoto Hills · 4,800 sq.ft
            </p>
            <div className="rlt-specs">
              <span>4 Beds</span>
              <span>·</span>
              <span>5.5 Baths</span>
              <span>·</span>
              <span>Infinity Pool</span>
              <span>·</span>
              <strong className="rlt-price">$3,850,000</strong>
            </div>
          </div>
          <div className="rlt-action-bar">
            <button type="button" className="rlt-btn-pri">
              Schedule 3D Virtual Tour
            </button>
            <button type="button" className="rlt-btn-sec">
              Request Floor Plan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 6. PulseFit Mobile Phone Mockup */
function PulseFitPreview({ viewport }: { viewport: string }) {
  const [screenIndex, setScreenIndex] = useState(0);

  const screens = [
    {
      title: 'Daily Activity',
      metric: '780 / 850 kcal',
      sub: 'Activity Ring 92% complete',
      action: 'Start Evening Run',
      color: '#ed354a',
    },
    {
      title: 'Strength Interval',
      metric: '00:45 REST',
      sub: 'Next: Dumbbell Romanian Deadlift 4x10',
      action: 'Log Set Complete',
      color: '#3665dc',
    },
    {
      title: 'Coach Messaging',
      metric: 'Coach Alex · Online',
      sub: 'Form check on Barbell Row looks dialed in!',
      action: 'Send Video Clip',
      color: '#754ad7',
    },
  ];

  const current = screens[screenIndex];

  return (
    <div className={`mockup-canvas pulsefit-theme ${viewport}`}>
      <div className="pf-mobile-frame">
        <div className="pf-phone-notch">
          <span />
        </div>

        <div className="pf-screen-content">
          <div className="pf-header">
            <div>
              <span className="pf-logo">PULSEFIT</span>
              <small>CROSS-PLATFORM APP</small>
            </div>
            <Activity size={18} color={current.color} />
          </div>

          <div className="pf-card" style={{ borderLeftColor: current.color }}>
            <span className="pf-category">SCREEN {screenIndex + 1} OF 3</span>
            <h4>{current.title}</h4>
            <div className="pf-metric" style={{ color: current.color }}>
              {current.metric}
            </div>
            <p className="pf-sub">{current.sub}</p>
            <button
              type="button"
              className="pf-action-btn"
              style={{ background: current.color }}
            >
              {current.action}
            </button>
          </div>

          <div className="pf-screen-stepper">
            <button
              type="button"
              onClick={() =>
                setScreenIndex((i) => (i === 0 ? screens.length - 1 : i - 1))
              }
              aria-label="Previous screen"
            >
              <ChevronLeft size={16} />
            </button>
            <span>
              {screens.map((_, idx) => (
                <span
                  key={idx}
                  className={`pf-dot ${screenIndex === idx ? 'active' : ''}`}
                />
              ))}
            </span>
            <button
              type="button"
              onClick={() => setScreenIndex((i) => (i + 1) % screens.length)}
              aria-label="Next screen"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 7. CloudMetric SaaS Dashboard Mockup */
function CloudMetricPreview({ viewport }: { viewport: string }) {
  const [selectedRange, setSelectedRange] = useState('1h');

  return (
    <div className={`mockup-canvas cloudmetric-theme ${viewport}`}>
      <div className="cm-top">
        <div className="cm-brand">
          <Cpu size={16} />
          <strong>CLOUDMETRIC // OBSERVE</strong>
        </div>
        <div className="cm-range">
          {['15m', '1h', '24h', '7d'].map((r) => (
            <button
              key={r}
              type="button"
              className={selectedRange === r ? 'active' : ''}
              onClick={() => setSelectedRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="cm-metrics-row">
        <div className="cm-tile">
          <small>P99 API LATENCY</small>
          <strong>24.6 ms</strong>
          <span className="cm-good">↓ 12% vs last hour</span>
        </div>
        <div className="cm-tile">
          <small>THROUGHPUT</small>
          <strong>94.2k req/s</strong>
          <span className="cm-good">↑ 4.1% normal</span>
        </div>
        <div className="cm-tile">
          <small>ERROR RATE</small>
          <strong>0.002 %</strong>
          <span className="cm-good">Within SLO</span>
        </div>
      </div>

      <div className="cm-chart-area">
        <div className="cm-chart-header">
          <span>REAL-TIME HTTP REQUEST VOLUME</span>
          <small>LIVE SOCKET · 100MS INTERVAL</small>
        </div>
        <div className="cm-svg-chart">
          <svg
            viewBox="0 0 500 100"
            className="cm-chart-line"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cmGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3665dc" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3665dc" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 Q50,40 100,55 T200,30 T300,45 T400,20 T500,28 L500,100 L0,100 Z"
              fill="url(#cmGrad)"
            />
            <path
              d="M0,70 Q50,40 100,55 T200,30 T300,45 T400,20 T500,28"
              fill="none"
              stroke="#3665dc"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* 8. Nexus Corp Mockup */
function NexusCorpPreview({ viewport }: { viewport: string }) {
  const [roiTeamSize, setRoiTeamSize] = useState(25);

  return (
    <div className={`mockup-canvas nexus-theme ${viewport}`}>
      <div className="nx-nav">
        <strong>NEXUS ENTERPRISE</strong>
        <div className="nx-links">
          <span>Capabilities</span>
          <span>Case Studies</span>
          <span>ROI Calculator</span>
        </div>
      </div>

      <div className="nx-hero">
        <span className="nx-kicker">ENGINEERING AT SCALE</span>
        <h3>Digital transformation with measurable commercial velocity.</h3>
        <div className="nx-calc-box">
          <div className="nx-calc-top">
            <span>Engineering Team Size</span>
            <strong>{roiTeamSize} Engineers</strong>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={roiTeamSize}
            onChange={(e) => setRoiTeamSize(Number(e.target.value))}
            className="nx-slider"
          />
          <div className="nx-calc-result">
            <div>
              <small>ANNUAL SPRINT VELOCITY GAIN</small>
              <h4>+{(roiTeamSize * 1.8).toFixed(0)} Story Pts/mo</h4>
            </div>
            <div>
              <small>ESTIMATED REVENUE IMPACT</small>
              <h4>${(roiTeamSize * 18.5).toFixed(0)}k ARR</h4>
            </div>
            <button type="button" className="nx-cta-btn">
              Download Full ROI Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
