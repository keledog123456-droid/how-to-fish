import type { Metadata } from 'next';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata: Metadata = {
  title: 'How to Fish Boss Guide | All Bosses, Bait & Progression',
  description:
    'Find every How to Fish boss and mini-boss, including story order, bait and spawn triggers, island progression, and required setup encounters.',
  alternates: { canonical: '/bosses' },
};

const storyBosses = [
  {
    boss: 'Spider Crab',
    island: 'Lighthouse',
    trigger: 'Empty Beer Can',
    role: 'Story Boss',
    result: 'Starts the island progression chain and leads to the boat unlock.',
  },
  {
    boss: 'Giant Piranha',
    island: 'Forest',
    trigger: 'Modified Leech',
    role: 'Story Boss',
    result: 'Progression encounter for the next island.',
    href: '/fish/giant-piranha',
  },
  {
    boss: 'Pufferfish',
    island: 'Desert',
    trigger: 'Carrot',
    role: 'Story Boss',
    result: 'Progression encounter for the Rocks route.',
  },
  {
    boss: 'Albatross',
    island: 'Rocks',
    trigger: 'Dead Tuna',
    role: 'Story Boss',
    result: 'Progression encounter for the Volcano route.',
  },
  {
    boss: 'Mutated Bowhead Whale',
    island: 'Volcano',
    trigger: 'Bowhead Whale at the crater',
    role: 'Final Story Boss',
    result: 'Final progression encounter and ending route.',
  },
];

const otherBosses = [
  {
    boss: 'Sunfish',
    island: 'Forest',
    trigger: 'Beginner Boss Lure',
    role: 'Mini-Boss',
    note: 'Optional boss-class catch.',
  },
  {
    boss: 'The Old Pike',
    island: 'Forest',
    trigger: 'Beginner Boss Lure',
    role: 'Mini-Boss',
    note: 'Optional boss-class catch.',
  },
  {
    boss: 'Blue Shark',
    island: 'Desert',
    trigger: 'Standard Boss Lure',
    role: 'Mini-Boss',
    note: 'Useful side encounter; does not replace the story boss.',
  },
  {
    boss: 'Tuna',
    island: 'Rocks',
    trigger: 'Professional Boss Lure',
    role: 'Required Setup',
    note: 'Keep the body: it is used to trigger the Albatross encounter.',
  },
  {
    boss: 'Goblin Shark',
    island: 'Volcano',
    trigger: 'Scientific Boss Lure',
    role: 'Mini-Boss',
    note: 'Optional boss-class catch.',
  },
  {
    boss: 'Bowhead Whale',
    island: 'Volcano',
    trigger: 'Fish Bucket',
    role: 'Required Setup',
    note: 'Required setup for the Mutated Bowhead Whale encounter.',
  },
];

