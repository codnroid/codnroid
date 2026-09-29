'use client';

import { useState } from 'react';
import {
  X,
  Send,
  Globe,
  Smartphone,
  ShoppingBag,
  Workflow,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

function WhatsAppIcon({
  size = 26,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
                  <WhatsAppIcon size={18} />
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
          aria-label={
            isOpen ? 'Close WhatsApp card' : 'Chat with CODNROID on WhatsApp'
          }
        >
          <span className="wa-btn-pulse" />
          {isOpen ? (
            <X size={24} className="wa-icon-transition" />
          ) : (
            <WhatsAppIcon size={28} className="wa-icon-transition" />
          )}
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
          <WhatsAppIcon size={18} />
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
