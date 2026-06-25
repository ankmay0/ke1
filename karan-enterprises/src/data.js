// =====================================================================
//  Content for M/s Karan Enterprises — home page
//  Branding: always "M/s Karan Enterprises". No "East India" regional
//  limiting language. Project values intentionally NOT disclosed.
// =====================================================================

export const COMPANY = {
  name: 'M/s Karan Enterprises',
  phone: '+91 80921 67690',
  phoneRaw: '918092167690',
  emails: ['admin@karanenterprises.co', 'info@karanenterprises.co'],
  location: 'Ranchi, Jharkhand · India',
  linkedin: 'https://www.linkedin.com/company/118114147/',
  since: '2013',
  gstin: '20AANFK1113F1Z1',
  rdso: 'RDSO/2020/GE: IRS-0004',
}

// Multi-page site: the home page is index.html, Services is its own page
// (services.html). Hashes are kept absolute (`/#about`) so a link works from
// either page — on the home page it simply scrolls, from Services it navigates
// home and then scrolls to the section.
export const NAV_LINKS = [
  { label: 'Home', href: '/', n: '01' },
  { label: 'About', href: '/#about', n: '02' },
  { label: 'Services', href: '/services.html', n: '03' },
  { label: 'Projects', href: '/#projects', n: '04' },
  { label: 'Contact', href: '/#quote', n: '05' },
]

export const HERO_STATS = [
  { num: '12', sup: '+', label: 'Years of execution' },
  { num: '230', sup: '+', label: 'Strong workforce' },
  { num: '9', sup: '', label: 'PSU & govt clients' },
  { num: '100', sup: '%', label: 'RDSO-aligned works' },
]

export const TICKER = [
  'Railway Formation', 'Track Maintenance', 'Bridges & Culverts',
  'Roads & Drains', 'Slope Protection', 'Ash Transportation',
  'Reinforced Soil Walls', 'Geotechnical Works',
]

export const ABOUT_CALLOUTS = [
  { n: '01', text: '9 PSU, government & industrial clients' },
  { n: '02', text: 'Railway & roadway infrastructure focus' },
  { n: '03', text: 'Maccaferri-authorised geosynthetics applicator' },
]

export const CAPABILITY_TAGS = [
  'RDSO Standards', '12+ Years Experience', '230+ Workforce', 'Modern Machinery',
]

export const SERVICES = [
  {
    n: '01',
    title: 'Railway Formation',
    desc: 'New broad-gauge formation — RDSO-grade earthwork through to track-bed.',
    tags: ['Earthwork', 'Track-bed', 'P-way'],
    img: '/assets/photo1.jpg',
  },
  {
    n: '02',
    title: 'Track Maintenance',
    desc: 'Rehabilitation and formation strengthening under strict block-time discipline.',
    tags: ['Rehabilitation', 'Block-time'],
    img: '/assets/photo9.jpg',
  },
  {
    n: '03',
    title: 'Reinforced Soil Walls',
    desc: 'Reinforced-soil and gabion retaining structures for embankments and abutments.',
    tags: ['Gabion', 'RSW', 'Abutments'],
    img: '/assets/photo3.jpg',
  },
  {
    n: '04',
    title: 'Erosion & Slope Control',
    desc: 'Polymeric and biodegradable mats for slope stabilisation and erosion protection.',
    tags: ['Geocell', 'Slope', 'Drainage'],
    img: '/assets/photo6.jpg',
  },
]

// Railway formation — numbered construction sequence (image strip)
export const SEQUENCE = [
  { n: '01', title: 'Track Removal', desc: 'Safe dismantling of existing rails, sleepers and components.', img: '/assets/photo4.jpg' },
  { n: '02', title: 'Ground Improvement', desc: 'Soil strengthening with geocell, geogrid & compaction.', img: '/assets/photo6.jpg' },
  { n: '03', title: 'Formation Work', desc: 'Layer-by-layer embankment with drainage & compaction.', img: '/assets/photo3.jpg' },
  { n: '04', title: 'Track-Bed Prep', desc: 'Ballast profiling, alignment and P-way readiness.', img: '/assets/photo1.jpg' },
]

// Six process cards
export const PROCESS = [
  { n: '01', title: 'Track Dismantling', desc: 'Safe removal of existing rails, sleepers and track components.' },
  { n: '02', title: 'Ballast & Subgrade Prep', desc: 'Excavation, material replacement and preparation of a stable foundation.' },
  { n: '03', title: 'Ground Improvement', desc: 'Soil strengthening using geocell, geogrid and engineered compaction.' },
  { n: '04', title: 'Formation Construction', desc: 'Layer-by-layer embankment construction with proper drainage and compaction.' },
  { n: '05', title: 'Ballast Spreading', desc: 'Accurate placement and profiling of ballast for track stability.' },
  { n: '06', title: 'Track-Bed & P-Way', desc: 'Final rail alignment, packing and preparation for operational readiness.' },
]

