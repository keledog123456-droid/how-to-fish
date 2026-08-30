import { Footer } from './components/footer';
import { Header } from './components/header';

const quickLinks = [
  { label: 'HOW TO START', description: 'Begin at the Lighthouse', icon: '01', href: '/walkthrough#lighthouse' },
  { label: 'MAIN STORY', description: 'Follow the full island route', icon: '02', href: '/walkthrough' },
  { label: 'FISH & LURES', description: 'Browse creatures and bait', icon: '03', href: '/fish' },
  { label: 'ISLAND MAP', description: 'Navigate every location', icon: '04', href: '/map' },
];
const routes = [
  { title: 'Complete Walkthrough', label: 'Walkthrough', meta: '5 locations', href: '/walkthrough', accent: 'sand' },
  { title: 'All Islands Map', label: 'Map', meta: '5 locations', href: '/map', accent: 'green' },
  { title: '49 Creatures & Lures', label: 'Fish', meta: '49 creatures', href: '/fish', accent: 'aqua' },
  { title: 'Bean Speedrun', label: 'Speedrun', meta: 'Under 60 min', href: '/speedrun', accent: 'orange' },
  { title: 'Boss & Progression Guide', label: 'Progression', meta: '11 bosses', accent: 'sand' },
];
const popular = [
  { label: 'How to unlock Forest', href: '/walkthrough#lighthouse' },
  { label: 'How to catch Giant Piranha', href: '/fish/giant-piranha' },
  { label: 'All fish and lure locations', href: '/fish' },
  { label: 'How to unlock Volcano', href: '/walkthrough#rocks' },
  { label: 'Bean achievement under 60 minutes', href: '/speedrun' },
];

export default function Home() {
  return (
    <div className="site-frame"><Header /><main className="home-main">
      <div className="home-fold">
        <section className="answer-finder" aria-labelledby="page-title"><div className="hero-content">
          <p className="field-label">Independent game field guide</p><h1 id="page-title">HOW TO FISH</h1>
          <p className="hero-subtitle">Fishing guides, maps, walkthroughs, and creature data.</p>
          <div className="finder-search" aria-label="Guide search preview"><span className="search-glyph" aria-hidden="true">⌕</span><input type="search" placeholder="Search guides, fish, maps..." aria-label="Search guides, fish, maps" disabled /><span className="search-state">Coming soon</span></div>
        </div></section>
        <div className="home-content fold-content">
          <nav className="quick-links" aria-label="Quick answers">{quickLinks.map((item) => <a href={item.href} key={item.label}><span className="quick-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.description}</small></span><span className="quick-arrow">→</span></a>)}</nav>
        </div>
      </div>
      <div className="home-content">
        <div className="content-grid">
          <section className="guide-panel" id="guide-routes" aria-labelledby="guide-title">
            <div className="panel-heading"><div><p className="section-kicker">Field manual</p><h2 id="guide-title">How to Fish Guide</h2></div><a href="/walkthrough">View walkthrough</a></div>
            <div className="route-list">{routes.map((route, index) => { const content = <><span className="route-number">0{index + 1}</span><span className="route-copy"><span className="route-label">{route.label}</span><strong>{route.title}</strong></span><span className="route-meta">{route.meta}</span><span className="route-state">{route.href ? 'View guide →' : 'Reference'}</span></>; return route.href ? <a className={`guide-route accent-${route.accent}`} href={route.href} key={route.title}>{content}</a> : <div className={`guide-route accent-${route.accent}`} key={route.title}>{content}</div>; })}</div>
          </section>
          <aside className="popular-panel" aria-labelledby="popular-title"><p className="section-kicker">Quick routes</p><h2 id="popular-title">Popular Searches</h2><div className="popular-chips">{popular.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</div></aside>
        </div>
      </div>
    </main><Footer /></div>
  );
}
