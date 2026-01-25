import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-24 relative overflow-hidden">
      {/* Animated network background */}
      <NetworkBackground />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
                Lead Product Designer
              </p>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1 
              className="text-display-xl font-display text-foreground mb-2 leading-[0.9]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting
            </motion.h1>
            <motion.h1 
              className="text-display-xl font-display leading-[0.9] mb-2"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">
                Data & AI
              </span>
            </motion.h1>
            <motion.h1 
              className="text-display-xl font-display text-foreground leading-[0.9]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              platforms
            </motion.h1>
          </div>
          
          <motion.div 
            className="md:col-span-4 md:pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-base text-foreground/70 leading-relaxed mb-6">
              System-level design for large-scale data platforms. 
              Framing complex problems and aligning cross-functional teams.
            </p>
            
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-20 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {[
                { label: 'System Design', icon: '◇' },
                { label: 'Data & AI/ML', icon: '◇' },
                { label: 'Cross-Functional Leadership', icon: '◇' },
              ].map((item, index) => (
                <motion.span
                  key={item.label}
                  className="relative group cursor-default flex items-center gap-2 text-xs tracking-[0.15em] text-foreground/60 uppercase font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </motion.span>
              ))}
            </div>
            <motion.a
              href="#work"
              onClick={() => trackEvent('cta_click', { section: 'hero', target: 'work' })}
              className="group inline-flex items-center gap-4 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ x: 5 }}
            >
              <span className="text-sm tracking-wide font-medium">View Selected Work</span>
              <motion.span 
                className="w-12 h-px bg-foreground"
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
