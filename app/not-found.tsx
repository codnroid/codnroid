import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="section not-found">
      <p className="eyebrow">Codnroid / 404</p>
      <h1>This page isn&apos;t here yet.</h1>
      <p>Our work, capabilities, and project enquiries are on the homepage.</p>
      <Link href="/" className="button button-primary">
        Back to Codnroid →
      </Link>
    </main>
  );
}