export default function BossesPage() {
  return (
    <div className="site-frame theme-fish">
      <Header />

      <main className="database-page">
        <header className="database-header inner-hero">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Bosses</span>
          </nav>

          <p className="field-label">Boss & progression guide</p>
          <h1>How to Fish Boss Guide</h1>
          <p>
            All story bosses, mini-bosses, bait and spawn triggers, plus the
            encounters you must keep for island progression.
          </p>

          <div className="database-meta" aria-label="Boss guide totals">
            <span>5 Story Bosses</span>
            <span>6 Mini-Boss / Setup Encounters</span>
            <span>11 Total Encounters</span>
          </div>
        </header>

        <aside className="quick-answer" aria-labelledby="quick-answer-title">
          <strong id="quick-answer-title">Quick answer</strong>
          <p>
            Story progression follows five major fights: Spider Crab, Giant
            Piranha, Pufferfish, Albatross, and Mutated Bowhead Whale. Bosses
            do not appear just because your gear is strong enough — each
            encounter needs the correct lure, quest bait, or setup trigger.
            Tuna and the regular Bowhead Whale are especially important because
            they become bait or setup for later story bosses.
          </p>
        </aside>

        <section>
          <h2>Story Boss Order</h2>
          <p>
            If you only want to finish the game, follow this route. For the
            complete island-by-island quest sequence, use the{' '}
            <a href="/walkthrough">full walkthrough</a>.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Boss</th>
                  <th>Island</th>
                  <th>Bait / Trigger</th>
                  <th>Role</th>
                  <th>What it does</th>
                </tr>
              </thead>
              <tbody>
                {storyBosses.map((item) => (
                  <tr key={item.boss}>
                    <td>
                      {item.href ? (
                        <a href={item.href}>{item.boss}</a>
                      ) : (
                        item.boss
                      )}
                    </td>
                    <td>{item.island}</td>
                    <td>{item.trigger}</td>
                    <td>{item.role}</td>
                    <td>{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Mini-Bosses & Required Setup Encounters</h2>
          <p>
            These fights sit beside the five main story bosses. Some are
            optional, but two are easy to misunderstand: Tuna is required to
            trigger Albatross, and Bowhead Whale is required to set up the
            final Mutated Bowhead Whale encounter.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Boss</th>
                  <th>Island</th>
                  <th>Bait / Trigger</th>
                  <th>Role</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {otherBosses.map((item) => (
                  <tr key={item.boss}>
                    <td>{item.boss}</td>
                    <td>{item.island}</td>
                    <td>{item.trigger}</td>
                    <td>{item.role}</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Why a Boss Is Not Spawning</h2>
          <p>
            A missing boss is usually a trigger problem, not a weapon problem.
            Check the current island quest, make sure the correct bait or lure
            is equipped, and confirm that the previous progression hand-in was
            completed. Buying a stronger weapon does not replace a quest bait.
          </p>
        </section>

        <section>
          <h2>Do Not Sell Progression Items Too Early</h2>
          <p>
            Story encounters can leave a special quest drop or body that is
            needed for the next step. Before selling or cooking a boss drop,
            finish the related NPC hand-in. This matters most around the Tuna →
            Albatross and Bowhead Whale → Mutated Bowhead Whale setup chains.
          </p>
        </section>

        <section>
          <h2>Boss Route by Island</h2>

          <h3>Lighthouse — Spider Crab</h3>
          <p>
            The first story boss uses the Empty Beer Can trigger. Treat this
            encounter as your introduction to the game&apos;s boss progression:
            correct quest item first, combat second, hand-in afterward.
          </p>

          <h3>Forest — Giant Piranha</h3>
          <p>
            Complete the local leech objective to obtain the Modified Leech,
            then use it for the Giant Piranha encounter. See the{' '}
            <a href="/fish/giant-piranha">Giant Piranha guide</a> for the
            dedicated walkthrough.
          </p>

          <h3>Desert — Pufferfish</h3>
          <p>
            The Pufferfish is the Desert story gate and uses a Carrot quest
            trigger rather than a normal shop lure.
          </p>

          <h3>Rocks — Tuna and Albatross</h3>
          <p>
            This stage is a two-step chain. Catch the Tuna with the
            Professional Boss Lure, keep the body, and use that Tuna to trigger
            the Albatross. Do not treat the Tuna as disposable loot until the
            story step is complete.
          </p>

          <h3>Volcano — Bowhead Whale and Mutated Bowhead Whale</h3>
          <p>
            The Volcano route also uses a setup encounter. The regular Bowhead
            Whale comes first; its body is then used to trigger the Mutated
            Bowhead Whale, the final story boss.
          </p>
        </section>

        <section>
          <h2>Boss Guide FAQ</h2>

          <h3>How many bosses are in How to Fish?</h3>
          <p>
            This guide tracks 11 boss-class encounters: five main story bosses
            plus six mini-boss or setup encounters. Not all 11 are independent
            story gates.
          </p>

          <h3>Which bosses are required to finish the story?</h3>
          <p>
            The main story fights are Spider Crab, Giant Piranha, Pufferfish,
            Albatross, and Mutated Bowhead Whale. Tuna and the regular Bowhead
            Whale are also required setup encounters because they trigger later
            story bosses.
          </p>

          <h3>Can I find boss bait in the normal lure shop?</h3>
          <p>
            Some mini-bosses use purchasable Boss Lures, but several story
            bosses require unique quest items or another creature as bait.
          </p>

          <h3>Where can I see every regular fish and lure?</h3>
          <p>
            Use the <a href="/fish">all fish database</a> for the full creature
            list, lures, boss baits, and progression requirements.
          </p>

          <h3>Where do I go after each boss?</h3>
          <p>
            Use the <a href="/map">map guide</a> for island locations and the{' '}
            <a href="/walkthrough">walkthrough</a> for the exact quest order.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
