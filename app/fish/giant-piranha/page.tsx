import type { Metadata } from 'next';
import { CreatureDetail, type CreatureDetailData } from '../../components/creature-detail';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

export const metadata: Metadata = {
  title: 'Giant Piranha | How to Fish Wiki',
  description: 'How to summon Giant Piranha in the Forest, get Leech Bait, and complete the Forest to Desert progression.',
  openGraph: {
    title: 'Giant Piranha | How to Fish Wiki',
    description: 'Verified bait, location, and Forest progression steps for Giant Piranha.',
    images: [],
  },
  twitter: {
    title: 'Giant Piranha | How to Fish Wiki',
    description: 'Verified bait, location, and Forest progression steps for Giant Piranha.',
    images: [],
  },
};

const giantPiranha: CreatureDetailData = {
  name: 'Giant Piranha',
  label: 'Boss',
  description: 'A required Forest boss encounter in the main story route toward Desert.',
  facts: [
    { label: 'Location', value: 'Forest' },
    { label: 'Required bait / trigger', value: 'Leech Bait / Modified Leech' },
    { label: 'Type', value: 'Boss / Miniboss' },
  ],
  quickAnswer: <>Find the woman by the Forest lake, collect exactly <strong>3 Leeches</strong> from the ground, and hand them to her for the special Leech bait. Use that bait to summon Giant Piranha, defeat it, then return the <strong>Giant Piranha Skeleton</strong> to continue toward Desert.</>,
  steps: [
    { title: 'Find the quest NPC', detail: 'Locate the woman by the lake in Forest.' },
    { title: 'Collect 3 Leeches', detail: <>Pick up exactly <strong>3 Leeches</strong> from the ground.</> },
    { title: 'Hand in the Leeches', detail: <>Give all three to the woman to receive the special bait. Sources call it <strong>Leech Bait</strong>; many guides use the name <strong>Modified Leech</strong>.</> },
    { title: 'Use the special bait', detail: 'Equip and use the Leech Bait / Modified Leech to summon Giant Piranha.' },
    { title: 'Defeat Giant Piranha', detail: 'Complete the boss encounter after it is summoned.' },
    { title: 'Collect the Skeleton', detail: <>Preserve and collect the <strong>Giant Piranha Skeleton</strong> required by the quest.</> },
    { title: 'Return the quest item', detail: 'Take the Giant Piranha Skeleton back to the Forest quest NPC to continue progression toward Desert.' },
  ],
  progressionTitle: 'Giant Piranha unlocks the route toward Desert',
  progressionCopy: <>Giant Piranha is part of the required <strong>Forest → Desert</strong> story chain. Sunfish and The Old Pike are optional Forest encounters and do not replace this progression step.</>,
};

export default function GiantPiranhaPage() {
  return <div className="site-frame theme-fish"><Header /><CreatureDetail creature={giantPiranha} /><Footer /></div>;
}
