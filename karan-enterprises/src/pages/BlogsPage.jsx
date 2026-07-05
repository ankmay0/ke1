import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress, Magnetic } from '../components/Chrome'
import { Reveal, Icon } from '../ui'
import { WRAP, BTN_PRIMARY, CARD, U, DOT } from '../cx'
import { COMPANY, BLOG_POSTS } from '../data'

/* =====================================================================
   Blogs — a conventional blog: a listing feed (featured post card + a card
   grid with thumbnails, category chips, excerpts and author/date/read-time
   meta) that links down to the full, uniformly-styled articles. Same brand
   palette / fonts as the rest of the site; light + dark parity; motion
   degrades to static via Reveal / reduced-motion.
   ===================================================================== */

const [FEATURED, ...REST] = BLOG_POSTS

/* small round author badge — "KE" monogram, reused across cards + bylines */
function Avatar({ className = '' }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-yellow font-display text-[11px] font-extrabold text-on-accent ${className}`} aria-hidden="true">
      KE
    </span>
  )
}

/* category chip */
function Chip({ children, solid = false }) {
  return (
    <span
      className={
        solid
          ? 'inline-flex items-center rounded-full bg-yellow px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-on-accent'
          : 'inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-steel dark:border-glass-brd'
      }
    >
      {children}
    </span>
  )
}

/* ============================================================== HEADER */
function BlogHeader() {
  return (
    <header className="relative border-b border-line bg-surface pb-[clamp(26px,3vw,44px)] pt-[clamp(34px,4.4vw,64px)] dark:border-glass-brd dark:bg-transparent">
      <div className={WRAP}>
        <Reveal className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
          <span className="inline-flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-yellow dark:shadow-[0_0_8px_rgba(255,214,10,0.8)]" />
            The Blog · Field notes &amp; insights
          </span>
          <span className="text-steel-2 max-[560px]:hidden">{BLOG_POSTS.length} articles · Since {COMPANY.since}</span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-[clamp(16px,2vw,28px)] max-w-[18ch] font-display text-[clamp(38px,6vw,86px)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-ink dark:text-text">
            Notes from the <span className={U}>field</span><em className={DOT}>.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-[clamp(14px,1.6vw,22px)] max-w-[62ch] text-[clamp(15px,1.4vw,19px)] leading-[1.6] text-steel">
            Reflections on building infrastructure that lasts — railway track works, slope protection,
            civil construction and the long road of delivering quality across India.
          </p>
        </Reveal>
      </div>
    </header>
  )
}

/* ====================================================== FEATURED CARD */
function FeaturedPost() {
  const p = FEATURED
  return (
    <section className={`${WRAP} pt-[clamp(30px,3.6vw,56px)]`}>
      <Reveal className="mb-[clamp(16px,1.8vw,24px)] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
        <span className="text-yellow">★</span> Featured article
        <span className="h-px flex-1 bg-line dark:bg-glass-brd" />
      </Reveal>

      <Reveal variant="scale">
        <a
          href={`#${p.id}`}
          className={`${CARD} group grid grid-cols-[1.15fr_1fr] items-stretch hover:-translate-y-1 max-[820px]:grid-cols-1`}
        >
          <div className="relative overflow-hidden max-[820px]:aspect-[16/9]">
            <img
              className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.04]"
              src={p.cover}
              alt={p.coverAlt}
              loading="eager"
            />
            <span className="absolute left-4 top-4"><Chip solid>{p.category}</Chip></span>
          </div>

          <div className="flex flex-col justify-between p-[clamp(24px,2.8vw,44px)]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel-2">{p.date} · {p.read}</span>
              <h2 className="mt-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-ink transition-colors group-hover:text-ink-2 dark:text-text">
                {p.title}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[clamp(14.5px,1.2vw,17px)] leading-[1.65] text-steel">{p.excerpt}</p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-5 dark:border-glass-brd">
              <span className="flex items-center gap-3">
                <Avatar className="h-9 w-9" />
                <span className="flex flex-col leading-tight">
                  <b className="font-display text-[13px] font-bold text-ink dark:text-text">M/s Karan Enterprises</b>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel-2">Editorial team</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-[gap] duration-300 ease-smooth group-hover:gap-3.5 dark:text-text">
                Read article {Icon.arrow}
              </span>
            </div>
          </div>
        </a>
      </Reveal>
    </section>
  )
}

