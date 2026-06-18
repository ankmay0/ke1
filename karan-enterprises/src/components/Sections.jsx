import {
  ABOUT_CALLOUTS, SERVICES, SEQUENCE, PROCESS,
  GEO_CAPS, PROJECTS, STATS, TRUST, CLIENTS, TESTIMONIALS, COMPLIANCE,
} from '../data'
import { Reveal, SectionHead, GeoIcon, Icon, Marquee } from '../ui'

/* ------------------------------------------------------------------ ABOUT */
export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <div className="sec-eyebrow">
            <span className="idx">01</span><span className="kicker">About M/s Karan Enterprises</span>
          </div>
          {/* heading deliberately differs from the hero to avoid two near-identical taglines */}
          <h2 className="h-sec">Integrated infrastructure,<br />delivered end to end<em className="dot">.</em></h2>
          <p className="lead">
            Since 2013, M/s Karan Enterprises has executed railway formation, roadway and civil
            infrastructure for government bodies and PSUs — combining RDSO-grade engineering, a
            230-strong workforce and modern machinery to deliver safely and on schedule.
          </p>

          <ul className="about-list">
            {ABOUT_CALLOUTS.map((c) => (
              <li key={c.n}><span className="n">{c.n}</span><span>{c.text}</span></li>
            ))}
          </ul>

          <a className="btn btn--dark about-cta" href="#quote">Start a conversation {Icon.arrow}</a>
        </Reveal>

        <Reveal delay={0.15} className="about-media">
          <span className="accent" />
          <div className="frame"><img src="/assets/photo2.jpg" alt="Site engineer at a railway formation site" /></div>
          <div className="badge">
            <b>2013</b>
            <span>Delivering India's rail &amp; road infrastructure since</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- SERVICES */
export function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="wrap">
        <div className="sec-head">
          <SectionHead idx="02" kicker="Our Capabilities">
            Engineering solutions, built to last
          </SectionHead>
          <Reveal delay={0.1}>
            <a className="btn btn--dark" href="#quote">Request a capability brief {Icon.arrow}</a>
          </Reveal>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal as="article" className="svc" key={s.title} delay={i * 0.08}>
              <img src={s.img} alt={s.title} loading="lazy" />
              <span className="svc-no">{s.n}</span>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- RAILWAY FORMATION */
export function RailwayFormation() {
  return (
    <section className="section section--dark" id="railway">
      <div className="wrap">
        <Reveal className="rf-head">
          <div className="sec-eyebrow on-dark">
            <span className="idx">03</span><span className="kicker">Core Discipline · Railway Works</span>
          </div>
          <h2 className="rf-title">
            RDSO-Grade Railway Formation
            <em>From earthwork to track commissioning — executed end to end.</em>
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            End-to-end railway formation and rehabilitation works executed in accordance with RDSO
            specifications and the Indian Railway Construction Manual — ensuring safety, accuracy and
            long-term performance.
          </p>
          <div className="metric-strip">
            {['RDSO Standards', 'Indian Railway CM', '230+ Workforce', 'Modern Machinery'].map((t) => (
              <span className="m" key={t}><i />{t}</span>
            ))}
          </div>
        </Reveal>

        {/* numbered construction sequence */}
        <div className="seq">
          {SEQUENCE.map((s, i) => (
            <Reveal className="step" key={s.n} delay={i * 0.08}>
              <div className="pic">
                <span className="no">{s.n}</span>
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* six process cards */}
        <div className="proc">
          {PROCESS.map((p) => (
            <div className="card" key={p.n}>
              <span className="no">{p.n}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- GEOTECH */
export function Geotech() {
  return (
    <section className="section section--alt" id="geotech">
      <div className="wrap geo-grid">
        <Reveal className="geo-side">
          <div className="sec-eyebrow">
            <span className="idx">04</span><span className="kicker">Specialised Capability</span>
          </div>
          <h2 className="h-sec">Advanced Geotechnical Solutions<em className="dot">.</em></h2>
          <p className="lead">
            Leveraging globally recognised geotechnical technologies and high-performance materials to
            deliver durable, sustainable and engineered solutions for complex infrastructure projects.
          </p>
          <div className="partner">
            <span className="lbl">Powered by</span>
            <img src="/assets/maccaferri-logo.png" alt="Maccaferri Engineering Solutions" />
            <small>Authorised applicator of Maccaferri engineered systems — gabions, geocell, reinforced soil and erosion control.</small>
          </div>
        </Reveal>

        <div className="geo-caps">
          {GEO_CAPS.map((c, i) => (
            <Reveal as="article" className="geo-cap" key={c.title} delay={i * 0.06}>
              <span className="ic">{GeoIcon[c.icon]}</span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- PROJECTS */
export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <SectionHead idx="05" kicker="Major Projects · Contract Record">
            Delivered, certified, signed off
          </SectionHead>
          <Reveal delay={0.1}>
            <p className="lead" style={{ marginTop: 0 }}>
              A selection of railway, roadway, ash-handling and civil works executed for PSU and
              government clients across India.
            </p>
          </Reveal>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" className={`proj ${p.cls}`} key={p.title} delay={i * 0.05}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="pbody">
                <span className="cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <span className="scope"><i />{p.scope}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- STATS */
export function Stats() {
  return (
    <section className="section section--dark" id="stats">
      <div className="wrap">
        <SectionHead idx="06" kicker="Growing stronger each year" dark style={{ marginBottom: 56 }}>
          Twelve years, one <span className="u">standard of execution.</span>
        </SectionHead>

        <div className="stats-band">
          <Reveal className="stats-nums">
            {STATS.map((s) => (
              <div className="n" key={s.label}>
                <b>{s.num}<em>{s.sup}</em></b>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="trust-list">
              {TRUST.map((t) => (
                <li key={t.n}>
                  <span className="tn">/{t.n}</span>
                  <span><b>{t.b}</b> {t.s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} style={{ marginTop: 44 }}>
          <div className="metric-strip">
            {COMPLIANCE.map((c) => <span className="m" key={c}><i />{c}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- CLIENTS */
export function Clients() {
  return (
    <section className="section section--alt" id="clients">
      <div className="wrap">
        <SectionHead idx="07" kicker="Major Clients · Trusted Partners">
          Relied upon by government &amp; PSU bodies
        </SectionHead>
      </div>
      <div className="clients-strip">
        <Marquee
          items={CLIENTS}
          light
          render={(c, k) => (
            <span className="client-card" key={k}>
              <span className="abbr">{c.abbr}</span>
              <span className="full">{c.full}</span>
            </span>
          )}
        />
      </div>
    </section>
  )
}

/* --------------------------------------------------------- TESTIMONIALS */
export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <SectionHead idx="08" kicker="In their words" style={{ marginBottom: 52 }}>
          Trusted on the ground<em className="dot">.</em>
        </SectionHead>
        <div className="tst-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" className="tst" key={i} delay={i * 0.1}>
              <span className="qm">”</span>
              <p>{t.quote}</p>
              <figcaption className="who">
                <b>{t.name}</b>
                <span>{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
