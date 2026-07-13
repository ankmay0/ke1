import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Icon } from '../ui/ui'
import { COMPANY } from '../lib/data'
import {
  ProjectsHero, Ledger, Reach, Gallery, CriticalInfra, ProjectsCTA,
} from '../components/projects'

/* =====================================================================
   Projects — "The Ledger". A record/archive aesthetic, deliberately
   unlike the Services capabilities dossier: a dark full-bleed record
   header, a ruled inline KPI ledger, and a filterable index of every
   contract that expands into its full portfolio record. Shared brand
   materials (nav/footer/fonts/yellow/grain), new architecture.
   Project VALUES are never disclosed (house rule) — scope, client,
   location, duration and activities carry the credibility instead.

   Each section is its own modular component in ../components/projects/;
   this page just composes them in order.
   ===================================================================== */
export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <ProjectsHero />
        <Ledger />
        <Reach />
        <Gallery />
        <CriticalInfra />
        <ProjectsCTA />
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