/* =========================================================== CARD GRID */
function PostCard({ post, delay }) {
  return (
    <Reveal variant="scale" delay={delay}>
      <a href={`#${post.id}`} className={`${CARD} group flex h-full flex-col hover:-translate-y-1`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.05]"
            src={post.cover}
            alt={post.coverAlt}
            loading="lazy"
          />
          <span className="absolute left-4 top-4"><Chip>{post.category}</Chip></span>
        </div>

        <div className="flex flex-1 flex-col p-[clamp(20px,1.8vw,28px)]">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-steel-2">{post.date} · {post.read}</span>
          <h3 className="mt-3 font-display text-[clamp(19px,1.8vw,25px)] font-bold leading-[1.14] tracking-[-0.02em] text-ink dark:text-text">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-steel">{post.excerpt}</p>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 dark:border-glass-brd">
            <span className="flex items-center gap-2.5">
              <Avatar className="h-7 w-7 text-[9px]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel">M/s Karan Ent.</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink transition-[gap] duration-300 ease-smooth group-hover:gap-3 dark:text-text">
              Read {Icon.arrow}
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

function PostGrid() {
  return (
    <section className={`${WRAP} pb-[clamp(36px,4.4vw,72px)] pt-[clamp(28px,3.2vw,48px)]`}>
      <Reveal className="mb-[clamp(16px,1.8vw,24px)] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
        Latest articles
        <span className="h-px flex-1 bg-line dark:bg-glass-brd" />
      </Reveal>
      <div className="grid grid-cols-2 gap-[clamp(16px,1.8vw,26px)] max-[720px]:grid-cols-1">
        {REST.map((post, i) => (
          <PostCard key={post.id} post={post} delay={Math.min(i * 0.08, 0.24)} />
        ))}
      </div>
    </section>
  )
}

/* ---- article reading atoms --------------------------------------- */
function Byline({ post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-line py-4 dark:border-glass-brd">
      <Avatar className="h-9 w-9" />
      <span className="mr-2 flex flex-col leading-tight">
        <b className="font-display text-[13px] font-bold text-ink dark:text-text">M/s Karan Enterprises</b>
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel-2">Editorial team</span>
      </span>
      <span className="ml-auto flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-steel">
        <span>{post.date}</span>
        <i className="h-1 w-1 rounded-full bg-yellow" />
        <span>{post.readLong}</span>
        <i className="h-1 w-1 rounded-full bg-yellow" />
        <span>{post.topic}</span>
      </span>
    </div>
  )
}

function Lede({ children }) {
  return (
    <p className="text-[clamp(18px,1.6vw,23px)] font-medium leading-[1.5] text-ink first-letter:float-left first-letter:mr-[0.09em] first-letter:mt-[0.05em] first-letter:font-cond first-letter:text-[3.2em] first-letter:font-bold first-letter:leading-[0.66] first-letter:text-yellow-deep dark:text-text">
      {children}
    </p>
  )
}

function H3({ children }) {
  return (
    <h3 className="mt-4 flex items-baseline gap-3 font-display text-[clamp(18px,1.6vw,23px)] font-bold leading-[1.2] tracking-[-0.015em] text-ink dark:text-text">
      <span className="mt-2 h-2 w-2 shrink-0 self-start bg-yellow" aria-hidden="true" />
      <span>{children}</span>
    </h3>
  )
}

function Bullets({ items }) {
  return (
    <ul className="mt-1 grid gap-2.5">
      {items.map((it) => (
        <li key={it} className="relative pl-6 text-[clamp(15px,1.05vw,17px)] leading-[1.55] text-steel before:absolute before:left-0 before:top-[0.62em] before:h-[2px] before:w-3.5 before:bg-yellow before:content-['']">
          {it}
        </li>
      ))}
    </ul>
  )
}

function Pull({ children }) {
  return (
    <figure className="my-[clamp(18px,2.6vw,36px)] border-l-4 border-yellow pl-[clamp(18px,2.4vw,32px)]">
      <blockquote className="font-display text-[clamp(20px,2.4vw,30px)] font-semibold leading-[1.3] tracking-[-0.02em] text-ink dark:text-text">
        {children}
      </blockquote>
    </figure>
  )
}

/* uniform article shell — cover, chip, title, byline, then the prose body */
function Post({ post, children }) {
  return (
    <article id={post.id} className="scroll-mt-[90px] border-b border-line py-[clamp(40px,5vw,80px)] dark:border-glass-brd">
      <div className={WRAP}>
        <div className="mx-auto flex max-w-[760px] flex-col gap-6">
          <div className="flex items-center gap-3">
            <Chip solid>{post.category}</Chip>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-steel-2">{post.date} · {post.read}</span>
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,50px)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-ink dark:text-text">
            {post.title}
          </h2>
          <Byline post={post} />
          <Reveal variant="scale" className="overflow-hidden rounded-[12px] border border-line dark:border-glass-brd">
            <img className="aspect-[16/8] w-full object-cover" src={post.cover} alt={post.coverAlt} loading="lazy" />
          </Reveal>
          <div className="flex flex-col gap-5 [&>p]:text-[clamp(16px,1.15vw,18px)] [&>p]:leading-[1.78] [&>p]:text-steel">
            {children}
          </div>
          <a href="#top" className="mt-2 inline-flex w-max items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-steel-2 transition-colors hover:text-ink dark:hover:text-text">
            ↑ Back to all articles
          </a>
        </div>
      </div>
    </article>
  )
}

function Sig() {
  return (
    <div className="mt-[clamp(20px,2.4vw,32px)] flex items-center gap-4 border-t border-line pt-6 dark:border-glass-brd">
      <span className="h-px w-10 shrink-0 bg-yellow" />
      <div className="text-[clamp(14px,1.1vw,16px)] leading-[1.5] text-steel">
        <b className="block font-display text-[1.1em] font-extrabold text-ink dark:text-text">M/s Karan Enterprises</b>
        Building Infrastructure. Delivering Excellence.
      </div>
    </div>
  )
}

/* ================================================= FULL ARTICLES */
function ArticleOne() {
  return (
    <Post post={BLOG_POSTS[0]}>
      <Lede>
        In today's fast-moving infrastructure and construction landscape, quality, reliability and
        innovation are the pillars that define long-term success. At M/s Karan Enterprises, these values
        are not just words — they are the foundation of every project we undertake.
      </Lede>

      <H3>Who we are</H3>
      <p>
        M/s Karan Enterprises is a trusted name in the field of railway infrastructure development, civil
        construction, track-related works, slope protection work, and infrastructure solutions. With a
        commitment to excellence and a vision to contribute towards nation-building, we continuously strive
        to deliver projects that meet the highest standards of safety, durability and efficiency.
      </p>
      <p>
        Our expertise lies in understanding project requirements with precision and executing them with
        professionalism, technical knowledge and a dedicated workforce.
      </p>

      <H3>Railway infrastructure &amp; track works — our core strength</H3>
      <p>
        Railway infrastructure is one of the most critical components of national development and
        connectivity. At M/s Karan Enterprises, railway-related projects remain our strongest area of
        expertise, supported by years of practical execution experience, technical understanding and
        operational efficiency.
      </p>
      <p>
        We specialize in supporting railway construction and development activities through quality
        execution, proper planning and timely project delivery. Along with railway works, we also undertake
        broader infrastructure, civil construction and slope protection projects across different sectors.
      </p>
      <p>
        Our team understands the importance of safety, technical accuracy, durability and operational
        reliability in every project we execute. From groundwork preparation to execution support, every
        stage of our work is handled with strict quality control and professional supervision.
      </p>

      <Pull>Every stage of our work is handled with strict quality control and professional supervision.</Pull>

      <H3>Slope protection &amp; rehabilitation work for railway projects</H3>
      <p>
        Slope stabilization and protection play a critical role in ensuring safety and structural integrity
        in challenging terrains. Our team brings specialized expertise in slope protection solutions
        designed to minimize erosion risks, improve long-term stability and support safe railway operations
        in difficult terrains.
      </p>
      <p>
        We focus on practical, effective and sustainable engineering methods that align with project
        requirements and environmental conditions.
      </p>

      <H3>Civil construction services</H3>
      <p>
        M/s Karan Enterprises provides comprehensive civil construction services across multiple sectors.
        Our team works closely with clients to ensure timely project delivery while maintaining superior
        workmanship and safety standards.
      </p>
      <p>
        With strong project management capabilities and experienced professionals, we aim to deliver
        solutions that create lasting value.
      </p>

      <H3>Commitment to quality &amp; safety</H3>
      <p>
        At M/s Karan Enterprises, quality and safety are at the center of every operation. We believe that
        successful project execution depends not only on technical expertise but also on maintaining strict
        safety protocols and operational discipline.
      </p>
      <p>Our approach includes:</p>
      <Bullets
        items={[
          'High-quality construction standards',
          'Timely project execution',
          'Skilled workforce and technical supervision',
          'Efficient project coordination',
          'Strong focus on workplace safety',
          'Client-centric project management',
        ]}
      />

      <H3>Supporting the growth of modern infrastructure</H3>
      <p>
        The construction and infrastructure industry is evolving rapidly, and M/s Karan Enterprises is
        committed to growing alongside it. We continuously explore modern techniques, better project
        execution methods and innovative engineering practices to improve efficiency and deliver enhanced
        results.
      </p>
      <p>
        Our goal is to become a reliable long-term partner for organizations seeking dependable railway
        infrastructure, civil construction and infrastructure development solutions.
      </p>

      <H3>Building long-term partnerships</H3>
      <p>
        We believe strong business relationships are built on trust, transparency and performance. Whether
        working with private clients, contractors or large infrastructure organizations, M/s Karan
        Enterprises focuses on building partnerships that create mutual growth and long-term success.
      </p>
      <p>
        As we move forward, we remain committed to expanding our capabilities, taking on new challenges and
        contributing meaningfully to the development of infrastructure across the country.
      </p>

      <H3>Conclusion</H3>
      <p>
        M/s Karan Enterprises stands for dedication, quality and engineering excellence. Every project we
        undertake reflects our commitment to delivering reliable infrastructure solutions that make a
        lasting impact.
      </p>
      <p>
        With a growing portfolio, experienced team and strong vision for the future, we continue to
        contribute towards railway development, civil construction and modern infrastructure growth — while
        building trust, reliability and long-term progress.
      </p>

      <Sig />
    </Post>
  )
}

function ArticleTwo() {
  return (
    <Post post={BLOG_POSTS[1]}>
      <Lede>
        Infrastructure is the foundation of development, connectivity and economic growth. From railway
        projects to civil construction and slope protection work, every structure plays a crucial role in
        supporting safer and more efficient operations.
      </Lede>
      <p>
        At M/s Karan Enterprises, we believe that successful infrastructure development depends on three key
        factors — quality execution, technical expertise and timely delivery. Our team works with a strong
        commitment to maintaining high construction standards while ensuring safety and operational
        reliability across every project.
      </p>
      <Pull>Quality execution, technical expertise and timely delivery.</Pull>
      <p>
        Railway infrastructure remains one of our core strengths, alongside broader civil and infrastructure
        solutions. With growing industry demands and modern development requirements, we continue to focus on
        delivering dependable engineering solutions that create long-term value.
      </p>
      <p>
        Through dedication, professionalism and continuous improvement, M/s Karan Enterprises aims to
        contribute towards building stronger infrastructure for the future.
      </p>
      <Sig />
    </Post>
  )
}

function ArticleThree() {
  return (
    <Post post={BLOG_POSTS[2]}>
      <Lede>
        At M/s Karan Enterprises, growth is not just about increasing the number of projects — it is about
        building long-term relationships, expanding capabilities and creating a stronger presence in the
        infrastructure industry.
      </Lede>
      <p>
        As we move forward, our vision is to work with more clients across railway infrastructure, civil
        construction, slope protection and development projects. We aim to become a trusted execution partner
        known for reliability, quality work and professional project management.
      </p>
      <p>
        Scalability remains one of our key future goals. By strengthening our workforce, improving
        operational efficiency and adopting modern execution practices, we are continuously preparing
        ourselves to take on larger and more challenging projects.
      </p>
      <p>
        We believe that every successful project builds trust, and every client relationship creates new
        opportunities for growth. With dedication, consistency and a clear long-term vision, M/s Karan
        Enterprises is committed to expanding its reach and contributing to the development of modern
        infrastructure across the country.
      </p>
      <Sig />
    </Post>
  )
}

/* ============================================================ CLOSER */
function Closer() {
  return (
    <section className="relative py-[clamp(48px,6.5vw,104px)] text-center">
      <div className={`${WRAP} flex flex-col items-center`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-2">That's all for now</span>
        <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(28px,4.4vw,58px)] font-black uppercase leading-[0.99] tracking-[-0.03em] text-ink dark:text-text">
          Have a <span className={U}>project</span> in mind<em className={DOT}>?</em>
        </h2>
        <p className="mt-5 max-w-[52ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.6] text-steel">
          Share your scope, block window and specifications — we respond with a capability brief and a
          phased execution plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Magnetic><a className={BTN_PRIMARY} href="/#quote">Begin a project {Icon.arrow}</a></Magnetic>
          <a className="font-mono text-[12px] uppercase tracking-[0.1em] text-steel underline decoration-yellow decoration-2 underline-offset-[6px] transition-colors hover:text-ink dark:hover:text-text" href={`tel:+${COMPANY.phoneRaw}`}>
            or call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ PAGE */
export default function BlogsPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main id="top">
        <BlogHeader />
        <FeaturedPost />
        <PostGrid />
        <ArticleOne />
        <ArticleTwo />
        <ArticleThree />
        <Closer />
      </main>
      <Footer />

      <a
        className="fixed bottom-[22px] right-[22px] z-[150] grid h-14 w-14 place-items-center rounded-full bg-whatsapp shadow-[0_14px_40px_-8px_rgba(37,211,102,0.7)] transition-transform duration-[250ms] ease-smooth hover:scale-[1.08] [&_svg]:h-[30px] [&_svg]:w-[30px]"
        href={`https://wa.me/${COMPANY.phoneRaw}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        {Icon.whatsapp}
      </a>
    </>
  )
}
