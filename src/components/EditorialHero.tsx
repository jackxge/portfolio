import { Link } from "react-router-dom";
import dataplatformHero from "@/assets/dataplatform-hero.png";
import { trackEvent } from "@/lib/analytics";

const EditorialHero = () => (
  <section className="editorial-hero" aria-labelledby="editorial-title">
    <div className="editorial-shell">
      <div className="editorial-topline">
        <span>01 / Introduction</span>
        <span>Product design — data, AI &amp; systems</span>
      </div>

      <div className="editorial-hero-grid">
        <div className="editorial-hero-side">
          <span>Jack Ge</span>
          <span>Lead Product Designer</span>
          <span>Selected works / 2014—2025</span>
        </div>

        <div className="editorial-hero-main">
          <h1 id="editorial-title">
            Designing<br />clarity in<br /><em>complexity<span>.</span></em>
          </h1>
          <div className="editorial-intro">
            <p>
              System-level design for large-scale data platforms, machine learning
              infrastructure, and enterprise AI products.
            </p>
            <a
              href="#work"
              onClick={() => trackEvent("cta_click", { section: "hero", target: "work" })}
            >
              Explore selected work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <figure className="editorial-feature">
        <img
          src={dataplatformHero}
          alt="Unified Enterprise Data Platform interface — featured work"
        />
        <figcaption>
          <span>Fig. 01 — Unified Enterprise Data Platform</span>
          <span>Designed for clarity at scale</span>
        </figcaption>
      </figure>

      <div className="editorial-feature-bottom">
        <span>Research / structure / interaction</span>
        <Link
          to="/work/data-platform"
          onClick={() =>
            trackEvent("select_project", {
              section: "hero",
              project_slug: "data-platform",
            })
          }
        >
          View featured case study ↗
        </Link>
      </div>
    </div>
  </section>
);

export default EditorialHero;
