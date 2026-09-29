'use client';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site';
import { Logo, ProjectLink } from './primitives';
import { ThemeToggle } from './theme-toggle';

const subscribeReady = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function Navigation() {
  const ready = useSyncExternalStore(subscribeReady, clientReady, serverReady);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const close = () => {
      setOpen(false);
      toggle.current?.focus();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const links = panel.current?.querySelectorAll<HTMLElement>('a, button');
      if (!links?.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggle.current?.focus();
      } else if (event.shiftKey && document.activeElement === toggle.current) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 900px)');
    const onResize = () => {
      if (desktop.matches) close();
    };
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-action">
        <ThemeToggle />
        <ProjectLink />
      </div>
      <button
        disabled={!ready}
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-panel" id="mobile-navigation" ref={panel}>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  requestAnimationFrame(() =>
                    document.querySelector<HTMLElement>(item.href)?.focus(),
                  );
                }}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <ThemeToggle mobile />
            <ProjectLink
              onClick={() => {
                setOpen(false);
                requestAnimationFrame(() =>
                  document.getElementById('contact')?.focus(),
                );
              }}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
