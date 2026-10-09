import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';
import dataHero from '@/assets/dataplatform-final-01.png';
import dataDetail from '@/assets/dataplatform-final-05.png';
import openingProcess from '@/assets/snakerobot-notes.jpg';
import aboutProcess from '@/assets/snakerobot-sketches.jpg';
import askedpMain from '@/assets/askedp-02.png';
import askedpDetail from '@/assets/askedp-03.png';
import aquanautMain from '@/assets/aquanaut-hero.png';
import aquanautDetail from '@/assets/aquanaut-02.png';
import controlMain from '@/assets/spiral-04.png';
import controlDetail from '@/assets/spiral-ia-compare.jpeg';
import snakeMain from '@/assets/snakerobot-hero.png';
import motiongenMain from '@/assets/motiongen-01.png';
import '../zen-home.css';

function ProjectLink({ slug, children = 'View project' }: { slug: string; children?: ReactNode }) {
  return (
    <Link className="zen-project-link" to={`/work/${slug}`} onClick={() => trackEvent('select_project', { section: 'reference_home', project_slug: slug })}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

function SectionLink({ id, children }: { id: string; children: ReactNode }) {
  return <a href={`#${id}`} onClick={(event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView();
  }}>{children}</a>;
}

function ProjectIntro({ number, title, meta, description, slug }: {
  number: string;
  title: ReactNode;
  meta: string;
  description: string;
  slug: string;
}) {
  return (
    <div className="zen-project-intro">
      <span className="zen-number">{number}</span>
      <span className="zen-rule" aria-hidden="true" />
      <h2>{title}</h2>
      <p className="zen-meta">{meta}</p>
      <p className="zen-description">{description}</p>
      <ProjectLink slug={slug} />
    </div>
  );
}

export default function Index() {
  return (
    <div className="zen-page">
      <header className="zen-header zen-shell">
        <Link to="/" className="zen-name" aria-label="Jack Ge homepage">JACK GE</Link>
        <nav aria-label="Main navigation">
          <SectionLink id="work">Work</SectionLink>
          <SectionLink id="about">About</SectionLink>
          <a href="https://intuitivemachinelearning.com" target="_blank" rel="noreferrer">Thinking</a>
          <SectionLink id="contact">Contact</SectionLink>
        </nav>
        <p className="zen-role">Product Designer<br />Data Platforms / AI / Complex Systems</p>
      </header>

      <main>
        <section className="zen-opening zen-shell" aria-labelledby="intro-heading">
          <div className="zen-opening-copy">
            <h1 id="intro-heading">I design<br />interfaces for<br />complex systems.</h1>
            <span className="zen-rule" aria-hidden="true" />
            <p>Turning powerful data and AI<br />capabilities into clear, intuitive<br />experiences at enterprise scale.</p>
          </div>
          <figure className="zen-opening-image"><img src={openingProcess} alt="Design process notes" /></figure>
          <p className="zen-scroll">SCROLL<br />TO EXPLORE</p>
        </section>

        <div id="work">
          <section className="zen-project zen-data zen-shell" aria-label="Enterprise Data Platform">
            <ProjectIntro number="01" title={<>Enterprise<br />Data Platform</>} meta="Data integration / Governance / AI" description="A unified platform for data integration, governance, and AI-ready infrastructure at enterprise scale." slug="data-platform" />
            <figure className="zen-data-main"><img src={dataHero} alt="Enterprise Data Platform home interface" /></figure>
            <figure className="zen-data-detail"><img src={dataDetail} alt="Enterprise Data Platform catalog detail" /></figure>
            <div className="zen-data-note"><h3>From fragmented tools<br />to a unified experience.</h3><p>I led the design of a unified data platform that brings together discovery, catalog, quality, observability, and access.</p><span className="zen-rule" aria-hidden="true" /></div>
          </section>

          <section className="zen-project zen-askedp zen-shell" aria-labelledby="askedp-heading">
            <ProjectIntro number="02" title={<span id="askedp-heading">AskEDP</span>} meta="AI assistant / Natural language / Data exploration" description="An AI assistant that helps enterprise users find, understand, and work with data." slug="askedp" />
            <figure className="zen-askedp-main"><img src={askedpMain} alt="AskEDP conversational data assistant" /></figure>
            <figure className="zen-askedp-detail"><img src={askedpDetail} alt="AskEDP data relationship view" /></figure>
          </section>

          <section className="zen-project zen-aquanaut zen-shell" aria-labelledby="aquanaut-heading">
            <ProjectIntro number="03" title={<span id="aquanaut-heading">AquanautViz</span>} meta="3D visualization / Underwater robotics" description="Visualization system for underwater robots and offshore operations." slug="aquanautviz" />
            <figure className="zen-aquanaut-main"><img src={aquanautMain} alt="Aquanaut underwater robot visualization" /></figure>
            <figure className="zen-aquanaut-detail"><img src={aquanautDetail} alt="Aquanaut system interface" /></figure>
          </section>

          <section className="zen-project zen-control zen-shell" aria-labelledby="control-heading">
            <ProjectIntro number="04" title={<span id="control-heading">Automated Control</span>} meta="System design / Offshore safety" description="Autonomous control system for safety-critical offshore operations." slug="automated-control" />
            <figure className="zen-control-main"><img src={controlMain} alt="Automated pipe handling control interface" /></figure>
            <figure className="zen-control-detail"><img src={controlDetail} alt="Automated control workflow interface" /></figure>
          </section>

          <section className="zen-project zen-pair zen-shell" aria-label="Additional work">
            <article className="zen-pair-project zen-pair-left">
              <ProjectIntro number="05" title="Snake Robot" meta="Product design / Robotics" description="Responsive control and inspection tools for an autonomous pipe robot." slug="snake-robot" />
              <figure><img src={snakeMain} alt="Snake Robot product" /></figure>
            </article>
            <article className="zen-pair-project zen-pair-right">
              <ProjectIntro number="06" title="MotionGen" meta="Research / Visualization" description="Motion generation and simulation for mechanical linkage systems." slug="motiongen" />
              <figure><img src={motiongenMain} alt="MotionGen linkage visualization" /></figure>
            </article>
          </section>
        </div>

        <section id="about" className="zen-about zen-shell" aria-labelledby="about-heading">
          <figure><img src={aboutProcess} alt="Early interface sketches from the design process" /></figure>
          <div className="zen-about-copy">
            <h2 id="about-heading">About</h2>
            <span className="zen-rule" aria-hidden="true" />
            <p>I'm Jack, a product designer with a background in mechanical engineering and a PhD in robotics. I’m interested in how complex systems can be made more understandable, accessible, and human.</p>
            <SectionLink id="contact">More about me <span aria-hidden="true">→</span></SectionLink>
          </div>
          <address id="contact" className="zen-contact">
            <a href="mailto:jack@jackge.com">jack@jackge.com</a>
            <a href="https://linkedin.com/in/jackge" target="_blank" rel="noreferrer">/in/jackge</a>
            <a href="https://intuitivemachinelearning.com" target="_blank" rel="noreferrer">/IntuitiveMachineLearning</a>
            <a href="https://instagram.com/machinelearning" target="_blank" rel="noreferrer">@machinelearning</a>
          </address>
        </section>
      </main>

      <footer className="zen-footer zen-shell"><span>© {new Date().getFullYear()} JACK GE</span><span>Toronto → Los Angeles</span></footer>
    </div>
  );
}
