import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

// Automated Control images
import spiral04 from '@/assets/spiral-04.png';
import spiral05 from '@/assets/spiral-05.png';
import spiral06 from '@/assets/spiral-06.png';
import spiralResults from '@/assets/spiral-results.png';
import spiralIaCompare from '@/assets/spiral-ia-compare.jpeg';

// AquanautViz images
import aquanaut01 from '@/assets/aquanaut-01.png';
import aquanaut02 from '@/assets/aquanaut-02.png';
import aquanaut03 from '@/assets/aquanaut-03.png';
import aquanaut04 from '@/assets/aquanaut-04.png';
import aquanautHero from '@/assets/aquanaut-hero.png';

// MotionGen images
import motiongen01 from '@/assets/motiongen-01.png';

// Snake Robot images
import snakerobotNotes from '@/assets/snakerobot-notes.jpg';
import snakerobotSketches from '@/assets/snakerobot-sketches.jpg';
import snakerobotResponsive from '@/assets/snakerobot-responsive.png';
import snakerobotInterface from '@/assets/snakerobot-interface.png';
import snakerobotWireframe from '@/assets/snakerobot-wireframe.jpg';
import snakerobotLayouts from '@/assets/snakerobot-layouts.jpg';
import snakerobotControl from '@/assets/snakerobot-control.png';
import snakerobotHero from '@/assets/snakerobot-hero.png';

// Data Platform images
import dataplatformHero from '@/assets/dataplatform-hero.png';

// AskEDP images
import askedpHero from '@/assets/askedp-hero.png';
import askedp01 from '@/assets/askedp-01.png';
import askedp02 from '@/assets/askedp-02.png';
import askedp03 from '@/assets/askedp-03.png';
import askedp04 from '@/assets/askedp-04.png';
import dataplatformFinal01 from '@/assets/dataplatform-final-01.png';
import dataplatformFinal02 from '@/assets/dataplatform-final-02.png';
import dataplatformFinal03 from '@/assets/dataplatform-final-03.png';
import dataplatformFinal04 from '@/assets/dataplatform-final-04.png';
import dataplatformFinal05 from '@/assets/dataplatform-final-05.png';
import dataplatformFinal06 from '@/assets/dataplatform-final-06.png';
import dataplatformFinal07 from '@/assets/dataplatform-final-07.png';

interface TimelineItem {
  date: string;
  event: string;
}

interface DemoVideo {
  title: string;
  description: string;
  url: string;
}

interface DesignArtifact {
  title: string;
  description: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  heroImage: string;
  heroBlur?: boolean;
  overview: string;
  challenge: string;
  solution: string;
  artifacts?: DesignArtifact[];
  process?: { title: string; description: string; videoUrls?: string[]; images?: string[] }[];
  demoVideos?: DemoVideo[];
  timeline?: TimelineItem[];
  images?: string[];
  protectedImages?: string[];
  results: { label: string; value: string }[];
  nextProject: { id: string; title: string };
}

