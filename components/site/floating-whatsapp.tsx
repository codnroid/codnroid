'use client';

import { useState } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Globe,
  Smartphone,
  ShoppingBag,
  Workflow,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const whatsappCategories = [
  {
    id: 'website',
    label: 'Website',
    icon: Globe,
    text: "Hi CODNROID, I'm interested in building a high-performance business website and would like to discuss my project.",
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    text: "Hi CODNROID, I'm looking to build a cross-platform mobile application and would like to discuss scope and timelines.",
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingBag,
    text: "Hi CODNROID, I'm interested in building an e-commerce storefront with custom checkout and would like to discuss my project.",
  },
  {
    id: 'saas',
    label: 'SaaS Platform',
    icon: Workflow,
    text: "Hi CODNROID, I'm planning a SaaS product / web application and would like to discuss architecture and development.",
  },
  {
    id: 'other',
    label: 'Something Else',
    icon: Sparkles,
    text: "Hi CODNROID, I have a custom digital project in mind and would like to discuss how you can help.",
  },
];

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    whatsappCategories[0]
  );

  const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
    selectedCategory.text
  )}`;

  const scrollToPlanner = () => {
    const el = document.getElementById('planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Floating Widget */}
      <div className="floating-whatsapp-container">
        {isOpen && (
          <aside
            className="whatsapp-expanded-card"
            aria-label="Quick WhatsApp Inquiry"
          >
            <div className="wa-card-header">
              <div className="wa-header-brand">
                <div className="wa-avatar">
                  <span className="wa-online-dot" />
                  <span>CN</span>
                </div>
                <div>
                  <strong>CODNROID Studio</strong>
                  <small>Usually replies within 15 mins</small>
                </div>
              </div>
              <button
                type="button"
                className="wa-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp card"
              >
                <X size={16} />
              </button>
            </div>

            <div className="wa-card-body">
              <p className="wa-prompt">
                Have a project in mind? What would you like to build?
              </p>

              <div className="wa-choice-list">
                {whatsappCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`wa-choice-item ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <Icon size={14} />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="wa-preview-message">
                <small>Message preview:</small>
                <p>&ldquo;{selectedCategory.text}&rdquo;</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-start-chat-btn"
              >
                <Send size={15} />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </aside>
        )}

        {/* Floating Trigger Button */}
        <button
          type="button"
          className="floating-whatsapp-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Chat with CODNROID on WhatsApp"
        >
          <span className="wa-btn-pulse" />
          <MessageSquare size={24} />
          <span className="wa-btn-badge">Online</span>
        </button>
      </div>

      {/* Sticky Mobile Bottom Quick Action Bar (Section 20) */}
      <nav className="sticky-mobile-bar" aria-label="Mobile quick actions">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-wa"
        >
          <MessageSquare size={16} />
          <span>WhatsApp Chat</span>
        </a>
        <button
          type="button"
          onClick={scrollToPlanner}
          className="mobile-bar-planner"
        >
          <span>Start a Project</span>
          <ArrowRight size={15} />
        </button>
      </nav>
    </>
  );
}
