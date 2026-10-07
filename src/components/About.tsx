const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
              About
            </p>
            <h2 className="text-display-lg font-display mb-8">
              Design at
              <br />
              scale
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Lead Product Designer with deep expertise in system-level design for 
              large-scale data platforms, machine learning infrastructure, and 
              enterprise AI products.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in translating complex technical systems into intuitive 
              experiences that drive measurable business outcomes from defining 
              product vision to establishing design frameworks.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Background in engineering and applied AI enables me to work at the 
              intersection of technical domain and user experience and build 
              trust in AI systems through accurate and human-centered 
              design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
