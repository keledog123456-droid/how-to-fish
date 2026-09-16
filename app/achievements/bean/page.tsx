import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { BeanTimer } from './bean-timer';
import styles from './bean.module.css';

export const metadata: Metadata = {
  title: 'Bean Achievement Guide & Practice Timer | How to Fish',
  description: 'Prepare a Bean attempt with a browser timer, five-stage split tracker and independently checked achievement notes. Unverified route details are clearly labelled.',
  alternates: { canonical: '/achievements/bean' },
};

const achievements = 'https://steamcommunity.com/stats/4001890/achievements';
const announcements = 'https://steamcommunity.com/app/4001890/announcements/';
const report = 'https://steamcommunity.com/app/4001890/discussions/0/582806523877531344/';
const contents = [
  ['timer', 'Run timer'], ['splits', 'Split tracker'], ['route', 'Route notes'],
  ['safety', 'Patch & safety notes'], ['shopping', 'Shopping plan'], ['roles', 'Solo & crew'],
  ['mistakes', 'Avoidable mistakes'], ['sources', 'Sources & verification'],
];
const route = [
  ['Lighthouse', 'The reported opening builds towards the first boss, then prepares navigation for departure.'],
  ['Forest', 'The player continues through the forest encounter and concentrates on equipment before moving on.'],
  ['Coastal island', 'The report describes the beach stage as a progression stop rather than a collection detour.'],
  ['Settlement', 'The historical account moves through the town encounters before preparing for the last island.'],
  ['Volcano', 'The account ends with the whale encounters and a return to the boat. It does not establish the exact achievement trigger.'],
];

