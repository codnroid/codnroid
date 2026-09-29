'use client';

import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
const getServerTheme = (): Theme => 'light';

export function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const toggle = () => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('codnroid-theme', nextTheme);
    listeners.forEach((listener) => listener());
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${mobile ? 'theme-toggle-mobile' : ''}`}
      onClick={toggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" />
      ) : (
        <Moon aria-hidden="true" />
      )}
      {mobile && <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>}
    </button>
  );
}
