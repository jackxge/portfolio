const About = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "20+", label: "Products Shipped" },
    { value: "B2B", label: "Enterprise Focus" },
  ];

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
            
            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Lead Product Designer with deep expertise in system-level design for 
              large-scale data platforms, machine learning infrastructure, and 
              enterprise AI products.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in translating complex technical systems into intuitive 
              experiences that drive measurable business outcomes. From defining 
              product vision to establishing design governance frameworks, I've 
              led design strategy for products used by millions of users and 
              generating hundreds of millions in revenue.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Background in engineering and applied AI enables me to work at the 
              intersection of technical feasibility and user experience—building 
              trust in AI systems through transparency, correctness, and human-centered 
              design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