const caseStudies: Record<string, CaseStudyData> = {
  'aquanautviz': {
    id: 'aquanautviz',
    title: 'AquanautViz',
    subtitle: 'Product Design Leadership · 3D Visualization · VR',
    year: '2018',
    client: 'Houston Mechatronics, Inc.',
    role: 'Lead Product Designer',
    tools: ['Unreal Engine', 'C++', 'Maya', 'Solidworks', 'Adobe CC', 'HTC Vive'],
    heroImage: aquanautHero,
    overview: 'I led the design of a real-time 3D visualization system used to present and interact with Houston Mechatronics\' subsea robotics platform.\n\nThe project focused on translating highly complex mechanical systems into an experience that could be understood immediately by non-technical stakeholders, while remaining accurate and performant enough for expert use. The product launched at the 2018 Offshore Technology Conference (OTC) and was adopted as a primary sales and demonstration tool.',
    challenge: 'The robots themselves were advanced, but the way they were presented was not.\n\nClients were asked to interpret dense specifications and static CAD models—an approach that required technical literacy and failed to convey system behavior, scale, or relationships. Existing CAD assets were also unsuitable for real-time interaction, making them impractical for tablets or immersive environments.\n\nThe core problem was clarity: how to reveal system complexity without overwhelming the user.',
    solution: 'I designed the experience around progressive disclosure and spatial hierarchy.\n\nRather than exposing all components simultaneously, the system presents a clear system-level view, allowing users to explore subsystems only when context is established. Visual emphasis is managed through a holographic rendering model: inactive components remain as lightweight outlines, while selected systems transition into full-detail states.\n\nThis approach allowed users to maintain orientation while interacting with complex assemblies.\n\nTo support real-time performance, I rebuilt the entire 3D asset set from engineering exports, reducing polygon density by over 80% while preserving visual intent and proportional accuracy.',
    process: [
      {
        title: 'Asset Strategy',
        description: 'Engineering models were redesigned specifically for real-time interaction. Visual fidelity was prioritized only where it supported understanding, establishing a reusable asset standard for future visualization work.',
        videoUrls: [
          'https://www.youtube.com/embed/HGTfuV2oSQ0',
          'https://www.youtube.com/embed/51BpKQW8gto'
        ]
      },
      {
        title: 'Interaction Model',
        description: 'Navigation was structured hierarchically, anchoring users at the system level and revealing deeper layers contextually. The visual language established here became the foundation for subsequent internal visualization tools.',
        images: [aquanaut01, aquanaut02, aquanaut03, aquanaut04]
      },
      {
        title: 'Platform Alignment',
        description: 'The experience was designed to scale across iOS tablets, Windows desktops, and HTC Vive, with consistent interaction principles adapted to each context rather than redesigned per platform.',
        videoUrls: ['https://www.youtube.com/embed/JNmxGqXOIZE']
      }
    ],
    results: [
      { label: 'Launch', value: 'Launched publicly at OTC 2018' },
      { label: 'Application', value: 'Used in client presentations and immersive demos' },
      { label: 'User Impact', value: 'Improved comprehension of system architecture for non-technical audiences' },
      { label: 'Legacy', value: 'Established internal standards for real-time 3D visualization and interaction design' },
    ],
    nextProject: { id: 'automated-control', title: 'Automated Control' },
  },
  'motiongen': {
    id: 'motiongen',
    title: 'MotionGen',
    subtitle: 'Product Strategy · Mobile Design · 0→1 Product',
    year: '2012–2015',
    client: 'Stony Brook University',
    role: 'Founding Designer & Product Lead',
    tools: ['Objective-C', 'C++', 'OpenGL', 'Xcode', 'Adobe CC'],
    heroImage: motiongen01,
    overview: 'I initiated and led the design of MotionGen, a mobile application developed within a university setting to explore mechanical linkage design on touch-based devices.\n\nThe project was self-initiated, received institutional funding, and evolved through three major design iterations. I was responsible for defining the product direction, conducting user research, and designing and building the system end to end. MotionGen was invited to TEDxSBU 2014 as an example of applied design and engineering education (presented by faculty), and was later published on the App Store and Google Play.\n\nThe application has since been used professionally in the design of a patented medical device for Biodex Medical Systems.',
    challenge: 'Mechanical linkage design is traditionally performed using desktop CAD tools optimized for large displays and precise input devices.\n\nThe goal of MotionGen was to investigate whether core synthesis workflows could be meaningfully translated to mobile platforms, while remaining accurate, legible, and usable for both students and practicing engineers. The project needed to balance pedagogical clarity with professional credibility, all within the constraints of small screens and touch input.\n\nEarly interface explorations emphasized mobile-first interaction patterns and progressive disclosure. While well-suited to touch input, these patterns needed to be evaluated against the expectations of users trained on conventional CAD software.\n\nThe central design question became: how to introduce a mobile-native experience without breaking established mental models.',
    solution: 'I treated the project as a research-informed product design effort.\n\nThrough iterative prototyping and user feedback, I evaluated where novel interactions improved understanding and where familiarity reduced cognitive overhead. Competitive analysis of tools such as AutoCAD, SolidWorks, and Unigraphics informed decisions around layout, control grouping, and visual hierarchy.\n\nThe product evolved through three deliberate design phases, each refining the balance between innovation and recognizability.',
    process: [
      {
        title: 'Phase 1 — Mobile-First Exploration',
        description: 'The initial design leveraged progressive disclosure, revealing controls as users advanced through linkage synthesis. This approach reduced visual clutter and supported learning, while highlighting areas where additional orientation cues were necessary for experienced users.'
      },
      {
        title: 'Phase 2 — Alignment with Professional Conventions',
        description: 'Based on user feedback and comparative analysis, I refined the interface to incorporate familiar CAD patterns. This improved immediate usability for professional engineers while preserving the advantages of a touch-based workflow.'
      },
      {
        title: 'Phase 3 — Optimization for Small Screens',
        description: 'Observation showed that many users accessed the app on phone-sized devices. I redesigned panel behavior, adjusted animation timing, and separated synthesis functions to maximize usable screen space—enabling professional-grade workflows within constrained layouts.'
      },
      {
        title: 'Validation & Exposure',
        description: 'MotionGen received institutional funding and was selected for presentation at TEDxSBU 2014 as an example of applied design in engineering education, presented in an academic context.\n\nFollowing public release, the app was adopted beyond the classroom and used in the design of a patented sit-to-stand linkage system for Biodex Medical Systems.'
      }
    ],
    demoVideos: [
      {
        title: 'Four-Bar Synthesis',
        description: 'Demonstration on how MotionGen solves a four-bar synthesis problem.',
        url: 'https://www.youtube.com/embed/-6NrLTWqhyk'
      },
      {
        title: 'Additional Features',
        description: 'Exploring additional features and capabilities of MotionGen.',
        url: 'https://www.youtube.com/embed/tr5f8X4rDD8'
      },
      {
        title: 'TEDxSBU 2014',
        description: 'Featured in TEDxSBU — "Machine Design Innovation through Technology and Education." Demonstration begins at 13:38.',
        url: 'https://www.youtube.com/embed/iSW_G0nb11Q'
      }
    ],
    results: [
      { label: '', value: 'Initiated and led a funded academic mobile application' },
      { label: '', value: 'Featured at TEDxSBU 2014 in the context of engineering education' },
      { label: '', value: 'Published across iOS, Android, and web platforms' },
      { label: '', value: 'Applied professionally in the design of a patented medical device' },
    ],
    nextProject: { id: 'aquanautviz', title: 'AquanautViz' },
  },
  'automated-control': {
    id: 'automated-control',
    title: 'Automated Pipe Handling',
    subtitle: 'Design Leadership · Safety-Critical Systems · Research',
    year: '2018',
    client: 'Transocean',
    role: 'Lead UX Designer',
    tools: ['Adobe Illustrator', 'HTML', 'CSS', 'JavaScript', 'Python', 'Computer Vision'],
    heroImage: spiral05,
    overview: 'I led the UX strategy and system design for a safety-critical control interface used on offshore drilling platforms.\n\nThe work focused on reducing operator error in high-risk environments where interface failures have direct, physical consequences. With fatalities in oil and gas operations frequently linked to contact injuries and procedural breakdowns, the system required a design approach grounded in cognitive science, operational reality, and failure-mode awareness.\n\nMy responsibility was to define a usable, resilient interaction model that could operate reliably under stress, fatigue, and environmental variability—without sacrificing system capability.',
    challenge: 'Existing control systems were technically complete but cognitively fragile.\n\nOperators were required to navigate deeply nested menus during time-critical operations, often under physical fatigue and psychological stress. Critical actions were separated across screens, alerts competed for attention, and system state was difficult to assess at a glance.\n\nThe core issue was not missing functionality—it was how much thinking the interface demanded at the worst possible moment.\n\nAny redesign had to reduce cognitive load while preserving full operational control across different rigs, configurations, and environmental conditions.',
    solution: 'I structured the redesign around a single principle: minimize cognitive effort per decision.\n\nUsing established information-seeking and decision-making models, I replaced deep hierarchies with a low-depth information architecture that prioritized immediate system awareness and rapid task execution. The interface was designed to support fast context switching, reduce memory load, and keep critical actions continuously accessible.\n\nRather than optimizing for feature discovery, the system was optimized for error prevention and recovery.',
    process: [
      {
        title: 'Information Architecture',
        description: 'I led a complete restructuring of the information architecture, informed by field research, operator interviews, and analysis of industry incident reports. Shallow navigation structures replaced multi-layered menus, reducing the number of steps required for critical actions and lowering cognitive fatigue during extended shifts.\n\nThe result was a measurable reduction in task complexity during high-pressure scenarios.',
        images: [spiralIaCompare]
      },
      {
        title: 'Visual System Validation',
        description: 'Visual decisions were treated as safety decisions.\n\nI conducted quantitative validation with 27 participants across technical and non-technical roles to test color usage, iconography, text hierarchy, and control placement. All visual indicators were evaluated for legibility and recognition across extreme conditions, including bright outdoor environments and low-light control rooms.\n\nNothing was decorative. Every visual element carried operational intent.',
        images: [spiralResults]
      },
      {
        title: 'Safety Redundancy Model',
        description: 'I designed a three-layer safety framework to reduce failure impact: soft emergency stops allowing rapid intervention without full system shutdown, cross-screen availability of critical functions to eliminate navigation dead-ends, and combined action controls that reduced hand-offs between related operations.\n\nEach pattern was evaluated against failure-mode scenarios to ensure graceful degradation rather than abrupt breakdown.'
      },
      {
        title: 'Physical–Digital Consistency',
        description: 'I established design principles aligning digital behavior with physical system expectations.\n\nInterface states mirrored real-world mechanical feedback, and dynamic representations reflected actual pipe and rig configurations. This alignment reduced training overhead and helped operators transfer existing physical knowledge directly into digital interaction.'
      }
    ],
    images: [spiral04, spiral05, spiral06],
    results: [
      { label: '', value: 'Achieved a tenfold reduction in cognitive load during critical operations' },
      { label: '', value: 'Reduced task completion time and required interactions' },
      { label: '', value: 'Improved operator situational awareness, lowering exposure to hazardous conditions' },
    ],
    nextProject: { id: 'motiongen', title: 'MotionGen' },
  },
  'snake-robot': {
    id: 'snake-robot',
    title: 'Snake Robot',
    subtitle: 'Product Design · Data Visualization · Rapid Delivery',
    year: '2017',
    client: 'Houston Mechatronics, Inc.',
    role: 'Lead Product Designer',
    tools: ['Photoshop', 'Illustrator', 'HTML', 'CSS', 'JavaScript', 'Node.js'],
    heroImage: snakerobotHero,
    overview: 'I led the design and front-end implementation of the control interface for an autonomous pipe inspection robot.\n\nAs the sole designer, I was responsible for the entire operator experience—real-time video, inspection data visualization, robot navigation, and hardware health monitoring. Because the robot operates wirelessly and autonomously, the interface functioned as the only control surface between the operator and the physical system. Design decisions therefore had direct consequences on operational reliability and field readiness.',
    challenge: 'Autonomy shifted all responsibility onto the interface.\n\nOperators needed to simultaneously monitor live video, interpret wall condition data, control robot movement, and assess hardware health—without physical access to the robot itself. Any loss of clarity, latency, or legibility would immediately compromise operation.\n\nEarly visual explorations revealed a second constraint: dark-themed interfaces performed poorly in outdoor environments. Under direct sunlight, contrast and readability degraded significantly, creating unacceptable risk during field use.\n\nThe challenge was to design a single, coherent control system that remained legible, responsive, and trustworthy across devices and conditions.',
    solution: 'I treated the interface as a real-time control surface rather than a traditional dashboard.\n\nThe system was designed to prioritize continuous situational awareness: live video as the primary anchor, inspection data as contextual overlays, and system health always accessible without interrupting control flow. Layout, color, and interaction decisions were evaluated against outdoor visibility, cognitive load, and response speed.\n\nIn parallel, I adopted a rapid, code-first design process to validate assumptions under real constraints rather than static mockups.',
    process: [
      {
        title: 'Rapid Requirement Framing',
        description: 'I facilitated cross-functional working sessions to define the minimum viable control surface: live video streaming, wall condition visualization, movement control, and hardware health. Lightweight prototypes were used to validate task flow and interaction priority before committing to implementation.\n\nThis allowed development to proceed without over-specification while preserving UX intent.',
        images: [snakerobotNotes]
      },
      {
        title: 'Layout Architecture',
        description: 'I evaluated multiple layout structures against operational criteria: visibility, interruption cost, and error recovery.\n\nThe final architecture anchors the experience with a persistent main canvas, while secondary controls and navigation live in a collapsible left panel—available when needed, invisible when not. Consistent, card-based layouts were used across functional areas to reduce relearning and scanning effort.',
        images: [snakerobotSketches, snakerobotLayouts]
      },
      {
        title: 'MVP Delivery Under Constraint',
        description: 'I delivered a fully coded MVP in under three weeks for a critical investor demonstration.\n\nThis phase prioritized functional completeness and interaction clarity over polish, ensuring the system could be realistically operated and evaluated. The successful demo validated both the product direction and the interface model, unlocking continued development.',
        images: [snakerobotWireframe]
      },
      {
        title: 'Visual System for Field Use',
        description: 'Following validation, I led a visual redesign optimized for outdoor legibility.\n\nThe final system adopted a high-contrast light theme aligned with the hardware brand—white surfaces with orange and dark grey accents. This significantly improved visibility in direct sunlight while creating a cohesive relationship between the physical robot and its digital interface.',
        images: [snakerobotResponsive]
      },
      {
        title: 'Inspection Data Visualization',
        description: 'I designed a heat map visualization representing unwrapped pipe wall thickness across a 15 × 360 data grid.\n\nDensity, color scaling, and interaction thresholds were calibrated to balance interpretability with screen constraints across mobile, tablet, and desktop breakpoints—ensuring anomalies were detectable without overwhelming the operator.',
        images: [snakerobotInterface]
      },
      {
        title: 'System Health Awareness',
        description: 'I designed an interactive robot schematic embedded in the status area of the interface.\n\nComponent states are communicated through immediate visual feedback, with direct access to real-time metrics including battery levels, motor speed, current draw, and sensor data. This allowed operators to assess system health continuously without leaving the primary control context.',
        images: [snakerobotControl]
      }
    ],
    results: [
      { label: '', value: 'Delivered a functional, coded MVP in under three weeks for investor evaluation' },
      { label: '', value: 'Deployed a responsive control interface across mobile, tablet, and desktop' },
      { label: '', value: 'Approved for field deployment following validation testing' },
    ],
    nextProject: { id: 'data-platform', title: 'Unified Enterprise Data Platform' },
  },
  'data-platform': {
    id: 'data-platform',
    title: 'Unified Enterprise Data Platform',
    subtitle: 'Design Leadership · Experience Strategy · Enterprise UX',
    year: '2023',
    client: 'Enterprise (Confidential)',
    role: 'Lead Product Designer (Sole Designer)',
    tools: ['Figma', 'Design Systems', 'Information Architecture', 'Prototyping'],
    heroImage: dataplatformHero,
    heroBlur: true,
    overview: 'I led the design of a unified web experience for a large enterprise data platform used across multiple business units.\n\nThe platform had grown organically over time and supported a wide range of capabilities—including data discovery, access management, quality, observability, governance, and analytics—but the user experience was fragmented across multiple tools and entry points.\n\nAs the sole designer, I was responsible for defining the experience strategy and designing a single, scalable product surface that supports the full lifecycle of platform usage—from evaluation and onboarding to day-to-day operations.',
    challenge: 'As the platform expanded, its experience layer did not keep pace with its technical complexity.\n\nUsers had to move between disconnected portals to understand platform capabilities, onboard new data and users, monitor pipelines and service reliability, manage access, governance, and quality, and stay informed about new features and changes.\n\nThis fragmentation created high friction for new teams evaluating the platform, slow onboarding and delayed time to value, inconsistent mental models across services, and no central place for platform communication.\n\nThe risk was systemic: the experience layer was becoming a constraint on platform adoption and scale.',
    solution: 'This was not a marketing site or documentation refresh. A content-first solution would have improved discoverability but failed to support onboarding, operations, or long-term extensibility.\n\nI reframed the effort as creating a unified experience layer—a single product surface that orchestrates the end-to-end platform journey: Discover → Enable → Operate → Communicate.\n\nThis framing aligned stakeholders around durable platform value rather than short-term UI consolidation.',
    artifacts: [
      { title: 'Problem / Fragmentation', description: 'Mapped the existing ecosystem to expose experience fragmentation and identify where the platform UX became a scaling constraint.' },
      { title: 'Vision / Experience Layer', description: 'Defined a unified experience layer that consolidates discovery, onboarding, and daily operations into a single platform surface.' },
      { title: 'IA from Future State', description: 'Designed the information architecture from the future state backward to support phased delivery without rework.' },
      { title: 'Hub-and-Orchestration Model', description: 'Designed a hub-and-orchestration pattern to unify existing systems without forcing a full rebuild.' },
      { title: 'MVP Trade-off', description: 'Intentionally scoped the MVP to validate core mental models while preserving long-term extensibility.' },
      { title: 'Impact / Platform Shift', description: 'Established a single, scalable entry point that repositioned the platform from a collection of tools to a cohesive product.' },
    ],
    process: [
      {
        title: 'Experience Strategy',
        description: 'The platform served business leaders evaluating platform fit, technical leads assessing governance and scalability, and engineers and analysts operating pipelines and consuming data.\n\nRather than creating persona-specific experiences, I designed a layered experience model: Discovery layer for platform overview and capabilities, Enablement layer for getting started and onboarding, and Operational layer for day-to-day platform usage.\n\nThis approach supported different user intents while maintaining a consistent mental model.'
      },
      {
        title: 'Hub-and-Orchestration Model',
        description: 'Most platform capabilities already existed in internal systems and third-party tools. Rebuilding them would have introduced unnecessary risk.\n\nI led the design toward a hub-and-orchestration approach: a single entry point and system of record, clear ownership boundaries between the unified UI and underlying systems, and progressive integration as services evolved.\n\nThis enabled cohesion without sacrificing flexibility or delivery speed.'
      },
      {
        title: 'Designing for a Multi-Phase Roadmap',
        description: 'The platform roadmap included future capabilities such as advanced analytics, expanded governance, and AI-driven insights.\n\nI designed the information architecture from the future state backward, ensuring that early launches would not constrain later phases, navigation and naming could remain stable over time, and new capabilities could be added without retraining users.\n\nThis directly influenced MVP scope and release sequencing.'
      },
      {
        title: 'MVP & Launch',
        description: 'The initial launch focused on establishing the experience foundation while minimizing delivery risk: unified homepage, core discovery and navigation framework, and initial operational surface for key services.\n\nThis MVP validated the core mental model and created a stable base for future expansion.'
      }
    ],
    results: [
      { label: '', value: 'Established a single, intuitive entry point for platform users' },
      { label: '', value: 'Reduced experience fragmentation across services' },
      { label: '', value: 'Improved evaluation and onboarding for new teams' },
      { label: '', value: 'Created a scalable UX foundation for long-term platform growth' },
      { label: '', value: 'Positioned design as a strategic function influencing product direction' },
    ],
    protectedImages: [dataplatformFinal05, dataplatformFinal06, dataplatformFinal07, dataplatformFinal01],
    nextProject: { id: 'askedp', title: 'AI Application for Enterprise Data Exploration' },
  },
  'askedp': {
    id: 'askedp',
    title: 'AI Application for Enterprise Data Exploration',
    subtitle: 'AI Product Design · Enterprise UX · Conversational AI',
    year: '2024',
    client: 'JLL',
    role: 'Lead Product Designer',
    tools: ['Figma', 'AI/LLM Integration', 'Enterprise Systems', 'Conversational Design'],
    heroImage: askedpHero,
    heroBlur: true,
    overview: 'AskEDP is an AI assistant built to help teams understand, operate, and analyze data within JLL\'s enterprise data platform (EDP).\n\nEDP serves a wide spectrum of users—from engineers who need fast, precise signals to debug systems, to business users who simply want to understand data behavior without learning complex tools. AskEDP provides a single conversational interface that adapts to different levels of expertise, enabling both rapid problem-solving and lightweight data exploration with no prior data experience required.',
    challenge: 'EDP needed to serve fundamentally different interaction needs using the same underlying data.\n\nEngineers and data scientists required speed, precision, and the ability to quickly identify anomalies, failures, or root causes. Other users—analysts, product partners, and business stakeholders—often wanted only a high-level view of data health or trends, and were either unfamiliar with, or resistant to, traditional data tooling.\n\nHistorically, these needs were addressed through separate tools: advanced dashboards and observability systems for experts, and static reports or ad hoc support for everyone else. This split increased complexity, slowed onboarding, and excluded users who didn\'t have the time or skill to use sophisticated data software.\n\nThe challenge was to enable expert-level efficiency without forcing non-experts into expert workflows.',
    solution: 'I designed AskEDP as an adaptive AI interface that supports multiple interaction modes over the same data foundation.\n\nFor engineers, AskEDP prioritizes speed and precision—allowing them to quickly surface relevant metrics, metadata, and known failure patterns without navigating multiple systems. For non-technical users, it emphasizes explanation, summarization, and safe exploration—making it possible to understand general data behavior or run basic analysis without writing queries or learning specialized tools.\n\nThe assistant uses conversation as a control layer: users can stop at a high-level answer or progressively drill down into technical detail. This makes AskEDP usable by people with no data background, while still supporting deep, targeted workflows for experienced users. Role- and user-based access controls ensure that increased ease of use does not compromise governance or data security.',
    process: [
      {
        title: 'Distinguishing Speed vs. Depth Needs',
        description: 'I separated user needs not by job title, but by interaction intent. Engineers often needed immediate, high-confidence answers to narrow questions ("Why did this pipeline fail?"), while other users wanted broad understanding ("Is this data generally healthy?" or "What does this trend look like?").\n\nDesigning around intent avoided creating parallel products.'
      },
      {
        title: 'Designing for Zero-Friction Entry',
        description: 'A core requirement was that users with no experience in data tools could get value immediately. I designed AskEDP so that meaningful answers could be obtained through natural language alone, without prior knowledge of schemas, metrics, or query languages.\n\nThis removed the learning curve that traditionally blocks adoption.'
      },
      {
        title: 'Enabling Fast Expert Workflows',
        description: 'For advanced users, I focused on minimizing time-to-signal. AskEDP was designed to surface the most relevant metrics, metadata, or known issues first, and allow rapid follow-up questions to narrow scope.\n\nThis supported debugging and decision-making without forcing engineers to context-switch across tools.'
      },
      {
        title: 'Progressive Depth Over a Shared System',
        description: 'Rather than splitting experiences, I designed a progressive disclosure model where the same interaction could evolve from a simple summary to detailed technical insight.\n\nThis allowed non-expert users to explore safely, while giving experts full depth when needed—without fragmenting the platform.'
      },
      {
        title: 'Governance Embedded in the Interaction Model',
        description: 'Ease of use was balanced with strict access control. Role- and user-based permissions were integrated directly into how the assistant responded, ensuring that users could only see data and diagnostics appropriate to their role, even as the interface simplified access.'
      }
    ],
    results: [
      { label: '', value: 'Compressed time-to-signal for engineers enabling fast, precise issue identification without context-switching' },
      { label: '', value: 'Lowered the barrier to data usage to near zero through natural language interaction' },
      { label: '', value: 'Reconciled expert depth with novice simplicity via progressive disclosure' },
      { label: '', value: 'Shifted support from human-dependent to self-serve, creating a scalable AI support layer' },
      { label: '', value: 'Established AI as a platform interaction layer between user intent and enterprise data systems' },
    ],
    protectedImages: [askedp01, askedp02, askedp03, askedp04],
    nextProject: { id: 'aquanautviz', title: 'AquanautViz' },
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies[id || 'automated-control'];
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

  // Lightbox state for gallery images
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Lightbox state for process step images
  const [processLightboxOpen, setProcessLightboxOpen] = useState(false);
  const [processLightboxImages, setProcessLightboxImages] = useState<string[]>([]);
  const [processLightboxIndex, setProcessLightboxIndex] = useState(0);

  // Password protection state for protected images
  const [protectedPassword, setProtectedPassword] = useState('');
  const [isProtectedUnlocked, setIsProtectedUnlocked] = useState(false);
  const [protectedError, setProtectedError] = useState(false);
  const PROTECTED_PASSWORD = 'case-study';

  // Lightbox state for protected images
  const [protectedLightboxOpen, setProtectedLightboxOpen] = useState(false);
  const [protectedLightboxIndex, setProtectedLightboxIndex] = useState(0);

  const handleProtectedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (protectedPassword === PROTECTED_PASSWORD) {
      setIsProtectedUnlocked(true);
      setProtectedError(false);
    } else {
      setProtectedError(true);
    }
  };

  const openProtectedLightbox = useCallback((index: number) => {
    setProtectedLightboxIndex(index);
    setProtectedLightboxOpen(true);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (study?.images) {
      setLightboxIndex((prev) => (prev + 1) % study.images.length);
    }
  }, [study]);

  const prevImage = useCallback(() => {
    if (study?.images) {
      setLightboxIndex((prev) => (prev - 1 + study.images.length) % study.images.length);
    }
  }, [study]);

  // Process image lightbox handlers
  const openProcessLightbox = useCallback((images: string[], index: number) => {
    setProcessLightboxImages(images);
    setProcessLightboxIndex(index);
    setProcessLightboxOpen(true);
  }, []);

  const closeProcessLightbox = useCallback(() => {
    setProcessLightboxOpen(false);
  }, []);

  const nextProcessImage = useCallback(() => {
    setProcessLightboxIndex((prev) => (prev + 1) % processLightboxImages.length);
  }, [processLightboxImages.length]);

  const prevProcessImage = useCallback(() => {
    setProcessLightboxIndex((prev) => (prev - 1 + processLightboxImages.length) % processLightboxImages.length);
  }, [processLightboxImages.length]);

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Full-bleed Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img 
            src={study.heroImage} 
            alt={study.title}
            className={`w-full h-full object-cover ${study.heroBlur ? 'blur-[3px]' : ''}`}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32"
          style={{ opacity: heroOpacity }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ y: titleY }}
            >
              <p className="text-background/60 text-xs tracking-[0.4em] uppercase mb-6">
                {study.subtitle}
              </p>
              <h1 className="text-background text-display-xl font-display leading-[1.1] mb-8">
                {study.title}
              </h1>
              <div className="flex items-center gap-8 text-background/60 text-sm">
                <span>{study.year}</span>
                <span className="w-8 h-px bg-background/30" />
                <span>{study.client}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Meta */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md font-display mb-8">Overview</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              {study.overview.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-6">
                The Challenge
              </p>
              <div className="text-foreground leading-relaxed space-y-4">
                {study.challenge.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-6">
                The Solution
              </p>
              <div className="text-foreground leading-relaxed space-y-4">
                {study.solution.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Artifacts Section - Only show if artifacts exist */}
      {study.artifacts && study.artifacts.length > 0 && (
        <section className="py-24 md:py-32 border-t border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-6">
                Design Artifacts
              </p>
              <h2 className="text-display-md font-display">Key Design Decisions</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {study.artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  className="border border-border p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-muted-foreground text-xs font-display tracking-wider mb-3 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {artifact.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {artifact.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Only show if process exists */}
      {study.process && study.process.length > 0 && (
        <section className="py-24 md:py-32 border-t border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-6">
                Process
              </p>
              <h2 className="text-display-md font-display">How It Came Together</h2>
            </motion.div>

            <div className="space-y-16">
              {study.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-12 gap-8 items-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:col-span-1">
                    <span className="font-display text-2xl text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-xl text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7 md:col-start-6">
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      {step.description.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    {step.videoUrls && step.videoUrls.length > 0 && (
                      <div className="mt-6 space-y-6">
                        {step.videoUrls.map((videoUrl, videoIndex) => (
                          <div key={videoIndex} className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src={videoUrl}
                              title={`${step.title} - Video ${videoIndex + 1}`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {step.images && step.images.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {step.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="aspect-[16/10] rounded-lg overflow-hidden bg-muted cursor-pointer group relative"
                            onClick={() => openProcessLightbox(step.images!, imgIndex)}
                          >
                            <img
                              src={image}
                              alt={`${step.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                              <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                View Full Size
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Demo Videos Section - Only show if demoVideos exists */}
      {study.demoVideos && study.demoVideos.length > 0 && (
        <section className="py-32 md:py-40 bg-foreground text-background">
          <div className="container max-w-6xl">
            {/* Minimal Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <span className="text-background/25 text-[10px] tracking-[0.5em] uppercase">
                Videos
              </span>
            </motion.div>

            {/* Clean stacked videos */}
            <div className="space-y-32">
              {study.demoVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Video */}
                  <div className="aspect-video overflow-hidden mb-8">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Info - minimal */}
                  <div className="grid md:grid-cols-12 gap-6 pt-6 border-t border-background/10">
                    <div className="md:col-span-1">
                      <span className="text-background/20 text-xs font-display">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-display text-lg text-background/80">
                        {video.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-background/35 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section - Only show if timeline exists */}
      {study.timeline && study.timeline.length > 0 && (
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-6">
                Timeline
              </p>
              <h2 className="text-display-md font-display">Project Journey</h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              
              <div className="space-y-12">
                {study.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-8 ${
                      index % 2 === 0 ? '' : 'md:text-right'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 md:-translate-x-1.5" />
                    
                    {/* Content - alternating sides on desktop */}
                    <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                      <span className="inline-block font-display text-sm tracking-wider text-primary mb-2">
                        {item.date}
                      </span>
                      <p className="text-foreground leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {study.images && study.images.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {study.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <motion.img
                      src={image}
                      alt={`${study.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        View Full Size
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox for gallery images */}
      {study.images && (
        <Lightbox
          images={study.images}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          title={study.title}
        />
      )}

      {/* Lightbox for process step images */}
      <Lightbox
        images={processLightboxImages}
        currentIndex={processLightboxIndex}
        isOpen={processLightboxOpen}
        onClose={closeProcessLightbox}
        onNext={nextProcessImage}
        onPrev={prevProcessImage}
        title={study.title}
      />

      {/* Protected Final Product Images */}
      {study.protectedImages && study.protectedImages.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                Final Product
              </p>
              <h2 className="text-display-md font-display">Design Outcomes</h2>
            </motion.div>

            {!isProtectedUnlocked ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-md mx-auto"
              >
                <div className="bg-background border border-border rounded-xl p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg mb-2">Protected Content</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Enter the password to view final product screenshots.
                  </p>
                  <form onSubmit={handleProtectedSubmit} className="space-y-4">
                    <input
                      type="password"
                      value={protectedPassword}
                      onChange={(e) => {
                        setProtectedPassword(e.target.value);
                        setProtectedError(false);
                      }}
                      placeholder="Enter password"
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
                        protectedError ? 'border-red-500' : 'border-border'
                      }`}
                    />
                    {protectedError && (
                      <p className="text-red-500 text-sm">Incorrect password. Please try again.</p>
                    )}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Unlock
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.protectedImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg border border-border bg-background cursor-pointer group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true, margin: "-50px" }}
                      onClick={() => openProtectedLightbox(index)}
                    >
                      <img
                        src={image}
                        alt={`${study.title} - Final Product ${index + 1}`}
                        className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                        <svg 
                          className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Lightbox
                  images={study.protectedImages}
                  isOpen={protectedLightboxOpen}
                  onClose={() => setProtectedLightboxOpen(false)}
                  currentIndex={protectedLightboxIndex}
                  onNext={() => setProtectedLightboxIndex((prev) => (prev + 1) % study.protectedImages!.length)}
                  onPrev={() => setProtectedLightboxIndex((prev) => (prev - 1 + study.protectedImages!.length) % study.protectedImages!.length)}
                />
              </>
            )}
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-background/40 text-xs tracking-[0.4em] uppercase mb-4">
              Results
            </p>
            <h2 className="text-display-md md:text-display-lg font-display leading-[0.9]">
              Impact & Outcomes
            </h2>
          </motion.div>
          
          {/* Metrics */}
          <div className="space-y-0 divide-y divide-background/10">
            {study.results.map((result, index) => (
              <motion.div
                key={index}
                className="py-8 md:py-10 grid grid-cols-12 items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="col-span-1 text-background/30 font-display text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="col-span-11 text-lg md:text-xl lg:text-2xl font-display">
                  {result.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">
              Next Project
            </p>
            <Link 
              to={`/work/${study.nextProject.id}`}
              className="group inline-block"
            >
              <h2 className="text-display-lg font-display group-hover:text-muted-foreground transition-colors duration-500">
                {study.nextProject.title}
              </h2>
              <motion.div 
                className="mt-8 w-16 h-px bg-foreground mx-auto"
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
