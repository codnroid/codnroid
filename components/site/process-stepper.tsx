'use client';

import { useState, type CSSProperties, type KeyboardEvent } from 'react';

type ProcessStep = {
  title: string;
  description: string;
  focus: string;
  deliverables: readonly string[];
  rhythm: string;
};

type ProcessStepperProps = {
  steps: readonly ProcessStep[];
};

export function ProcessStepper({ steps }: ProcessStepperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = 'process-stepper';
  const activeStep = steps[activeIndex];
  const progress = activeIndex / (steps.length - 1);

  function selectStep(index: number) {
    setActiveIndex(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keyToIndex: Record<string, number> = {
      ArrowRight: (activeIndex + 1) % steps.length,
      ArrowDown: (activeIndex + 1) % steps.length,
      ArrowLeft: (activeIndex - 1 + steps.length) % steps.length,
      ArrowUp: (activeIndex - 1 + steps.length) % steps.length,
      Home: 0,
      End: steps.length - 1,
    };
    const nextIndex = keyToIndex[event.key];

    if (nextIndex === undefined) return;

    event.preventDefault();
    selectStep(nextIndex);
    document.getElementById(`${id}-tab-${nextIndex}`)?.focus();
  }

  return (
    <div
      className="process-stepper"
      style={{ '--process-progress': `${progress}` } as CSSProperties}
    >
      <div
        className="process-timeline"
        role="tablist"
        aria-label="Project process"
      >
        {steps.map((step, index) => {
          const selected = index === activeIndex;

          return (
            <button
              aria-controls={`${id}-panel`}
              aria-selected={selected}
              className="process-step"
              id={`${id}-tab-${index}`}
              key={step.title}
              onClick={() => selectStep(index)}
              onKeyDown={handleKeyDown}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              <span className="process-number">0{index + 1}</span>
              <span className="process-step-copy">
                <span className="process-step-title">{step.title}</span>
                <span className="process-step-description">
                  {step.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <section
        aria-labelledby={`${id}-tab-${activeIndex}`}
        className="process-detail"
        id={`${id}-panel`}
        role="tabpanel"
        tabIndex={0}
      >
        <span>Stage 0{activeIndex + 1}</span>
        <div className="process-detail-intro">
          <h3>{activeStep.title}</h3>
          <p>{activeStep.description}</p>
        </div>
        <span className="process-detail-progress" aria-hidden="true">
          {activeIndex + 1} / {steps.length}
        </span>
        <div className="process-detail-content">
          <p className="process-detail-focus">{activeStep.focus}</p>
          <div className="process-detail-block">
            <span>What we work through</span>
            <ul>
              {activeStep.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </div>
          <div className="process-detail-block">
            <span>How we collaborate</span>
            <p>{activeStep.rhythm}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