export const GEO_CAPS = [
  { icon: 'gabion', title: 'Gabion Walls & Retaining Structures', desc: 'Durable gabion retaining walls and erosion-resistant structures built with advanced Maccaferri systems.' },
  { icon: 'erosion', title: 'Erosion Control Solutions', desc: 'Maccaferri polymeric and biodegradable mats for slope stabilisation, soil conservation and long-term protection.' },
  { icon: 'rsw', title: 'Reinforced Soil Walls (RSW)', desc: 'Design support and construction of high-performance reinforced-earth structures for railway and roadway works.' },
  { icon: 'culvert', title: 'Culvert Formation & Protection', desc: 'Culvert construction, protection works and allied civil infrastructure ensuring structural longevity.' },
  { icon: 'bridge', title: 'Bridge Abutment Protection', desc: 'Specialised protection for bridge abutments using engineered retaining, gabion and erosion-control systems.' },
  { icon: 'geocell', title: 'Geocell Ground Improvement', desc: 'Geocell and geogrid reinforcement for formation strengthening on demanding terrain.' },
]

export const PROJECTS = [
  { cat: 'Railway', title: 'IPRCL Karo Railway Siding — Silo Loading System', scope: 'Earthwork · Bridges · P-way', img: '/assets/photo1.jpg', cls: 'p-a' },
  { cat: 'Roadway', title: 'RCD Koderma Road Improvement', scope: 'Roadway · 0.00–16.40 km', img: '/assets/photo9.jpg', cls: 'p-b' },
  { cat: 'Ash', title: 'TVNL Ash Evacuation — Tenughat TPS', scope: 'Bulk ash transportation', img: '/assets/photo4.jpg', cls: 'p-c' },
  { cat: 'Roadway', title: 'RWD DMFT — Chando Chalkari to Ranigoda', scope: 'Rural road · DMFT scheme', img: '/assets/photo7.jpg', cls: 'p-d' },
  { cat: 'Railway', title: 'Geocell Ground Improvement — Formation', scope: 'Maccaferri systems', img: '/assets/photo6.jpg', cls: 'p-e' },
  { cat: 'Civil', title: 'Slope Protection — Tori–Shivpur', scope: 'Maccaferri geocell', img: '/assets/photo3.jpg', cls: 'p-f' },
]

export const STATS = [
  { num: '230', sup: '', label: 'Total workforce — 100 on-roll + 130 contractual' },
  { num: '100', sup: '', label: 'On-roll permanent employees' },
  { num: '12', sup: '+', label: 'Years of industry expertise' },
]

export const TRUST = [
  { n: '01', b: 'Over a decade', s: 'of proven execution' },
  { n: '02', b: 'Railway & roadways', s: 'infrastructure expertise' },
  { n: '03', b: 'Quality & safety', s: 'committed, timely delivery' },
  { n: '04', b: 'Government & industry', s: 'trusted organisations' },
  { n: '05', b: 'Across India', s: 'proven execution capability' },
]

export const CLIENTS = [
  { abbr: 'RWD', full: 'Rural Works Department' },
  { abbr: 'IPRCL', full: 'Indian Port Rail Corporation Ltd.' },
  { abbr: 'RCD', full: 'Road Construction Department' },
  { abbr: 'ECR', full: 'East Central Railway' },
  { abbr: 'TVNL', full: 'Tenughat Vidyut Nigam Ltd.' },
  { abbr: 'RVNL', full: 'Rail Vikas Nigam Ltd.' },
  { abbr: 'GTFL', full: 'Garware Technical Fibres Ltd.' },
  { abbr: 'AES', full: 'Asian Energy Services Ltd.' },
]

export const TESTIMONIALS = [
  {
    quote: 'Their team coordinated block-time operations flawlessly across the Karo siding stretch — zero incidents, ahead of schedule.',
    name: 'Hansraj Meena',
    role: 'Deputy Chief Engineer · East Central Railway',
  },
  {
    quote: 'The Koderma corridor was delivered to IRS riding-quality spec without a single defect notice.',
    name: 'Barun Kumar',
    role: 'Executive Engineer · RCD Koderma',
  },
  {
    quote: 'Reliable execution, proper documentation, and a team that understands railway safety norms without being reminded.',
    name: 'Project Authority',
    role: 'Tori–Shivpur Railway Line',
  },
]

