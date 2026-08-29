import Link from 'next/link';

export type CreatureDetailData = {
  name: string;
  label: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  quickAnswer: React.ReactNode;
  steps: Array<{ title: string; detail: React.ReactNode }>;
  progressionTitle: string;
  progressionCopy: React.ReactNode;
};

export function CreatureDetail({ creature }: { creature: CreatureDetailData }) {
  return (
    <main className="detail-page">
      <div className="inner-hero creature-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/fish">Fish &amp; Lures</Link><span>/</span><span>{creature.name}</span></nav>
        <p className="inner-hero-kicker">Creature record · Field notes</p><h1>{creature.name}</h1><p>{creature.description}</p>
      </div>

      <div className="detail-layout">
        <article className="detail-article">
          <header className="detail-header compact-detail-header">
            <span className="detail-type">{creature.label}</span>
            <dl className="fact-strip">
              {creature.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl>
          </header>

          <section className="detail-quick-answer" id="quick-answer" aria-labelledby="quick-answer-heading">
            <p className="section-kicker">Quick answer</p>
            <h2 id="quick-answer-heading">How do you summon {creature.name}?</h2>
            <p>{creature.quickAnswer}</p>
          </section>

          <section className="detail-section" id="how-to-get" aria-labelledby="how-to-get-heading">
            <div className="detail-section-heading"><div><p className="section-kicker">Verified progression</p><h2 id="how-to-get-heading">How to get {creature.name}</h2></div><span>{creature.steps.length} steps</span></div>
            <ol className="detail-steps">
              {creature.steps.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><strong>{step.title}</strong><p>{step.detail}</p></div></li>)}
            </ol>
          </section>

          <section className="detail-section progression-section" id="why-it-matters" aria-labelledby="why-heading">
            <p className="section-kicker">Story progression</p>
            <h2 id="why-heading">{creature.progressionTitle}</h2>
            <p>{creature.progressionCopy}</p>
          </section>

          <nav className="related-links" id="related" aria-labelledby="related-heading">
            <div><p className="section-kicker">Keep exploring</p><h2 id="related-heading">Related information</h2></div>
            <Link href="/fish"><span>Database</span><strong>Back to Fish &amp; Lures</strong></Link>
            <Link href="/"><span>Field guide</span><strong>How to Fish home</strong></Link>
          </nav>
        </article>

        <aside className="detail-sidebar">
          <h2>On this page</h2>
          <nav aria-label="On this page"><a href="#quick-answer">Quick Answer</a><a href="#how-to-get">How to get Giant Piranha</a><a href="#why-it-matters">Why it matters</a><a href="#related">Related information</a></nav>
          <div className="sidebar-divider" />
          <h2>Creature navigation</h2>
          <Link href="/fish">All Fish &amp; Lures</Link>
        </aside>
      </div>
    </main>
  );
}
