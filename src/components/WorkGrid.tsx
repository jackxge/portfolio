import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import snakerobotHero from '@/assets/snakerobot-hero.png';
import spiral05 from '@/assets/spiral-05.png';
import aquanautHero from '@/assets/aquanaut-hero.png';
import motiongen01 from '@/assets/motiongen-01.png';
import dataplatformHero from '@/assets/dataplatform-hero.png';
import askedpHero from '@/assets/askedp-hero.png';

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
    title: "Unified Enterprise Data Platform",
    category: "Enterprise UX",
    year: "2025",
    image: dataplatformHero,
    number: "01",
    size: 'large',
    blur: true
  },
  {
    id: 2,
    slug: "askedp",
    title: "An AI Application for Enterprise Data Exploration",
    category: "AI / Conversational",
    year: "2024",
    image: askedpHero,
    number: "02",
    size: 'large',
    blur: true
  },
  {
    id: 3,
    slug: "aquanautviz",
    title: "AquanautViz",
    category: "3D / VR",
    year: "2018",
    image: aquanautHero,
    number: "03",
    size: 'large'
  },
  {
    id: 4,
    slug: "automated-control",
    title: "Automated Control",
    category: "Web Application",
    year: "2018",
    image: spiral05,
    number: "04",
    size: 'medium'
  },
  {
    id: 5,
    slug: "snake-robot",
    title: "Snake Robot",
    category: "UX Design",
    year: "2017",
    image: snakerobotHero,
    number: "05",
    size: 'medium'
  },
  {
    id: 6,
    slug: "motiongen",
    title: "MotionGen",
    category: "Mobile App",
    year: "2014",
    image: motiongen01,
    number: "06",
    size: 'large'
  },
];

const WorkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
      <div className="container max-w-[1400px] px-6 md:px-8 lg:px-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
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
        <div className="relative aspect-[16/9] overflow-hidden bg-background/5 mb-3 rounded-sm">
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${project.blur ? 'blur-[1px]' : ''}`}
            animate={{ 
              scale: isHovered ? 1.02 : 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          />
          
          {/* Subtle vignette overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.2 : 0.4 }}
            transition={{ duration: 0.5 }}
          />

          {/* Elegant border reveal */}
          <motion.div 
            className="absolute inset-0 border border-background/0 rounded-sm"
            animate={{ 
              borderColor: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0)',
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1">
          <motion.h3 
            className="font-display text-base lg:text-lg tracking-tight text-background/70 line-clamp-2"
            animate={{ 
              color: isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)',
            }}
            transition={{ duration: 0.15 }}
          >
            {project.title}
          </motion.h3>
          <div className="flex items-center justify-between gap-2">
            <motion.span 
              className="text-[10px] lg:text-[11px] tracking-wide truncate"
              animate={{ 
                color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)',
              }}
              transition={{ duration: 0.15 }}
            >
              {project.category}
            </motion.span>
            <motion.span 
              className="text-[10px] lg:text-[11px] font-display flex-shrink-0"
              animate={{ 
                color: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)',
              }}
              transition={{ duration: 0.15 }}
            >
              {project.year}
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default WorkGrid;