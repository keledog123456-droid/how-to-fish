import type { Metadata } from 'next';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Map: All Islands, Radar & Coordinates',
  description:
    'Follow the full How to Fish map route from Lighthouse to Volcano, including Radar colors, unlock requirements, and how coordinates work.',
  alternates: { canonical: '/map' },
};

const locations = [
  {
    id: 'all-locations',
    title: 'All How to Fish Locations at a Glance',
    label: 'Full route',
    content: (
      <>
        <p>
          The main progression follows five named locations in one order:
          <strong> Lighthouse → Forest → Desert → Rocks → Volcano</strong>.
          Lighthouse is the starting area; the other four destinations unlock as
          you complete the story chain and hand in the required quest item.
        </p>
        <div className="checkpoint-list" aria-label="How to Fish map route">
          <span>
            <strong>1. Lighthouse</strong>
            Start · available immediately
          </span>
          <span>
            <strong>2. Forest</strong>
            Green Radar marker · Spider Crab progression
          </span>
          <span>
            <strong>3. Desert</strong>
            Yellow Radar marker · Giant Piranha hand-in
          </span>
          <span>
            <strong>4. Rocks</strong>
            Red Radar marker · Pufferfish hand-in
          </span>
          <span>
            <strong>5. Volcano</strong>
            Pink Radar marker · Albatross hand-in
          </span>
        </div>
      </>
    ),
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse',
    label: 'Start',
    content: (
      <p>
        Lighthouse is the starting location. Complete the opening Spider Crab
        progression, return the quest result to the Lighthouse Keeper, and obtain
        the boat access needed to begin island travel. The Radar becomes your main
        navigation tool for the destinations that follow.
      </p>
    ),
  },
  {
    id: 'forest',
    title: 'Forest',
    label: 'Green · Northwest',
    content: (
      <p>
        Forest is the first unlockable island. Follow the green Radar marker,
        roughly northwest of Lighthouse. Collect exactly three Leeches, exchange
        them for the special Leech bait used for the Giant Piranha encounter,
        defeat Giant Piranha, and return the Giant Piranha Skeleton to unlock the
        Desert destination. See the <a href="/walkthrough#forest">Forest walkthrough</a> for the full quest chain.
      </p>
    ),
  },
  {
    id: 'desert',
    title: 'Desert',
    label: 'Yellow · West',
    content: (
      <p>
        Desert appears as a yellow Radar marker west of Forest. Give the Tourist
        a valid catch marked Endangered / Endangered Species to receive the
        Carrot, use the Carrot for the Pufferfish encounter, then return the
        Pufferfish Fin to unlock Rocks.
      </p>
    ),
  },
  {
    id: 'rocks',
    title: 'Rocks',
    label: 'Red · West',
    content: (
      <p>
        Rocks appears as a red Radar marker west of Desert. Use Professional Boss
        Lure for Tuna, keep the Tuna body instead of selling or cooking it, place
        it on the ground to summon Albatross, then return the Albatross Head to
        unlock Volcano.
      </p>
    ),
  },
  {
    id: 'volcano',
    title: 'Volcano',
    label: 'Pink · North',
    content: (
      <p>
        Volcano is the final main progression location and appears as a pink
        Radar marker north of Rocks after the Albatross hand-in. It contains the
        final story sequence, so treat it as the last stop in the main map route.
      </p>
    ),
  },
  {
    id: 'coordinates',
    title: 'How Coordinates Work',
    label: 'Radar navigation',
    content: (
      <>
        <p>
          How to Fish does not present the main island route as a conventional
          player-readable X/Y coordinate list. Progression destinations are
          represented through the Radar and colored destination markers.
        </p>
        <p>
          For route planning, use the color first: <strong>green = Forest</strong>,
          <strong> yellow = Desert</strong>, <strong> red = Rocks</strong>, and
          <strong> pink = Volcano</strong>. The compass directions on this page
          are approximate sailing cues, not exact numeric coordinates.
        </p>
        <p>
          If you are trying to buy the device, use it, upgrade it, or fix a missing
          island marker, open the <a href="/radar">How to Fish Radar Guide</a>.
        </p>
      </>
    ),
  },
  {
    id: 'faq',
    title: 'Map FAQ',
    label: 'Quick answers',
    content: (
      <>
        <p>
          <strong>How many islands are in How to Fish?</strong><br />
          There are five main progression locations in the route. More precisely,
          Lighthouse is the starting location and Forest, Desert, Rocks, and
          Volcano are the four unlockable islands.
        </p>
        <p>
          <strong>What is the island order?</strong><br />
          Lighthouse → Forest → Desert → Rocks → Volcano.
        </p>
        <p>
          <strong>Does How to Fish have numeric map coordinates?</strong><br />
          The main route is navigated with Radar contacts and colored destination
          markers rather than a standard player-readable X/Y coordinate table.
        </p>
        <p>
          <strong>Why did the next island not appear?</strong><br />
          Finishing the boss fight may not be the last step. Make sure you picked
          up the required quest result, returned it to the correct NPC, and then
          check the Radar again. See the <a href="/radar#not-working">Radar troubleshooting guide</a> for a faster checklist.
        </p>
      </>
    ),
  },
];

export default function MapPage() {
  return (
    <GuidePage
      eyebrow="Island map"
      title="How to Fish Map: All Islands, Locations & Radar"
      description="A progression-first map guide for all five locations, their Radar markers, unlock requirements, and the game's coordinate system."
      summary={
        <>
          There are five main progression locations:
          <strong> Lighthouse → Forest → Desert → Rocks → Volcano</strong>.
          Lighthouse is the start; the other four are unlockable islands.
        </>
      }
      facts={[
        { label: 'Locations', value: '5' },
        { label: 'Unlockable islands', value: '4' },
        { label: 'Navigation', value: 'Radar markers' },
      ]}
      sections={locations}
      related={[
        { href: '/radar', label: 'Navigation tool', title: 'Radar Guide & Fixes' },
        { href: '/walkthrough', label: 'Progression', title: 'Complete Walkthrough' },
        { href: '/fish', label: 'Database', title: '49 Creatures & Lures' },
        { href: '/speedrun', label: 'Fast route', title: 'Bean Speedrun Guide' },
      ]}
    />
  );
}
