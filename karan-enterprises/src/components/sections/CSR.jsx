import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { CSR_GUEST, CSR_INITIATIVES, CSR_GALLERY } from '../../lib/data'
import { Reveal, SectionHead } from '../../ui/ui'
import { MOTION_OFF } from '../../lib/motion'
import {
  WRAP, SECTION, LEAD, DOT, CARD, KICKER, METRIC_DOT, ICON_CHIP, WM,
} from '../../lib/cx'

/* line icons — same stroke idiom as the geotech capability icons */
const svg = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
)
const CSR_ICON = {
  sprout: svg(<><path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" /></>),
  recycle: svg(<><path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.2 9.5" /><path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1" /><path d="m14 16-3 3 3 3" /><path d="M8.3 13.6 7.2 9.5 3.1 10.6" /><path d="m9.3 5.8 1.1-1.9a1.8 1.8 0 0 1 3.1 0l3.9 6.8" /><path d="m13.4 9.6 4.1 1.1 1.1-4.1" /></>),
  leaf: svg(<><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></>),
}

/* =====================================================================
   Corporate Social Responsibility — About Us.
   Full-width, stacked rhythm to match the site (Projects / Stats):
   header → Guest-of-Honour credit → two initiative cards (Geotech idiom)
   → a "Moments from the field" Swiper coverflow gallery (the same slider
   treatment as Projects) → a quiet commitment callout. Light + dark parity.
   ===================================================================== */
export function CSR() {
  return (
    <section className={`${SECTION} relative isolate overflow-hidden`} id="csr">
      <span className={WM} aria-hidden="true">05</span>

      <div className={WRAP}>
        <SectionHead idx="05" kicker="Corporate Social Responsibility">
          Giving back where we build<i className={DOT}>.</i>
        </SectionHead>

        <Reveal delay={0.08}>
          <p className={`${LEAD} max-w-[70ch]`}>
            Infrastructure development goes hand in hand with environmental stewardship and community
            well-being. Our CSR initiatives reflect a commitment to a cleaner environment, healthier
            communities and a greener future — wherever we work.
          </p>
        </Reveal>

        {/* guest of honour — compact credit strip */}
        <Reveal delay={0.12}>
          <div className="mt-[clamp(26px,3vw,40px)] flex max-w-[560px] items-stretch overflow-hidden rounded border border-line bg-paper dark:border-glass-brd dark:bg-glass dark:[backdrop-filter:blur(14px)_saturate(130%)]">
            <div className="relative w-[104px] shrink-0 overflow-hidden max-[520px]:w-[84px]">
              <img className="absolute inset-0 h-full w-full object-cover" src={CSR_GUEST.img} alt={CSR_GUEST.name} loading="lazy" />
              <span aria-hidden="true" className="absolute inset-y-0 right-0 w-px bg-line dark:bg-glass-brd" />
            </div>
            <div className="flex flex-col justify-center gap-1 px-[clamp(18px,2vw,26px)] py-4">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-deep">{CSR_GUEST.honorific}</span>
              <b className="font-display text-[clamp(18px,1.7vw,23px)] font-black leading-tight tracking-[-0.02em]">{CSR_GUEST.name}</b>
              <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.02em] text-steel">
                <span className={METRIC_DOT} />{CSR_GUEST.role}
              </span>
            </div>
          </div>
        </Reveal>

        {/* initiatives — two vertical cards (Geotech idiom) */}
        <div className="mt-[clamp(28px,3.4vw,48px)] grid grid-cols-2 gap-[clamp(16px,1.8vw,24px)] max-[760px]:grid-cols-1">
          {CSR_INITIATIVES.map((it, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={it.title}
              delay={i * 0.08}
              className={`${CARD} group flex flex-col hover:-translate-y-1`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  className="h-full w-full object-cover grayscale-[0.3] transition-[transform,filter] duration-[800ms] ease-smooth group-hover:scale-[1.06] group-hover:grayscale-0"
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,19,0)_46%,rgba(10,13,19,0.6)_100%)]" />
                <span className="absolute right-3 top-3 grid h-8 w-10 place-items-center bg-yellow font-cond text-[14px] font-semibold leading-none text-on-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className={`${ICON_CHIP} absolute bottom-3.5 left-4 h-[46px] w-[46px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] group-hover:bg-yellow dark:group-hover:bg-yellow-deep [&_svg]:h-[24px] [&_svg]:w-[24px]`}>{CSR_ICON[it.icon]}</span>
              </div>
              <div className="flex flex-1 flex-col p-[clamp(22px,2vw,30px)]">
                <h4 className="font-display text-[clamp(18px,1.5vw,22px)] font-bold tracking-[-0.01em]">{it.title}</h4>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel">{it.desc}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-line-2 px-[16px] py-2 font-display text-[12.5px] font-semibold dark:border-glass-brd dark:bg-glass dark:text-text">
                  <span className={METRIC_DOT} />{it.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---- Moments from the field — coverflow gallery (as in Projects) ---- */}
      <div className="mt-[clamp(36px,4.5vw,64px)]">
        <div className={`${WRAP} mb-[clamp(14px,1.6vw,22px)] flex flex-wrap items-baseline justify-between gap-3 border-t border-line-2 pt-4 dark:border-line-dark`}>
          <span className={KICKER}>Moments from the field</span>
          <span className="inline-flex items-center gap-2.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-steel" aria-hidden="true">
            Drag · Swipe
            <span className="inline-flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
            </span>
          </span>
        </div>

        <div className="projects-swiper relative pb-[clamp(44px,5vw,68px)]">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, Autoplay, A11y]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop={CSR_GALLERY.length > 2}
            speed={750}
            spaceBetween={18}
            threshold={5}
            resistanceRatio={0.72}
            coverflowEffect={{ rotate: 6, stretch: 0, depth: 220, modifier: 1.35, slideShadows: true }}
            keyboard={{ enabled: true, pageUpDown: false }}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.9, thresholdDelta: 12, thresholdTime: 260 }}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={MOTION_OFF ? false : { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="!px-[var(--pad)] !py-[clamp(24px,3vw,40px)]"
          >
            {CSR_GALLERY.map((g, i) => (
              <SwiperSlide key={g.img} className="!aspect-[16/10] !h-auto !w-[clamp(300px,34vw,460px)]">
                <figure className="group relative h-full w-full overflow-hidden rounded-md bg-dark ring-1 ring-white/10 transition-[transform,box-shadow,ring-color] duration-[400ms] ease-smooth hover:scale-[1.03] hover:shadow-[0_44px_80px_-26px_rgba(0,0,0,0.85)] hover:ring-white/25">
                  <img src={g.img} alt={g.alt} loading={i === 0 ? 'eager' : 'lazy'} className="absolute inset-0 h-full w-full object-cover brightness-[0.92] transition-[transform,filter] duration-[700ms] ease-smooth group-hover:scale-[1.05] group-hover:brightness-100" />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,12,0.28)_0%,rgba(6,8,12,0)_36%,rgba(6,8,12,0.86)_100%)]" />
                  <span className="absolute left-3 top-3 grid h-7 w-9 place-items-center bg-yellow font-cond text-[13px] font-semibold leading-none text-on-accent">{String(i + 1).padStart(2, '0')}</span>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 font-mono text-[11.5px] leading-[1.4] tracking-[0.02em] text-white/90">{g.alt}</figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ---- our commitment ---- */}
      <div className={WRAP}>
        <Reveal className="grid grid-cols-[auto_1fr] items-start gap-[clamp(16px,2.4vw,32px)] rounded border border-line bg-paper p-[clamp(24px,3vw,40px)] dark:border-glass-brd dark:bg-glass dark:[backdrop-filter:blur(14px)_saturate(130%)] max-[620px]:grid-cols-1">
          <span className={`${ICON_CHIP} h-12 w-12 [&_svg]:h-[24px] [&_svg]:w-[24px]`}>{CSR_ICON.leaf}</span>
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">Our Commitment</span>
            <p className="mt-2.5 max-w-[80ch] text-[clamp(15px,1.3vw,17px)] leading-[1.7] text-steel">
              Our CSR efforts are guided by the belief that responsible business practices create
              long-term value for society. Karan Enterprises remains committed to sustainable
              development through <b className="font-semibold text-ink dark:text-text">environmental conservation</b>,
              <b className="font-semibold text-ink dark:text-text"> community engagement</b> and
              <b className="font-semibold text-ink dark:text-text"> ethical business practices</b>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
