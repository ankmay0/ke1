import { Reveal, Icon } from '../../ui/ui'
import { WRAP, CARD } from '../../lib/cx'
import { BLOG_POSTS } from '../../lib/data'
import { Avatar, Chip } from './atoms'

/* ========================================================= POST FEED */
/* The featured card and the card grid merged into one feed: every post uses
   the horizontal split-card design of the old featured card (image + editorial
   column side by side), just a touch shorter. The first post keeps a solid
   "featured" chip; the rest read as the running index. */
function FeedCard({ post, featured, delay }) {
  return (
    <Reveal variant="scale" delay={delay}>
      <a
        href={`#${post.id}`}
        className={`${CARD} group grid grid-cols-[1fr_1.15fr] items-stretch hover:-translate-y-1 max-[820px]:grid-cols-1`}
      >
        <div className="relative overflow-hidden max-[820px]:aspect-[16/9]">
          <img
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.04]"
            src={post.cover}
            alt={post.coverAlt}
            loading={featured ? 'eager' : 'lazy'}
          />
          <span className="absolute left-4 top-4"><Chip solid={featured}>{post.category}</Chip></span>
        </div>

        <div className="flex flex-col justify-center gap-3 p-[clamp(20px,2.2vw,38px)]">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-steel-2">{post.date} · {post.read}</span>
          <h2 className="line-clamp-2 font-display text-[clamp(21px,2.4vw,32px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink transition-colors group-hover:text-ink-2 dark:text-text">
            {post.title}
          </h2>
          <p className="line-clamp-2 max-w-[54ch] text-[clamp(13.5px,1.1vw,15.5px)] leading-[1.6] text-steel">{post.excerpt}</p>

          <div className="mt-3 flex items-center justify-between gap-4 border-t border-line pt-4 dark:border-glass-brd">
            <span className="flex items-center gap-2.5">
              <Avatar className="h-8 w-8" />
              <span className="flex flex-col leading-tight">
                <b className="font-display text-[12.5px] font-bold text-ink dark:text-text">M/s Karan Enterprises</b>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-steel-2">Editorial team</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ink transition-[gap] duration-300 ease-smooth group-hover:gap-3.5 dark:text-text">
              Read {Icon.arrow}
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export function PostFeed() {
  return (
    <section className={`${WRAP} pb-[clamp(36px,4.4vw,72px)] pt-[clamp(24px,3vw,48px)]`}>
      <Reveal className="mb-[clamp(16px,1.8vw,24px)] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
        <span className="text-yellow">★</span> Latest articles
        <span className="h-px flex-1 bg-line dark:bg-glass-brd" />
      </Reveal>

      <div className="flex flex-col gap-[clamp(16px,1.8vw,26px)]">
        {BLOG_POSTS.map((post, i) => (
          <FeedCard key={post.id} post={post} featured={i === 0} delay={Math.min(i * 0.06, 0.24)} />
        ))}
      </div>
    </section>
  )
}
