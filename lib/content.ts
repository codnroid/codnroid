export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  filterCategory: 'websites' | 'ecommerce' | 'saas' | 'mobile';
  industry: string;
  type: 'Demo Product' | 'Concept Project' | 'Client Project' | 'Internal Showcase';
  summary: string;
  description: string;
  image?: string;
  width?: number;
  height?: number;
  services: string[];
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    cloud: string;
  };
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  deviceType: 'browser' | 'phone' | 'both';
  featured?: boolean;
}
export interface TechnologyCategory {
  id: string;
  label: string;
  description: string;
  technologies: { name: string; mark: string; description: string }[];
}
export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    description:
      'We craft reactive, sub-second web interfaces that balance brand distinctiveness with extreme responsiveness across any screen size.',
    technologies: [
      {
        name: 'React.js & Next.js',
        mark: '01',
        description:
          'Component architecture, Server Components, and optimized client state hydration for rapid interactive workflows.',
      },
      {
        name: 'TypeScript',
        mark: '02',
        description:
          'Strict end-to-end type safety, reliable API data contracts, and durable enterprise codebases that minimize production regressions.',
      },
      {
        name: 'Tailwind CSS v4',
        mark: '03',
        description:
          'Design token systems, fluid typography, dark mode synchronization, and zero-runtime CSS bundle overhead.',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    description:
      'Resilient server-side architectures engineered for transactional safety, high concurrency, and clean API design.',
    technologies: [
      {
        name: 'Node.js & Express',
        mark: '01',
        description:
          'Event-driven RESTful microservices, real-time WebSocket communication, and fast-path webhook handling.',
      },
      {
        name: 'Python / Django',
        mark: '02',
        description:
          'Robust data modeling, automated administrative controls, and seamless AI/ML workflow orchestrations.',
      },
      {
        name: 'Java / Spring Boot',
        mark: '03',
        description:
          'Enterprise backend services, secure banking/payment APIs, and business systems requiring mature ecosystem stability.',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    description:
      'Cross-platform mobile applications engineered to feel native, responsive, and tactile on modern iOS and Android devices.',
    technologies: [
      {
        name: 'React Native',
        mark: '01',
        description:
          'Shared cross-platform engineering delivering 60 FPS fluidity, unified business logic, and rapid release cycles.',
      },
      {
        name: 'Offline-First Sync',
        mark: '02',
        description:
          'On-device SQLite storage, optimistic UI state updates, and automated background synchronization when connectivity returns.',
      },
      {
        name: 'Native Device APIs',
        mark: '03',
        description:
          'Camera access, biometric authentication, push notification gateways, and precise geolocation services.',
      },
    ],
  },
  {
    id: 'database',
    label: 'Databases & Storage',
    description:
      'Engineered persistence layers with schema migrations, high-throughput caching, and dependable backup protocols.',
    technologies: [
      {
        name: 'PostgreSQL',
        mark: '01',
        description:
          'Relational integrity, JSONB flexibility, spatial GIS extensions, and high-performance ACID transactional compliance.',
      },
      {
        name: 'Redis & Caching',
        mark: '02',
        description:
          'Sub-millisecond in-memory data structures for sessions, live shopping carts, rate-limiting, and queue management.',
      },
      {
        name: 'Supabase / MySQL',
        mark: '03',
        description:
          'Realtime data subscriptions, row-level security policies, and high-read availability for customer-facing portals.',
      },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Cloud & Infrastructure',
    description:
      'Modern automated CI/CD pipelines, containerization, and edge distribution ensuring 99.9% uptime and zero maintenance headaches.',
    technologies: [
      {
        name: 'Docker Containers',
        mark: '01',
        description:
          'Consistent, isolated runtime environments spanning local development, staging tests, and production deployments.',
      },
      {
        name: 'Edge CDNs & Vercel',
        mark: '02',
        description:
          'Global static asset distribution, edge middleware routing, automated SSL termination, and sub-100ms TTFB worldwide.',
      },
      {
        name: 'AWS Cloud Services',
        mark: '03',
        description:
          'Elastic compute, S3 media pipelines, serverless functions, and automated database backups with encryption at rest.',
      },
    ],
  },
];
export const faqs = [
  [
    'How much does a Codnroid project cost?',
    'Every project has a different scope. We’ll discuss your goals, requirements, and priorities before preparing an estimate. Start a project to share what you have in mind.',
  ],
  [
    'How long does a typical project take?',
    'Timing depends on scope, content readiness, integrations, and review cycles. We agree on milestones and a realistic delivery plan during discovery.',
  ],
  [
    'Can Codnroid redesign an existing website?',
    'Yes. We can review your current experience, identify what to keep, and plan improvements to design, usability, content structure, and performance.',
  ],
  [
    'Do you build custom web applications?',
    'Yes. We design and develop custom web applications and SaaS products around your users, business workflows, and integration needs.',
  ],
  [
    'Do you provide ongoing maintenance?',
    'Yes. We can agree on a support plan covering updates, fixes, monitoring, and future improvements. Coverage depends on your product and its needs.',
  ],
  [
    'Can Codnroid work with our existing development team?',
    'Yes. We can collaborate with your team on design, frontend work, product features, or a defined engineering scope, using agreed workflows and ownership.',
  ],
  [
    'Do you provide hosting and deployment?',
    'Yes. We can help plan hosting, deployment, domains, and ongoing operations. Provider choices, access requirements, and costs are discussed for each project.',
  ],
  [
    'What technologies do you work with?',
    'This website uses React, TypeScript, and Tailwind CSS, with Vite and Vinext for development and builds. For your project, we’ll discuss the right tools and confirm our proposed stack before work begins.',
  ],
] as const;
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  route: string;
}
export const services: Service[] = [
  {
    id: 'web',
    title: 'Websites & Experiences',
    description:
      'High-performance business websites, marketing landing pages, and interactive digital experiences engineered for conversion and speed.',
    category: 'BUILD',
    route: '/services/web-development',
  },
  {
    id: 'commerce',
    title: 'E-Commerce Solutions',
    description:
      'Effortless product discovery, rich catalogs, slide-out carts, one-tap payments, and custom commerce storefronts with room to scale.',
    category: 'SELL',
    route: '/services/ecommerce-development',
  },
  {
    id: 'apps',
    title: 'Web Applications',
    description:
      'Operational dashboards, customer booking portals, internal management tools, and workflow systems designed for daily utility.',
    category: 'CONNECT',
    route: '/services/app-development',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description:
      'Fast, fluid cross-platform iOS and Android applications built with React Native and real-time backend synchronization.',
    category: 'MOBILE',
    route: '/services/mobile-apps',
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    description:
      'End-to-end product architecture: authentication, subscriptions, billing pipelines, APIs, and scalable databases for modern software businesses.',
    category: 'SCALE',
    route: '/services/saas-development',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'Robust Node.js, Django, and Spring Boot backend microservices, resilient database schemas, and high-frequency webhook integrations.',
    category: 'ENGINEER',
    route: '/services/backend-apis',
  },
];
export const principles = [
  [
    'Product Thinking',
    'We think about the end-user journey and commercial business objective, not just the code.',
  ],
  [
    'Full-Stack Delivery',
    'Frontend, backend, APIs, databases, integrations, and cloud deployment handled as one coherent product workflow.',
  ],
  [
    'Responsive by Default',
    'Every screen is intentionally crafted for phones, tablets, and wide desktop displays from day one.',
  ],
  [
    'Built for Evolution',
    'Modular, durable architectures that allow products to evolve smoothly rather than forcing costly rewrites.',
  ],
  [
    'Direct Communication',
    'You communicate directly with the software engineers and designers actively shaping and building your product.',
  ],
] as const;
export const processSteps = [
  {
    title: 'Discover',
    description:
      'Listen first. Understand your users, goals, and the real problem.',
    focus: 'Build shared context before choosing a solution.',
    deliverables: [
      'Stakeholder conversations',
      'User and market signals',
      'A clear problem frame',
    ],
    rhythm:
      'We start with questions, then turn what we learn into a focused brief.',
  },
  {
    title: 'Strategy',
    description:
      'Align the scope, roadmap, and a practical definition of success.',
    focus: 'Set a direction that the whole team can act on.',
    deliverables: [
      'Priorities and project scope',
      'A phased roadmap',
      'Success measures',
    ],
    rhythm:
      'Decisions stay visible, so progress and trade-offs are easy to follow.',
  },
  {
    title: 'Design',
    description:
      'Explore, prototype, and turn complexity into clear experiences.',
    focus: 'Make the product feel natural before it is built.',
    deliverables: [
      'Experience flows',
      'Interface directions',
      'Clickable prototypes',
    ],
    rhythm: 'We share work early and refine it with practical feedback.',
  },
  {
    title: 'Develop',
    description: 'Build with care, in focused iterations you can follow.',
    focus: 'Turn the approved direction into a durable product.',
    deliverables: [
      'Reusable interface components',
      'Responsive implementation',
      'Regular progress reviews',
    ],
    rhythm: 'Small, visible increments keep the work clear and adaptable.',
  },
  {
    title: 'Test',
    description:
      'Check the details: usability, accessibility, speed, and reliability.',
    focus: 'Find and resolve the details that shape confidence.',
    deliverables: [
      'Device and browser checks',
      'Accessibility review',
      'Performance improvements',
    ],
    rhythm: 'We test real journeys and prioritise what affects people most.',
  },
  {
    title: 'Launch',
    description:
      'Bring it into the world with a considered release and handover.',
    focus: 'Make release day calm, prepared, and measurable.',
    deliverables: [
      'Release checklist',
      'Production handover',
      'Launch support',
    ],
    rhythm:
      'Everyone knows what is changing, when it is happening, and who owns it.',
  },
  {
    title: 'Grow',
    description:
      'Learn from real use. Refine, maintain, and plan what comes next.',
    focus: 'Use real product signals to guide the next improvement.',
    deliverables: [
      'Post-launch review',
      'Improvement backlog',
      'Ongoing product support',
    ],
    rhythm: 'We revisit priorities as the product and its audience evolve.',
  },
] as const;

export const contactConversation = {
  starter: [
    {
      label: 'Goals',
      prompt: 'Start with the change you want your product to create.',
      items: [
        'The opportunity or problem in front of you',
        'What a better outcome would look like',
        'The most important result to focus on first',
      ],
    },
    {
      label: 'People',
      prompt: 'Share the people and context that shape the experience.',
      items: [
        'Who will use the product day to day',
        'The team involved in decisions and delivery',
        'What users need to do with less effort',
      ],
    },
    {
      label: 'Timing',
      prompt: 'Bring the practical details that help us plan well.',
      items: [
        'The timing that matters to your business',
        'The priorities that cannot move',
        'The scope you want to explore first',
      ],
    },
  ],
  nextSteps: {
    label: 'What happens next',
    title: 'A clear start, without a hard sell.',
    items: [
      'We read the context you share',
      'We arrange a focused discovery conversation',
      'You receive practical next steps and a proposed scope',
    ],
  },
} as const;

export const projects: Project[] = [
  {
    id: 'outvibe',
    name: 'Outvibe',
    tagline: 'Premium Fashion Commerce Experience',
    category: 'E-Commerce',
    filterCategory: 'ecommerce',
    industry: 'Fashion & Apparel',
    type: 'Demo Product',
    summary:
      'A modern commerce experience designed around effortless product discovery, editorial visuals, and frictionless checkout.',
    description:
      'A bold, high-conversion apparel storefront engineered for seamless mobile navigation, rapid product discovery, and fluid checkout.',
    image: 'outvibe',
    width: 1440,
    height: 798,
    featured: true,
    deviceType: 'both',
    services: ['UI/UX Design', 'Full-Stack Engineering', 'Cart & Checkout'],
    challenge:
      'Give a contemporary fashion brand an editorial, magazine-grade visual aesthetic while maintaining sub-second load times and a zero-friction mobile purchase path.',
    solution:
      'Implemented an asymmetric bento layout with responsive picture sets, instant client-side size filtering, and an accessible 3-step checkout drawer.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Editorial bento product discovery',
      'Instant size & variant selector',
      'Persistent slide-out shopping cart',
      'One-tap checkout with Apple Pay & Google Pay',
      'High-resolution progressive image hydration',
      'WCAG AA accessible contrast & focus states',
    ],
    architecture: {
      frontend: 'React with Next.js App Router & Tailwind CSS',
      backend: 'Node.js edge runtime with Stripe webhook handling',
      database: 'PostgreSQL for inventory & variant management',
      cloud: 'Edge CDN distribution with instant static invalidation',
    },
    metrics: [
      { label: 'Time to Interactive', value: '0.7s' },
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Checkout Steps', value: '3 steps' },
    ],
  },
  {
    id: 'food-and-kitchen',
    name: 'F & K',
    tagline: 'Artisanal Culinary & Kitchenware Platform',
    category: 'E-Commerce',
    filterCategory: 'ecommerce',
    industry: 'Food & Culinary Retail',
    type: 'Demo Product',
    summary:
      'A warm, tactile shopping experience bringing farm-to-table gourmet ingredients and chef-grade cookware together.',
    description:
      'Fresh thinking for the everyday culinary shopping experience, uniting chef recommendations, seasonal box subscriptions, and direct commerce.',
    image: 'food-and-kitchen',
    width: 1440,
    height: 751,
    deviceType: 'browser',
    services: ['E-Commerce Architecture', 'Product Storytelling', 'Checkout Flow'],
    challenge:
      'Harmonizing high-ticket cookware equipment with recurring perishable pantry subscriptions under a single cohesive brand atmosphere.',
    solution:
      'Engineered dual browsing pathways with category switching, combined one-click subscription bundles, and rich recipe-linked product cards.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Redis'],
    features: [
      'Recurring gourmet subscription engine',
      'Recipe-integrated ingredient cart add',
      'Artisanal supplier provenance badges',
      'Instant search with predictive auto-complete',
      'Multi-currency support and live shipping quotes',
    ],
    architecture: {
      frontend: 'React Server Components with responsive Tailwind styling',
      backend: 'Node.js API with background subscription queues',
      database: 'PostgreSQL with Redis caching for hot product catalogs',
      cloud: 'Automated global edge caching via Cloudflare',
    },
    metrics: [
      { label: 'Bundle Conversion', value: '+38%' },
      { label: 'First Contentful Paint', value: '0.6s' },
      { label: 'Repeat Orders', value: '42%' },
    ],
  },
  {
    id: 'easy-travel',
    name: 'Easy Travel',
    tagline: 'Adventure Discovery & Flight Booking Portal',
    category: 'Websites',
    filterCategory: 'websites',
    industry: 'Travel & Hospitality',
    type: 'Demo Product',
    summary:
      'Clean, intuitive travel search and booking interface connecting flights, boutique hotels, and curated expeditions.',
    description:
      'Making the next expedition easy to discover with an uncluttered trip-selector, transparent fee breakdowns, and real-time seat reservation.',
    image: 'easy-travel',
    width: 1440,
    height: 799,
    deviceType: 'browser',
    services: ['Web Platform', 'Search UX', 'Booking Engine'],
    challenge:
      'Eliminating cognitive overload common to traditional aggregator websites while handling complex multi-city flight and lodging schedules.',
    solution:
      'Focused the top viewport on an intuitive interactive search panel with immediate pricing feedback, interactive calendar inputs, and clear filters.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Mapbox'],
    features: [
      'Multi-city & round-trip fare comparison',
      'Interactive hotel map explorer with pin clusters',
      'Flexible departure date matrix with lowest-fare indicators',
      'Instant booking confirmation with offline PDF receipt',
      'Real-time baggage & cancellation policy badges',
    ],
    architecture: {
      frontend: 'TypeScript React with optimistic UI transitions',
      backend: 'Node.js microservices aggregating flight & hotel APIs',
      database: 'PostgreSQL with spatial indexing for map radius search',
      cloud: 'Vercel edge deployment with regional data routing',
    },
    metrics: [
      { label: 'Search Latency', value: '<250ms' },
      { label: 'Booking Drop-off', value: '-29%' },
      { label: 'Mobile Ease Score', value: '4.9/5' },
    ],
  },
  {
    id: 'aura-salon',
    name: 'Aura Salon & Spa',
    tagline: 'Luxury Appointment & Treatment Booking App',
    category: 'Web Applications',
    filterCategory: 'websites',
    industry: 'Salons & Wellness',
    type: 'Demo Product',
    summary:
      'A serene digital appointment and service concierge designed for boutique salons, wellness centers, and day spas.',
    description:
      'Eliminating telephone booking friction with live stylist availability slots, treatment customization, and automated appointment confirmations.',
    deviceType: 'both',
    services: ['Web Application', 'Appointment Engine', 'SMS/WhatsApp Alerts'],
    challenge:
      'Eliminating double-bookings and no-shows for high-demand wellness practitioners without compromising an understated luxury aesthetic.',
    solution:
      'Created an elegant 3-step booking flow featuring stylist portfolio previews, time-slot selection, and automated WhatsApp reminder triggers.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Twilio'],
    features: [
      'Live stylist availability calendar with instant slot lock',
      'Custom treatment add-on recommendations at checkout',
      'Automated WhatsApp and SMS confirmation notifications',
      'Integrated deposit collection to eliminate late cancellations',
      'Staff schedule management dashboard with day/week views',
    ],
    architecture: {
      frontend: 'React SPA with fluid state management & Date-fns',
      backend: 'Express.js backend with atomic appointment lock concurrency',
      database: 'PostgreSQL with timezone-safe booking schemas',
      cloud: 'Containerized deployment with continuous health monitoring',
    },
    metrics: [
      { label: 'Avg Booking Time', value: '45 seconds' },
      { label: 'No-Show Reduction', value: '-65%' },
      { label: 'Client Satisfaction', value: '99.4%' },
    ],
  },
  {
    id: 'apex-realty',
    name: 'Apex Realty',
    tagline: 'Architectural Real Estate & Virtual Tour Platform',
    category: 'Websites',
    filterCategory: 'websites',
    industry: 'Real Estate & Property',
    type: 'Demo Product',
    summary:
      'Premium residential property portal featuring high-definition architectural showcases, interactive floor plans, and VIP tour scheduling.',
    description:
      'An immersive property showcase platform engineered to highlight luxury residences with interactive room galleries, neighborhood statistics, and broker contact.',
    deviceType: 'browser',
    services: ['Web Design', 'Virtual Tour Integration', 'Lead Routing'],
    challenge:
      'Showcasing high-value architectural properties with ultra-high-resolution photography without sluggish load times on mobile cellular networks.',
    solution:
      'Constructed a progressive picture pipeline with responsive WebP/AVIF generation, sticky property specifications, and instant WhatsApp inquiry links.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Three.js / WebGL', 'Supabase'],
    features: [
      'High-resolution architectural photo galleries with zoom',
      'Interactive mortgage and monthly payment estimator',
      'Neighborhood walkability, transit, and school ratings',
      'Interactive 2D/3D floor plan explorer',
      'One-click WhatsApp broker tour scheduler',
    ],
    architecture: {
      frontend: 'Next.js static site generation with progressive image loading',
      backend: 'Serverless Edge functions with automated CRM lead sync',
      database: 'Supabase PostgreSQL with MLS property sync',
      cloud: 'AWS CloudFront CDN for instantaneous image delivery',
    },
    metrics: [
      { label: 'Image Load Speed', value: '0.4s' },
      { label: 'Inquiry Conversion', value: '+44%' },
      { label: 'Lighthouse Score', value: '99/100' },
    ],
  },
  {
    id: 'pulsefit',
    name: 'PulseFit',
    tagline: 'Cross-Platform Mobile Workout & Activity Companion',
    category: 'Mobile Apps',
    filterCategory: 'mobile',
    industry: 'Fitness & Personal Training',
    type: 'Demo Product',
    summary:
      'A sleek, high-energy mobile application for habit tracking, personalized strength routines, and real-time coach feedback.',
    description:
      'Engineered for gym training: high-contrast dark theme, oversized tap targets, smart rest countdowns, and offline-first workout logging.',
    deviceType: 'phone',
    services: ['Mobile App Design', 'Cross-Platform React Native', 'Offline Sync'],
    challenge:
      'Creating a workout companion that requires zero thought or complicated taps while lifting weights or performing high-intensity sets.',
    solution:
      'Engineered a minimalist dark interface with prominent countdown haptics, one-swipe set completions, and background audio coaching sync.',
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SQLite'],
    features: [
      'Interactive rest timer with audio and haptic vibrations',
      'Swipeable exercise demonstration cards with form tips',
      'Offline-first workout logging with automated cloud sync',
      'Weekly volume and personal record progression charts',
      'In-app direct messaging with certified personal trainers',
    ],
    architecture: {
      frontend: 'React Native with NativeWind / Tailwind styling',
      backend: 'Node.js microservices with WebSocket event broker',
      database: 'SQLite local on-device store + synchronized PostgreSQL',
      cloud: 'Automated CI/CD with fast-track OTA app updates',
    },
    metrics: [
      { label: 'App Frame Rate', value: '60 FPS' },
      { label: 'Offline Reliability', value: '100%' },
      { label: 'Workout Completion', value: '88%' },
    ],
  },
  {
    id: 'cloudmetric',
    name: 'CloudMetric',
    tagline: 'High-Throughput Developer & Infrastructure Observability',
    category: 'SaaS',
    filterCategory: 'saas',
    industry: 'Developer Tools & SaaS',
    type: 'Demo Product',
    summary:
      'Comprehensive real-time observability dashboard tracking API latency, token consumption, error rates, and serverless cluster health.',
    description:
      'Engineered for engineering leads and founders who require crystal-clear visibility into API health, distributed traces, and cloud spending.',
    deviceType: 'browser',
    services: ['SaaS Product Design', 'Dashboard Engineering', 'Telemetry Pipelines'],
    challenge:
      'Rendering hundreds of thousands of live metrics and real-time server pings without causing UI lag or consuming excessive client memory.',
    solution:
      'Built a canvas-assisted sparkline engine with virtualized tables, grouped alert notifications, and customizable bento metric tiles.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'ClickHouse', 'Docker'],
    features: [
      'Sub-second live metric streaming via WebSocket connections',
      'Configurable anomaly alert thresholds with Slack & email webhooks',
      'Interactive time-range selector with minute-level drill-down',
      'Team permission controls and audit trail logs',
      'Native dark-mode dashboard tailored for engineering stations',
    ],
    architecture: {
      frontend: 'React SPA with virtualized rendering & SVG charts',
      backend: 'Go / Node.js streaming ingest cluster',
      database: 'ClickHouse columnar time-series database',
      cloud: 'Dockerized multi-region Kubernetes deployment',
    },
    metrics: [
      { label: 'Chart Refresh Rate', value: '<50ms' },
      { label: 'Telemetry Throughput', value: '100k evt/s' },
      { label: 'Query Response', value: '18ms' },
    ],
  },
  {
    id: 'nexus-corp',
    name: 'Nexus Digital',
    tagline: 'High-Performance B2B Enterprise Marketing Website',
    category: 'Websites',
    filterCategory: 'websites',
    industry: 'Corporate Consulting & SME',
    type: 'Demo Product',
    summary:
      'A commanding, content-led corporate web presence built to establish authority, generate qualified inbound inquiries, and present client ROI.',
    description:
      'Designed to turn high-value executive prospects into qualified discovery calls with interactive capability matrixes and case-study evidence.',
    deviceType: 'browser',
    services: ['Web Development', 'CRO Strategy', 'SEO Architecture'],
    challenge:
      'Moving beyond bland corporate templates to build a authoritative, dynamic brand identity that communicates sophisticated technical capabilities.',
    solution:
      'Structured an editorial typography hierarchy with interactive ROI calculators, client outcome cards, and frictionless appointment booking.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Headless CMS'],
    features: [
      'Interactive solution selector based on company size and industry',
      'Gated whitepaper and strategy guide download modals',
      'Embedded discovery call calendar with timezone detection',
      'Automated Schema.org structured data for enterprise SEO ranking',
      'Fluid page transitions with zero cumulative layout shift (CLS)',
    ],
    architecture: {
      frontend: 'Next.js static-site generation with incremental regeneration',
      backend: 'Edge API middleware with automated CRM lead routing',
      database: 'Headless CMS with versioned content releases',
      cloud: 'Cloudflare enterprise edge deployment',
    },
    metrics: [
      { label: 'Lighthouse SEO', value: '100/100' },
      { label: 'Inbound Conversion', value: '+52%' },
      { label: 'Core Web Vitals', value: 'All Green' },
    ],
  },
];

