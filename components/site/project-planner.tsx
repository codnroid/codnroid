'use client';

import { useState, type SyntheticEvent } from 'react';
import {
  Globe,
  ShoppingBag,
  Smartphone,
  Workflow,
  Wrench,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Send,
  Calendar,
} from 'lucide-react';
import { SectionHeading } from './primitives';

interface PlannerData {
  projectType: string;
  projectTypeLabel: string;
  stage: string;
  budget: string;
  timeline: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  brief: string;
}

const initialData: PlannerData = {
  projectType: 'website',
  projectTypeLabel: 'Business Website',
  stage: 'requirements',
  budget: 'growth',
  timeline: '1-2-months',
  name: '',
  business: '',
  email: '',
  phone: '',
  brief: '',
};

const projectTypes = [
  {
    id: 'website',
    label: 'Website',
    desc: 'High-performance business site, landing page, or editorial brand experience.',
    icon: Globe,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    desc: 'Storefront, product discovery, checkout, payment gateway & inventory.',
    icon: ShoppingBag,
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    desc: 'Cross-platform iOS & Android application built with React Native.',
    icon: Smartphone,
  },
  {
    id: 'saas',
    label: 'SaaS Platform',
    desc: 'Multi-tenant product, dashboard, user auth, subscriptions & billing.',
    icon: Workflow,
  },
  {
    id: 'custom',
    label: 'Custom Software',
    desc: 'Internal tools, operational portal, booking engine, or bespoke API.',
    icon: Wrench,
  },
  {
    id: 'idea',
    label: 'I Have an Idea',
    desc: 'Early-stage concept needing product definition, wireframing & MVP scope.',
    icon: Lightbulb,
  },
];

const stages = [
  {
    id: 'idea',
    title: 'Just an idea',
    desc: 'Early conceptual phase. Need strategy, wireframes & MVP scoping.',
  },
  {
    id: 'requirements',
    title: 'Have requirements',
    desc: 'Clear feature list and user goals ready for architecture and build.',
  },
  {
    id: 'designs',
    title: 'Have designs ready',
    desc: 'Figma or visual designs completed, ready for engineering implementation.',
  },
  {
    id: 'existing',
    title: 'Existing product',
    desc: 'Active product needing new modules, optimization, or backend scaling.',
  },
  {
    id: 'redesign',
    title: 'Complete redesign',
    desc: 'Current digital experience is outdated and needs a modern overhaul.',
  },
];

const budgetRanges = [
  {
    id: 'mvp',
    title: 'Starter / MVP',
    range: '₹75,000 – ₹1,80,000 ($1,000 – $2,500)',
    desc: 'Focused release with core feature set and rapid launch path.',
  },
  {
    id: 'growth',
    title: 'Custom Product',
    range: '₹1,80,000 – ₹4,50,000 ($2,500 – $6,000)',
    desc: 'Full-featured bespoke design, advanced integrations and custom flows.',
  },
  {
    id: 'scale',
    title: 'Platform / Enterprise',
    range: '₹4,50,000 – ₹10,00,000+ ($6,000 – $15,000+)',
    desc: 'High-throughput system, multi-role portal or full SaaS infrastructure.',
  },
  {
    id: 'flexible',
    title: 'Flexible / Let’s Scope',
    range: 'Scope-dependent',
    desc: 'Let us align on exact technical deliverables before finalizing budget.',
  },
];

const timelineOptions = [
  { id: 'asap', label: 'As soon as possible', period: 'Within 3–4 weeks' },
  { id: '1-2-months', label: '1 to 2 months', period: 'Standard production' },
  { id: '3-4-months', label: '3 to 4 months', period: 'Comprehensive scope' },
  { id: 'flexible', label: 'Flexible / Discovery', period: 'Open timeline' },
];

