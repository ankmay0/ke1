import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Icon } from '../ui/ui'
import { COMPANY } from '../lib/data'
import {
  ServicesMasthead, Capabilities, ProofBand, RailwayFormationRehab,
  ProjectDelivery, SafetyQuality, ServicesCTA,
} from '../components/services'

/* =====================================================================
   Services — a content-first capabilities & delivery dossier.
   The opening is deliberately NOT a hero: no photo, no aurora, no glass
   stat bar. It reads like the cover of an engineering directory — a
   typographic masthead over a full-width index of the eight disciplines,
   with credentials kept as a quiet static caption. Five elevated chapters
   follow; the cursor-tracked sticky capability list is the centrepiece.
   Light + dark parity throughout; motion degrades to static in SHOT mode.

   Each chapter is its own modular component in ../components/services/;
   this page just composes them in order.
   ===================================================================== */
export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <ServicesMasthead />
        <Capabilities />
        {/* <ProofBand /> */}
        {/* <RailwayFormationRehab /> */}
        <ProjectDelivery />
        <SafetyQuality />
        <ServicesCTA />
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
