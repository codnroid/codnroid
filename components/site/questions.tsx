import { Plus, ArrowUpRight } from 'lucide-react';
import { faqs } from '@/lib/content';
import { SectionHeading } from './primitives';

export function Testimonials() {
  return (
    <section
      className="testimonial-section section"
      aria-labelledby="testimonial-heading"
    >
      <p className="eyebrow">
        <span />
        Client Perspectives
      </p>
      <div>
        <h2 id="testimonial-heading">
          Good work starts
          <br />
          with good relationships.
        </h2>
        <div className="testimonial-placeholder">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p>
            Stories worth sharing.
            <br />
            <span>In our clients&apos; own words.</span>
          </p>
          <small>CLIENT TESTIMONIALS · COMING SOON</small>
          <p className="placeholder-note">
            This space is reserved for approved client feedback. No testimonials
            have been published yet.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section faq-section" id="faq" tabIndex={-1}>
      <div>
        <SectionHeading eyebrow="A Little Clarity">
          Good questions.
          <br />
          <span className="soft-text">Straight answers.</span>
        </SectionHeading>
        <p className="faq-intro">
          Every great project starts with a conversation.
          <br />
          Here are a few things you might be wondering.
        </p>
        <a href="#contact" className="button button-text">
          Let&apos;s talk about your project
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details key={question}>
            <summary>
              <span className="faq-number">0{index + 1}</span>
              <h3>{question}</h3>
              <Plus size={16} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