export function ProjectPlanner({
  initialProjectName,
}: {
  initialProjectName?: string;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<PlannerData>(() => ({
    ...initialData,
    brief: initialProjectName
      ? `Interested in building something similar to "${initialProjectName}".`
      : '',
  }));
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const formatWhatsAppMessage = () => {
    const selectedType =
      projectTypes.find((t) => t.id === data.projectType)?.label ||
      data.projectType;
    const selectedStage =
      stages.find((s) => s.id === data.stage)?.title || data.stage;
    const selectedBudget =
      budgetRanges.find((b) => b.id === data.budget)?.range || data.budget;
    const selectedTimeline =
      timelineOptions.find((t) => t.id === data.timeline)?.label ||
      data.timeline;

    const message = [
      `*Hi Codnroid, I just planned my project on your website:*`,
      `• *Project Type:* ${selectedType}`,
      `• *Current Stage:* ${selectedStage}`,
      `• *Estimated Scope/Budget:* ${selectedBudget}`,
      `• *Target Timeline:* ${selectedTimeline}`,
      data.name ? `• *Name:* ${data.name}` : '',
      data.business ? `• *Company:* ${data.business}` : '',
      data.brief ? `• *Notes:* ${data.brief}` : '',
      `\nI'd like to schedule a discovery call and discuss next steps!`,
    ]
      .filter(Boolean)
      .join('\n');

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate real submission saving to local state
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="section planner-section" id="planner" tabIndex={-1}>
      <SectionHeading
        eyebrow="Interactive Project Planner"
        copy="Take 60 seconds to configure your project. Get a realistic technical recommendation and directly connect with our engineering team."
      >
        Tell us what you&apos;re building.
        <br />
        <span className="soft-text">We&apos;ll help you shape it.</span>
      </SectionHeading>

      <div className="planner-container">
        {/* Step Progress Tracker */}
        <div className="planner-stepper" aria-label="Project planning steps">
          {[
            { num: 1, label: 'Type' },
            { num: 2, label: 'Stage' },
            { num: 3, label: 'Scope' },
            { num: 4, label: 'Timeline' },
            { num: 5, label: 'Details' },
          ].map((item) => (
            <button
              key={item.num}
              type="button"
              className={`stepper-node ${step === item.num ? 'active' : ''} ${
                step > item.num ? 'completed' : ''
              }`}
              onClick={() => {
                if (step > item.num) setStep(item.num);
              }}
              aria-label={`Go to step ${item.num}: ${item.label}`}
            >
              <span className="node-badge">
                {step > item.num ? '✓' : `0${item.num}`}
              </span>
              <span className="node-label">{item.label}</span>
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="planner-success-card">
            <div className="success-icon">
              <CheckCircle2 size={48} color="#008aab" />
            </div>
            <h3>Project Request Received!</h3>
            <p>
              Thank you, <strong>{data.name || 'friend'}</strong>. We have logged
              your project brief for <strong>{data.business || 'your business'}</strong>.
              Our technical team will review your specifications and follow up within 24 hours.
            </p>
            <div className="success-actions">
              <a
                href={`https://wa.me/919999999999?text=${formatWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Fast-Track on WhatsApp</span>
              </a>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setData(initialData);
                }}
              >
                Plan Another Project
              </button>
            </div>
          </div>
        ) : (
          <div className="planner-card">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="planner-step-body">
                <span className="step-kicker">STEP 01 OF 05</span>
                <h3>What would you like to build?</h3>
                <p className="step-sub">
                  Select the primary digital product or solution your business needs.
                </p>

                <div className="planner-grid grid-2-col">
                  {projectTypes.map((pt) => {
                    const Icon = pt.icon;
                    const isSelected = data.projectType === pt.id;
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        className={`planner-choice-card ${
                          isSelected ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setData((prev) => ({
                            ...prev,
                            projectType: pt.id,
                            projectTypeLabel: pt.label,
                          }));
                        }}
                      >
                        <div className="choice-icon-wrap">
                          <Icon size={20} />
                        </div>
                        <div className="choice-text">
                          <strong>{pt.label}</strong>
                          <span>{pt.desc}</span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={18} className="choice-check" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Project Stage */}
            {step === 2 && (
              <div className="planner-step-body">
                <span className="step-kicker">STEP 02 OF 05</span>
                <h3>What stage are you currently at?</h3>
                <p className="step-sub">
                  This helps us determine whether you need discovery & design or straight engineering.
                </p>

                <div className="planner-vertical-list">
                  {stages.map((st) => {
                    const isSelected = data.stage === st.id;
                    return (
                      <button
                        key={st.id}
                        type="button"
                        className={`planner-row-card ${
                          isSelected ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setData((prev) => ({ ...prev, stage: st.id }));
                        }}
                      >
                        <div className="choice-text">
                          <strong>{st.title}</strong>
                          <span>{st.desc}</span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={18} className="choice-check" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Scope / Budget */}
            {step === 3 && (
              <div className="planner-step-body">
                <span className="step-kicker">STEP 03 OF 05</span>
                <h3>What is your approximate scope or investment?</h3>
                <p className="step-sub">
                  All scopes are customized. This helps us suggest the most effective technological approach.
                </p>

                <div className="planner-grid grid-2-col">
                  {budgetRanges.map((bg) => {
                    const isSelected = data.budget === bg.id;
                    return (
                      <button
                        key={bg.id}
                        type="button"
                        className={`planner-choice-card ${
                          isSelected ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setData((prev) => ({ ...prev, budget: bg.id }));
                        }}
                      >
                        <div className="choice-text">
                          <span className="budget-tag">{bg.range}</span>
                          <strong>{bg.title}</strong>
                          <span>{bg.desc}</span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={18} className="choice-check" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Timeline */}
            {step === 4 && (
              <div className="planner-step-body">
                <span className="step-kicker">STEP 04 OF 05</span>
                <h3>When would you like to launch?</h3>
                <p className="step-sub">
                  We schedule design and development sprints to hit realistic business milestones.
                </p>

                <div className="planner-grid grid-2-col">
                  {timelineOptions.map((tl) => {
                    const isSelected = data.timeline === tl.id;
                    return (
                      <button
                        key={tl.id}
                        type="button"
                        className={`planner-choice-card ${
                          isSelected ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setData((prev) => ({ ...prev, timeline: tl.id }));
                        }}
                      >
                        <div className="choice-icon-wrap">
                          <Calendar size={18} />
                        </div>
                        <div className="choice-text">
                          <strong>{tl.label}</strong>
                          <span className="timeline-period">{tl.period}</span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={18} className="choice-check" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 5: Details & Submission */}
            {step === 5 && (
              <form onSubmit={handleSubmit} className="planner-step-body">
                <span className="step-kicker">STEP 05 OF 05</span>
                <h3>Where should we send your project proposal?</h3>
                <p className="step-sub">
                  Leave your contact details and any specific ideas or references.
                </p>

                <div className="planner-form-grid">
                  <div className="form-group">
                    <label htmlFor="planner-name">Your Full Name *</label>
                    <input
                      id="planner-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={data.name}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="planner-business">Business / Brand Name</label>
                    <input
                      id="planner-business"
                      type="text"
                      placeholder="e.g. Studio Apex / Outvibe"
                      value={data.business}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, business: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="planner-email">Email Address *</label>
                    <input
                      id="planner-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={data.email}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="planner-phone">WhatsApp / Phone Number</label>
                    <input
                      id="planner-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={data.phone}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group span-full">
                    <label htmlFor="planner-brief">Project Notes / Goals</label>
                    <textarea
                      id="planner-brief"
                      rows={3}
                      placeholder="Tell us a little about your business, target audience, or specific features you'd like to include..."
                      value={data.brief}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, brief: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="planner-summary-review">
                  <span>Selected Config:</span>
                  <strong>
                    {projectTypes.find((t) => t.id === data.projectType)?.label} ·{' '}
                    {stages.find((s) => s.id === data.stage)?.title} ·{' '}
                    {timelineOptions.find((t) => t.id === data.timeline)?.label}
                  </strong>
                </div>

                <div className="planner-submit-bar">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="button button-primary planner-submit-btn"
                  >
                    <Send size={16} />
                    <span>{isSending ? 'Sending Request...' : 'Send Project Request'}</span>
                  </button>

                  <a
                    href={`https://wa.me/919999999999?text=${formatWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp planner-wa-btn"
                  >
                    <MessageSquare size={16} />
                    <span>Continue on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

            {/* Stepper Navigation Controls (Steps 1–4) */}
            {step < 5 && (
              <div className="planner-nav-bar">
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={prevStep}
                  className="planner-nav-prev"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="planner-nav-next"
                >
                  <span>Next Step</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
