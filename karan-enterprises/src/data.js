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

// Gallery & Blogs become their own pages in the next build phase; until then
// the nav only links to sections that actually exist on the home page.
export const NAV_LINKS = [
  { label: 'Home', href: '#home', n: '01' },
  { label: 'About', href: '#about', n: '02' },
  { label: 'Services', href: '#services', n: '03' },
  { label: 'Projects', href: '#projects', n: '04' },
  { label: 'Contact', href: '#quote', n: '05' },
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
