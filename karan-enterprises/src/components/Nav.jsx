import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../lib/data'
import { Icon, ThemeToggle } from '../ui/ui'
import { WRAP, BTN_PRIMARY } from '../lib/cx'

function Brand({ scrolled }) {
  return (
    <Link to="/" className="inline-flex items-center gap-[14px]" aria-label="M/s Karan Enterprises home">
      <img
        src="/assets/logo.png"
        alt="M/s Karan Enterprises logo"
        className={`h-auto transition-[width,transform] duration-300 max-[760px]:w-[42px] ${scrolled ? 'w-[48px]' : 'w-[58px]'}`}
      />
      <span className="flex flex-col font-display leading-none">
        <span className="text-[10px] font-semibold tracking-[0.36em] text-steel">M/S</span>
        <span className="mt-[3px] flex items-baseline gap-1.5">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-2 dark:text-text max-[760px]:text-xs">Karan</span>
          <span className="text-[22px] font-extrabold uppercase tracking-[-0.01em] text-ink dark:text-white max-[760px]:text-[17px]">Enterprises</span>
        </span>
      </span>
    </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-[200] border-b border-line bg-white/[0.82] backdrop-blur-[18px] transition-[box-shadow,padding,background-color] duration-300 dark:border-line dark:bg-[rgba(8,11,17,0.64)] dark:[backdrop-filter:blur(18px)_saturate(140%)] ${
          scrolled
            ? 'shadow-[0_10px_40px_-24px_rgba(12,17,24,0.28)] dark:bg-[rgba(8,11,17,0.88)] dark:shadow-[0_12px_44px_-24px_rgba(0,0,0,0.85)]'
            : ''
        }`}
      >
        <div className={`${WRAP} flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? 'h-[68px]' : 'h-[82px]'}`}>
          <Brand scrolled={scrolled} />
          <nav className="flex items-center gap-1 max-[760px]:hidden">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="relative rounded-full px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-2 transition-colors hover:bg-black/[0.03] hover:text-ink dark:text-on-dark-mute dark:hover:bg-white/[0.04] dark:hover:text-white after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-yellow after:shadow-[0_0_12px_rgba(255,203,47,0.72)] after:transition-transform after:duration-300 after:ease-smooth after:content-[''] hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-[12px]">
            <a
              className="hidden rounded-full border border-line bg-white/70 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-2 transition-colors hover:border-yellow hover:text-ink dark:border-glass-brd dark:bg-glass dark:text-on-dark-mute dark:hover:text-white max-[1024px]:hidden"
              href={`tel:${COMPANY.phoneRaw}`}
            >
              {COMPANY.phone}
            </a>
            <ThemeToggle />
            <Link className={`${BTN_PRIMARY} max-[760px]:hidden`} to="/#quote">Get a Quote {Icon.arrow}</Link>
            <button
              className="hidden flex-col gap-[5px] p-2 max-[760px]:flex"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[199] flex flex-col justify-center gap-1.5 bg-dark/95 p-[var(--pad)] text-white backdrop-blur-xl"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="absolute right-[var(--pad)] top-[var(--pad)] rounded-full border border-white/12 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-on-dark-mute"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="border-b border-line-dark py-3 font-display text-[clamp(30px,8vw,52px)] font-black tracking-[-0.04em]"
            >
              <span className="mr-[14px] font-cond text-sm text-yellow">{l.n}</span>{l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