export const COMPLIANCE = [
  `GSTIN ${COMPANY.gstin}`,
  COMPANY.rdso,
  'Indian Railways Construction Manual',
  'Maccaferri Geocell Authorised',
]

// =====================================================================
//  Services page (services.html) — content
// =====================================================================

// III.01 — eight core competencies (editorial numbered list).
// `em` is the accent fragment of the title; it is rendered with a yellow
// brand underline.
export const SERVICES_FULL = [
  { n: '01', title: 'Railway', em: 'formation', short: 'Railway formation', desc: 'New broad-gauge railway formation — earthwork, drainage, compaction, ballast and final track-bed to RDSO grade.', tags: ['RDSO', 'Earthwork', 'Track bed'], img: '/assets/photo1.jpg' },
  { n: '02', title: 'Track maintenance', em: '& ground improvement', short: 'Track maintenance', desc: 'Rehabilitation of existing tracks with Maccaferri geocell ground improvement and formation strengthening.', tags: ['Rehabilitation', 'Maccaferri geocell', 'Block-time'], img: '/assets/photo9.jpg' },
  { n: '03', title: 'Maccaferri', em: 'reinforced soil wall', short: 'Reinforced soil walls', desc: 'Maccaferri reinforced-soil and gabion retaining structures for embankments and water-fronts.', tags: ['Maccaferri', 'Retaining', 'Embankment'], img: '/assets/photo3.jpg' },
  { n: '04', title: 'Erosion', em: 'control mats', short: 'Erosion control', desc: 'Innovative Maccaferri polymeric and biodegradable mats for slope and surface erosion control.', tags: ['Maccaferri mats', 'Slope', 'Erosion'], img: '/assets/photo6.jpg' },
  { n: '05', title: 'Geocell &', em: 'geogrid', short: 'Geocell & geogrid', desc: 'Maccaferri geocell and geogrid systems for soil stabilisation, load support and ground reinforcement.', tags: ['Maccaferri', 'Soil stabilisation', 'Reinforcement'], img: '/assets/photo4.jpg' },
  { n: '06', title: 'Culvert', em: 'formation', short: 'Culvert formation', desc: 'Construction of culverts, approaches and aprons with allied drainage and protection works.', tags: ['Culvert', 'Drainage', 'Approaches'], img: '/assets/photo7.jpg' },
  { n: '07', title: 'Bridge abutment', em: 'protection', short: 'Bridge protection', desc: 'Bridge abutment and approach protection — retaining, gabion and reinforced-soil systems.', tags: ['Bridge', 'Abutment', 'Protection'], img: '/assets/photo5.jpg' },
  { n: '08', title: 'Civil &', em: 'roadway works', short: 'Civil & roadway', desc: 'Civil and architectural works, roads, RCC drains and pavement construction.', tags: ['Civil', 'Roads', 'RCC drains'], img: '/assets/photo10.jpg' },
]

// III.02 — field strip + the six-stage formation/rehabilitation sequence.
export const RF_FIELD_STRIP = [
  { img: '/assets/photo4.jpg', alt: 'Track dismantling — existing rails and sleepers being removed' },
  { img: '/assets/photo9.jpg', alt: 'Ballast and subgrade excavation with heavy equipment' },
  { img: '/assets/photo6.jpg', alt: 'Ground improvement — geocell laid over freshly cut formation' },
  { img: '/assets/photo1.jpg', alt: 'Ballast spreading and track-bed preparation' },
]

export const RF_SEQUENCE = [
  { n: '01', title: 'Track dismantling', desc: 'Systematic removal of existing railway tracks, rails and sleepers with proper handling and safe material management.' },
  { n: '02', title: 'Ballast & subgrade excavation', desc: 'Excavation and removal of ballast, gravel and weak subgrade materials using specialised heavy equipment and controlled methods.' },
  { n: '03', title: 'Ground improvement', desc: 'Soil stabilisation and embankment strengthening using geocell, geogrid and engineered compaction for improved load-bearing capacity.' },
  { n: '04', title: 'Formation construction', desc: 'Execution of new railway formations with layer-by-layer filling, drainage provision and compaction as per RDSO guidelines.' },
  { n: '05', title: 'Ballast spreading', desc: 'Spreading and profiling of ballast layers along the prepared formation for stable track support.' },
  { n: '06', title: 'Track-bed & P-way', desc: 'Sleeper laying, rail linking, track alignment, packing and final track-bed completion works.' },
]

