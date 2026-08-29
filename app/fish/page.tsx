import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { CreatureBrowser } from './creature-browser';

export const metadata: Metadata = {
  title: 'All Fish in How to Fish | Locations, Baits & Lures',
  description: 'Find all 49 How to Fish creatures, including rods, lures, boss baits, and progression requirements.',
};

export default function FishPage() {
  return (
    <div className="site-frame theme-fish">
      <Header />
      <main className="database-page">
        <header className="database-header inner-hero">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Fish &amp; Lures</span></nav>
          <p className="field-label">Creature database</p>
          <h1>All Fish in How to Fish</h1>
          <p>Find all 49 creatures, their rods, lures, boss baits, and progression requirements.</p>
          <div className="database-meta" aria-label="Collection totals"><span>49 Creatures</span><span>38 Regular</span><span>11 Bosses</span></div>
        </header>

        <aside className="quick-answer" aria-labelledby="quick-answer-title">
          <strong id="quick-answer-title">Quick answer</strong>
          <p>How to Fish currently has 49 collectible creatures: 38 regular catches and 11 bosses/minibosses. Regular catches are primarily determined by your equipped rod and lure, while boss creatures use specific bait or progression triggers.</p>
        </aside>

        <CreatureBrowser />
      </main>
      <Footer />
    </div>
  );
}