export default function BeanPage() {
  return <div className={`site-frame ${styles.page}`}>
    <Header />
    <main className="detail-page" id="bean-content">
      <header className={`inner-hero ${styles.hero}`}>
        <nav className={`breadcrumb ${styles.breadcrumb}`} aria-label="Breadcrumb"><Link prefetch={false} href="/">Home</Link><span>/</span><Link prefetch={false} href="/speedrun">Speedrun</Link><span>/</span><span>Bean</span></nav>
        <p className="inner-hero-kicker">Achievement field guide</p>
        <h1>Bean Achievement:<br />Prepare Your One-Hour Run</h1>
        <p className={styles.intro}>Keep your attempt in view. Track elapsed time, record each stage and separate confirmed rules from route advice that still needs checking.</p>
        <div className={styles.byline}><span>Checked <time dateTime="2026-09-16">September 16, 2026</time></span><span>HOW TO FISH · Field guide</span><span>Official rule + community context</span></div>
      </header>

      <div className={`detail-layout ${styles.layout}`}>
        <article className={styles.article}>
          <div className={`detail-quick-answer ${styles.summary}`}>
            <p className="section-kicker">The requirement</p>
            <p><strong>Complete How to Fish within one hour to earn Bean.</strong> That condition is confirmed by <a href={achievements}>Steam&apos;s achievement listing</a>. Use the timer below for practice; current per-stage targets and precise checkpoint triggers remain unverified.</p>
          </div>
          <figure className={styles.achievement}>
            <Image src="/android-chrome-192x192.png" alt="HOW TO FISH field-guide symbol" width={80} height={80} />
            <figcaption><strong>Bean · completion challenge</strong><span>One run. A one-hour requirement. Your achievement result is determined by the game.</span><small>Illustrated with our site symbol.</small></figcaption>
          </figure>

          <BeanTimer />

          <section id="route" className={styles.section} aria-labelledby="route-heading">
            <h2 id="route-heading">Route notes for preparation</h2>
            <p className={styles.statusLabel}>Historical report · current route verification pending</p>
            <p>A <a href={report}>firsthand Steam account dated August 25</a> describes a successful solo attempt on 1.0.9. Its broad sequence is summarized below as historical context. It is not a validated route for the currently installed build.</p>
            <ol className={styles.routeList}>{route.map(([title, description], index) => <li key={title}><span className={styles.stageNumber} aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
            <p className={styles.note}><strong>Still to verify:</strong> exact hand-ins, the final timing trigger, difficulty eligibility and practical checkpoint times on the current build. No historical split times have been carried over into this tracker.</p>
          </section>

          <section id="safety" className={styles.section} aria-labelledby="safety-heading">
            <h2 id="safety-heading">Patch notes that matter</h2>
            <p>The newest entry returned by the <a href={announcements}>official announcement feed</a> during this check was <strong>1.0.12, dated September 4</strong>. This identifies the announcement reviewed, not the version installed on your machine.</p>
            <p>The feed also confirms that 1.0.11 introduced damage from your own explosives even with Friendly Fire switched off. The earlier 1.0.5 notes record a fix for travelling to locked islands.</p>
            <p className={styles.note}><strong>Prepare on your actual build.</strong> Leave room to retreat when using explosives, and do not base an attempt on an old island-skip video. These patch notes do not certify checkpoint times or the exact Bean finish trigger.</p>
          </section>

          <section id="shopping" className={styles.section} aria-labelledby="shopping-heading">
            <h2 id="shopping-heading">Plan each shopping stop</h2>
            <p>These are practice suggestions, not a prescribed build. Confirm item availability and costs in your own session.</p>
            <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Shopping suggestions table">
              <table className={styles.table}><thead><tr><th scope="col">Prepare</th><th scope="col">Purpose</th><th scope="col">Before you leave</th></tr></thead><tbody>
                <tr><th scope="row">A familiar loadout</th><td>Keep combat decisions manageable.</td><td>Rehearse with the equipment you intend to use.</td></tr>
                <tr><th scope="row">Progression items</th><td>Keep the next objective visible.</td><td>Read the active objective before selling anything.</td></tr>
                <tr><th scope="row">Recovery supplies</th><td>Make preparation part of the route.</td><td>Check your condition before beginning an encounter.</td></tr>
                <tr><th scope="row">Navigation plan</th><td>Reduce hesitation between encounters.</td><td>Know your next destination before departing.</td></tr>
                <tr><th scope="row">A spending checklist</th><td>Keep shopping decisions brief.</td><td>Separate necessary purchases from optional experiments.</td></tr>
              </tbody></table>
            </div>
          </section>

          <section id="roles" className={styles.section} aria-labelledby="roles-heading">
            <h2 id="roles-heading">Practice solo or with a crew</h2>
            <div className={styles.roles}>
              <div><h3>Solo preparation</h3><p>Rehearse one transition at a time. Use your recorded splits to find where you hesitate, then practise that part before another full attempt.</p></div>
              <div><h3>Crew preparation</h3><p>Agree who navigates, who checks the objective and who records the split. Use a short, consistent call when a stage is complete.</p></div>
            </div>
            <p className={styles.small}>These are organizational suggestions. No party-size advantage, shared-wallet rule or completion guarantee is assumed.</p>
          </section>

          <section id="mistakes" className={styles.section} aria-labelledby="mistakes-heading">
            <h2 id="mistakes-heading">Avoidable mistakes</h2>
            <ul className={styles.mistakes}>
              <li><strong>Mixing old advice with a new build.</strong> Compare the date and version of a guide before treating it as a route.</li>
              <li><strong>Rushing an unfamiliar transition.</strong> Decide the next objective during practice rather than improvising under pressure.</li>
              <li><strong>Confusing a practice pause with game time.</strong> This browser timer is independent of the game.</li>
              <li><strong>Using an unverified target as a fail condition.</strong> Your split is an observation, not an official verdict.</li>
              <li><strong>Stopping at an assumed finish trigger.</strong> Check the game&apos;s completion and achievement result; the precise trigger remains pending verification here.</li>
            </ul>
          </section>

          <section id="sources" className={styles.section} aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources &amp; verification</h2>
            <p>Independently checked September 16, 2026. Sources are distinguished by what they actually establish.</p>
            <ul className={styles.sources}>
              <li><a href={achievements}>Steam · official achievements ↗</a><span>Verified: Bean&apos;s one-hour completion requirement. Exact start, pause and finish timing are not specified.</span></li>
              <li><a href={announcements}>Dazed Games · official announcements ↗</a><span>Verified: newest announcement returned is 1.0.12; earlier explosive self-damage and locked-island fixes are documented.</span></li>
              <li><a href={report}>Steam · firsthand solo-run discussion ↗</a><span>Historical evidence: the detailed run names version 1.0.9. It does not validate current target times or precise checkpoint triggers.</span></li>
            </ul>
            <div className={styles.verification}><strong>Pending verification</strong><p>Current stage targets · exact checkpoint hand-ins · current difficulty eligibility · internal timer boundaries. These fields are deliberately left unfilled.</p></div>
          </section>
        </article>

        <aside className={styles.sidebar} aria-label="Page navigation">
          <div className={`detail-sidebar ${styles.sidePanel}`}><h2>On this page</h2><nav aria-label="On this page">{contents.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></div>
          <div className={`detail-sidebar ${styles.sidePanel}`}><h2>Field-guide routes</h2><nav aria-label="Related topics"><Link prefetch={false} href="/speedrun">Speedrun overview</Link><Link prefetch={false} href="/walkthrough">Story walkthrough</Link><Link prefetch={false} href="/map">Island navigation</Link><Link prefetch={false} href="/fish">Fish &amp; lures</Link><Link prefetch={false} href="/bosses">Boss encounters</Link></nav></div>
        </aside>
      </div>

      <section className={`related-links ${styles.related}`} aria-labelledby="bean-related">
        <div><p className="section-kicker">Continue preparing</p><h2 id="bean-related">Related field guides</h2></div>
        <Link prefetch={false} href="/walkthrough"><span>Progression</span><strong>Read the walkthrough</strong><p>Explore the story guide before rehearsing an attempt.</p></Link>
        <Link prefetch={false} href="/map"><span>Navigation</span><strong>Get your bearings</strong><p>Use the island overview to plan your next journey.</p></Link>
        <Link prefetch={false} href="/bosses"><span>Encounters</span><strong>Study the bosses</strong><p>Prepare for the encounters along your route.</p></Link>
      </section>
    </main>
    <Footer />
  </div>;
}
