import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

// Create tightly-linked cluster options
const createClusterOptions = (particleCount: number): ISourceOptions => ({
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: false, mode: 'push' },
      resize: { enable: true, delay: 0.5 },
    },
    modes: {
      grab: {
        distance: 120,
        links: {
          opacity: 0.6,
        },
      },
    },
  },
  particles: {
    color: { value: 'hsl(30, 8%, 65%)' },
    links: {
      enable: true,
      color: 'hsl(30, 8%, 65%)',
      distance: 250,
      opacity: 0.6,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 0.15, // Slower for tighter grouping
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    number: {
      density: {
        enable: false, // Disable density for fixed count
        width: 1000,
        height: 1000,
      },
      value: particleCount,
    },
    opacity: { value: { min: 0.7, max: 1 } },
    shape: { type: 'circle' },
    size: { value: { min: 2, max: 4 } },
  },
});

const NetworkBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // 3 distinct clusters - bigger areas, fewer dots
  const clusterTopRight = useMemo(() => createClusterOptions(14), []);
  const clusterBottomLeft = useMemo(() => createClusterOptions(14), []);
  const clusterBottomRight = useMemo(() => createClusterOptions(7), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3 tightly-linked clusters positioned asymmetrically */}
      
      {/* Cluster 1: Top-right - largest */}
      <Particles
        id="tsparticles-cluster1"
        className="absolute right-[2%] top-[3%] h-[400px] w-[500px]"
        options={clusterTopRight}
      />
      
      {/* Cluster 2: Bottom-left - medium */}
      <Particles
        id="tsparticles-cluster2"
        className="absolute left-[5%] bottom-[10%] h-[380px] w-[480px]"
        options={clusterBottomLeft}
      />
      
      {/* Cluster 3: Bottom-right - smaller */}
      <Particles
        id="tsparticles-cluster3"
        className="absolute right-[8%] bottom-[15%] h-[240px] w-[300px]"
        options={clusterBottomRight}
      />
    </div>
  );
};

export default NetworkBackground;
