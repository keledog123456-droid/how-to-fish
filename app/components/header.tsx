import Image from 'next/image';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="How to Fish Guide home">
          <span className="brand-icon" aria-hidden="true"><Image src="/android-chrome-192x192.png" alt="" width={28} height={28} priority /></span>
          <span><strong>HOW TO FISH</strong><small>FIELD GUIDE</small></span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="/walkthrough">Walkthrough</a><a href="/map">Map</a><a href="/speedrun">Speedrun</a><a href="/fish">Fish</a>
        </nav>
      </div>
    </header>
  );
}
