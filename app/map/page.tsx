import type { Metadata } from 'next';
import Link from 'next/link';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Map | All Islands and Locations',
  description: 'See the five main progression locations, their Radar markers, relative directions, and unlock requirements.',
};

const locations = [
  { id: 'lighthouse', title: 'Lighthouse', label: 'Start', content: <p>The starting position. Complete the Spider Crab opening chain to obtain boat access or keys and the Radar.</p> },
  { id: 'forest', title: 'Forest', label: 'Green · Northwest', content: <p>Follow the green Radar contact, roughly northwest of Lighthouse. Complete the <Link href="/walkthrough#forest">Giant Piranha chain</Link> to unlock Desert.</p> },
  { id: 'desert', title: 'Desert', label: 'Yellow · West', content: <p>West of Forest. Complete the endangered catch and Pufferfish chain, then return the Pufferfish Fin to unlock Rocks.</p> },
  { id: 'rocks', title: 'Rocks', label: 'Red · West', content: <p>West of Desert. Use Professional Boss Lure for Tuna, preserve its body to summon Albatross, and hand in the Albatross Head.</p> },
  { id: 'volcano', title: 'Volcano', label: 'Pink · North', content: <p>North of Rocks. It becomes available after the Albatross chain and contains the final story sequence.</p> },
  { id: 'coordinates', title: 'Radar, Not Coordinates', label: 'Navigation note', content: <p>The game primarily presents destinations as colored Radar contacts and markers rather than a conventional player-readable X/Y coordinate system. The relative directions above are a route aid, not numeric coordinates, and the route is not to scale.</p> },
];

export default function MapPage() {
  return <GuidePage
    eyebrow="Island map"
    title="How to Fish Map: All Islands and Locations"
    description="A progression-first map guide using the game’s Radar markers and unlock order without inventing numeric coordinates."
    summary={<>There are five main progression locations: <strong>Lighthouse → Forest → Desert → Rocks → Volcano</strong>. Lighthouse is the start; the other four are unlockable islands.</>}
    facts={[{ label: 'Locations', value: '5' }, { label: 'Navigation', value: 'Radar markers' }, { label: 'Coordinates', value: 'No readable X/Y' }]}
    sections={locations}
    related={[{ href: '/walkthrough', label: 'Progression', title: 'Complete Walkthrough' }, { href: '/fish', label: 'Database', title: '49 Creatures & Lures' }, { href: '/speedrun', label: 'Fast route', title: 'Bean Speedrun Guide' }]}
  />;
}
