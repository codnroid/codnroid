import { ArrowUp } from 'lucide-react';
import { services } from '@/lib/content';
import { Logo } from './primitives';
import { ContactConversation } from './contact-conversation';

export function Contact() {
  return (
    <section
      className="contact-section section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="contact-atmosphere" aria-hidden="true" />
      <div className="contact-content">
        <p className="eyebrow">
          <span />
          The Next Chapter Starts Here
        </p>
        <h2 id="contact-heading">
          Have an idea
          <br />
          worth <span className="gradient-text">building?</span>
        </h2>
        <p>Let&apos;s turn it into something people love using.</p>
        <ContactConversation />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>
            Designing and engineering digital
            <br />
            products for ambitious businesses.
          </p>
          <span className="footer-signature">
            A little imagination. A lot of intention.
          </span>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          {services.slice(0, 6).map((service) => (
            <a key={service.id} href={`#service-${service.id}`}>
              {service.title.replace(' Development', '')}
            </a>
          ))}
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#work">Our work</a>
          <a href="#process">Our process</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <span id="insights" tabIndex={-1} className="footer-pending">
            Insights <small>Coming soon</small>
          </span>
          <a href="#faq">FAQ</a>
          <a href="#technology">Our capabilities</a>
          <h3 className="footer-contact-label">Contact</h3>
          <a href="#contact">Start a conversation ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Codnroid. All rights reserved.</span>
        <div>
          <span>
            Privacy Policy <small>Pending</small>
          </span>
          <span>
            Terms <small>Pending</small>
          </span>
        </div>
        <a href="#top" aria-label="Back to top">
          Back to top
          <ArrowUp size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
