import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <strong>HOW TO FISH GUIDE</strong>
      <span>Independent field guide</span>
      <nav aria-label="Footer navigation"><Link href="/walkthrough">Walkthrough</Link><Link href="/map">Island map</Link><Link href="/fish">Fish &amp; Lures</Link><Link href="/speedrun">Speedrun</Link></nav>
      <span className="footer-note">Unofficial fan site · Research baseline 1.0.9</span>
    </footer>
  );
}