// III.03 — critical railway infrastructure works.
export const CRITICAL_BANNER = [
  { img: '/assets/photo3.jpg', alt: 'Rail Over Bridge with retaining structures and approach — critical railway infrastructure' },
  { img: '/assets/photo11.jpg', alt: 'Completed twin railway tracks with ballast — block-time delivery' },
]

export const CRITICAL_WORKS = [
  { n: '01', title: '500-m bridge rehabilitation · 72-hour block', desc: 'Time-bound railway block works — ground improvement, embankment protection and formation strengthening — with rapid machinery and manpower deployment across 500-metre stretches.', tag: 'Block-time · Bridge rehab' },
  { n: '02', title: 'Gabion wall construction', desc: 'Gabion walls near water structures for erosion control, slope stabilisation and embankment protection — engineered for high-flow zones and culvert approaches.', tag: 'Erosion · Slope · Embankment' },
  { n: '03', title: 'Water-front reinforced soil walls', desc: 'Reinforced-soil and water-front protection structures for embankment stability, retaining systems and high-strength railway formations.', tag: 'Retaining · Reinforced soil' },
  { n: '04', title: 'Bridge & ROB expertise', desc: 'Specialised experience in Rail Over Bridge (ROB) works, bridge protection, approach and retaining structures — delivered to client and IR-zonal specifications.', tag: 'ROB · Bridge protection' },
]

// IV.01 — four planning phases (with gates) and five execution stages.
export const DELIVERY_PHASES = [
  { n: '01', title: 'Planning & engineering', desc: 'A streamlined execution approach that ensures safety, quality and seamless coordination at every stage.', checks: ['Detailed site survey & technical assessment', 'Design coordination & quantity estimation', 'Project scheduling & milestone planning', 'Resource allocation & risk assessment'] },
  { n: '02', title: 'Procurement & resource management', desc: 'Strategic deployment of manpower, machinery and materials — every vendor and logistics path verified against spec.', checks: ['Strategic manpower deployment & supervision', 'Machinery mobilisation & logistics planning', 'Material procurement & vendor coordination', 'Quality assurance & compliance verification'] },
  { n: '03', title: 'Execution & construction', desc: 'Earthwork through formation, P-way, civil structures and protection systems — continuously monitored for safety and quality.', checks: ['Earthwork, excavation & formation development', 'Railway P-way, roadway & civil construction', 'Geocell, geogrid, gabion & slope protection', 'Continuous monitoring for safety & quality control'] },
  { n: '04', title: 'Inspection & project delivery', desc: 'Final inspection, testing and timely handover with post-execution operational readiness support.', checks: ['Final quality inspection & testing procedures', 'Compliance with client & industry standards', 'Timely project completion & handover', 'Post-execution support & operational readiness'] },
]

export const EXEC_STAGES = [
  { n: '01', title: 'Site preparation', desc: 'Site survey and project planning, resource mobilisation and approvals, equipment and manpower deployment.', tag: 'Survey · Mobilisation · Deployment' },
  { n: '02', title: 'Foundation & groundwork', desc: 'Excavation and base preparation, soil stabilisation using geocell/geogrid, formation and drainage development.', tag: 'Geocell · Geogrid · Drainage' },
  { n: '03', title: 'Construction execution', desc: 'Railway P-way and roadway works, civil structures and protection systems, continuous quality-controlled execution.', tag: 'P-way · Civil · Protection' },
  { n: '04', title: 'Quality & safety control', desc: 'Material testing and inspection, safety compliance monitoring, RDSO and client specification checks.', tag: 'Material testing · Safety · RDSO' },
  { n: '05', title: 'Project completion', desc: 'Final inspection and commissioning, documentation and project handover, post-completion support services.', tag: 'Commissioning · Handover · Support' },
]

// IV.02 — safety & quality assurance standards.
export const SAFETY_STANDARDS = [
  { n: '01', title: 'RDSO compliance', desc: 'All railway formation and rehabilitation activities are executed in strict compliance with RDSO specifications and Indian Railways Construction Manual guidelines — ensuring operational safety, structural integrity and regulatory adherence.' },
  { n: '02', title: 'Safety management protocol', desc: 'Comprehensive safety measures across all project phases — proper site signalling, workforce safety training, certified personal protective equipment (PPE) and emergency-response preparedness during block and operational activities.' },
  { n: '03', title: 'Quality control & assurance', desc: 'A multi-level quality-assurance system runs through every stage of construction — material testing, compaction verification, dimensional inspections and detailed documentation for high engineering standards and long-term durability.' },
  { n: '04', title: 'Environmental & regulatory compliance', desc: 'Work is carried out with a strong commitment to environmental sustainability — effective dust suppression, noise management, responsible waste disposal and protection of surrounding ecological systems per applicable regulations.' },
]
