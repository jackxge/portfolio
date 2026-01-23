import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import snakerobotHero from '@/assets/snakerobot-hero.png';
import spiral05 from '@/assets/spiral-05.png';
import aquanautHero from '@/assets/aquanaut-hero.png';
import motiongen01 from '@/assets/motiongen-01.png';
import dataplatformHero from '@/assets/dataplatform-hero.png';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  number: string;
  size: 'large' | 'medium';
  blur?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "data-platform",
    title: "Enterprise Data Platform",
    category: "Enterprise UX",
    year: "2025",
    image: dataplatformHero,
    number: "01",
    size: 'large',
    blur: true
  },
  {
    id: 2,
    slug: "aquanautviz",
    title: "AquanautViz",
    category: "3D / VR",
    year: "2018",
    image: aquanautHero,
    number: "02",
    size: 'large'
  },
  {
    id: 3,
    slug: "automated-control",
    title: "Automated Control",
    category: "Web Application",
    year: "2018",
    image: spiral05,
    number: "03",
    size: 'medium'
  },
  {
    id: 4,
    slug: "snake-robot",
    title: "Snake Robot",
    category: "UX Design",
    year: "2017",
    image: snakerobotHero,
    number: "04",
    size: 'medium'
  },
  {
    id: 5,
    slug: "motiongen",
    title: "MotionGen",
    category: "Mobile App",
    year: "2014",
    image: motiongen01,
    number: "05",
    size: 'large'
  },
];

const WorkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 md:py-40 bg-foreground text-background">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-background/30 text-[11px] tracking-[0.4em] uppercase block mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-background">
            Projects
          </h2>
        </motion.div>

        {/* Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard 
                project={project} 
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ project, isHovered, onHover, onLeave }: ProjectCardProps) => {
  return (
    <Link to={`/work/${project.slug}`}>
      <motion.article
        className="group cursor-pointer"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-background/5 mb-5">
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${project.blur ? 'blur-[1px]' : ''}`}
            animate={{ 
              scale: isHovered ? 1.03 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Subtle overlay */}
          <motion.div 
            className="absolute inset-0 bg-foreground"
            animate={{ opacity: isHovered ? 0 : 0.15 }}
            transition={{ duration: 0.4 }}
          />

          {/* Project number - corner badge */}
          <div className="absolute top-4 left-4">
            <span className="text-background/60 text-[11px] font-display tracking-wider">
              {project.number}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <motion.h3 
              className="font-display text-lg md:text-xl tracking-tight text-background/80 group-hover:text-background transition-colors duration-400"
            >
              {project.title}
            </motion.h3>
            <span className="text-background/30 text-[11px] tracking-wide">
              {project.category}
            </span>
          </div>
          <span className="text-background/25 text-[11px] font-display">
            {project.year}
          </span>
        </div>
      </motion.article>
    </Link>
  );
};

export default WorkGrid;