import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';
import data01 from '@/assets/dataplatform-final-01.png';
import data04 from '@/assets/dataplatform-final-04.png';
import askedp01 from '@/assets/askedp-01.png';
import askedp03 from '@/assets/askedp-03.png';
import aquanaut from '@/assets/aquanaut-hero.png';
import control from '@/assets/spiral-05.png';
import snake from '@/assets/snakerobot-hero.png';
import motiongen from '@/assets/motiongen-01.png';
import '../zen-home.css';

const archive = [
  { number: '03', title: 'AquanautViz', category: '3D visualization', year: '2018', slug: 'aquanautviz', image: aquanaut },
  { number: '04', title: 'Automated Control', category: 'Web application', year: '2018', slug: 'automated-control', image: control },
  { number: '05', title: 'Snake Robot', category: 'UX design', year: '2017', slug: 'snake-robot', image: snake },
  { number: '06', title: 'MotionGen', category: 'Mobile app', year: '2014', slug: 'motiongen', image: motiongen },
];

function ProjectLink({ slug, children }: { slug: string; children: ReactNode }) {
  return <Link className="zen-project-link" to={`/work/${slug}`} onClick={() => trackEvent('select_project', { section: 'zen_home', project_slug: slug })}>{children}<span aria-hidden="true">↗</span></Link>;
}

function SectionLink({ id, children }: { id: string; children: ReactNode }) {
  return <a href={`#${id}`} onClick={(event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView();
  }}>{children}</a>;
}

export default function Index() {
  return (
    <div className="zen-page">
      <header className="zen-header zen-wrap">
        <Link to="/" className="zen-name" aria-label="Jack Ge homepage">JACK GE</Link>
        <span className="zen-role">Product Designer<br />Data Platforms / AI / Complex Systems</span>
        <nav aria-label="Main navigation">
          <SectionLink id="work">Work</SectionLink>
          <SectionLink id="about">About</SectionLink>
          <SectionLink id="contact">Contact</SectionLink>
        </nav>
      </header>
      <main>
        <section className="zen-intro zen-wrap" aria-labelledby="intro-heading">
          <div className="zen-intro-copy">
            <span className="zen-folio">Selected works, 2014—2025</span>
            <h1 id="intro-heading">I design interfaces<br />for complex systems.</h1>
            <p className="zen-intro-summary">Turning powerful data and AI capabilities into clear, intuitive experiences at enterprise scale.</p>
            <p className="zen-intro-background">A product designer with a background in mechanical engineering and research, working across systems, data, and emerging technologies.</p>
          </div>
          <figure className="zen-intro-image">
            <img src={data04} alt="Detail from the Enterprise Data Platform project" />
            <figcaption>Fig. 01 — Detail / Enterprise Data Platform</figcaption>
          </figure>
          <span className="zen-scroll-note">Scroll to explore &darr;</span>
        </section>

        <div id="work" className="zen-work" aria-label="Selected work">
          <section className="zen-feature zen-feature-one zen-wrap" aria-labelledby="platform-heading">
            <div className="zen-feature-copy">
              <span className="zen-index">01 / 06</span>
              <h2 id="platform-heading">Unified Enterprise<br />Data Platform</h2>
              <p className="zen-category">Enterprise UX / Data infrastructure / 2025</p>
              <p className="zen-description">A unified experience for data discovery, governance, quality, observability, and access.</p>
              <ProjectLink slug="data-platform">Explore the project</ProjectLink>
            </div>
            <figure className="zen-plate zen-platform-main"><img loading="lazy" src={data01} alt="Original Enterprise Data Platform interface" /><figcaption>01 — Interface study</figcaption></figure>
            <figure className="zen-plate zen-platform-detail"><img loading="lazy" src={data04} alt="Additional interface from the data platform case study" /><figcaption>Detail — Platform experience</figcaption></figure>
            <p className="zen-aside">Designing a shared language<br />for complex enterprise data.</p>
          </section>

          <section className="zen-feature zen-feature-two zen-wrap" aria-labelledby="askedp-heading">
            <figure className="zen-plate zen-askedp-main"><img loading="lazy" src={askedp01} alt="Original AskEDP AI assistant interface" /><figcaption>02 — Conversational exploration</figcaption></figure>
            <div className="zen-feature-copy">
              <span className="zen-index">02 / 06</span>
              <h2 id="askedp-heading">AskEDP</h2>
              <p className="zen-category">AI / Conversational interface / 2025</p>
              <p className="zen-description">An AI application for enterprise data exploration, helping users find answers and understand complex data systems.</p>
              <ProjectLink slug="askedp">Explore the project</ProjectLink>
            </div>
            <figure className="zen-plate zen-askedp-detail"><img loading="lazy" src={askedp03} alt="Additional original AskEDP interface view" /><figcaption>Detail — AI-assisted exploration</figcaption></figure>
          </section>

          <section className="zen-archive zen-wrap" aria-labelledby="archive-heading">
            <div className="zen-archive-intro"><span className="zen-index">03—06 / 06</span><h2 id="archive-heading">Other work</h2><p>Earlier explorations in visualization, robotics, and interaction.</p></div>
            <div className="zen-archive-items">
              {archive.map(project => <article className="zen-archive-item" key={project.slug}>
                <Link to={`/work/${project.slug}`} onClick={() => trackEvent('select_project', { section: 'zen_archive', project_slug: project.slug })} aria-label={`View ${project.title}`}>
                  <figure><img loading="lazy" src={project.image} alt={`${project.title} project artwork`} /><figcaption>{project.number} / {project.year}</figcaption></figure>
                  <h3>{project.title}<span aria-hidden="true">↗</span></h3>
                </Link><p>{project.category}</p>
              </article>)}
            </div>
          </section>
        </div>

        <section id="about" className="zen-about zen-wrap" aria-labelledby="about-heading">
          <span className="zen-index">A note from the designer</span>
          <div><h2 id="about-heading">About</h2><p>Lead Product Designer with expertise in system-level design for large-scale data platforms, machine learning infrastructure, and enterprise AI products.</p><p>I translate complex technical systems into intuitive, trustworthy experiences by connecting product thinking with engineering depth.</p></div>
        </section>
        <footer id="contact" className="zen-footer zen-wrap"><span>Jack Ge © {new Date().getFullYear()}</span><span>Los Angeles, California</span><a href="mailto:jack@jackge.com">Get in touch ↗</a></footer>
      </main>
    </div>
  );
}
