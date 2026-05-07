import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'twafuq',
    number: 1,
    category: 'FRONTEND',
    title: 'Twafuq Platform',
    description:
      'A polished frontend platform for modern collaboration, balancing editorial layout with engaging motion and a premium digital presence.',
    tools: ['Figma', 'React', 'GitHub', 'Vercel'],
    link: 'https://twafuq-builathon.vercel.app/',
    imageId: 'tawafuq',
  },
  {
    id: 'social-carousel',
    number: 2,
    category: 'DESIGN',
    title: 'Social Media Carousel Design',
    description:
      'A refined carousel concept for storytelling on social feeds, with a focus on rhythm, visual hierarchy, and playful navigation.',
    tools: ['Figma', 'Motion', 'Concept'],
    imageId: 'post',
  },
  {
    id: 'move-smart',
    number: 3,
    category: 'UI/UX DESIGN',
    title: 'Move Smart Mobile App',
    description:
      'A mobile product system designed for clarity and motion, blending user-centered navigation with expressive interface detail.',
    tools: ['Figma', 'Prototype', 'Design System'],
    imageId: 'ms',
    designSystem: 'ds',
    details: {
      title: 'System overview & editorial polish',
      description:
        'A mobile design system built for expressive navigation, refined typography, and elevated interaction across a calm product flow.',
      imageId: 'ds',
      highlights: [
        'Modular component language for cards, forms, and navigation.',
        'Soft tonal palette with premium contrast and minimal ornamentation.',
        'Responsive spacing that keeps interfaces airy and approachable.',
      ],
    },
  },
  {
    id: 'banking-mobile',
    number: 4,
    category: 'UI/UX DESIGN',
    title: 'Banking Mobile App UI',
    description:
      'A minimal banking interface combining premium typography, thoughtful spacing, and approachable financial interactions.',
    tools: ['Figma', 'UI Kit', 'Research'],
    imageId: 'ksu',
    designSystem: 'ksuds',
    details: {
      title: 'Design details for trust and clarity',
      description:
        'A carefully considered interface system for finance, built to feel calm, trustworthy, and highly legible on mobile screens.',
      imageId: 'ksuds',
      highlights: [
        'Consistent data hierarchy for balances, transactions, and actions.',
        'Subtle iconography and soft borders for a premium banking tone.',
        'Clear, spacious layouts to minimize cognitive load.',
      ],
    },
  },
  {
    id: 'skincare-store',
    number: 5,
    category: 'UI/UX DESIGN',
    title: 'Luxury Skincare Store Design',
    description:
      'A sensory brand experience for skincare, using soft gradients, elegant imagery, and a calm shopping journey.',
    tools: ['Figma', 'Brand', 'Animation'],
    imageId: 'skinCare',
    designSystem: 'sc',
    details: {
      title: 'Brand system and experience notes',
      description:
        'A premium visual system that blends beauty product storytelling with elegant motion, tactile textures, and user-first commerce flows.',
      imageId: 'sc',
      highlights: [
        'A warm, tactile palette to support luxury skincare storytelling.',
        'Refined typography rhythm and purposeful spacing.',
        'Focused interactions with soft hover states and subtle motion.',
      ],
    },
  },
  {
    id: 'smart-community',
    number: 6,
    category: 'DASHBOARDS',
    title: 'Smart Community Dashboard',
    description:
      'A dashboard experience built for modern communities, translating data into simplified visuals and strategic insights.',
    tools: ['React', 'Dashboard', 'Data'],
    imageId: 'SmartCommunity',
  },
  {
    id: 'naqlthon',
    number: 7,
    category: 'DASHBOARDS',
    title: 'Transportation Dashboard (Naqlthon)',
    description:
      'A transportation analytics workspace with strong information architecture and refined chart presentation for operators.',
    tools: ['React', 'Analytics', 'Design'],
    imageId: 'download',
  },
];
