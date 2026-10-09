import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';
import data01 from '@/assets/dataplatform-final-01.png';
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
      <p className="ma-identity">Independent product design<br />Systems, data &amp; AI</p>
      <nav aria-label="Main navigation"><SectionLink id="work">Work</SectionLink><SectionLink id="about">About</SectionLink><SectionLink id="contact">Contact</SectionLink></nav>
    </header>
    <main>
      <section className="ma-hero ma-wrap" aria-labelledby="ma-hero-title">
        <div className="ma-hero-copy"><p className="ma-micro">SELECTED WORK / 2014—2025</p><h1 id="ma-hero-title">Interfaces for<br /><em>complex</em> systems.</h1><p className="ma-hero-lead">I turn complex technical capabilities into clear, considered experiences for the people who use them.</p></div>
        <figure className="ma-hero-figure"><img src={data04} alt="An interface detail from the Unified Enterprise Data Platform" /><figcaption>AN OBSERVATION / ENTERPRISE DATA</figcaption></figure>
        <p className="ma-hero-background">With a background in mechanical engineering and research, my work moves between product design, data systems, and emerging technology.</p>
        <span className="ma-scroll">SCROLL TO EXPLORE ↓</span>
      </section>
      <div id="work" className="ma-work" aria-label="Selected projects">
        <section className="ma-edp ma-wrap" aria-labelledby="ma-edp-title">
          <div className="ma-edp-heading"><p className="ma-index">01 / 06 &nbsp;·&nbsp; FEATURED WORK</p><h2 id="ma-edp-title">Unified Enterprise<br />Data Platform</h2><p className="ma-meta">ENTERPRISE UX / DATA INFRASTRUCTURE / 2025</p><p className="ma-body">A unified experience bringing data discovery, governance, quality, observability, and access into one platform.</p><ProjectLink slug="data-platform">Explore the project</ProjectLink></div>
          <figure className="ma-edp-primary ma-image"><img loading="lazy" src={data01} alt="Unified Enterprise Data Platform interface" /><figcaption>01 / A UNIFIED PLATFORM</figcaption></figure>
          <figure className="ma-edp-secondary ma-image"><img loading="lazy" src={data04} alt="Additional original Enterprise Data Platform interface view" /><figcaption>INTERFACE DETAIL</figcaption></figure>
          <p className="ma-edp-note ma-note"><span>PLATFORM SCOPE</span>Discovery, data quality, observability, governance, and access are presented within a shared product experience.</p>
        </section>
        <section className="ma-statement ma-wrap" aria-label="Design point of view"><span className="ma-micro">AN INTERLUDE / 01</span><p>Clarity is not the absence<br />of <em>complexity.</em></p><small>It is the care taken to make complexity understandable.</small></section>
        <section className="ma-askedp ma-wrap" aria-labelledby="ma-askedp-title">
          <figure className="ma-askedp-primary ma-image"><img loading="lazy" src={askedp01} alt="Original AskEDP AI assistant interface" /><figcaption>02 / CONVERSATIONAL EXPLORATION</figcaption></figure>
          <div className="ma-askedp-heading"><p className="ma-index">02 / 06</p><h2 id="ma-askedp-title">AskEDP</h2><p className="ma-meta">AI / ENTERPRISE DATA / 2025</p><p className="ma-body">An AI application for enterprise data exploration, designed to help people find answers and understand data systems through conversation.</p><ProjectLink slug="askedp">Explore the project</ProjectLink></div>
          <p className="ma-askedp-note ma-note"><span>INTERACTION FOCUS</span>Natural-language questions provide an entry point into data discovery and investigation, rather than requiring users to begin with a specific tool or view.</p>
          <figure className="ma-askedp-secondary ma-image"><img loading="lazy" src={askedp03} alt="Second original AskEDP interface view" /><figcaption>DETAIL / AI-ASSISTED EXPLORATION</figcaption></figure>
        </section>
        <section className="ma-aquanaut ma-wrap" aria-labelledby="ma-aquanaut-title">
          <div className="ma-aquanaut-heading"><p className="ma-index">03 / 06</p><h2 id="ma-aquanaut-title">AquanautViz</h2><p className="ma-meta">3D VISUALIZATION / UNDERWATER ROBOTICS / 2018</p><p className="ma-body">Visualizing underwater robotics and offshore operations through spatial interfaces.</p><ProjectLink slug="aquanautviz">Explore the project</ProjectLink></div>
          <figure className="ma-aquanaut-primary ma-image"><img loading="lazy" src={aquanaut} alt="AquanautViz underwater robotics visualization" /><figcaption>03 / AN ENVIRONMENT BEYOND THE SCREEN</figcaption></figure>
          <p className="ma-aquanaut-note ma-note"><span>SPATIAL CONTEXT</span>Three-dimensional visualization provides a way to inspect complex underwater environments and the position of robotic systems within them.</p>
          <figure className="ma-aquanaut-secondary ma-image"><img loading="lazy" src={aquanautDetail} alt="Additional AquanautViz visualization" /><figcaption>VISUALIZATION STUDY</figcaption></figure>
        </section>
        <section className="ma-archive ma-wrap" aria-labelledby="ma-archive-title">
          <div className="ma-archive-intro"><p className="ma-index">04—06 / 06</p><h2 id="ma-archive-title">Research<br /><em>archive.</em></h2><p>Earlier work exploring the relationship between engineering, robotics, and interactive systems.</p></div>
          <div className="ma-archive-gallery">{archive.map(project => <article className={`ma-archive-entry ma-archive-entry-${project.number}`} key={project.slug}><Link to={`/work/${project.slug}`} aria-label={`View ${project.title}`} onClick={() => trackEvent('select_project', { section: 'ma_archive', project_slug: project.slug })}><figure className="ma-image"><img loading="lazy" src={project.image} alt={`${project.title} project artwork`} /><figcaption>{project.number} / {project.year}</figcaption></figure><h3>{project.title}<span aria-hidden="true">↗</span></h3></Link><p>{project.category}</p></article>)}</div>
        </section>
      </div>
      <section id="about" className="ma-about ma-wrap" aria-labelledby="ma-about-title"><p className="ma-index">A NOTE FROM THE DESIGNER</p><div className="ma-about-content"><h2 id="ma-about-title">About</h2><p className="ma-about-lead">From understanding how things <em>work</em> to shaping how they are <em>experienced.</em></p><p>I'm a product designer with a research and mechanical engineering background, focused on large-scale data platforms, AI products, and complex technical systems.</p><p>My practice connects systems thinking and technical depth with intuitive, deliberate interaction design.</p></div></section>
      <footer id="contact" className="ma-footer ma-wrap"><p>JACK GE © {new Date().getFullYear()}</p><p>LOS ANGELES, CALIFORNIA</p><a href="mailto:jack@jackge.com">GET IN TOUCH ↗</a></footer>
    </main>
  </div>;
}
