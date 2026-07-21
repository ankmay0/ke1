import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
  A11y,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { PROJECTS } from '../../lib/data'
import { Reveal, SectionHead, Icon } from '../../ui/ui'
import { MOTION_OFF } from '../../lib/motion'
import { WRAP, WM, LEAD } from '../../lib/cx'

// Netflix-style project tile — an image-forward landscape thumbnail that
// scales and lifts on hover, revealing a detail drawer with real contract
// data (highlight, location, tags) and an enquiry action. Nothing fabricated.
// Inside Swiper the centred (active) slide auto-reveals its drawer via CSS.
function ProjectCard({ p, i }) {
  const ref = String(i + 1).padStart(2, '0')
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-md bg-dark ring-1 ring-white/10 transition-[transform,box-shadow,ring-color] duration-[400ms] ease-smooth hover:z-20 hover:scale-[1.04] hover:shadow-[0_44px_80px_-26px_rgba(0,0,0,0.85)] hover:ring-white/25">
      {/* thumbnail */}
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.9] transition-[transform,filter] duration-[700ms] ease-smooth group-hover:scale-[1.06] group-hover:brightness-100"
      />
      {/* resting gradient so the title reads over any image */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,12,0.35)_0%,rgba(6,8,12,0)_34%,rgba(6,8,12,0.82)_100%)]" />

      {/* top row — real index + category */}
      <div className="absolute inset-x-0 top-0 z-[2] flex items-center justify-between p-3">
        <span className="grid h-7 w-9 place-items-center bg-yellow font-cond text-[13px] font-semibold leading-none text-on-accent">{ref}</span>
        <span className="border border-white/40 bg-black/45 px-2 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white [backdrop-filter:blur(4px)]">{p.cat}</span>
      </div>

      {/* resting title — fades out as the drawer rises (on hover or when active) */}
      <h3 className="pj-title absolute inset-x-0 bottom-0 z-[1] line-clamp-2 p-4 font-display text-[clamp(15px,1.3vw,19px)] font-bold leading-[1.16] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.7)] transition-opacity duration-300 group-hover:opacity-0 max-[920px]:opacity-0">
        {p.title}
      </h3>

      {/* detail drawer — rises on hover (desktop) and on the active slide */}
      <div className="pj-drawer absolute inset-x-0 bottom-0 z-[3] translate-y-full bg-gradient-to-t from-[#05070b] via-[#05070b]/97 to-[#05070b]/70 p-4 pt-3 opacity-0 transition-[transform,opacity] duration-[380ms] ease-smooth group-hover:translate-y-0 group-hover:opacity-100 max-[920px]:translate-y-0 max-[920px]:opacity-100">
        <h3 className="line-clamp-1 font-display text-[15.5px] font-bold leading-[1.15] text-white">{p.title}</h3>

        <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 font-mono text-[10px] uppercase tracking-[0.1em]">
          <span className="text-yellow">{p.cat}</span>
          <span className="text-white/35">/</span>
          <span className="tracking-[0.02em] normal-case text-white/70">{p.location}</span>
          {p.duration && (<><span className="text-white/35">/</span><span className="tracking-[0.02em] normal-case text-white/70">{p.duration}</span></>)}
        </p>

        <p className="mt-2 line-clamp-2 text-[12px] leading-[1.45] text-white/75">{p.highlight}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="border border-white/20 px-1.5 py-[3px] font-mono text-[8.5px] uppercase tracking-[0.06em] text-white/65">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="relative isolate overflow-hidden bg-paper dark:bg-transparent" id="projects">
      <span className={WM} aria-hidden="true">05</span>
      <div className={`${WRAP} grid grid-cols-[1fr_auto] items-end gap-x-10 gap-y-[18px] pb-[clamp(30px,3.4vw,48px)] pt-[var(--sec)] max-[760px]:grid-cols-1`}>
        <SectionHead idx="05" kicker="Major Projects · Contract Record">
          Delivered, certified, signed off
        </SectionHead>
        <Reveal delay={0.1}>
          <p className={`${LEAD} mt-0 max-w-[46ch] self-end`}>
            Railway sidings, formation, slope protection, roadways and civil works — executed for PSU
            and government clients across Jharkhand, Bihar and Chhattisgarh.
          </p>
        </Reveal>
        <span className="col-span-full inline-flex items-center gap-2.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-steel" aria-hidden="true">
          Drag · Swipe
          <span className="inline-flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        </span>
      </div>

      <div className="projects-swiper relative pb-[clamp(48px,5vw,72px)]">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, Autoplay, A11y]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          speed={750}
          spaceBetween={18}
          threshold={5}
          resistanceRatio={0.72}
          longSwipesRatio={0.3}
          followFinger
          coverflowEffect={{ rotate: 6, stretch: 0, depth: 220, modifier: 1.35, slideShadows: true }}
          keyboard={{ enabled: true, pageUpDown: false }}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.9, thresholdDelta: 12, thresholdTime: 260 }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={MOTION_OFF ? false : { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className="!px-[var(--pad)] !py-[clamp(28px,3vw,44px)]"
        >
          {PROJECTS.map((p, i) => (
            <SwiperSlide key={p.title} className="!aspect-[16/10] !h-auto !w-[clamp(300px,32vw,432px)]">
              <ProjectCard p={p} i={i} />
            </SwiperSlide>
          ))}

          {/* Netflix-style end tile — the row's call to action, as the final slide */}
          <SwiperSlide className="!aspect-[16/10] !h-auto !w-[clamp(300px,32vw,432px)]">
            <a
              href="#quote"
              className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-md border border-glass-brd bg-dark p-6 text-white ring-1 ring-white/10 transition-[transform,box-shadow,ring-color] duration-[400ms] ease-smooth hover:z-20 hover:scale-[1.04] hover:shadow-[0_44px_80px_-26px_rgba(0,0,0,0.85)] hover:ring-yellow/40"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(120%_90%_at_100%_0%,rgba(255,203,47,0.16),transparent_60%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.16em] text-on-dark-mute">
                Start here
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors duration-300 group-hover:border-yellow group-hover:bg-yellow group-hover:text-on-accent [&_svg]:h-4 [&_svg]:w-4">{Icon.arrow}</span>
              </span>
              <span className="flex flex-col gap-2">
                <span className="font-body text-[12.5px] font-semibold uppercase tracking-[0.08em] text-on-dark-mute">Have a similar project?</span>
                <span className="font-display text-[clamp(26px,2.6vw,38px)] font-extrabold leading-[1.04] text-white">Let&apos;s talk</span>
              </span>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
