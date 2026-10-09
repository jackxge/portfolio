import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';
import data01 from '@/assets/dataplatform-final-01.png';
import data02 from '@/assets/dataplatform-final-02.png';
import data04 from '@/assets/dataplatform-final-04.png';
import askedp01 from '@/assets/askedp-01.png';
import askedp03 from '@/assets/askedp-03.png';
import aquanaut from '@/assets/aquanaut-hero.png';
import aquanautDetail from '@/assets/aquanaut-02.png';
import control from '@/assets/spiral-05.png';
import snake from '@/assets/snakerobot-hero.png';
import motiongen from '@/assets/motiongen-01.png';
import '../zen-home.css';

const archive = [
  { number: '04', title: 'Automated Control', category: 'Web application', year: '2018', slug: 'automated-control', image: control },
  { number: '05', title: 'Snake Robot', category: 'UX design', year: '2017', slug: 'snake-robot', image: snake },
  { number: '06', title: 'MotionGen', category: 'Mobile app', year: '2014', slug: 'motiongen', image: motiongen },
];
function ProjectLink({ slug, children }: { slug: string; children: ReactNode }) {
  return <Link className="ma-project-link" to={`/work/${slug}`} onClick={() => trackEvent('select_project', { section: 'ma_home', project_slug: slug })}>{children}<span aria-hidden="true">↗</span></Link>;
}
function SectionLink({ id, children }: { id: string; children: ReactNode }) {
  return <a href={`#${id}`} onClick={event => { event.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}>{children}</a>;
}
export default function Index() {
  return <div className="ma-page">
    <header className="ma-header ma-wrap">
      <Link className="ma-name" to="/" aria-label="Jack Ge homepage">JACK GE</Link>
      <p className="ma-identity">Product design<br />Systems, data &amp; AI</p>
      <nav aria-label="Main navigation"><SectionLink id="work">Work</SectionLink><SectionLink id="about">About</SectionLink><SectionLink id="contact">Contact</SectionLink></nav>
    </header>
    <main>
      <section className="ma-hero ma-wrap" aria-labelledby="ma-hero-title">
        <div className="ma-hero-copy"><p className="ma-micro">Selected works / 2014—2025</p><h1 id="ma-hero-title">Interfaces for<br />complex systems.</h1><p className="ma-hero-lead">I turn complex technical capabilities into clear, considered experiences for the people who use them.</p></div>
        <figure className="ma-hero-figure"><div className="ma-hero-crop"><img src={data04} alt="Enterprise data interface detail from the Unified Enterprise Data Platform" /></div><figcaption>Detail / Enterprise Data Platform</figcaption></figure>
        <div className="ma-hero-observation"><span className="ma-micro">Observation / Enterprise Data</span><p>Enterprise systems are often made harder by how they speak.</p><small>A clear interface begins with structure: how information is grouped, labeled, and made understandable.</small></div>
        <span className="ma-scroll">Scroll to explore ↓</span>
      </section>
      <div id="work" className="ma-work" aria-label="Selected projects">
        <section className="ma-edp ma-wrap" aria-labelledby="ma-edp-title">
          <div className="ma-edp-heading"><p className="ma-index">01 / 06 · Featured work</p><h2 id="ma-edp-title">Unified Enterprise<br />Data Platform</h2><p className="ma-meta">Enterprise UX / Data infrastructure / 2025</p><p className="ma-body">A unified experience bringing data discovery, governance, quality, observability, and access into one platform.</p><ProjectLink slug="data-platform">Explore the project</ProjectLink></div>
          <figure className="ma-edp-primary ma-image"><img loading="lazy" src={data01} alt="Original Unified Enterprise Data Platform interface" /><figcaption>01 / A unified platform</figcaption></figure>
          <figure className="ma-edp-secondary ma-image"><img loading="lazy" src={data02} alt="Enterprise Data Platform architecture overview" /><figcaption>Detail / Platform architecture</figcaption></figure>
          <p className="ma-edp-note ma-note"><span>Platform scope</span>Discovery, quality, observability, governance, and access are presented within a shared product experience.</p>
        </section>
        <section className="ma-statement ma-wrap" aria-label="Interlude"><span className="ma-micro">Interlude</span><p>Clarity is not the absence<br />of complexity.</p><small>It is the care taken to make complexity understandable.</small></section>
        <section className="ma-askedp ma-wrap" aria-labelledby="ma-askedp-title">
          <figure className="ma-askedp-primary ma-image"><img loading="lazy" src={askedp01} alt="Original AskEDP AI assistant interface" /><figcaption>02 / Conversational exploration</figcaption></figure>
          <div className="ma-askedp-heading"><p className="ma-index">02 / 06</p><h2 id="ma-askedp-title">AskEDP</h2><p className="ma-meta">AI / Enterprise data / 2025</p><p className="ma-body">An AI application for enterprise data exploration, designed to help people find answers and understand data systems through conversation.</p><ProjectLink slug="askedp">Explore the project</ProjectLink></div>
          <p className="ma-askedp-note ma-note"><span>Interaction focus</span>Natural-language questions offer an entry point into data discovery and investigation without requiring users to begin in a specific tool or view.</p>
          <figure className="ma-askedp-secondary ma-image"><img loading="lazy" src={askedp03} alt="Original AskEDP interface detail" /><figcaption>Detail / AI-assisted exploration</figcaption></figure>
        </section>
        <section className="ma-aquanaut ma-wrap" aria-labelledby="ma-aquanaut-title">
          <div className="ma-aquanaut-heading"><p className="ma-index">03 / 06</p><h2 id="ma-aquanaut-title">AquanautViz</h2><p className="ma-meta">3D visualization / Underwater robotics / 2018</p><p className="ma-body">Visualizing underwater robotics and offshore operations through spatial interfaces.</p><ProjectLink slug="aquanautviz">Explore the project</ProjectLink></div>
          <figure className="ma-aquanaut-primary ma-image"><img loading="lazy" src={aquanaut} alt="Original AquanautViz underwater robotics visualization" /><figcaption>03 / Spatial visualization</figcaption></figure>
          <p className="ma-aquanaut-note ma-note"><span>Spatial context</span>Three-dimensional visualization makes it possible to examine underwater environments and robotic systems in their spatial context.</p>
          <figure className="ma-aquanaut-secondary ma-image"><img loading="lazy" src={aquanautDetail} alt="Additional original AquanautViz visualization" /><figcaption>Detail / Visualization study</figcaption></figure>
        </section>
        <section className="ma-archive ma-wrap" aria-labelledby="ma-archive-title">
          <div className="ma-archive-intro"><p className="ma-index">04—06 / 06</p><h2 id="ma-archive-title">Research<br />archive.</h2><p>Earlier investigations into engineering, robotics, and interactive systems.</p></div>
          <div className="ma-archive-gallery">{archive.map(project => <article className={`ma-archive-entry ma-archive-entry-${project.number}`} key={project.slug}><Link to={`/work/${project.slug}`} aria-label={`View ${project.title}`} onClick={() => trackEvent('select_project', { section: 'ma_archive', project_slug: project.slug })}><figure className="ma-image"><img loading="lazy" src={project.image} alt={`${project.title} project artwork`} /><figcaption>{project.number} / {project.year}</figcaption></figure><h3>{project.title}<span aria-hidden="true">↗</span></h3></Link><p>{project.category}</p></article>)}</div>
        </section>
      </div>
      <section id="about" className="ma-about ma-wrap" aria-labelledby="ma-about-title"><p className="ma-index">About the designer</p><div className="ma-about-content"><h2 id="ma-about-title">About</h2><p className="ma-about-lead">From understanding how things work to shaping how they are experienced.</p><p>I'm a product designer with a research and mechanical engineering background, focused on large-scale data platforms, AI products, and complex technical systems.</p><p>My practice connects systems thinking and technical depth with intuitive, deliberate interaction design.</p></div></section>
      <footer id="contact" className="ma-footer ma-wrap"><p>Jack Ge © {new Date().getFullYear()}</p><p>Los Angeles, California</p><a href="mailto:jack@jackge.com">Get in touch ↗</a></footer>
    </main>
  </div>;
}
