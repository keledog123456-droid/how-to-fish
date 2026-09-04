import type { Metadata } from 'next';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Radar Guide | Get, Use, Upgrade & Fix',
  description:
    'How to Fish Radar guide: where to get the Radar, how to use it, Boat Radar upgrade, island markers, X marker changes, and fixes when the next island does not appear.',
  alternates: { canonical: '/radar' },
};

const sections = [
  {
    id: 'quick-answer',
    title: 'How to Fish Radar: Quick Answer',
    label: 'Get it, use it, keep moving',
    content: (
      <>
        <p>
          The <strong>Radar</strong> is an early navigation tool in How to Fish. Multiple
          current guides place the first handheld Radar at the <strong>Lighthouse
          Keeper</strong> for <strong>$10</strong>. Equip it as an active item to read the
          map and follow discovered island destinations.
        </p>
        <p>
          Later, on <strong>Rocks</strong>, you can buy the <strong>Boat Radar for
          $200</strong>. It mounts the display on the boat dashboard so you can navigate
          without keeping the handheld Radar in your hands.
        </p>
      </>
    ),
  },
  {
    id: 'get-radar',
    title: 'How to Get the Radar',
    label: 'Radar location · $10',
    content: (
      <>
        <p>
          For your first Radar, current walkthroughs consistently point to the
          <strong> Lighthouse</strong>: look near the Lighthouse Keeper and buy the
          handheld Radar for <strong>$10</strong>. It is a cheap early purchase and is
          worth picking up before you begin regular island travel.
        </p>
        <p>
          One current guide, Game8, also reports Radar availability through island item
          shops. If you skipped the Lighthouse purchase or need another Radar later,
          check the current shop stock in your build or return to the Lighthouse rather
          than assuming the item is permanently lost.
        </p>
      </>
    ),
  },
  {
    id: 'use-radar',
    title: 'How to Use the Radar',
    label: 'Equip · read · zoom',
    steps: [
      'Open your inventory or item bar and set the Radar as the active item.',
      'Hold or equip the Radar so its screen is visible.',
      'Use the map display to orient yourself toward island destinations you have discovered or unlocked.',
      'Zoom the Radar view when needed to judge whether a destination is relatively near or far.',
      'If the next island is missing, check progression first; the Radar cannot replace a story unlock that has not been registered.',
    ],
  },
  {
    id: 'fish-finder',
    title: 'Is the Radar a Fish Finder?',
    label: 'Search intent · current guides disagree',
    content: (
      <>
        <p>
          Players often search for a <strong>How to Fish fish finder</strong>, but current
          guides do not describe the Radar in exactly the same way. Some guides say the
          handheld Radar can help spot fish as well as navigate, while others treat its
          main role as island and route navigation.
        </p>
        <p>
          The practical rule is simple: use the Radar first as a <strong>navigation
          tool</strong>. If you are looking for one exact species, lure, or creature
          spawn, use the <a href="/fish">Fish &amp; Lures database</a> instead of relying
          on the Radar alone.
        </p>
      </>
    ),
  },
  {
    id: 'boat-radar',
    title: 'Boat Radar Upgrade',
    label: 'Rocks · $200',
    content: (
      <>
        <p>
          The <strong>Boat Radar</strong> is a later convenience upgrade sold on
          <strong> Rocks</strong>, the fourth main progression island. Current guides
          place it in the small red shack below the Lucky Bait Company area for
          <strong> $200</strong>.
        </p>
        <div className="checkpoint-list" aria-label="Handheld Radar and Boat Radar comparison">
          <span>
            <strong>Handheld Radar</strong>
            Lighthouse · $10 · must be equipped in your hands
          </span>
          <span>
            <strong>Boat Radar</strong>
            Rocks · $200 · mounted on the dashboard
          </span>
        </div>
        <p>
          The main benefit is not a new island unlock. The Boat Radar moves the map onto
          the dashboard, freeing your hands for a weapon or fishing rod while you travel.
        </p>
      </>
    ),
  },
  {
    id: 'not-working',
    title: 'Radar Not Working? Why the Next Island Is Missing',
    label: 'Troubleshooting',
    content: (
      <>
        <p>
          If the Radar looks broken, the problem is often <strong>progression rather than
          the device itself</strong>. Defeating a boss may not be the final step: make sure
          the required quest item or trophy was collected and handed to the correct NPC,
          then check the Radar again.
        </p>
        <div className="checkpoint-list" aria-label="How to Fish Radar troubleshooting">
          <span>
            <strong>Forest not showing</strong>
            Finish the Lighthouse opening progression and make sure boat access and the Radar are ready.
          </span>
          <span>
            <strong>Desert not showing</strong>
            Complete the Giant Piranha progression and the required hand-in.
          </span>
          <span>
            <strong>Rocks not showing</strong>
            Complete the Desert / Pufferfish progression and return the required result.
          </span>
          <span>
            <strong>Volcano not showing</strong>
            Complete the Rocks / Albatross progression and finish the required hand-in.
          </span>
        </div>
        <p>
          For the full story requirements, use the <a href="/walkthrough">complete
          walkthrough</a>. For the route and marker colors, use the
          <a href="/map"> island map</a>.
        </p>
      </>
    ),
  },
  {
    id: 'markers',
    title: 'Radar Markers, Colors and the Old X Marker',
    label: 'Map signals',
    content: (
      <>
        <p>
          The main route uses colored Radar destination markers. Our current map guide
          tracks the progression as <strong>Lighthouse → Forest → Desert → Rocks →
          Volcano</strong>, with Forest, Desert, Rocks, and Volcano represented by the
          route markers used during progression.
        </p>
        <p>
          If an older screenshot shows an <strong>X marker</strong>, do not treat it as a
          treasure location or a secret island. Official Patch 1.0.10 removed the X from
          the Radar and explained that it represented the position where the player last
          died; the developers removed it because it was confusing.
        </p>
      </>
    ),
  },
  {
    id: 'version',
    title: 'Radar Patch Notes and Old Videos',
    label: 'Checked Sep 4, 2026 · Patch 1.0.11',
    content: (
      <>
        <p>
          <strong>Patch 1.0.5</strong> fixed a bug that allowed players to travel to
          islands before unlocking them. That means launch-week island-skip videos may
          no longer describe the current progression route.
        </p>
        <p>
          <strong>Patch 1.0.10</strong> removed the old last-death X marker from the
          Radar. <strong>Patch 1.0.11</strong> is the latest official patch checked for
          this page; its published notes do not list a Radar-specific progression change.
        </p>
      </>
    ),
  },
  {
    id: 'faq',
    title: 'Radar FAQ',
    label: 'Quick answers',
    content: (
      <>
        <p>
          <strong>Where is the Radar in How to Fish?</strong><br />
          The first handheld Radar is reported at the Lighthouse Keeper area for $10.
        </p>
        <p>
          <strong>How much does the Radar cost?</strong><br />
          The handheld Radar costs $10. The later Boat Radar upgrade is reported at $200.
        </p>
        <p>
          <strong>Where is the Boat Radar?</strong><br />
          On Rocks, in the small red shack below the Lucky Bait Company area.
        </p>
        <p>
          <strong>Why is my next island not showing on the Radar?</strong><br />
          Check the previous island's full progression chain, including the required
          trophy or quest-item hand-in. A boss kill by itself may not register the next
          destination.
        </p>
        <p>
          <strong>What happened to the X marker?</strong><br />
          Patch 1.0.10 removed it. The developers said it showed your last death position
          and was causing confusion.
        </p>
        <p>
          <strong>Do I need a stronger engine to unlock a new Radar marker?</strong><br />
          No known current progression rule ties island unlocks to engine speed. Story
          progression and hand-ins are the important checks.
        </p>
      </>
    ),
  },
];

export default function RadarPage() {
  return (
    <GuidePage
      eyebrow="Radar guide"
      title="How to Fish Radar Guide: Get, Use, Upgrade & Fix Island Markers"
      description="Find the Radar, learn how to use it, upgrade to the Boat Radar, and fix common cases where the next island or marker does not appear."
      summary={
        <>
          Start with the <strong>$10 handheld Radar at Lighthouse</strong>, use it for
          island navigation, then upgrade to the <strong>$200 Boat Radar on Rocks</strong>.
          If a destination is missing, check the previous story hand-in before assuming
          the Radar is broken.
        </>
      }
      facts={[
        { label: 'Handheld Radar', value: '$10' },
        { label: 'Boat Radar', value: '$200' },
        { label: 'Current patch checked', value: '1.0.11' },
      ]}
      sections={sections}
      related={[
        { href: '/map', label: 'Navigation', title: 'All Islands Map' },
        { href: '/walkthrough', label: 'Progression', title: 'Complete Walkthrough' },
        { href: '/fish', label: 'Database', title: '49 Creatures & Lures' },
        { href: '/speedrun', label: 'Fast route', title: 'Bean Speedrun Guide' },
      ]}
    />
  );
}
