import Image from 'next/image';
import type { ReactNode, MouseEventHandler } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getProjectLink } from '@/lib/site';

export function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Codnroid home">
      <Image
        unoptimized
        src="/images/codnroid-logo.webp"
        loading="eager"
        width="1536"
        height="1024"
        alt="Codnroid"
        fetchPriority="high"
      />
    </a>
  );
}
export function ProjectLink({
  children = 'Start a Project',
  variant = 'primary',
  onClick,
}: {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const { external, ...link } = getProjectLink();
  return (
    <a
      {...link}
      href={link.href}
      onClick={onClick}
      className={`button button-${variant}`}
    >
      {children}
      {external ? (
        <ArrowUpRight size={18} aria-hidden="true" />
      ) : (
        <ArrowRight size={18} aria-hidden="true" />
      )}
      {external && (
        <span className="sr-only"> (Google Form, opens in a new tab)</span>
      )}
    </a>
  );
}
export function SectionHeading({
  eyebrow,
  children,
  copy,
}: {
  eyebrow: string;
  children: ReactNode;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{children}</h2>
      </div>
      {copy && <p className="section-intro">{copy}</p>}
    </div>
  );
}
