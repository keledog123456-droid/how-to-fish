import type { Metadata } from 'next';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Speedrun Guide | Bean Achievement & Route',
  description: 'Current How to Fish speedrun guide for Bean: sub-60-minute route, planning splits, Patch 1.0.11 notes, and live leaderboard guidance.',
  alternates: { canonical: '/speedrun' },
};

const sections = [
  {
    id: 'bean',
    title: 'Bean Requirement',
    label: 'Official: finish within 1 hour',
    content: <>
      <p><strong>Bean</strong> requires finishing the game within one hour. Steam gives the 60-minute requirement, but does not document the exact internal timer start, pause behavior, or final timing frame.</p>
      <p>For a conservative attempt, use a fresh run and keep a continuous external timer. Do not stop at the final boss kill: return the Whale Fin, receive the RHIB keys, and activate the RHIB to finish the ending.</p>
    </>,
  },
  {
    id: 'version',
    title: 'Current-Version Route',
    label: 'Last checked Sep 4, 2026 · Patch 1.0.11',
    content: <>
      <p>Patch 1.0.5 fixed the bug that allowed travel to islands before they were unlocked, so launch-week direct island-skip videos are outdated for a current Bean route.</p>
      <p>Patch 1.0.11 is the latest official patch checked for this page. Its published notes do not list a Bean-specific or island-progression change, so the dependable route remains <strong>Lighthouse → Forest → Desert → Rocks → Volcano → Ending</strong>.</p>
    </>,
  },
  {
    id: 'checkpoints',
    title: 'Suggested Checkpoints',
    label: 'Community planning targets · not official cutoffs',
    content: <div className="checkpoint-list">
      <span><strong>Lighthouse</strong> About 5 min</span>
      <span><strong>Forest</strong> About 15 min</span>
      <span><strong>Desert</strong> About 30 min</span>
      <span><strong>Rocks</strong> About 45 min</span>
      <span><strong>RHIB ending</strong> Aim for about 55–59 min</span>
    </div>,
  },
  {
    id: 'route',
    title: 'How to Speedrun How to Fish: Bean Route',
    label: 'Current story order',
    steps: [
      'Lighthouse: build enough early money, give Beer to the Lighthouse Keeper, use the Empty Beer Can for Spider Crab, defeat it, complete the required hand-in, and secure Boat Keys plus Radar.',
      'Forest: collect all 3 Leeches, receive the Modified Leech, use it for Giant Piranha, defeat the boss, and return the Giant Piranha Skeleton to unlock the next route.',
      'Desert: hand in one accepted endangered catch, receive the Carrot, use it for Pufferfish, defeat the boss, and return the Pufferfish Fin.',
      'Rocks: buy a Professional Boss Lure, catch and defeat Tuna, keep its body, use the body to trigger Albatross, defeat the bird, and return the Albatross Head for the Volcano route.',
      'Volcano: complete the Scientist catch request, receive the Fish Bucket, defeat the Bowhead Whale, carry its body to the crater to trigger the Mutated Bowhead Whale, defeat the final boss, return the Whale Fin, receive the RHIB keys, and activate the RHIB.',
    ],
  },
  {
    id: 'competitive',
    title: 'Competitive Speedrunning',
    label: 'Separate from the Bean achievement',
    content: <>
      <p>Bean and leaderboard speedrunning are related but not identical goals. Bean only asks you to finish within one hour; leaderboard runs use category, version, and player-count rules that can change independently.</p>
      <p>As last checked on September 4, 2026, Speedrun.com lists <strong>Any%, No Dynamite, 100%, Crab%, and No Gambling</strong>, with version splits for <strong>v1.0.4, v1.0.5–v1.0.10, and v1.0.11+</strong> and player-count filters for Solo, Duo, Trio, and Quad.</p>
    </>,
  },
  {
    id: 'wr',
    title: 'Current WR & Live Leaderboard',
    label: 'Live data · verify before quoting',
    content: <>
      <p>World-record times can change quickly, so this guide does not hard-code one WR as permanent fact. Use the live leaderboard and select the exact category, game version, and player count you want to compare.</p>
      <p><a href="https://www.speedrun.com/HowtoFish" target="_blank" rel="noreferrer">Open the live How to Fish leaderboard on Speedrun.com</a>.</p>
    </>,
  },
  {
    id: 'mistakes',
    title: 'Common Speedrun Mistakes',
    label: 'Protect the run',
    steps: [
      'Following pre-1.0.5 island-skip videos as if they still describe the current route.',
      'Stopping the timer at the final boss instead of completing the Whale Fin hand-in and RHIB ending.',
      'Selling, cooking, or losing route-critical bodies and trophies such as the Giant Piranha Skeleton, Tuna body, Albatross Head, or Whale Fin.',
      'Spending too much time on optional catches, collection goals, gambling, or upgrades that do not unlock the next progression step.',
      'Treating community checkpoint times as official fail conditions; they are planning targets, not Steam achievement rules.',
    ],
  },
  {
    id: 'sources',
    title: 'Verification Notes',
    label: 'Last checked Sep 4, 2026',
    content: <>
      <p>Primary checks for this page use Steam's official Bean achievement text, official How to Fish patch notes for 1.0.5 and 1.0.11, and Speedrun.com for leaderboard categories and version splits.</p>
      <p>The developers do not publish a complete official story walkthrough, so the island-by-island route was cross-checked against multiple current community walkthroughs. Community timing checkpoints are presented as advice rather than official rules.</p>
    </>,
  },
];

export default function SpeedrunPage() {
  return <GuidePage
    eyebrow="Speedrun guide"
    title="How to Fish Speedrun Guide: Bean Achievement & Fast Route"
    description="A current-version Bean route for ordinary players, with practical checkpoints and a separate guide to competitive speedrunning."
    summary={<>Follow the normal progression: <strong>Lighthouse → Forest → Desert → Rocks → Volcano → Ending</strong>. For Bean, finish the final hand-in and activate the RHIB within 60 minutes.</>}
    facts={[
      { label: 'Achievement', value: 'Bean' },
      { label: 'Official requirement', value: 'Under 60 min' },
      { label: 'Current patch checked', value: '1.0.11' },
    ]}
    sections={sections}
    related={[
      { href: '/walkthrough', label: 'Full route', title: 'Complete Walkthrough' },
      { href: '/map', label: 'Navigation', title: 'All Islands Map' },
      { href: '/fish', label: 'Database', title: '49 Creatures & Lures' },
    ]}
  />;
}
