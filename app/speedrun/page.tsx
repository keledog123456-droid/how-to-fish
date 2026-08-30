import type { Metadata } from 'next';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Speedrun Guide | Bean Achievement',
  description: 'Plan a current-version route for finishing How to Fish under 60 minutes and earning the Bean achievement.',
  alternates: { canonical: '/speedrun' },
};

const sections = [
  { id: 'bean', title: 'Bean Requirement', label: 'Under 60 minutes', content: <>
    <p>Bean requires finishing the game within one hour. For a safe personal timer, start with fresh gameplay and continue through the actual ending and achievement.</p>
    <p>The final boss kill is not the finish: return the Whale Fin, receive the RHIB keys, and depart for the mainland. A target near 55 minutes is practical buffer advice, not an official threshold.</p>
  </> },
  { id: 'version', title: 'Current-Version Warning', label: 'Patch 1.0.5+', content: <p>Patch 1.0.5 fixed travel to islands before they were unlocked. Do not treat old direct island-skip videos as the safe current Bean route; leaderboards separate old and current version categories.</p> },
  { id: 'checkpoints', title: 'Suggested Checkpoints', label: 'Advice · not fail conditions', content: <div className="checkpoint-list">
    <span><strong>Lighthouse</strong> About 5–7 min</span><span><strong>Forest</strong> About 13–15 min</span><span><strong>Desert</strong> About 26–30 min</span><span><strong>Rocks</strong> About 44–45 min</span><span><strong>Volcano + ending</strong> Target about 55 min</span>
  </div> },
  { id: 'route', title: 'Current Bean Route', label: 'Story order', steps: [
    'Lighthouse: build enough early money, use Beer then Empty Beer Can for Spider Crab, and obtain boat access and Radar.',
    'Forest: collect 3 Leeches, get the special bait, defeat Giant Piranha, and hand in its Skeleton.',
    'Desert: hand in a valid endangered catch, use Carrot for Pufferfish, and return the Pufferfish Fin.',
    'Rocks: use Professional Boss Lure for Tuna, keep its body, defeat Albatross, and hand in the Albatross Head.',
    'Volcano: complete the Scientist quest, defeat both Bowhead Whale encounters, return the Whale Fin, and depart in the RHIB.',
  ] },
  { id: 'competitive', title: 'Competitive Any%', label: 'Separate category', content: <p>Bean does not require world-record-level skips. Competitive techniques and records continue to change, so verify the relevant current-version leaderboard rather than relying on a static record time.</p> },
];

export default function SpeedrunPage() {
  return <GuidePage
    eyebrow="Speedrun guide"
    title="Bean Achievement & Fast Route"
    description="A safe current-version route for ordinary players pursuing Bean, kept separate from evolving competitive Any% strategies."
    summary={<>Use the normal progression: <strong>Lighthouse → Forest → Desert → Rocks → Volcano → Ending</strong>. Finish the hand-in and RHIB departure below 60 minutes.</>}
    facts={[{ label: 'Achievement', value: 'Bean' }, { label: 'Requirement', value: 'Under 60 min' }, { label: 'Safety target', value: 'About 55 min' }]}
    sections={sections}
    related={[{ href: '/walkthrough', label: 'Full route', title: 'Complete Walkthrough' }, { href: '/map', label: 'Navigation', title: 'All Islands Map' }, { href: '/fish', label: 'Database', title: '49 Creatures & Lures' }]}
  />;
}
