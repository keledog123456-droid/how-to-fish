'use client';

import { useMemo, useState } from 'react';

type RegularCreature = { name: string; rod: string; lure: string; tier: string };
type BossCreature = { name: string; location: string; bait: string };
type Filter = 'All' | 'Regular' | 'Bosses' | 'Drip';

const tiers = ['Early', 'Beginner', 'Standard', 'Professional', 'Scientific'];

const regularCreatures: RegularCreature[] = [
  { name: 'Brown Crab', rod: 'Crab Fishing Rod', lure: 'Free Lure', tier: 'Early' },
  { name: 'Shrimp', rod: 'Crab Fishing Rod', lure: 'Free Lure', tier: 'Early' },
  { name: 'Rock Crab', rod: 'Crab Fishing Rod', lure: 'Hot Dog', tier: 'Early' },
  { name: 'Lobster', rod: 'Crab Fishing Rod', lure: 'Hot Dog', tier: 'Early' },
  { name: 'Mackerel', rod: 'Fishing Rod', lure: 'Free Lure', tier: 'Early' },
  { name: 'Gar', rod: 'Fishing Rod', lure: 'Free Lure', tier: 'Early' },
  { name: 'Pike', rod: 'Fishing Rod', lure: 'Free Lure or Beginner Lure', tier: 'Early' },
  { name: 'Goldfish', rod: 'Fishing Rod', lure: 'Free Lure or Beginner Lure', tier: 'Early' },
  { name: 'Piranha', rod: 'Fishing Rod', lure: 'Hot Dog or Beginner Lure', tier: 'Early' },
  { name: 'Cod', rod: 'Fishing Rod', lure: 'Beginner Lure', tier: 'Beginner' },
  { name: 'Goby', rod: 'Fishing Rod', lure: 'Beginner Lure', tier: 'Beginner' },
  { name: 'Salmon', rod: 'Fishing Rod', lure: 'Beginner Lure', tier: 'Beginner' },
  { name: 'Perch', rod: 'Fishing Rod', lure: 'Beginner Lure', tier: 'Beginner' },
  { name: 'Triggerfish', rod: 'Fishing Rod', lure: 'Beginner Lure', tier: 'Beginner' },
  { name: 'Catfish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Clownfish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Sea Urchin', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Yellow Boxfish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Needlefish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Angelfish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Bluegill', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Seahorse', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Bowlfish', rod: 'Fishing Rod', lure: 'Standard Lure', tier: 'Standard' },
  { name: 'Bass', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Eel', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Red Snapper', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Sengarat', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Halibut', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Tigerfish', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Flying Fish', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Voxelfish', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Parrotfish', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Dripper', rod: 'Fishing Rod', lure: 'Professional Lure', tier: 'Professional' },
  { name: 'Blobfish', rod: 'Fishing Rod', lure: 'Scientific Lure', tier: 'Scientific' },
  { name: 'Oarfish', rod: 'Fishing Rod', lure: 'Scientific Lure', tier: 'Scientific' },
  { name: 'Anglerfish', rod: 'Fishing Rod', lure: 'Scientific Lure', tier: 'Scientific' },
  { name: 'Stonefish', rod: 'Fishing Rod', lure: 'Scientific Lure', tier: 'Scientific' },
  { name: 'Superdwarf Fish', rod: 'Fishing Rod', lure: 'Scientific Lure', tier: 'Scientific' },
];

const bosses: BossCreature[] = [
  { name: 'Spider Crab', location: 'Lighthouse', bait: 'Empty Beer Can' },
  { name: 'Sunfish', location: 'Forest', bait: 'Beginner Boss Lure' },
  { name: 'The Old Pike', location: 'Forest', bait: 'Beginner Boss Lure' },
  { name: 'Giant Piranha', location: 'Forest', bait: 'Leech Bait / Modified Leech' },
  { name: 'Blue Shark', location: 'Desert', bait: 'Standard Boss Lure' },
  { name: 'Pufferfish', location: 'Desert', bait: 'Carrot' },
  { name: 'Tuna', location: 'Rocks', bait: 'Professional Boss Lure' },
  { name: 'Albatross', location: 'Rocks', bait: 'Tuna' },
  { name: 'Goblin Shark', location: 'Volcano', bait: 'Scientific Boss Lure' },
  { name: 'Bowhead Whale', location: 'Volcano', bait: 'Fish Bucket' },
  { name: 'Mutated Bowhead Whale', location: 'Volcano', bait: 'Bowhead Whale' },
];

export function CreatureBrowser() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const isDrip = filter === 'Drip';

  const filteredRegular = useMemo(() => regularCreatures.filter((creature) =>
    [creature.name, creature.rod, creature.lure, creature.tier].some((value) => value.toLowerCase().includes(normalizedQuery))), [normalizedQuery]);
  const filteredBosses = useMemo(() => bosses.filter((boss) =>
    [boss.name, boss.location, boss.bait].some((value) => value.toLowerCase().includes(normalizedQuery))), [normalizedQuery]);

  const showRegular = filter === 'All' || filter === 'Regular' || isDrip;
  const showBosses = filter === 'All' || filter === 'Bosses' || isDrip;
  const resultCount = (showRegular ? filteredRegular.length : 0) + (showBosses ? filteredBosses.length : 0);

  return (
    <section className="creature-browser" aria-labelledby="database-title">
      <div className="creature-tools">
        <div className="creature-tabs" role="tablist" aria-label="Creature type">
          {(['All', 'Regular', 'Bosses', 'Drip'] as Filter[]).map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={filter === tab} onClick={() => setFilter(tab)}>{tab}</button>
          ))}
        </div>
        <label className="creature-search"><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search creatures..." aria-label="Search creatures" /></label>
      </div>

      <div className="database-title-row"><h2 id="database-title">Creature Database</h2><span>{resultCount} results{isDrip ? ' · Drip variants' : ''}</span></div>

      {isDrip && <aside className="drip-note"><strong>Drip variants</strong><p>Every creature can have a rare Drip version. Drip entries use the same rod, lure, bait, or special trigger as the normal creature and do not increase the 49-creature base count.</p></aside>}

      {showRegular && tiers.map((tier) => {
        const creatures = filteredRegular.filter((creature) => creature.tier === tier);
        if (!creatures.length) return null;
        return <section className="creature-group" key={tier} aria-labelledby={`tier-${tier}`}>
          <div className="group-heading"><h3 id={`tier-${tier}`}>{tier}</h3><span>{creatures.length} regular</span></div>
          <div className="creature-table regular-table">
            <div className="creature-table-head"><span>Creature</span><span>Rod</span><span>Lure / Bait</span><span>Type</span></div>
            {creatures.map((creature) => <div className="creature-row" key={creature.name}><strong>{creature.name}{isDrip ? ' — Drip' : ''}</strong><span>{creature.rod}</span><span>{creature.lure}</span><span>{isDrip ? 'Drip' : 'Regular'}</span></div>)}
          </div>
        </section>;
      })}

      {showBosses && filteredBosses.length > 0 && <section className="creature-group boss-group" aria-labelledby="boss-title">
        <div className="group-heading"><h3 id="boss-title">Bosses &amp; Minibosses</h3><span>{filteredBosses.length} bosses</span></div>
        <div className="creature-table boss-table">
          <div className="creature-table-head"><span>Boss</span><span>Progression location</span><span>Required bait / trigger</span></div>
          {filteredBosses.map((boss) => <div className="creature-row" key={boss.name}><strong>{boss.name === 'Giant Piranha' && !isDrip ? <a className="creature-detail-link" href="/fish/giant-piranha">{boss.name}<span aria-hidden="true">↗</span></a> : <>{boss.name}{isDrip ? ' — Drip' : ''}</>}</strong><span>{boss.location}</span><span>{boss.bait}</span></div>)}
        </div>
        {!isDrip && <p className="boss-footnote">Sunfish and The Old Pike share the Beginner Boss Lure, so 11 bosses do not require 11 unique boss baits.</p>}
      </section>}

      {resultCount === 0 && <div className="empty-results"><strong>No matching creatures</strong><p>Try a creature name, rod, lure, bait, or progression location.</p></div>}

      {!isDrip && <aside className="drip-note drip-note-bottom"><strong>About Drip entries</strong><p>Every creature also has a rare Drip version, using the same rod, lure, bait, or special trigger as its normal counterpart. The encyclopedia tracks 49 normal and 49 Drip entries separately.</p></aside>}
    </section>
  );
}
