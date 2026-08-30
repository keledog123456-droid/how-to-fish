import type { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

type GuideSection = {
  id: string;
  title: string;
  label: string;
  content?: ReactNode;
  steps?: string[];
};

type RelatedLink = { href: string; label: string; title: string };

export function GuidePage({
  eyebrow,
  title,
  description,
  summary,
  facts,
  sections,
  related,
}: {
  eyebrow: string;
  title: string;
  description: string;
  summary: ReactNode;
  facts: Array<{ label: string; value: string }>;
  sections: GuideSection[];
  related: RelatedLink[];
}) {
  const accent = eyebrow.toLowerCase().includes('map') ? 'map' : eyebrow.toLowerCase().includes('speedrun') ? 'speedrun' : 'walkthrough';
  return (
    <div className={`site-frame theme-${accent}`}>
      <Header />
      <main className="detail-page">
        <div className="inner-hero">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{eyebrow}</span></nav>
          <p className="inner-hero-kicker">{eyebrow}</p><h1>{title}</h1><p>{description}</p>
        </div>
        <div className="detail-layout">
          <article className="detail-article">
            <header className="detail-header compact-detail-header">
              <span className="detail-type">{eyebrow}</span>
              <dl className="fact-strip">
                {facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            </header>

            <section className="detail-quick-answer">
              <p className="section-kicker">Quick answer</p>
              <h2>Route at a glance</h2>
              <p>{summary}</p>
            </section>

            {sections.map((section) => (
              <section className="detail-section" id={section.id} key={section.id}>
                <div className="detail-section-heading"><h2>{section.title}</h2><span>{section.label}</span></div>
                {section.content && <div className="guide-copy">{section.content}</div>}
                {section.steps && <ol className="detail-steps">
                  {section.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}
                </ol>}
              </section>
            ))}

            <section className="related-links" aria-labelledby="related-guides">
              <div><p className="section-kicker">Keep exploring</p><h2 id="related-guides">Related guides</h2></div>
              {related.map((link) => <a href={link.href} key={link.href}><span>{link.label}</span><strong>{link.title}</strong></a>)}
            </section>
          </article>

          <aside className="detail-sidebar">
            <h2>On this page</h2>
            <nav aria-label="On this page">{sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}</nav>
            <div className="sidebar-divider" />
            <a href="/fish">All Fish &amp; Lures</a>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
