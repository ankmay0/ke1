import { Reveal } from '../../ui/ui'
import { WRAP } from '../../lib/cx'
import { Avatar, Chip } from './atoms'

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

export function Lede({ children }) {
  return (
    <p className="text-[clamp(18px,1.6vw,23px)] font-medium leading-[1.5] text-ink first-letter:float-left first-letter:mr-[0.09em] first-letter:mt-[0.05em] first-letter:font-cond first-letter:text-[3.2em] first-letter:font-bold first-letter:leading-[0.66] first-letter:text-yellow-deep dark:text-text">
      {children}
    </p>
  )
}

export function H3({ children }) {
  return (
    <h3 className="mt-4 flex items-baseline gap-3 font-display text-[clamp(18px,1.6vw,23px)] font-bold leading-[1.2] tracking-[-0.015em] text-ink dark:text-text">
      <span className="mt-2 h-2 w-2 shrink-0 self-start bg-yellow" aria-hidden="true" />
      <span>{children}</span>
    </h3>
  )
}

export function Bullets({ items }) {
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

export function Pull({ children }) {
  return (
    <figure className="my-[clamp(18px,2.6vw,36px)] border-l-4 border-yellow pl-[clamp(18px,2.4vw,32px)]">
      <blockquote className="font-display text-[clamp(20px,2.4vw,30px)] font-semibold leading-[1.3] tracking-[-0.02em] text-ink dark:text-text">
        {children}
      </blockquote>
    </figure>
  )
}

export function Sig() {
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

/* uniform article shell — cover, chip, title, byline, then the prose body */
export function Post({ post, children }) {
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
