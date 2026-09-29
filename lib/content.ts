export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  width: number;
  height: number;
  services: string[];
  challenge: string;
  solution: string;
}
export interface TechnologyCategory {
  id: string;
  label: string;
  description: string;
  technologies: { name: string; mark: string; description: string }[];
}
export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'design',
    label: 'Design & experience',
    description:
      'Turn your business goals into an experience people can understand and use. We connect brand, content, and interface design before moving into development.',
    technologies: [
      {
        name: 'UI & UX design',
        mark: '01',
        description:
          'User journeys, page structure, and interface layouts shaped around the actions your customers need to take.',
      },
      {
        name: 'Responsive websites',
        mark: '02',
        description:
          'Clear navigation and adaptable layouts that make your content usable across phones, tablets, and desktops.',
      },
      {
        name: 'Brand identity',
        mark: '03',
        description:
          'A consistent visual direction across typography, colour, and digital touchpoints so your business feels recognisable.',
      },
    ],
  },
  {
    id: 'development',
    label: 'Web & applications',
    description:
      'Build the right product for your users and your team, from a business website to a custom application. We agree on features, integrations, and the technology stack around your project’s needs.',
    technologies: [
      {
        name: 'Web development',
        mark: '01',
        description:
          'Business websites and custom interfaces built with reusable components. React, TypeScript, and Tailwind CSS are part of our website toolkit.',
      },
      {
        name: 'Web & mobile apps',
        mark: '02',
        description:
          'Applications organised around real workflows, with clear screens and interactions for the tasks your users perform every day.',
      },
      {
        name: 'SaaS products',
        mark: '03',
        description:
          'Product planning and development for subscription businesses, with a defined initial scope and a foundation for future features.',
      },
    ],
  },
  {
    id: 'commerce',
    label: 'Content & commerce',
    description:
      'Give your team a practical way to publish content and sell online. We shape the editing and shopping experience around your catalogue, content, and day-to-day operations.',
    technologies: [
      {
        name: 'WordPress',
        mark: '01',
        description:
          'Custom themes, plugin configuration, and integrations that support your content and make routine updates easier to manage.',
      },
      {
        name: 'E-commerce',
        mark: '02',
        description:
          'Storefronts, product pages, and checkout journeys designed to help customers find what they need and complete a purchase.',
      },
      {
        name: 'WooCommerce',
        mark: '03',
        description:
          'Commerce within WordPress, with catalogue structure and store integrations selected around your business requirements.',
      },
    ],
  },
  {
    id: 'growth',
    label: 'Launch & growth',
    description:
      'Prepare your product for launch and plan what comes next. Hosting, discoverability, and ongoing care are scoped alongside your business priorities.',
    technologies: [
      {
        name: 'SEO & marketing',
        mark: '01',
        description:
          'Technical SEO, content structure, and digital marketing planning to help the right audience discover your business.',
      },
      {
        name: 'Hosting & domains',
        mark: '02',
        description:
          'Domain setup, hosting selection, and deployment support, with ownership, provider costs, and access agreed before launch.',
      },
      {
        name: 'Ongoing support',
        mark: '03',
        description:
          'An agreed plan for updates, fixes, and product improvements, with clear responsibilities and support coverage.',
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
    title: 'Web Development',
    description:
      'Fast, thoughtful websites and full-stack platforms. Built for your business today, engineered for what comes next.',
    category: 'BUILD',
    route: '/services/web-development',
  },
  {
    id: 'design',
    title: 'UI/UX & Web Design',
    description:
      'From first impression to final interaction. Digital experiences that feel as good as they look.',
    category: 'DESIGN',
    route: '/services/ui-ux-design',
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    description:
      'A flexible home for your content. Custom themes, plugins, WooCommerce, and integrations that work together.',
    category: 'PUBLISH',
    route: '/services/wordpress-development',
  },
  {
    id: 'apps',
    title: 'Web & Mobile Apps',
    description:
      'Your next idea, in the hands of your users. Intuitive applications built around real workflows.',
    category: 'CONNECT',
    route: '/services/app-development',
  },
  {
    id: 'saas',
    title: 'SaaS Development',
    description:
      'From product strategy to production. A considered foundation for your subscription business.',
    category: 'SCALE',
    route: '/services/saas-development',
  },
  {
    id: 'commerce',
    title: 'E-Commerce Development',
    description:
      'Less friction. Better shopping. Distinctive storefronts with seamless checkout and room to grow.',
    category: 'SELL',
    route: '/services/ecommerce-development',
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description:
      'Make your best work easier to find. Technical SEO, content foundations, and measurable growth strategies.',
    category: 'GROW',
    route: '/services/seo-digital-marketing',
  },
  {
    id: 'brand',
    title: 'Branding & Digital Infrastructure',
    description:
      'A clear identity. A reliable foundation. Branding, domains, hosting, deployment, and ongoing care.',
    category: 'ESTABLISH',
    route: '/services/branding-infrastructure',
  },
];
export const principles = [
  [
    'Product Thinking',
    'We start with the problem, the people, and what success looks like.',
  ],
  [
    'Design Excellence',
    'Every interaction earns its place. Every detail has a purpose.',
  ],
  [
    'Modern Engineering',
    'Clear code and considered tooling make better products.',
  ],
  [
    'Performance First',
    'Speed and accessibility are part of the experience, from day one.',
  ],
  [
    'Scalable Architecture',
    'A foundation that can evolve with your product and your business.',
  ],
  [
    'Long-Term Support',
    'A launch is a beginning. We help your product keep moving forward.',
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
    category: 'Fashion / E-Commerce',
    description:
      'A bold storefront for a generation that wears its personality.',
    image: 'outvibe',
    width: 1440,
    height: 798,
    services: ['Interface design', 'E-Commerce'],
    challenge:
      'Give a fashion collection a distinctive visual presence while keeping the shopping journey clear.',
    solution:
      'The supplied interface combines collection-led imagery, a focused shopping CTA, and a concise navigation.',
  },
  {
    id: 'food-and-kitchen',
    name: 'F & K',
    category: 'Food & Lifestyle / E-Commerce',
    description: 'Fresh thinking for the everyday shopping experience.',
    image: 'food-and-kitchen',
    width: 1440,
    height: 751,
    services: ['Web experience', 'E-Commerce'],
    challenge:
      'Bring food, wellness, and kitchen products together in a cohesive storefront.',
    solution:
      'The supplied design introduces the collection through warm color, expressive typography, and clear shopping and subscription entry points.',
  },
  {
    id: 'easy-travel',
    name: 'Easy Travel',
    category: 'Travel / Web Platform',
    description: 'Making the next adventure easier to discover.',
    image: 'easy-travel',
    width: 1440,
    height: 799,
    services: ['Product interface', 'Web platform'],
    challenge:
      'Make a multi-category travel search feel approachable at the first interaction.',
    solution:
      'The supplied interface groups flights, hotels, and tours around a prominent search panel with clear trip inputs.',
  },
];
