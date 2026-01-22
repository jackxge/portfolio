import { motion } from 'framer-motion';

const ImpactThemes = () => {
  const themes = [
    {
      number: '01',
      title: 'Design Judgment',
      description: 'Navigating complex technical and organizational constraints with clarity and conviction.',
    },
    {
      number: '02',
      title: 'Risk Reduction',
      description: 'Problem framing and decision clarity that reduces long-term execution risk.',
    },
    {
      number: '03',
      title: 'Trust-Building',
      description: 'Creating confidence in AI-driven and data-intensive products through transparency.',
    },
    {
      number: '04',
      title: 'Cross-Functional Alignment',
      description: 'Bridging product, engineering, and stakeholders at scale.',
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-foreground text-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="text-background/40 text-xs tracking-[0.4em] uppercase mb-4">
            What I Bring
          </p>
          <h2 className="text-display-md md:text-display-lg font-display leading-[0.9]">
            Impact Themes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-background/10">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.number}
              className="bg-foreground p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-background/30 font-display text-sm mb-6 block">
                {theme.number}
              </span>
              <h3 className="text-xl md:text-2xl font-display mb-4">
                {theme.title}
              </h3>
              <p className="text-background/60 text-sm leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactThemes;
