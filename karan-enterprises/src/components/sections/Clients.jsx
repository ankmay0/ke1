import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { CLIENTS } from '../../lib/data'
import { SectionHead } from '../../ui/ui'
import { gsap, ScrollTrigger, MOTION_OFF } from '../../lib/motion'
import { WRAP, SECTION } from '../../lib/cx'

// Extract the dominant (most common, non-white/black) colour from a logo so
// each card can tint its background to the artwork — the way Spotify derives
// the ambient colour of a "now playing" view from the album cover.
function useDominantColor(src) {
  const [rgb, setRgb] = useState(null)
  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const size = 32
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        ctx.drawImage(img, 0, 0, size, size)
        const { data } = ctx.getImageData(0, 0, size, size)
        const buckets = new Map()
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 128) continue // transparent
          const r = data[i], g = data[i + 1], b = data[i + 2]
          if (r > 235 && g > 235 && b > 235) continue // near-white
          if (r < 22 && g < 22 && b < 22) continue // near-black
          const key = `${r >> 4}-${g >> 4}-${b >> 4}`
          const e = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 }
          e.r += r; e.g += g; e.b += b; e.n++
          buckets.set(key, e)
        }
        let best = null
        for (const e of buckets.values()) if (!best || e.n > best.n) best = e
        if (best && !cancelled) {
          setRgb([Math.round(best.r / best.n), Math.round(best.g / best.n), Math.round(best.b / best.n)])
        }
      } catch { /* canvas may be tainted — fall back to the neutral tile */ }
    }
    img.src = src
    return () => { cancelled = true }
  }, [src])
  return rgb
}

function ClientCard({ client }) {
  const rgb = useDominantColor(client.logo)
  const base = rgb ? `${rgb[0]}, ${rgb[1]}, ${rgb[2]}` : '60, 60, 60'
  return (
    <div data-client-tile className="group relative will-change-transform">
      {/* soft colour glow that blooms behind the card on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-70"
        style={{ backgroundImage: `radial-gradient(60% 60% at 50% 0%, rgba(${base}, 0.65), transparent 70%)` }}
      />

      <article
        className="relative cursor-pointer overflow-hidden rounded-[12px] p-2.5 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:ring-white/20 group-hover:shadow-[0_20px_44px_-16px_rgba(0,0,0,0.75)]"
        style={{
          backgroundImage: `linear-gradient(165deg, rgb(${base}) -25%, rgba(${base}, 0.42) 42%, #131313 100%)`,
        }}
      >
        {/* top inner highlight — the thin gloss edge premium cards carry */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* on hover the extracted colour intensifies across the whole surface */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
          style={{ backgroundImage: `linear-gradient(165deg, rgba(${base}, 0.55) -10%, transparent 55%)` }}
        />

        {/* diagonal shine sweep on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-8 -left-1/2 w-1/2 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-[left] duration-700 ease-out group-hover:left-[130%]"
        />

        {/* album-art cover */}
        <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-[7px] bg-white p-3 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.65)] ring-1 ring-black/5">
          <img
            src={client.logo}
            alt={client.full}
            width="200"
            height="140"
            className="max-h-full w-auto max-w-[92%] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          {/* subtle sheen across the cover */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/25" />
        </div>

        {/* identity */}
        <div className="relative mt-2.5">
          <h3 className="truncate font-display text-[17px] font-bold tracking-[-0.01em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            {client.abbr}
          </h3>
          <p className="mt-0.5 truncate text-[13px] leading-[1.35] text-white/65">{client.full}</p>
        </div>
      </article>
    </div>
  )
}

export function Clients() {
  const gridRef = useRef(null)

  // Scroll-triggered row reveal — one trigger PER TILE. Tiles in the same row
  // share a vertical position, so their triggers fire together (the row reveals
  // as one), while the next row only animates once it actually scrolls into
  // view (a single grid-wide trigger would play the lower rows off-screen). Each
  // tile flips up in 3D from its bottom edge — rising, unblurring and scaling in
  // — and settles fully into place. GSAP only touches the outer tile wrapper, so
  // the per-card hover glow / shine / lift are untouched. Robust to the
  // responsive column count since every tile triggers on its own position.
  useLayoutEffect(() => {
    if (MOTION_OFF || !gridRef.current) return
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray(gridRef.current.querySelectorAll('[data-client-tile]'))
      tiles.forEach((tile) => {
        gsap.fromTo(
          tile,
          { autoAlpha: 0, yPercent: 26, rotateX: -32, scale: 0.92, filter: 'blur(6px)', transformPerspective: 1000, transformOrigin: '50% 100%' },
          {
            autoAlpha: 1, yPercent: 0, rotateX: 0, scale: 1, filter: 'blur(0px)',
            ease: 'power3.out',
            duration: 0.85,
            scrollTrigger: { trigger: tile, start: 'top 88%', once: true },
          }
        )
      })
      ScrollTrigger.refresh()
    }, gridRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className={`${SECTION} pt-[clamp(12px,1.6vw,24px)]`} id="clients">
      <div className={WRAP}>
        <SectionHead idx="07" kicker="Major Clients · Trusted Partners">
          Relied upon by government &amp; PSU bodies
        </SectionHead>

        {/* Spotify-style adaptive card wall — each card extracts the dominant
            colour of its client logo and tints its background to match, framed
            by a glass ring, colour glow, gloss edge and a hover shine sweep. The
            wall reveals via a scroll-scrubbed 3D grid wave (see effect above). */}
        <div
          ref={gridRef}
          className="mt-[clamp(34px,4vw,52px)] grid grid-cols-4 gap-[clamp(12px,1.4vw,20px)] [perspective:1200px] max-[900px]:grid-cols-2 max-[540px]:grid-cols-1"
        >
          {CLIENTS.map((c) => (
            <ClientCard key={c.abbr} client={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
