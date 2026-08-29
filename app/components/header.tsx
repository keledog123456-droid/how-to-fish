import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="How to Fish Guide home">
          <span className="brand-icon" aria-hidden="true"><Image src="/android-chrome-192x192.png" alt="" width={28} height={28} priority /></span>
          <span><strong>HOW TO FISH</strong><small>FIELD GUIDE</small></span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/walkthrough">Walkthrough</Link><Link href="/map">Map</Link><Link href="/speedrun">Speedrun</Link><Link href="/fish">Fish</Link>
        </nav>
      </div>
    </header>
  );
}
