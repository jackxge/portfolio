import { Link } from "react-router-dom";
import askedpHero from "@/assets/askedp-hero.png";
import aquanautHero from "@/assets/aquanaut-hero.png";
import dataplatformHero from "@/assets/dataplatform-hero.png";
import motiongen01 from "@/assets/motiongen-01.png";
import snakerobotHero from "@/assets/snakerobot-hero.png";
import spiral05 from "@/assets/spiral-05.png";
import { trackEvent } from "@/lib/analytics";

const projects = [
  { slug: "data-platform", title: "Unified Enterprise Data Platform", category: "Enterprise UX", year: "2025", image: dataplatformHero },
  { slug: "askedp", title: "AI Application for Enterprise Data Exploration", category: "AI / Conversational", year: "2025", image: askedpHero },
  { slug: "aquanautviz", title: "AquanautViz", category: "3D / VR", year: "2018", image: aquanautHero },
  { slug: "automated-control", title: "Automated Control", category: "Web Application", year: "2018", image: spiral05 },
  { slug: "snake-robot", title: "Snake Robot", category: "UX Design", year: "2017", image: snakerobotHero },
  { slug: "motiongen", title: "MotionGen", category: "Mobile App", year: "2014", image: motiongen01 },
];

const EditorialWork = () => (
  <section className="editorial-work" id="work" aria-labelledby="work-heading">
    <div className="editorial-shell">
      <div className="editorial-topline">
        <span>02 / Selected work</span>
        <span>Archive — 06 projects</span>
      </div>

      <div className="editorial-work-heading">
        <h2 id="work-heading">
          Selected<br /><i>Work</i><span className="editorial-period">.</span>
        </h2>
        <p>
          A selection of product design work across enterprise systems, AI,
          immersive interfaces, and engineering tools.
        </p>
      </div>

      <div className="editorial-project-list">
        {projects.map((project, index) => (
          <Link
            to={`/work/${project.slug}`}
            key={project.slug}
            className="editorial-project"
            onClick={() =>
              trackEvent("select_project", {
                section: "work_grid",
                project_slug: project.slug,
                project_title: project.title,
                project_year: project.year,
              })
            }
          >
            <span className="editorial-project-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="editorial-project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="editorial-project-copy">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
            <span className="editorial-project-year">{project.year}</span>
            <span className="editorial-project-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>

      <div className="editorial-list-end">
        <span>End of selected work</span>
        <span>06 / 06</span>
      </div>
    </div>
  </section>
);

export default EditorialWork;
