import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Icon } from '../ui/ui'
import { COMPANY } from '../lib/data'
import {
  ProjectsHero, Ledger, Reach, Gallery, SiteFilms, CriticalInfra, ProjectsCTA,
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
        {/* <ProjectsHero /> */}
        <Ledger />
        <Reach />
        <Gallery />
        <SiteFilms />
        <CriticalInfra />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  )
}
