'use client';

import { useState, type KeyboardEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { contactConversation } from '@/lib/content';
import { getProjectLink } from '@/lib/site';

type ContactMode = 'starter' | 'conversation';

export function ContactConversation() {
  const [mode, setMode] = useState<ContactMode>('starter');
  const [stageIndex, setStageIndex] = useState(0);
  const { external, ...projectLink } = getProjectLink();
  const activeStage = contactConversation.starter[stageIndex];

  function selectStage(index: number) {
    setMode('starter');
    setStageIndex(index);
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const lastIndex = contactConversation.starter.length - 1;
    const destinations: Record<string, number> = {
      ArrowRight: (stageIndex + 1) % contactConversation.starter.length,
      ArrowDown: (stageIndex + 1) % contactConversation.starter.length,
      ArrowLeft:
        (stageIndex - 1 + contactConversation.starter.length) %
        contactConversation.starter.length,
      ArrowUp:
        (stageIndex - 1 + contactConversation.starter.length) %
        contactConversation.starter.length,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = destinations[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectStage(nextIndex);
    document.getElementById(`contact-stage-${nextIndex}`)?.focus();
  }

  return (
    <div className="contact-conversation">
      <div className="contact-card-heading">
        <span className="contact-card-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div>
          <span>
            {mode === 'starter'
              ? 'Project starter'
              : 'A clear first conversation'}
          </span>
          <p>
            {mode === 'starter'
              ? 'A few prompts to shape a useful first conversation.'
              : 'A considered start for ambitious digital products.'}
          </p>
        </div>
        {mode === 'starter' && (
          <span className="contact-stage-count" aria-hidden="true">
            0{stageIndex + 1}
            <small>/ 03</small>
          </span>
        )}
      </div>

      <div className="contact-actions" aria-label="Start a conversation">
        {external ? (
          <a {...projectLink} className="button button-primary">
            Start a Project
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (Google Form, opens in a new tab)</span>
          </a>
        ) : (
          <button
            aria-controls="contact-conversation-panel"
            aria-pressed={mode === 'starter'}
            className="button button-primary"
            onClick={() => setMode('starter')}
            type="button"
          >
            Start a Project
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        )}
        <button
          aria-controls="contact-conversation-panel"
          aria-pressed={mode === 'conversation'}
          className="button button-secondary"
          onClick={() => setMode('conversation')}
          type="button"
        >
          Let&apos;s Talk
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>

      {mode === 'starter' ? (
        <section
          aria-live="polite"
          className="contact-panel"
          id="contact-conversation-panel"
        >
          <>
            <div className="contact-panel-topline">
              <span>Choose a starting point</span>
              <span aria-hidden="true">
                {stageIndex + 1} / {contactConversation.starter.length}
              </span>
            </div>
            <div
              className="contact-starter-tabs"
              role="tablist"
              aria-label="Project starter stages"
            >
              {contactConversation.starter.map((stage, index) => (
                <button
                  aria-controls="contact-starter-detail"
                  aria-selected={stageIndex === index}
                  id={`contact-stage-${index}`}
                  key={stage.label}
                  onClick={() => selectStage(index)}
                  onKeyDown={handleStageKeyDown}
                  role="tab"
                  tabIndex={stageIndex === index ? 0 : -1}
                  type="button"
                >
                  <span>0{index + 1}</span>
                  {stage.label}
                </button>
              ))}
            </div>
            <div
              aria-labelledby={`contact-stage-${stageIndex}`}
              className="contact-starter-detail"
              id="contact-starter-detail"
              role="tabpanel"
              tabIndex={0}
            >
              <span className="contact-detail-kicker">
                Stage 0{stageIndex + 1} · {activeStage.label}
              </span>
              <h3>{activeStage.prompt}</h3>
              <ul>
                {activeStage.items.map((item) => (
                  <li key={item}>
                    <Check size={14} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        </section>
      ) : (
        <section
          aria-live="polite"
          className="contact-panel"
          id="contact-conversation-panel"
        >
          <>
            <span>{contactConversation.nextSteps.label}</span>
            <h3>{contactConversation.nextSteps.title}</h3>
            <ul>
              {contactConversation.nextSteps.items.map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </>
        </section>
      )}

      <p className="contact-status" id="project-enquiry">
        {external
          ? 'The project enquiry form opens in a new tab.'
          : 'Project enquiries are being prepared. These prompts are only for planning; no submission is sent.'}
      </p>
    </div>
  );
}
