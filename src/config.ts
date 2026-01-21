import dayjs from 'dayjs';

import agrexLogo from '~/public/images/agrex.png';
import datarocketsLogo from '~/public/images/datarockets-logo.jpg';
import scutiLogo from '~/public/images/scuti.png';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const FULL_NAME = 'Akira Yoshiro';

export const EMAIL = 'tzztson@gmail.com';

export const RESUME = `${SITE_URL}/resume.pdf`;

export const CAREER_START_DATE = '2017-02-01T00:00';

export const EXPERIENCE_YEARS = Math.round(
  dayjs().diff(CAREER_START_DATE, 'year', true),
);

export const WORK_EXPERIENCE = [
  {
    position: 'Senior AI / Full-Stack Engineer (Remote)',
    company: 'Berlin-based AI Solutions Company, Germany',
    image: null,
    startDate: '2024-01-01T00:00',
    endDate: '2025-12-31T00:00',
    description:
      'Designed and implemented LLM-powered applications including AI content generators, document analysis systems, and conversational assistants. Built RAG (Retrieval-Augmented Generation) pipelines combining vector databases with GPT-4 to deliver accurate, context-aware responses. Developed AI-powered PDF/book generation systems with automated layout, image generation, and multilingual support. Integrated OpenAI, Together AI, and Hugging Face APIs with cost-optimized token usage. Implemented machine learning models for natural language processing, text classification, and predictive analytics. Developed ML pipelines for data preprocessing, feature engineering, model training, and deployment. Utilized TensorFlow, PyTorch, and scikit-learn for building and training ML models. Implemented secure authentication, role-based access control, and API key management for AI platforms. Deployed scalable AI services on AWS using Docker and serverless architectures.',
  },
  {
    position: 'Full Stack Engineer',
    company: 'LOLICO',
    image: datarocketsLogo,
    startDate: '2022-06-01T00:00',
    endDate: '2024-02-01T00:00',
    description:
      'At Lolico, I had the opportunity to serve as both a team lead and an engineering manager for a team. In my role as a team lead, I maintained close communication with the client, planned upcoming work, estimated tasks, and ensured smooth operations. As an engineering manager, I prioritized team happiness and developed growth plans for engineers. Additionally, I gained experience as a technical interviewer for the hiring team. In my capacity as an engineer, I worked with various technologies including frontend, backend, desktop applications, and Debian packages. Notably, I successfully implemented a UI Kit and led the redesign of a web application.',
  },
  {
    position: 'Web3 Frontend Engineer',
    company: 'AGREX',
    image: agrexLogo,
    startDate: '2020-09-01T00:00',
    endDate: '2022-03-31T00:00',
    description:
      'At AGREX, I created a new TypeScript/Next.js/Tailwind CSS front-end application from the ground up to ensure scalability and performance. Additionally, I integrated a search feature to enhance user experience and aid in content discovery. My responsibilities also included conducting code reviews, managing source code, and delivering environment UI.',
  },
  {
    position: 'Frontend Engineer',
    company: 'SCUTI',
    image: scutiLogo,
    startDate: '2018-08-01T00:00',
    endDate: '2020-06-12T00:00',
    description:
      'At Scuti, I built a real estate service in 10 months, expanding its engineering team from 2 to 6 members. Additionally, I enhanced the core workflow engine and various API integrations with multiple external partners.',
  },
];

export const DESCRIPTION = `Software engineer mainly focused on frontend with about ${EXPERIENCE_YEARS} years of experience who always pays attention to details and thinks about the end users of a product.`;

export const GITHUB_USERNAME = 'gungho0619';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

export const TELEGRAM_USERNAME = 'gungho0619';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

export const STACK = [
  'TypeScript',
  'Next.js',
  'React',
  'Material-UI',
  'Tailwind CSS',
  'Angular',
  'Node.js',
  'ExpressJs',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'Rust',
  'Go',
  'Solidity',
  'Solana',
  'NFT MarketPlace',
  'Git/Github',
  'Python',
  'Playwright',
  'AI/ML',
  'LLM',
  'GPT-4',
  'OpenAI',
  'Together AI',
  'Hugging Face',
  'RAG',
  'Vector Databases',
  'TensorFlow',
  'PyTorch',
  'scikit-learn',
  'Machine Learning',
  'NLP',
];

export const INTERESTS = ['Chess', 'Guitar', 'Pets', 'Dancing', 'Traveling'];

export const TIME_ZONE = 'EST (UTC-5)';

export const THEME = {
  light: 'light',
  dark: 'dark',
} as const;

export const THEMES = Object.values(THEME);
