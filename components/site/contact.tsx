'use client';

import {
  ArrowUp,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
} from 'lucide-react';
import { services } from '@/lib/content';
import { Logo } from './primitives';
import { ContactConversation } from './contact-conversation';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Contact() {
  const whatsappUrl =
    'https://wa.me/919999999999?text=Hi%20CODNROID%2C%20I%20have%20an%20idea%20for%20a%20digital%20product%20and%20would%20like%20to%20discuss%20it.';

  return (
    <section
      className="contact-section section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="contact-atmosphere" aria-hidden="true" />
      <div className="contact-studio-layout">
        {/* Left Column: Direct Studio Details */}
        <div className="contact-studio-info">
          <p className="eyebrow">
            <span />
            Get In Touch
          </p>
          <h2 id="contact-heading">
            Have an idea?
            <br />
            Let&apos;s <span className="gradient-text">build it.</span>
          </h2>
          <p className="contact-studio-sub">
            Tell us what you&apos;re working on and we&apos;ll help you determine
            the right way to design, architect, and ship it.
          </p>

          <div className="contact-channels-grid">
            <div className="channel-card">
              <div className="channel-icon">
                <Mail size={16} />
              </div>
              <div>
                <small>DIRECT INQUIRY</small>
                <strong>hello@codnroid.com</strong>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card channel-link"
            >
              <div className="channel-icon wa-icon">
                <MessageSquare size={16} />
              </div>
              <div>
                <small>INSTANT WHATSAPP</small>
                <strong>+91 99999 99999 ↗</strong>
              </div>
            </a>

            <div className="channel-card">
              <div className="channel-icon">
                <MapPin size={16} />
              </div>
              <div>
                <small>LOCATION</small>
                <strong>Bengaluru & Global Remote</strong>
              </div>
            </div>

            <div className="channel-card">
              <div className="channel-icon">
                <Clock size={16} />
              </div>
              <div>
                <small>STUDIO STATUS</small>
                <strong className="status-open">
                  <span className="live-dot" /> Open for Selected Projects
                </strong>
              </div>
            </div>
          </div>

          <div className="contact-social-row">
            <span className="social-label">Follow CODNROID:</span>
            <div className="social-links">
              <a
                href="https://linkedin.com/company/codnroid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CODNROID on LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://instagram.com/codnroid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CODNROID on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com/codnroid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CODNROID on Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://github.com/codnroid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CODNROID on GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Starter Form / Conversation */}
        <div className="contact-studio-action">
          <ContactConversation />
        </div>
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
            Digital products designed and engineered
            <br />
            from concept to launch.
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
          <h3>Connect</h3>
          <a
            href="https://instagram.com/codnroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://linkedin.com/company/codnroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/codnroid"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Codnroid. All rights reserved.</span>
        <div>
          <span>
            Privacy Policy <small>Pending</small>
          </span>
          <span>
            Terms of Service <small>Pending</small>
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
