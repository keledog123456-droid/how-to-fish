import type { Metadata } from 'next';
import { GuidePage } from '../components/guide-page';

export const metadata: Metadata = {
  title: 'How to Fish Game Guide | Complete Walkthrough',
  description: 'Follow the complete story route from Lighthouse through Forest, Desert, Rocks, Volcano, and the ending.',
  alternates: { canonical: '/walkthrough' },
};

const sections = [
  { id: 'lighthouse', title: 'Lighthouse', label: 'Start here', steps: [
    'Build early money and equipment as needed, then obtain Beer and its Empty Beer Can.',
    'Use the Empty Beer Can to summon Spider Crab and defeat it.',
    'Complete the opening progression to gain boat access or keys and the Radar, then follow the Forest contact.',
  ] },
  { id: 'forest', title: 'Forest', label: 'Unlock Desert', steps: [
    'Find the woman by the lake, collect exactly 3 Leeches from the ground, and give them to her.',
    'Use the Leech Bait, often called Modified Leech in guides, to summon and defeat Giant Piranha.',
    'Return the Giant Piranha Skeleton to the quest NPC, then follow the Desert destination.',
  ] },
  { id: 'desert', title: 'Desert', label: 'Unlock Rocks', steps: [
    'Speak with the Tourist and catch a Desert creature marked Endangered or Endangered Species. Seahorse and Needlefish are valid examples.',
    'Give the endangered catch to the Tourist, receive Carrot, and use it to summon Pufferfish.',
    'Defeat Pufferfish, collect its Fin, return it to the Tourist, and follow the Rocks destination.',
  ] },
  { id: 'rocks', title: 'Rocks', label: 'Unlock Volcano', steps: [
    'Use Professional Boss Lure to summon and defeat Tuna, keeping its body intact.',
    'Place the Tuna body on the ground or grass to summon Albatross, then defeat it.',
    'Give the Albatross Head to the relevant Rocks quest NPC and follow the Volcano Radar contact.',
  ] },
  { id: 'volcano', title: 'Volcano & Ending', label: 'Finish story', steps: [
    'Give the Scientist in the yellow hazmat suit five fish and receive the Fish Bucket.',
    'Use the Fish Bucket to summon Bowhead Whale. Preserve its entire body after the fight.',
    'Carry the body up the wooden path and use it in the crater to summon Mutated Bowhead Whale.',
    'Defeat it, collect the Whale Fin, and return the Fin to the Scientist.',
    'Take the RHIB or military boat keys, board the boat, and depart for the mainland to trigger the ending and credits.',
  ] },
  { id: 'stuck', title: 'If Progress Stops', label: 'Checklist', content: <>
    <p>Confirm that you defeated the required story boss, kept its quest item or body, and handed it to the correct NPC. Check whether the encounter needs a regular lure, Boss Lure, or special quest bait, then follow the newest Radar contact.</p>
    <p>Your save remains playable after the credits, so unfinished collections and achievements can be completed later.</p>
  </> },
];

export default function WalkthroughPage() {
  return <GuidePage
    eyebrow="Complete walkthrough"
    title="How to Fish Complete Walkthrough"
    description="The mandatory story path, from the opening Lighthouse encounter to the mainland departure. Equipment suggestions are optional, not progression requirements."
    summary={<>Follow <strong>Lighthouse → Forest → Desert → Rocks → Volcano → Ending</strong>. Preserve boss bodies and quest drops when the next step requires them.</>}
    facts={[{ label: 'Main locations', value: '5' }, { label: 'Starting point', value: 'Lighthouse' }, { label: 'Final step', value: 'RHIB departure' }]}
    sections={sections}
    related={[{ href: '/map', label: 'Navigation', title: 'All Islands Map' }, { href: '/fish', label: 'Database', title: '49 Creatures & Lures' }, { href: '/speedrun', label: 'Achievement', title: 'Bean Speedrun Route' }]}
  />;
}
