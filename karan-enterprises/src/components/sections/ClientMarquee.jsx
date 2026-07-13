import { CLIENTS } from '../../lib/data'

const MarqueeGroup = ({ isDuplicate = false }) => (
  <ul
    className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-16 group-hover:[animation-play-state:paused]"
    style={{ animation: 'marquee 35s linear infinite' }}
    aria-hidden={isDuplicate}
  >
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% - 3rem)); }
      }
      @media (min-width: 640px) {
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 4rem)); }
        }
      }
    `}</style>

    {[...CLIENTS, ...CLIENTS].map((client, index) => (
      <li
        key={isDuplicate ? `dup-${index}` : `orig-${index}`}
        className="flex w-[clamp(150px,16vw,210px)] shrink-0 items-center justify-center"
      >
        <img
          src={client.logo}
          alt={isDuplicate ? '' : client.full}
          loading="lazy"
          className="h-[clamp(46px,4.8vw,74px)] w-auto max-w-[82%] object-contain opacity-50 grayscale transition-all duration-500 ease-out will-change-transform hover:scale-110 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-sm"
        />
      </li>
    ))}
  </ul>
)

/* White logo bar — the white-background source logos merge seamlessly; two
   groups create the infinite loop, with edge gradients fading the ends. */
export function ClientMarquee() {
  return (
    <div className="group relative flex overflow-hidden rounded-2xl border border-black/10 bg-white py-[clamp(20px,2.2vw,32px)] shadow-[0_40px_90px_-55px_rgba(0,0,0,0.55)]">
      <MarqueeGroup />
      <MarqueeGroup isDuplicate />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[clamp(44px,9vw,130px)] bg-gradient-to-r from-white to-transparent" />
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[clamp(44px,9vw,130px)] bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}
